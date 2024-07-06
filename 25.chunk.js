webpackJsonpac__name_([25],{

/***/ 1349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EnableLatePost_component__ = __webpack_require__(1466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__EnableLatePost_route__ = __webpack_require__(1467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__LatePost_component__ = __webpack_require__(1367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_Transaction_Components_transaction_module__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_directives_limit_decimal_module__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__VoucherTracking_VoucherTracking_module__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_popupLists_report_filter_report_filter_module__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_date_picker_date_picker_module__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_nepali_date_picker_nepali_date_picker_module__ = __webpack_require__(558);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableLatePostModule", function() { return EnableLatePostModule; });















var EnableLatePostModule = (function () {
    function EnableLatePostModule() {
    }
    return EnableLatePostModule;
}());
EnableLatePostModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__["e" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__EnableLatePost_route__["a" /* EnableVoucherPostRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_9__common_Transaction_Components_transaction_module__["a" /* TransactionModule */],
            __WEBPACK_IMPORTED_MODULE_4__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__common_directives_limit_decimal_module__["a" /* LimitDecimalPlacesModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__VoucherTracking_VoucherTracking_module__["a" /* VoucherTrackingPopupModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__common_popupLists_report_filter_report_filter_module__["a" /* ReportFilterModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__common_date_picker_date_picker_module__["a" /* IMSDatePickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__common_nepali_date_picker_nepali_date_picker_module__["a" /* NepaliDatePickerModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__EnableLatePost_component__["a" /* EnableLatePostComponent */], __WEBPACK_IMPORTED_MODULE_8__LatePost_component__["a" /* LatePostComponent */]
        ],
    })
], EnableLatePostModule);



/***/ }),

/***/ 1367:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatePostComponent; });










// import { EnableLatePostService } from "./EnableLatePost.service";
var LatePostComponent = (function () {
    function LatePostComponent(_trnMainService, masterService, setting, _activatedRoute, _loadingSerive, _alertService, router, arouter) {
        this._trnMainService = _trnMainService;
        this.masterService = masterService;
        this.setting = setting;
        this._activatedRoute = _activatedRoute;
        this._loadingSerive = _loadingSerive;
        this._alertService = _alertService;
        this.router = router;
        this.arouter = arouter;
        this.Date = {};
        this.LObj = {};
        this.prefixessubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["BehaviorSubject"]([]);
        this.prefixesObservable$ = this.prefixessubject.asObservable();
        this.gridACListPopupSettings = new __WEBPACK_IMPORTED_MODULE_9__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.LatePostSaveObj = {};
        // this.activeurlpath = arouter.snapshot.url[0].path;
        if (this._trnMainService.userSetting.EnableLatePost == 1) {
            if (this.LObj.VTYPE == 'DN') {
                this.LObj.VTYPE = 'DN';
                this.voucherType = 16;
            }
            else {
                this.LObj.VTYPE = 'JV';
                this.voucherType = 12;
            }
        }
        else {
            if (this._trnMainService.userSetting.ENABLELATEPOSTINPURCHASE == 1) {
                this.LObj.VTYPE = 'PI';
                this.voucherType = 3;
            }
        }
        this.LoadVoucherPrefix(this.voucherType);
    }
    LatePostComponent.prototype.ngOnInit = function () {
        document.getElementById("L_FromDate").focus();
        this.LoadVoucherPrefix(this.voucherType);
        this.Date.FDate = new Date().toJSON().split('T')[0];
        this.ChangeDate(this.Date.FDate, "AD", 'FromAD');
        this.Date.TDate = new Date().toJSON().split('T')[0];
        this.ChangeDate(this.Date.TDate, "AD", 'FromAD');
    };
    LatePostComponent.prototype.ChangeDate = function (value, format, DName) {
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
    LatePostComponent.prototype.ChangeDate1 = function (value, format, DName) {
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
    LatePostComponent.prototype.ValidateBSDATE = function (value, date, dateType) {
        return;
    };
    LatePostComponent.prototype.OnLoadClick = function () {
        var _this = this;
        if (this.Date.FDate == "" || this.Date.FDate == null || this.Date.FDate == undefined || this.Date.TDate == "" ||
            this.Date.TDate == null || this.Date.TDate == undefined) {
            this._alertService.warning("Please Select the date");
            return;
        }
        this._loadingSerive.show("getting data please wait..");
        this.LObj.DATE1 = this.Date.FDate;
        this.LObj.DATE2 = this.Date.TDate;
        this.LObj.PhiscalID = this.masterService.PhiscalObj.phiscalID;
        this.LObj.DIV = this.masterService.PhiscalObj.DIVISION;
        if (this.LObj.ACID == "" || this.LObj.ACID == null || this.LObj.ACID == undefined) {
            this.LObj.ACID = '%';
        }
        if (this.LObj.VSERIES == "" || this.LObj.VSERIES == null || this.LObj.VSERIES == undefined) {
            this.LObj.VSERIES = '%';
        }
        if (this.LObj.VTYPE == "" || this.LObj.VTYPE == null || this.LObj.VTYPE == undefined) {
            this.LObj.VTYPE = '%';
        }
        this.masterService.LoadData(this.LObj).subscribe(function (x) {
            if (x.status == 'ok') {
                _this.voucherList = x.result;
                _this._loadingSerive.hide();
                for (var _i = 0, _a = _this.voucherList; _i < _a.length; _i++) {
                    var i = _a[_i];
                    i.isCheck = false;
                    if (i.VOUCHERNO != null) {
                        i.isShowCheck = true;
                    }
                }
            }
        });
    };
    LatePostComponent.prototype.SaveClick = function () {
        var _this = this;
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
    LatePostComponent.prototype.Reset = function () {
        this.voucherList = [];
        this.LObj.VTYPE = '';
        this.LObj.VSERIES = '';
        this.ac_name = '';
        this.Date.FDate = new Date().toJSON().split('T')[0];
        this.Date.TDate = new Date().toJSON().split('T')[0];
    };
    LatePostComponent.prototype.VTypeChange = function (value) {
        if (value == 'JV') {
            this.voucherType = 12;
        }
        else if (value == 'CV') {
            this.voucherType = 62;
        }
        else if (value == 'PV') {
            this.voucherType = 17;
        }
        else if (value == 'RV') {
            this.voucherType = 18;
        }
        else if (value == 'CP') {
            this.voucherType = 64;
        }
        else if (value == 'PI') {
            this.voucherType = 3;
        }
        else if (value == 'DN') {
            this.voucherType = 16;
        }
        else {
            // this._alertService.warning("Cannot detect selected value!");
        }
        this.LoadVoucherPrefix(this.voucherType);
    };
    LatePostComponent.prototype.LoadVoucherPrefix = function (voucherType) {
        var _this = this;
        this.LatePostSaveObj.VOUCHERTYPE = voucherType;
        console.log("@@LoadVoucherPrefix", voucherType);
        this.masterService.getVoucherType(voucherType).subscribe(function (data) {
            _this.prefixessubject.next(data);
        }, function (error) { });
    };
    LatePostComponent.prototype.showAcList = function (i) {
        // var TRNMODE = 'SinglePayment_Party';
        var TRNMODE = 'ALL';
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
    LatePostComponent.prototype.onAcSelect = function (acItem) {
        this.ac_name = acItem.ACNAME;
        this.LObj.ACID = acItem.ACID;
    };
    LatePostComponent.prototype.drillDown = function (event) {
        //console.log("inside the dblclick", event);
        // let arr = event.VOUCHERNO.split("-");
        // let phiscalID = arr[2];
        //console.log("phiscal idf", phiscalID);
        var _this = this;
        var VoucherPrefix = event.VOUCHERNO.substring(0, 2);
        if (VoucherPrefix == 'PI') {
            this.masterService.getPclandCNDNmode(VoucherPrefix, event.VOUCHERNO).subscribe(function (res) {
                if (res.result && res.result[0].CNDN_MODE == 1) {
                }
                else {
                    if (res.result && res.result[0].PCL == 'pc001') {
                        _this.masterService.PCL_VALUE = 1;
                    }
                    else if (res.result && res.result[0].PCL == 'pc002') {
                        _this.masterService.PCL_VALUE = 2;
                    }
                    else {
                        _this.masterService.PCL_VALUE = 2;
                    }
                }
            }, function (err) {
            }, function () {
                _this.drilltovouchers(event, VoucherPrefix);
            });
        }
        else {
            this.drilltovouchers(event, VoucherPrefix);
        }
        // alert("Latpeost_dblclick")   
    };
    LatePostComponent.prototype.drilltovouchers = function (event, VoucherPrefix) {
        var arr = event.VOUCHERNO.split("-");
        var phiscalID = arr[2];
        switch (VoucherPrefix) {
            case 'JV':
                this.router.navigate(['/pages/account/acvouchers/journal-voucher'], {
                    queryParams: {
                        mode: "fromLatepost",
                        voucher: event.VOUCHERNO,
                        DIVISION: event.DIVISION,
                        PHISCALID: phiscalID
                    }
                });
                break;
            case 'CP':
                this.router.navigate(['/pages/account/acvouchers/capital-voucher'], {
                    queryParams: {
                        mode: "fromLatepost",
                        voucher: event.VOUCHERNO,
                        DIVISION: event.DIVISION,
                        PHISCALID: phiscalID
                    }
                });
                break;
            case 'CV':
                this.router.navigate(['/pages/account/acvouchers/contra-voucher'], {
                    queryParams: {
                        mode: "fromLatepost",
                        voucher: event.VOUCHERNO,
                        DIVISION: event.DIVISION,
                        PHISCALID: phiscalID
                    }
                });
                break;
            case 'AD':
                this.router.navigate(['/pages/account/acvouchers/additional-cost'], {
                    queryParams: {
                        mode: "fromLatepost",
                        voucher: event.VOUCHERNO,
                        DIVISION: event.DIVISION,
                        PHISCALID: phiscalID
                    }
                });
                break;
            case 'RV':
                this.router.navigate(['/pages/account/acvouchers/income-voucher'], {
                    queryParams: {
                        mode: "fromLatepost",
                        voucher: event.VOUCHERNO,
                        DIVISION: event.DIVISION,
                        PHISCALID: phiscalID
                    }
                });
                break;
            case 'PV':
                this.router.navigate(['/pages/account/acvouchers/expense-voucher'], {
                    queryParams: {
                        mode: "fromLatepost",
                        voucher: event.VOUCHERNO,
                        DIVISION: event.DIVISION,
                        PHISCALID: phiscalID
                    }
                });
                break;
            case 'PI':
                this.router.navigate(['/pages/account/purchases/add-purchase-invoice'], {
                    queryParams: {
                        mode: "fromLatepost",
                        voucher: event.VOUCHERNO,
                        DIVISION: event.DIVISION,
                        PHISCALID: phiscalID,
                        pcl: this.masterService.PCL_VALUE
                    }
                });
                break;
            default:
                return;
        }
    };
    return LatePostComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridACList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], LatePostComponent.prototype, "genericGridACList", void 0);
LatePostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "LatePost",
        template: __webpack_require__(1707),
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_Transaction_Components_transaction_service__["a" /* TransactionService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_Transaction_Components_transaction_service__["a" /* TransactionService */],
        __WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_3__common_services_setting_service__["a" /* SettingService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_6__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]])
], LatePostComponent);



/***/ }),

/***/ 1466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EnableLatePost_service__ = __webpack_require__(1468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnableLatePostComponent; });







var EnableLatePostComponent = (function () {
    function EnableLatePostComponent(masterService, alert, loadingService, _LatePostService, authservice, router) {
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
    EnableLatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masterService.getEnableLatePost().subscribe(function (res) {
            if (res.status == "ok") {
                _this.VoucherLatePostList = res.result;
            }
        });
    };
    EnableLatePostComponent.prototype.onSave = function () {
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
    EnableLatePostComponent.prototype.cancel = function () {
    };
    return EnableLatePostComponent;
}());
EnableLatePostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'EnableLatePost',
        template: __webpack_require__(1706),
        providers: [__WEBPACK_IMPORTED_MODULE_4__EnableLatePost_service__["a" /* EnableLatePostService */]],
        styles: [__webpack_require__(120)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_2__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_3__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_4__EnableLatePost_service__["a" /* EnableLatePostService */],
        __WEBPACK_IMPORTED_MODULE_5__common_services_permission__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]])
], EnableLatePostComponent);



/***/ }),

/***/ 1467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LatePost_component__ = __webpack_require__(1367);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnableVoucherPostRoutingModule; });



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__LatePost_component__["a" /* LatePostComponent */] },
];
var EnableVoucherPostRoutingModule = (function () {
    function EnableVoucherPostRoutingModule() {
    }
    return EnableVoucherPostRoutingModule;
}());
EnableVoucherPostRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], EnableVoucherPostRoutingModule);



/***/ }),

/***/ 1468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_subject__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global_state__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnableLatePostService; });





var EnableLatePostService = (function () {
    function EnableLatePostService(http, authService, state) {
        this.http = http;
        this.authService = authService;
        this.state = state;
    }
    Object.defineProperty(EnableLatePostService.prototype, "apiUrl", {
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
    EnableLatePostService.prototype.saveEnableLatePost = function (LatePostObj) {
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
    EnableLatePostService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
    };
    EnableLatePostService.prototype.LoadData = function (LObj) {
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
    return EnableLatePostService;
}());
EnableLatePostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__app_global_state__["a" /* GlobalState */]])
], EnableLatePostService);



/***/ }),

/***/ 1706:
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .tablesize {\r\n        width: 70%;\r\n        margin-top: 30px;\r\n        margin-left: 2%;\r\n    }\r\n\r\n    .table-scroll {\r\n        overflow-y: scroll;\r\n        overflow-x: hidden;\r\n    }\r\n\r\n    tbody>tr:hover {\r\n        background-color: #f3f5f4;\r\n        cursor: pointer;\r\n    }\r\n\r\n    tr {\r\n        font-size: 11px;\r\n        height:30px\r\n    }\r\n\r\n    .selected-row {\r\n        background-color: #ced6d3 !important;\r\n    }\r\n\r\n    td {\r\n        padding: 2px;\r\n        border: 1px solid black;\r\n    }\r\n\r\n    th {\r\n        padding: 2px;\r\n        border: 1px solid black;\r\n    }\r\n</style>\r\n<div class=\"sticky-top\">\r\n    <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n        <div class=\"col-md-6\">\r\n            <h3 class=\"page-title\">Enable-Late Post</h3>\r\n        </div>\r\n        <div class=\"col-md-6\" style=\"float: right;\">\r\n            <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"cancel()\" style=\"margin-right : 10px;\">\r\n                Back\r\n            </button>\r\n            <button (click)=\"onSave()\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\">\r\n                Save\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"tabbable\" id=\"warehouse-tabs\">\r\n                <ul class=\"nav nav-tabs\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" href=\"#general-info\" data-toggle=\"tab\">General Info</a>\r\n                    </li>\r\n\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                    <div class=\"tab-pane active\" id=\"general-info\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-3 form-control-label\">Account Name:</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <select [(ngModel)]=\"LatePostObj\" class=\"form-control\"\r\n                                        style=\"width:70%\">\r\n                                        <option value=\"{'VoucherPrefix':'JV','VoucherName':'Journal Voucher'}\">Journal Voucher</option>\r\n                                        <option value=\"{'VoucherPrefix':'CE','VoucherName':'Contra'}\">Contra</option>\r\n                                        <option value=\"{'VoucherPrefix':'PV','VoucherName':'Expenses Voucher'}\">Expenses Voucher</option>\r\n                                        <option value=\"{'VoucherPrefix':'RV','VoucherName':'Income Voucher'}\">Income Voucher</option>\r\n                                        <option value=\"{'VoucherPrefix':'DN','VoucherName':'Debit Voucher'}\">Debit Note</option>\r\n                                        <option value=\"{'VoucherPrefix':'CN','VoucherName':'Credit Voucher'}\">Credit Note</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-3\">Status:</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <select [(ngModel)]=\"LatePostObj.Status\"  class=\"form-control\">\r\n                                        <option value=1>Active</option>\r\n                                        <option value=0>inActive</option>\r\n\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\" style=\"margin-top: 30px\">\r\n                            <Label style=\"font-weight: bold;\">Information Table</Label>\r\n                            <div class=\"form-group row\">\r\n                                <table class=\"tablesize\">\r\n                                    <tr style=\"border-bottom: 2px solid #E6E6E6;border-top: 2px solid #E6E6E6;height: 30px;background: silver;\">\r\n                                        <th>Sno</th>\r\n                                        <th>Account Name</th>\r\n                                        <th>Status</th>\r\n                                    </tr>\r\n                                    <tbody *ngFor=\"let i of VoucherLatePostList;let index=index\"\r\n                                        style=\"height: 300px; overflow:scroll\">\r\n                                        <tr>\r\n                                            <td>{{index+1}}</td>\r\n                                            <td>{{i.VoucherName}}</td>\r\n                                            <td>{{i.Status}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    \r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1707:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .table-summary>tbody>tr>td {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .table-summary>tbody>tr>td:first-child {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .trn-main-voucher-entry {\r\n    width: 100%;\r\n    /* border: 2px solid #e6e6e6; */\r\n  }\r\n\r\n  .trn-main-entry-area {\r\n    min-height: 85px;\r\n    max-height: 210px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .Remarks1 {\r\n    margin-left: 0%;\r\n    padding: 0px;\r\n  }\r\n\r\n  .Remarks2 {\r\n    margin-left: 25%;\r\n    padding: 0px;\r\n  }\r\n\r\n  input,\r\n  select {\r\n    height: 23px;\r\n    vertical-align: middle;\r\n    font-size: 13px;\r\n    border: 1px solid #cbcbcb;\r\n    border-radius: 3px;\r\n    color: black;\r\n  }\r\n</style>\r\n<div class=\"sticky-top\">\r\n  <div class=\"clearfix\">\r\n    <div class=\"col-md-1\">\r\n      <voucher-master-toggler></voucher-master-toggler>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <label style=\"font-family: Segoe UI Light;font-weight: bold;font-size: 20px;padding-left: 5%;padding-top: 1%;\">\r\n        Voucher Approval</label>\r\n      <label style=\"font-size: 14px;\">&nbsp;>> {{ _trnMainService.TrnMainObj?.Mode | titlecase}} Voucher</label>\r\n    </div>\r\n\r\n    <div class=\"col-md-7\">\r\n      <button #save style=\"margin: 0px 4px;\" class=\"btn btn-info pull-right\" (click)=\"SaveClick()\"> F6 SAVE </button>\r\n      <button #reset style=\"margin: 0px 4px;\" class=\"btn btn-info pull-right\" (click)=\"Reset()\"> F6 RESET </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"main-container\">\r\n  <div class=\"clearfix\">\r\n    <div class=\"clearfix trn-main-voucher-entry\">\r\n      <div class=\"clearfix\" style=\"padding: 10px 5px\">\r\n        <div class=\"col-md-12\" style=\"border-bottom: 1px solid #828080;\r\n        margin-bottom: 5px;\r\n        background: #e2eaea; padding-top: 9px;\">\r\n          <!-- /**Entry Date Date**/ -->\r\n          <div style=\"padding: 0px; margin-bottom: 10px;\" class=\"col-md-4\">\r\n            <label class=\"smallBoldLabel\" style=\"margin-left:3%;\">From Date :</label>\r\n            <input type=\"date\" #adEntryDate id=\"L_FromDate\" style=\"width:128px\" placeholder=\"Year Start Date\"\r\n              [(ngModel)]=\"Date.FDate\" (change)=\"ChangeDate($event.target.value,'AD','FromAD')\"> &nbsp;A.D&nbsp;\r\n            \r\n              <!-- <input id=\"nepaliDate\" #bsEntryDate type=\"date\" autocomplete=\"off\"\r\n              style=\"width:90px;height:25px;text-align:left\" class=\"nepali-calendar ndp-nepali-calendar\"\r\n              [(ngModel)]=\"Date.BS_FDate\" type=\"text\" (change)=\"ChangeDate($event.target.value,'BS','FromBS')\"\r\n              placeholder=\"yyyy-mm-dd\">\r\n            &nbsp;B.S -->\r\n                <div style=\" width: 134px;margin-left: 261px; margin-top: -29px;\">\r\n                        <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n                          (change)=\"ChangeDate($event.detail.value,'BS','FromBS')\"\r\n                          [label]=\"'dd/mm/yyyy'\"\r\n                          [(ngModel)]=\"Date.BS_FDate\">\r\n                          </nepali-date-picker>\r\n                </div>\r\n          </div>\r\n          <div style=\"padding: 0px; margin-bottom: 10px;\" class=\"col-md-4\">\r\n            <label class=\"smallBoldLabel\">To Date :</label>\r\n            <input type=\"date\" #adEntryDate id=\"L_TDate\" style=\"width:128px\" placeholder=\"Year Start Date\"\r\n              [(ngModel)]=\"Date.TDate\" (change)=\"ChangeDate($event.target.value,'AD','ToAD')\"> &nbsp;A.D&nbsp;\r\n\r\n              <div style=\" width: 134px;margin-left: 261px; margin-top: -29px;\">\r\n                <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDateto'\"\r\n                  (change)=\"ChangeDate1($event.detail.value,'BS','ToBS')\"\r\n                  [label]=\"'dd/mm/yyyy'\"\r\n                  [(ngModel)]=\"Date.BS_TDate\">\r\n                  </nepali-date-picker>\r\n              </div>\r\n            <!-- <input id=\"nepaliDate\" #bsEntryDate type=\"date\" autocomplete=\"off\"\r\n              style=\"width:90px;height:25px;text-align:left\" class=\"nepali-calendar ndp-nepali-calendar\"\r\n              [(ngModel)]=\"Date.BS_TDate\" type=\"text\" (change)=\"ChangeDate($event.target.value,'BS','ToBS')\"\r\n              placeholder=\"yyyy-mm-dd\">\r\n            &nbsp;B.S -->\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label style=\"width: 40%;\">Voucher Type</label>\r\n            <select [(ngModel)]=\"LObj.VTYPE\" (change)=\"VTypeChange($event.target.value)\">\r\n              <option *ngIf=\"_trnMainService.userSetting.EnableLatePost == 1\" value = '%'></option>\r\n              <option *ngIf=\"_trnMainService.userSetting.EnableLatePost == 1\" value = 'JV'>Journal Voucher</option>\r\n              <option *ngIf=\"_trnMainService.userSetting.EnableLatePost == 1\" value = 'CV'>Contra Voucher</option>\r\n              <option *ngIf=\"_trnMainService.userSetting.EnableLatePost == 1\" value = 'PV'>Payment Voucher</option>\r\n              <option *ngIf=\"_trnMainService.userSetting.EnableLatePost == 1\" value = 'RV'>Receipt Voucher</option>\r\n              <option *ngIf=\"_trnMainService.userSetting.EnableLatePost == 1\" value = 'CP'>Capitalize Purchase Voucher</option>\r\n              <option *ngIf=\"_trnMainService.userSetting.EnableLatePost == 1\" value = 'AD'>Additional Cost Voucher</option>\r\n              <option *ngIf=\"_trnMainService.userSetting.ENABLELATEPOSTINPURCHASE == 1\" value = 'PI'>Purchase Invoice</option>\r\n              <option *ngIf=\"_trnMainService.userSetting.EnableLatePost == 1\" value = 'DN'>Debit Note</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <button #reset style=\"margin: 0px 4px;\" class=\"btn btn-info pull-right\" (click)=\"OnLoadClick()\"> Load </button>\r\n          </div>\r\n\r\n        </div>\r\n        <div [hidden]=\"!masterService.ShowMore\" class=\"col-md-12\">\r\n          <ng-container>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n              \r\n                <div class=\"col-md-3\">\r\n                  <label style=\"width: 40%;\">Voucher series</label>\r\n                  <select style=\"width: 52%;\" [(ngModel)]=\"LObj.VSERIES\">\r\n                         <option *ngFor=\"let un of prefixesObservable$ | async\" [ngValue]=\"un.VNAME\"> {{un.VNAME}}</option>\r\n                         </select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label style=\"width: 22%;\">Account Selection</label>\r\n                  <input type=\"text\" [(ngModel)]=\"ac_name\" (keydown.Enter)=\"showAcList(i);\" placeholder=\"Please enter to select\">\r\n                </div>\r\n                \r\n                <div class=\"col-md-3\">\r\n                  <label>Show Pending vouchers from beginning</label>\r\n                  <input type=\"checkbox\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <!-- <ng-container *ngIf=\"isNote\">\r\n            <trntran-note-entry [noteType]=\"noteType\"></trntran-note-entry>\r\n          </ng-container> -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\" style=\"margin-top: 5px\">\r\n    <div style=\"padding-right: 0px !important; padding-left: 0px !important;\">\r\n      <div style=\"height:480px; overflow-y: scroll\">\r\n        <table style=\"margin-bottom: 5px;font-size: 13px;width: 99%;MARGIN-LEFT: 18px;\">\r\n          <thead>\r\n            <tr style=\" border-bottom: 2px solid #E6E6E6;\r\n                              border-top: 2px solid #E6E6E6;\r\n                              height: 30px;\r\n                              background: silver;\r\n                              color: black;\">\r\n              <th style=\"width: 2%;\">Check</th>\r\n\r\n              <th style=\"width:12%;padding-left: 1%;\">Voucher No</th>\r\n              <th style=\"width: 8%;padding-left: 1%;\">\r\n                Date\r\n              </th>\r\n              <th style=\"width:14%;padding-left: 1%;\">\r\n                Account Description\r\n              </th>\r\n\r\n              <th style=\"width:8%;padding-left: 1%;\">\r\n                DR Amount\r\n              </th>\r\n              <th style=\"width:8%;padding-left: 1%;\">\r\n                CR Amount\r\n              </th>\r\n\r\n              <th style=\"width:9%;padding-left: 1%;\">\r\n                Cheque No\r\n              </th>\r\n\r\n              <th style=\"width:11%;padding-left: 1%;\">\r\n                Cheque Date </th>\r\n              <th style=\"width:13%;padding-left: 1%;\">\r\n                Cost Center </th>\r\n              <th style=\"width:10%;padding-left: 1%;\">\r\n                Salesman </th>\r\n              <th style=\"width:19%;padding-left: 0%;\">\r\n                narration </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor = 'let x of voucherList'>\r\n            <tr style=\"border: 1px solid #e6e6e6;max-height:25px;\" (dblclick)=\"drillDown(x)\">\r\n              <td style=\"line-height:21px; text-align:center\">\r\n               <input type=\"checkbox\" [hidden]=\"!x.isShowCheck\" [(ngModel)]=\"x.isCheck\" style=\"width: 14px\">\r\n               <input type=\"text\" [hidden]=\"x.isCheck\" style=\"border: none;\r\n               background: #e9e9e9;\r\n               background-color: #f1f1f1;width: 2px;\" disabled>\r\n             \r\n              </td>\r\n\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.VOUCHERNO}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.TRNDATE}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.ACCOUNTNAME}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n              {{x.DRAMNT}}\r\n\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n              {{x.CRAMNT}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n               {{x.CHEQUENO}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.CHEQUEDATE}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.COSTCENTER}}\r\n              </td>\r\n              <td style=\"line-height:21px; text-align:center\">\r\n                {{x.COSTCENTER}}\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sticky-bottom\" style=\"background: gray;\">\r\n\r\n</div>\r\n\r\n<generic-popup-grid #genericGridACList [popupsettings]=\"gridACListPopupSettings\"\r\n  (onItemDoubleClick)=\"onAcSelect($event)\"></generic-popup-grid>"

/***/ })

});
//# sourceMappingURL=25.chunk.js.map