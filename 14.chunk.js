webpackJsonpac__name_([14],{

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_repositories__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chalan_master_service__ = __webpack_require__(1602);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddChalanComponent; });







var AddChalanComponent = (function () {
    function AddChalanComponent(alertService, loadingService, masterService, router, _activatedRoute, _chalanSeries, fb) {
        var _this = this;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.masterService = masterService;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this._chalanSeries = _chalanSeries;
        this.fb = fb;
        this.voucherTypeList = [];
        this.chalanMasterObj = {};
        this.mode = 'New';
        this.modeTitle = '';
        this.getVoucherTypeList();
        try {
            this.router = router;
            if (!!this._activatedRoute.snapshot.params['returnUrl']) {
                this.returnUrl = this._activatedRoute.snapshot.params['returnUrl'];
            }
            if (!!this._activatedRoute.snapshot.params['VName']) {
                var VName = "";
                VName = this._activatedRoute.snapshot.params['VName'];
                this._chalanSeries.getChalanByVname(VName)
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        _this.chalanMasterObj.VName = data.result ? data.result[0].VName : '',
                            _this.chalanMasterObj.VType = data.result ? data.result[0].VType : '',
                            _this.mode = 'edit';
                        _this.modeTitle = "Edit Chalan";
                    }
                    else {
                        _this.mode = '';
                        _this.modeTitle = "Edit -Error in Chalan";
                    }
                }, function (error) {
                    _this.mode = '';
                });
            }
            else {
                this.mode = "New";
                this.modeTitle = "Add Chalan";
            }
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    }
    AddChalanComponent.prototype.getVoucherTypeList = function () {
        var _this = this;
        this.masterService.getAllVoucherList().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.voucherTypeList = res.result;
            }
        });
    };
    AddChalanComponent.prototype.cancel = function () {
        this.returnUrl = "pages/account/AccountLedger/chalan-master";
        this.router.navigate([this.returnUrl]);
    };
    AddChalanComponent.prototype.onSave = function () {
        var _this = this;
        ////console.log("mdmd",this.mode,this.chalanMasterObj);
        this.loadingService.show("Data is Saving ..");
        this._chalanSeries.saveChalaMaster(this.mode, this.chalanMasterObj).subscribe(function (response) {
            if (response.status == 'ok') {
                _this.loadingService.hide();
                _this.alertService.info(response.result);
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.loadingService.hide();
            }
        }, function (error) {
            _this.loadingService.hide();
        });
    };
    return AddChalanComponent;
}());
AddChalanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-chalan',
        template: __webpack_require__(1845),
        providers: [__WEBPACK_IMPORTED_MODULE_6__chalan_master_service__["a" /* ChalanMasterService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_2__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_3__common_repositories__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_6__chalan_master_service__["a" /* ChalanMasterService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
], AddChalanComponent);



/***/ }),

/***/ 1442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component_base__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_smartTables_scss__ = __webpack_require__(1873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_style_loader_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_style_loader_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modaldialogs_authorizationDialog_authorizationDialog_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_repositories__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChalanMaserListComponent; });









var ChalanMaserListComponent = (function (_super) {
    __extends(ChalanMaserListComponent, _super);
    function ChalanMaserListComponent(
        //private _authService: AuthService, 
        router, dialog, injector, masterService) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.dialog = dialog;
        _this.injector = injector;
        _this.masterService = masterService;
        _this.settings = {
            mode: 'external',
            add: {
                addButtonContent: '',
                createButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            // view: {
            //   viewButtonContent: 'View',
            //   saveButtonContent: '<i class="ion-checkmark"></i>',
            //   cancelButtonContent: '<i class="ion-close"></i>',
            // },
            edit: {
                editButtonContent: '<button type="button" class="btn btn-info">Edit</button>',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            delete: {
                deleteButtonContent: ' ',
                confirmDelete: true
            },
            pager: {
                display: true,
                perPage: 10
            },
            columns: {
                VName: {
                    title: 'voucher Name',
                    type: 'string'
                },
                Series: {
                    title: 'Series',
                    type: 'string'
                },
                VType: {
                    title: 'Prefix',
                    type: 'string'
                },
            }
        };
        _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */]();
        _this.messageSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"]("You are not authorized.");
        _this.message$ = _this.messageSubject.asObservable();
        try {
            _this.masterService.getAllVoucherList().subscribe(function (res) {
                var data = [];
                data = res.result;
                _this.source.load(data);
                // ////console.log("chalan list",this.source);
            });
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
        return _this;
    }
    ChalanMaserListComponent.prototype.newChalan = function () {
        if (this.masterService.validateMasterCreation("create") == false) {
            return;
        }
        try {
            this.router.navigate(["./pages/account/AccountLedger/chalan-master/add-chalan", { mode: "add", returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ChalanMaserListComponent.prototype.onEditClick = function (event) {
        if (this.masterService.validateMasterCreation("edit") == false) {
            return;
        }
        try {
            this.router.navigate(["./pages/account/AccountLedger/chalan-master/add-chalan", { VName: event.VName, mode: "edit", returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ChalanMaserListComponent.prototype.onViewClick = function (event) {
        try {
            // this.router.navigate(["pages/masters/Branch", { name: event.data.BRANCHID, mode: "view", returnUrl: this.router.url }]);
            if (this._authService.checkMenuRight("BranchList", "view") == true) {
                this.router.navigate(["./pages/masters/Branch", { mode: "view", returnUrl: this.router.url }]);
            }
            else {
                this.messageSubject.next("You are not authorized to View new company.");
                this.openAuthDialog();
            }
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ChalanMaserListComponent.prototype.onDeleteClick = function (chalan) {
        if (this.masterService.validateMasterCreation("delete") == false) {
            return;
        }
    };
    ChalanMaserListComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    ChalanMaserListComponent.prototype.openAuthDialog = function () {
        var message = { header: "Information", message: this.message$ };
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modaldialogs_authorizationDialog_authorizationDialog_component__["a" /* AuthDialog */], { hasBackdrop: true, data: message });
    };
    return ChalanMaserListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__app_component_base__["a" /* AppComponentBase */]));
ChalanMaserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chalan-master-list',
        template: __webpack_require__(1847),
        styles: [__webpack_require__(9), __webpack_require__(120), __webpack_require__(1846)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_8__common_repositories__["a" /* MasterRepo */]])
], ChalanMaserListComponent);



/***/ }),

/***/ 1600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chalan_master_routing__ = __webpack_require__(1601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chalan_master_list_component__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_chalan_master_add_chalan_master_component__ = __webpack_require__(1441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_pipe__ = __webpack_require__(1603);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChalanMaserModule", function() { return ChalanMaserModule; });












var ChalanMaserModule = (function () {
    function ChalanMaserModule() {
    }
    return ChalanMaserModule;
}());
ChalanMaserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["d" /* default */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__chalan_master_routing__["a" /* ChalanMasterRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["a" /* ModalModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__chalan_master_list_component__["a" /* ChalanMaserListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_chalan_master_add_chalan_master_component__["a" /* AddChalanComponent */], __WEBPACK_IMPORTED_MODULE_11__search_pipe__["a" /* SearchPipe */]
        ],
    })
], ChalanMaserModule);



/***/ }),

/***/ 1601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chalan_master_list_component__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_chalan_master_add_chalan_master_component__ = __webpack_require__(1441);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChalanMasterRoutingModule; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__chalan_master_list_component__["a" /* ChalanMaserListComponent */] },
    { path: 'add-chalan', component: __WEBPACK_IMPORTED_MODULE_3__add_chalan_master_add_chalan_master_component__["a" /* AddChalanComponent */] },
];
var ChalanMasterRoutingModule = (function () {
    function ChalanMasterRoutingModule() {
    }
    return ChalanMasterRoutingModule;
}());
ChalanMasterRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ChalanMasterRoutingModule);



/***/ }),

/***/ 1602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global_state__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChalanMasterService; });






var ChalanMasterService = (function () {
    function ChalanMasterService(http, activatedRoute, authService, state) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = state;
    }
    Object.defineProperty(ChalanMasterService.prototype, "apiUrl", {
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
    ChalanMasterService.prototype.saveChalaMaster = function (mode, warehouse) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__["Subject"]();
        var opt = this.getRequestOption();
        var hd = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var op = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]();
        var bodyData = { mode: mode, data: warehouse };
        ////console.log("company item"+bodyData);
        this.http.post(this.apiUrl + "/saveNewChalanSeries", bodyData, this.getRequestOption())
            .subscribe(function (data) {
            var retData = data.json();
            //  //console.log(retData);
            if (retData.status == "ok") {
                res.status = "ok";
                res.result = retData.result;
                //    //console.log(res);
                returnSubject.next(res);
                returnSubject.unsubscribe();
            }
            else {
                res.status = "error1";
                res.result = retData.result;
                //console.log(res);
                returnSubject.next(res);
                returnSubject.unsubscribe();
            }
        }, function (error) {
            res.status = "error2", res.result = error;
            //console.log(res);
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    ChalanMasterService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        //console.log({ headers: headers });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
    };
    ChalanMasterService.prototype.getChalanByVname = function (vname) {
        var bodyData = { VName: vname };
        return this.http
            .post(this.apiUrl + "/getChalanByVname", bodyData, this.getRequestOption())
            .map(function (data) { return data.json(); }).share();
    };
    return ChalanMasterService;
}());
ChalanMasterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__app_global_state__["a" /* GlobalState */]])
], ChalanMasterService);



/***/ }),

/***/ 1603:
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
                    var comId = (item.VName) ? (item.VName).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
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

/***/ 1694:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table-container table.ng2-smart-table {\n  color: #000000; }\n  .ng2-smart-table-container table.ng2-smart-table th, .ng2-smart-table-container table.ng2-smart-table td {\n    border: 1px solid gainsboro !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  .ng2-smart-table-container table.ng2-smart-table input {\n    line-height: 1.5 !important; }\n  .ng2-smart-table-container table.ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #000000;\n    font-weight: 900; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 900 !important; }\n      .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #000000 !important; }\n  .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action {\n    font-size: 14px !important;\n    color: #000000;\n    padding: 0 5px;\n    display: inline-block; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n\nnav.ng2-smart-pagination-nav {\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ 1845:
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\r\n    <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n      <div class=\"col-md-6\">\r\n        <h3 class=\"page-title\"></h3>\r\n      </div>\r\n      <div class=\"col-md-6\" style=\"float: right;\">\r\n        <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"cancel()\" style=\"margin-right : 10px;\">\r\n          Back\r\n        </button>\r\n        <button  (click)=\"onSave()\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"tabbable\" id=\"warehouse-tabs\">\r\n            <ul class=\"nav nav-tabs\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" href=\"#general-info3\" data-toggle=\"tab\"> </a>\r\n              </li>\r\n       \r\n            </ul>\r\n            <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\" id=\"general-info3\">            \r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-6\">                           \r\n                            <div class=\"form-group row\">\r\n                              <label class=\"col-sm-3 form-control-label\">Voucher List </label>\r\n                              <div class=\"col-sm-9\">\r\n                      \r\n                                <select class=\"form-control\" [(ngModel)]=\"chalanMasterObj.VName\" >\r\n                                    <ng-container *ngFor = \"let item of voucherTypeList\">\r\n                                        <option value=\"{{item.VName}}\"> {{item.VName}}</option>\r\n                                    </ng-container>                                       \r\n                                </select>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-3 form-control-label\">Prefix </label>\r\n                                <div class=\"col-sm-9\">\r\n                                  <input type=\"text\"  style=\"color:black\" class=\"form-control\"\r\n                                    id=\"Prefix\" name=\"Prefix\" [(ngModel)]=\"chalanMasterObj.VType\" placeholder=\"Prefix\" />\r\n                                </div>\r\n                              </div>\r\n\r\n                          </div>\r\n                    </div>\r\n        \r\n                   \r\n                </div>\r\n            </div>  \r\n         </div>   \r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1846:
/***/ (function(module, exports) {

module.exports = ".card-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  .card-header::after {\r\n    display: none;\r\n  }\r\n  \r\n  .card-body {\r\n    padding: 5px !important;\r\n    max-height: 455px !important;\r\n  }\r\n  \r\n  .main-title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 60px 0px;\r\n  \r\n  }\r\n  \r\n  .scroll-touch {\r\n    -webkit-overflow-scrolling: touch !important; \r\n  } \r\n  \r\n  .table td, .table th{\r\n    padding: 0.10rem !important;\r\n  }\r\n  \r\n  .sticky-top {\r\n    margin-top: 60px;\r\n    height: 100vh;\r\n  }\r\n\r\n  tbody {\r\n    display:block;\r\n    height:59vh;\r\n    overflow:auto;\r\n}\r\n\r\nthead, tbody tr {\r\n  display:table;\r\n  width:100%;\r\n  table-layout:fixed;/* even columns width , fix width of table too*/\r\n}\r\n\r\nth{\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  font-family: Roboto,Arial,sans-serif;\r\n\r\n}\r\n\r\ntd{\r\n  font-size: 13px;\r\n  font-family: Roboto,Arial,sans-serif;\r\n\r\n}\r\n\r\n.btn-sm{\r\n  line-height: 3px;\r\n}\r\n\r\n.table tbody tr td{\r\n  line-height: 24px;\r\n}\r\n\r\n.btn-info{\r\n    margin: auto 1px;\r\n}\r\n\r\n\r\n.card-header{\r\n  padding: 10px 20px;\r\n}\r\n\r\n.searchBy{\r\n  font-size: 13px;\r\n  margin-left: 18rem;\r\n}\r\n\r\n.form-control{\r\n  font-size: 13px !important;\r\n}"

/***/ }),

/***/ 1847:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"widgets\">\r\n    <div class =\"row\">\r\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"newChalan()\" style=\"margin-left:18px; margin-bottom: 10px;\">New Chalan </button>\r\n        </div>\r\n    \r\n      <div class=\"row\">\r\n        <ba-card  title=\"Chala Master\" baCardClass=\"with-scroll\">\r\n          <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (view)=\"onViewClick($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\"></ng2-smart-table>\r\n        </ba-card>\r\n      </div>  \r\n</div> -->\r\n\r\n<!--New Ui design for chalan master-->\r\n\r\n<div class=\"row col-md-12\">\r\n  <div class=\"col-md-4\">\r\n      <h5 style=\"font-weight: bold;font-size: 1.1rem;\">Chalan Master</h5>\r\n\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n      <!-- <button class=\"btn btn-info pull-right\" style=\"font-size: 12px;\" routerLink=\"/pages/dashboard\">Back</button> -->\r\n      <button type=\"button\" class=\"btn btn-info pull pull-right\" (click)=\"newChalan()\" style=\"font-size: 12px;\">Add New Chalan </button>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"align-items: center;\">\r\n  <div class=\"col-md-12 col-sm-8\" style=\"margin-top:0.5rem\">\r\n\r\n    <div class=\"card\" style=\"margin: auto; width: 63rem;\">\r\n      <div class=\"card-header\">\r\n        \r\n        <span class=\"col-md-6\" >Chalan Lists</span>\r\n        <div style=\"margin-left: 15rem;\">\r\n          <input type=\"text\" name=\"search\" [(ngModel)]=\"filter\" #searchFilter=\"ngModel\" class=\"form-control\" placeholder=\"Search...\" style=\"width: 15rem; height: 1.7rem; padding: 0px 6px;\">\r\n        </div>\r\n       \r\n        \r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n              <tr style=\"position: sticky; top:0;line-height: 1.5rem;\">\r\n                  <th scope=\"col\" style=\"width:3%\">S.N</th>\r\n                  <th scope=\"col\" style=\"width:18%\">Voucher Name</th>\r\n                  <th scope=\"col\" style=\"width:18%\">Series</th>\r\n                  <th scope=\"col\" style=\"width:18%\">Prefix</th>\r\n                  <th scope=\"col\" style=\"text-align:center;width:15%\">Action</th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container *ngIf=\"this.source\">\r\n              <tr *ngFor=\"let chalan of (this.source.data|searchData:filter); let i=index\">\r\n                <td style=\"width:3%;\">{{i+1}}</td>\r\n                <td style=\"width:18%;\">{{chalan.VName}}</td>\r\n                <td style=\"width:18%;\">{{chalan.Series}}</td>\r\n                <td style=\"width:18%;\">{{chalan.VType}}</td>\r\n                <td style=\"width:15%;text-align: center;\">\r\n                <button style=\"width: 60px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\" (click)=\"onViewClick(chalan)\">View</button>\r\n                <button style=\"width: 60px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\" (click)=\"onEditClick(chalan)\">Edit</button>\r\n                <button style=\"width: 60px;\" type=\"button\" class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\" (click)=\"onDeleteClick(chalan)\">Delete</button>\r\n\r\n                </td> \r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"this.source.data && (this.source.data|searchData:filter).length === 0\">\r\n              <tr>\r\n                <td colspan=\"5\">\r\n                  <div class=\"font-weight-bold\">Chalan Master Information are unavailable.</div>\r\n                </td>\r\n              </tr>\r\n          </ng-container>\r\n          </tbody>\r\n      </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1873:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1694);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(31)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/raw-loader/index.js!../../../../../../node_modules/sass-loader/index.js!./smartTables.scss", function() {
			var newContent = require("!!../../../../../../node_modules/raw-loader/index.js!../../../../../../node_modules/sass-loader/index.js!./smartTables.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=14.chunk.js.map