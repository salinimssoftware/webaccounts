webpackJsonpac__name_([30],{

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_popupLists_report_filter_report_filter_module__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_permission_guard_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profit_loss_routing_module__ = __webpack_require__(1566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profit_loss_component__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profit_loss_service__ = __webpack_require__(1415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_nepali_date_picker_nepali_date_picker_module__ = __webpack_require__(558);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitLossModule", function() { return ProfitLossModule; });










var ProfitLossModule = (function () {
    function ProfitLossModule() {
    }
    return ProfitLossModule;
}());
ProfitLossModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__profit_loss_routing_module__["a" /* ProfitLossRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__common_nepali_date_picker_nepali_date_picker_module__["a" /* NepaliDatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_3__common_popupLists_report_filter_report_filter_module__["a" /* ReportFilterModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__profit_loss_component__["a" /* ProfitLossComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__common_services_permission_guard_service__["a" /* CanActivateTeam */],
            __WEBPACK_IMPORTED_MODULE_7__profit_loss_service__["a" /* ProfitLossService */],
            __WEBPACK_IMPORTED_MODULE_8__common_services_permission__["b" /* CacheService */],
        ]
    })
], ProfitLossModule);



/***/ }),

/***/ 1414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_popupLists_report_filter_report_filter_component__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profit_loss_service__ = __webpack_require__(1415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_popupLists_report_filter_report_filter_service__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_listener_service__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Reports_components_ReportMain_ReportMain_service__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitLossComponent; });










var ProfitLossComponent = (function () {
    function ProfitLossComponent(activatedRoute, eventListener, _reportFilterService, _alertService, _spinnerService, _profitLossService, _cacheService, arouter, _reportMainService, _authService) {
        this.activatedRoute = activatedRoute;
        this.eventListener = eventListener;
        this._reportFilterService = _reportFilterService;
        this._alertService = _alertService;
        this._spinnerService = _spinnerService;
        this._profitLossService = _profitLossService;
        this._cacheService = _cacheService;
        this.arouter = arouter;
        this._reportMainService = _reportMainService;
        this._authService = _authService;
        this.reportType = "PL";
        this.previouslyLoadedReportsList = [];
        this.companyProfile = this._cacheService.get('USER_PROFILE');
        this.userSetting = _authService.getSetting();
    }
    ProfitLossComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._reportFilterService.ReportFilterObj.isPlLoaded) {
            this.reportFilter.show();
        }
        this.eventListener.onreportObjectChange.subscribe(function (data) {
            _this._reportFilterService.ReportFilterObj = data;
        });
        this.previouslyLoadedReportsList = this._reportMainService.previouslyLoadedReportList;
    };
    ProfitLossComponent.prototype.applyFilter = function (filterParams) {
        this.queryAndLoadData(filterParams);
        this.reportFilter.popupClose();
    };
    ProfitLossComponent.prototype.ExportReportInExcel = function () {
        this._reportFilterService.exportTableToExcel("profitAndLossAccount", "Profit-Loss");
    };
    ProfitLossComponent.prototype.print = function () {
        this._reportFilterService.print();
    };
    ProfitLossComponent.prototype.queryAndLoadData = function (filterParams) {
        var _this = this;
        this._spinnerService.show("Please Wait. Loading Data For Profit and Loss");
        this._profitLossService.getProfitLossData(filterParams).subscribe(function (res) {
            _this._reportFilterService.ReportFilterObj.directIncome = res.result.directIncome;
            _this._reportFilterService.ReportFilterObj.directExpense = res.result.directExpense;
            _this.calcLengthOfIncomeExpense(res.result.directIncome, res.result.directExpense);
            _this._reportFilterService.ReportFilterObj.directIncomeTotal = res.result.directIncomeTotal;
            _this._reportFilterService.ReportFilterObj.directExpenseTotal = res.result.directExpenseTotal;
            _this._reportFilterService.ReportFilterObj.directIncomeExpenseTotal = res.result.directIncomeExpenseTotal;
            _this._reportFilterService.ReportFilterObj.grossProfitCD = res.result.grossProfitCD;
            _this._reportFilterService.ReportFilterObj.grossLossCD = res.result.grossLossCD;
            _this._reportFilterService.ReportFilterObj.indirectIncome = res.result.indirectIncome;
            _this._reportFilterService.ReportFilterObj.indirectExpense = res.result.indirectExpense;
            _this.calcLengthOfIndirectIncomeExpense(res.result.indirectIncome, res.result.indirectExpense);
            _this._reportFilterService.ReportFilterObj.netLoss = res.result.netLoss;
            _this._reportFilterService.ReportFilterObj.netProfit = res.result.netProfit;
            _this._reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal = res.result.indirectIncomeExpenseTotal;
            _this._reportFilterService.ReportFilterObj.isPlLoaded = true;
            var routepaths = _this.arouter.url.split('/');
            var activeurlpath2;
            if (routepaths && routepaths.length) {
                activeurlpath2 = routepaths[routepaths.length - 1];
                ////console.log("@@activeurlpath2", activeurlpath2)
            }
            var abc = _this._reportMainService.previouslyLoadedReportList.findIndex(function (report) { return report.reportname == 'Profit & Loss A/C'; });
            if (abc >= 0) {
                _this._reportMainService.previouslyLoadedReportList.splice(abc, 1);
            }
            _this._reportMainService.previouslyLoadedReportList.push({
                reportname: 'Profit & Loss A/C',
                activeurlpath: _this.arouter.url,
                activerurlpath2: activeurlpath2
            });
            _this._spinnerService.hide();
        }, function (error) {
            _this._spinnerService.hide();
            _this._alertService.error(error);
        });
    };
    ProfitLossComponent.prototype.calcLengthOfIncomeExpense = function (income, expense) {
        if (income.length > expense.length) {
            this._reportFilterService.ReportFilterObj.lengthOfIncomeExpense = Array(income.length).fill(0).map(function (x, i) { return i; });
        }
        else {
            this._reportFilterService.ReportFilterObj.lengthOfIncomeExpense = Array(expense.length).fill(0).map(function (x, i) { return i; });
        }
    };
    ProfitLossComponent.prototype.calcLengthOfIndirectIncomeExpense = function (indirectIncome, indirectExpense) {
        if (indirectIncome.length > indirectExpense.length) {
            this._reportFilterService.ReportFilterObj.lengthOfIndirectIncomeExpense = Array(indirectIncome.length).fill(0).map(function (x, i) { return i; });
        }
        else {
            this._reportFilterService.ReportFilterObj.lengthOfIndirectIncomeExpense = Array(indirectExpense.length).fill(0).map(function (x, i) { return i; });
        }
    };
    ProfitLossComponent.prototype.drillDown = function (from, selectedRowIndex) {
        if (from === 'DE' && selectedRowIndex <= this._reportFilterService.ReportFilterObj.directExpense.length) {
            this._reportFilterService.ReportFilterObj.ACID = this._reportFilterService.ReportFilterObj.directExpense[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.ACCNAME = this._reportFilterService.ReportFilterObj.directExpense[selectedRowIndex].ACNAME;
            this._reportFilterService.ReportFilterObj.isLedgerWise = this._reportFilterService.ReportFilterObj.directExpense[selectedRowIndex]['TYPE'] === 'G' ? false : true;
            this._reportFilterService.ReportFilterObj.ledgerType = this._reportFilterService.ReportFilterObj.directExpense[selectedRowIndex]['TYPE'] === 'G' ? 'GROUP' : 'ACCOUNT';
            this._reportFilterService.ReportFilterObj.ACCODE = this._reportFilterService.ReportFilterObj.directExpense[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.IsSubLedger = this._reportFilterService.ReportFilterObj.directExpense[selectedRowIndex]['IsSLedger'];
            if (this._reportFilterService.ReportFilterObj.ACID && this._reportFilterService.ReportFilterObj.ACID.startsWith("PA")) {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = true;
            }
            else {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = false;
            }
            this._reportFilterService.drillDown('PL', this.activatedRoute.snapshot['_routerState'].url);
        }
        else if (from === 'INE' && selectedRowIndex <= this._reportFilterService.ReportFilterObj.indirectExpense.length) {
            this._reportFilterService.ReportFilterObj.ACID = this._reportFilterService.ReportFilterObj.indirectExpense[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.ACCNAME = this._reportFilterService.ReportFilterObj.indirectExpense[selectedRowIndex].ACNAME;
            this._reportFilterService.ReportFilterObj.isLedgerWise = this._reportFilterService.ReportFilterObj.indirectExpense[selectedRowIndex]['TYPE'] === 'G' ? false : true;
            this._reportFilterService.ReportFilterObj.ledgerType = this._reportFilterService.ReportFilterObj.indirectExpense[selectedRowIndex]['TYPE'] === 'G' ? 'GROUP' : 'ACCOUNT';
            this._reportFilterService.ReportFilterObj.ACCODE = this._reportFilterService.ReportFilterObj.indirectExpense[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.IsSubLedger = this._reportFilterService.ReportFilterObj.indirectExpense[selectedRowIndex]['IsSLedger'];
            if (this._reportFilterService.ReportFilterObj.ACID && this._reportFilterService.ReportFilterObj.ACID.startsWith("PA")) {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = true;
            }
            else {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = false;
            }
            this._reportFilterService.drillDown('PL', this.activatedRoute.snapshot['_routerState'].url);
        }
        else if (from === 'DI' && selectedRowIndex <= this._reportFilterService.ReportFilterObj.directIncome.length) {
            this._reportFilterService.ReportFilterObj.ACID = this._reportFilterService.ReportFilterObj.directIncome[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.ACCNAME = this._reportFilterService.ReportFilterObj.directIncome[selectedRowIndex].ACNAME;
            this._reportFilterService.ReportFilterObj.isLedgerWise = this._reportFilterService.ReportFilterObj.directIncome[selectedRowIndex]['TYPE'] === 'G' ? false : true;
            this._reportFilterService.ReportFilterObj.ledgerType = this._reportFilterService.ReportFilterObj.directIncome[selectedRowIndex]['TYPE'] === 'G' ? 'GROUP' : 'ACCOUNT';
            this._reportFilterService.ReportFilterObj.ACCODE = this._reportFilterService.ReportFilterObj.directIncome[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.IsSubLedger = this._reportFilterService.ReportFilterObj.directIncome[selectedRowIndex]['IsSLedger'];
            if (this._reportFilterService.ReportFilterObj.ACID && this._reportFilterService.ReportFilterObj.ACID.startsWith("PA")) {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = true;
            }
            else {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = false;
            }
            this._reportFilterService.drillDown('PL', this.activatedRoute.snapshot['_routerState'].url);
        }
        else if (from === 'INI' && selectedRowIndex <= this._reportFilterService.ReportFilterObj.indirectIncome.length) {
            this._reportFilterService.ReportFilterObj.ACID = this._reportFilterService.ReportFilterObj.indirectIncome[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.ACCNAME = this._reportFilterService.ReportFilterObj.indirectIncome[selectedRowIndex].ACNAME;
            this._reportFilterService.ReportFilterObj.isLedgerWise = this._reportFilterService.ReportFilterObj.indirectIncome[selectedRowIndex]['TYPE'] === 'G' ? false : true;
            this._reportFilterService.ReportFilterObj.ledgerType = this._reportFilterService.ReportFilterObj.indirectIncome[selectedRowIndex]['TYPE'] === 'G' ? 'GROUP' : 'ACCOUNT';
            this._reportFilterService.ReportFilterObj.ACCODE = this._reportFilterService.ReportFilterObj.indirectIncome[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.IsSubLedger = this._reportFilterService.ReportFilterObj.indirectIncome[selectedRowIndex]['IsSLedger'];
            if (this._reportFilterService.ReportFilterObj.ACID && this._reportFilterService.ReportFilterObj.ACID.startsWith("PA")) {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = true;
            }
            else {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = false;
            }
            this._reportFilterService.drillDown('PL', this.activatedRoute.snapshot['_routerState'].url);
        }
    };
    ProfitLossComponent.prototype.loadFilter = function () {
        this.reportFilter.show();
    };
    ProfitLossComponent.prototype.showPreviouslyLoadedReports = function () {
        this.showReportListDialog = true;
    };
    ProfitLossComponent.prototype.CancelReportList = function () {
        this.showReportListDialog = false;
    };
    return ProfitLossComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('reportFilter'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__common_popupLists_report_filter_report_filter_component__["a" /* ReportFilterComponent */])
], ProfitLossComponent.prototype, "reportFilter", void 0);
ProfitLossComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'profit-loss',
        template: __webpack_require__(1813),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_7__event_listener_service__["a" /* EventListenerService */], __WEBPACK_IMPORTED_MODULE_6__common_popupLists_report_filter_report_filter_service__["a" /* ReportFilterService */], __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */], __WEBPACK_IMPORTED_MODULE_2__profit_loss_service__["a" /* ProfitLossService */], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["b" /* CacheService */],
        __WEBPACK_IMPORTED_MODULE_8__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_9__Reports_components_ReportMain_ReportMain_service__["a" /* ReportMainService */], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */]])
], ProfitLossComponent);



/***/ }),

/***/ 1415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_state__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitLossService; });






var ProfitLossService = (function () {
    function ProfitLossService(http, activatedRoute, authService, state) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = state;
    }
    Object.defineProperty(ProfitLossService.prototype, "apiUrl", {
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
    ProfitLossService.prototype.getProfitLossData = function (params) {
        var body = {
            'DATE1': params.DATE1,
            'DATE2': params.DATE2,
            'DIV': params.DIV,
            'openingStock': Number(params.openingStock ? params.openingStock : 0),
            'closingStock': Number(params.closingStock ? params.closingStock : 0),
            'ShowSubLedger': params.ShowSubLedgerPL ? params.ShowSubLedgerPL : 0,
        };
        return this.http.post(this.apiUrl + "/getProfitLossData", body, this.getRequestOption())
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfitLossService.prototype.extractData = function (res) {
        var response = res.json();
        return response || {};
    };
    ProfitLossService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
    };
    ProfitLossService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        //console.log({ headers: headers });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
    };
    return ProfitLossService;
}());
ProfitLossService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__global_state__["a" /* GlobalState */]])
], ProfitLossService);



/***/ }),

/***/ 1566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_permission_guard_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profit_loss_component__ = __webpack_require__(1414);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitLossRoutingModule; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__profit_loss_component__["a" /* ProfitLossComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
];
var ProfitLossRoutingModule = (function () {
    function ProfitLossRoutingModule() {
    }
    return ProfitLossRoutingModule;
}());
ProfitLossRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], ProfitLossRoutingModule);



/***/ }),

/***/ 1813:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .white-space {\r\n    white-space: pre !important\r\n  }\r\n\r\n  thead {\r\n    background: #c5e3ed;\r\n    border-bottom: 1px solid;\r\n  }\r\n\r\n  th {\r\n    padding: 10px;\r\n  }\r\n\r\n  td {\r\n    padding: 5px;\r\n  }\r\n\r\n  table {\r\n    width: 100%;\r\n    border: 1px solid;\r\n    border-right: none;\r\n  }\r\n\r\n  .text-bold {\r\n    font-weight: bold\r\n  }\r\n\r\n  .selected-row {\r\n    background-color: #787878 !important;\r\n    color: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n  tbody,\r\n  tfoot {\r\n    background: #ffffff;\r\n  }\r\n\r\n  .even-row {\r\n    background: #ffffeb;\r\n  }\r\n\r\n</style>\r\n\r\n\r\n\r\n<div class=\"clearfix\">\r\n  <div class=\"col-md-1\" style=\"padding: 0;width:30px;\">\r\n    <table>\r\n      <tr style=\"height:30px;width:30px\">\r\n        <td style=\"border: 1pt solid black;cursor: pointer\" (click)=\"loadFilter()\">\r\n          <i style=\"margin:5px\"><span class=\"glyphicon glyphicon-filter\" title=\"Filters\"></span></i>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"border: 1pt solid black;\">\r\n\r\n          <i (click)=\"ExportReportInExcel()\" style=\"margin:5px\"> <span class=\"glyphicon glyphicon-export\"></span></i>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"border: 1pt solid black;\">\r\n          <i (click)=\"print()\" style=\"margin:5px\"> <span class=\"glyphicon glyphicon-print\"></span></i>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"border: 1pt solid black;\" class=\"cell-with-comment\">\r\n          <i (click)=\"showPreviouslyLoadedReports()\" style=\"margin:5px\"> <span class=\"glyphicon glyphicon-open-file\"></span></i>\r\n          <span class=\"cell-comment\">\r\n            Open Report List [F4]\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div id=\"profitAndLossAccount\" class=\"col-md-11\" style=\"padding: 0;width:96.5% !important\">\r\n    <div *ngIf=\"_reportFilterService.ReportFilterObj.isPlLoaded\" class=\"clearfix col-md-12 text-center\" style=\"padding:5px 15px;\">\r\n      <strong>\r\n        Showing Profit & Loss Account for {{_reportFilterService.ReportFilterObj?.DATE1 | date}} to\r\n        {{_reportFilterService.ReportFilterObj?.DATE2 | date}}\r\n        @Division : {{_reportFilterService.ReportFilterObj?.PL_DIVISIONNAME}}\r\n      </strong>\r\n    </div>\r\n    <div class=\"clearfix col-md-12\" *ngIf=\"_reportFilterService.ReportFilterObj.isPlLoaded\"\r\n      style=\"height: 524px; overflow-y:scroll;font-size: 14px;padding-left: 0px;padding-right: 0px;\">\r\n      <div class=\"col-md-12 direct-expenses\" style=\"padding: 0px 0px 0px 5px\">\r\n        <div class=\"col-md-12\" style=\"padding: 0;position: sticky;top:0\">\r\n          <table id=\"report-header\" style=\"table-layout: fixed;width: 100%;\">\r\n            <thead>\r\n              <th class=\"text-center\" style=\"border-left:1px solid black;width: 20%;border-top: 1px solid black;border-bottom: 1px solid black;\">\r\n                <b>PARTICULARS</b></th>\r\n              <th style=\"border-top: 1px solid black;border-bottom: 1px solid black;\">&nbsp;</th>\r\n              <th style=\"border-top: 1px solid black;border-bottom: 1px solid black;\">&nbsp;</th>\r\n              <th style=\"border: 1px solid black\" class=\"text-center\"><b>EXPENSES</b></th>\r\n              <th class=\"text-center\" style=\"width: 20%;border-top: 1px solid black;border-bottom: 1px solid black;\"><b>PARTICULARS</b></th>\r\n              <th style=\"border-top: 1px solid black;border-bottom: 1px solid black;\">&nbsp;</th>\r\n              <th style=\"border-top: 1px solid black;border-bottom: 1px solid black;\">&nbsp;</th>\r\n              <th style=\"border: 1px solid;\" class=\"text-center\"><b>INCOME</b></th>\r\n            </thead>\r\n          </table>\r\n        </div>\r\n        <table id=\"report-body\" style=\"table-layout: fixed;min-height: 500px;\">\r\n          <tbody>\r\n\r\n            <ng-container *ngFor=\"let x of _reportFilterService.ReportFilterObj.lengthOfIncomeExpense;let i=index\">\r\n              <tr>\r\n                <td style=\"width: 20%;border-left:1px solid black;\" (dblclick)=\"drillDown('DE',i)\">\r\n                  <span style=\"white-space: pre\"\r\n                    [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directExpense[i]?.ACID=='DE' }\">{{_reportFilterService.ReportFilterObj.directExpense[i]?.ACNAME?_reportFilterService.ReportFilterObj.directExpense[i]?.ACNAME:\"&nbsp;\"}}</span>\r\n                </td>\r\n                <td class=\"text-right\" style=\"width: 10%\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directExpense[i]?.TYPE=='G'&&_reportFilterService.ReportFilterObj.directExpense[i]?.BL!=null}\">\r\n                    {{_reportFilterService.ReportFilterObj.directExpense[i]?.BL}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"text-right\" style=\"width: 10%\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.directExpense[i]?.BL2}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;width: 10%\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directExpense[i]?.TYPE=='G' && _reportFilterService.ReportFilterObj.directExpense[i]?.BL3!=null }\">\r\n                    {{_reportFilterService.ReportFilterObj.directExpense[i]?.BL3}}\r\n                  </span>\r\n                </td>\r\n\r\n\r\n\r\n                <td style=\"width:20%\" (dblclick)=\"drillDown('DI',i)\">\r\n                  <span style=\"white-space: pre\"\r\n                    [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncome[i]?.ACID=='DI'}\">{{_reportFilterService.ReportFilterObj.directIncome[i]?.ACNAME?_reportFilterService.ReportFilterObj.directIncome[i]?.ACNAME:\"&nbsp;\"}}</span>\r\n                </td>\r\n                <td style=\"width:10%\" class=\"text-right\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncome[i]?.TYPE=='G'&& _reportFilterService.ReportFilterObj.directIncome[i]?.BL!=null}\">\r\n                    {{_reportFilterService.ReportFilterObj.directIncome[i]?.BL}}\r\n                  </span>\r\n                </td>\r\n                <td style=\"width:10%\" class=\"text-right\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.directIncome[i]?.BL2}}\r\n                  </span>\r\n                </td>\r\n                <td style=\"border-left: 1px solid;border-right: 1px solid;width:10%\" class=\"text-right\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncome[i]?.TYPE=='G'}\">\r\n                    {{_reportFilterService.ReportFilterObj.directIncome[i]?.BL3}}\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <tr id=\"directExpense\">\r\n              <td style=\"border-left:1px solid black;\">\r\n                <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directExpenseTotal[0]?.TYPE=='T'}\">\r\n                  {{_reportFilterService.ReportFilterObj.directExpenseTotal[0]?.PARTICULARS?_reportFilterService.ReportFilterObj.directExpenseTotal[0]?.PARTICULARS:\"&nbsp;\"}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.directExpenseTotal[0]?.BL}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.directExpenseTotal[0]?.BL2}}\r\n                </span>\r\n              </td>\r\n\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\">\r\n                <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directExpenseTotal[0]?.TYPE=='T'}\">\r\n                  {{_reportFilterService.ReportFilterObj.directExpenseTotal[0]?.BL3}}\r\n                </span>\r\n              </td>\r\n\r\n\r\n              <td>\r\n                <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncomeTotal[0]?.TYPE=='T'}\">\r\n                  {{_reportFilterService.ReportFilterObj.directIncomeTotal[0]?.PARTICULARS?_reportFilterService.ReportFilterObj.directIncomeTotal[0]?.PARTICULARS:\"&nbsp;\"}}\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.directIncomeTotal[0]?.BL}}\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.directIncomeTotal[0]?.BL2}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\">\r\n                <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncomeTotal[0]?.TYPE=='T'}\">\r\n                  {{_reportFilterService.ReportFilterObj.directIncomeTotal[0]?.BL3}}\r\n                </span>\r\n              </td>\r\n            </tr>\r\n            <tr class=\"directIncomeExpenseTotal\" style=\"border-bottom: 1px solid;border-top: 1px solid\">\r\n              <td style=\"border-left:1px solid black;\" [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[0]?.TYPE=='T'}\">\r\n                {{_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[0]?.PARTICULARS}}</td>\r\n              <td><span>\r\n                  {{_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[0]?.BL}}\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[0]?.BL2}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\"\r\n                [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[0]?.TYPE=='T'}\">\r\n                {{_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[0]?.BL3}}\r\n              </td>\r\n              <td [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[1]?.TYPE=='T'}\">\r\n                {{_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[1]?.PARTICULARS}}</td>\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[1]?.BL}}\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[1]?.BL2}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid\"\r\n                [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[1]?.TYPE=='T'}\">\r\n                {{_reportFilterService.ReportFilterObj.directIncomeExpenseTotal[1]?.BL3}}\r\n              </td>\r\n            </tr>\r\n            <tr id=\"grosslossCD\" [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.grossLossCD[0]?.TYPE=='T'}\">\r\n              <td style=\"border-left:1px solid black;\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.grossLossCD[0]?.PARTICUALRS?_reportFilterService.ReportFilterObj.grossLossCD[0]?.PARTICUALRS:\"&nbsp;\"}}\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.grossLossCD[0]?.BL}}\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.grossLossCD[0]?.BL2}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.grossLossCD[0]?.BL3}}\r\n                </span>\r\n              </td>\r\n              <td>\r\n                {{_reportFilterService.ReportFilterObj.grossProfitCD[0]?.PARTICULARS?_reportFilterService.ReportFilterObj.grossProfitCD[0]?.PARTICULARS:\"&nbsp;\"}}\r\n              </td>\r\n              <td>\r\n                {{_reportFilterService.ReportFilterObj.grossProfitCD[0]?.BL}}\r\n              </td>\r\n              <td>\r\n                {{_reportFilterService.ReportFilterObj.grossProfitCD[0]?.BL2}}\r\n              </td>\r\n\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\">\r\n                {{_reportFilterService.ReportFilterObj.grossProfitCD[0]?.BL3}}\r\n              </td>\r\n            </tr>\r\n            <ng-container *ngFor=\"let x of _reportFilterService.ReportFilterObj.lengthOfIndirectIncomeExpense;let i=index\">\r\n              <tr>\r\n                <td style=\"border-left:1px solid black;\" (dblclick)=\"drillDown('INE',i)\">\r\n                  <span style=\"white-space: pre\"\r\n                    [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.indirectExpense[i]?.ACID=='IE'}\">{{_reportFilterService.ReportFilterObj.indirectExpense[i]?.ACNAME?_reportFilterService.ReportFilterObj.indirectExpense[i]?.ACNAME:\"&nbsp;\"}}</span>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.indirectExpense[i]?.TYPE=='G'&&_reportFilterService.ReportFilterObj.indirectExpense[i]?.BL!=null}\">\r\n                    {{_reportFilterService.ReportFilterObj.indirectExpense[i]?.BL}}</span>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  {{_reportFilterService.ReportFilterObj.indirectExpense[i]?.BL2}}\r\n                </td>\r\n                <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\">\r\n                  {{_reportFilterService.ReportFilterObj.indirectExpense[i]?.BL3}}\r\n                </td>\r\n                <td>\r\n                  <span style=\"white-space: pre\"\r\n                    [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.indirectIncome[i]?.ACID=='II'}\">{{_reportFilterService.ReportFilterObj.indirectIncome[i]?.ACNAME?_reportFilterService.ReportFilterObj.indirectIncome[i]?.ACNAME:\"&nbsp;\"}}</span>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.indirectIncome[i]?.TYPE=='G'&&_reportFilterService.ReportFilterObj.indirectIncome[i]?.BL!=null}\">\r\n                    {{_reportFilterService.ReportFilterObj.indirectIncome[i]?.BL}}</span>\r\n                </td>\r\n\r\n                <td (dblclick)=\"drillDown('INI',i)\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.indirectIncome[i]?.BL2}}\r\n\r\n                  </span>\r\n                </td>\r\n\r\n                <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid\">\r\n                  {{_reportFilterService.ReportFilterObj.indirectIncome[i]?.BL3}}\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <tr id=\"netprofit\" class=\"text-bold\">\r\n              <td style=\"border-left:1px solid black;\">{{_reportFilterService.ReportFilterObj.netProfit[0]?.PARTICULARS?_reportFilterService.ReportFilterObj.netProfit[0]?.PARTICULARS:\"&nbsp;\"}}</td>\r\n              <td>\r\n                {{_reportFilterService.ReportFilterObj.netProfit[0]?.BL}}\r\n              </td>\r\n              <td>\r\n                {{_reportFilterService.ReportFilterObj.netProfit[0]?.BL2}}\r\n              </td>\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\">\r\n                {{_reportFilterService.ReportFilterObj.netProfit[0]?.BL3}}\r\n              </td>\r\n              <td>{{_reportFilterService.ReportFilterObj.netLoss[0]?.PARTICULARS?_reportFilterService.ReportFilterObj.netLoss[0]?.PARTICULARS:\"&nbsp;\"}}</td>\r\n              <td>\r\n                {{_reportFilterService.ReportFilterObj.netLoss[0]?.BL}}\r\n              </td>\r\n              <td>\r\n                {{_reportFilterService.ReportFilterObj.netLoss[0]?.BL2}}\r\n              </td>\r\n\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid\">\r\n                {{_reportFilterService.ReportFilterObj.netLoss[0]?.BL3}}\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"col-md-12\" style=\"padding: 0;position: sticky;bottom:0\">\r\n          <table id=\"report-footer\" style=\"table-layout: fixed\">\r\n            <tfoot>\r\n              <tr class=\"indirectIncomeExpenseTotaltext-bold\" style=\"border-top:1px solid\">\r\n                <td style=\"border-bottom:1px solid black;width: 20%;border-left:1px solid black;\">\r\n                  {{_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[0]?.PARTICULARS?_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[0]?.PARTICULARS:\"&nbsp;\"}}\r\n                </td>\r\n                <td style=\"border-bottom:1px solid black;text-align:right\">{{_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[0]?.BL}}</td>\r\n                <td style=\"border-bottom:1px solid black;text-align:right\">{{_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[0]?.BL2}}</td>\r\n                <td style=\"border-bottom:1px solid black;text-align:right;border-left: 1px solid;border-right: 1px solid;\">\r\n                  {{_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[0]?.BL3}}</td>\r\n                <td style=\"border-bottom:1px solid black;width: 20%\">\r\n                  {{_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[1]?.PARTICULARS?_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[1]?.PARTICULARS:\"&nbsp;\"}}\r\n                </td>\r\n                <td style=\"border-bottom:1px solid black;text-align:right\">{{_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[1]?.BL}}</td>\r\n                <td style=\"border-bottom:1px solid black;text-align:right\">{{_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[1]?.BL2}}</td>\r\n                <td\r\n                  style=\"border-bottom:1px solid black;text-align:right;border-left: 1px solid;border-right: 1px solid;\">\r\n                  {{_reportFilterService.ReportFilterObj.indirectIncomeExpenseTotal[1]?.BL3}}</td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal-sticky\" *ngIf=\"showReportListDialog\"\r\n  style=\"overflow: auto;right: 40%;width: 30%;z-index: 9999999\">\r\n\r\n  <div class=\"modal-content modal-content-main-area\">\r\n    <div style=\"height: 28px; margin-top: 5px; \">\r\n      <div class=\"col-md-12\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Loaded Report List</h4>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n\r\n      <table class=\"table\" style=\"display: grid;\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width: 1%; \">SI NO </th>\r\n            <th style=\"width: 8%; \">Report Name</th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\" let column of previouslyLoadedReportsList; let i= index ;\">\r\n            <td style=\"width: 1%; \">{{i+1}}</td>\r\n            <td style=\"width: 8%; \" [routerLink]=\"column.activeurlpath\">{{column.reportname}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"CancelReportList()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<report-filter #reportFilter (filterEmiiter)=\"applyFilter($event)\" [reportType]=\"reportType\"></report-filter>\r\n"

/***/ })

});
//# sourceMappingURL=30.chunk.js.map