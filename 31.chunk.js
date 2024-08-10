webpackJsonpac__name_([31],{

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_popupLists_report_filter_report_filter_module__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_permission_guard_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__balance_sheet_routing_module__ = __webpack_require__(1561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__balance_sheet_component__ = __webpack_require__(1404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__balance_sheet_service__ = __webpack_require__(1405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_services_permission__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_nepali_date_picker_nepali_date_picker_module__ = __webpack_require__(558);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceSheetModule", function() { return BalanceSheetModule; });










var BalanceSheetModule = (function () {
    function BalanceSheetModule() {
    }
    return BalanceSheetModule;
}());
BalanceSheetModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__balance_sheet_routing_module__["a" /* BalanceSheetRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__common_popupLists_report_filter_report_filter_module__["a" /* ReportFilterModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__common_nepali_date_picker_nepali_date_picker_module__["a" /* NepaliDatePickerModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__balance_sheet_component__["a" /* BalanceSheetComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__common_services_permission_guard_service__["a" /* CanActivateTeam */],
            __WEBPACK_IMPORTED_MODULE_7__balance_sheet_service__["a" /* BalanceSheetService */],
            __WEBPACK_IMPORTED_MODULE_8__common_services_permission__["b" /* CacheService */],
        ]
    })
], BalanceSheetModule);



/***/ }),

/***/ 1404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_popupLists_report_filter_report_filter_component__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balance_sheet_service__ = __webpack_require__(1405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_popupLists_report_filter_report_filter_service__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_listener_service__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Reports_components_ReportMain_ReportMain_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceSheetComponent; });










var BalanceSheetComponent = (function () {
    function BalanceSheetComponent(activatedRoute, eventListener, _reportFilterService, _alertService, _spinnerService, _balanceSheetService, _cacheService, arouter, _reportMainService) {
        this.activatedRoute = activatedRoute;
        this.eventListener = eventListener;
        this._reportFilterService = _reportFilterService;
        this._alertService = _alertService;
        this._spinnerService = _spinnerService;
        this._balanceSheetService = _balanceSheetService;
        this._cacheService = _cacheService;
        this.arouter = arouter;
        this._reportMainService = _reportMainService;
        this.reportType = "BS";
        this.selectedRowIndex = 0;
        this.previouslyLoadedReportsList = [];
        this.companyProfile = this._cacheService.get('USER_PROFILE');
    }
    BalanceSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._reportFilterService.ReportFilterObj.isBSLoaded) {
            this.reportFilter.show();
        }
        this.eventListener.onreportObjectChange.subscribe(function (data) {
            _this._reportFilterService.ReportFilterObj = data;
        });
        this.previouslyLoadedReportsList = this._reportMainService.previouslyLoadedReportList;
    };
    BalanceSheetComponent.prototype.applyFilter = function (filterParams) {
        this.queryAndLoadData(filterParams);
        this.reportFilter.popupClose();
    };
    BalanceSheetComponent.prototype.ExportReportInExcel = function () {
        this._reportFilterService.exportTableToExcel("balanceSheet", "Balance Sheet");
    };
    BalanceSheetComponent.prototype.print = function () {
        this._reportFilterService.print();
    };
    BalanceSheetComponent.prototype.queryAndLoadData = function (filterParams) {
        var _this = this;
        this._spinnerService.show("Please Wait. Generating Balance Sheet");
        this._balanceSheetService.getBalanceSheetData(filterParams).subscribe(function (res) {
            _this._reportFilterService.ReportFilterObj.assets = res.result.assets;
            _this._reportFilterService.ReportFilterObj.liabilities = res.result.liabilities;
            _this.calculateLengthOfATLB(res.result.assets, res.result.liabilities);
            _this._reportFilterService.ReportFilterObj.netLoss = res.result.netLoss;
            _this._reportFilterService.ReportFilterObj.netProfit = res.result.netProfit;
            _this._reportFilterService.ReportFilterObj.differenceInClosingBalance = res.result.differenceInClosingBalance;
            _this._reportFilterService.ReportFilterObj.differenceInOpeningBalance = res.result.differenceInOpeningBalance;
            _this._reportFilterService.ReportFilterObj.asstesTotal = res.result.asstesTotal;
            _this._reportFilterService.ReportFilterObj.liabilitiesTotal = res.result.liabilitiesTotal;
            _this._reportFilterService.ReportFilterObj.isBSLoaded = true;
            var routepaths = _this.arouter.url.split('/');
            var activeurlpath2;
            if (routepaths && routepaths.length) {
                activeurlpath2 = routepaths[routepaths.length - 1];
                ////console.log("@@activeurlpath2", activeurlpath2)
            }
            var abc = _this._reportMainService.previouslyLoadedReportList.findIndex(function (report) { return report.reportname == 'Balance Sheet'; });
            if (abc >= 0) {
                _this._reportMainService.previouslyLoadedReportList.splice(abc, 1);
            }
            _this._reportMainService.previouslyLoadedReportList.push({
                reportname: 'Balance Sheet',
                activeurlpath: _this.arouter.url,
                activerurlpath2: activeurlpath2
            });
            _this._spinnerService.hide();
        }, function (error) {
            _this._spinnerService.hide();
            _this._alertService.error(error);
        });
    };
    BalanceSheetComponent.prototype.calculateLengthOfATLB = function (asssets, liabilities) {
        if (asssets.length >= liabilities.length) {
            this._reportFilterService.ReportFilterObj.lengthOfATLB = Array(asssets.length).fill(0).map(function (x, i) { return i; });
        }
        else {
            this._reportFilterService.ReportFilterObj.lengthOfATLB = Array(liabilities.length).fill(0).map(function (x, i) { return i; });
        }
    };
    BalanceSheetComponent.prototype.loadFilter = function () {
        this.reportFilter.show();
    };
    BalanceSheetComponent.prototype.showPreviouslyLoadedReports = function () {
        this.showReportListDialog = true;
    };
    BalanceSheetComponent.prototype.CancelReportList = function () {
        this.showReportListDialog = false;
    };
    BalanceSheetComponent.prototype.updown = function ($event) {
        if ($event.code == "ArrowDown") {
            this.selectedRowIndex++;
            $event.preventDefault();
            if (this.selectedRowIndex == this._reportFilterService.ReportFilterObj.lengthOfATLB.length) {
                this.selectedRowIndex = this._reportFilterService.ReportFilterObj.lengthOfATLB.length - 1;
            }
        }
        else if ($event.code == "ArrowUp") {
            $event.preventDefault();
            this.selectedRowIndex--;
            if (this.selectedRowIndex == -1) {
                this.selectedRowIndex = 0;
            }
        }
        else if ($event.code == "Enter" &&
            this.selectedRowIndex >= 0 &&
            this.selectedRowIndex < this._reportFilterService.ReportFilterObj.lengthOfATLB.length) {
            $event.preventDefault();
        }
    };
    BalanceSheetComponent.prototype.drillDown = function (from, selectedRowIndex) {
        if (from === 'AT' && selectedRowIndex <= this._reportFilterService.ReportFilterObj.assets.length) {
            this._reportFilterService.ReportFilterObj.ACID = this._reportFilterService.ReportFilterObj.assets[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.ACCNAME = this._reportFilterService.ReportFilterObj.assets[selectedRowIndex].ACNAME;
            this._reportFilterService.ReportFilterObj.isLedgerWise = this._reportFilterService.ReportFilterObj.assets[selectedRowIndex]['TYPE'] === 'G' ? false : true;
            this._reportFilterService.ReportFilterObj.ledgerType = this._reportFilterService.ReportFilterObj.assets[selectedRowIndex]['TYPE'] === 'G' ? 'GROUP' : 'ACCOUNT';
            this._reportFilterService.ReportFilterObj.ACCODE = this._reportFilterService.ReportFilterObj.assets[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.IsSubLedger = this._reportFilterService.ReportFilterObj.assets[selectedRowIndex]['IsSLedger'];
            if (this._reportFilterService.ReportFilterObj.ACID && this._reportFilterService.ReportFilterObj.ACID.startsWith("PA")) {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = true;
            }
            else {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = false;
            }
            this._reportFilterService.drillDown('BS', this.activatedRoute.snapshot['_routerState'].url);
        }
        else if (from === 'LB' && selectedRowIndex <= this._reportFilterService.ReportFilterObj.liabilities.length) {
            this._reportFilterService.ReportFilterObj.ACID = this._reportFilterService.ReportFilterObj.liabilities[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.ACCNAME = this._reportFilterService.ReportFilterObj.liabilities[selectedRowIndex].ACNAME;
            this._reportFilterService.ReportFilterObj.isLedgerWise = this._reportFilterService.ReportFilterObj.liabilities[selectedRowIndex]['TYPE'] === 'G' ? false : true;
            this._reportFilterService.ReportFilterObj.ledgerType = this._reportFilterService.ReportFilterObj.liabilities[selectedRowIndex]['TYPE'] === 'G' ? 'GROUP' : 'ACCOUNT';
            this._reportFilterService.ReportFilterObj.ACCODE = this._reportFilterService.ReportFilterObj.liabilities[selectedRowIndex].ACID;
            this._reportFilterService.ReportFilterObj.IsSubLedger = this._reportFilterService.ReportFilterObj.liabilities[selectedRowIndex]['IsSLedger'];
            if (this._reportFilterService.ReportFilterObj.ACID && this._reportFilterService.ReportFilterObj.ACID.startsWith("PA")) {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = true;
            }
            else {
                this._reportFilterService.ReportFilterObj.ACIDwithPA = false;
            }
            this._reportFilterService.drillDown('BS', this.activatedRoute.snapshot['_routerState'].url);
        }
    };
    return BalanceSheetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('reportFilter'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__common_popupLists_report_filter_report_filter_component__["a" /* ReportFilterComponent */])
], BalanceSheetComponent.prototype, "reportFilter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], BalanceSheetComponent.prototype, "updown", null);
BalanceSheetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'balance-sheet',
        template: __webpack_require__(1808),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_7__event_listener_service__["a" /* EventListenerService */], __WEBPACK_IMPORTED_MODULE_6__common_popupLists_report_filter_report_filter_service__["a" /* ReportFilterService */], __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */], __WEBPACK_IMPORTED_MODULE_2__balance_sheet_service__["a" /* BalanceSheetService */], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["b" /* CacheService */],
        __WEBPACK_IMPORTED_MODULE_9__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_8__Reports_components_ReportMain_ReportMain_service__["a" /* ReportMainService */]])
], BalanceSheetComponent);



/***/ }),

/***/ 1405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_state__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceSheetService; });






var BalanceSheetService = (function () {
    function BalanceSheetService(http, activatedRoute, authService, state) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = state;
    }
    Object.defineProperty(BalanceSheetService.prototype, "apiUrl", {
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
    BalanceSheetService.prototype.getBalanceSheetData = function (params) {
        var body = {
            'DATE1': params.DATE1,
            'DATE2': params.DATE2,
            'DIV': params.DIV,
            'openingStock': Number(params.openingStock ? params.openingStock : 0),
            'closingStock': Number(params.closingStock ? params.closingStock : 0),
            'ShowSubLedger': params.ShowSubLedgerBS ? params.ShowSubLedgerBS : 0,
            'SHOWDEBTORSCREDITORS': params.SHOWDEBTORSCREDITORSBS ? params.SHOWDEBTORSCREDITORSBS : 0
        };
        return this.http.post(this.apiUrl + "/getBalanceSheetData", body, this.getRequestOption())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BalanceSheetService.prototype.extractData = function (res) {
        var response = res.json();
        return response || {};
    };
    BalanceSheetService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
    };
    BalanceSheetService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        //console.log({ headers: headers });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
    };
    return BalanceSheetService;
}());
BalanceSheetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__global_state__["a" /* GlobalState */]])
], BalanceSheetService);



/***/ }),

/***/ 1561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_permission_guard_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balance_sheet_component__ = __webpack_require__(1404);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceSheetRoutingModule; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__balance_sheet_component__["a" /* BalanceSheetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
];
var BalanceSheetRoutingModule = (function () {
    function BalanceSheetRoutingModule() {
    }
    return BalanceSheetRoutingModule;
}());
BalanceSheetRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], BalanceSheetRoutingModule);



/***/ }),

/***/ 1808:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .white-space {\r\n    white-space: pre !important\r\n  }\r\n\r\n  thead {\r\n    background: #c5e3ed;\r\n    border-bottom: 1px solid;\r\n  }\r\n\r\n  th {\r\n    padding: 10px;\r\n  }\r\n\r\n  td {\r\n    padding: 5px;\r\n  }\r\n\r\n  table {\r\n    width: 100%;\r\n    border: 1px solid;\r\n    border-right: none;\r\n  }\r\n\r\n  .text-bold {\r\n    font-weight: bold\r\n  }\r\n\r\n\r\n\r\n  tbody,\r\n  tfoot {\r\n    background: #ffffff;\r\n  }\r\n\r\n  .selected-row {\r\n    background-color: #787878 !important;\r\n    color: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n</style>\r\n\r\n\r\n\r\n<div class=\"clearfix\">\r\n  <div class=\"col-md-1\" style=\"padding: 0;width:30px;\">\r\n    <table>\r\n      <tr style=\"height:30px;width:30px\">\r\n        <td style=\"border: 1pt solid black;cursor: pointer\" (click)=\"loadFilter()\">\r\n          <i style=\"margin:5px\"><span class=\"glyphicon glyphicon-filter\" title=\"Filters\"></span></i>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"border: 1pt solid black;\">\r\n\r\n          <i (click)=\"ExportReportInExcel()\" style=\"margin:5px\"> <span class=\"glyphicon glyphicon-export\"></span></i>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"border: 1pt solid black;\">\r\n          <i (click)=\"print()\" style=\"margin:5px\"> <span class=\"glyphicon glyphicon-print\"></span></i>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"border: 1pt solid black;\" class=\"cell-with-comment\">\r\n          <i (click)=\"showPreviouslyLoadedReports()\" style=\"margin:5px\"> <span class=\"glyphicon glyphicon-open-file\"></span></i>\r\n          <span class=\"cell-comment\">\r\n            Open Report List [F4]\r\n          </span>\r\n        </td>\r\n      </tr>\r\n\r\n    </table>\r\n  </div>\r\n  <div id=\"balanceSheet\" class=\"col-md-11\" style=\"padding: 0px 0px 0px 5px;width:96.5% !important\">\r\n    <div *ngIf=\"_reportFilterService.ReportFilterObj.isBSLoaded\" class=\"clearfix col-md-12 text-center\" style=\"padding:5px 15px;\">\r\n      <strong>\r\n        Showing Balance sheet for {{_reportFilterService.ReportFilterObj?.DATE1 | date}} to\r\n        {{_reportFilterService.ReportFilterObj?.DATE2 | date}}\r\n        @Division : {{_reportFilterService.ReportFilterObj?.BS_DIVISIONNAME}}\r\n      </strong>\r\n    </div>\r\n    <div class=\"clearfix col-md-12\" *ngIf=\"_reportFilterService.ReportFilterObj.isBSLoaded\"\r\n      style=\"height: 524px; overflow-y:scroll;font-size: 14px;padding-left: 0px;padding-right:0px;\">\r\n      <div class=\"col-md-12 liabilities\" style=\"padding: 0px\">\r\n        <div class=\"col-md-12\" style=\"padding: 0;position: sticky;top:0\">\r\n          <table id=\"report-header\" style=\"table-layout: fixed;width: 100%\">\r\n            <thead>\r\n              <th style=\"border-top: 1px solid;border-bottom:1px solid; text-align:center;width: 20%\"><b>LIABILITIES</b>\r\n              </th>\r\n              <th style=\"border-top: 1px solid;border-bottom:1px solid;\">&nbsp;</th>\r\n              <th style=\"border-top: 1px solid;border-bottom:1px solid;\">&nbsp;</th>\r\n              <th style=\"border: 1px solid; text-align:right\"><b>B/L AMOUNT</b></th>\r\n              <th style=\"border-top: 1px solid;border-bottom:1px solid;width: 20%; text-align:center\"><b>ASSETS</b></th>\r\n              <th style=\"border-top: 1px solid;border-bottom:1px solid;\">&nbsp;</th>\r\n              <th style=\"border-top: 1px solid;border-bottom:1px solid;\">&nbsp;</th>\r\n              <th style=\"border: 1px solid; text-align:right\"><b>B/L AMOUNT</b></th>\r\n            </thead>\r\n          </table>\r\n        </div>\r\n        <table id=\"report-body\" style=\"table-layout: fixed;min-height: 500px;\">\r\n          <tbody>\r\n            <ng-container *ngFor=\"let x of _reportFilterService.ReportFilterObj.lengthOfATLB;let i=index\">\r\n              <tr>\r\n                <td (dblclick)=\"drillDown('LB',i)\" style=\"width: 20%;border-left: 1px solid;\">\r\n                  <span style=\"white-space: pre\"\r\n                    [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.liabilities[i]?.TYPE=='G' &&_reportFilterService.ReportFilterObj.liabilities[i]?.BL3!=null }\">{{_reportFilterService.ReportFilterObj.liabilities[i]?.ACNAME?_reportFilterService.ReportFilterObj.liabilities[i]?.ACNAME:\"&nbsp;\"}}</span>\r\n                </td>\r\n                <td class=\"text-right\" style=\"width: 10%\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.liabilities[i]?.TYPE=='G' &&_reportFilterService.ReportFilterObj.liabilities[i]?.BL!=null }\">\r\n                    {{_reportFilterService.ReportFilterObj.liabilities[i]?.BL}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"text-right\" style=\"width: 10%\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.liabilities[i]?.BL2}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;width: 10%\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.liabilities[i]?.TYPE=='G' &&_reportFilterService.ReportFilterObj.liabilities[i]?.BL3!=null }\">\r\n                    {{_reportFilterService.ReportFilterObj.liabilities[i]?.BL3}}\r\n                  </span>\r\n                </td>\r\n\r\n\r\n                <td (dblclick)=\"drillDown('AT',i)\" style=\"width:20%\">\r\n                  <span style=\"white-space: pre\"\r\n                    [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.assets[i]?.TYPE=='G' && _reportFilterService.ReportFilterObj.assets[i]?.BL3!=null}\">{{_reportFilterService.ReportFilterObj.assets[i]?.ACNAME?_reportFilterService.ReportFilterObj.assets[i]?.ACNAME:\"&nbsp;\"}}</span>\r\n                </td>\r\n                <td style=\"width:10%\" class=\"text-right\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.assets[i]?.TYPE=='G'&&_reportFilterService.ReportFilterObj.assets[i]?.BL!=null}\">\r\n                    {{_reportFilterService.ReportFilterObj.assets[i]?.BL}}\r\n                  </span>\r\n                </td>\r\n                <td style=\"width:10%\" class=\"text-right\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.assets[i]?.BL2}}\r\n                  </span>\r\n                </td>\r\n\r\n                <td style=\"border-left: 1px solid;border-right: 1px solid;width:10%\" class=\"text-right\">\r\n                  <span [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.liabilities[i]?.TYPE=='G' &&_reportFilterService.ReportFilterObj.liabilities[i]?.BL3!=null }\">\r\n                    {{_reportFilterService.ReportFilterObj.assets[i]?.BL3}}\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <tr id=\"netProfit\">\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.netProfit[0]?.ACNAME?_reportFilterService.ReportFilterObj.netProfit[0]?.ACNAME:\"&nbsp;\"}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.netProfit[0]?.BL}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.netProfit[0]?.BL2}}\r\n                </span>\r\n              </td>\r\n\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.netProfit[0]?.BL3}}\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.netLoss[0]?.ACNAME?_reportFilterService.ReportFilterObj.netLoss[0]?.ACNAME:\"&nbsp;\"}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.netLoss[0]?.BL}}\r\n                </span>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.netLoss[0]?.BL2}}\r\n                </span>\r\n              </td>\r\n\r\n              <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\">\r\n                <span>\r\n                  {{_reportFilterService.ReportFilterObj.netLoss[0]?.BL3}}\r\n                </span>\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n        <div class=\"col-md-12 liabilitiesTotal\" style=\"padding: 0;position: sticky;bottom:0\">\r\n          <table id=\"report-footer\" style=\"table-layout: fixed\">\r\n            <tfoot>\r\n              <tr>\r\n                <td style=\"width: 20%\">\r\n                  <span style=\"font-weight: bold;color:red\">\r\n                    {{_reportFilterService.ReportFilterObj.differenceInOpeningBalance[0]?.ACNAME?_reportFilterService.ReportFilterObj.differenceInOpeningBalance[0]?.ACNAME:\"&nbsp;\"}}\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  {{_reportFilterService.ReportFilterObj.differenceInOpeningBalance[0]?.BL}}\r\n                </td>\r\n                <td>\r\n                  {{_reportFilterService.ReportFilterObj.differenceInOpeningBalance[0]?.BL2}}\r\n                </td>\r\n                <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid\">\r\n\r\n                  <span style=\"font-weight: bold;color:red\">\r\n                    {{_reportFilterService.ReportFilterObj.differenceInOpeningBalance[0]?.BL3}}\r\n                  </span>\r\n                </td>\r\n                <td style=\"width: 20%\">\r\n                  <span style=\"font-weight: bold;color:red\">\r\n                    {{_reportFilterService.ReportFilterObj.differenceInClosingBalance[1]?.ACNAME?_reportFilterService.ReportFilterObj.differenceInClosingBalance[1]?.ACNAME:\"&nbsp;\"}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.differenceInClosingBalance[0]?.BL}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.differenceInClosingBalance[0]?.BL2}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"text-right\" style=\"border-left: 1px solid;border-right: 1px solid;\">\r\n                  <span style=\"font-weight: bold;color:red\">\r\n                    {{_reportFilterService.ReportFilterObj.differenceInClosingBalance[1]?.BL3}}\r\n                  </span>\r\n\r\n                </td>\r\n              </tr>\r\n              <tr style=\"border-top:1px solid\" [ngClass]=\"{'text-bold':_reportFilterService.ReportFilterObj.liabilitiesTotal[0].TYPE=='T'}\">\r\n                <td style=\"width: 40%;border-bottom: 1px solid;\">\r\n                  {{_reportFilterService.ReportFilterObj.liabilitiesTotal[0]?.ACNAME?_reportFilterService.ReportFilterObj.liabilitiesTotal[0]?.ACNAME:\"&nbsp;\"}}\r\n                </td>\r\n                <td style=\"border-bottom: 1px solid;text-align: right;\">{{_reportFilterService.ReportFilterObj.liabilitiesTotal[0]?.BL}}</td>\r\n                <td style=\"border-bottom: 1px solid;text-align: right;\">{{_reportFilterService.ReportFilterObj.liabilitiesTotal[0]?.BL2}}</td>\r\n                <td style=\"border-left: 1px solid;border-right: 1px solid;text-align: right;border-bottom: 1px solid\">\r\n                  {{_reportFilterService.ReportFilterObj.liabilitiesTotal[0]?.BL3}}</td>\r\n                <td style=\"width: 40%;border-bottom: 1px solid;\">\r\n                  {{_reportFilterService.ReportFilterObj.asstesTotal[0]?.ACNAME?_reportFilterService.ReportFilterObj.asstesTotal[0]?.ACNAME:\"&nbsp;\"}}\r\n                </td>\r\n                <td style=\"border-bottom: 1px solid;text-align: right;\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.asstesTotal[0]?.BL}}\r\n                  </span>\r\n                </td>\r\n                <td style=\"border-bottom: 1px solid;text-align: right;\">\r\n                  <span>\r\n                    {{_reportFilterService.ReportFilterObj.asstesTotal[0]?.BL2}}\r\n                  </span>\r\n                </td>\r\n                <td style=\"border-left: 1px solid;border-right: 1px solid;border-bottom: 1px solid;;text-align: right;\">\r\n                  {{_reportFilterService.ReportFilterObj.asstesTotal[0]?.BL3}}</td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal-sticky\" *ngIf=\"showReportListDialog\"\r\n  style=\"overflow: auto;right: 40%;width: 30%;z-index: 9999999\">\r\n\r\n  <div class=\"modal-content modal-content-main-area\">\r\n    <div style=\"height: 28px; margin-top: 5px; \">\r\n      <div class=\"col-md-12\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Loaded Report List</h4>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n\r\n      <table class=\"table\" style=\"display: grid;\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width: 1%; \">SI NO </th>\r\n            <th style=\"width: 8%; \">Report Name</th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\" let column of previouslyLoadedReportsList; let i= index ;\">\r\n            <td style=\"width: 1%; \">{{i+1}}</td>\r\n            <td style=\"width: 8%; \" [routerLink]=\"column.activeurlpath\">{{column.reportname}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"CancelReportList()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<report-filter #reportFilter (filterEmiiter)=\"applyFilter($event)\" [reportType]=\"reportType\"></report-filter>\r\n"

/***/ })

});
//# sourceMappingURL=31.chunk.js.map