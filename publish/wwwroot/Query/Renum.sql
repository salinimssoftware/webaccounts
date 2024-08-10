CREATE OR ALTER   PROCEDURE ACCOUNTVOUCHER_RENUMERING  
(  
    @VOUCHERTYPE VARCHAR(10),  
    @PHISCALID VARCHAR(5),  
    @DIVISION VARCHAR(3),  
    @VOUCHERPREFIX VARCHAR(5),
	@User VARCHAR(200)
)  
AS  
BEGIN

--SET @VOUCHERTYPE = 'PV'; SET @PHISCALID = '79/80'; SET @DIVISION = 'MMX'; SET @VOUCHERPREFIX = 'PV';
DECLARE @Old_vchrno NVARCHAR(50)
DECLARE @New_vchrno NVARCHAR(50)
DECLARE @Counter INT
DECLARE @VOUCHERPREFIXCHECK VARCHAR(5) = @VOUCHERPREFIX+'%';
SET @Counter = 1
    -- Step 1: Add columns if they do not exist
    IF NOT EXISTS(SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'ACCMAIN' AND COLUMN_NAME = 'old_vchrno')
        ALTER TABLE ACCMAIN ADD old_vchrno VARCHAR(100);

    IF NOT EXISTS(SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'ACCMAIN' AND COLUMN_NAME = 'new_vchrno')
        ALTER TABLE ACCMAIN ADD new_vchrno VARCHAR(100);

		IF NOT EXISTS(SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'ACCMAIN' AND COLUMN_NAME = 'EditedRenumUser')
        ALTER TABLE ACCMAIN ADD EditedRenumUser VARCHAR(100) not null;

		IF NOT EXISTS(SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'ACCMAIN' AND COLUMN_NAME = 'EditedRenumDate')
        ALTER TABLE ACCMAIN ADD EditedRenumDate datetime default getdate();

    IF NOT EXISTS(SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'ACCTRAN' AND COLUMN_NAME = 'old_vchrno')
        ALTER TABLE ACCTRAN ADD old_vchrno VARCHAR(100);

    IF NOT EXISTS(SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'RMD_JOURNAL' AND COLUMN_NAME = 'old_vchrno')
        ALTER TABLE RMD_JOURNAL ADD old_vchrno VARCHAR(100);

    -- Step 2: Create and populate temporary tables
    IF OBJECT_ID('tempdb..##accmain_temp') IS NOT NULL
        DROP TABLE ##accmain_temp;

    IF OBJECT_ID('tempdb..##ACCTRAN_temp') IS NOT NULL
        DROP TABLE ##ACCTRAN_temp;

    IF OBJECT_ID('tempdb..##RMD_JOURNAL_temp') IS NOT NULL
        DROP TABLE ##RMD_JOURNAL_temp;

    SELECT *
    INTO ##accmain_temp
    FROM accmain
    WHERE VoucherType = @VOUCHERTYPE AND PhiscalID =@PHISCALID AND VCHRNO LIKE @VOUCHERPREFIXCHECK;

    SELECT * 
    INTO ##ACCTRAN_temp
    FROM ACCTRAN
    WHERE VoucherType = @VOUCHERTYPE AND PhiscalID = @PHISCALID AND VCHRNO LIKE @VOUCHERPREFIXCHECK;

    SELECT * 
    INTO ##RMD_JOURNAL_temp
    FROM RMD_JOURNAL
    WHERE VoucherType = @VOUCHERTYPE AND PhiscalID = @PHISCALID AND VCHRNO LIKE @VOUCHERPREFIXCHECK;

    -- Step 3: Create and populate ordered temporary table
    IF OBJECT_ID('tempdb..##accmain_temp_ordered') IS NOT NULL
        DROP TABLE ##accmain_temp_ordered;

    ;WITH OrderedTempTable AS (
        SELECT *, ROW_NUMBER() OVER (ORDER BY TRN_DATE ASC) AS rn
        FROM ##accmain_temp
    )
    SELECT *
    INTO ##accmain_temp_ordered
    FROM OrderedTempTable
    ORDER BY rn;
	
    -- Step 4: Update old_vchrno columns
    UPDATE ##accmain_temp_ordered SET old_vchrno = VCHRNO;
    UPDATE ##ACCTRAN_temp SET old_vchrno = VCHRNO;
    UPDATE ##RMD_JOURNAL_temp SET old_vchrno = VCHRNO;
	UPDATE ##accmain_temp_ordered SET EditedRenumUser = @User;
	UPDATE ##accmain_temp_ordered SET EditedRenumDate = GETDATE();
    -- Step 6: Update New_vchrno values
DECLARE cur CURSOR FOR
SELECT old_vchrno
FROM ##accmain_temp_ordered

-- Open the cursor
OPEN cur

-- Fetch the first row
FETCH NEXT FROM cur INTO @Old_vchrno

-- Start the loop
WHILE @@FETCH_STATUS = 0
BEGIN

    -- Determine the New_vchrno based on the current @Counter
    SET @New_vchrno = (
  SELECT 
    CAST(@VOUCHERPREFIX AS VARCHAR(50)) + CAST(rn AS VARCHAR(20)) + '-' + @DIVISION + '-' + CAST(@PHISCALID AS VARCHAR(20))
FROM ##accmain_temp_ordered
        ORDER BY TRN_DATE
        OFFSET (@Counter - 1) ROWS
        FETCH NEXT 1 ROW ONLY
    )

    -- Update ##accmain_temp_ordered with the New_vchrno
    UPDATE ##accmain_temp_ordered
    SET New_vchrno = @New_vchrno
    WHERE old_vchrno = @Old_vchrno

    -- Increment the counter and fetch the next row
    SET @Counter = @Counter + 1
    FETCH NEXT FROM cur INTO @Old_vchrno
END

CLOSE cur
DEALLOCATE cur


    -- Step 7: Update VCHRNO in ##accmain_temp_ordered

    UPDATE ##accmain_temp_ordered SET VCHRNO = New_vchrno;
	select * from ##accmain_temp_ordered
    -- Step 8: Update ##ACCTRAN_temp and ##RMD_JOURNAL_temp with explicit collation
    UPDATE A
    SET A.VCHRNO = B.old_vchrno
    FROM ##ACCTRAN_temp AS A
    INNER JOIN ##accmain_temp_ordered AS B
    ON A.old_vchrno COLLATE DATABASE_DEFAULT = B.old_vchrno COLLATE DATABASE_DEFAULT;

    UPDATE R
    SET R.VCHRNO = B.old_vchrno
    FROM ##RMD_JOURNAL_temp AS R
    INNER JOIN ##accmain_temp_ordered AS B
    ON R.old_vchrno COLLATE DATABASE_DEFAULT = B.old_vchrno COLLATE DATABASE_DEFAULT;
END;
