webpackJsonpac__name_([8],{

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systemadmin_component__ = __webpack_require__(1451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systemconfiguration_systemconfiguration_component__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_permission__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__systemadmin_routing__ = __webpack_require__(1625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__systemconfiguration_printfilesetup_component__ = __webpack_require__(1626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__systemconfiguration_settingmaster_component__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__systemconfiguration_divisionmaster_component__ = __webpack_require__(1453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__systemconfiguration_taxconfigcharges_component__ = __webpack_require__(1456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__systemconfiguration_resettodefault_component__ = __webpack_require__(1627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__systemconfiguration_adddivision_component__ = __webpack_require__(1452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_multiselect_dropdown__ = __webpack_require__(1688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__systemconfiguration_otpAuth_component__ = __webpack_require__(1275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__systemconfiguration_divi_service__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__systemconfiguration_search_pipe__ = __webpack_require__(1628);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemAdminModule", function() { return SystemAdminModule; });


















var SystemAdminModule = (function () {
    function SystemAdminModule() {
    }
    return SystemAdminModule;
}());
SystemAdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__systemadmin_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_13_ng_multiselect_dropdown__["a" /* NgMultiSelectDropDownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__systemadmin_component__["a" /* SystemAdmin */],
            __WEBPACK_IMPORTED_MODULE_4__systemconfiguration_systemconfiguration_component__["a" /* SystemConfiguration */],
            __WEBPACK_IMPORTED_MODULE_7__systemconfiguration_printfilesetup_component__["a" /* PrintFileSetup */],
            __WEBPACK_IMPORTED_MODULE_8__systemconfiguration_settingmaster_component__["a" /* SettingMaster */],
            __WEBPACK_IMPORTED_MODULE_11__systemconfiguration_resettodefault_component__["a" /* ResetToDefult */],
            __WEBPACK_IMPORTED_MODULE_9__systemconfiguration_divisionmaster_component__["a" /* DivisionMaster */],
            __WEBPACK_IMPORTED_MODULE_10__systemconfiguration_taxconfigcharges_component__["a" /* TaxConfigCharges */],
            __WEBPACK_IMPORTED_MODULE_12__systemconfiguration_adddivision_component__["a" /* AddDivision */],
            __WEBPACK_IMPORTED_MODULE_15__systemconfiguration_otpAuth_component__["a" /* OtpAuth */],
            __WEBPACK_IMPORTED_MODULE_17__systemconfiguration_search_pipe__["a" /* SearchPipe */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__common_services_permission__["e" /* CanActivateTeam */], __WEBPACK_IMPORTED_MODULE_16__systemconfiguration_divi_service__["a" /* DiviService */]]
    })
], SystemAdminModule);



/***/ }),

/***/ 1268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_state__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiviService; });





//import { HttpHeaders } from '@angular/common/http';
var DiviService = (function () {
    function DiviService(http, authService, gblState) {
        this.http = http;
        this.authService = authService;
        this.gblState = gblState;
        this.divisions = [];
    }
    Object.defineProperty(DiviService.prototype, "apiUrl", {
        get: function () {
            var url = this.gblState.getGlobalSetting("apiUrl");
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
    DiviService.prototype.getDivisions = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + '/getDivisionMasterList', this.authService.getRequestOption())
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
    };
    DiviService.prototype.deleteDivision = function (INITIAL) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        var bodyData = { INITIAL: INITIAL };
        this.http.post(this.apiUrl + '/deleteDivisionMaster', bodyData, this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.getRategrp = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAllRateGroupList', this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.getCostCenter = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAllCostCenterList', this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.getDivisionDetails = function (initial) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + ("/getDivisionDetails?initial=" + initial), this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.saveMaster = function (mode, data) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        var bodyData = { mode: mode, data: data };
        this.http.post(this.apiUrl + '/saveDivisionMaster', bodyData, this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.getTaxConfig = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + '/getTaxConfigChargesList', this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.getcheckList = function (acid) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + ("/checkTaxConfigCharge?acid=" + acid), this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.resetDefault = function (selectedItems) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        console.log("ddss");
        this.http.post(this.apiUrl + "/resetToDefaultValue", selectedItems, this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.resetAllToDefault = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + '/resetPrintToDefault', this.authService.getRequestOption())
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
    };
    DiviService.prototype.resetVoucherType = function (id) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + ("/resetSelectedPrintToDefault?voucherPrefix=" + id), this.authService.getRequestOption())
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
    };
    DiviService.prototype.getPrintFileName = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + '/getVoucherWisePrintFileName', this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.getVoucherType = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + '/getVouchertypeForPrint', this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.getDefaultPrintFile = function (id) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + ("/getDefaultPrintFile?voucherType=" + id), this.authService.getRequestOption())
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
            res.result = error._body;
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    ;
    DiviService.prototype.getSettingDes = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + '/getSettingDescription', this.authService.getRequestOption())
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
    };
    ;
    DiviService.prototype.authOTP = function (otp) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.http.get(this.apiUrl + ("/authenticateOTP?OTP=" + otp), this.authService.getRequestOption())
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
    };
    DiviService.prototype.uploadPrintFile = function (file, id) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        var options = this.getRequestOptionwithoutContent();
        this.http.post(this.apiUrl + ("/uploadReportFile?voucherPrefix=" + id), file, options)
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
    };
    DiviService.prototype.updateSettingDes = function (value, mode) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        var data = { mode: mode, data: value };
        this.http.post(this.apiUrl + "/updateSettingDescription", data, this.authService.getRequestOption())
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
    };
    //   private getRequestOptionwithoutContent(){
    //     const headers =  new HttpHeaders({
    //       Authorization: this.authService.getAuth().token
    //     });
    //     return headers;
    //   }
    DiviService.prototype.getRequestOptionwithoutContent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            Authorization: this.authService.getAuth().token
            // Don't set Content-Type, let the browser handle it for FormData
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
    };
    return DiviService;
}());
DiviService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__global_state__["a" /* GlobalState */]])
], DiviService);



/***/ }),

/***/ 1275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__divi_service__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpAuth; });



var OtpAuth = (function () {
    function OtpAuth(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.hideOtp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isOtpVisible = false;
    }
    OtpAuth.prototype.closeOtp = function (value) {
        this.isOtpVisible = false;
        this.hideOtp.emit(value || "");
        this.authOTP = "";
    };
    OtpAuth.prototype.showOTPpopUp = function () {
        this.isOtpVisible = true;
    };
    OtpAuth.prototype.onSubmit = function () {
        var _this = this;
        this.service.authOTP(this.authOTP).subscribe(function (data) {
            if (data.status == 'ok') {
                _this.alertService.success(data.result);
                _this.closeOtp(data.result);
            }
            else {
                _this.alertService.error(data.result._body);
            }
            _this.authOTP = "";
        }, function (error) {
            _this.alertService.error(error.result._body);
            _this.closeOtp(null);
        });
    };
    return OtpAuth;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], OtpAuth.prototype, "hideOtp", void 0);
OtpAuth = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'otpAuth',
        template: __webpack_require__(1874),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__divi_service__["a" /* DiviService */], __WEBPACK_IMPORTED_MODULE_2__common_services_alert_alert_service__["a" /* AlertService */]])
], OtpAuth);



/***/ }),

/***/ 1451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemAdmin; });

var SystemAdmin = (function () {
    function SystemAdmin() {
    }
    return SystemAdmin;
}());
SystemAdmin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systemadmin',
        template: '<router-outlet></router-outlet>'
    })
], SystemAdmin);



/***/ }),

/***/ 1452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__divi_service__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__otpAuth_component__ = __webpack_require__(1275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_repositories__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDivision; });









var AddDivision = (function () {
    function AddDivision(router, divisionService, route, loadingService, alertService, masterService, _fb) {
        this.router = router;
        this.divisionService = divisionService;
        this.route = route;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.masterService = masterService;
        this._fb = _fb;
        this.division = {};
        this.divisionList = [];
        this.initial = '';
        this.name = '';
        this.rategrp = [];
        this.costCenters = [];
        this.priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
        this.locationCategories = [
            { location_id: '0', locationName: 'Inside Valley' },
            { location_id: '1', locationName: 'Outside Valley' }
        ];
        this.modeTitle = '';
        this.gridBranchAccListPopupSettings = new __WEBPACK_IMPORTED_MODULE_2__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridCashAccListPopupSettings = new __WEBPACK_IMPORTED_MODULE_2__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.division.comid = this.masterService.userProfile.CompanyInfo.COMID;
    }
    AddDivision.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.loadRategrp();
        this.loadCostCenter();
        this.route.params.subscribe(function (params) {
            _this.mode = params['mode'];
            if (_this.mode === 'edit' || _this.mode === 'view') {
                var initial = params["Initial"];
                _this.modeTitle = _this.mode === 'edit' ? 'Edit Division' : 'View Division';
                _this.divisionService.getDivisionDetails(initial).subscribe(function (data) {
                    _this.division = data.result;
                    _this.form.patchValue(_this.division);
                    // this.division.BRANCHNAME = data.result.ACNAME;
                    // this.division.BRANCH = data.result.ACID;
                    // this.division.RATEGRUOPID= data.result.RateGroupID;
                    // this.division.NAME= data.result.NAME;
                    // this.division.INITIAL= data.result.INITIAL;
                    // this.division.ADDRESS2=data.result.ADDRESS2;
                    // this.division.REMARKS=data.result.REMARKS;
                    // this.division.ID=data.result.ID;
                    if (_this.mode == 'edit') {
                        _this.form.get('INITIAL').disable();
                    }
                    if (_this.mode == 'view') {
                        _this.form.get('INITIAL').disable();
                        _this.form.get('NAME').disable();
                        _this.form.get('ADDRESS2').disable();
                        _this.form.get('REMARKS').disable();
                        _this.form.get('ACNAME').disable();
                        _this.form.get('RateGroupID').disable();
                        _this.form.get('COSTCENTER').disable();
                        _this.form.get('Priority').disable();
                        _this.form.get('LocationCategory').disable();
                        _this.form.get('CASH_AC_NAME').disable();
                    }
                }, function (error) {
                    console.error('Error fetching permissions', error);
                });
                console.log(_this.division);
            }
            else {
                _this.modeTitle = 'New Division';
            }
        });
    };
    AddDivision.prototype.initializeForm = function () {
        this.form = this._fb.group({
            INITIAL: ['', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].maxLength(3)]],
            NAME: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required],
            ADDRESS2: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["Validators"].required],
            REMARKS: [''],
            ACNAME: [''],
            RateGroupID: [''],
            COSTCENTER: [''],
            Priority: [''],
            LocationCategory: [''],
            CASH_AC_NAME: [''],
        });
    };
    AddDivision.prototype.toggleOtpPopup = function () {
        this.OtpPopUp.showOTPpopUp();
    };
    AddDivision.prototype.hideOtpPopup = function (value) {
        if (value === "Authentication successful!") {
            this.onSave();
        }
        else {
            return;
        }
        console.log("emitted value", value);
    };
    AddDivision.prototype.BranchListPopup = function () {
        this.gridBranchAccListPopupSettings = {
            title: "Branch Account",
            apiEndpoints: "/getAccountPagedListByPType/PA/C/0",
            defaultFilterIndex: 0,
            columns: [
                { key: "ACNAME", title: " Name", hidden: false, noSearch: false },
                { key: "VATNO", title: " VAT No.", hidden: false, noSearch: false },
                { key: "ADDRESS", title: " ADDRESS", hidden: false, noSearch: false },
                { key: "MOBILE", title: " Mobile No.", hidden: false, noSearch: false }
            ]
        };
        this.genericGridBranchAccList.show();
    };
    AddDivision.prototype.CashListPopup = function () {
        this.gridCashAccListPopupSettings = {
            title: "Cash Account",
            apiEndpoints: "/getAllCashAccountsPagedList",
            defaultFilterIndex: 0,
            columns: [
                { key: "ACCODE", title: " AC Code", hidden: false, noSearch: false },
                { key: "ACNAME", title: " AC Name", hidden: false, noSearch: false }
            ]
        };
        this.genericGridCashAccList.show();
    };
    AddDivision.prototype.loadRategrp = function () {
        var _this = this;
        this.divisionService.getRategrp().subscribe(function (data) {
            _this.rategrp = data;
        }, function (error) {
            console.error('Error fetching permissions', error);
        });
    };
    AddDivision.prototype.loadCostCenter = function () {
        var _this = this;
        this.divisionService.getCostCenter().subscribe(function (data) {
            _this.costCenters = data;
        }, function (error) {
            console.error('Error fetching permissions', error);
        });
    };
    AddDivision.prototype.cancel = function () {
        this.returnUrl = "pages/systemadmin/adddivision";
        this.router.navigate([this.returnUrl]);
    };
    AddDivision.prototype.onSave = function () {
        var _this = this;
        this.loadingService.show("Data is Saving ..");
        this.divisionService.saveMaster(this.mode, this.division)
            .subscribe(function (response) {
            if (response.status == 'ok') {
                _this.loadingService.hide();
                // this.alertService.info(response.result);
                _this.alertService.success("Data Saved Successfully");
                _this.division = "";
                _this.router.navigate(['pages/systemadmin/divisionmaster']);
                setTimeout(function () {
                    _this.alertService.hide();
                }, 1000);
                _this.cancel();
            }
            else {
                _this.loadingService.hide();
                _this.alertService.info(response.result._body);
            }
        }, function (error) {
            _this.loadingService.hide();
        });
    };
    AddDivision.prototype.goback = function () {
        this.router.navigate(['pages/systemadmin/divisionmaster']);
    };
    AddDivision.prototype.preventInput = function ($event) {
        $event.preventDefault();
        return false;
    };
    AddDivision.prototype.onBranchAccSelect = function (value) {
        this.division.ACNAME = value.ACNAME;
        this.division.ACID = value.ACID;
        this.form.patchValue({
            ACNAME: value.ACNAME,
            ACID: value.ACID
        });
    };
    AddDivision.prototype.onCashAccSelect = function (value) {
        this.division.CASH_AC_NAME = value.ACNAME;
        this.division.CASH_AC = value.ACID;
        this.form.patchValue({
            CASH_AC_NAME: value.ACNAME,
            CASH_AC: value.ACID
        });
    };
    return AddDivision;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridBranchAccList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddDivision.prototype, "genericGridBranchAccList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridCashAccList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddDivision.prototype, "genericGridCashAccList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("OTPpopUp"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__otpAuth_component__["a" /* OtpAuth */])
], AddDivision.prototype, "OtpPopUp", void 0);
AddDivision = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'adddivision',
        template: __webpack_require__(1872)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__divi_service__["a" /* DiviService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__common_services_spinner_spinner_service__["a" /* SpinnerService */], __WEBPACK_IMPORTED_MODULE_5__common_services_alert_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_7__common_repositories__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormBuilder"]])
], AddDivision);



/***/ }),

/***/ 1453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__divi_service__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivisionMaster; });




var DivisionMaster = (function () {
    function DivisionMaster(router, divisionService, alertService) {
        this.router = router;
        this.divisionService = divisionService;
        this.alertService = alertService;
        this.divisionList = [];
        this.settings = {
            mode: "external",
            add: {
                addButtonContent: '',
            },
            view: {
                viewButtonContent: 'View',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            edit: {
                editButtonContent: 'Edit',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            delete: {
                deleteButtonContent: '',
            },
            pager: {
                display: true,
                perPage: 14
            },
            columns: {
                INITIAL: {
                    title: 'Initial',
                    type: 'string'
                },
                NAME: {
                    title: 'Name',
                    type: 'string'
                },
                ADDRESS2: {
                    title: 'ADDRESS',
                    type: 'string'
                },
                REMARKS: {
                    title: 'Remarks',
                    type: 'string'
                },
                ACNAME: {
                    title: 'Branch Account',
                    type: 'string'
                },
                RateGroup_Name: {
                    title: 'Rate Group List',
                    type: 'string',
                    width: '20px'
                },
                COSTCENTER: {
                    title: 'Cost Center',
                    type: 'string',
                    width: '20px'
                }
            }
        };
    }
    DivisionMaster.prototype.ngOnInit = function () {
        this.loadDivisions();
    };
    DivisionMaster.prototype.loadDivisions = function () {
        var _this = this;
        this.divisionService.getDivisions().subscribe(function (data) {
            _this.divisionList = data.result;
        }, function (error) {
            console.error('Error fetching permissions', error);
        });
    };
    DivisionMaster.prototype.goback = function () {
        this.router.navigate(["pages/dashboard/dashboard"]);
    };
    DivisionMaster.prototype.addDivi = function () {
        this.router.navigate(['pages/systemadmin/adddivision', { mode: "add", returnUrl: this.router.url }]);
    };
    DivisionMaster.prototype.onView = function (division) {
        this.router.navigate(["pages/systemadmin/adddivision", { Initial: division.INITIAL, mode: "view", returnUrl: this.router.url }]);
    };
    DivisionMaster.prototype.onEdit = function (division) {
        this.router.navigate(["pages/systemadmin/adddivision", { Initial: division.INITIAL, mode: "edit", returnUrl: this.router.url }]);
    };
    DivisionMaster.prototype.onDelete = function (division) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this.divisionService.deleteDivision(division.INITIAL).subscribe(function (data) {
                if (data.status == "ok") {
                    _this.alertService.success(data.result);
                    _this.loadDivisions();
                }
            });
        }
        else {
            division.confirm.reject();
        }
    };
    return DivisionMaster;
}());
DivisionMaster = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'divisionmaster',
        template: __webpack_require__(1873)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__divi_service__["a" /* DiviService */], __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__["a" /* AlertService */]])
], DivisionMaster);



/***/ }),

/***/ 1454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otpAuth_component__ = __webpack_require__(1275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__divi_service__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingMaster; });






var SettingMaster = (function () {
    function SettingMaster(alertService, loadingService, router, masterSettingService) {
        var _this = this;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.router = router;
        this.masterSettingService = masterSettingService;
        this.activerowIndex = 0;
        this.showCategoryWiseSetting = true;
        this.showAllSetting = false;
        this.searchSetting = 'searchName';
        this.loadingService.show("Loading setting data...");
        this.masterSettingService.getSettingDes().subscribe(function (res) {
            if (res) {
                _this.loadingService.hide();
                if (res.status == "ok") {
                    _this.allSettings = res.result;
                    _this.filterCategory();
                }
                else {
                    _this.alertService.error(res.result);
                }
            }
        }, function (error) {
            _this.loadingService.hide();
        });
    }
    SettingMaster.prototype.hideOtpPopup = function (value) {
        if (value === "Authentication successful!") {
            this.confirmationOkClicked(true);
        }
        else {
            return;
        }
    };
    SettingMaster.prototype.filterCategory = function () {
        var result = this.allSettings;
        var arr = [];
        for (var i = 0; i < this.allSettings.length; i++) {
            var catgories = (result[i].CATEGORY);
            arr.push(catgories);
        }
        this.categoryName = Array.from(new Set(arr.filter(function (item) { return item === 'Account Settings'; })));
    };
    SettingMaster.prototype.ngOnInit = function () {
        this.modeTitle = "Master Setting Info";
    };
    SettingMaster.prototype.categoryClick = function (catName) {
        this.isActiveSettingList = true;
        this.filterModule(catName);
        if (catName !== (this.settingName && this.settingName.CATEGORY)) {
            this.isActiveSettingData = false;
        }
        this.currentChoiceCat = catName;
    };
    SettingMaster.prototype.filterModule = function (catName) {
        this.currentCatName = catName;
        var moduleList = this.allSettings.filter(function (x) { return x.CATEGORY == catName && x.MODULE; });
        var arr = [];
        for (var i = 0; i < moduleList.length; i++) {
            var module_1 = moduleList[i].MODULE;
            arr.push(module_1);
        }
        this.moduleArray = Array.from(new Set(arr));
        this.settingName = moduleList;
    };
    SettingMaster.prototype.settingClick = function (setName) {
        this.currnetSetting = setName;
        this.isActiveSettingData = true;
        var setting = this.settingName.filter(function (x) { return x.MODULE == setName; });
        this.settingDetails = setting;
        for (var i = 0; i < (this.settingDetails ? this.settingDetails.length : 0); i++) {
            if (this.settingDetails[i] && this.settingDetails[i].DATA_TYPE && this.settingDetails[i].DATA_TYPE.toLowerCase() === 'select') {
                this.settingDetails[i].POSSIBLE_VALUES_LIST = this.settingDetails[i].POSSIBLE_VALUES.split(',');
            }
        }
        this.currentChoiceList = setName;
    };
    SettingMaster.prototype.getActiveCat = function (catName) {
        if (this.currentChoiceCat === catName) {
            return 'active';
        }
        else {
            return 'not';
        }
    };
    SettingMaster.prototype.getActive = function (choiceList) {
        if (this.currentChoiceList === choiceList) {
            return 'activeList';
        }
        else {
            return 'not';
        }
    };
    SettingMaster.prototype.onUpdate = function () {
        this.OtpPopUp.showOTPpopUp();
        this.modeName = "";
    };
    SettingMaster.prototype.onInvUpdate = function (settingData) {
        var arr = [];
        arr.push(settingData);
        this.settingDetails = arr;
        this.OtpPopUp.showOTPpopUp();
        this.modeName = "";
    };
    SettingMaster.prototype.onInvReset = function (settingData) {
        var arr = [];
        arr.push(settingData);
        this.settingDetails = arr;
        this.OtpPopUp.showOTPpopUp();
        this.modeName = 'reset';
    };
    SettingMaster.prototype.confirmationOkClicked = function (event) {
        var _this = this;
        if (event == true) {
            if (confirm("Are you sure you want to save?") == true) {
                this.loadingService.show("Updating...");
                this.masterSettingService.updateSettingDes(this.settingDetails, this.modeName).subscribe(function (res) {
                    if (res) {
                        _this.loadingService.hide();
                        if (res.status == "ok") {
                            _this.alertService.success(res.result);
                            _this.isActiveSettingData = false;
                            _this.loadingService.show("Loading setting...");
                            _this.masterSettingService.getSettingDes().subscribe(function (res) {
                                if (res) {
                                    _this.allSettings = res.result;
                                    _this.filterCategory();
                                    _this.filterModule(_this.currentCatName);
                                    _this.settingClick(_this.currnetSetting);
                                    _this.loadingService.hide();
                                    _this.isActiveSettingData = true;
                                }
                                else {
                                    _this.loadingService.hide();
                                    _this.alertService.warning(res.result);
                                }
                            });
                        }
                        else {
                            _this.loadingService.hide();
                            _this.alertService.warning(res.result);
                        }
                    }
                    else {
                        _this.loadingService.hide();
                        _this.alertService.warning(res.result);
                    }
                });
            }
        }
        else {
            this.alertService.error("OTP Invalid");
        }
    };
    SettingMaster.prototype.allSetting = function () {
        if (this.allSettings) {
            for (var i = 0; i < this.allSettings.length; i++) {
                var setting = this.allSettings[i];
                if (setting && setting.CATEGORY === 'Account Settings') {
                    if (setting.DATA_TYPE && setting.DATA_TYPE.toLowerCase() === 'select') {
                        setting.POSSIBLE_VALUES_LIST = setting.POSSIBLE_VALUES ? setting.POSSIBLE_VALUES.split(',') : [];
                    }
                }
            }
        }
        this.showCategoryWiseSetting = false;
        this.showAllSetting = true;
    };
    //   allSetting() {
    //     if (this.allSettings) { 
    //       for(let i=0; i< ) {
    //             let setting = this.allSettings[i];
    //         }
    //     }
    //     this.showCategoryWiseSetting = false;
    //     this.showAllSetting = true;
    // }
    SettingMaster.prototype.categoryWiseSetting = function () {
        this.showCategoryWiseSetting = true;
        this.showAllSetting = false;
    };
    SettingMaster.prototype.setToDefault = function () {
        this.OtpPopUp.showOTPpopUp();
        this.modeName = "reset";
    };
    SettingMaster.prototype.inputChange = function () {
        this.isActiveSettingData = true;
        this.isActiveSettingList = true;
    };
    SettingMaster.prototype.cancel = function () {
        try {
            this.router.navigate(["./pages/dashboard"]);
        }
        catch (ex) {
            alert(ex);
        }
    };
    SettingMaster.prototype.resetAllNormalSetting = function () {
        this.settingDetails = this.allSettings.filter(function (x) { return x.MODULE != 'Mandatory Settings'; });
        this.OtpPopUp.showOTPpopUp();
        this.modeName = 'reset';
    };
    return SettingMaster;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("OTPpopUp"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__otpAuth_component__["a" /* OtpAuth */])
], SettingMaster.prototype, "OtpPopUp", void 0);
SettingMaster = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'settingmaster',
        template: __webpack_require__(1877)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_4__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3__divi_service__["a" /* DiviService */]])
], SettingMaster);



/***/ }),

/***/ 1455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemConfiguration; });


var SystemConfiguration = (function () {
    function SystemConfiguration(route) {
        this.route = route;
    }
    ;
    SystemConfiguration.prototype.onDivisionClick = function () {
        this.route.navigate(['/pages/systemadmin/divisionmaster']);
    };
    SystemConfiguration.prototype.onSettingMasterClick = function () {
        this.route.navigate(['/pages/systemadmin/settingmaster']);
    };
    SystemConfiguration.prototype.onTaxconfigClick = function () {
        this.route.navigate(['/pages/systemadmin/taxconfigcharges']);
    };
    return SystemConfiguration;
}());
SystemConfiguration = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "systemconfiguration",
        template: __webpack_require__(1878),
        styles: ["\n    background-color:white;\n    "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
], SystemConfiguration);



/***/ }),

/***/ 1456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__divi_service__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxConfigCharges; });




var TaxConfigCharges = (function () {
    function TaxConfigCharges(router, taxconfig, route, alertservice) {
        this.router = router;
        this.taxconfig = taxconfig;
        this.route = route;
        this.alertservice = alertservice;
        this.configItems = [];
    }
    TaxConfigCharges.prototype.ngOnInit = function () {
        this.loadTaxconfig();
    };
    TaxConfigCharges.prototype.goback = function () {
        this.router.navigate(["pages/dashboard/dashboard"]);
    };
    TaxConfigCharges.prototype.loadTaxconfig = function () {
        var _this = this;
        this.taxconfig.getTaxConfig().subscribe(function (data) {
            _this.configItems = data.result;
        }, function (error) {
            console.error('Error fetching permissions', error);
        });
    };
    TaxConfigCharges.prototype.preventInput = function ($event) {
        $event.preventDefault();
        return false;
    };
    TaxConfigCharges.prototype.checkList = function (acid) {
        var _this = this;
        if (acid == null) {
            acid = "";
        }
        this.taxconfig.getcheckList(acid).subscribe(function (data) {
            _this.alertservice.error(data.result._body);
        }, function (error) {
            console.error('Error fetching Acid', error);
        });
    };
    return TaxConfigCharges;
}());
TaxConfigCharges = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'taxconfigcharges',
        template: __webpack_require__(1879)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__divi_service__["a" /* DiviService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__["a" /* AlertService */]])
], TaxConfigCharges);



/***/ }),

/***/ 1625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systemadmin_component__ = __webpack_require__(1451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systemconfiguration_systemconfiguration_component__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systemconfiguration_settingmaster_component__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__systemconfiguration_divisionmaster_component__ = __webpack_require__(1453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__systemconfiguration_taxconfigcharges_component__ = __webpack_require__(1456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__systemconfiguration_adddivision_component__ = __webpack_require__(1452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__systemconfiguration_otpAuth_component__ = __webpack_require__(1275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__systemadmin_component__["a" /* SystemAdmin */],
        children: [
            { path: 'systemconfiguration', component: __WEBPACK_IMPORTED_MODULE_3__systemconfiguration_systemconfiguration_component__["a" /* SystemConfiguration */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'adddivision', component: __WEBPACK_IMPORTED_MODULE_7__systemconfiguration_adddivision_component__["a" /* AddDivision */] },
            { path: 'divisionmaster', component: __WEBPACK_IMPORTED_MODULE_5__systemconfiguration_divisionmaster_component__["a" /* DivisionMaster */] },
            { path: 'settingmaster', component: __WEBPACK_IMPORTED_MODULE_4__systemconfiguration_settingmaster_component__["a" /* SettingMaster */] },
            { path: 'otpAuth', component: __WEBPACK_IMPORTED_MODULE_8__systemconfiguration_otpAuth_component__["a" /* OtpAuth */] },
            { path: 'taxconfigcharges', component: __WEBPACK_IMPORTED_MODULE_6__systemconfiguration_taxconfigcharges_component__["a" /* TaxConfigCharges */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 1626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__divi_service__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__otpAuth_component__ = __webpack_require__(1275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintFileSetup; });







var PrintFileSetup = (function () {
    function PrintFileSetup(router, Service, alertservice, loadingService) {
        this.router = router;
        this.Service = Service;
        this.alertservice = alertservice;
        this.loadingService = loadingService;
        this.isModalVisible = false;
        this.isOtpVisible = false;
        this.fileName = [];
        this.vouchertype = [];
        this.fileList = null;
    }
    PrintFileSetup.prototype.ngOnInit = function () {
        this.loadVoucherType();
    };
    PrintFileSetup.prototype.toggleOtpPopup = function (btnClicked) {
        this.BtnClicked = btnClicked;
        this.OtpPopUp.showOTPpopUp();
    };
    PrintFileSetup.prototype.hideOtpPopup = function (value) {
        if (value === "Authentication successful!") {
            switch (this.BtnClicked) {
                case "RESETTODEFAULT":
                    this.reset();
                    break;
                case "UPLOAD":
                    this.confirmationUploadClicked(true);
                    break;
            }
        }
        else {
            return;
        }
        console.log("emitted value", value);
    };
    PrintFileSetup.prototype.toggleModal = function (event) {
        var _this = this;
        var checkbox = event.target;
        this.isModalVisible = checkbox.checked;
        this.Service.getPrintFileName().subscribe(function (data) {
            _this.fileName = data.result;
        }, function (error) {
            console.error('Error fetching permissions', error);
        });
    };
    PrintFileSetup.prototype.hideModal = function () {
        this.isModalVisible = false;
        var checkbox = this.checkbox.nativeElement;
        checkbox.checked = false;
        console.log('Hiding modal');
    };
    PrintFileSetup.prototype.goback = function () {
        this.router.navigate(['pages/dashboard/dashboard']);
    };
    PrintFileSetup.prototype.loadVoucherType = function () {
        var _this = this;
        this.Service.getVoucherType().subscribe(function (data) {
            _this.vouchertype = data;
        }, function (error) {
            console.error('Error fetching Voucher Type', error);
        });
    };
    // onDefaultPrintFile(){
    //   this.Service.getDefaultPrintFile(this.selectedVoucherType).subscribe(data =>{
    //     if (data.status === 'ok') {
    //       this.defaultPrintFile=data.result;
    //     }
    //   },error => {
    //     console.error('Error fetching File', error);
    //   });
    // }
    PrintFileSetup.prototype.reset = function () {
        var _this = this;
        this.Service.resetVoucherType(this.selectedVoucherType).subscribe(function (data) {
            if (data.status = 'ok') {
                _this.alertservice.success(data.result);
            }
            else {
                _this.alertservice.error(data.result._body);
            }
            // this.selectedVoucherType=[];
        }, function (error) {
            console.error('Error fetching permissions', error);
        });
    };
    PrintFileSetup.prototype.resetAll = function () {
        var _this = this;
        this.Service.resetAllToDefault().subscribe(function (data) {
            if (data.status = 'ok') {
                _this.alertservice.success("PrintFile is successfully reset to default");
            }
            else {
                _this.alertservice.error(data.result._body);
            }
        }, function (error) {
            console.error('Error fetching permissions', error);
        });
    };
    PrintFileSetup.prototype.downloadJS = function (printfilename) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__environment__["c" /* AppConfiguration */].apiUrl + ("/downloadPrintFilesForSystemUser/" + printfilename);
        fetch(url)
            .then(function (resp) { return resp.blob(); })
            .then(function (blob) {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = printfilename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            _this.alertservice.success('Your file has downloaded!');
        })
            .catch(function () { return alert('Download Failed'); });
    };
    PrintFileSetup.prototype.downloadDefaultFile = function () {
        var _this = this;
        this.Service.getDefaultPrintFile(this.selectedVoucherType).subscribe(function (res) {
            if (res.status == 'ok') {
                var printfilename = res.result;
                _this.downloadJS(printfilename);
            }
            else {
                _this.alertservice.error(res.result);
            }
        }, function (error) {
            console.log("w", error);
            _this.alertservice.error(error.error.result);
            _this.loadingService.hide();
        });
    };
    PrintFileSetup.prototype.onFileChange = function ($event) {
        this.fileList = $event.target.files;
    };
    PrintFileSetup.prototype.confirmationUploadClicked = function (event) {
        var _this = this;
        if (event == true) {
            console.log("FILE LIST", this.fileList);
            if (this.selectedVoucherType == null || this.selectedVoucherType == "") {
                this.alertservice.info("Please Select Master.");
                return;
            }
            if (this.fileList == null || this.fileList.length == 0) {
                this.alertservice.info("Please Select File.");
                return;
            }
            if (this.fileList.length > 0) {
                var file = this.fileList[0];
                var formData = new FormData();
                formData.append("config", file, file.name);
                this.loadingService.show("Uploading. Please Wait...this may take some time");
                this.Service.uploadPrintFile(formData, this.selectedVoucherType).subscribe(function (res) {
                    console.log("result from print file upload", res);
                    _this.loadingService.hide();
                    console.log("result");
                    if (res.status == "ok") {
                        _this.alertservice.success("Request Successful");
                        _this.selectedVoucherType.VOUCHER_NAME = "";
                        _this.fileList = null;
                        //this.fileSelector_Import.nativeElement.value = null;
                        // this.PrintFileUpload.nativeElement.value = null;
                    }
                    else if (res.status == "errorfile") {
                        _this.alertservice.error("Some of the rows cannot be saved. Please check 'Upload Status' for more details.");
                    }
                    else if (res.status == "error") {
                        _this.alertservice.error("Error :" + res.result.error);
                    }
                    else {
                        _this.loadingService.hide();
                        _this.alertservice.error(res.result);
                    }
                }, function (error) {
                    _this.loadingService.hide();
                    _this.alertservice.error(error);
                });
            }
        }
        else {
            this.alertservice.error("OTP Invalid");
        }
    };
    return PrintFileSetup;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalcheckbox'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], PrintFileSetup.prototype, "checkbox", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("OTPpopUp"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__otpAuth_component__["a" /* OtpAuth */])
], PrintFileSetup.prototype, "OtpPopUp", void 0);
PrintFileSetup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'printfilesetup',
        template: __webpack_require__(1875),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__divi_service__["a" /* DiviService */], __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */]])
], PrintFileSetup);



/***/ }),

/***/ 1627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__divi_service__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otpAuth_component__ = __webpack_require__(1275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetToDefult; });




var ResetToDefult = (function () {
    function ResetToDefult(resetService, alertService) {
        this.resetService = resetService;
        this.alertService = alertService;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    ResetToDefult.prototype.toggleOtpPopup = function () {
        this.OtpPopUp.showOTPpopUp();
    };
    ResetToDefult.prototype.hideOtpPopup = function (value) {
        if (value === "Authentication successful!") {
            this.reset();
        }
        else {
            return;
        }
    };
    ResetToDefult.prototype.ngOnInit = function () {
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 5,
            allowSearchFilter: true,
        };
        this.dropdownList = [
            { item_id: 'formwiseprintformat', item_text: 'Formwise Print Format' },
            { item_id: 'reportcolumnformat', item_text: 'Report Column Format' },
            { item_id: 'storedprocedure', item_text: 'Update Stored Procedure / Views' },
            { item_id: 'taxchargesconfig', item_text: 'Tax Config Charges' },
            { item_id: 'reportmaster', item_text: 'Default Report Master & Report Details' },
            { item_id: 'directorapp', item_text: 'Directors app Stored Procedure' },
            { item_id: 'reportcontextmenu', item_text: 'Drill Down' },
        ];
    };
    ResetToDefult.prototype.reset = function () {
        var _this = this;
        var printFormat = [];
        this.selectedItems.forEach(function (x) {
            printFormat.push(x.item_id);
        });
        this.resetService.resetDefault(printFormat).subscribe(function (data) {
            if (data.status == 'ok') {
                _this.alertService.success(data.result);
            }
            else {
                _this.alertService.error(data.result._body);
            }
            _this.selectedItems = [];
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ResetToDefult.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    ResetToDefult.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    return ResetToDefult;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("OTPpopUp"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__otpAuth_component__["a" /* OtpAuth */])
], ResetToDefult.prototype, "OtpPopUp", void 0);
ResetToDefult = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'resetdefault',
        template: __webpack_require__(1876)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__divi_service__["a" /* DiviService */], __WEBPACK_IMPORTED_MODULE_2__common_services_alert_alert_service__["a" /* AlertService */]])
], ResetToDefult);



/***/ }),

/***/ 1628:
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
                    var comId = (item.INITIAL) ? (item.INITIAL).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
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

/***/ 1688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(4);
/* unused harmony export MultiSelectComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgMultiSelectDropDownModule; });
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */





var ListItem = /** @class */ (function () {
    function ListItem(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
    return ListItem;
}());

var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
            return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        }
        else {
            return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
    };
    ListFilterPipe = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'multiSelectFilter',
            pure: false
        })
    ], ListFilterPipe);
    return ListFilterPipe;
}());

var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return MultiSelectComponent; }),
    multi: true
};
var noop = function () { };
var ɵ0 = noop;
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(listFilterPipe) {
        this.listFilterPipe = listFilterPipe;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = "Select";
        this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
        this._sourceDataFields = []; // store source data fields names
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
        };
        this.disabled = false;
        this.onFilterChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onDropDownClose = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onDeSelect = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onSelectAll = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onDeSelectAll = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MultiSelectComponent.prototype, "placeholder", {
        set: function (value) {
            if (value) {
                this._placeholder = value;
            }
            else {
                this._placeholder = "Select";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "settings", {
        set: function (value) {
            if (value) {
                this._settings = Object.assign(this.defaultSettings, value);
            }
            else {
                this._settings = Object.assign(this.defaultSettings);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "data", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._data = [];
            }
            else {
                var firstItem = value[0];
                this._sourceDataType = typeof firstItem;
                this._sourceDataFields = this.getFields(firstItem);
                this._data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number"
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            isDisabled: item[_this._settings.disabledField]
                        });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    MultiSelectComponent.prototype.onFilterTextChange = function ($event) {
        this.onFilterChange.emit($event);
    };
    MultiSelectComponent.prototype.onItemClick = function ($event, item) {
        if (this.disabled || item.isDisabled) {
            return false;
        }
        var found = this.isSelected(item);
        var allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    };
    MultiSelectComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        var firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === "string" || typeof firstItem === "number"
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    isDisabled: firstItem[this._settings.disabledField]
                                })
                        ];
                    }
                }
                catch (e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                var _data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number"
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            isDisabled: item[_this._settings.disabledField]
                        });
                });
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    };
    // From ControlValueAccessor interface
    MultiSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    MultiSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    // Set touched on blur
    MultiSelectComponent.prototype.onTouched = function () {
        this.closeDropdown();
        this.onTouchedCallback();
    };
    MultiSelectComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    MultiSelectComponent.prototype.isSelected = function (clickedItem) {
        var found = false;
        this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    MultiSelectComponent.prototype.isLimitSelectionReached = function () {
        return this._settings.limitSelection === this.selectedItems.length;
    };
    MultiSelectComponent.prototype.isAllItemsSelected = function () {
        // get disabld item count
        var filteredItems = this.listFilterPipe.transform(this._data, this.filter);
        var itemDisabledCount = filteredItems.filter(function (item) { return item.isDisabled; }).length;
        // take disabled items into consideration when checking
        if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
            return false;
        }
        return filteredItems.length === this.selectedItems.length + itemDisabledCount;
    };
    MultiSelectComponent.prototype.showButton = function () {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    };
    MultiSelectComponent.prototype.itemShowRemaining = function () {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    };
    MultiSelectComponent.prototype.addSelected = function (item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    };
    MultiSelectComponent.prototype.removeSelected = function (itemSel) {
        var _this = this;
        this.selectedItems.forEach(function (item) {
            if (itemSel.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    };
    MultiSelectComponent.prototype.emittedValue = function (val) {
        var _this = this;
        var selected = [];
        if (Array.isArray(val)) {
            val.map(function (item) {
                selected.push(_this.objectify(item));
            });
        }
        else {
            if (val) {
                return this.objectify(val);
            }
        }
        return selected;
    };
    MultiSelectComponent.prototype.objectify = function (val) {
        if (this._sourceDataType === 'object') {
            var obj = {};
            obj[this._settings.idField] = val.id;
            obj[this._settings.textField] = val.text;
            if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
            }
            return obj;
        }
        if (this._sourceDataType === 'number') {
            return Number(val.id);
        }
        else {
            return val.text;
        }
    };
    MultiSelectComponent.prototype.toggleDropdown = function (evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    };
    MultiSelectComponent.prototype.closeDropdown = function () {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = "";
        }
        this.onDropDownClose.emit();
    };
    MultiSelectComponent.prototype.toggleSelectAll = function () {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            // filter out disabled item first before slicing
            this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(function (item) { return !item.isDisabled; }).slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    };
    MultiSelectComponent.prototype.getFields = function (inputData) {
        var fields = [];
        if (typeof inputData !== "object") {
            return fields;
        }
        // tslint:disable-next-line:forin
        for (var prop in inputData) {
            fields.push(prop);
        }
        return fields;
    };
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", String),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:paramtypes", [String])
    ], MultiSelectComponent.prototype, "placeholder", null);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", Object)
    ], MultiSelectComponent.prototype, "disabled", void 0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", Object),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:paramtypes", [Object])
    ], MultiSelectComponent.prototype, "settings", null);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", Array),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:paramtypes", [Array])
    ], MultiSelectComponent.prototype, "data", null);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("onFilterChange"),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], MultiSelectComponent.prototype, "onFilterChange", void 0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("onDropDownClose"),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], MultiSelectComponent.prototype, "onDropDownClose", void 0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("onSelect"),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], MultiSelectComponent.prototype, "onSelect", void 0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("onDeSelect"),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], MultiSelectComponent.prototype, "onDeSelect", void 0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("onSelectAll"),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], MultiSelectComponent.prototype, "onSelectAll", void 0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("onDeSelectAll"),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])("blur"),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", Function),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:paramtypes", []),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:returntype", void 0)
    ], MultiSelectComponent.prototype, "onTouched", null);
    MultiSelectComponent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "ng-multiselect-dropdown",
            template: "<div tabindex=\"0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        {{item.text}}\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </span>\n      <span [ngClass]=\"{ 'dropdown-multiselect--active': _settings.defaultOpen }\" style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span class=\"dropdown-multiselect__caret\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [attr.aria-label]=\"item.text\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
            styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown .dropdown-btn .dropdown-multiselect--active .dropdown-multiselect__caret{transform:rotateZ(180deg)}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox:hover{background-color:#e4e3e3}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:paramtypes", [ListFilterPipe])
    ], MultiSelectComponent);
    return MultiSelectComponent;
}());

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('document:click', ['$event', '$event.target']),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:type", Function),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:paramtypes", [MouseEvent, HTMLElement]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: '[clickOutside]'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __metadata */])("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());

var NgMultiSelectDropDownModule = /** @class */ (function () {
    function NgMultiSelectDropDownModule() {
    }
    NgMultiSelectDropDownModule_1 = NgMultiSelectDropDownModule;
    NgMultiSelectDropDownModule.forRoot = function () {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    };
    var NgMultiSelectDropDownModule_1;
    NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
            declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
            providers: [ListFilterPipe],
            exports: [MultiSelectComponent]
        })
    ], NgMultiSelectDropDownModule);
    return NgMultiSelectDropDownModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-multiselect-dropdown.js.map


/***/ }),

/***/ 1872:
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\r\n  <div class=\"header\">\r\n    <h1>Division Master</h1>\r\n    <button class=\"btn btn-info pull-right\" style=\"margin-bottom: 10px; margin-left: 77rem;\" [disabled]=\"!form.valid || mode=='view'\" (click)=\"toggleOtpPopup()\">Save</button>\r\n    <button class=\"btn btn-info pull-right\" style=\"margin-bottom: 10px; margin-left: 10px;\" (click)=\"goback()\">Back</button>\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"form\"> \r\n<div class=\"row\" style=\"align-items: center; margin-top: 50px;\">\r\n  <div class=\"col-md-12 col-sm-8\">\r\n    <div class=\"card\" style=\"margin: auto; width: 60rem;\">\r\n      <div class=\"card-header\" style=\"background: #e1e1e1; \">\r\n        <span class=\"col-md-8\">{{modeTitle}}</span>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"content\" style=\"margin-top: 0.5rem; padding: 2px;\">\r\n          <!-- Form Controls -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Initial:</label>\r\n            <div class=\"col-sm-7\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"INITIAL\">\r\n              <div class=\"alert alert-danger\" *ngIf=\"form.controls['INITIAL'].touched && !form.controls['INITIAL'].valid\">Initial must be of 3 characters.</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Name:</label>\r\n            <div class=\"col-sm-7\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"NAME\">\r\n              <div class=\"alert alert-danger\" *ngIf=\"form.controls['NAME'].touched && !form.controls['NAME'].valid\">Name is Required.</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Address:</label>\r\n            <div class=\"col-sm-7\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"ADDRESS2\">\r\n              <div class=\"alert alert-danger\" *ngIf=\"form.controls['ADDRESS2'].touched && !form.controls['ADDRESS2'].valid\">Address is Required.</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Remarks:</label>\r\n            <div class=\"col-sm-7\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"REMARKS\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Branch Account:</label>\r\n            <div class=\"col-sm-7\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Press Enter to select...\" (keydown.enter)=\"BranchListPopup()\" formControlName=\"ACNAME\">\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Additional Form Controls -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Rate Group:</label>\r\n            <div class=\"col-sm-7\">\r\n              <select class=\"form-control\" formControlName=\"RateGroupID\">\r\n                <option></option>\r\n                <option *ngFor=\"let rate of this.rategrp\" [value]=\"rate.RateGroup_ID\">{{rate.RateGroup_Name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Cost Center:</label>\r\n            <div class=\"col-sm-7\">\r\n              <select class=\"form-control\" formControlName=\"COSTCENTER\">\r\n                <option></option>\r\n                <option *ngFor=\"let cost of this.costCenters\">{{cost.COSTCENTERNAME}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Priority:</label>\r\n            <div class=\"col-sm-7\">\r\n              <select class=\"form-control\" formControlName=\"Priority\">\r\n                <option *ngFor=\"let priority of priorities\" [value]=\"priority\">{{priority}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Location Category:</label>\r\n            <div class=\"col-sm-7\">\r\n              <select class=\"form-control\" formControlName=\"LocationCategory\">\r\n                <option *ngFor=\"let location of locationCategories\" [value]=\"location.location_id\">{{location.locationName}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 form-control-label\">Cash Account:</label>\r\n            <div class=\"col-sm-7\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Press Enter or Tab to select...\" (keydown.enter)=\"CashListPopup()\" (keydown.Tab)=\"CashListPopup()\" formControlName=\"CASH_AC_NAME\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</form>\r\n\r\n<generic-popup-grid #genericGridBranchAccList [popupsettings]=\"gridBranchAccListPopupSettings\" (onItemDoubleClick)=\"onBranchAccSelect($event)\"></generic-popup-grid>\r\n<generic-popup-grid #genericGridCashAccList [popupsettings]=\"gridCashAccListPopupSettings\" (onItemDoubleClick)=\"onCashAccSelect($event)\"></generic-popup-grid>\r\n\r\n<otpAuth (hideOtp)=\"hideOtpPopup($event)\"  #OTPpopUp></otpAuth>\r\n\r\n  <style>\r\n     .header {\r\n    display: flex;\r\n    /* padding: 10px; */\r\n  }\r\n  \r\n  .header h1 {\r\n    margin: 0;\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n .card{\r\n    height: 600px;\r\n   \r\n }\r\n  .form-group  label{\r\n    font-size: 14px;\r\n    font-weight: 560;\r\n  }\r\n  .form-control{\r\n    font-size: 14px;\r\n  }\r\n  span{\r\n    font-weight: bold;\r\n  }\r\n  button{\r\n    font-size: 12px;\r\n    border-radius: 0;\r\n    text-align: center;\r\n}\r\n  </style>\r\n  \r\n  \r\n"

/***/ }),

/***/ 1873:
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top \">\r\n  <div class=\"row col-md-12 header-buttons\">\r\n  <div class=\"col-md-4\">\r\n      <h5 style=\"font-weight: bold;\" >Division Master</h5>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <button class=\"btn btn-info pull-right\" style=\"font-size: 12px; margin-left: 2px;\" (click)=\"goback()\"> Back</button>\r\n    <button class=\"btn btn-info pull-right\" style=\"font-size: 12px;margin-left: 2px;\" (click)=\"addDivi()\">Add Division</button>\r\n  </div>\r\n</div>\r\n</div> \r\n\r\n<div class=\"row\" style=\"align-items: center;margin-top: 50px;\">\r\n  <div class=\"col-md-12 col-sm-8\" >\r\n    <div class=\"card\" style=\"margin: auto; width: 85rem;\">\r\n      <div class=\"card-header\" style=\"  background: #e1e1e1;\">\r\n        <span class=\"col-md-8\" >Division  Lists</span>\r\n        <div style=\"margin-left: 57rem; margin-top: -6px;\">\r\n          <input type=\"text\" name=\"search\"  class=\"form-control\" placeholder=\"Search by Initial...\" style=\"width: 25rem; height: 1.7rem; padding: 0px 6px;\" [(ngModel)]=\"searchedTerm\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <table class=\"table table-striped\">\r\n          <thead style=\"   background: #FFF; border-bottom: 1px #e1e1e1 solid; text-align: left;\">\r\n              <tr style=\"position: sticky; top:0;line-height: 1rem; \">\r\n                <th scope=\"col\" style=\"width:3%; font-weight: bold;\">S.N</th>\r\n                <th scope=\"col\" style=\"width:4%; font-weight: bold;\">Initial</th>\r\n                <th scope=\"col\" style=\"width:15%; font-weight: bold;\">Name</th>\r\n                <th scope=\"col\" style=\"width:8%; font-weight: bold;\">Address</th>\r\n                <th scope=\"col\" style=\"width:10%; font-weight: bold;\">Remarks</th>\r\n                <th scope=\"col\" style=\"width:15%; font-weight: bold;\">Branch Account</th>\r\n                <th scope=\"col\" style=\"width:15%; font-weight: bold;\">Rate Group List</th>\r\n                <th scope=\"col\" style=\"width:10%; font-weight: bold;\">Cost Center</th>\r\n                <th scope=\"col\" style=\"width:25%; font-weight: bold; text-align: center; \">Action</th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container *ngIf=\"this.divisionList && this.divisionList.length > 0\">\r\n              <tr *ngFor=\"let division of (this.divisionList| searchData: searchedTerm); let i=index\">\r\n                <td style=\"width:3%;\">{{i+1}}</td>\r\n                <td style=\"width:4%;\">{{division.INITIAL}}</td>\r\n                <td style=\"width:15%;\">{{division.NAME}}</td>\r\n                <td style=\"width:7%;\">{{division.ADDRESS2}} </td>\r\n                <td style=\"width:9%;\">{{division.REMARKS}}</td>\r\n                <td style=\"width:15%;\">{{division.ACNAME}}</td>\r\n                <td style=\"width:15%;\">{{division.RateGroup_Name}}</td>\r\n                <td style=\"width:10%;\">{{division.COSTCENTER}}</td>\r\n                <td style=\"width:25%;text-align: center; display: flex;\">\r\n                  <button style=\"width: 50px;margin:5px ; padding: 1px 10px 1px 10px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\" (click)=\"onView(division)\">View</button>\r\n                  <button style=\"width: 50px; margin: 5px; padding: 1px 10px 1px 10px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\" (click)=\"onEdit(division)\">Edit</button>\r\n                  <button style=\"width: 50px;margin: 5px; padding: 1px 10px 1px 10px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\" (click)=\"onDelete(division)\">Delete</button>\r\n                </td>\r\n                </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"this.divisionList && (this.divisionList|searchData:searchedTerm).length === 0\">\r\n              <tr>\r\n                <td colspan=\"4\">\r\n                  <div class=\"font-weight-bold\">Division Information are unavailable.</div>\r\n                </td>\r\n              </tr>\r\n          </ng-container>\r\n          </tbody>\r\n      </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n  .header {\r\n    display: flex;\r\n    padding: 10px;\r\n  }\r\n  \r\n  .header h1 {\r\n    margin: 0;\r\n    font-size: medium;\r\n    font-weight: bold;\r\n  }\r\n  .card{\r\n    max-height: 520px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  tbody {\r\n    display:block;\r\n    height: 400px;\r\n    overflow:auto;\r\n}\r\n\r\nthead, tbody tr {\r\n  display:table;\r\n  width:100%;\r\n  table-layout:fixed;\r\n}\r\n\r\nth{\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\ntd{\r\n  font-size: 12px;\r\n}\r\n\r\n  table button{\r\n    height: 25px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    width: 60px;\r\n    margin: 5px; \r\n  }\r\n  \r\n  button{\r\n    font-size: 12px;\r\n    border-radius: 0;\r\n}\r\n  </style>\r\n\r\n"

/***/ }),

/***/ 1874:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isOtpVisible\" >\r\n  <div class=\"content\">\r\n    <div class=\"otp-header\" style=\"background-color: #93acba; padding: 10px;\">\r\n      <h5 >OTP Authorization</h5>\r\n  </div>\r\n  <div class=\"mid\" style=\"padding: 10px;\">\r\n      <p>OTP Authorization is required to perform selected Action. Please enter OTP Pin to continue.</p>\r\n      <div class=\"otp-pin\" style=\"display: flex;\">\r\n        <label > OTP Pin:</label>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 300px; height: 25px; margin-left: 30px;\" [(ngModel)]=\"authOTP\">\r\n      </div>\r\n      </div>\r\n      <div style=\"display: flex; justify-content: center; padding: 12px; margin-top: 10px; border-radius: 2px;\">\r\n        <button class=\"btn btn-info \" style=\"margin-right: 5px; width: 75px; font-size: 12px;\" (click)=\"onSubmit()\">SUBMIT</button>\r\n        <button class=\"btn btn-info \" style=\"margin-right: 2px; width: 75px; font-size: 12px;\" (click)=\"closeOtp(null)\">CANCEL</button>\r\n  </div>\r\n  </div>\r\n \r\n</div>\r\n     \r\n<style>\r\n.card{\r\n  display: block; \r\n  position: fixed;\r\n  top: 45%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1050;\r\n  background-color: white;\r\n  border: 1px solid #22638f;\r\n  width: 500px;\r\n  height: 230px;\r\n  font-weight: bold;\r\n}\r\n\r\n.content{\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n</style>"

/***/ }),

/***/ 1875:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" style=\"margin-bottom: 0px\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <div class=\"col-md-10\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-4 from-control-label\">Select a Voucher type</label>\r\n                  <div class=\"col-md-6\">\r\n                    <select  style=\"width: 86%; font-size: 12px;\" [(ngModel)]=\"selectedVoucherType\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option></option>\r\n                        <option *ngFor=\"let voucher of vouchertype\" [value]=\"voucher.VOUCHER_ID\">{{voucher.VOUCHER_NAME}}</option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 from-control-label\">Choose a Path</label>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                          <input type=\"file\" class=\"form-control\" style=\"height: 35px;width: 91.5%; font-size: 14px;\" (change)=\"onFileChange($event)\">\r\n                      </div>\r\n                      <div class=\"col-md-7\">\r\n                          <div class=\"form-check\">\r\n                              <input class=\"form-check-input\" type=\"checkbox\" data-toggle=\"modal\" #modalcheckbox (change)=\"toggleModal($event)\" style=\"width: 17px; height: 17px;\">\r\n                              <label class=\"form-check-label\" for=\"gridCheck\" style=\"padding-top: 5px;\">\r\n                                  Show All Print File Name\r\n                              </label>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <button type=\"button\" class=\"btn btn-info pull-left\" style=\"margin-left: 10px;\" (click)=\"downloadDefaultFile()\">\r\n                  Download Default Print File\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-info pull-left\" style=\"margin-left: 10px;\" (click)=\"toggleOtpPopup('UPLOAD')\">\r\n                  Upload Print File\r\n              </button>\r\n              <button class=\"btn btn-info pull-left\" style=\"margin-left: 10px;\" (click)=\"toggleOtpPopup('RESETTODEFAULT')\">\r\n                  Reset To Default\r\n              </button>\r\n              <button class=\"btn btn-info pull-left\" style=\"margin-left: 10px;\" (click)=\"goback()\">\r\n                  Back\r\n              </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-sticky\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" *ngIf=\"isModalVisible\">\r\n  <div class=\"modal-content\">\r\n      <table class=\"table table-sm\">\r\n          <thead>\r\n              <tr style=\"position: sticky; top: 0; line-height: 1rem; background-color: #7c9eb0; color: #ffffff; padding: 10px;\">\r\n                  <th style=\"width: 30%; font-weight: bold; text-align: left;\">Voucher Name</th>\r\n                  <th style=\"width: 60%; font-weight: bold; text-align: left;\">Print File Name</th>\r\n                  <th>\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\" (click)=\"hideModal()\">&times;</span>\r\n                      </button>\r\n                  </th>\r\n              </tr>\r\n          </thead>\r\n          <tbody style=\"cursor: pointer;padding: 5px; font-size: 12px;\">\r\n            <tr *ngFor=\"let name of fileName\">\r\n                <td style=\"width: 50%;\">{{name.VoucherName}}</td>\r\n                <td style=\"width: 50%;\">{{name.FileName}}</td>\r\n              </tr>      \r\n          </tbody>\r\n      </table>\r\n  </div>\r\n</div>\r\n\r\n<otpAuth (hideOtp)=\"hideOtpPopup($event)\"  #OTPpopUp></otpAuth>\r\n\r\n \r\n  <style>\r\n    .form-group{\r\n        display:flex;\r\n        flex-direction:column;\r\n    }\r\n    .main-container{\r\n        justify-content: space-between;\r\n    }\r\n    .checkbox-group{\r\n      direction: flex;\r\n      align-items: center;\r\n    }\r\n    select{\r\n      height: 33px;\r\n      border: 1px solid #d6d6d6;\r\n      border-radius: 5px;\r\n    }\r\n    .row{\r\n      display: flex;\r\n      margin-left: 1px;\r\n    }\r\n    .modal-content {\r\n    position: relative;\r\n    width: 100%;\r\n    z-index: 1051;\r\n    max-height: 500px;\r\n    overflow: auto;\r\n  }\r\n\r\n  .modal-sticky {\r\n    display: block;\r\n    position: fixed;\r\n    top: 45%;\r\n    left: 54%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1050;\r\n    background-color: white;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 0 5px 15px rgba(154, 154, 154, 0.5);\r\n    height: 400px;\r\n    width: 50%;\r\n  }\r\n  .table tbody td {\r\n    text-align: left;\r\n  }\r\n\r\n</style>\r\n\r\n\r\n  "

/***/ }),

/***/ 1876:
/***/ (function(module, exports) {

module.exports = "<style>\r\n button {\r\n  background-color: #009688;\r\n  color: white;\r\n  border: none;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  margin-left: 30px;\r\n  font-size: small;\r\n}\r\n.resetdefault{\r\n  display: inline-flex;\r\n  margin-left: 50px;\r\n  margin-top: 15px;\r\n}\r\n.multi{\r\n  width: 550px;\r\n}\r\n</style>\r\n\r\n<div class=\"resetdefault\">\r\n\r\n<div class=\"multi\">\r\n  <ng-multiselect-dropdown\r\n[placeholder]=\"'Select for Reset'\"\r\n[settings]=\"dropdownSettings\"\r\n[data]=\"dropdownList\"\r\n[(ngModel)]=\"selectedItems\"\r\n(onSelect)=\"onItemSelect($event)\"\r\n(onSelectAll)=\"onSelectAll($event)\"\r\n>\r\n</ng-multiselect-dropdown>\r\n</div>\r\n\r\n<div class=\"reset-button\">\r\n<button (click)=\"toggleOtpPopup()\">Reset To Default</button>\r\n\r\n</div>\r\n</div> \r\n\r\n\r\n<otpAuth (hideOtp)=\"hideOtpPopup($event)\"  #OTPpopUp></otpAuth>"

/***/ }),

/***/ 1877:
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\r\n  <div class=\"col-md-8 col-5\">\r\n    <h5>{{modeTitle}}</h5>\r\n  </div>\r\n  <div class=\"col-md-4 col-7 pull-right\">\r\n    <div class=\"pull-right mx-2\" style=\"width: 100%\">\r\n      <div class=\"mx-2\" style=\" width: 100%\">\r\n        <div class=\"pull-right mx-2\" class=\"top-bar\">\r\n          <button type=\"button\" class=\"btn btn-info btn-sm all_setting\" (click)=\"allSetting()\">ALL SETTING</button>\r\n          <button type=\"button\" class=\"btn btn-info btn-sm category_setting\" (click)=\"categoryWiseSetting()\">CATEGORY WISE SETTING</button>\r\n          <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"cancel()\">BACK</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sidebar mx-auto\">\r\n  <div class=\"sidebar-list\" *ngIf=\"this.showCategoryWiseSetting\">\r\n    <!-- first column -->\r\n    <div class=\"setting-category\">\r\n      <table class=\"table table-bordered table-sm\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Setting Category</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor='let catList of this.categoryName'>\r\n            <td (click)=\"categoryClick(catList)\" class=\"category-list {{ getActiveCat(catList) }}\">\r\n              {{catList}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- second column -->\r\n    <div class=\"setting-list\">\r\n      <div *ngIf=\"isActiveSettingList\" class=\"setting-list-2\">\r\n        <table class=\"table table-bordered table-sm\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Module</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let setList of this.moduleArray'>\r\n              <td (click)=\"settingClick(setList)\" class=\"setting-datalist {{ getActive(setList) }}\">\r\n                {{setList}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- third column -->\r\n    <div class=\"data-table\" *ngIf=\"isActiveSettingData\">\r\n      <div class=\"data-table-2\">\r\n        <table class=\"table table-sm\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"setting-name\">Setting Name</th>\r\n              <th scope=\"col\" class=\"setting-value\">Setting Value</th>\r\n              <th scope=\"col\" class=\"setting-description\">Description</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let settingData of this.settingDetails \">\r\n              <td class=\"setting-name-data\">{{settingData.SETTING_NAME}}</td>\r\n              <td class=\"setting-value-data\">\r\n                <div *ngIf=\"(settingData.DATA_TYPE).toLowerCase() == 'text' \">\r\n                  <input class=\"setting-value-input\" type=\"text\" [(ngModel)]=\"settingData.SETTING_VALUE\" />\r\n                </div>\r\n                <div *ngIf=\"(settingData.DATA_TYPE).toLowerCase() == 'number' \">\r\n                  <input class=\"setting-value-checkbox\" type=\"checkbox\"\r\n                    (change)=\"$event.target.checked? (settingData.SETTING_VALUE = 1) : (settingData.SETTING_VALUE = 0)\"\r\n                    [checked]=\"settingData.SETTING_VALUE == 1\" />\r\n                </div>\r\n                <div *ngIf=\"settingData.DATA_TYPE == 'select' \">\r\n                  <select class=\"setting-value-select\" [(ngModel)]=\"settingData.SETTING_VALUE\">\r\n                    <option value=\"\" *ngFor=\"let list of settingData.POSSIBLE_VALUES_LIST\" [ngValue]=\"list\">{{list}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </td>\r\n              <td>{{settingData.DESCRIPTION}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"buttons\">\r\n        <div class=\"mx-auto\">\r\n          <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"setToDefault()\">RESET TO DEFAULT</button>\r\n          <button type=\"submit\" class=\"btn btn-info btn-sm\" (click)=\"onUpdate()\">UPDATE</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sidebar-list\" *ngIf=\"this.showAllSetting\">\r\n    <div class=\"all-data-table\">\r\n      <div class=\"data-table-2\">\r\n        <table class=\"table table-sm\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"setting-name\">Setting Name</th>\r\n              <th scope=\"col\" class=\"setting-value\">Setting Value</th>\r\n              <th scope=\"col\" class=\"setting-description\">Description</th>\r\n              <th scope=\"col\" class=\"actions\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let settingData of this.allSettings\">\r\n              <td class=\"setting-name-data\">{{settingData.SETTING_NAME}}</td>\r\n              <td class=\"setting-value-data\">\r\n                <div *ngIf=\"(settingData.DATA_TYPE).toLowerCase() == 'text' \">\r\n                  <input class=\"setting-value-input\" type=\"text\" [(ngModel)]=\"settingData.SETTING_VALUE\" />\r\n                </div>\r\n                <div *ngIf=\"(settingData.DATA_TYPE).toLowerCase() == 'number' \">\r\n                  <input class=\"setting-value-checkbox\" type=\"checkbox\"\r\n                    (change)=\"$event.target.checked? (settingData.SETTING_VALUE = 1) : (settingData.SETTING_VALUE = 0)\"\r\n                    [checked]=\"settingData.SETTING_VALUE == 1\" />\r\n                </div>\r\n                <div *ngIf=\"settingData.DATA_TYPE == 'select' \">\r\n                  <select class=\"setting-value-select\" [(ngModel)]=\"settingData.SETTING_VALUE\">\r\n                    <option *ngFor=\"let list of settingData.POSSIBLE_VALUES_LIST\" [ngValue]=\"list\">{{list}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </td>\r\n              <td class=\"setting-value-desc\">{{settingData.DESCRIPTION}}</td>\r\n              <td class=\"action-button-group\">\r\n                <button class=\"btn btn-info btn-sm action-button\" (click)=\"onInvUpdate(settingData)\">Update</button>\r\n                <button class=\"btn btn-info btn-sm action-button\" (click)=\"onInvReset(settingData)\">Reset to Default</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<otpAuth (hideOtp)=\"hideOtpPopup($event)\"  #OTPpopUp></otpAuth>\r\n\r\n\r\n<style>\r\n  input, select, textarea {\r\n  border: 1px solid #cbcbcb;\r\n  border-radius: 3px;\r\n  color: black;\r\n}\r\n\r\nbutton{\r\n  font-size: 11px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n\r\n.all_setting{\r\n  width: 25%;\r\n  margin: 2px;\r\n}\r\n\r\n.category_setting{\r\n  width: 40%;\r\n  margin: 2px;\r\n}\r\n\r\nlabel {\r\n  width: 62px;\r\n  height: 25px;\r\n  font-size: 13px;\r\n}\r\np {\r\n  font-size: 13px;\r\n}\r\n\r\n.form-control {\r\n  font-size: 13px;\r\n}\r\n\r\ntd {\r\n  border-bottom: 1px solid #cacaca;\r\n  font-size: 12px;\r\n}\r\n\r\ninput {\r\n  padding: 8px;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 0rem;\r\n}\r\n\r\n.card-header {\r\n  background-color: #c0c0c0;\r\n}\r\n\r\n.top-bar{\r\n  display: flex; \r\n  max-width: 50%; \r\n  min-width: 100%; \r\n  align-items: center;\r\n}\r\n\r\n.top-bar-2{\r\n  display: flex; \r\n  align-items: center; \r\n  width: 100%;\r\n\r\n  label{\r\n    font-weight: bold;\r\n  }\r\n}\r\n\r\n.top-bar-input{\r\n  width: 100%; \r\n  margin-top: 0.2%;\r\n\r\n  input{\r\n    height: 1.5rem;\r\n    font-size:13px; \r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.sticky-top{\r\n  justify-content: space-between;\r\n}\r\n\r\nthead {\r\n  background: #9ccae4;\r\n  position: sticky;\r\n  top: 0;\r\n  font-size: 13px;\r\n  background: #628FA5;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.tr-flex {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.sidebar {\r\n  width: 99%;\r\n  height: 80vh;\r\n  margin-top: 3.3%;\r\n}\r\n\r\n.sidebar-list {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.data-table {\r\n  height: 91%;\r\n  width: 67%;\r\n  border-right: 1px solid #cacaca;\r\n}\r\n\r\n.data-table-2{\r\n  max-height: 100%; \r\n  overflow-y: auto;\r\n}\r\n\r\n.setting-name {\r\n  width: 25%;\r\n  border-right:1px solid #cacaca;\r\n}\r\n\r\n.setting-value {\r\n  width: 13%;\r\n  border-right: 1px solid #cacaca;\r\n  height: 20px;\r\n}\r\n\r\n.setting-description{\r\n  border-right: 1px solid #cacaca;\r\n}\r\n\r\n.actions{\r\n  width: 14%;\r\n}\r\n\r\n.setting-action {\r\n  width: 13%;\r\n}\r\n\r\n.action-button-group{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.setting-category {\r\n  width: 13%;\r\n  min-width: 74px;\r\n  background-color: lightgray;\r\n  border-bottom: 1px solid #cacaca;\r\n}\r\n\r\n.setting-list {\r\n  height: 100%; \r\n  overflow-y: auto; \r\n  overflow-x: hidden; \r\n  width: 20%;  \r\n}\r\n\r\n.setting-list-2{\r\n  border-right: 1px solid #cacaca; \r\n  height:100%; \r\n  border-bottom: 1px solid #cacaca;\r\n\r\n  th{\r\n    position: sticky;\r\n  }\r\n}\r\n\r\n.all-data-table{\r\n  width: 100%;\r\n  border-right: 1px solid #cacaca;\r\n  border-bottom: 1px solid #cacaca;\r\n  border-left: 1px solid #cacaca;\r\n}\r\n\r\n.action-button{\r\n  font: 10px;\r\n  margin: 2px;\r\n}\r\n\r\n.setting-value-desc{\r\n  border-right: 1px solid #cacaca;\r\n}\r\n\r\nth {\r\n  font-weight: 400;\r\n}\r\n\r\n.category-list {\r\n  cursor: pointer;\r\n}\r\n\r\n.setting-datalist {\r\n  cursor: pointer;\r\n}\r\n\r\n.active {\r\n  background-color: #cacaca;\r\n  color: black;\r\n}\r\n\r\n.activeList {\r\n  background-color: #cacaca;\r\n  color: black;\r\n}\r\n\r\n.setting-value-input{\r\n  width: 70%;\r\n  text-align: center;\r\n}\r\n\r\n.setting-value-checkbox{\r\n  width: 70%;\r\n  text-align: center;\r\n  height: 16px;\r\n}\r\n\r\n.setting-value-select{\r\n  width: 70%;\r\n  text-align: center;\r\n}\r\n\r\n.setting-value-data{\r\n  text-align: center; \r\n  border-right: 1px solid #cacaca;\r\n  vertical-align: middle;\r\n}\r\n\r\n.setting-name-data{\r\n  border-right: 1px solid #cacaca;\r\n  border-left: 1px solid #cacaca;\r\n}\r\n\r\n.buttons{\r\n  width: 100%; \r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n</style>\r\n"

/***/ }),

/***/ 1878:
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\" style=\"margin-top: 5px; font-size: 12px; font-weight:550;\">\r\n    <ul class=\"nav nav-tabs\" style=\"background-color: #d7e5f2  !important \">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" href=\"#PrintFileSetup\" data-toggle=\"tab\" style=\"color:black\">Print File Setup</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#ResetToDefaul\" data-toggle=\"tab\" style=\"color:black\">Reset to Default</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  data-toggle=\"tab\" style=\"color:black;cursor: pointer;\" (click)=\"onSettingMasterClick()\">Setting Master</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  data-toggle=\"tab\" style=\"color:black;cursor: pointer;\" (click)=\"onDivisionClick()\">Division Master</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  data-toggle=\"tab\" style=\"color:black;cursor: pointer;\" (click)=\"onTaxconfigClick()\">Tax Config Charges</a>\r\n      </li>\r\n    </ul>\r\n</div>\r\n<form >\r\n  <div class=\"tab-content\">\r\n    <div class=\"tab-pane active\" id=\"PrintFileSetup\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-md-12 row\" style=\"width: 100%;\">\r\n          <printfilesetup></printfilesetup>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"tab-pane \" id=\"ResetToDefaul\">\r\n      <div class=\"row clearfix\">\r\n      <div class=\"col-md-12 row\" style=\"width: 100%;\">\r\n        <resetdefault></resetdefault>\r\n      </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ 1879:
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\r\n    <div class=\"header\">\r\n        <h1>Tax Config Charges</h1>\r\n          <button class=\"btn btn-info pull-right\" (click)=\"goback()\" >Back</button>\r\n          <button class=\"btn btn-info pull-right\" >Save</button>\r\n      </div>\r\n</div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"config-list\">\r\n        <div class=\"config-item\" *ngFor=\"let item of configItems\">\r\n          <label>{{item.Caption}}</label>\r\n          <input type=\"text\" class=\"form-control\" style=\"font-size: 12px;\" placeholder=\"Press Enter to select...\" (keydown.enter)=\"checkList(item.ACID)\" (keydown)=\"preventInput($event)\" [(ngModel)]=\"item.ACNAME\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  \r\n  <style>\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-right: 30px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.header h1 {\r\n  margin: 0;\r\n  font-weight: bold;   \r\n  font-size: medium;\r\n}\r\n\r\nbutton{\r\n    margin-bottom: 5px; \r\n    margin-left: 5px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n}\r\n.content {\r\n  margin-top:65px;\r\n  padding: 20px;\r\n  border: 1px solid #ddd;\r\n  align-items: center;\r\n  margin-left: 4.5rem;\r\n  margin-right: 4.5rem;\r\n  max-height: 560px;\r\n  overflow: auto;\r\n  font-family: Arial, sans-serif;\r\n  background-color: white;\r\n}\r\n\r\n.config-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.config-item {\r\n  width: 50%;\r\n  padding: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.config-item label {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  font-size: 12px;\r\n  font-weight:545;\r\n  width: 320px;\r\n}\r\n.config-item input{\r\n    flex-grow: 1;\r\n    width: 100px;\r\n    height: 28px;\r\n    background-color: rgb(236, 236, 236);\r\n    margin-right: 50px ;\r\n    margin-left: 20px;\r\n    border: 1px solid rgb(200, 200, 200);\r\n}\r\n  </style>"

/***/ })

});
//# sourceMappingURL=8.chunk.js.map