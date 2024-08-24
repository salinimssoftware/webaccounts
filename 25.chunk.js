webpackJsonpac__name_([25],{

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReportBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericReportListSettings; });
/* unused harmony export ColumnSettings */



var ReportBodyComponent = (function () {
    function ReportBodyComponent(router, document) {
        this.router = router;
        this.document = document;
        this.tabindex = "list";
        this.selectedRowIndex = 0;
    }
    ReportBodyComponent.prototype.ngOnChanges = function (changes) {
        if (changes.reportType) {
            this.reportType = changes.reportType.currentValue;
        }
        if (changes.listSetting) {
            this.listSetting = changes.listSetting.currentValue;
        }
        if (changes.particularsRow) {
            this.dataList = changes.particularsRow.currentValue;
        }
        if (changes.totalRow) {
            this.dataListTotal = changes.totalRow.currentValue;
        }
        if (changes.ACNAME) {
            this.ACNAME = changes.ACNAME.currentValue;
        }
        if (changes.DATE1) {
            this.DATE1 = changes.DATE1.currentValue;
        }
        if (changes.DATE2) {
            this.DATE2 = changes.DATE2.currentValue;
        }
        if (changes.voucherName) {
            this.voucherName = changes.voucherName.currentValue;
        }
    };
    ReportBodyComponent.prototype.updown = function ($event) {
        if ($event.code == "ArrowDown") {
            this.dataTable.nativeElement.scrollTop = this.dataTable.nativeElement.scrollTop + 26;
            $event.preventDefault();
            this.selectedRowIndex++;
            if (this.selectedRowIndex == this.dataList.length) {
                this.selectedRowIndex = this.dataList.length - 1;
            }
        }
        else if ($event.code == "ArrowUp") {
            $event.preventDefault();
            if (this.dataTable.nativeElement.scrollTop > 0) {
                this.dataTable.nativeElement.scrollTop = this.dataTable.nativeElement.scrollTop - 26;
            }
            this.selectedRowIndex--;
            if (this.selectedRowIndex == -1) {
                this.selectedRowIndex = 0;
            }
        }
        else if ($event.ctrlKey && $event.code == "Enter" &&
            this.selectedRowIndex >= 0 &&
            this.selectedRowIndex < this.dataList.length) {
            $event.preventDefault();
        }
        else if ($event.code == "Enter" && this.selectedRowIndex >= 0 && this.selectedRowIndex < this.dataList.length) {
            $event.preventDefault();
            if (this.reportType == 'Ledger Voucher') {
                var invoicePrefix = this.dataList[this.selectedRowIndex]['VCH TYPE'];
                if (this.isDrillableVoucher(invoicePrefix)) {
                    {
                        this.loadInvoiceFromVoucherType(invoicePrefix, this.dataList[this.selectedRowIndex]);
                    }
                }
            }
        }
    };
    ReportBodyComponent.prototype.doubleClicked = function (index) {
        this.selectedRowIndex = index;
        if (this.reportType == 'Ledger Voucher') {
            var invoicePrefix = this.dataList[this.selectedRowIndex]['VCH TYPE'];
            if (this.isDrillableVoucher(invoicePrefix)) {
                this.loadInvoiceFromVoucherType(invoicePrefix, this.dataList[this.selectedRowIndex]);
            }
        }
    };
    ReportBodyComponent.prototype.isDrillableVoucher = function (invoicePrefix) {
        switch (invoicePrefix) {
            case 'SALES':
                return true;
            case 'INCOME':
                return true;
            case 'EXPENSE':
                return true;
            case 'PURCHASE':
                return true;
            case 'JOURNAL':
                return false;
            case 'DEBITNOTE':
                return false;
            case 'CREDITNOTE':
                return false;
            case 'CONTRA':
                return false;
            default:
                return false;
        }
    };
    ReportBodyComponent.prototype.loadInvoiceFromVoucherType = function (invoicePrefix, invoiceDataObj) {
        window.open(window.location.origin + this.resolveRouteUrl(invoicePrefix)
            + "?voucherNumber=" + invoiceDataObj['VCH NO'] + "&from=Ledger", "_self");
    };
    ReportBodyComponent.prototype.resolveRouteUrl = function (prefix) {
        switch (prefix) {
            case 'SALES':
                return "/#/pages/transaction/sales/addsientry";
            case 'INCOME':
                return "/account/#/pages/account/acvouchers/income-voucher";
            case 'EXPENSE':
                return "/account/#/pages/account/acvouchers/expense-voucher";
            case 'PURCHASE':
                return "/#/pages/transaction/purchases/add-purchase-invoice";
            case 'JOURNAL':
                return "/account/#/pages/account/acvouchers/journal-voucher";
            case 'DEBITNOTE':
                return;
            case 'CREDITNOTE':
                return;
            case 'CONTRA':
                return "/account/#/pages/account/acvouchers/contra-voucher";
            default:
                break;
        }
    };
    return ReportBodyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ReportBodyComponent.prototype, "particularsRow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReportBodyComponent.prototype, "ACNAME", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReportBodyComponent.prototype, "DATE1", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReportBodyComponent.prototype, "DATE2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ReportBodyComponent.prototype, "totalRow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", GenericReportListSettings)
], ReportBodyComponent.prototype, "listSetting", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReportBodyComponent.prototype, "reportType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReportBodyComponent.prototype, "voucherName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dataTable'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ReportBodyComponent.prototype, "dataTable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ReportBodyComponent.prototype, "updown", null);
ReportBodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "report-body",
        template: __webpack_require__(1236),
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], Object])
], ReportBodyComponent);

var GenericReportListSettings = (function () {
    function GenericReportListSettings() {
        this.columns = [];
    }
    return GenericReportListSettings;
}());

var ColumnSettings = (function () {
    function ColumnSettings() {
    }
    return ColumnSettings;
}());



/***/ }),

/***/ 1227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_body_component__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportBodyModule; });




var ReportBodyModule = ReportBodyModule_1 = (function () {
    function ReportBodyModule() {
    }
    ReportBodyModule.forRoot = function () {
        return {
            ngModule: ReportBodyModule_1,
        };
    };
    return ReportBodyModule;
}());
ReportBodyModule = ReportBodyModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__report_body_component__["b" /* ReportBodyComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__report_body_component__["b" /* ReportBodyComponent */]]
    })
], ReportBodyModule);

var ReportBodyModule_1;


/***/ }),

/***/ 1236:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .table tr th {\r\n    text-align: center !important;\r\n    vertical-align: middle;\r\n\r\n  }\r\n\r\n  tr {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .page-header-space {\r\n    height: 100px;\r\n  }\r\n\r\n  .text-justify {\r\n    text-align: justify;\r\n  }\r\n\r\n  table {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  th {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .custom-td {\r\n    border: 1px solid #e6e6e6;\r\n    width: 20px;\r\n    text-align: center !important;\r\n  }\r\n\r\n  .row-even {\r\n    background-color: #E6E6E6\r\n  }\r\n\r\n  .row-odd {\r\n    background-color: rgb(197, 197, 196)\r\n  }\r\n\r\n  .thead-padding {\r\n    padding: 10px;\r\n  }\r\n\r\n  .selected-row {\r\n    background-color: #787878 !important;\r\n    color: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n  td {\r\n    padding: 5px !important;\r\n  }\r\n\r\n  .border {\r\n    border-top: 1px solid #e6e6e6 !important;\r\n  }\r\n\r\n  .header{\r\n    min-height: 62px !important\r\n  }\r\n\r\n</style>\r\n<ng-container *ngIf=\"dataList.length\">\r\n  <div id=\"reportTable\" #dataTable *ngIf=\"listSetting\" class=\"row\"\r\n    style=\"height: 470px !important;overflow-y:scroll;overflow-x: hidden;width: 100%;background:#ffffff;margin: 0\">\r\n    <div class=\"header\" style=\"padding: 0px;position: sticky;top: 0\">\r\n      <table id=\"report-header\">\r\n        <thead>\r\n          <tr style=\"border-bottom: 1px solid;height: 30px;\r\n            background: #c5e3ed; \r\n            color: black;\">\r\n            <ng-container *ngIf=\"reportType=='Ledger Voucher'\">\r\n              <td class=\"thead-padding\"><b>Ledger</b></td>\r\n              <td class=\"thead-padding\">{{ACNAME}}</td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"reportType=='Voucher Register'\">\r\n              <td colspan=\"2\" class=\"thead-padding\"><b>List of All {{voucherName}}</b></td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"reportType=='Day Book'\">\r\n              <td colspan=\"2\" class=\"thead-padding\"><b>Day Book of {{voucherName}}</b></td>\r\n            </ng-container>\r\n            <td class=\"thead-padding\"></td>\r\n            <td class=\"thead-padding\"></td>\r\n            <td class=\"thead-padding text-right\" colspan=\"3\"> <strong>{{DATE1 |date}} to {{DATE2 |date}}</strong></td>\r\n          </tr>\r\n          <tr style=\"border-bottom: 1px solid;height: 30px;\r\n            background: #c5e3ed; \r\n            color: black;\">\r\n            <ng-container *ngFor=\"let col of listSetting.columns;let i=index\">\r\n              <th *ngIf=\"col.key=='GROUP NAME'\" style=\"width: 7% !important\" class=\"text-left\">{{col.title}}</th>\r\n              <th *ngIf=\"col.key=='MAIN GROUP NAME'\" style=\"width: 7% !important\" class=\"text-left\">{{col.title}}</th>\r\n              <th *ngIf=\"col.key=='LEDGER NAME'\" style=\"width: 7% !important\" class=\"text-left\">{{col.title}}</th>\r\n              <th *ngIf=\"col.key=='TRNDATE'\" style=\"width: 7% !important\" class=\"text-left\">{{col.title}}</th>\r\n              <th *ngIf=\"col.key=='DATE'\" style=\"width: 7% !important\" class=\"text-left\">{{col.title}}</th>\r\n              <th *ngIf=\"col.key=='PARTICULARS'\" style=\"width: 30% !important\" class=\"text-left\">{{col.title}}</th>\r\n              <th *ngIf=\"col.key=='VCH TYPE'\" style=\"width: 10% !important\" class=\"text-left\">{{col.title}}</th>\r\n              <th *ngIf=\"col.key=='VCH NO'\" style=\"width: 10% !important\" class=\"text-left\">{{col.title}}</th>\r\n              <th *ngIf=\"col.key=='DEBIT' || col.key=='DRAMNT'\" style=\"width: 7% !important\" class=\"text-right\">\r\n                {{col.title}}</th>\r\n              <th *ngIf=\"col.key=='CREDIT' || col.key=='CRAMNT'\" style=\"width: 7% !important\" class=\"text-right\">\r\n                {{col.title}}</th>\r\n              <th *ngIf=\"col.key=='BALANCE'\" style=\"width: 10% !important\" class=\"text-right\">\r\n                {{col.title}}</th>\r\n            </ng-container>\r\n          </tr>\r\n\r\n        </thead>\r\n      </table>\r\n    </div>\r\n\r\n    <table id=\"report-body\">\r\n      <tbody>\r\n        <ng-container *ngFor=\"let itm of dataList;let i = index;\">\r\n          <tr class=\"highlight\" [class.selected-row]=\"selectedRowIndex == i\" (dblclick)=\"doubleClicked(i)\"\r\n            style=\"max-height:25px;\" [class.border]=\"itm['DATE']!=null && itm['FLG']!='B'\">\r\n\r\n            <ng-container *ngFor=\"let col of listSetting.columns\">\r\n              <td *ngIf=\"col.key=='DATE'\" class=\"text-left\" style=\"width:7% !important\">\r\n                {{itm[col.key] | date:'shortDate'}}\r\n              </td>\r\n              <td *ngIf=\"col.key=='PARTICULARS'\" class=\"text-left\" style=\"width:30% !important;white-space: pre\"\r\n                [innerHtml]=\"itm[col.key]\">\r\n              </td>\r\n              <td *ngIf=\"col.key=='VCH TYPE'\" class=\"text-left\" style=\"width:10% !important\">\r\n                {{itm[col.key]}}\r\n              </td>\r\n              <td *ngIf=\"col.key=='VCH NO'\" class=\"text-left\" style=\"width:10% !important\">\r\n                {{itm[col.key]}}\r\n              </td>\r\n              <td *ngIf=\"col.key=='GROUP NAME'\" class=\"text-left\" style=\"width:10% !important\">\r\n                {{itm[col.key]}}\r\n              </td>\r\n              <td *ngIf=\"col.key=='MAIN GROUP NAME'\" class=\"text-left\" style=\"width:10% !important\">\r\n                {{itm[col.key]}}\r\n              </td>\r\n              <td *ngIf=\"col.key=='LEDGER NAME'\" class=\"text-left\" style=\"width:10% !important\">\r\n                {{itm[col.key]}}\r\n              </td>\r\n              <td *ngIf=\"col.key=='TRNDATE'\" class=\"text-left\" style=\"width:10% !important\">\r\n                {{itm[col.key]}}\r\n              </td>\r\n\r\n              <td *ngIf=\"col.key=='DEBIT' || col.key=='DRAMNT'\" style=\"width:7% !important\" class=\"text-right\">\r\n                {{itm[col.key] | number:'1.2-2'}}\r\n              </td>\r\n              <td *ngIf=\"col.key== 'CREDIT' || col.key=='CRAMNT'\" style=\"width:7% !important\" class=\"text-right\">\r\n                {{itm[col.key] | number:'1.2-2'}}\r\n              </td>\r\n              <td *ngIf=\"col.key== 'BALANCE'\" style=\"width:10% !important\" class=\"text-right\">\r\n                {{itm[col.key] | number:'1.2-2'}}\r\n              </td>\r\n            </ng-container>\r\n\r\n          </tr>\r\n          <tr *ngIf=\"selectedRowIndex == i\">\r\n            <td [attr.colspan]=\"listSetting.columns.length+1\">\r\n              <div id=\"row{{i}}\"></div>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n</ng-container>\r\n\r\n\r\n\r\n<div class=\"clearfix\" *ngIf=\"dataList.length\" style=\"width: 100% !important\">\r\n  <div class=\"col-md-12\" style=\"position: sticky;bottom:0;padding: 0px;background: #c5e3ed; \r\n  color: black;\">\r\n    <table id=\"report-footer\" style=\"table-layout:fixed;\">\r\n      <tfoot>\r\n        <ng-container>\r\n          <tr *ngFor=\"let total of dataListTotal\">\r\n            <td  style=\"width:7%\" >\r\n              &nbsp;\r\n            </td>\r\n            <td  style=\"width:30%\"></td>\r\n            <td style=\"width:10%\"></td>\r\n            <td class=\"text-left\"  style=\"width:10%\"><b>{{total.PARTICULARS}}</b></td>\r\n            <td style=\"width: 7% !important\" class=\"text-right\">\r\n              <b>{{total.DRAMNT |number:'1.2-2' }}</b></td>\r\n            <td style=\"width: 7% !important\" class=\"text-right\">\r\n              <b>{{total.CRAMNT |number:'1.2-2' }}</b>\r\n            </td>\r\n            <td style=\"width:10%\"></td>\r\n          </tr>\r\n        </ng-container>\r\n\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_popupLists_report_filter_report_filter_module__ = __webpack_require__(1178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_permission_guard_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_body_module__ = __webpack_require__(1227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__openingBalance_component__ = __webpack_require__(1406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__openingBalance_routing_module__ = __webpack_require__(1570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__openingBalance_service__ = __webpack_require__(1407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningBalancerModule", function() { return OpeningBalancerModule; });









var OpeningBalancerModule = (function () {
    function OpeningBalancerModule() {
    }
    return OpeningBalancerModule;
}());
OpeningBalancerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__openingBalance_routing_module__["a" /* OpeningBalanceRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__common_popupLists_report_filter_report_filter_module__["a" /* ReportFilterModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__report_body_module__["a" /* ReportBodyModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__openingBalance_component__["a" /* OpeningBalanceComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__common_services_permission_guard_service__["a" /* CanActivateTeam */],
            __WEBPACK_IMPORTED_MODULE_8__openingBalance_service__["a" /* OpeningBalanceService */],
        ]
    })
], OpeningBalancerModule);



/***/ }),

/***/ 1406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_popupLists_report_filter_report_filter_component__ = __webpack_require__(1182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_body_component__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_popupLists_report_filter_report_filter_service__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_listener_service__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__openingBalance_service__ = __webpack_require__(1407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningBalanceComponent; });










var OpeningBalanceComponent = (function () {
    function OpeningBalanceComponent(_location, eventListener, _reportFilterService, router, activatedRoute, _alertService, _openingService, _spinnerService) {
        this._location = _location;
        this.eventListener = eventListener;
        this._reportFilterService = _reportFilterService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._alertService = _alertService;
        this._openingService = _openingService;
        this._spinnerService = _spinnerService;
        this.isActive = false;
        this.listSetting = new __WEBPACK_IMPORTED_MODULE_4__report_body_component__["a" /* GenericReportListSettings */]();
        this.reportType = "OpeningBalance";
        this.ReportDataObj = {};
        this.reportHeaders = [];
        this.reportData = [];
        this.listSetting = {
            title: "Opening Balance",
            columns: [
                {
                    key: "MAIN GROUP NAME",
                    title: "Main Group"
                },
                {
                    key: "GROUP NAME",
                    title: "Group Name"
                },
                {
                    key: "LEDGER NAME",
                    title: "Ledger Name"
                },
                {
                    key: "TRNDATE",
                    title: "Date"
                },
                {
                    key: "DEBIT",
                    title: "Debit"
                },
                {
                    key: "CREDIT",
                    title: "Credit"
                }
            ]
        };
    }
    OpeningBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventListener.onreportObjectChange.subscribe(function (data) {
            _this._reportFilterService.ReportFilterObj = data;
        });
        var mode = this.activatedRoute.snapshot.params['mode'];
        if (mode == "D") {
            this.queryAndLoad(this.activatedRoute.snapshot.params);
        }
        else {
            this.reportFilter.show();
        }
    };
    OpeningBalanceComponent.prototype.loadFilter = function () {
        this.reportFilter.show();
    };
    OpeningBalanceComponent.prototype.show = function () {
        this.isActive = false;
    };
    OpeningBalanceComponent.prototype.popupClose = function () {
        this.isActive = false;
    };
    OpeningBalanceComponent.prototype.applyFilter = function (filterObj) {
        try {
            this.queryAndLoad(filterObj);
        }
        catch (ex) {
            this._alertService.error(ex);
        }
    };
    OpeningBalanceComponent.prototype.queryAndLoad = function (filterObj) {
        var _this = this;
        this.returnUrl = filterObj.returnUrl;
        this.filterObj = filterObj;
        this.reportFilter.popupClose();
        this._spinnerService.show(' Please Wait! Getting Report Data.');
        this._openingService.getOpeningBalanceData().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.ReportDataObj.particularsRow = res.result.data;
                _this.ReportDataObj.totalRow = res.result2 == null ? [] : res.result2;
                _this._spinnerService.hide();
            }
            else {
                _this._spinnerService.hide();
                _this._alertService.warning("No Result Found");
            }
        }, function (error) {
            _this._alertService.error(error);
        });
    };
    OpeningBalanceComponent.prototype.return = function () {
        this.eventListener.updateReportObject(this._reportFilterService.ReportFilterObj);
        this._location.back();
    };
    OpeningBalanceComponent.prototype.getFormattedValue = function (value) {
        if (value != null) {
            if (typeof value === 'number') {
                return value.toLocaleString('en-us', { minimumFractionDigits: 2 });
            }
            else if (new Date(value).toString() != 'Invalid Date') {
                //return new Date(value).toJSON().split('T')[0];
                return value.split('T')[0];
            }
        }
        return value;
    };
    OpeningBalanceComponent.prototype.ExportReportInExcel = function () {
        this._reportFilterService.exportTableToExcel("reportTable", "OpeningBalance");
    };
    OpeningBalanceComponent.prototype.excelDownloadFromHtml_manualTable = function () {
        try {
            var table = '<table>  <thead>   <tr>';
            for (var _i = 0, _a = this.reportHeaders; _i < _a.length; _i++) {
                var column1 = _a[_i];
                table += '<th>' + column1.colHeader + '</th>';
            }
            ;
            table += '</tr> </thead>';
            table += '<tbody>';
            for (var _b = 0, _c = this.reportData; _b < _c.length; _b++) {
                var row = _c[_b];
                table += '<tr>';
                for (var _d = 0, _e = this.reportHeaders; _d < _e.length; _d++) {
                    var column1 = _e[_d];
                    var v = row[column1.mappingName];
                    if (v == null)
                        v = "";
                    table += '<td>' + v + '</td>';
                }
                ;
                '</tr>';
            }
            ;
            table += '</tbody></table>';
            // var Ht = header + param + table;
            var Ht = table;
            var blob = new Blob([Ht], { type: "application/vnd.ms-excel" });
            var blobUrl = URL.createObjectURL(blob);
            var downloadLink = document.createElement("a");
            downloadLink.href = blobUrl;
            downloadLink.download = "OpeningBalance.xls";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
        catch (ex) {
            alert(ex);
        }
        ;
    };
    return OpeningBalanceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('reportFilter'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__common_popupLists_report_filter_report_filter_component__["a" /* ReportFilterComponent */])
], OpeningBalanceComponent.prototype, "reportFilter", void 0);
OpeningBalanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '"openingbalance',
        template: __webpack_require__(1822),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_7__event_listener_service__["a" /* EventListenerService */], __WEBPACK_IMPORTED_MODULE_6__common_popupLists_report_filter_report_filter_service__["a" /* ReportFilterService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_9__openingBalance_service__["a" /* OpeningBalanceService */], __WEBPACK_IMPORTED_MODULE_2__common_services_spinner_spinner_service__["a" /* SpinnerService */]])
], OpeningBalanceComponent);



/***/ }),

/***/ 1407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_state__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningBalanceService; });






var OpeningBalanceService = (function () {
    function OpeningBalanceService(http, activatedRoute, authService, state) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = state;
    }
    Object.defineProperty(OpeningBalanceService.prototype, "apiUrl", {
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
    OpeningBalanceService.prototype.getOpeningBalanceData = function () {
        return this.http.post(this.apiUrl + "/loadReports", { reportname: "OpeningBalance" }, this.getRequestOption())
            .map(this.extractData)
            .catch(this.handleError);
    };
    OpeningBalanceService.prototype.extractData = function (res) {
        var response = res.json();
        return response || {};
    };
    OpeningBalanceService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
    };
    OpeningBalanceService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
    };
    return OpeningBalanceService;
}());
OpeningBalanceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__global_state__["a" /* GlobalState */]])
], OpeningBalanceService);



/***/ }),

/***/ 1570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_permission_guard_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__openingBalance_component__ = __webpack_require__(1406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningBalanceRoutingModule; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__openingBalance_component__["a" /* OpeningBalanceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
];
var OpeningBalanceRoutingModule = (function () {
    function OpeningBalanceRoutingModule() {
    }
    return OpeningBalanceRoutingModule;
}());
OpeningBalanceRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], OpeningBalanceRoutingModule);



/***/ }),

/***/ 1822:
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\r\n    <button class=\"btn btn-info pull-right\" *ngIf=\"returnUrl\" (click)=\"return()\">\r\n      Back\r\n    </button>\r\n  </div>\r\n  \r\n  <div class=\"clearfix\">\r\n    <div class=\"col-md-12\" style=\"padding-left: 0;padding-right: 0px\">\r\n      <div class=\"col-md-1\" style=\"padding: 0;width: 30px !important\">\r\n        <table>\r\n          <tr style=\"height:30px;width:30px\">\r\n            <td style=\"border: 1pt solid black;\">\r\n              <i (click)=\"loadFilter()\" tooltip-placement=\"right\" tooltip=\"Main filters\" style=\"margin:5px\"><span\r\n                  class=\"glyphicon glyphicon-filter\" tooltip=\"Main filters\"></span></i>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"border: 1pt solid black;\">\r\n              <i (click)=\"ExportReportInExcel()\" style=\"margin:5px\"> <span\r\n                      class=\"glyphicon glyphicon-export\"></span></i>\r\n          </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div style=\"float:left;width:95%\">\r\n\r\n        <!-- </aside> -->\r\n\r\n        <!-- <div class=\"widgets\">\r\n            <div class=\"row table-container\" >\r\n\r\n\r\n               \r\n                    \r\n                <table id=\"BlueHeaderResizableTable\" #reportHtmlTable  style=\"font-size:12px; width: 98%; overflow-x :auto;\" class=\"reportTabel\">\r\n                        <thead>\r\n                          \r\n                            <tr>\r\n                                <th *ngFor=\"let column1 of reportHeaders\" width=\"{{column1.width}}\">\r\n                                    {{column1.colHeader}}\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody style=\"width: fit-content;\">\r\n                            <tr *ngFor=\" let data of reportData\"\r\n                                (click)=\"RowClick(i)\">\r\n\r\n                                <td style=\"white-space: pre;overflow: auto;padding-left:3px;padding-right:3px\"\r\n                                    *ngFor=\"let column of reportHeaders\" width=\"{{column.width}}\"\r\n                                    [style.text-align]=\"column.alignment==0?'inherit':'end'\">{{getFormattedValue(data[column.mappingName])}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        \r\n                      \r\n                    </table>\r\n\r\n             \r\n            </div>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"col-md-11\" style=\"padding: 0;width:96.66% !important\">\r\n      <report-body *ngIf=\"ReportDataObj.particularsRow\" [listSetting]=\"listSetting\" [reportType]=\"reportType\"\r\n        [particularsRow]=\"ReportDataObj.particularsRow\" [totalRow]=\"ReportDataObj.totalRow\" [ACNAME]=\"filterObj.ACCNAME\"\r\n        [DATE1]=\"filterObj.DATE1\" [DATE2]=\"filterObj.DATE2\"></report-body>\r\n\r\n\r\n    </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  <report-filter #reportFilter (filterEmiiter)=\"queryAndLoad($event)\" [reportType]=\"reportType\"></report-filter>\r\n  "

/***/ })

});
//# sourceMappingURL=25.chunk.js.map