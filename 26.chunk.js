webpackJsonpac__name_([26],{

/***/ 1348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_Transaction_Components_transaction_module__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_directives_limit_decimal_module__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__VoucherTracking_VoucherTracking_module__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_popupLists_report_filter_report_filter_module__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_date_picker_date_picker_module__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_nepali_date_picker_nepali_date_picker_module__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__EPaymentStatusMaster_component__ = __webpack_require__(1366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__EPaymentStatus_component__ = __webpack_require__(1463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__EPaymentStatus_route__ = __webpack_require__(1464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPaymentStatusModule", function() { return EPaymentStatusModule; });















var EPaymentStatusModule = (function () {
    function EPaymentStatusModule() {
    }
    return EPaymentStatusModule;
}());
EPaymentStatusModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__["e" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__common_Transaction_Components_transaction_module__["a" /* TransactionModule */],
            __WEBPACK_IMPORTED_MODULE_4__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__common_directives_limit_decimal_module__["a" /* LimitDecimalPlacesModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__VoucherTracking_VoucherTracking_module__["a" /* VoucherTrackingPopupModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__common_popupLists_report_filter_report_filter_module__["a" /* ReportFilterModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__common_date_picker_date_picker_module__["a" /* IMSDatePickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__common_nepali_date_picker_nepali_date_picker_module__["a" /* NepaliDatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_14__EPaymentStatus_route__["a" /* EPaymentStatustRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__EPaymentStatus_component__["a" /* EPaymentStatusComponent */], __WEBPACK_IMPORTED_MODULE_12__EPaymentStatusMaster_component__["a" /* EPaymentStatusMasterComponent */]
        ],
    })
], EPaymentStatusModule);



/***/ }),

/***/ 1366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Transaction_Components_transaction_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_setting_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_permission__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EPaymentStatusMasterComponent; });











// import { EnableLatePostService } from "./EnableLatePost.service";
var EPaymentStatusMasterComponent = (function () {
    function EPaymentStatusMasterComponent(_trnMainService, masterService, setting, _activatedRoute, _loadingSerive, _alertService, _authService
        // private _enableLatePostService : EnableLatePostService
    ) {
        this._trnMainService = _trnMainService;
        this.masterService = masterService;
        this.setting = setting;
        this._activatedRoute = _activatedRoute;
        this._loadingSerive = _loadingSerive;
        this._alertService = _alertService;
        this._authService = _authService;
        this.Date = {};
        this.LObj = {};
        this.voucherList = [];
        this.prefixessubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["BehaviorSubject"]([]);
        this.prefixesObservable$ = this.prefixessubject.asObservable();
        this.gridACListPopupSettings = new __WEBPACK_IMPORTED_MODULE_9__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.ticks = 0;
        this.LatePostSaveObj = {};
        this.merchantdataList = [];
        this.userSetting = this._authService.getSetting();
        this.userProfile = this._authService.getUserProfile();
        this.voucherList = [];
    }
    EPaymentStatusMasterComponent.prototype.ngOnInit = function () {
        document.getElementById("L_FromDate").focus();
        if (this._activatedRoute.snapshot['_routerState'].url) {
            this.returnUrl = this._activatedRoute.snapshot['_routerState'].url;
        }
        this.LObj.VTYPE = "JOURNAL VOUCHER";
        this.voucherType = 12;
        this.LoadVoucherPrefix(this.voucherType);
        this.Date.FDate = this.masterService.PhiscalObj.BeginDate.split('T')[0];
        this.ChangeDate(this.Date.FDate, "AD", "FromAD");
        this.Date.TDate = this.masterService.PhiscalObj.EndDate.split('T')[0];
        this.ChangeDate1(this.Date.TDate, "AD", "ToAD");
        this.startTimer();
    };
    EPaymentStatusMasterComponent.prototype.startTimer = function () {
        var _this = this;
        try {
            var timer = __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].timer(1, 1800000);
            this.sub = timer.subscribe(function (t) {
                _this.ticks = t;
                _this.OnLoadClick();
            });
        }
        catch (ex) { }
    };
    EPaymentStatusMasterComponent.prototype.ChangeDate = function (value, format, DName) {
        ////console.log("CheckDate", value, format, DName)
        var adbs = __webpack_require__(19);
        var newDate;
        if (format == "AD") {
            var yearValue = __WEBPACK_IMPORTED_MODULE_7_moment__(value).year();
            if (yearValue.toString().length == 4) {
                var adDate = (value.replace("-", "/")).replace("-", "/");
                var bsDate = adbs.ad2bs(adDate);
                bsDate.en.month = bsDate.en.month <= 9 ? "0" + (bsDate.en.month) : bsDate.en.month;
                var DateValue = this.masterService.toBSDate(value);
                DName == 'FromAD' ? this.Date.BS_FDate = DateValue : this.Date.BS_TDate = DateValue;
            }
        }
        else if (format == "BS") {
            var datearr = value.split('/');
            var bsDate_1 = datearr[2] + "/" + datearr[1] + "/" + datearr[0];
            // var bsDate = (value.replace("-", "/")).replace("-", "/");
            var adDate = adbs.bs2ad(bsDate_1);
            var DateValue = newDate = this.masterService.toADDate(value);
            DName == "FromBS" ? this.Date.FDate = DateValue : this.Date.TDate = DateValue;
        }
        this.ValidateBSDATE(newDate, "DATE3", "TRNDATE");
    };
    EPaymentStatusMasterComponent.prototype.ChangeDate1 = function (value, format, DName) {
        ////console.log("CheckDate", value, format, DName)
        var adbs = __webpack_require__(19);
        var newDate;
        if (format == "AD") {
            var yearValue = __WEBPACK_IMPORTED_MODULE_7_moment__(value).year();
            if (yearValue.toString().length == 4) {
                var adDate = (value.replace("-", "/")).replace("-", "/");
                var bsDate = adbs.ad2bs(adDate);
                bsDate.en.month = bsDate.en.month <= 9 ? "0" + (bsDate.en.month) : bsDate.en.month;
                var DateValue = newDate = this.masterService.toBSDate(value);
                DName == 'ToAD' ? this.Date.BS_TDate = DateValue : this.Date.BS_TDate = DateValue;
            }
        }
        else if (format == "BS") {
            var datearr = value.split('/');
            var bsDate_2 = datearr[2] + "/" + datearr[1] + "/" + datearr[0];
            // var bsDate = (value.replace("-", "/")).replace("-", "/");
            var adDate = adbs.bs2ad(bsDate_2);
            var DateValue = newDate = this.masterService.toADDate(value);
            DName == "BS" ? this.Date.TDate = DateValue : this.Date.TDate = DateValue;
        }
        this.ValidateBSDATE(newDate, "DATE3", "TRNDATE");
    };
    EPaymentStatusMasterComponent.prototype.ValidateBSDATE = function (value, date, dateType) {
        return;
    };
    EPaymentStatusMasterComponent.prototype.OnLoadClick = function () {
        var _this = this;
        // this._loadingSerive.show("getting data please wait..")
        this.LObj.DATE1 = this.Date.FDate;
        this.LObj.DATE2 = this.Date.TDate;
        this.LObj.PhiscalID = this.masterService.PhiscalObj.phiscalID;
        this.LObj.DIV = this.masterService.PhiscalObj.DIVISION;
        this.masterService.LoadDataForEPayment(this.LObj).subscribe(function (x) {
            if (x.status == 'ok') {
                _this.voucherList = x.result;
                _this._loadingSerive.hide();
                for (var _i = 0, _a = _this.voucherList; _i < _a.length; _i++) {
                    var i = _a[_i];
                    // i.EPAYSTATUS = "PROCESSING"
                    // //console.log("CheckLog",i)
                    i.isCheck = false;
                    i.NARATION = "";
                    if (i.VOUCHERNO != null) {
                        if (i.VOUCHERSTATUS == "Success")
                            i.VOUCHERSTATUS = "SUCCESS";
                        if (i.VOUCHERSTATUS == "User doesn't exists in system" ||
                            i.VOUCHERSTATUS == "Your request could not be completed at this moment,  please try after sometime. Cellpay." ||
                            i.VOUCHERSTATUS == "Failed") {
                            i.NARATION = i.VOUCHERSTATUS;
                        }
                        else {
                            i.NARATION = "";
                        }
                        if (i.VOUCHERSTATUS == "Fail" || i.VOUCHERSTATUS == "Failed" ||
                            i.VOUCHERSTATUS == "Your request could not be completed at this moment,  please try after sometime. Cellpay." ||
                            i.VOUCHERSTATUS == "User doesn't exists in system")
                            i.VOUCHERSTATUS = "FAILED";
                        if (i.VOUCHERSTATUS == null && i.ISCHECKED == 1)
                            i.VOUCHERSTATUS = "PENDING";
                        if (i.VOUCHERSTATUS == null && i.ISCHECKED != 1)
                            i.VOUCHERSTATUS = "New";
                        //console.log("CHeckValue",i.VOUCHERSTATUS)
                        if (i.VOUCHERSTATUS.toUpperCase() == "SUCCESS" || i.VOUCHERSTATUS.toUpperCase() == "PENDING") {
                            i.isShowCheck = false;
                        }
                        else {
                            i.isShowCheck = true;
                        }
                        if (i.REFNO != null) {
                            if (i.REFNO.startsWith('PV') && i.VOUCHERNO.startsWith('CX')) {
                                i.isShowCheck = false;
                                i.NARATION = "This voucher is saved as " + i.REFNO;
                                i.VOUCHERSTATUS = "SUCCESS";
                            }
                        }
                    }
                    else {
                        if (i.VOUCHERSTATUS == null)
                            i.VOUCHERSTATUS = "empty";
                    }
                }
            }
        });
    };
    EPaymentStatusMasterComponent.prototype.viaCellPayClick = function () {
        if (this.userProfile.CompanyInfo.NAME === null || this.userProfile.CompanyInfo.NAME == '' ||
            this.userProfile.CompanyInfo.NAME === undefined) {
            this._alertService.info("Company Name is Empty.");
            return;
        }
        // if (this.userSetting.MERCHANTBANKCODE === null || this.userSetting.MERCHANTBANKCODE == '' ||
        //   this.userSetting.MERCHANTBANKCODE === undefined) {
        //   this._alertService.info("Please set merchant bankcode.");
        //   return;
        // }
        // if (this.userSetting.MERCHANTBANKACCOUNTNO === null || this.userSetting.MERCHANTBANKACCOUNTNO == '' ||
        //   this.userSetting.MERCHANTBANKACCOUNTNO === undefined) {
        //   this._alertService.info("Please set merchant bankaccountnumber.");
        //   return;
        // }
        this.VerifyData();
    };
    EPaymentStatusMasterComponent.prototype.VerifyData = function () {
        var _this = this;
        //console.log("merchantdataList",this.merchantdataList)
        this.merchantdataList.forEach(function (x) {
            if (_this.merchantdataList.length > 1) {
                _this.merchantdataList.forEach(function (y) {
                    x.MERCHANTBANKCODE == y.MERCHANTBANKCODE ? _this.stoppayment = false : _this.stoppayment = true;
                });
            }
        });
        if (this.stoppayment == true) {
            this._alertService.info("Please send vouchers with same Bank Name");
            return;
        }
        //console.log("voucherList", this.voucherList)
        var count = 0;
        var dataList = [];
        var FilterValue = this.voucherList.filter(function (x) { return x.isCheck == true; });
        if (FilterValue.length > 20) {
            this._alertService.info("Please Select Only 20 Vouchers!");
            return;
        }
        var index = 0;
        var _loop_1 = function (x) {
            //console.log("dataList00123",dataList)
            if (x.isCheck == true) {
                this_1.masterService.getEpaymentbankdetails(x.VOUCHERNO).subscribe(function (res) {
                    var dataObj = {};
                    dataObj.bankCode = res.result && res.result.BANKCODE;
                    dataObj.fee = res.result2 && res.result2.FEE;
                    dataObj.amount = res.result3 && res.result3.AMOUNT;
                    dataObj.merchantName = x.ACCOUNTNAME;
                    dataObj.merchantAccount = x.ChequeNo ? x.ChequeNo : x.CHEQUENO;
                    dataObj.description = res.result && res.result.NARATION ? res.result.NARATION : "to Ask";
                    dataObj.invoiceNumber = x.VOUCHERNO;
                    dataList.push(dataObj);
                    x.VOUCHERSTATUS = "PENDING";
                    x.isShowCheck = false;
                }, function (err) {
                }, function () {
                    if (dataList.length == FilterValue.length) {
                        _this.getMerchantData(dataList, _this.merchantdataList);
                    }
                });
                // dataObj.merchantName = x.ACCOUNTNAME;
                // dataObj.merchantAccount = x.CHEQUENO;
                // dataObj.bankCode = this.voucherList[index+1].ACCODE;
                // dataObj.bankCode = "NIBL";
                // dataObj.amount = 600;
                // dataObj.description = "to Ask";
                // dataObj.fee = "5"; 
                // dataObj.invoiceNumber = x.VOUCHERNO;
                // dataList.push(dataObj);
                // x.VOUCHERSTATUS = "PENDING"
                // x.isShowCheck = false
                // dataObj.merchantName = "ASK company";
                // dataObj.merchantAccount = "001NIBLASK";
                // dataObj.bankCode = "NIBL";
                // dataObj.amount ="106",
                // dataObj.description = "to Ask",
                // dataObj.invoiceNumber = "005",
                // dataList.push(dataObj);
                // index ++;
            }
            index++;
        };
        var this_1 = this;
        for (var _i = 0, FilterValue_1 = FilterValue; _i < FilterValue_1.length; _i++) {
            var x = FilterValue_1[_i];
            _loop_1(x);
        }
        //console.log("dataList",dataList)
        // passObj.voucherId = "123";
        // passObj.invoiceNumber = "123";
        // passObj.isLive = "false";
        // passObj.returnUrl = "false";
        // //console.log("checkcheck",passObj, dataList)
        // return;
    };
    EPaymentStatusMasterComponent.prototype.getMerchantData = function (dataList, merchantdataList) {
        //console.log("this.returnUrl",this.returnUrl)
        //console.log("merchantdataList1",merchantdataList)
        var passObj = {};
        passObj.sender = this.userProfile.CompanyInfo.NAME ? this.userProfile.CompanyInfo.NAME : "IMS-Software";
        passObj.bankCode = merchantdataList[0].MERCHANTBANKCODE ? merchantdataList[0].MERCHANTBANKCODE : 'NIBL';
        passObj.account = merchantdataList[0].MERCHANTBANKACCOUNTNO ? merchantdataList[0].MERCHANTBANKACCOUNTNO : '001002003004';
        if (this.userSetting.ISCELLPAYLIVE == 1) {
            passObj.isLive = "true";
            passObj.url = "https://sdk.cellpay.com.np/submitBulk";
        }
        else {
            passObj.isLive = "false";
            passObj.url = "https://test.shristi.co/sdktest/systemPaymentBulk";
        }
        passObj.voucherId = "1";
        // passObj.returnUrl = "https://cellpay.com.np/cpay";
        passObj.returnUrl = this.returnUrl;
        passObj.invoiceNumber = dataList && dataList[0].invoiceNumber ? dataList[0].invoiceNumber : "CX1-MMX-77/78";
        this.BulkCellPay(passObj, dataList);
    };
    EPaymentStatusMasterComponent.prototype.BulkCellPay = function (passObj, dataList) {
        var merchant_data = JSON.stringify(dataList);
        //console.log("merchant_data", merchant_data);
        //console.log("passObj", passObj);
        var form = document.createElement('form');
        form.method = "POST";
        form.target = "_blank";
        // form.action = "https://cellpay.com.np/cpay/submitBulk";
        // form.action = "https://sdk.cellpay.com.np/submitBulk";
        form.action = passObj.url ? passObj.url : "https://sdk.cellpay.com.np/submitBulk";
        var hiddenField = document.createElement('input');
        hiddenField.type = 'text';
        hiddenField.name = "sender";
        hiddenField.value = passObj.sender;
        var hiddenField1 = document.createElement('input');
        hiddenField1.type = 'text';
        hiddenField1.name = "bankCode";
        hiddenField1.value = passObj.bankCode;
        var hiddenField2 = document.createElement('input');
        hiddenField2.type = 'text';
        hiddenField2.name = "account";
        hiddenField2.value = passObj.account;
        var hiddenField4 = document.createElement('input');
        hiddenField4.type = 'text';
        hiddenField4.name = "isLive";
        hiddenField4.value = passObj.isLive;
        var hiddenField3 = document.createElement('input');
        hiddenField3.type = 'text';
        hiddenField3.name = "voucherId";
        hiddenField3.value = passObj.voucherId;
        var hiddenField9 = document.createElement('input');
        hiddenField9.type = 'text';
        hiddenField9.name = "merchantData";
        hiddenField9.value = merchant_data;
        var hiddenField5 = document.createElement('input');
        hiddenField5.type = 'text';
        hiddenField5.name = "invoiceNumber";
        hiddenField5.value = passObj.invoiceNumber;
        var hiddenField6 = document.createElement('input');
        hiddenField6.type = 'text';
        hiddenField6.name = "returnUrl";
        // hiddenField6.value = "https://cellpay.com.np/cpay/";
        hiddenField6.value = passObj.returnUrl;
        var hiddenField7 = document.createElement('input');
        hiddenField7.type = 'text';
        hiddenField7.name = "fee";
        hiddenField7.value = passObj.fee;
        form.appendChild(hiddenField);
        form.appendChild(hiddenField1);
        form.appendChild(hiddenField2);
        form.appendChild(hiddenField3);
        form.appendChild(hiddenField4);
        form.appendChild(hiddenField5);
        form.appendChild(hiddenField6);
        form.appendChild(hiddenField9);
        form.appendChild(hiddenField7);
        document.body.appendChild(form);
        form.submit();
    };
    EPaymentStatusMasterComponent.prototype.SaveClick = function () {
        var _this = this;
        //console.log("voucherList", this.voucherList)
        return;
        this._loadingSerive.show("saving data please wait...");
        this.LatePostSaveObj.PostList = this.voucherList.filter(function (x) { return x.isCheck == true; });
        var bodydata = { data: this.LatePostSaveObj };
        this.masterService.saveVoucherLatePost(bodydata).subscribe(function (x) {
            if (x.status == "ok") {
                _this._loadingSerive.hide();
                _this.OnLoadClick();
            }
            else {
            }
        }, function (error) {
            // ////console.log("@@error",error)
        });
    };
    EPaymentStatusMasterComponent.prototype.Reset = function () {
        this.voucherList = [];
    };
    EPaymentStatusMasterComponent.prototype.VTypeChange = function (value) {
        if (value == 'JOURNAL VOUCHER') {
            this.voucherType = 12;
        }
        else if (value == 'CONTRA VOUCHER') {
            this.voucherType = 62;
        }
        else if (value == 'PAYMENT VOUCHER') {
            this.voucherType = 17;
        }
        else if (value == 'RECEIPT VOUCHER') {
            this.voucherType = 18;
        }
        else if (value == 'CAPITAL VOUCHER') {
            this.voucherType = 64;
        }
        else {
            this._alertService.warning("Cannot detect selected value!");
        }
        this.LoadVoucherPrefix(this.voucherType);
    };
    EPaymentStatusMasterComponent.prototype.LoadVoucherPrefix = function (voucherType) {
        var _this = this;
        this.masterService.getVoucherType(voucherType).subscribe(function (data) {
            _this.prefixessubject.next(data);
        }, function (error) { });
    };
    EPaymentStatusMasterComponent.prototype.showAcList = function (i) {
        var TRNMODE = 'SinglePayment_Party';
        this.gridACListPopupSettings = {
            title: "Accounts",
            apiEndpoints: "/getAccountPagedListByMapId/Details/" + TRNMODE,
            defaultFilterIndex: 1,
            columns: [
                {
                    key: "ACID",
                    title: "AC CODE",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "ACNAME",
                    title: "A/C NAME",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
        this.genericGridACList.show();
    };
    EPaymentStatusMasterComponent.prototype.onAcSelect = function (acItem) {
        this.ac_name = acItem.ACNAME;
        this.LObj.ACID = acItem.ACID;
    };
    EPaymentStatusMasterComponent.prototype.checkMerchantBankDetails = function () {
        var _this = this;
        var FilterValue = this.voucherList.filter(function (x) { return x.isCheck == true; });
        //console.log("@@SelectVoucherNo",FilterValue.length)
        for (var _i = 0, FilterValue_2 = FilterValue; _i < FilterValue_2.length; _i++) {
            var x = FilterValue_2[_i];
            //console.log("merchantdataList0", this.merchantdataList)
            if (x.isCheck == true) {
                this.masterService.getEpaymentbankdetails(x.VOUCHERNO).subscribe(function (res) {
                    var dataObj = {};
                    //console.log("res.result4", res.result4)
                    dataObj.MERCHANTBANKCODE = res.result4 && res.result4.MERCHANTBANKCODE;
                    dataObj.MERCHANTBANKNAME = res.result4 && res.result4.MERCHANTBANKNAME;
                    dataObj.MERCHANTBANKACCOUNTNO = res.result4 && res.result4.MERCHANTBANKACCOUNTNO;
                    _this.merchantdataList.push(dataObj);
                }, function (err) { }, function () {
                    _this.merchantdataList.forEach(function (x) {
                        if (_this.merchantdataList.length > 1) {
                            _this.merchantdataList.forEach(function (y) {
                                x.MERCHANTBANKCODE == y.MERCHANTBANKCODE ? '' : _this._alertService.info("Please send vouchers with same Bank Name");
                            });
                        }
                    });
                });
            }
        }
        if (FilterValue.length > 20) {
            this._alertService.info("Please Select Only 20 Vouchers!");
            return;
        }
    };
    return EPaymentStatusMasterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridACList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], EPaymentStatusMasterComponent.prototype, "genericGridACList", void 0);
EPaymentStatusMasterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "EPaymentStatusMaster",
        template: __webpack_require__(1705),
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_Transaction_Components_transaction_service__["a" /* TransactionService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_Transaction_Components_transaction_service__["a" /* TransactionService */],
        __WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_3__common_services_setting_service__["a" /* SettingService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_6__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_10__common_services_permission__["a" /* AuthService */]
        // private _enableLatePostService : EnableLatePostService
    ])
], EPaymentStatusMasterComponent);



/***/ }),

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EPaymentStatus_service__ = __webpack_require__(1465);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EPaymentStatusComponent; });







var EPaymentStatusComponent = (function () {
    function EPaymentStatusComponent(masterService, alert, loadingService, _LatePostService, authservice, router) {
        this.masterService = masterService;
        this.alert = alert;
        this.loadingService = loadingService;
        this._LatePostService = _LatePostService;
        this.authservice = authservice;
        this.LatePostObj = {};
        this.userProfile = {};
        this.VoucherLatePostList = [];
        this.router = router;
        this.userProfile = this.authservice.getUserProfile();
        this.LatePostObj.Status = 1;
    }
    EPaymentStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masterService.getEnableLatePost().subscribe(function (res) {
            if (res.status == "ok") {
                _this.VoucherLatePostList = res.result;
            }
        });
    };
    EPaymentStatusComponent.prototype.onSave = function () {
        var _this = this;
        this.LatePostObj.Createdby = this.userProfile.username;
        this.loadingService.show("saving data please wait..");
        this._LatePostService.saveEnableLatePost(this.LatePostObj).subscribe(function (res) {
            if (res.status == "ok") {
                _this.alert.info("Data saved sucessfully!");
                _this.loadingService.hide();
            }
            else {
                if (res.result._body == "The ConnectionString property has not been initialized.") {
                    _this.router.navigate(['/login', _this.router.url]);
                    return;
                }
                _this.alert.error("Error in Saving Data:" + res.result);
            }
        }, function (error) {
            alert(error);
            _this.masterService.resolveError(error, "Enable - LatePost");
        });
    };
    EPaymentStatusComponent.prototype.cancel = function () {
    };
    return EPaymentStatusComponent;
}());
EPaymentStatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'EPaymentStatus',
        template: __webpack_require__(1704),
        providers: [__WEBPACK_IMPORTED_MODULE_6__EPaymentStatus_service__["a" /* EPaymentStatusService */]],
        styles: [__webpack_require__(120)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_2__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_3__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_6__EPaymentStatus_service__["a" /* EPaymentStatusService */],
        __WEBPACK_IMPORTED_MODULE_4__common_services_permission__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
], EPaymentStatusComponent);



/***/ }),

/***/ 1464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EPaymentStatusMaster_component__ = __webpack_require__(1366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EPaymentStatustRoutingModule; });



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__EPaymentStatusMaster_component__["a" /* EPaymentStatusMasterComponent */] },
];
var EPaymentStatustRoutingModule = (function () {
    function EPaymentStatustRoutingModule() {
    }
    return EPaymentStatustRoutingModule;
}());
EPaymentStatustRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], EPaymentStatustRoutingModule);



/***/ }),

/***/ 1465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_subject__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_state__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EPaymentStatusService; });





var EPaymentStatusService = (function () {
    function EPaymentStatusService(http, authService, state) {
        this.http = http;
        this.authService = authService;
        this.state = state;
    }
    Object.defineProperty(EPaymentStatusService.prototype, "apiUrl", {
        get: function () {
            var url = this.state.getGlobalSetting("apiUrl");
            var apiUrl = "";
            if (!!url && url.length > 0) {
                apiUrl = url[0];
            }
            ;
            return apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    EPaymentStatusService.prototype.saveEnableLatePost = function (LatePostObj) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_subject__["Subject"]();
        var bodyData = { mode: 'query', data: LatePostObj };
        this.http.post(this.apiUrl + '/saveEnableLatePost', bodyData, this.getRequestOption())
            .subscribe(function (response) {
            var data = response.json();
            if (data.status == 'ok') {
                returnSubject.next(data);
                returnSubject.unsubscribe();
            }
            else {
                returnSubject.next(data);
                returnSubject.unsubscribe();
            }
        }, function (error) {
            res.status = 'error';
            res.result = error;
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
        /* return this.http.get("/rategroups.json").toPromise()
             .then((res) => res.json());*/
    };
    EPaymentStatusService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
    };
    EPaymentStatusService.prototype.LoadData = function (LObj) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_subject__["Subject"]();
        var bodyData = { LObj: LObj };
        this.http.post(this.apiUrl + "/getVoucherLatePost", bodyData, this.getRequestOption())
            .subscribe(function (response) {
            var data = response.json();
            if (data.status == "ok") {
                returnSubject.next(data);
                returnSubject.unsubscribe();
            }
            else {
                returnSubject.next(data);
                returnSubject.unsubscribe();
            }
        }, function (error) {
            res.status = "error";
            res.result = error;
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    return EPaymentStatusService;
}());
EPaymentStatusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__global_state__["a" /* GlobalState */]])
], EPaymentStatusService);



/***/ }),

/***/ 1704:
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .tablesize {\r\n        width: 70%;\r\n        margin-top: 30px;\r\n        margin-left: 2%;\r\n    }\r\n\r\n    .table-scroll {\r\n        overflow-y: scroll;\r\n        overflow-x: hidden;\r\n    }\r\n\r\n    tbody>tr:hover {\r\n        background-color: #f3f5f4;\r\n        cursor: pointer;\r\n    }\r\n\r\n    tr {\r\n        font-size: 11px;\r\n        height:30px\r\n    }\r\n\r\n    .selected-row {\r\n        background-color: #ced6d3 !important;\r\n    }\r\n\r\n    td {\r\n        padding: 2px;\r\n        border: 1px solid black;\r\n    }\r\n\r\n    th {\r\n        padding: 2px;\r\n        border: 1px solid black;\r\n    }\r\n</style>\r\n<div class=\"sticky-top\">\r\n    <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n        <div class=\"col-md-6\">\r\n            <h3 class=\"page-title\">EPayment Status</h3>\r\n        </div>\r\n        <div class=\"col-md-6\" style=\"float: right;\">\r\n            <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"cancel()\" style=\"margin-right : 10px;\">\r\n                Back\r\n            </button>\r\n            <button (click)=\"onSave()\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\">\r\n                Save\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"tabbable\" id=\"warehouse-tabs\">\r\n                <ul class=\"nav nav-tabs\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" href=\"#general-info\" data-toggle=\"tab\">General Info</a>\r\n                    </li>\r\n\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                    <div class=\"tab-pane active\" id=\"general-info\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-3 form-control-label\">Account Name:</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <select [(ngModel)]=\"LatePostObj\" class=\"form-control\"\r\n                                        style=\"width:70%\">\r\n                                        <option value=\"{'VoucherPrefix':'JV','VoucherName':'Journal Voucher'}\">Journal Voucher</option>\r\n                                        <option value=\"{'VoucherPrefix':'CE','VoucherName':'Contra'}\">Contra</option>\r\n                                        <option value=\"{'VoucherPrefix':'PV','VoucherName':'Expenses Voucher'}\">Expenses Voucher</option>\r\n                                        <option value=\"{'VoucherPrefix':'RV','VoucherName':'Income Voucher'}\">Income Voucher</option>\r\n                                        <option value=\"{'VoucherPrefix':'DN','VoucherName':'Debit Voucher'}\">Debit Note</option>\r\n                                        <option value=\"{'VoucherPrefix':'CN','VoucherName':'Credit Voucher'}\">Credit Note</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-3\">Status:</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <select [(ngModel)]=\"LatePostObj.Status\"  class=\"form-control\">\r\n                                        <option value=1>Active</option>\r\n                                        <option value=0>inActive</option>\r\n\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\" style=\"margin-top: 30px\">\r\n                            <Label style=\"font-weight: bold;\">Information Table</Label>\r\n                            <div class=\"form-group row\">\r\n                                <table class=\"tablesize\">\r\n                                    <tr style=\"border-bottom: 2px solid #E6E6E6;border-top: 2px solid #E6E6E6;height: 30px;background: silver;\">\r\n                                        <th>Sno</th>\r\n                                        <th>Account Name</th>\r\n                                        <th>Status</th>\r\n                                    </tr>\r\n                                    <tbody *ngFor=\"let i of VoucherLatePostList;let index=index\"\r\n                                        style=\"height: 300px; overflow:scroll\">\r\n                                        <tr>\r\n                                            <td>{{index+1}}</td>\r\n                                            <td>{{i.VoucherName}}</td>\r\n                                            <td>{{i.Status}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    \r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1705:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .table-summary>tbody>tr>td {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .table-summary>tbody>tr>td:first-child {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .trn-main-voucher-entry {\r\n    width: 100%;\r\n    /* border: 2px solid #e6e6e6; */\r\n  }\r\n\r\n  .trn-main-entry-area {\r\n    min-height: 85px;\r\n    max-height: 210px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .Remarks1 {\r\n    margin-left: 0%;\r\n    padding: 0px;\r\n  }\r\n\r\n  .Remarks2 {\r\n    margin-left: 25%;\r\n    padding: 0px;\r\n  }\r\n\r\n  input,\r\n  select {\r\n    height: 23px;\r\n    vertical-align: middle;\r\n    font-size: 13px;\r\n    border: 1px solid #cbcbcb;\r\n    border-radius: 3px;\r\n    color: black;\r\n  }\r\n</style>\r\n<div class=\"sticky-top\">\r\n  <div class=\"clearfix\">\r\n    \r\n    <div class=\"col-md-4\">\r\n      <a href=\"https://cellpay.com.np/\" target=\"blank\">\r\n      <img src=\"../../../assets/img/CellPayLogo.jpg\" alt=\"Group\" height=\"50\"\r\n      width=\"120\" style=\"margin-top:-11px\">\r\n      </a>\r\n      <label style=\"font-family: Segoe UI Light;font-weight: bold;font-size: 20px;padding-left: 5%;padding-top: 1%;\">\r\n        E-Payment Status</label>\r\n    \r\n    </div>\r\n\r\n    <div class=\"col-md-7\">\r\n      <button #save style=\"margin: 0px 4px;\" class=\"btn btn-info pull-right\" (click)=\"viaCellPayClick()\"> Via Cellpay </button>\r\n      <button #reset style=\"margin: 0px 4px;\" class=\"btn btn-info pull-right\" (click)=\"Reset()\"> Refresh </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"main-container\">\r\n  <div class=\"clearfix\">\r\n    <div class=\"clearfix trn-main-voucher-entry\">\r\n      <div class=\"clearfix\" style=\"padding: 10px 5px\">\r\n        <div class=\"col-md-12\" style=\"border-bottom: 1px solid #828080;\r\n        margin-bottom: 5px;\r\n        background: #e2eaea; padding-top: 9px;\">\r\n          <!-- /**Entry Date Date**/ -->\r\n          <div style=\"padding: 0px; margin-bottom: 10px;\" class=\"col-md-4\">\r\n            <label class=\"smallBoldLabel\" style=\"margin-left:3%;\">From Date :</label>\r\n            <input type=\"date\" #adEntryDate id=\"L_FromDate\" style=\"width:128px\" placeholder=\"Year Start Date\"\r\n              [(ngModel)]=\"Date.FDate\" (change)=\"ChangeDate($event.target.value,'AD','FromAD')\"> &nbsp;A.D&nbsp;\r\n            \r\n              <!-- <input id=\"nepaliDate\" #bsEntryDate type=\"date\" autocomplete=\"off\"\r\n              style=\"width:90px;height:25px;text-align:left\" class=\"nepali-calendar ndp-nepali-calendar\"\r\n              [(ngModel)]=\"Date.BS_FDate\" type=\"text\" (change)=\"ChangeDate($event.target.value,'BS','FromBS')\"\r\n              placeholder=\"yyyy-mm-dd\">\r\n            &nbsp;B.S -->\r\n                <div style=\" width: 134px;margin-left: 261px; margin-top: -29px;\">\r\n                        <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n                          (change)=\"ChangeDate($event.detail.value,'BS','FromBS')\"\r\n                          [label]=\"'dd/mm/yyyy'\"\r\n                          [(ngModel)]=\"Date.BS_FDate\">\r\n                          </nepali-date-picker>\r\n                </div>\r\n          </div>\r\n          <div style=\"padding: 0px; margin-bottom: 10px;\" class=\"col-md-4\">\r\n            <label class=\"smallBoldLabel\">To Date :</label>\r\n            <input type=\"date\" #adEntryDate id=\"L_TDate\" style=\"width:128px\" placeholder=\"Year Start Date\"\r\n              [(ngModel)]=\"Date.TDate\" (change)=\"ChangeDate($event.target.value,'AD','ToAD')\"> &nbsp;A.D&nbsp;\r\n\r\n              <div style=\" width: 134px;margin-left: 261px; margin-top: -29px;\">\r\n                <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDateto'\"\r\n                  (change)=\"ChangeDate1($event.detail.value,'BS','ToBS')\"\r\n                  [label]=\"'dd/mm/yyyy'\"\r\n                  [(ngModel)]=\"Date.BS_TDate\">\r\n                  </nepali-date-picker>\r\n              </div>\r\n            <!-- <input id=\"nepaliDate\" #bsEntryDate type=\"date\" autocomplete=\"off\"\r\n              style=\"width:90px;height:25px;text-align:left\" class=\"nepali-calendar ndp-nepali-calendar\"\r\n              [(ngModel)]=\"Date.BS_TDate\" type=\"text\" (change)=\"ChangeDate($event.target.value,'BS','ToBS')\"\r\n              placeholder=\"yyyy-mm-dd\">\r\n            &nbsp;B.S -->\r\n          </div>\r\n          \r\n          <div class=\"col-md-1\">\r\n            <button #reset style=\"margin: 0px 4px;\" class=\"btn btn-info pull-right\" (click)=\"OnLoadClick()\"> Load </button>\r\n          </div>\r\n\r\n        </div>\r\n     \r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\" style=\"margin-top: 5px\">\r\n    <div style=\"padding-right: 0px !important; padding-left: 0px !important;\">\r\n      <div style=\"height:480px; overflow-y: scroll;    background-color: #fbf3e8;;\">\r\n        <table style=\"margin-bottom: 5px;font-size: 13px;width: 100%;\">\r\n          <thead>\r\n            <tr style=\" border-bottom: 2px solid #E6E6E6;\r\n                              border-top: 2px solid #E6E6E6;\r\n                              height: 30px;\r\n                              background: silver;\r\n                              color: black;\">\r\n              <th style=\"width: 2%;\">Check</th>\r\n              <th style=\"width:6%;padding-left: 1%;text-align: center;\">Status</th>\r\n              <th style=\"width:12%;padding-left: 1%;text-align: center;\">Voucher No</th>\r\n              <th style=\"width: 8%;padding-left: 1%;text-align: center;\">\r\n                Date\r\n              </th>\r\n              <th style=\"width:14%;padding-left: 1%;text-align: center;\">\r\n                Account Description \r\n              </th>\r\n\r\n              <th style=\"width:8%;padding-left: 1%;text-align: center;\">\r\n                DR Amount\r\n              </th>\r\n              <th style=\"width:8%;padding-left: 1%;text-align: center;\">\r\n                CR Amount\r\n              </th>\r\n\r\n              <th style=\"width:7%;padding-left: 1%;text-align: center;\">\r\n                Bank no.\r\n              </th>\r\n\r\n              \r\n            \r\n              <th style=\"width:17%;padding-left: 1%;text-align: center;\">\r\n                Remarks </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor = 'let x of voucherList'>\r\n            <tr style=\"border: 1px solid #e6e6e6;max-height:25px;\">\r\n              <td style=\"line-height:21px; text-align:center\">\r\n               <input type=\"checkbox\" [hidden]=\"!x.isShowCheck\" [(ngModel)]=\"x.isCheck\" style=\"width: 14px\" (change)=\"checkMerchantBankDetails()\">\r\n               <input type=\"text\" [hidden]=\"x.isCheck\" style=\"border: none;\r\n               background: #e9e9e9;\r\n               background-color: #f1f1f1;width: 2px;\" disabled>\r\n             \r\n              </td>\r\n              <td *ngIf=\"x.VOUCHERSTATUS == 'SUCCESS'\" style=\"line-height:21px; text-align:center;background-color: rgba(0, 144, 50, 0.45); font-family: monospace;   border-radius: 10px;\">\r\n                {{x.VOUCHERSTATUS}}\r\n              </td>\r\n              <td *ngIf=\"x.VOUCHERSTATUS == 'New'\" style=\"line-height:21px; text-align:center;background-color: #ffd740;    border-radius: 10px;font-family: monospace;\">\r\n                {{x.VOUCHERSTATUS}}\r\n              </td>\r\n              <td *ngIf=\"x.VOUCHERSTATUS == 'FAILED'\" style=\"line-height:21px; text-align:center;background-color: rgba(255, 51, 51, 0.45);    border-radius: 10px;font-family: monospace;\">\r\n                {{x.VOUCHERSTATUS}}\r\n              </td>\r\n              <td *ngIf=\"x.VOUCHERSTATUS == 'empty'\" style=\"line-height:21px; text-align:center; border-radius: 10px;font-family: monospace;\"> <td *ngIf=\"x.VOUCHERSTATUS == 'PENDING'\" style=\"line-height:21px; text-align:center;background-color: rgba(29, 207, 249, 0.45);    border-radius: 10px;font-family: monospace;\">\r\n                {{x.VOUCHERSTATUS}}\r\n             \r\n             \r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.VOUCHERNO}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.TRNDATE}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.ACCOUNTNAME}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n              {{x.DRAMNT}}\r\n\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n              {{x.CRAMNT}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n               {{x.CHEQUENO}}\r\n              </td>\r\n             \r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.NARATION}}\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sticky-bottom\" style=\"background: gray;\">\r\n\r\n</div>\r\n\r\n<generic-popup-grid #genericGridACList [popupsettings]=\"gridACListPopupSettings\"\r\n  (onItemDoubleClick)=\"onAcSelect($event)\"></generic-popup-grid>"

/***/ })

});
//# sourceMappingURL=26.chunk.js.map