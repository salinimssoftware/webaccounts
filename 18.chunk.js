webpackJsonpac__name_([18],{

/***/ 1354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localpurchase_costallocation_routing__ = __webpack_require__(1479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_cost_tracking_component__ = __webpack_require__(1373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localpurchase_costallocation_list_component__ = __webpack_require__(1372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_popupLists_file_uploader_file_uploader_popup_module__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_pipe__ = __webpack_require__(1480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_directives_limit_decimal_module__ = __webpack_require__(570);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPurchaseCostAllocationModule", function() { return LocalPurchaseCostAllocationModule; });











var LocalPurchaseCostAllocationModule = (function () {
    function LocalPurchaseCostAllocationModule() {
    }
    return LocalPurchaseCostAllocationModule;
}());
LocalPurchaseCostAllocationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["d" /* default */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__common_popupLists_file_uploader_file_uploader_popup_module__["a" /* FileUploaderPopupModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__localpurchase_costallocation_routing__["a" /* LocalPurchaseCostAllocationRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__common_directives_limit_decimal_module__["a" /* LimitDecimalPlacesModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__vehicle_cost_tracking_component__["a" /* VehicleCostTrackingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__localpurchase_costallocation_list_component__["a" /* LocalPurchaseCostAllocationListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__search_pipe__["a" /* SearchPipe */]
        ],
    })
], LocalPurchaseCostAllocationModule);



/***/ }),

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_repositories__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_cost_tracking_service__ = __webpack_require__(1273);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalPurchaseCostAllocationListComponent; });





var LocalPurchaseCostAllocationListComponent = (function () {
    function LocalPurchaseCostAllocationListComponent(masterService, router, _vechiclecosttrackService, _alertService) {
        this.masterService = masterService;
        this.router = router;
        this._vechiclecosttrackService = _vechiclecosttrackService;
        this._alertService = _alertService;
        this.pivouchersList = [];
        this.getPIVoucherList();
    }
    LocalPurchaseCostAllocationListComponent.prototype.getPIVoucherList = function () {
        var _this = this;
        this._vechiclecosttrackService.UntrackedPIVoucherList().subscribe(function (res) {
            if (res.status == "ok") {
                _this.pivouchersList = res.result;
            }
        }, function (err) {
            _this._alertService.error(err);
        });
    };
    LocalPurchaseCostAllocationListComponent.prototype.AddNewLocalPurchaseCost = function () {
        try {
            this.router.navigate(["./pages/account/acvouchers/localpurchase-costallocation/add-costallocation", { mode: "ADD" }]);
        }
        catch (ex) {
            alert(ex);
        }
    };
    LocalPurchaseCostAllocationListComponent.prototype.onEditClick = function (event) {
        try {
            this.router.navigate(["./pages/account/acvouchers/localpurchase-costallocation/add-costallocation", { VCHRNO: event.CAPITALPURCHASE_VCHRNO, mode: "EDIT" }]);
        }
        catch (ex) {
            alert(ex);
        }
    };
    LocalPurchaseCostAllocationListComponent.prototype.onViewClick = function (event) {
        // console.log("@@event",event)
        try {
            this.router.navigate(["./pages/account/acvouchers/localpurchase-costallocation/add-costallocation", { VCHRNO: event.CAPITALPURCHASE_VCHRNO, mode: "VIEW" }]);
        }
        catch (ex) {
            alert(ex);
        }
    };
    return LocalPurchaseCostAllocationListComponent;
}());
LocalPurchaseCostAllocationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'localpurchase-cost-allocation-selector',
        template: __webpack_require__(1724),
        styles: [__webpack_require__(1723)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_repositories__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_4__vehicle_cost_tracking_service__["a" /* VehicleCostTrackingService */], __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__["a" /* AlertService */]])
], LocalPurchaseCostAllocationListComponent);



/***/ }),

/***/ 1373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_popupLists_file_uploader_file_uploader_popup_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_Transaction_Components_transaction_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vehicle_cost_tracking_service__ = __webpack_require__(1273);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleCostTrackingComponent; });








var VehicleCostTrackingComponent = (function () {
    function VehicleCostTrackingComponent(_vechiclecosttrackService, _trnMainService, _alertService, masterService, arouter, router) {
        var _this = this;
        this._vechiclecosttrackService = _vechiclecosttrackService;
        this._trnMainService = _trnMainService;
        this._alertService = _alertService;
        this.masterService = masterService;
        this.arouter = arouter;
        this.router = router;
        this.BillList = [];
        this.vehicle_costtracking = {
            AMOUNT: 0,
            ACID: "",
            ACNAME: "",
            VCHRNO: "",
            VT_NO: "",
            CAPITALPURCHASE_VCHRNO: "",
            SL_ACID: "",
            SL_ACNAME: "",
            HASSUBLEDGER: 0
        };
        this.VehicleCostTrack = {};
        this.DATA_MODE = "ADD"; // cane be ADD / VIEW / EDIT
        this.gridAccountPopupSettings = new __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridPIVoucherPopupSettings = new __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.fileUploadPopupSettings = new __WEBPACK_IMPORTED_MODULE_2__common_popupLists_file_uploader_file_uploader_popup_component__["a" /* FileUploaderPopUpSettings */]();
        this.gridCPVoucherPopupSettings = new __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridSubLedgerSetting = new __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        if (this.arouter.snapshot.params && this.arouter.snapshot.params['mode']) {
            this.DATA_MODE = this.arouter.snapshot.params['mode'];
            if (this.DATA_MODE == "VIEW" || this.DATA_MODE == "EDIT") {
                var _VCHRNO = this.arouter.snapshot.params['VCHRNO'];
                this.masterService.PIVoucherDetail(_VCHRNO).subscribe(function (res) {
                    if (res.status == "ok") {
                        if (res.result && res.result.length && res.result.length > 0) {
                            _this.BillList = res.result;
                            _this.vehicle_costtracking.VT_NO = res.result[0].VT_NO;
                            var IAmount = [];
                            for (var _i = 0, _a = _this.BillList; _i < _a.length; _i++) {
                                var i = _a[_i];
                                IAmount.push(i.AMOUNT);
                            }
                            _this.RefNoTotalAmount = _this.totalBillListTotal = IAmount.map(function (x) { return Number(x); }).reduce(function (a, b) { return a + b; }, 0);
                            if (_this.DATA_MODE == "EDIT") {
                                // this.vehicle_costtracking.VCHRNO = res.result[0].VCHRNO;
                                _this.vehicle_costtracking.CAPITALPURCHASE_VCHRNO = res.result[0].CAPITALPURCHASE_VCHRNO;
                            }
                        }
                    }
                }, function (err) {
                    _this._alertService.info(err);
                });
            }
            else {
                this.resetAll();
                this.masterService.focusAnyControl("refvoucherno");
            }
        }
    }
    VehicleCostTrackingComponent.prototype.ngOnInit = function () {
    };
    VehicleCostTrackingComponent.prototype.Save = function () {
        var _this = this;
        if (this.BillList.length == 0) {
            this._alertService.info("Please select PI Voucher.");
            return;
        }
        if (this.RefNoTotalAmount != this.totalBillListTotal) {
            this._alertService.info("Total Cost Amount not match with Ref Voucher's Total..");
            return;
        }
        if (this._trnMainService.userSetting.ENABLESUBLEDGER == 1) {
            var subledger = this.BillList.filter(function (x) { return x.HASSUBLEDGER == 1 && (x.SL_ACID == "" || x.SL_ACID == null || x.SL_ACID == undefined); });
            for (var _i = 0, subledger_1 = subledger; _i < subledger_1.length; _i++) {
                var i = subledger_1[_i];
                this._alertService.info("Please select subledger for " + i.ACNAME);
                return;
            }
        }
        this._vechiclecosttrackService.saveVehicleCostTracking(this.BillList).subscribe(function (res) {
            if (res.status == "ok") {
                _this.resetAll();
                _this._alertService.success("Data Saved Successfully");
                _this.onBackClicked();
            }
        }, function (err) {
            _this._alertService.error(JSON.parse(err._body));
        });
    };
    VehicleCostTrackingComponent.prototype.getUntrackedPIVoucherList = function () {
        var _this = this;
        this._vechiclecosttrackService.UntrackedPIVoucherList().subscribe(function (res) {
            if (res.status == "ok") {
                _this.BillList = res.result;
            }
        }, function (err) {
            _this._alertService.error(err);
        });
    };
    VehicleCostTrackingComponent.prototype.resetAll = function () {
        this.vehicle_costtracking.CAPITALPURCHASE_VCHRNO = "";
        this.vehicle_costtracking.VCHRNO = "";
        this.vehicle_costtracking.ACID = "";
        this.vehicle_costtracking.ACNAME = "";
        this.vehicle_costtracking.AMOUNT = 0;
        this.vehicle_costtracking.VT_NO = "";
        this.BillList = [];
        this.DATA_MODE = "ADD";
        this.totalBillListTotal = 0;
        this.RefNoTotalAmount = 0;
        this.vehicle_costtracking.SL_ACID = "";
        this.vehicle_costtracking.SL_ACNAME = "";
        this.vehicle_costtracking.HASSUBLEDGER = 0;
    };
    VehicleCostTrackingComponent.prototype.AccountSelect = function () {
        this.gridAccountPopupSettings = this.masterService.getGenericGridPopUpSettings('DirectAndIndirectExpenseOnly');
        this.genericGridAccount.show();
    };
    VehicleCostTrackingComponent.prototype.DblClickAccountSelect = function (value) {
        this.vehicle_costtracking.ACID = value.ACID;
        this.vehicle_costtracking.ACNAME = value.ACNAME;
        this.vehicle_costtracking.SL_ACID = "";
        this.vehicle_costtracking.SL_ACNAME = "";
        if (this._trnMainService.userSetting.ENABLESUBLEDGER == 1) {
            if (value.HASSUBLEDGER == 1) {
                this.onsubLedgerTab(value);
                this.vehicle_costtracking.HASSUBLEDGER = 1;
            }
            else {
                this.vehicle_costtracking.HASSUBLEDGER = 0;
            }
        }
        else {
            this.masterService.focusAnyControl("amount");
        }
    };
    VehicleCostTrackingComponent.prototype.onAddClick = function () {
        var _this = this;
        // if (confirm("Do you want to add new information?")) {
        if (this.vehicle_costtracking.CAPITALPURCHASE_VCHRNO == "" ||
            this.vehicle_costtracking.VCHRNO == "" ||
            this.vehicle_costtracking.ACID == "" || this.vehicle_costtracking.ACNAME == "" ||
            this.vehicle_costtracking.AMOUNT <= 0) {
            this._alertService.info("Please enter all fields.");
            return;
        }
        if (this._trnMainService.userSetting.ENABLESUBLEDGER == 1 &&
            this.vehicle_costtracking.HASSUBLEDGER == 1 &&
            (this.vehicle_costtracking.SL_ACID == null ||
                this.vehicle_costtracking.SL_ACID == "" ||
                this.vehicle_costtracking.SL_ACID == undefined)) {
            this._alertService.info("Please select subledger for " + this.vehicle_costtracking.ACNAME);
            return;
        }
        if (this.BillList.length) {
            if (this.BillList[0].CAPITALPURCHASE_VCHRNO != this.vehicle_costtracking.CAPITALPURCHASE_VCHRNO) {
                this._alertService.info("Please enter same CP voucher.");
                return;
            }
        }
        if (this.BillList.length) {
            var acid = this.BillList.filter(function (x) { return x.ACID == _this.vehicle_costtracking.ACID; });
            for (var _i = 0, acid_1 = acid; _i < acid_1.length; _i++) {
                var i = acid_1[_i];
                if (i.ACID == this.vehicle_costtracking.ACID && i.VCHRNO == this.vehicle_costtracking.VCHRNO) {
                    this._alertService.info("Duplicate Account and PI voucher detected.");
                    return;
                }
            }
        }
        var res = {};
        res.VCHRNO = this.vehicle_costtracking.VCHRNO;
        res.ACID = this.vehicle_costtracking.ACID;
        res.ACNAME = this.vehicle_costtracking.ACNAME;
        res.AMOUNT = this.vehicle_costtracking.AMOUNT;
        res.VT_NO = this.vehicle_costtracking.VT_NO;
        res.CAPITALPURCHASE_VCHRNO = this.vehicle_costtracking.CAPITALPURCHASE_VCHRNO;
        res.SL_ACID = this.vehicle_costtracking.SL_ACID;
        res.SL_ACNAME = this.vehicle_costtracking.SL_ACNAME;
        res.HASSUBLEDGER = this.vehicle_costtracking.HASSUBLEDGER;
        // let xyz = res.AMOUNT.toFixed(2);
        // res.AMOUNT=Number(xyz);
        this.BillList.push(res);
        // this.vehicle_costtracking.ACID = "";
        // this.vehicle_costtracking.ACNAME = "";
        this.vehicle_costtracking.AMOUNT = 0;
        this.vehicle_costtracking.VCHRNO = "";
        var IAmount = [];
        for (var _a = 0, _b = this.BillList; _a < _b.length; _a++) {
            var i_1 = _b[_a];
            IAmount.push(i_1.AMOUNT);
        }
        this.totalBillListTotal = IAmount.map(function (x) { return Number(x); }).reduce(function (a, b) { return a + b; }, 0);
        this.masterService.focusAnyControl("acname");
        // }
    };
    VehicleCostTrackingComponent.prototype.PIVoucherPopup = function () {
        this.gridPIVoucherPopupSettings = this.masterService.getGenericGridPopUpSettingsForAdditionalCost("AdditionalCost", "ALL");
        this.genericGridPIVoucher.show();
    };
    VehicleCostTrackingComponent.prototype.DblClickPIVoucherSelect = function (value) {
        this.vehicle_costtracking.VCHRNO = value.VCHRNO;
        this.masterService.focusAnyControl("addbutton");
    };
    VehicleCostTrackingComponent.prototype.onDeleteClick = function (i, index) {
        var _this = this;
        this._vechiclecosttrackService.PIVoucherDetailInAD(i.VCHRNO).subscribe(function (res) {
            if (res.status == "ok") {
                if (res.result == i.VCHRNO) {
                    _this._alertService.info("Additional cost is already done for this PI Voucher.");
                    return;
                }
                else {
                    _this.BillList.splice(index, 1);
                    var IAmount = [];
                    for (var _i = 0, _a = _this.BillList; _i < _a.length; _i++) {
                        var i_2 = _a[_i];
                        IAmount.push(i_2.AMOUNT);
                    }
                    _this.totalBillListTotal = IAmount.map(function (x) { return Number(x); }).reduce(function (a, b) { return a + b; }, 0);
                    _this.masterService.focusAnyControl("acname");
                }
            }
        }, function (err) {
            _this._alertService.error(err);
        });
    };
    VehicleCostTrackingComponent.prototype.ExcelUpload = function () {
        var excelfilename = "COST_ALLOCATION";
        var _sampleexcelfilename = "COST_ALLOCATION_SAMPLE";
        this.fileUploadPopupSettings = Object.assign(new __WEBPACK_IMPORTED_MODULE_2__common_popupLists_file_uploader_file_uploader_popup_component__["a" /* FileUploaderPopUpSettings */](), {
            title: "Cost Allocation Excel Upload",
            sampleFileUrl: "/downloadSampleFile/" + _sampleexcelfilename,
            uploadEndpoints: "/masterImport/" + excelfilename,
            allowMultiple: false,
            acceptFormat: ".xlsx",
            filename: "" + excelfilename,
        });
        this.fileUploadPopup.show();
    };
    VehicleCostTrackingComponent.prototype.fileUploadSuccess = function (uploadedResult) {
        var _this = this;
        this.resetAll();
        if (!uploadedResult || uploadedResult == null || uploadedResult == undefined) {
            return;
        }
        if (uploadedResult.status == "ok") {
            this.BillList = [];
            var IAmount = [];
            for (var i in uploadedResult.result) {
                var guid = null;
                var uuidV1 = __webpack_require__(32);
                guid = uuidV1();
                var newRow = {};
                newRow.VCHRNO = uploadedResult.result[i].purchasE_INVOICE_NO ? uploadedResult.result[i].purchasE_INVOICE_NO : "";
                newRow.ACID = uploadedResult.result[i].accounT_ID ? uploadedResult.result[i].accounT_ID : "";
                newRow.ACNAME = uploadedResult.result[i].accounT_NAME ? uploadedResult.result[i].accounT_NAME : "";
                newRow.AMOUNT = uploadedResult.result[i].amount;
                newRow.CAPITALPURCHASE_VCHRNO = uploadedResult.result[i].capitalpurchasE_VCHRNO ? uploadedResult.result[i].capitalpurchasE_VCHRNO : "";
                newRow.REFVOUCHER_TOTAL = uploadedResult.result[i].refvoucheR_TOTAL;
                newRow.SL_ACID = uploadedResult.result[i].sL_ACID ? uploadedResult.result[i].sL_ACID : "";
                newRow.SL_ACNAME = uploadedResult.result[i].sL_ACNAME ? uploadedResult.result[i].sL_ACNAME : "";
                this.BillList.push(newRow);
                IAmount.push(newRow.AMOUNT);
            }
            this.totalBillListTotal = IAmount.map(function (x) { return Number(x); }).reduce(function (a, b) { return a + b; }, 0);
            this.vehicle_costtracking.CAPITALPURCHASE_VCHRNO = this.BillList && this.BillList.length && this.BillList[0].CAPITALPURCHASE_VCHRNO;
            this.RefNoTotalAmount = this.BillList && this.BillList.length && this.BillList[0].REFVOUCHER_TOTAL;
            // this.vehicle_costtracking.VCHRNO = this.BillList && this.BillList.length && this.BillList[0].VCHRNO;
        }
        else {
            this._alertService.error(uploadedResult.result);
            var _errorexcelfilename = "COST_ALLOCATION_ERROR";
            if (uploadedResult.result != "Total Cost Amount not match with Ref Voucher's Total.") {
                this.masterService.downloadErrorFile("/downloadSampleFile/" + _errorexcelfilename, _errorexcelfilename)
                    .subscribe(function (data) {
                    data.filename = _errorexcelfilename + ".xlsx";
                    _this.downloadFile(data);
                }, function (error) {
                    _this._alertService.error(error);
                });
            }
        }
    };
    VehicleCostTrackingComponent.prototype.downloadFile = function (response) {
        var element = document.createElement("a");
        element.href = URL.createObjectURL(response.content);
        element.download = response.filename;
        document.body.appendChild(element);
        element.click();
    };
    VehicleCostTrackingComponent.prototype.CPVoucherPopup = function () {
        this.gridCPVoucherPopupSettings = this.masterService.getGenericGridPopUpSettings("CPJV", "CP");
        this.genericGridCPVoucher.show();
    };
    VehicleCostTrackingComponent.prototype.DblClickCPVoucherSelect = function (value) {
        this.vehicle_costtracking.CAPITALPURCHASE_VCHRNO = value.VCHRNO;
        this.RefNoTotalAmount = value.NETAMNT;
        this.masterService.focusAnyControl("acname");
    };
    VehicleCostTrackingComponent.prototype.onBackClicked = function () {
        this.router.navigate(["/pages/account/acvouchers/localpurchase-costallocation"]);
    };
    VehicleCostTrackingComponent.prototype.onAmountEnter = function () {
        this.masterService.focusAnyControl("pivchrno");
    };
    VehicleCostTrackingComponent.prototype.keyPress = function (event) {
        if (event.key != "Enter" && event.key != "Tab") {
            event.preventDefault();
        }
    };
    VehicleCostTrackingComponent.prototype.onsubLedgerTab = function (i) {
        this.gridSubLedgerSetting = {
            title: "SubLedger List",
            apiEndpoints: "/getSubLedgerPageList",
            defaultFilterIndex: 1,
            columns: [
                {
                    key: "SL_ACID",
                    title: "SubLedger ID",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "SL_ACNAME",
                    title: "SubLedger Name",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
        this.gridSubLedgerSettingList.show();
    };
    VehicleCostTrackingComponent.prototype.onSubLedgerSelect = function (value) {
        this.vehicle_costtracking.SL_ACID = value.SL_ACID;
        this.vehicle_costtracking.SL_ACNAME = value.SL_ACNAME;
        this.masterService.focusAnyControl("amount");
    };
    VehicleCostTrackingComponent.prototype.handleKeyDownboardEvent = function ($event) {
        if ($event.code == "F3") {
            $event.preventDefault();
            this.resetAll();
        }
        else if ($event.code == "F10") {
            $event.preventDefault();
            this.onBackClicked();
        }
        else if ($event.code == "F6") {
            $event.preventDefault();
            if (this.DATA_MODE != 'VIEW') {
                this.Save();
            }
        }
    };
    return VehicleCostTrackingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridAccount"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], VehicleCostTrackingComponent.prototype, "genericGridAccount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridPIVoucher"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], VehicleCostTrackingComponent.prototype, "genericGridPIVoucher", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fileUploadPopup"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__common_popupLists_file_uploader_file_uploader_popup_component__["b" /* FileUploaderPopupComponent */])
], VehicleCostTrackingComponent.prototype, "fileUploadPopup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridCPVoucher"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], VehicleCostTrackingComponent.prototype, "genericGridCPVoucher", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("gridSubLedgerSettingList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], VehicleCostTrackingComponent.prototype, "gridSubLedgerSettingList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], VehicleCostTrackingComponent.prototype, "handleKeyDownboardEvent", null);
VehicleCostTrackingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vehiclecost-tracking',
        template: __webpack_require__(1726),
        styles: [__webpack_require__(1725)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__vehicle_cost_tracking_service__["a" /* VehicleCostTrackingService */],
        __WEBPACK_IMPORTED_MODULE_6__common_Transaction_Components_transaction_service__["a" /* TransactionService */],
        __WEBPACK_IMPORTED_MODULE_5__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_4__common_repositories__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
], VehicleCostTrackingComponent);



/***/ }),

/***/ 1479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_cost_tracking_component__ = __webpack_require__(1373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localpurchase_costallocation_list_component__ = __webpack_require__(1372);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalPurchaseCostAllocationRoutingModule; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__localpurchase_costallocation_list_component__["a" /* LocalPurchaseCostAllocationListComponent */] },
    { path: 'add-costallocation', component: __WEBPACK_IMPORTED_MODULE_2__vehicle_cost_tracking_component__["a" /* VehicleCostTrackingComponent */] },
];
var LocalPurchaseCostAllocationRoutingModule = (function () {
    function LocalPurchaseCostAllocationRoutingModule() {
    }
    return LocalPurchaseCostAllocationRoutingModule;
}());
LocalPurchaseCostAllocationRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], LocalPurchaseCostAllocationRoutingModule);



/***/ }),

/***/ 1480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (data, query) {
        if (data) {
            if (query) {
                return data.filter(function (item) {
                    var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                    var comId = (item.CAPITALPURCHASE_VCHRNO) ? (item.CAPITALPURCHASE_VCHRNO).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                    if (comId.indexOf(searchedQuery) !== -1) {
                        return item;
                    }
                });
            }
            else {
                return data;
            }
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'searchData', pure: false })
], SearchPipe);



/***/ }),

/***/ 1723:
/***/ (function(module, exports) {

module.exports = ".card-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.card-header::after {\r\n  display: none;\r\n}\r\n\r\n.card-body {\r\n  padding: 5px !important;\r\n  max-height: 455px !important;\r\n}\r\n\r\n.main-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 60px 0px;\r\n\r\n}\r\n\r\n.scroll-touch {\r\n  -webkit-overflow-scrolling: touch !important;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  padding: 0.10rem !important;\r\n}\r\n\r\n.sticky-top {\r\n  margin-top: 60px;\r\n  height: 100vh;\r\n}\r\n\r\ntbody {\r\n  display: block;\r\n  height: 59vh;\r\n  overflow: auto;\r\n}\r\n\r\nthead,\r\ntbody tr {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  /* even columns width , fix width of table too*/\r\n}\r\n\r\nth {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  font-family: Roboto, Arial, sans-serif;\r\n\r\n}\r\n\r\ntd {\r\n  font-size: 13px;\r\n  font-family: Roboto, Arial, sans-serif;\r\n\r\n}\r\n\r\n.btn-sm {\r\n  line-height: 3px;\r\n}\r\n\r\n.table tbody tr td {\r\n  line-height: 24px;\r\n}\r\n\r\n.btn-info {\r\n  margin: auto 1px;\r\n}\r\n\r\n\r\n.card-header {\r\n  padding: 10px 20px;\r\n}\r\n\r\n.searchBy {\r\n  font-size: 13px;\r\n  margin-left: 18rem;\r\n}\r\n\r\n.form-control {\r\n  font-size: 13px !important;\r\n}"

/***/ }),

/***/ 1724:
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\" style=\"padding-top: 10px;\">\r\n    <div class=\"col-md-4\">\r\n        <h5 style=\"font-weight: bold;font-size: 1.1rem;\"> Local Purchase Cost Allocation </h5>\r\n\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <button type=\"button\" class=\"btn btn-info pull pull-right\" style=\"font-size: 12px;\"\r\n            (click)=\"AddNewLocalPurchaseCost()\">Add Local Purchase Cost</button>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"align-items: center;\">\r\n    <div class=\"col-md-12 col-sm-8\" style=\"margin-top:0.5rem\">\r\n\r\n        <div class=\"card\" style=\"margin: auto; width: 63rem;\">\r\n            <div class=\"card-header\">\r\n\r\n                <span class=\"col-md-6\">Local Purchase Cost Allocation </span>\r\n                <div style=\"margin-left: 15rem;\">\r\n                    <input type=\"text\" name=\"search\" [(ngModel)]=\"filter\" #searchFilter=\"ngModel\" class=\"form-control\" placeholder=\"Search...\" style=\"width: 15rem; height: 1.7rem; padding: 0px 6px;\" autocomplete=\"off\">\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr style=\"position: sticky; top:0;line-height: 1.5rem;\">\r\n                            <th scope=\"col\" style=\"width:3%\">S.N</th>\r\n                            <th scope=\"col\" style=\"width:40%\">Ref Voucher No</th>\r\n                            <th scope=\"col\" style=\"width:40%\">Total Amount</th>\r\n                            <th scope=\"col\" style=\"text-align:center;width:18%\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-container>\r\n                            <tr *ngFor=\"let vchrno of pivouchersList |searchData:filter; let i=index\">\r\n                                <td style=\"width:3%;\">{{i+1}}</td>\r\n                                <td style=\"width:40%;\">{{vchrno.CAPITALPURCHASE_VCHRNO}}</td>\r\n                                <td style=\"width:40%;\">{{vchrno.TOTALAMOUNT | number : '1.2-2'}}</td>\r\n                                <td style=\"width:18%;text-align: center;\">\r\n                                    <button style=\"width: 60px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\"\r\n                                        data-toggle=\"modal\" (click)=\"onViewClick(vchrno)\">View</button>\r\n                                    <button style=\"width: 60px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\"\r\n                                        data-toggle=\"modal\" (click)=\"onEditClick(vchrno)\">Edit</button>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"pivouchersList && pivouchersList.length === 0\">\r\n                            <tr>\r\n                                <td colspan=\"3\">\r\n                                    <div class=\"font-weight-bold\">Local Purchase Cost Allocation Data are unavailable.\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1725:
/***/ (function(module, exports) {

module.exports = ".modal-content {\r\n  padding: 1px;\r\n  margin: 0px;\r\n  float: right;\r\n}\r\n\r\n.table-scroll {\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntbody>tr:hover {\r\n  background-color: #f3f5f4;\r\n  cursor: pointer;\r\n}\r\n\r\ntr {\r\n  font-size: 11px;\r\n}\r\n\r\n.selected-row {\r\n  background-color: #ced6d3 !important;\r\n}\r\n\r\ntd {\r\n  padding: 2px;\r\n  border: 1px solid #ddd;\r\n  white-space: nowrap !important;\r\n}\r\n\r\nth {\r\n  padding: 0 10px;\r\n  border: 1px solid #ddd;\r\n  font-size: 14px;\r\n  width: 10%;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.modal-sticky {\r\n  position: fixed;\r\n  bottom: 65px;\r\n  right: 38%;\r\n  width: 115%;\r\n  height: 76%;\r\n  z-index: 2;\r\n  top: 10%;\r\n\r\n}\r\n\r\n/* .modal-content{\r\n    width: 52% !important;\r\n  } */\r\n@media screen and (max-width:1400px) {\r\n  .modal-sticky {\r\n    right: 45% !important;\r\n\r\n  }\r\n\r\n  .container .row .modal-sticky .modal-content {\r\n    width: 47% !important;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n.input {\r\n  width: 80%\r\n}\r\n\r\ntd {\r\n  line-height: 0px !important;\r\n  height: 26px\r\n}\r\n\r\n.table>tbody>tr>td {\r\n  border-top: 0px solid gainsboro !important;\r\n}\r\n\r\n.TopMargin {\r\n  Margin-Top: 10px\r\n}\r\n\r\n.table>tbody>tr>td:first-child {\r\n  text-align: left !important;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\nlabel {\r\n  height: 21px;\r\n  font-weight: normal;\r\n  margin: 2px;\r\n  vertical-align: middle;\r\n  font-size: 13px;\r\n  padding-top: 6px;\r\n}\r\n\r\n.headindTable td {\r\n\r\n  border: none;\r\n}\r\n\r\n.headindTable input {\r\n  height: 23px;\r\n  margin-top: 7px;\r\n  margin-bottom: 7px;\r\n}\r\n.tablebody td{\r\n  position: relative;\r\n}\r\n.pidetail-class {\r\n  top: 10%;\r\n  display: block;\r\n  position: absolute;\r\n  left: 134%;\r\n  width: 99%;\r\n  z-index: 9999999;\r\n  background: white;\r\n  margin-top: 26px;\r\n}\r\n\r\n.pidetail-class td {\r\n  padding: 10px;\r\n}\r\n\r\n.headindTable .pd-r {\r\n  padding-right: 20px;\r\n}\r\n\r\ntd:hover .tooltips {\r\n  opacity: 1;\r\n  visibility: visible;\r\n\r\n\r\n}\r\n\r\n.tableBorder {\r\n  position: relative !important;\r\n}\r\n\r\n.tooltips {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n\r\n  transition: 0.3s ease-in-out;\r\n  position: absolute;\r\n  top: 23px;\r\n  background: #000;\r\n  padding: 0 5px;\r\n  border-radius: 5px;\r\n  font-size: 12px !important;\r\n  z-index: 999999;\r\n}\r\n\r\n.tooltips p {\r\n  color: #fff !important;\r\n  margin-bottom: 0;\r\n  font-size: 11px;\r\n  line-height: 1.8;\r\n}\r\n\r\n.showTooltips:hover .tooltips {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.showTooltips:hover .tooltips:after {\r\n  display: block;\r\n}\r\n\r\n@media screen and (max-width:1400px) {\r\n\r\n  .pidetail-class {\r\n    left: 118%;\r\n\r\n  }\r\n}"

/***/ }),

/***/ 1726:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: 10px;\">\r\n    <div class=\"col-lg-6\">\r\n        <h4 style=\"color: black; text-transform: capitalize; padding-left: 15px;\">Local Purchase Cost Allocation &nbsp;\r\n            >> {{DATA_MODE }}</h4>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <button style=\"margin: 0px 4px;\" (click)=\"onBackClicked()\" class=\"btn btn-info pull-right\">\r\n            F10 BACK\r\n        </button>\r\n        <button #reset style=\"margin: 0px 4px;\" (click)=\"resetAll()\" class=\"btn btn-info pull-right\">\r\n            F3 RESET\r\n        </button>\r\n        <button style=\"margin: 0px 4px;\" (click)=\"ExcelUpload()\" class=\"btn btn-info pull-right\"\r\n            [disabled]=\"DATA_MODE=='VIEW' || DATA_MODE=='EDIT'\">\r\n            Load From Excel\r\n        </button>\r\n        <button style=\"margin: 0px 4px;\" (click)=\"Save()\" class=\"btn btn-info pull-right\"\r\n            [disabled]=\"DATA_MODE=='VIEW'\">\r\n            F6 SAVE\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\" col-lg-12 \" style=\" padding: 0px;margin-top: 10px;\">\r\n            <!-- Modal content -->\r\n            <div class=\"modal-content\" style=\"background-color: #fff; border: 1px solid #ddd; width: 100%;\">\r\n                <div class=\"modal-header\" style=\"padding: 0px;background: #f1f1f1;;\">\r\n                    <h4 class=\"modal-title\" style=\"text-align: center;    background-color: #8cccfb; padding: 3px 0;\">\r\n                        Local Purchase Cost Allocation\r\n                    </h4>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <table class=\"headindTable\" style=\"width:100%\">\r\n                        <tr>\r\n                            <td>Ref No:</td>\r\n                            <td class=\"pd-r\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"refvoucherno\"\r\n                                    [(ngModel)]=\"vehicle_costtracking.CAPITALPURCHASE_VCHRNO\"\r\n                                    (keydown.Enter)=\"CPVoucherPopup()\" autocomplete=\"off\"\r\n                                    placeholder=\"Press Enter to Select\" [disabled]=\"this.BillList.length\"\r\n                                    (keydown)=\"keyPress($event)\">\r\n                            </td>\r\n                            <td>Account :</td>\r\n                            <td class=\"pd-r\">\r\n                                <input type=\"text\" id=\"acname\" class=\"form-control\"\r\n                                    [(ngModel)]=\"vehicle_costtracking.ACNAME\" (keydown.Enter)=\"AccountSelect()\"\r\n                                    autocomplete=\"off\" placeholder=\"Press Enter to Select\"\r\n                                    [disabled]=\"DATA_MODE=='VIEW'\" (keydown)=\"keyPress($event)\">\r\n                                    <ng-container *ngIf=\"_trnMainService.userSetting.ENABLESUBLEDGER==1 && vehicle_costtracking.ACNAME && DATA_MODE!='VIEW' \">\r\n                                        <div style=\"display: flex;\"  >\r\n                                               <div class=\"tooltips\">\r\n                                                <p *ngIf=\"vehicle_costtracking.SL_ACNAME\">Sub Ledger :</p>\r\n                                                <p>{{vehicle_costtracking.SL_ACNAME}}</p>\r\n                                               </div>\r\n                                          </div>\r\n                                    </ng-container>\r\n                            </td>\r\n                            <td>Amount :</td>\r\n                            <td class=\"pd-r\">\r\n                                <input type=\"number\" id=\"amount\" class=\"form-control\"\r\n                                    [(ngModel)]=\"vehicle_costtracking.AMOUNT\" [disabled]=\"DATA_MODE=='VIEW'\"\r\n                                    (keydown.Enter)=\"onAmountEnter()\" decimalPlacesRestriction=\"2\">\r\n                            </td>\r\n                            <td>PI No:</td>\r\n                            <td class=\"pd-r\">\r\n                                <input type=\"text\" id=\"pivchrno\" class=\"form-control\"\r\n                                    [(ngModel)]=\"vehicle_costtracking.VCHRNO\" (keydown.Enter)=\"PIVoucherPopup()\"\r\n                                    autocomplete=\"off\" placeholder=\"Press Enter to Select\"\r\n                                    [disabled]=\"DATA_MODE=='VIEW'\" (keydown)=\"keyPress($event)\">\r\n                            </td>\r\n                            <button class=\"btn btn-info btn-add-focus\" id=\"addbutton\"\r\n                                style=\"margin-top: 7px !important;\" (click)=\"onAddClick()\"\r\n                                [disabled]=\"DATA_MODE=='VIEW'\">ADD</button>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"overflow: scroll;max-height: 60vh;height:60vh;\">\r\n                    <table style=\"width:100%\">\r\n                        <tr style=\"background-color:#8cccfb;    font-size: 13px; position: sticky;top: -1px;\r\n        font-weight: bolder;\r\n        height: 25px;\">\r\n                            <th>Ref No</th>\r\n                            <th>Account</th>\r\n                            <th>Amount</th>\r\n                            <th>PI Voucherno</th>\r\n                            <th></th>\r\n                        </tr>\r\n                        <tbody *ngFor=\"let i of BillList; let index = index\" class=\"tablebody\">\r\n                            <tr style=\"font-size: 12px;\">\r\n                                <td style=\"padding-left: 3px;\">{{i.CAPITALPURCHASE_VCHRNO}}</td>\r\n                                <td style=\"padding-left: 3px;\">{{i.ACNAME}}\r\n                                    <div class=\"tooltips\">\r\n                                        <p *ngIf=\"i.SL_ACID\">Sub Ledger :</p>\r\n                                        <p>{{i.SL_ACNAME}}</p>\r\n                                     </div>\r\n                                </td>\r\n                                <td style=\"text-align: right;padding-right: 3px;\">{{i.AMOUNT | number : '1.2-2'}}</td>\r\n                                <td style=\"padding-left: 3px;\">{{i.VCHRNO}}</td>\r\n                                <td style=\"text-align: center;\"><button class=\"btn btn-info btn-add-danger\"\r\n                                        (click)=\"onDeleteClick(i,index)\" [disabled]=\"DATA_MODE=='VIEW'\">Remove</button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <table style=\"width:100%\">\r\n                        <tr style=\"font-size: 14.5px;font-weight: bolder;height: 25px;\">\r\n                            <td style=\"width: 30%;    padding-top: 5px;\r\n                    padding-bottom: 10px;\r\n                    border: none;\">\r\n                                <p>Ref No Total Amount : {{RefNoTotalAmount | number : '1.2-2'}}</p>\r\n                            </td>\r\n                            <td style=\"border:none;width: 10%;\">\r\n                                <p>Total Amount : {{totalBillListTotal | number : '1.2-2'}}</p>\r\n                            </td>\r\n                            <td style=\"border:none;width:20%\"></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<generic-popup-grid #genericGridCPVoucher [popupsettings]=\"gridCPVoucherPopupSettings\"\r\n    (onItemDoubleClick)=\"DblClickCPVoucherSelect($event)\"></generic-popup-grid>\r\n\r\n<generic-popup-grid #genericGridAccount [popupsettings]=\"gridAccountPopupSettings\"\r\n    (onItemDoubleClick)=\"DblClickAccountSelect($event)\"></generic-popup-grid>\r\n\r\n<generic-popup-grid #genericGridPIVoucher [popupsettings]=\"gridPIVoucherPopupSettings\"\r\n    (onItemDoubleClick)=\"DblClickPIVoucherSelect($event)\"></generic-popup-grid>\r\n\r\n<generic-popup-grid #gridSubLedgerSettingList [popupsettings]=\"gridSubLedgerSetting\"\r\n  (onItemDoubleClick)=\"onSubLedgerSelect($event)\"></generic-popup-grid>\r\n\r\n<file-uploader-popup #fileUploadPopup [popupsettings]=\"fileUploadPopupSettings\"\r\n    (onUploaded)=\"fileUploadSuccess($event)\">\r\n</file-uploader-popup>"

/***/ })

});
//# sourceMappingURL=18.chunk.js.map