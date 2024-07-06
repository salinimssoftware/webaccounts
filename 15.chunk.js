webpackJsonpac__name_([15],{

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherSeriesFormComponent; });






var VoucherSeriesFormComponent = (function () {
    function VoucherSeriesFormComponent(masterService, loadingService, _authService, router, alertService, loader, _activatedRoute) {
        var _this = this;
        this.masterService = masterService;
        this.loadingService = loadingService;
        this._authService = _authService;
        this.router = router;
        this.alertService = alertService;
        this.loader = loader;
        this._activatedRoute = _activatedRoute;
        this.voucherTypeList = [];
        this.voucherObj = {};
        this.mode = "New";
        this.modeTitle = '';
        this.getVoucherTypeList();
        try {
            if (!!this._activatedRoute.snapshot.params['returnUrl']) {
                this.returnUrl = this._activatedRoute.snapshot.params['returnUrl'];
            }
            if (!!this._activatedRoute.snapshot.params['VseriesID']) {
                var vseriesID = "";
                vseriesID = this._activatedRoute.snapshot.params['VseriesID'];
                this.masterService.getVoucherSeriesByName(vseriesID)
                    .subscribe(function (data) {
                    ////console.log("edit voucher", data);
                    if (data.status == 'ok') {
                        _this.voucherObj.vType = data.result[0].VOUCHER_ID;
                        _this.voucherObj.seriesName = data.result[0].VSERIES_NAME;
                        _this.voucherObj.seriesPrefix = data.result[0].VSERIES_ID;
                        _this.mode = 'edit';
                        _this.modeTitle = "Edit Voucher";
                    }
                    else {
                        _this.mode = '';
                        _this.modeTitle = "Edit-Error in Voucher";
                    }
                }, function (error) {
                    _this.mode = '';
                });
            }
            else {
                this.mode = "New";
                this.modeTitle = "Add Voucher";
            }
        }
        catch (ex) {
            alert(ex);
        }
    }
    VoucherSeriesFormComponent.prototype.getVoucherTypeList = function () {
        var _this = this;
        this.masterService.getVoucherTypeList().subscribe(function (res) {
            if (res.status == "ok") {
                _this.voucherTypeList = res.result.result ? res.result.result : [];
                ////console.log("voucher type list", this.voucherTypeList);
            }
            else {
                _this.voucherTypeList = [];
            }
        }, function (err) {
            _this.voucherTypeList = [];
        });
    };
    VoucherSeriesFormComponent.prototype.cancel = function () {
        this.router.navigate(["pages/account/AccountLedger/voucher-series-master"]);
    };
    VoucherSeriesFormComponent.prototype.save = function () {
        var _this = this;
        ////console.log("voucher onj after save", this.voucherObj);
        if (this.voucherObj.seriesName == '' || this.voucherObj.seriesName == undefined || this.voucherObj.seriesName == null) {
            alert("Series Name cannot be  empty");
            return;
        }
        if (this.voucherObj.seriesPrefix == '' || this.voucherObj.seriesPrefix == undefined || this.voucherObj.seriesPrefix == null) {
            alert("Prefix cannot be empty");
            return;
        }
        if (this.voucherObj.seriesPrefix.trim() == "") {
            alert("Prefix cannot be  empty");
            return;
        }
        if (this.voucherObj.seriesName.trim() == "") {
            alert("Series Name cannot be  empty");
            return;
        }
        if (this.voucherObj.seriesPrefix.length > 2) {
            alert("Only two letters can be entered in prefix");
            return;
        }
        if (this.voucherObj.vType == '' || this.voucherObj.vType == undefined || this.voucherObj.vType == null) {
            alert("Voucher Type cannot be empty");
            return;
        }
        this.loader.show("Saving data. Please wait...");
        this.masterService.saveVoucherSeries(this.mode, this.voucherObj).subscribe(function (res) {
            if (res.status == "ok") {
                _this.loader.hide();
                _this.alertService.success("Data Saved Successfully !");
                setTimeout(function () {
                    _this.loader.hide();
                    _this.router.navigate([_this.returnUrl]);
                }, 1000);
            }
            else {
                _this.loader.hide();
                _this.alertService.error("Data cannot be saved.");
            }
        }, function (err) {
            _this.loader.hide();
            _this.alertService.error(err);
        });
    };
    VoucherSeriesFormComponent.prototype.onDelete = function () {
        var _this = this;
        this.loadingService.show("Data is Saving ..");
        this.voucherObj.seriesName = this.VoucherId;
        this.masterService.deleteVoucherSeriesMaster(this.mode, this.voucherObj).subscribe(function (response) {
            if (response.status == 'ok') {
                _this.loadingService.hide();
                _this.alertService.info(response.result);
                _this.cancel();
            }
            else {
                _this.loadingService.hide();
            }
        }, function (error) {
            _this.loadingService.hide();
            _this.alertService.info(error.result._body);
        });
    };
    return VoucherSeriesFormComponent;
}());
VoucherSeriesFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-voucher-series',
        template: __webpack_require__(1839),
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */]],
        styles: [__webpack_require__(120), __webpack_require__(1838)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
], VoucherSeriesFormComponent);



/***/ }),

/***/ 1438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherSeriesListComponent; });




var VoucherSeriesListComponent = (function () {
    function VoucherSeriesListComponent(masterService, _authService, router) {
        var _this = this;
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.voucherSeriesList = [];
        this.masterService.getAllVoucherSeriesList().subscribe(function (res) {
            ////console.log("voucher series", res);
            if (res.status === "ok") {
                _this.voucherSeriesList = res.result ? res.result : [];
            }
            else {
                _this.voucherSeriesList = [];
            }
        }, function (err) {
            _this.voucherSeriesList = [];
        });
        this.userSetting = this._authService.getSetting();
    }
    VoucherSeriesListComponent.prototype.AddVoucher = function () {
        try {
            if (this.masterService.validateMasterCreation("create") == false) {
                return;
            }
            this.router.navigate(["./pages/account/AccountLedger/voucher-series-master/add-voucher-series", { mode: "add", returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    VoucherSeriesListComponent.prototype.onEditClick = function (voucher) {
        try {
            if (this.masterService.validateMasterCreation("edit") == false) {
                return;
            }
            this.router.navigate(["./pages/account/AccountLedger/voucher-series-master/add-voucher-series", { VseriesID: voucher.VSERIES_ID, mode: "edit", returnUrl: this.router.url }]);
        }
        catch (ex) {
            alert(ex);
        }
    };
    // onDeleteClick(voucher){
    //   if(this.masterService.validateMasterCreation("delete") == false){
    //     return;
    //   }
    // }
    VoucherSeriesListComponent.prototype.onDeleteClick = function (voucher) {
        // if(confirm("Are you sure you want to delete this item ?")){
        try {
            try {
                if (this.masterService.validateMasterCreation("delete") == false) {
                    return;
                }
                this.router.navigate(["./pages/account/AccountLedger/voucher-series-master/add-voucher-series", { VseriesID: voucher.VSERIES_ID, mode: "delete", returnUrl: this.router.url }]);
            }
            catch (ex) {
                console.log(ex);
                alert(ex);
            }
        }
        catch (ex) {
            console.log(ex);
            alert(ex);
        }
        // }
    };
    return VoucherSeriesListComponent;
}());
VoucherSeriesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'voucher-series-list',
        template: __webpack_require__(1841),
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */]],
        styles: [__webpack_require__(120), __webpack_require__(1840)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
], VoucherSeriesListComponent);



/***/ }),

/***/ 1595:
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
                    var comId = (item.VSERIES_NAME) ? (item.VSERIES_NAME).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
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

/***/ 1596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_ng2_smart_table_src_ng2_smart_table_module__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voucher_series_routing__ = __webpack_require__(1597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__voucher_series_form_component__ = __webpack_require__(1437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__voucher_series_list_component__ = __webpack_require__(1438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_pipe__ = __webpack_require__(1595);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherSeriesModule", function() { return VoucherSeriesModule; });












var VoucherSeriesModule = (function () {
    function VoucherSeriesModule() {
    }
    return VoucherSeriesModule;
}());
VoucherSeriesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["d" /* default */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_0__node_modules_ng2_smart_table_src_ng2_smart_table_module__["Ng2SmartTableModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__voucher_series_routing__["a" /* VoucherSeriesRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__voucher_series_form_component__["a" /* VoucherSeriesFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__voucher_series_list_component__["a" /* VoucherSeriesListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__search_pipe__["a" /* SearchPipe */]
        ],
    })
], VoucherSeriesModule);



/***/ }),

/***/ 1597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voucher_series_form_component__ = __webpack_require__(1437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voucher_series_list_component__ = __webpack_require__(1438);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherSeriesRoutingModule; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__voucher_series_list_component__["a" /* VoucherSeriesListComponent */] },
    { path: 'add-voucher-series', component: __WEBPACK_IMPORTED_MODULE_2__voucher_series_form_component__["a" /* VoucherSeriesFormComponent */] },
];
var VoucherSeriesRoutingModule = (function () {
    function VoucherSeriesRoutingModule() {
    }
    return VoucherSeriesRoutingModule;
}());
VoucherSeriesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], VoucherSeriesRoutingModule);



/***/ }),

/***/ 1838:
/***/ (function(module, exports) {

module.exports = "input, select{\r\n    height: 25px;\r\n}"

/***/ }),

/***/ 1839:
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\r\n    <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n      <div class=\"col-md-6\">\r\n        <h3 class=\"page-title\">Add Voucher Series</h3>\r\n      </div>\r\n      <div class=\"col-md-6\" style=\"float: right;\">\r\n        <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"cancel()\" style=\"margin-right : 10px;\">\r\n          Back\r\n        </button>\r\n        <button  class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\" (click)=\"save()\">\r\n          Save\r\n        </button>\r\n        <!-- <button  *ngIf=\"mode == 'delete'\" (click)=\"onDelete()\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;background-color: #f37070\">\r\n          Delete\r\n        </button> -->\r\n        <button   (click)=\"onDelete()\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;background-color: #f37070\">\r\n          Delete\r\n        </button>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-3 form-control-label\">Voucher Type:</label>\r\n                    <div class=\"col-md-9\">\r\n                        <select class=\"form-control\" [(ngModel)]=\"voucherObj.vType\" >\r\n                            <option *ngFor=\"let voucher of voucherTypeList\" value=\"{{voucher.VOUCHER_ID}}\">{{voucher.VOUCHER_NAME}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-3 from-control-label\">Series Name:</label>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"voucherObj.seriesName\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-3 from-control-label\">Series Prefix:</label>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"voucherObj.seriesPrefix\" [disabled]=\"this.mode=='edit'\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ 1840:
/***/ (function(module, exports) {

module.exports = ".card-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  .card-header::after {\r\n    display: none;\r\n  }\r\n  \r\n  .card-body {\r\n    padding: 5px !important;\r\n    max-height: 455px !important;\r\n  }\r\n  \r\n  .main-title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 60px 0px;\r\n  \r\n  }\r\n  \r\n  .scroll-touch {\r\n    -webkit-overflow-scrolling: touch !important; \r\n  } \r\n  \r\n  .table td, .table th{\r\n    padding: 0.10rem !important;\r\n  }\r\n  \r\n  .sticky-top {\r\n    margin-top: 60px;\r\n    height: 100vh;\r\n  }\r\n\r\n  tbody {\r\n    display:block;\r\n    height:59vh;\r\n    overflow:auto;\r\n}\r\n\r\nthead, tbody tr {\r\n  display:table;\r\n  width:100%;\r\n  table-layout:fixed;/* even columns width , fix width of table too*/\r\n}\r\n\r\nth{\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  font-family: Roboto,Arial,sans-serif;\r\n\r\n}\r\n\r\ntd{\r\n  font-size: 13px;\r\n  font-family: Roboto,Arial,sans-serif;\r\n\r\n}\r\n\r\n.btn-sm{\r\n  line-height: 3px;\r\n}\r\n\r\n.table tbody tr td{\r\n  line-height: 24px;\r\n}\r\n\r\n.btn-info{\r\n    margin: auto 1px;\r\n}\r\n\r\n\r\n.card-header{\r\n  padding: 10px 20px;\r\n}\r\n\r\n.searchBy{\r\n  font-size: 13px;\r\n  margin-left: 18rem;\r\n}\r\n\r\n.form-control{\r\n  font-size: 13px !important;\r\n}"

/***/ }),

/***/ 1841:
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <div class=\"col-md-4\">\r\n        <h5 style=\"font-weight: bold;font-size: 1.1rem;\">Voucher Series Master</h5>\r\n  \r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <!-- <button class=\"btn btn-info pull-right\" style=\"font-size: 12px;\" routerLink=\"/pages/dashboard\">Back</button> -->\r\n        <button *ngIf=\"userSetting.enableMaster_AddEdit==1\" type=\"button\" class=\"btn btn-info pull pull-right\" (click)=\"AddVoucher()\" style=\"font-size: 12px;\">Add Voucher </button>\r\n  \r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\" style=\"align-items: center;\">\r\n    <div class=\"col-md-12 col-sm-8\" style=\"margin-top:0.5rem\">\r\n  \r\n      <div class=\"card\" style=\"margin: auto; width: 63rem;\">\r\n        <div class=\"card-header\">\r\n          \r\n          <span class=\"col-md-6\" >Voucher Lists</span>\r\n          <div style=\"margin-left: 15rem;\">\r\n            <input type=\"text\" name=\"search\" [(ngModel)]=\"filter\" #searchFilter=\"ngModel\" class=\"form-control\" placeholder=\"Search...\" style=\"width: 15rem; height: 1.7rem; padding: 0px 6px;\" autocomplete=\"off\">\r\n          </div>\r\n         \r\n          \r\n        </div>\r\n  \r\n        <div class=\"card-body\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr style=\"position: sticky; top:0;line-height: 1.5rem;\">\r\n                    <th scope=\"col\" style=\"width:3%\">S.N</th>\r\n                    <th scope=\"col\" style=\"width:10%\">Voucher Type</th>\r\n                    <th scope=\"col\" style=\"width:18%\">Voucher Series Name</th>\r\n                    <th scope=\"col\" style=\"width:8%\">Prefix</th>\r\n                    <th scope=\"col\" style=\"text-align:center;width:18%\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngIf=\"voucherSeriesList\" >\r\n                <tr *ngFor=\"let voucher of (this.voucherSeriesList| searchData:filter); let i = index\">\r\n                  <td style=\"width:3%;\">{{i+1}}</td>\r\n                  <td style=\"width:10%;\">{{voucher.VOUCHER_ID}}</td>\r\n                  <td style=\"width:18%;\">{{voucher.VSERIES_NAME}}</td>\r\n                  <td style=\"width:8%;\">{{voucher.VSERIES_ID}}</td>\r\n\r\n                  <td style=\"width:18%;text-align: center;\">\r\n                  <button *ngIf=\"userSetting.enableMaster_AddEdit==1\" style=\"width: 60px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\" (click)=\"onEditClick(voucher)\" >Edit</button>\r\n                  <button style=\"width: 60px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\" (click)=\"onDeleteClick(voucher)\">Delete</button>\r\n  \r\n                  </td> \r\n                </tr>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"this.voucherSeriesList && (this.voucherSeriesList|searchData:filter).length === 0\">\r\n                <tr>\r\n                  <td colspan=\"5\">\r\n                    <div class=\"font-weight-bold\">Voucher Series List are unavailable.</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n              <!-- <ng-container *ngIf=\"this.source.data && (this.source.data|searchData:filter).length === 0\">\r\n                <tr>\r\n                  <td colspan=\"3\">\r\n                    <div class=\"font-weight-bold\">Cost Center Information are unavailable.</div>\r\n                  </td>\r\n                </tr>\r\n            </ng-container> -->\r\n            </tbody>\r\n        </table>\r\n        </div>\r\n  \r\n      </div>\r\n    </div>\r\n  </div>"

/***/ })

});
//# sourceMappingURL=15.chunk.js.map