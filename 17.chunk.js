webpackJsonpac__name_([17],{

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Transaction_Components_transaction_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Account_Ledger_New_AccLedger_service__ = __webpack_require__(1302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_smart_table__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_xlsx__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_file_saver__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBudgetMasterComponent; });















var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var actionMapping = {
    mouse: {
        contextMenu: function (tree, node, $event) {
            $event.preventDefault();
            alert("context menu for " + node.data.ACNAME);
        },
        dblClick: function (tree, node, $event) {
            if (node.hasChildren)
                __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
        },
        click: function (tree, node, $event) {
            $event.shiftKey
                ? __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_SELECTED_MULTI(tree, node, $event)
                : __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_SELECTED(tree, node, $event);
        }
    },
    keys: (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["b" /* KEYS */].ENTER] = function (tree, node, $event) { return node.setActiveAndVisible(); },
        _a)
};
var AddBudgetMasterComponent = (function () {
    function AddBudgetMasterComponent(masterService, loadingService, router, alertService, loader, _authService, _transactionService, AccountService, _activatedRoute) {
        var _this = this;
        this.masterService = masterService;
        this.loadingService = loadingService;
        this.router = router;
        this.alertService = alertService;
        this.loader = loader;
        this._authService = _authService;
        this._transactionService = _transactionService;
        this.AccountService = AccountService;
        this._activatedRoute = _activatedRoute;
        this.BudgetImportSheetList = [];
        this.BudgetObj = {};
        this.userProfile = {};
        this.PhiscalObj = {};
        this.SaveBudgetAllocationObj = {};
        this.nodes = [];
        this.GeoList = [];
        this.parentGroupID = "";
        this.showPopup = false;
        this.isOnceSelected = false;
        this.transaction_status_check = false;
        this.dataAcName = [];
        this.dataAcID = [];
        this.source = new __WEBPACK_IMPORTED_MODULE_12_ng2_smart_table__["b" /* LocalDataSource */]();
        this.showActionCheckBox = false;
        this.loadListSubject = new __WEBPACK_IMPORTED_MODULE_10_rxjs__["Subject"]();
        this.costCenterList = [];
        this.costCenterCategoryList = [];
        this.disableAmt = false;
        this.filterOption = 'ACNAME';
        this.displayBudgetImportPopUp = false;
        this.selectedFileNames = [];
        this.fileToImport = null;
        this.ledgerListForTemplate = [];
        this.gridPopupSettingsForAccountLedgerList = new __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridPopupSettingsForBudgetList = new __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridCostCenterListPopupSettings = new __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridCostCenterGroupListPopupSettings = new __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.userSetting = this._authService.getSetting();
        this.userProfile = _authService.getUserProfile();
        this.PhiscalObj = _authService.getPhiscalInfo();
        try {
            this.router = router;
            this.masterService.getCostcenter().subscribe(function (res) {
                _this.costCenterList = res;
            });
            this.masterService.getCostCenterGroupPagedList().subscribe(function (res) {
                _this.costCenterCategoryList = res.data;
            });
            if (!!this._activatedRoute.snapshot.params['returnUrl']) {
                this.returnUrl = this._activatedRoute.snapshot.params['returnUrl'];
            }
            if (!!this._activatedRoute.snapshot.params['VCHRNO']) {
                var VCHRNO_1 = "";
                VCHRNO_1 = this._activatedRoute.snapshot.params['VCHRNO'];
                this.masterService.LoadBudgetAllocation(VCHRNO_1)
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        if (data.result && data.result.length && data.result.length > 0) {
                            _this.BudgetObj.VCHRNO = VCHRNO_1;
                            var abc = VCHRNO_1 && VCHRNO_1.split('-');
                            _this.BudgetObj.BUDGET_NUMBER = abc && abc[0];
                            _this.BudgetObj.BUDGET_NAME = data.result[0].BUDGET_NAME;
                            _this.BudgetObj.BUDGET_TYPE = data.result[0].BUDGET_TYPE;
                            _this.edit_budg_interval = _this.BudgetObj.BUDGET_INTERVAL = data.result[0].BUDGET_INTERVAL;
                            _this.edit_adbs = _this.BudgetObj.INTERVAL_ON_AD_OR_BS = data.result[0].INTERVAL_ON_AD_OR_BS;
                            _this.BudgetObj.PREFILL_DATA = data.result[0].PREFILL_DATA;
                            _this.BudgetObj.TRNDATE = data.result[0].TRNDATE;
                            _this.BudgetObj.BSDATE = data.result[0].BSDATE;
                            _this.edit_sub_divided_by = _this.BudgetObj.SUBDIVIDED_BY = data.result[0].SUBDIVIDED_BY;
                            _this.edit_action = _this.BudgetObj.ACTION = data.result[0].ACTION;
                            _this.BudgetObj.FROM_DATE = data.result[0].FROM_DATE;
                            _this.BudgetObj.FROM_BSDATE = data.result[0].FROM_BSDATE;
                            _this.BudgetObj.TO_DATE = data.result[0].TO_DATE;
                            _this.BudgetObj.TO_BSDATE = data.result[0].TO_BSDATE;
                            _this.BudgetObj.ACTION = data.result[0].ACTION;
                            _this.BudgetObj.ACTION_TYPE = data.result[0].ACTION_TYPE;
                            _this.BudgetObj.CREATED_BY = data.result[0].CREATED_BY;
                            _this.BudgetObj.CREATED_ON = data.result[0].CREATED_ON;
                            if (data.result[0].ACTION == "WARN" || data.result[0].ACTION == "STOP") {
                                _this.showActionCheckBox = true;
                            }
                            _this.ChooseInterval();
                        }
                        if (data.result2 && data.result2.length && data.result2.length > 0) {
                            _this.temp_DetailList = [];
                            _this.DetailList = [];
                            // this.BudgetObj.COSTCENTER_CATEGORYID = data.result2[0].COSTCENTER_CATEGORYID;
                            // this.BudgetObj.COSTCENTER_CATEGORYNAME = data.result2[0].COSTCENTER_CATEGORYNAME;
                            // this.BudgetObj.CCID = data.result2[0].CCID;
                            // this.BudgetObj.COSTCENTER_NAME = data.result2[0].COSTCENTER_NAME;
                            // this.temp_DetailList = data.result2[0].CCID ? data.result2.filter(x => x.CCID == data.result2[0].CCID) : data.result2;
                            _this.temp_DetailList = data.result2;
                            // console.log("@@DetailList",this.DetailList)
                            //  this.DetailList = data.result2[0].CCID?data.result2:this.DetailList;
                            //  this.temp_DetailList.forEach(x=>{
                            //   let result=this.temp_DetailList.filter(y=>y.ACID == x.ACID );
                            //   x.BUDGET=0;
                            //   console.log("@@result",result)
                            //   result.forEach(z=>x.BUDGET=x.BUDGET+z.BUDGET);
                            // });
                            // let _data = this.DetailList.filter(x => x.CCID == data.result2[0].CCID);
                            // if (_data && _data.length && _data.length > 0) {
                            //   for (var a of _data) {
                            //     let _findIndex = this.DetailList.findIndex(x => x.CCID == data.result2[0].CCID);
                            //     if (_findIndex >= 0) {
                            //       this.DetailList.splice(_findIndex, 1);
                            //     }
                            //   }
                            //   console.log("@@DetailList", this.DetailList)
                            // }
                            _this.CalculateSum();
                            if (_this.BudgetObj.SUBDIVIDED_BY == 'COSTCENTER') {
                                _this.disableAmt = true;
                                _this.costcenterDetailListTotal = 0;
                                _this.Apply();
                                if (_this.temp_DetailList.length > 0) {
                                    var uniqueValues = [];
                                    var seenValues = {};
                                    var key = 'ACID';
                                    for (var _i = 0, _a = _this.temp_DetailList; _i < _a.length; _i++) {
                                        var obj = _a[_i];
                                        if (!seenValues[obj[key]]) {
                                            uniqueValues.push(obj);
                                            seenValues[obj[key]] = true;
                                        }
                                    }
                                    _this.temp_DetailList = uniqueValues;
                                }
                                // this.temp_DetailList.forEach(x => {
                                //   this.costcenterDetailListTotal += this._transactionService.nullToZeroConverter(x.BUDGET);
                                // });
                            }
                        }
                        var mode = _this._activatedRoute.snapshot.params['mode'];
                        if (mode == 'view') {
                            _this.BudgetObj.MODE = "VIEW";
                        }
                        else {
                            _this.BudgetObj.MODE = "EDIT";
                            _this.masterService.checkBudgetTransaction(VCHRNO_1, _this.BudgetObj.BUDGET_NAME, _this.PhiscalObj.PhiscalID, "STATUS").subscribe(function (res) {
                                if (res.status == 'ok') {
                                    if (res.result == "1")
                                        _this.transaction_status_check = true;
                                }
                            }, function (error) {
                                if (error._body == '"1"') {
                                    _this.transaction_status_check = true;
                                    _this.alertService.info("This Budget is already used in transaction.");
                                }
                            });
                        }
                    }
                    else {
                        _this.BudgetObj.MODE = '';
                    }
                }, function (error) {
                });
            }
            else {
                this.BudgetObj.MODE = "ADD";
                this.reset();
            }
        }
        catch (ex) {
            alert(ex);
        }
        var ACID = 'AL';
        this.masterService.getAcidWiseAccountList(ACID).subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
        this.masterService.getAccountListTree().map(function (x) { return x; });
        this.busy = this.masterService.getAccountListTree().map(function (x) { return x; })
            .subscribe(function (res) {
            _this.nodes = res;
            if (_this.tree != null) {
                _this.tree.treeModel.update();
            }
        }, function (error) {
            _this.masterService.resolveError(error, "partyLedger - PartyLedger");
        });
        this.AccountService.getHierachy().subscribe(function (res) {
            if (res.status == "ok") {
                _this.GeoList = res.result.GEO;
            }
        });
        this.AccountService.loadTableListSubject.subscribe(function (x) {
        });
        this.AccountService.getMainGroupList().subscribe(function (response) {
            if (response.length > 0) {
                _this.masterService.mainGroupList = response;
            }
            else {
                _this.masterService.mainGroupList = [];
            }
        });
    }
    AddBudgetMasterComponent.prototype.getTreeItem = function () {
        this.AccountService.Refresh();
        this.busy = this.AccountService.busy;
        this.nodes = this.AccountService.nodes;
        this.tree = this.AccountService.tree;
    };
    AddBudgetMasterComponent.prototype.ngOnInit = function () {
        this.onChangeYa();
    };
    AddBudgetMasterComponent.prototype.getRootParent = function (node, list) {
        if (node.PARENTID == "PA") {
            this.root = node.ACID;
            return;
        }
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var t = list_1[_i];
            if (node.PARENTID != t.ACID) {
                this.loopingChild(node, t.children, t);
            }
            else {
                this.root = t.ACID;
            }
        }
    };
    AddBudgetMasterComponent.prototype.loopingChild = function (node, cList, root) {
        for (var _i = 0, cList_1 = cList; _i < cList_1.length; _i++) {
            var c = cList_1[_i];
            if (c != node) {
                this.loopingChild(node, c.children, root);
            }
            else {
                this.root = root.ACID;
            }
        }
    };
    AddBudgetMasterComponent.prototype.getSubgroupA = function (e) {
        var _this = this;
        var ACID = e.target.value;
        this.selectedNode = {};
        this.masterService.SelectedGroup = this.selectedNode.ACID;
        this.getRootParent(this.selectedNode, this.nodes);
        this.loadListSubject.next(this.selectedNode);
        this.AccountService.ParentInfo = this.selectedNode;
        var mainGroupID = e.target.value;
        this.parentGroupID = mainGroupID;
        this.AccountService.getSubGroupList(mainGroupID).subscribe(function (res) {
            if (res.length > 0) {
                _this.masterService.subGroupAList = res;
                _this.masterService.disableSubGroupA = false;
                _this.masterService.disableSubGroupB = true;
                _this.masterService.disableSubGroupC = true;
                _this.masterService.groupSelectObj.SUBGROUP_A = "";
                _this.masterService.groupSelectObj.SUBGROUP_B = "";
                _this.masterService.groupSelectObj.SUBGROUP_C = "";
            }
            else {
                _this.masterService.subGroupAList = [];
                _this.masterService.disableSubGroupA = true;
                _this.masterService.disableSubGroupB = true;
                _this.masterService.disableSubGroupC = true;
                _this.masterService.groupSelectObj.SUBGROUP_A = "";
                _this.masterService.groupSelectObj.SUBGROUP_B = "";
                _this.masterService.groupSelectObj.SUBGROUP_C = "";
            }
        });
        this.masterService.getAcidWiseAccountList(ACID).subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
    };
    AddBudgetMasterComponent.prototype.getSubgroupB = function (e) {
        var _this = this;
        var subGroupID = e.target.value;
        this.parentGroupID = subGroupID;
        this.AccountService.getSubGroupList(this.masterService.groupSelectObj.SUBGROUP_A).subscribe(function (res) {
            if (res.length > 0) {
                _this.masterService.subGroupBList = res;
                _this.masterService.disableSubGroupB = false;
                _this.masterService.disableSubGroupC = true;
            }
            else {
                _this.masterService.subGroupBList = [];
                _this.masterService.disableSubGroupB = true;
                _this.masterService.disableSubGroupC = true;
                _this.masterService.groupSelectObj.SUBGROUP_B = "";
            }
        });
        this.selectedNode = {};
        this.loadListSubject.next(this.selectedNode);
        this.masterService.getAcidWiseAccountList(subGroupID).subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
    };
    AddBudgetMasterComponent.prototype.reset = function () {
        var _this = this;
        if (!this.masterService.getRequestOption()) {
            return;
        }
        this.costcenterDetailListTotal = 0;
        this.is_yearly = true;
        this.is_quaterly = false;
        this.is_monthly = false;
        this.BudgetObj = {};
        // this.DetailList = [] as Array<BudgetData>;
        this.temp_DetailList = [];
        var newRow = {};
        newRow.ACCOUNTGROUP_ID = null;
        newRow.ACCOUNTGROUP_NAME = null;
        newRow.ACID = null;
        newRow.ACNAME = null;
        newRow.BUDGET = null;
        this.disableAmt = false;
        this.selectedFileNames = [];
        this.fileToImport = null;
        this.ledgerListForTemplate = [];
        // this.DetailList.push(newRow);
        this.temp_DetailList.push(newRow);
        this.BudgetObj.MODE = "ADD";
        this.BudgetObj.BUDGET_INTERVAL = "YEARLY";
        this.BudgetObj.ACTION = "IGNORE";
        this.BudgetObj.BUDGET_TYPE = "ON_NET_TRANSACTION";
        this.BudgetObj.SUBDIVIDED_BY = "DONOT_SUBDIVIDE";
        this.BudgetObj.INTERVAL_ON_AD_OR_BS = "BSINTERVAL";
        this.showActionCheckBox = false;
        this._transactionService.TrnMainObj.VoucherName = "BudgetAllocate";
        this.BudgetObj.DIVISION = this._transactionService.TrnMainObj.DIVISION = this.userProfile.division;
        this.BudgetObj.PHISCALID = this._transactionService.TrnMainObj.PhiscalID = this.userProfile.PhiscalYearInfo.PhiscalID;
        this.BudgetObj.COMPANYID = this.userProfile.CompanyInfo.COMPANYID;
        this.BudgetObj.CURRENT_YEAR = "20" + this.userProfile.PhiscalYearInfo.PhiscalID.split("/")[0];
        this.BudgetObj.NEXT_YEAR = "20" + this.userProfile.PhiscalYearInfo.PhiscalID.split("/")[1];
        this.BudgetObj.BEGINDATE = this.BudgetObj.FROM_DATE = this.masterService.PhiscalObj.BeginDate.split('T')[0];
        this.BudgetObj.ENDDATE = this.BudgetObj.TO_DATE = this.masterService.PhiscalObj.EndDate.split('T')[0];
        this.assigningNewSet(); //while reseting new set is pushed
        this.changeFromDate(this.BudgetObj.FROM_DATE, "AD");
        this.changeToDate(this.BudgetObj.TO_DATE, "AD");
        // this.AccountService.partyList=[];
        this.edit_budg_interval = "";
        this.edit_adbs = "";
        this.masterService.getVoucherNo(this._transactionService.TrnMainObj, "BG").subscribe(function (res) {
            if (res.status == "ok") {
                _this.BudgetObj.VCHRNO = res.result.VCHRNO;
                var abc = res.result.VCHRNO && res.result.VCHRNO.split('-');
                _this.BudgetObj.BUDGET_NUMBER = abc && abc[0];
            }
            else {
                alert("Failed to retrieve VoucherNo");
            }
        });
    };
    AddBudgetMasterComponent.prototype.assigningNewSet = function () {
        if (this.BudgetObj.BUDGET_INTERVAL == "YEARLY") {
            this.is_yearly = true;
            this.is_quaterly = false;
            this.is_monthly = false;
            this.onChangeYa();
            this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(function (x) {
                x.SHRAWAN_ASHOJ = 0;
                x.KARTIK_POUSH = 0;
                x.MAGH_CHAITRA = 0;
                x.BAISAKH_ASAR = 0;
                x.JULY_SEPTEMBER = 0;
                x.OCTOBER_DECEMBER = 0;
                x.JANUARY_MARCH = 0;
                x.APRIL_JUNE = 0;
                x.BAISAKH = 0;
                x.JESTHA = 0;
                x.ASAR = 0;
                x.SHRAWAN = 0;
                x.BHADRA = 0;
                x.ASHOJ = 0;
                x.KARTIK = 0;
                x.MANGSIR = 0;
                x.POUSH = 0;
                x.MAGH = 0;
                x.FALGUN = 0;
                x.CHAITRA = 0;
                x.JANUARY = 0;
                x.FEBRUARY = 0;
                x.MARCH = 0;
                x.APRIL = 0;
                x.MAY = 0;
                x.JUNE = 0;
                x.JULY = 0;
                x.AUGUST = 0;
                x.SEPTEMBER = 0;
                x.OCTOBER = 0;
                x.NOVEMBER = 0;
                x.DECEMBER = 0;
                x.BUDGET = 0;
            });
            this.DetailList = [];
        }
        else if (this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
            this.is_yearly = false;
            this.is_quaterly = true;
            this.is_monthly = false;
            this.onChangeYa();
            this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(function (x) {
                x.BAISAKH = 0;
                x.JESTHA = 0;
                x.ASAR = 0;
                x.SHRAWAN = 0;
                x.BHADRA = 0;
                x.ASHOJ = 0;
                x.KARTIK = 0;
                x.MANGSIR = 0;
                x.POUSH = 0;
                x.MAGH = 0;
                x.FALGUN = 0;
                x.CHAITRA = 0;
                x.JANUARY = 0;
                x.FEBRUARY = 0;
                x.MARCH = 0;
                x.APRIL = 0;
                x.MAY = 0;
                x.JUNE = 0;
                x.JULY = 0;
                x.AUGUST = 0;
                x.SEPTEMBER = 0;
                x.OCTOBER = 0;
                x.NOVEMBER = 0;
                x.DECEMBER = 0;
                x.BUDGET = 0;
            });
            this.DetailList = [];
        }
        else if (this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
            this.is_yearly = false;
            this.is_quaterly = false;
            this.is_monthly = true;
            this.onChangeYa();
            this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(function (x) {
                x.SHRAWAN_ASHOJ = 0;
                x.KARTIK_POUSH = 0;
                x.MAGH_CHAITRA = 0;
                x.BAISAKH_ASAR = 0;
                x.JULY_SEPTEMBER = 0;
                x.OCTOBER_DECEMBER = 0;
                x.JANUARY_MARCH = 0;
                x.APRIL_JUNE = 0;
                x.BAISAKH = 0;
                x.JESTHA = 0;
                x.ASAR = 0;
                x.SHRAWAN = 0;
                x.BHADRA = 0;
                x.ASHOJ = 0;
                x.KARTIK = 0;
                x.MANGSIR = 0;
                x.POUSH = 0;
                x.MAGH = 0;
                x.FALGUN = 0;
                x.CHAITRA = 0;
                x.JANUARY = 0;
                x.FEBRUARY = 0;
                x.MARCH = 0;
                x.APRIL = 0;
                x.MAY = 0;
                x.JUNE = 0;
                x.JULY = 0;
                x.AUGUST = 0;
                x.SEPTEMBER = 0;
                x.OCTOBER = 0;
                x.NOVEMBER = 0;
                x.DECEMBER = 0;
                x.BUDGET = 0;
            });
            this.DetailList = [];
        }
    };
    AddBudgetMasterComponent.prototype.getSubgroupC = function (e) {
        var _this = this;
        var subGroupID = e.target.value;
        this.parentGroupID = subGroupID;
        this.AccountService.getSubGroupList(this.masterService.groupSelectObj.SUBGROUP_B).subscribe(function (res) {
            if (res.length > 0) {
                _this.masterService.subGroupCList = res;
                _this.masterService.disableSubGroupC = false;
            }
            else {
                _this.masterService.subGroupCList = [];
                _this.masterService.disableSubGroupC = true;
                _this.masterService.groupSelectObj.SUBGROUP_C = "";
            }
        });
        this.masterService.getAcidWiseAccountList(subGroupID).subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
    };
    AddBudgetMasterComponent.prototype.selectSubgroupC = function (e) {
        var _this = this;
        var subGroupID = e.target.value;
        this.parentGroupID = subGroupID;
        this.masterService.getAcidWiseAccountList(this.masterService.groupSelectObj.SUBGROUP_C).subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
    };
    AddBudgetMasterComponent.prototype.onChangeYa = function () {
        if (this.BudgetObj.INTERVAL_ON_AD_OR_BS == "BSINTERVAL") {
            this.genericTableList = [
                {
                    header: 'So No.',
                    inputType: 'text',
                    hidden: false,
                    headerNgStyle: { width: "4%" },
                },
                {
                    header: 'Account Group',
                    inputType: 'text',
                    hidden: false,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Account Ledger',
                    inputType: 'text',
                    hidden: false,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Shrawan-Ashoj',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_monthly,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Kartik-Poush',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_monthly,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Magh-Chaitra',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_monthly,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Baisakh-Asar',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_monthly,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Shrawan',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Bhadra',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Ashoj',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Kartik',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Mangsir',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Poush',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Magh',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Falgun',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Chaitra',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Baisakh',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Jestha',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Asar',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Amount',
                    inputType: 'number',
                    hidden: false,
                    headerNgStyle: { width: "15%" },
                },
            ];
            this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(function (x) {
                x.JULY_SEPTEMBER = 0;
                x.OCTOBER_DECEMBER = 0;
                x.JANUARY_MARCH = 0;
                x.APRIL_JUNE = 0;
                x.JANUARY = 0;
                x.FEBRUARY = 0;
                x.MARCH = 0;
                x.APRIL = 0;
                x.MAY = 0;
                x.JUNE = 0;
                x.JULY = 0;
                x.AUGUST = 0;
                x.SEPTEMBER = 0;
                x.OCTOBER = 0;
                x.NOVEMBER = 0;
                x.DECEMBER = 0;
                x.BUDGET = 0;
            });
        }
        else {
            this.genericTableList = [
                {
                    header: 'So No.',
                    inputType: 'text',
                    hidden: false,
                    headerNgStyle: { width: "4%" },
                },
                {
                    header: 'Account Group',
                    inputType: 'text',
                    hidden: false,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Account Ledger',
                    inputType: 'text',
                    hidden: false,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'July-Sept',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_monthly,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Oct-Dec',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_monthly,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Jan-Mar',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_monthly,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Apr-Jun',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_monthly,
                    headerNgStyle: { width: "15%" },
                },
                {
                    header: 'Apr',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'May',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Jun',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Jul',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Aug',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Sept',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Oct',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Nov',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Dec',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Jan',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Feb',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Mar',
                    inputType: 'number',
                    hidden: this.is_yearly || this.is_quaterly,
                    headerNgStyle: { width: "73px" },
                },
                {
                    header: 'Amount',
                    inputType: 'number',
                    hidden: false,
                    headerNgStyle: { width: "15%" },
                },
            ];
            this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(function (x) {
                x.SHRAWAN_ASHOJ = 0;
                x.KARTIK_POUSH = 0;
                x.MAGH_CHAITRA = 0;
                x.BAISAKH_ASAR = 0;
                x.BAISAKH = 0;
                x.JESTHA = 0;
                x.ASAR = 0;
                x.SHRAWAN = 0;
                x.BHADRA = 0;
                x.ASHOJ = 0;
                x.KARTIK = 0;
                x.MANGSIR = 0;
                x.POUSH = 0;
                x.MAGH = 0;
                x.FALGUN = 0;
                x.CHAITRA = 0;
                x.BUDGET = 0;
            });
        }
        this.BudgetObj.TOTAL_BUDGET = 0;
    };
    AddBudgetMasterComponent.prototype.SelectionAction = function () {
        if (this.BudgetObj.ACTION == "WARN" || this.BudgetObj.ACTION == "STOP") {
            this.showActionCheckBox = true;
            if (this.BudgetObj.BUDGET_INTERVAL == "YEARLY") {
                this.BudgetObj.ACTION_TYPE = "ANNUALLY";
            }
            else if (this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                this.BudgetObj.ACTION_TYPE = "QUARTERLY";
            }
            else if (this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                this.BudgetObj.ACTION_TYPE = "MONTHLY";
            }
        }
        else {
            this.showActionCheckBox = false;
            this.BudgetObj.ACTION_TYPE = "";
        }
    };
    AddBudgetMasterComponent.prototype.changeEntryDate = function (value, format) {
        var adbs = __webpack_require__(19);
        if (format == "AD") {
            var yearValue = __WEBPACK_IMPORTED_MODULE_11_moment__(value).year();
            if (yearValue.toString().length == 4) {
                var adDate = (value.replace("-", "/")).replace("-", "/");
                var bsDate = adbs.ad2bs(adDate);
                bsDate.en.month = bsDate.en.month <= 9 ? "0" + (bsDate.en.month) : bsDate.en.month;
                this.BudgetObj.BSDATE =
                    this.masterService.toBSDate(value);
            }
        }
        else if (format == "BS") {
            var datearr = value.split('/');
            var bsDate_1 = datearr[2] + "/" + datearr[1] + "/" + datearr[0];
            var yearValue = __WEBPACK_IMPORTED_MODULE_11_moment__(value).year();
            var adDate = adbs.bs2ad(bsDate_1);
            this.BudgetObj.TRNDATE = this.masterService.toADDate(value);
        }
    };
    AddBudgetMasterComponent.prototype.changeFromDate = function (value, format) {
        var adbs = __webpack_require__(19);
        if (format == "AD") {
            var yearValue = __WEBPACK_IMPORTED_MODULE_11_moment__(value).year();
            if (yearValue.toString().length == 4) {
                var adDate = (value.replace("-", "/")).replace("-", "/");
                var bsDate = adbs.ad2bs(adDate);
                bsDate.en.month = bsDate.en.month <= 9 ? "0" + (bsDate.en.month) : bsDate.en.month;
                this.BudgetObj.FROM_BSDATE =
                    this.masterService.toBSDate(value);
            }
        }
        else if (format == "BS") {
            var datearr = value.split('/');
            var bsDate_2 = datearr[2] + "/" + datearr[1] + "/" + datearr[0];
            var yearValue = __WEBPACK_IMPORTED_MODULE_11_moment__(value).year();
            var adDate = adbs.bs2ad(bsDate_2);
            this.BudgetObj.FROM_DATE = this.masterService.toADDate(value);
        }
    };
    AddBudgetMasterComponent.prototype.changeToDate = function (value, format) {
        var adbs = __webpack_require__(19);
        if (format == "AD") {
            var yearValue = __WEBPACK_IMPORTED_MODULE_11_moment__(value).year();
            if (yearValue.toString().length == 4) {
                var adDate = (value.replace("-", "/")).replace("-", "/");
                var bsDate = adbs.ad2bs(adDate);
                bsDate.en.month = bsDate.en.month <= 9 ? "0" + (bsDate.en.month) : bsDate.en.month;
                this.BudgetObj.TO_BSDATE =
                    this.masterService.toBSDate(value);
            }
        }
        else if (format == "BS") {
            var datearr = value.split('/');
            var bsDate_3 = datearr[2] + "/" + datearr[1] + "/" + datearr[0];
            var yearValue = __WEBPACK_IMPORTED_MODULE_11_moment__(value).year();
            var adDate = adbs.bs2ad(bsDate_3);
            this.BudgetObj.TO_DATE = this.masterService.toADDate(value);
        }
    };
    AddBudgetMasterComponent.prototype.AccountGroupClick = function (i) {
        this.AccountService.partyList.forEach(function (x) {
            if (x.IS_CHECKED == true) {
                x.IS_CHECKED = false;
            }
        });
        this.masterService.groupSelectObj.MGROUP = "";
        this.showPopup = true;
        this.accountGroupreplaceIndex = i;
    };
    AddBudgetMasterComponent.prototype.Close = function () {
        this.showPopup = false;
        this.displayBudgetImportPopUp = false;
        this.selectedFileNames = [];
        this.fileToImport = null;
    };
    AddBudgetMasterComponent.prototype.replaceAccountGroup = function () {
        if (this.accountGroupreplaceIndex >= 0)
            this.temp_DetailList.splice(this.accountGroupreplaceIndex, 1);
    };
    AddBudgetMasterComponent.prototype.handleKeyDownboardEvent = function ($event) {
        if ($event.code == "Escape") {
            $event.preventDefault();
            this.Close();
        }
        else if ($event.code == 'F6') {
            $event.preventDefault();
            this.showPopup = false;
            this.saveClick();
        }
        else if ($event.code == 'F10') {
            $event.preventDefault();
            this.router.navigate(['/pages/account/AccountLedger/budget-master']);
        }
        else if ($event.code == 'F3') {
            $event.preventDefault();
            this.reset();
        }
        else if ($event.key === '-') {
            var targetElement = $event.target;
            var inputType = targetElement.type;
            if (inputType === 'number') {
                $event.preventDefault();
            }
        }
    };
    // @HostListener("document : keyup", ["$event"])
    // handleKeyUpboardEvent($event: KeyboardEvent) {
    //   if ($event.code == "ShiftLeft" || $event.code == "ShiftRight") {
    //     $event.preventDefault();
    //     this.displaySecondaryButton = true;
    //   }
    //   if ($event.code == "Delete") {
    //     $event.preventDefault();
    //     this.displaySecondaryButton = false;
    //   }
    // }
    AddBudgetMasterComponent.prototype.rowClick = function (i) {
        this.selectedIndex = i;
    };
    AddBudgetMasterComponent.prototype.AccountEnterClicked = function (event) {
        this.gridPopupSettingsForAccountLedgerList = this.masterService.getGenericGridPopUpSettings('AccountLedgerListForReport');
        this.genericGridAccountLedger.show();
    };
    AddBudgetMasterComponent.prototype.dblClickAccountSelect = function (account) {
        this.temp_DetailList[this.selectedIndex].ACID = account.ACID;
        this.temp_DetailList[this.selectedIndex].ACNAME = account.ACNAME;
    };
    AddBudgetMasterComponent.prototype.ChooseInterval = function () {
        var _this = this;
        if (this.BudgetObj.MODE == "EDIT") {
            if (confirm("All previously allocated budget's amount will be reset. Are you sure you want to change interval?")) {
            }
            else {
                setTimeout(function () {
                    _this.BudgetObj.BUDGET_INTERVAL = _this.edit_budg_interval;
                }, 100);
                return;
            }
        }
        this.BudgetObj.TOTAL_BUDGET = 0;
        this.costcenterDetailListTotal = 0;
        // if (this.BudgetObj.BUDGET_INTERVAL == "YEARLY") {
        //   this.is_yearly = true;
        //   this.is_quaterly = false;
        //   this.is_monthly = false;
        //   this.onChangeYa();
        //   this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(x => {
        //     x.SHRAWAN_ASHOJ = 0;
        //     x.KARTIK_POUSH = 0;
        //     x.MAGH_CHAITRA = 0;
        //     x.BAISAKH_ASAR = 0;
        //     x.JULY_SEPTEMBER = 0;
        //     x.OCTOBER_DECEMBER = 0;
        //     x.JANUARY_MARCH = 0;
        //     x.APRIL_JUNE = 0;
        //     x.BAISAKH = 0;
        //     x.JESTHA = 0;
        //     x.ASAR = 0;
        //     x.SHRAWAN = 0;
        //     x.BHADRA = 0;
        //     x.ASHOJ = 0;
        //     x.KARTIK = 0;
        //     x.MANGSIR = 0;
        //     x.POUSH = 0;
        //     x.MAGH = 0;
        //     x.FALGUN = 0;
        //     x.CHAITRA = 0;
        //     x.JANUARY = 0;
        //     x.FEBRUARY = 0;
        //     x.MARCH = 0;
        //     x.APRIL = 0;
        //     x.MAY = 0;
        //     x.JUNE = 0;
        //     x.JULY = 0;
        //     x.AUGUST = 0;
        //     x.SEPTEMBER = 0;
        //     x.OCTOBER = 0;
        //     x.NOVEMBER = 0;
        //     x.DECEMBER = 0;
        //     x.BUDGET = 0;
        //   })
        //   this.DetailList = [] as Array<BudgetData>;
        // } else if (this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
        //   this.is_yearly = false;
        //   this.is_quaterly = true;
        //   this.is_monthly = false;
        //   this.onChangeYa();
        //   this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(x => {
        //     x.BAISAKH = 0;
        //     x.JESTHA = 0;
        //     x.ASAR = 0;
        //     x.SHRAWAN = 0;
        //     x.BHADRA = 0;
        //     x.ASHOJ = 0;
        //     x.KARTIK = 0;
        //     x.MANGSIR = 0;
        //     x.POUSH = 0;
        //     x.MAGH = 0;
        //     x.FALGUN = 0;
        //     x.CHAITRA = 0;
        //     x.JANUARY = 0;
        //     x.FEBRUARY = 0;
        //     x.MARCH = 0;
        //     x.APRIL = 0;
        //     x.MAY = 0;
        //     x.JUNE = 0;
        //     x.JULY = 0;
        //     x.AUGUST = 0;
        //     x.SEPTEMBER = 0;
        //     x.OCTOBER = 0;
        //     x.NOVEMBER = 0;
        //     x.DECEMBER = 0;
        //     x.BUDGET = 0;
        //   });
        //   this.DetailList = [] as Array<BudgetData>;
        // } else if (this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
        //   this.is_yearly = false;
        //   this.is_quaterly = false;
        //   this.is_monthly = true;
        //   this.onChangeYa();
        //   this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(x => {
        //     x.SHRAWAN_ASHOJ = 0;
        //     x.KARTIK_POUSH = 0;
        //     x.MAGH_CHAITRA = 0;
        //     x.BAISAKH_ASAR = 0;
        //     x.JULY_SEPTEMBER = 0;
        //     x.OCTOBER_DECEMBER = 0;
        //     x.JANUARY_MARCH = 0;
        //     x.APRIL_JUNE = 0;
        //     x.BAISAKH = 0;
        //     x.JESTHA = 0;
        //     x.ASAR = 0;
        //     x.SHRAWAN = 0;
        //     x.BHADRA = 0;
        //     x.ASHOJ = 0;
        //     x.KARTIK = 0;
        //     x.MANGSIR = 0;
        //     x.POUSH = 0;
        //     x.MAGH = 0;
        //     x.FALGUN = 0;
        //     x.CHAITRA = 0;
        //     x.JANUARY = 0;
        //     x.FEBRUARY = 0;
        //     x.MARCH = 0;
        //     x.APRIL = 0;
        //     x.MAY = 0;
        //     x.JUNE = 0;
        //     x.JULY = 0;
        //     x.AUGUST = 0;
        //     x.SEPTEMBER = 0;
        //     x.OCTOBER = 0;
        //     x.NOVEMBER = 0;
        //     x.DECEMBER = 0;
        //     x.BUDGET = 0;
        //   });
        //   this.DetailList = [] as Array<BudgetData>;
        // }
        this.assigningNewSet();
        // else {
        //   return false
        // }
    };
    AddBudgetMasterComponent.prototype.saveClick = function () {
        var _this = this;
        if (!this.masterService.getRequestOption()) {
            return;
        }
        if (this.BudgetObj.BUDGET_NAME === '' ||
            this.BudgetObj.BUDGET_NAME === null ||
            this.BudgetObj.BUDGET_NAME === undefined ||
            this.BudgetObj.BUDGET_NAME.trim() === '') {
            this.alertService.info("Please Enter Budget Name.");
            return;
        }
        if (this.temp_DetailList[0].ACCOUNTGROUP_ID == null || this.temp_DetailList[0].ACCOUNTGROUP_ID == undefined) {
            this.alertService.info("Please select account ledger");
            return;
        }
        if (this.temp_DetailList.length > 0) {
            var emptyAmountLedger = this.temp_DetailList.find(function (budget) { return (budget.BUDGET == 0 || budget.BUDGET == undefined || budget.BUDGET == null) && (budget.ACCOUNTGROUP_ID != undefined || budget.ACCOUNTGROUP_ID != null); });
            if (emptyAmountLedger) {
                this.alertService.info("Please Enter Amount in Ledger " + emptyAmountLedger.ACNAME);
                return;
            }
        }
        if (this.BudgetObj.SUBDIVIDED_BY == "DONOT_SUBDIVIDE") {
            this.DetailList = this.temp_DetailList.filter(function (x) { return x.BUDGET > 0; });
        }
        else {
            if (this.BudgetObj.CCID != null && this.BudgetObj.CCID != undefined && this.BudgetObj.CCID != "") {
                if (this.temp_DetailList.length > 0) {
                    if (this.temp_DetailList[0].ACID != null) {
                        this.alertService.info("Please add the data of the table to save.");
                        return;
                    }
                }
            }
        }
        // if (this.DetailList.length == 0) {
        //   this.alertService.info("No data to save!");
        //   return false;
        // }
        if (!this.BudgetObj.TRNDATE) {
            this.BudgetObj.TRNDATE = new Date().toJSON().split('T')[0];
            this.changeEntryDate(this.BudgetObj.TRNDATE, 'AD');
        }
        if (!this.BudgetObj.FROM_DATE) {
            this.BudgetObj.FROM_DATE = this.masterService.PhiscalObj.BeginDate.split('T')[0];
            this.changeFromDate(this.BudgetObj.FROM_DATE, 'AD');
        }
        if (!this.BudgetObj.TO_DATE) {
            this.BudgetObj.TO_DATE = this.masterService.PhiscalObj.EndDate.split('T')[0];
            this.changeToDate(this.BudgetObj.TO_DATE, 'AD');
        }
        this.CalculateFinalSum();
        this.BudgetObj.DIVISION = this.userProfile.division;
        this.BudgetObj.PHISCALID = this.userProfile.PhiscalYearInfo.PhiscalID;
        this.BudgetObj.COMPANYID = this.userProfile.CompanyInfo.COMPANYID;
        this.BudgetObj.CURRENT_YEAR = "20" + this.userProfile.PhiscalYearInfo.PhiscalID.split("/")[0];
        this.BudgetObj.NEXT_YEAR = "20" + this.userProfile.PhiscalYearInfo.PhiscalID.split("/")[1];
        this.BudgetObj.BEGINDATE = this.masterService.PhiscalObj.BeginDate.split('T')[0];
        this.BudgetObj.ENDDATE = this.masterService.PhiscalObj.EndDate.split('T')[0];
        this.changeFromDate(this.BudgetObj.FROM_DATE, "AD");
        this.changeToDate(this.BudgetObj.TO_DATE, "AD");
        this.SaveBudgetAllocationObj = this.BudgetObj;
        this.SaveBudgetAllocationObj.BudgetDataList = this.DetailList;
        this.SaveBudgetAllocationObj.BudgetDataList.forEach(function (x) {
            //Budget Allocation data prepare starts
            x.VCHRNO = _this.BudgetObj.VCHRNO;
            x.DIVISION = _this.userProfile.division;
            x.PHISCALID = _this.userProfile.PhiscalYearInfo.PhiscalID;
            x.COMPANYID = _this.userProfile.CompanyInfo.COMPANYID;
        });
        var bodyData = { data: this.SaveBudgetAllocationObj, MODE: this.BudgetObj.MODE };
        this.masterService.saveBudgetAllocation(bodyData).subscribe(function (x) {
            if (x.status == "ok") {
                _this.reset();
                _this.alertService.info("Saved Successfully.");
                _this.returnUrl = "/pages/account/AccountLedger/budget-master";
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                var _error = JSON.parse(x.result._body);
                _this.alertService.error(_error.result);
            }
        }), function (err) {
            _this.alertService.error(err);
        };
    };
    AddBudgetMasterComponent.prototype.CalculateSum = function () {
        var _this = this;
        this.BudgetObj.TOTAL_BUDGET = 0;
        this.temp_DetailList.forEach(function (x) {
            if (_this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "BSINTERVAL") {
                    x.BUDGET = _this._transactionService.nullToZeroConverter(x.SHRAWAN_ASHOJ) + _this._transactionService.nullToZeroConverter(x.KARTIK_POUSH) +
                        _this._transactionService.nullToZeroConverter(x.MAGH_CHAITRA) + _this._transactionService.nullToZeroConverter(x.BAISAKH_ASAR);
                }
                else if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "ADINTERVAL") {
                    x.BUDGET = _this._transactionService.nullToZeroConverter(x.JULY_SEPTEMBER) + _this._transactionService.nullToZeroConverter(x.OCTOBER_DECEMBER) +
                        _this._transactionService.nullToZeroConverter(x.JANUARY_MARCH) + _this._transactionService.nullToZeroConverter(x.APRIL_JUNE);
                }
            }
            else if (_this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "BSINTERVAL") {
                    x.BUDGET = _this._transactionService.nullToZeroConverter(x.BAISAKH) + _this._transactionService.nullToZeroConverter(x.JESTHA) +
                        _this._transactionService.nullToZeroConverter(x.ASAR) + _this._transactionService.nullToZeroConverter(x.SHRAWAN) +
                        _this._transactionService.nullToZeroConverter(x.BHADRA) + _this._transactionService.nullToZeroConverter(x.ASHOJ) +
                        _this._transactionService.nullToZeroConverter(x.KARTIK) + _this._transactionService.nullToZeroConverter(x.MANGSIR) +
                        _this._transactionService.nullToZeroConverter(x.POUSH) + _this._transactionService.nullToZeroConverter(x.MAGH) +
                        _this._transactionService.nullToZeroConverter(x.FALGUN) + _this._transactionService.nullToZeroConverter(x.CHAITRA);
                }
                else if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "ADINTERVAL") {
                    x.BUDGET = _this._transactionService.nullToZeroConverter(x.JANUARY) + _this._transactionService.nullToZeroConverter(x.FEBRUARY) +
                        _this._transactionService.nullToZeroConverter(x.MARCH) + _this._transactionService.nullToZeroConverter(x.APRIL) +
                        _this._transactionService.nullToZeroConverter(x.MAY) + _this._transactionService.nullToZeroConverter(x.JUNE) +
                        _this._transactionService.nullToZeroConverter(x.JULY) + _this._transactionService.nullToZeroConverter(x.AUGUST) +
                        _this._transactionService.nullToZeroConverter(x.SEPTEMBER) + _this._transactionService.nullToZeroConverter(x.OCTOBER) +
                        _this._transactionService.nullToZeroConverter(x.NOVEMBER) + _this._transactionService.nullToZeroConverter(x.DECEMBER);
                }
            }
        });
        this.temp_DetailList.forEach(function (x) {
            _this.BudgetObj.TOTAL_BUDGET += _this._transactionService.nullToZeroConverter(x.BUDGET);
        });
    };
    AddBudgetMasterComponent.prototype.CalculateFinalSum = function () {
        var _this = this;
        this.BudgetObj.TOTAL_BUDGET = 0;
        this.DetailList.forEach(function (x) {
            if (_this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "BSINTERVAL") {
                    x.BUDGET = _this._transactionService.nullToZeroConverter(x.SHRAWAN_ASHOJ) + _this._transactionService.nullToZeroConverter(x.KARTIK_POUSH) +
                        _this._transactionService.nullToZeroConverter(x.MAGH_CHAITRA) + _this._transactionService.nullToZeroConverter(x.BAISAKH_ASAR);
                }
                else if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "ADINTERVAL") {
                    x.BUDGET = _this._transactionService.nullToZeroConverter(x.JULY_SEPTEMBER) + _this._transactionService.nullToZeroConverter(x.OCTOBER_DECEMBER) +
                        _this._transactionService.nullToZeroConverter(x.JANUARY_MARCH) + _this._transactionService.nullToZeroConverter(x.APRIL_JUNE);
                }
            }
            else if (_this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "BSINTERVAL") {
                    x.BUDGET = _this._transactionService.nullToZeroConverter(x.BAISAKH) + _this._transactionService.nullToZeroConverter(x.JESTHA) +
                        _this._transactionService.nullToZeroConverter(x.ASAR) + _this._transactionService.nullToZeroConverter(x.SHRAWAN) +
                        _this._transactionService.nullToZeroConverter(x.BHADRA) + _this._transactionService.nullToZeroConverter(x.ASHOJ) +
                        _this._transactionService.nullToZeroConverter(x.KARTIK) + _this._transactionService.nullToZeroConverter(x.MANGSIR) +
                        _this._transactionService.nullToZeroConverter(x.POUSH) + _this._transactionService.nullToZeroConverter(x.MAGH) +
                        _this._transactionService.nullToZeroConverter(x.FALGUN) + _this._transactionService.nullToZeroConverter(x.CHAITRA);
                }
                else if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "ADINTERVAL") {
                    x.BUDGET = _this._transactionService.nullToZeroConverter(x.JANUARY) + _this._transactionService.nullToZeroConverter(x.FEBRUARY) +
                        _this._transactionService.nullToZeroConverter(x.MARCH) + _this._transactionService.nullToZeroConverter(x.APRIL) +
                        _this._transactionService.nullToZeroConverter(x.MAY) + _this._transactionService.nullToZeroConverter(x.JUNE) +
                        _this._transactionService.nullToZeroConverter(x.JULY) + _this._transactionService.nullToZeroConverter(x.AUGUST) +
                        _this._transactionService.nullToZeroConverter(x.SEPTEMBER) + _this._transactionService.nullToZeroConverter(x.OCTOBER) +
                        _this._transactionService.nullToZeroConverter(x.NOVEMBER) + _this._transactionService.nullToZeroConverter(x.DECEMBER);
                }
            }
        });
        this.DetailList.forEach(function (x) {
            _this.BudgetObj.TOTAL_BUDGET += _this._transactionService.nullToZeroConverter(x.BUDGET);
        });
    };
    AddBudgetMasterComponent.prototype.PreFillDataClicked = function () {
        var fiscal_Data = this.userProfile.PhiscalYearInfo.PhiscalID.split('/');
        var previous_fiscal_front = fiscal_Data[0] - 1;
        var previous_fiscal_back = fiscal_Data[0];
        var previous_fiscalid = previous_fiscal_front + "ZZ" + previous_fiscal_back;
        // let re = /\//gi;
        // let fiscalid = this.userProfile.PhiscalYearInfo.PhiscalID.replace(re, "ZZ");
        var division = this.userProfile.division;
        this.gridPopupSettingsForBudgetList = {
            title: "Budget List",
            apiEndpoints: "/getBudgetNameList/" + previous_fiscalid + "/" + division,
            defaultFilterIndex: 0,
            columns: [
                {
                    key: "BUDGET_NUMBER",
                    title: "Budget No",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "BUDGET_NAME",
                    title: "Budget Name",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
        this.genericGridBudgetList.show();
    };
    AddBudgetMasterComponent.prototype.dblClickBudgetSelect = function (value) {
        var _this = this;
        this.BudgetObj.PREFILL_DATA = value.BUDGET_NAME;
        this.masterService.LoadBudgetAllocation(value.VCHRNO)
            .subscribe(function (data) {
            if (data.status == 'ok') {
                if (data.result && data.result.length && data.result.length > 0) {
                    _this.BudgetObj.MODE = "ADD";
                    _this.BudgetObj.BUDGET_NAME = data.result[0].BUDGET_NAME;
                    //this.BudgetObj.BUDGET_TYPE = data.result[0].BUDGET_TYPE;
                    _this.BudgetObj.BUDGET_TYPE = data.result[0].BUDGET_TYPE;
                    _this.BudgetObj.BUDGET_INTERVAL = data.result[0].BUDGET_INTERVAL;
                    _this.BudgetObj.INTERVAL_ON_AD_OR_BS = data.result[0].INTERVAL_ON_AD_OR_BS;
                    _this.BudgetObj.TRNDATE = data.result[0].TRNDATE;
                    _this.BudgetObj.BSDATE = data.result[0].BSDATE;
                    _this.BudgetObj.SUBDIVIDED_BY = data.result[0].SUBDIVIDED_BY;
                    _this.BudgetObj.FROM_DATE = _this.masterService.PhiscalObj.BeginDate.split('T')[0];
                    _this.BudgetObj.TO_DATE = _this.masterService.PhiscalObj.EndDate.split('T')[0];
                    _this.changeFromDate(_this.BudgetObj.FROM_DATE, "AD");
                    _this.changeToDate(_this.BudgetObj.TO_DATE, "AD");
                    _this.BudgetObj.ACTION = data.result[0].ACTION;
                    _this.BudgetObj.ACTION_TYPE = data.result[0].ACTION_TYPE;
                    _this.ChooseInterval();
                    _this.SelectionAction();
                }
                if (data.result2 && data.result2.length && data.result2.length > 0) {
                    _this.temp_DetailList = [];
                    _this.DetailList = [];
                    _this.BudgetObj.COSTCENTER_CATEGORYID = data.result2[0].COSTCENTER_CATEGORYID;
                    _this.BudgetObj.COSTCENTER_CATEGORYNAME = data.result2[0].COSTCENTER_CATEGORYNAME;
                    _this.BudgetObj.CCID = data.result2[0].CCID;
                    _this.BudgetObj.COSTCENTER_NAME = data.result2[0].COSTCENTER_NAME;
                    _this.temp_DetailList = data.result2;
                    _this.CalculateSum();
                }
                //this.addrow()
            }
        }, function (error) {
        });
    };
    AddBudgetMasterComponent.prototype.addrow = function (index) {
        var _emptyrow = this.temp_DetailList.filter(function (x) { return x.ACID == null && (x.BUDGET == null || x.BUDGET == 0); });
        if (_emptyrow && _emptyrow.length && _emptyrow.length > 0) {
            this.CalculateSum();
            return;
        }
        var newRow = {};
        newRow.ACCOUNTGROUP_ID = null;
        newRow.ACCOUNTGROUP_NAME = null;
        newRow.ACID = null;
        newRow.ACNAME = null;
        newRow.BUDGET = null;
        this.temp_DetailList.push(newRow);
        this.CalculateSum();
    };
    AddBudgetMasterComponent.prototype.preventInput = function ($event) {
        $event.preventDefault();
        return false;
    };
    AddBudgetMasterComponent.prototype.clearRow = function ($event, index, value) {
        $event.preventDefault();
        if (confirm("Are you sure you want to delete the row?")) {
            if (this.temp_DetailList.length < 1)
                return;
            if (this.temp_DetailList.length == 1) {
                this.temp_DetailList.splice(index, 1);
                this.addrow(index);
                return;
            }
            else {
                this.temp_DetailList.splice(index, 1);
                this.CalculateSum();
            }
        }
    };
    AddBudgetMasterComponent.prototype.showCostCenterGroupList = function (i) {
        this.selectedIndex = i;
        this.gridCostCenterGroupListPopupSettings = {
            title: "Cost Centers Categories",
            apiEndpoints: "/getCostCenterGroupPagedList",
            defaultFilterIndex: 0,
            columns: [
                {
                    key: "ccgid",
                    title: "ID",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "COSTCENTERGROUPNAME",
                    title: "Cost Center Category Name",
                    hidden: false,
                    noSearch: false
                },
            ]
        };
        this.genericGridCostCenterGroupList.show();
    };
    AddBudgetMasterComponent.prototype.exportTOExcel = function (dataList, excelFileName) {
        var newArray = [];
        newArray = Object.assign([], dataList);
        Object.keys(newArray).forEach(function (key) {
            delete newArray[key].ACCOUNTGROUP_ID;
            delete newArray[key].ACID;
            delete newArray[key].CCID;
            delete newArray[key].COSTCENTER_CATEGORYID;
        });
        // this.downloadFile(this.listOfData, 'transaction')
        var ws = __WEBPACK_IMPORTED_MODULE_13_xlsx__["utils"].json_to_sheet(newArray);
        var wb = __WEBPACK_IMPORTED_MODULE_13_xlsx__["utils"].book_new();
        __WEBPACK_IMPORTED_MODULE_13_xlsx__["utils"].book_append_sheet(wb, ws, "ABC");
        /* save to file */
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_13_xlsx__["write"](wb, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    AddBudgetMasterComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        __WEBPACK_IMPORTED_MODULE_14_file_saver__["saveAs"](data, fileName + EXCEL_EXTENSION);
    };
    AddBudgetMasterComponent.prototype.showCostCenterList = function () {
        if (this.userSetting.EnableCompulsoryCostCategory == 1) {
            var ccgid = this.BudgetObj.COSTCENTER_CATEGORYID;
            this.gridCostCenterListPopupSettings = {
                title: "Cost Centers",
                apiEndpoints: "/getCostCenterPagedListAccordingToId/" + ccgid,
                defaultFilterIndex: 0,
                columns: [
                    {
                        key: "COSTCENTERNAME",
                        title: "Cost Center Name",
                        hidden: false,
                        noSearch: false
                    }
                ]
            };
        }
        else {
            this.gridCostCenterListPopupSettings = {
                title: "Cost Centers",
                apiEndpoints: "/getCostCenterPagedList",
                defaultFilterIndex: 0,
                columns: [
                    {
                        key: "COSTCENTERNAME",
                        title: "Cost Center Name",
                        hidden: false,
                        noSearch: false
                    }
                ]
            };
        }
        this.genericGridCostCenterList.show();
    };
    // showCostCenterList() {
    //   this.masterService.showCostCenterList().subscribe((res: any) => {
    //     console.log('res', res)
    //     this.costCenterList.push(res.data)
    //     console.log('costCenterList', this.costCenterList)
    //   })
    // }
    AddBudgetMasterComponent.prototype.onCostCenterGroupSelect = function (category) {
        this.BudgetObj.COSTCENTER_CATEGORYID = category.ccgid;
        this.BudgetObj.COSTCENTER_CATEGORYNAME = category.COSTCENTERGROUPNAME;
        this.BudgetObj.COSTCENTER_NAME = '';
        this.BudgetObj.CCID = '';
        var element = document.getElementById("costCenterInput");
        if (element) {
            element.focus();
        }
    };
    AddBudgetMasterComponent.prototype.onSubdivideByChange = function () {
        var _this = this;
        if (this.BudgetObj.MODE == "EDIT") {
            if (confirm("All previously allocated budget's amount will be reset. Are you sure you want to change Sub Divide Mode?")) {
            }
            else {
                setTimeout(function () {
                    _this.BudgetObj.SUBDIVIDED_BY = _this.edit_sub_divided_by;
                }, 100);
                return;
            }
        }
        this.disableAmt = false;
        this.DetailList = [];
        // this.temp_list_holder_array = [];
        if (this.BudgetObj.SUBDIVIDED_BY == 'COSTCENTER') {
            this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(function (x) {
                x.SHRAWAN_ASHOJ = 0;
                x.KARTIK_POUSH = 0;
                x.MAGH_CHAITRA = 0;
                x.BAISAKH_ASAR = 0;
                x.JULY_SEPTEMBER = 0;
                x.OCTOBER_DECEMBER = 0;
                x.JANUARY_MARCH = 0;
                x.APRIL_JUNE = 0;
                x.BAISAKH = 0;
                x.JESTHA = 0;
                x.ASAR = 0;
                x.SHRAWAN = 0;
                x.BHADRA = 0;
                x.ASHOJ = 0;
                x.KARTIK = 0;
                x.MANGSIR = 0;
                x.POUSH = 0;
                x.MAGH = 0;
                x.FALGUN = 0;
                x.CHAITRA = 0;
                x.JANUARY = 0;
                x.FEBRUARY = 0;
                x.MARCH = 0;
                x.APRIL = 0;
                x.MAY = 0;
                x.JUNE = 0;
                x.JULY = 0;
                x.AUGUST = 0;
                x.SEPTEMBER = 0;
                x.OCTOBER = 0;
                x.NOVEMBER = 0;
                x.DECEMBER = 0;
                x.BUDGET = 0;
            });
            this.BudgetObj.TOTAL_BUDGET = 0;
            this.costcenterDetailListTotal = 0;
        }
        else if (this.BudgetObj.SUBDIVIDED_BY == 'DONOT_SUBDIVIDE') {
            this.temp_DetailList && this.temp_DetailList.length && this.temp_DetailList.forEach(function (x) {
                x.SHRAWAN_ASHOJ = 0;
                x.KARTIK_POUSH = 0;
                x.MAGH_CHAITRA = 0;
                x.BAISAKH_ASAR = 0;
                x.JULY_SEPTEMBER = 0;
                x.OCTOBER_DECEMBER = 0;
                x.JANUARY_MARCH = 0;
                x.APRIL_JUNE = 0;
                x.BAISAKH = 0;
                x.JESTHA = 0;
                x.ASAR = 0;
                x.SHRAWAN = 0;
                x.BHADRA = 0;
                x.ASHOJ = 0;
                x.KARTIK = 0;
                x.MANGSIR = 0;
                x.POUSH = 0;
                x.MAGH = 0;
                x.FALGUN = 0;
                x.CHAITRA = 0;
                x.JANUARY = 0;
                x.FEBRUARY = 0;
                x.MARCH = 0;
                x.APRIL = 0;
                x.MAY = 0;
                x.JUNE = 0;
                x.JULY = 0;
                x.AUGUST = 0;
                x.SEPTEMBER = 0;
                x.OCTOBER = 0;
                x.NOVEMBER = 0;
                x.DECEMBER = 0;
                x.BUDGET = 0;
                x.COSTCENTER_CATEGORYID = null;
                x.COSTCENTER_CATEGORYNAME = null;
                x.CCID = null;
                x.COSTCENTER_NAME = null;
            });
            this.BudgetObj.COSTCENTER_CATEGORYID = null;
            this.BudgetObj.CCID = null;
            this.BudgetObj.COSTCENTER_NAME = null;
            this.BudgetObj.COSTCENTER_CATEGORYNAME = null;
            this.BudgetObj.TOTAL_BUDGET = 0;
            this.costcenterDetailListTotal = 0;
        }
    };
    AddBudgetMasterComponent.prototype.onCostCenterSelect = function (costCenter) {
        this.BudgetObj.CCID = costCenter.CCID;
        // this.BudgetObj.CCID = costCenter.target.value;
        this.BudgetObj.COSTCENTER_NAME = costCenter.COSTCENTERNAME;
        var _data = this.DetailList.filter(function (x) { return x.CCID == costCenter.CCID; });
        if (_data && _data.length && _data.length > 0) {
            this.temp_DetailList = [];
            this.temp_DetailList = _data;
            for (var _i = 0, _data_1 = _data; _i < _data_1.length; _i++) {
                var a = _data_1[_i];
                var _findIndex = this.DetailList.findIndex(function (x) { return x.CCID == costCenter.CCID; });
                if (this.BudgetObj.MODE != 'VIEW') {
                    if (_findIndex >= 0) {
                        this.DetailList.splice(_findIndex, 1);
                    }
                }
            }
            this.CalculateSum();
        }
        else {
            this.temp_DetailList.forEach(function (x) {
                x.SHRAWAN_ASHOJ = 0;
                x.KARTIK_POUSH = 0;
                x.MAGH_CHAITRA = 0;
                x.BAISAKH_ASAR = 0;
                x.JULY_SEPTEMBER = 0;
                x.OCTOBER_DECEMBER = 0;
                x.JANUARY_MARCH = 0;
                x.APRIL_JUNE = 0;
                x.BAISAKH = 0;
                x.JESTHA = 0;
                x.ASAR = 0;
                x.SHRAWAN = 0;
                x.BHADRA = 0;
                x.ASHOJ = 0;
                x.KARTIK = 0;
                x.MANGSIR = 0;
                x.POUSH = 0;
                x.MAGH = 0;
                x.FALGUN = 0;
                x.CHAITRA = 0;
                x.JANUARY = 0;
                x.FEBRUARY = 0;
                x.MARCH = 0;
                x.APRIL = 0;
                x.MAY = 0;
                x.JUNE = 0;
                x.JULY = 0;
                x.AUGUST = 0;
                x.SEPTEMBER = 0;
                x.OCTOBER = 0;
                x.NOVEMBER = 0;
                x.DECEMBER = 0;
                x.BUDGET = 0;
            });
            this.CalculateSum();
        }
        if (this.BudgetObj.MODE == 'VIEW') {
            this.disableAmt = true;
        }
        else {
            this.disableAmt = false;
        }
        this.focusNext(0, 'AccountGroupField');
    };
    AddBudgetMasterComponent.prototype.showCostCenterGroupChange = function (costCentercategory) {
        var _this = this;
        this.BudgetObj.COSTCENTER_CATEGORYID = costCentercategory.target.value;
        if (this.userSetting.EnableCompulsoryCostCategory == 1) {
            this.masterService.sendCostCenterList(costCentercategory.target.value).subscribe(function (res) {
                // this.costCenterList.push(res.data)
                _this.costCenterList = res.data;
            });
        }
    };
    AddBudgetMasterComponent.prototype.nextrow = function (index, value) {
        var _this = this;
        if (value.ACCOUNTGROUP_ID === "" || value.ACCOUNTGROUP_ID === null || value.ACCOUNTGROUP_ID === undefined ||
            value.ACID === "" || value.ACID === null || value.ACID === undefined) {
            this.alertService.info("Please enter all data.");
            return;
        }
        if (value.BUDGET === "" || value.BUDGET === null || value.BUDGET === undefined) {
            this.alertService.info("Budget cannot be null or special characters");
            return;
        }
        this.addrow(index);
        setTimeout(function () {
            _this.focusNext(index + 1, 'AccountGroupField');
        }, 50);
    };
    AddBudgetMasterComponent.prototype.focusPrevious = function (rowIndex) {
        if (this.temp_DetailList[rowIndex - 1]) {
            var sname = "accountgroup_" + (rowIndex - 1);
            var element_1 = document.getElementById(sname);
            if (element_1) {
                setTimeout(function () {
                    element_1.focus();
                    //(<HTMLInputElement>element).select();
                }, 100);
            }
        }
        else {
            return;
        }
    };
    AddBudgetMasterComponent.prototype.focusNext = function (index, inputField) {
        var _this = this;
        if (index == 0 && inputField == 'subdividedby') {
            var element_2 = document.getElementById('subdividedby');
            if (element_2) {
                setTimeout(function () {
                    element_2.focus();
                    //(<HTMLInputElement>element).select();
                }, 100);
            }
        }
        else if (inputField == 'amount') {
            if (this.BudgetObj.INTERVAL_ON_AD_OR_BS == "BSINTERVAL") {
                if (this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                    var element_3 = document.getElementById("shrawanAshojAmountInput_" + index);
                    if (element_3) {
                        setTimeout(function () {
                            element_3.focus();
                            //(<HTMLInputElement>element).select();
                        }, 100);
                    }
                }
                else if (this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                    var element_4 = document.getElementById("shrawanAmountInput_" + index);
                    if (element_4) {
                        setTimeout(function () {
                            element_4.focus();
                            //(<HTMLInputElement>element).select();
                        }, 100);
                    }
                }
                else {
                    var element_5 = document.getElementById("budgetAmountinput_" + index);
                    if (element_5) {
                        setTimeout(function () {
                            element_5.focus();
                            //(<HTMLInputElement>element).select();
                        }, 100);
                    }
                }
            }
            // if (this.temp_DetailList[index].BUDGET == 0) {
            // } else if (this.temp_DetailList[0].BUDGET > 0) {
            //   let element = document.getElementById(`accountgroup_${index + 1}`);
            //   if (element) {
            //     setTimeout(function () {
            //       (<HTMLInputElement>element).focus();
            //       //(<HTMLInputElement>element).select();
            //     }, 100)
            //   }
            // }
        }
        else if (this.temp_DetailList[index].ACCOUNTGROUP_ID != null && inputField == 'ledger') {
            var element_6 = document.getElementById("ledger_" + index);
            if (element_6) {
                setTimeout(function () {
                    element_6.focus();
                    //(<HTMLInputElement>element).select();
                }, 100);
            }
        }
        else {
            if (index == 0 && inputField == 'searchInputBox') {
                setTimeout(function () {
                    _this.inputBox.nativeElement.focus();
                }, 100);
            }
            else if (index == 0 && inputField == 'accountGroupSelectField') {
                setTimeout(function () {
                    _this.accountGroupField.nativeElement.focus();
                }, 200);
            }
            else {
                var element_7 = document.getElementById("accountgroup_" + index);
                if (element_7) {
                    setTimeout(function () {
                        element_7.focus();
                        //(<HTMLInputElement>element).select();
                    }, 100);
                }
            }
        }
    };
    AddBudgetMasterComponent.prototype.Apply = function () {
        var _this = this;
        // if (this.DetailList.length == 0) {
        //   this.alertService.info("Data is not Selected!");
        //   return true;
        // }
        if (this.BudgetObj.SUBDIVIDED_BY == "COSTCENTER" && this.BudgetObj.MODE == 'ADD') {
            if (!this.BudgetObj.CCID && !this.temp_DetailList[0].CCID) {
                this.alertService.info("Please enter costcenter.");
                return;
            }
            if (this.temp_DetailList.length > 0) {
                if (this.temp_DetailList[0].ACCOUNTGROUP_ID == null || this.temp_DetailList[0].ACCOUNTGROUP_ID == undefined) {
                    this.alertService.info('No Ledger has been selected.');
                    return;
                }
                var emptyAmountLedger = this.temp_DetailList.find(function (budget) { return (budget.BUDGET == 0 || budget.BUDGET == undefined || budget.BUDGET == null) && (budget.ACCOUNTGROUP_ID != undefined || budget.ACCOUNTGROUP_ID != null); });
                if (emptyAmountLedger) {
                    this.alertService.info("Please Enter Amount in Ledger " + emptyAmountLedger.ACNAME);
                    return;
                }
            }
            // if (this.BudgetObj.TOTAL_BUDGET <= 0) {
            //   this.alertService.info("Please enter amount.");
            //   return;
            // }
        }
        this.temp_DetailList.forEach(function (element, i) {
            var acs1 = {
                COSTCENTER_CATEGORYID: "",
                COSTCENTER_CATEGORYNAME: "",
                CCID: "",
                COSTCENTER_NAME: "",
                ACCOUNTGROUP_ID: "",
                ACCOUNTGROUP_NAME: "",
                ACID: "",
                ACNAME: "",
                BUDGET: 0
            };
            if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "BSINTERVAL") {
                if (_this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                    acs1.SHRAWAN_ASHOJ = element.SHRAWAN_ASHOJ,
                        acs1.KARTIK_POUSH = element.KARTIK_POUSH,
                        acs1.MAGH_CHAITRA = element.MAGH_CHAITRA,
                        acs1.BAISAKH_ASAR = element.BAISAKH_ASAR;
                }
                else if (_this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                    acs1.BAISAKH = element.BAISAKH,
                        acs1.JESTHA = element.JESTHA,
                        acs1.ASAR = element.ASAR,
                        acs1.SHRAWAN = element.SHRAWAN,
                        acs1.BHADRA = element.BHADRA,
                        acs1.ASHOJ = element.ASHOJ,
                        acs1.KARTIK = element.KARTIK,
                        acs1.MANGSIR = element.MANGSIR,
                        acs1.POUSH = element.POUSH,
                        acs1.MAGH = element.MAGH,
                        acs1.FALGUN = element.FALGUN,
                        acs1.CHAITRA = element.CHAITRA;
                }
            }
            else if (_this.BudgetObj.INTERVAL_ON_AD_OR_BS == "ADINTERVAL") {
                if (_this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                    acs1.JULY_SEPTEMBER = element.JULY_SEPTEMBER,
                        acs1.OCTOBER_DECEMBER = element.OCTOBER_DECEMBER,
                        acs1.JANUARY_MARCH = element.JANUARY_MARCH,
                        acs1.APRIL_JUNE = element.APRIL_JUNE;
                }
                else if (_this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                    acs1.JANUARY = element.JANUARY,
                        acs1.FEBRUARY = element.FEBRUARY,
                        acs1.MARCH = element.MARCH,
                        acs1.APRIL = element.APRIL,
                        acs1.MAY = element.MAY,
                        acs1.JUNE = element.JUNE,
                        acs1.JULY = element.JULY,
                        acs1.AUGUST = element.AUGUST,
                        acs1.SEPTEMBER = element.SEPTEMBER,
                        acs1.OCTOBER = element.OCTOBER,
                        acs1.NOVEMBER = element.NOVEMBER,
                        acs1.DECEMBER = element.DECEMBER;
                }
            }
            acs1.COSTCENTER_CATEGORYID = _this.BudgetObj.COSTCENTER_CATEGORYID ? _this.BudgetObj.COSTCENTER_CATEGORYID : element.COSTCENTER_CATEGORYID,
                acs1.COSTCENTER_CATEGORYNAME = _this.BudgetObj.COSTCENTER_CATEGORYID && _this.BudgetObj.COSTCENTER_CATEGORYID != '%' ? _this.costCenterCategoryList.filter(function (x) { return x.ccgid == _this.BudgetObj.COSTCENTER_CATEGORYID; })[0].COSTCENTERGROUPNAME : element.COSTCENTER_CATEGORYNAME,
                acs1.CCID = _this.BudgetObj.CCID ? _this.BudgetObj.CCID : element.CCID,
                acs1.COSTCENTER_NAME = _this.BudgetObj.CCID && _this.BudgetObj.CCID != '%' ? _this.costCenterList.filter(function (x) { return x.CCID == _this.BudgetObj.CCID; })[0].COSTCENTERNAME : element.COSTCENTER_NAME,
                acs1.ACCOUNTGROUP_ID = element.ACCOUNTGROUP_ID,
                acs1.ACCOUNTGROUP_NAME = element.ACCOUNTGROUP_NAME,
                acs1.ACID = element.ACID,
                acs1.ACNAME = element.ACNAME,
                acs1.BUDGET = element.BUDGET;
            if (element.ACCOUNTGROUP_ID && element.ACID && element.BUDGET > 0) {
                _this.DetailList.push(acs1);
            }
            _this.costcenterDetailListTotal = 0;
            _this.DetailList.forEach(function (x) {
                _this.costcenterDetailListTotal += _this._transactionService.nullToZeroConverter(x.BUDGET);
            });
        });
        this.CalculateFinalSum();
        this.BudgetObj.COSTCENTER_CATEGORYID = "";
        this.BudgetObj.COSTCENTER_CATEGORYNAME = "";
        this.BudgetObj.CCID = "";
        this.BudgetObj.COSTCENTER_NAME = "";
        this.BudgetObj.TOTAL_BUDGET = 0;
        // this.temp_DetailList.forEach(x => {      
        // });
        this.temp_DetailList.forEach(function (x) {
            x.SHRAWAN_ASHOJ = 0;
            x.KARTIK_POUSH = 0;
            x.MAGH_CHAITRA = 0;
            x.BAISAKH_ASAR = 0;
            x.JULY_SEPTEMBER = 0;
            x.OCTOBER_DECEMBER = 0;
            x.JANUARY_MARCH = 0;
            x.APRIL_JUNE = 0;
            x.BAISAKH = 0;
            x.JESTHA = 0;
            x.ASAR = 0;
            x.SHRAWAN = 0;
            x.BHADRA = 0;
            x.ASHOJ = 0;
            x.KARTIK = 0;
            x.MANGSIR = 0;
            x.POUSH = 0;
            x.MAGH = 0;
            x.FALGUN = 0;
            x.CHAITRA = 0;
            x.JANUARY = 0;
            x.FEBRUARY = 0;
            x.MARCH = 0;
            x.APRIL = 0;
            x.MAY = 0;
            x.JUNE = 0;
            x.JULY = 0;
            x.AUGUST = 0;
            x.SEPTEMBER = 0;
            x.OCTOBER = 0;
            x.NOVEMBER = 0;
            x.DECEMBER = 0;
            x.BUDGET = 0;
            var result = _this.DetailList.filter(function (y) { return y.ACID == x.ACID; });
            result.forEach(function (z) {
                x.BUDGET += z.BUDGET;
                x.SHRAWAN_ASHOJ += z.SHRAWAN_ASHOJ;
                x.KARTIK_POUSH += z.KARTIK_POUSH;
                x.MAGH_CHAITRA += z.MAGH_CHAITRA;
                x.BAISAKH_ASAR += z.BAISAKH_ASAR;
                x.JULY_SEPTEMBER += z.JULY_SEPTEMBER;
                x.OCTOBER_DECEMBER += z.OCTOBER_DECEMBER;
                x.JANUARY_MARCH += z.JANUARY_MARCH;
                x.APRIL_JUNE += z.APRIL_JUNE;
                x.BAISAKH += z.BAISAKH;
                x.JESTHA += z.JESTHA;
                x.ASAR += z.ASAR;
                x.SHRAWAN += z.SHRAWAN;
                x.BHADRA += z.BHADRA;
                x.ASHOJ += z.ASHOJ;
                x.KARTIK += z.KARTIK;
                x.MANGSIR += z.MANGSIR;
                x.POUSH += z.POUSH;
                x.MAGH += z.MAGH;
                x.FALGUN += z.FALGUN;
                x.CHAITRA += z.CHAITRA;
                x.JANUARY += z.JANUARY;
                x.FEBRUARY += z.FEBRUARY;
                x.MARCH += z.MARCH;
                x.APRIL += z.APRIL;
                x.MAY += z.MAY;
                x.JUNE += z.JUNE;
                x.JULY += z.JULY;
                x.AUGUST += z.AUGUST;
                x.SEPTEMBER += z.SEPTEMBER;
                x.OCTOBER += z.OCTOBER;
                x.NOVEMBER += z.NOVEMBER;
                x.DECEMBER += z.DECEMBER;
            });
            // this.BudgetObj.TOTAL_BUDGET += this._transactionService.nullToZeroConverter(x.BUDGET);
        });
        this.DetailList.forEach(function (x) { return _this.BudgetObj.TOTAL_BUDGET += _this._transactionService.nullToZeroConverter(x.BUDGET); });
        this.disableAmt = true;
    };
    AddBudgetMasterComponent.prototype.ChooseBsInterval = function (event) {
        if (this.BudgetObj.MODE == "EDIT") {
            if (confirm("All previous amount data will be reset. Are you sure you want to change interval mode?")) {
            }
            else {
                this.BudgetObj.INTERVAL_ON_AD_OR_BS = this.edit_adbs;
                return;
            }
        }
        if (event.target.value == "BSINTERVAL") {
            this.onChangeYa();
        }
    };
    AddBudgetMasterComponent.prototype.ChooseAdInterval = function (event) {
        if (this.BudgetObj.MODE == "EDIT") {
            if (confirm("All previous amount data will be reset. Are you sure you want to change interval mode?")) {
            }
            else {
                this.BudgetObj.INTERVAL_ON_AD_OR_BS = this.edit_adbs;
                return;
            }
        }
        if (event.target.value == "ADINTERVAL") {
            this.onChangeYa();
        }
    };
    AddBudgetMasterComponent.prototype.method = function () {
        var _this = this;
        if (this.AccountService.partyList && this.AccountService.partyList.length > 0) {
            var _selecteddata = this.AccountService.partyList.filter(function (x) { return x.IS_CHECKED == true; });
            if (_selecteddata.length == 0) {
                return;
            }
        }
        else {
            return;
        }
        var checkedlist = this.AccountService.partyList.filter(function (x) { return x.IS_CHECKED; });
        checkedlist.forEach(function (ledger) {
            var dublicateACID = _this.temp_DetailList.find(function (x) { return x.ACID == ledger.ACID; });
            if (dublicateACID) {
                var dublicate_acname = dublicateACID.ACNAME;
                alert("Duplicate ledger " + dublicate_acname + " detected!");
                return;
            }
            else {
                if (checkedlist)
                    _this.replaceAccountGroup();
            }
        });
        this.AccountService.partyList.forEach(function (x) {
            if (x.IS_CHECKED == true) {
                var data = {
                    ACCOUNTGROUP_ID: "",
                    ACCOUNTGROUP_NAME: "",
                    ACID: "",
                    ACNAME: "",
                };
                data.ACCOUNTGROUP_ID = x.PARENTID;
                data.ACCOUNTGROUP_NAME = x.PARENT_NAME;
                data.ACID = x.ACID;
                data.ACNAME = x.ACNAME;
                if (_this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY" || _this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                    data.SHRAWAN_ASHOJ = 0;
                    data.KARTIK_POUSH = 0;
                    data.MAGH_CHAITRA = 0;
                    data.BAISAKH_ASAR = 0;
                    data.JULY_SEPTEMBER = 0;
                    data.OCTOBER_DECEMBER = 0;
                    data.JANUARY_MARCH = 0;
                    data.APRIL_JUNE = 0;
                    data.BAISAKH = 0;
                    data.JESTHA = 0;
                    data.ASAR = 0;
                    data.SHRAWAN = 0;
                    data.BHADRA = 0;
                    data.ASHOJ = 0;
                    data.KARTIK = 0;
                    data.MANGSIR = 0;
                    data.POUSH = 0;
                    data.MAGH = 0;
                    data.FALGUN = 0;
                    data.CHAITRA = 0;
                    data.JANUARY = 0;
                    data.FEBRUARY = 0;
                    data.MARCH = 0;
                    data.APRIL = 0;
                    data.MAY = 0;
                    data.JUNE = 0;
                    data.JULY = 0;
                    data.AUGUST = 0;
                    data.SEPTEMBER = 0;
                    data.OCTOBER = 0;
                    data.NOVEMBER = 0;
                    data.DECEMBER = 0;
                    data.BUDGET = 0;
                }
                else {
                    data.BUDGET = 0;
                }
                _this.temp_DetailList.push(data);
            }
        });
        this.filterValue = "";
        // let _emptyindex=this.temp_DetailList.findIndex(x=>x.ACID==null && x.ACCOUNTGROUP_ID==null && x.BUDGET==null);
        var _emptyindex = this.temp_DetailList.findIndex(function (x) { return x.ACID == null && x.ACCOUNTGROUP_ID == null; });
        if (_emptyindex > 0) {
            this.temp_DetailList.splice(_emptyindex, 1);
        }
        setTimeout(function () {
            _this.focusNext(_this.accountGroupreplaceIndex, 'amount');
        }, 50);
    };
    AddBudgetMasterComponent.prototype.handleChange = function (event) {
        if (event.target.checked == true) {
            this.AccountService.partyList.forEach(function (x) {
                x.IS_CHECKED = true;
            });
        }
        else {
            this.AccountService.partyList.forEach(function (x) {
                x.IS_CHECKED = false;
            });
        }
    };
    AddBudgetMasterComponent.prototype.displayBudgetImportPopup = function () {
        if (!this.masterService.getRequestOption()) {
            return;
        }
        this.displayBudgetImportPopUp = true;
    };
    AddBudgetMasterComponent.prototype.downloadBudgetTemplate = function () {
        var _this = this;
        this.AccountService.partyList.forEach(function (x) {
            var data = {
                ACCOUNTGROUP_ID: "",
                ACCOUNTGROUP_NAME: "",
                ACID: "",
                ACNAME: "",
            };
            if (_this.BudgetObj.SUBDIVIDED_BY == 'COSTCENTER') {
                data.COSTCENTER_CATEGORYID = '';
                data.COSTCENTER_CATEGORYNAME = '';
                data.CCID = '';
                data.COSTCENTER_NAME = '';
            }
            data.ACCOUNTGROUP_ID = x.PARENTID;
            data.ACCOUNTGROUP_NAME = x.PARENT_NAME;
            data.ACID = x.ACID;
            data.ACNAME = x.ACNAME;
            if (_this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                data.SHRAWAN_ASHOJ = 0;
                data.KARTIK_POUSH = 0;
                data.MAGH_CHAITRA = 0;
                data.BAISAKH_ASAR = 0;
            }
            else if (_this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                data.SHRAWAN = 0;
                data.BHADRA = 0;
                data.ASHOJ = 0;
                data.KARTIK = 0;
                data.MANGSIR = 0;
                data.POUSH = 0;
                data.MAGH = 0;
                data.FALGUN = 0;
                data.CHAITRA = 0;
                data.BAISAKH = 0;
                data.JESTHA = 0;
                data.ASAR = 0;
                // data.BUDGET = 0;
            }
            else {
                data.BUDGET = 0;
            }
            _this.ledgerListForTemplate.push(data);
        });
        this.exportTOExcel(this.ledgerListForTemplate, 'Ledger');
        this.ledgerListForTemplate = [];
    };
    AddBudgetMasterComponent.prototype.clearBrowseFile = function () {
        this.fileToImport = null;
        this.selectedFileNames = [];
    };
    AddBudgetMasterComponent.prototype.onFileChange = function ($event) {
        var files = $event.target.files;
        this.isOnceSelected = !this.isOnceSelected;
        this.processFiles(files);
    };
    AddBudgetMasterComponent.prototype.onDrop = function (event) {
        event.preventDefault();
        var files = event.dataTransfer.files;
        this.processFiles(files);
    };
    AddBudgetMasterComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    AddBudgetMasterComponent.prototype.processFiles = function (files) {
        this.clearBrowseFile();
        this.fileToImport = files;
        if (this.fileToImport) {
            this.setSelectedFileNames();
        }
    };
    AddBudgetMasterComponent.prototype.setSelectedFileNames = function () {
        this.selectedFileNames = [];
        if (this.fileToImport == null) {
            return;
        }
        else {
            for (var i = 0; i < this.fileToImport.length; i++) {
                this.selectedFileNames.push(this.fileToImport[i].name);
            }
        }
    };
    AddBudgetMasterComponent.prototype.readExcelFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = new Uint8Array(e.target.result);
            var workbook = __WEBPACK_IMPORTED_MODULE_13_xlsx__["read"](data, { type: 'array' });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            // Get headers from the first row
            var headers = Object.keys(worksheet);
            var firstRow = headers[0];
            var headerRow = __WEBPACK_IMPORTED_MODULE_13_xlsx__["utils"].sheet_to_json(worksheet, { header: 1 })[0];
            // Convert sheet data to JSON
            var jsonDataFromSheet = __WEBPACK_IMPORTED_MODULE_13_xlsx__["utils"].sheet_to_json(worksheet, { raw: true });
            // Now, you can use jsonData as your imported data
            _this.BudgetImportSheetList = jsonDataFromSheet;
            var misSpelledLedgerName = [];
            var misSpelledCostCenter = [];
            var objectsWithoutCostCenterName = [];
            var objectsWithoutLedgerName = _this.BudgetImportSheetList.filter(function (x) { return !('ACNAME' in x); });
            if (objectsWithoutLedgerName.length > 0) {
                _this.alertService.info("Ledger Cannot be Blank");
                return;
            }
            if (_this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                var columnExists = headerRow.find(function (columnNameToCheck) { return columnNameToCheck == "SHRAWAN_ASHOJ"; });
                if (columnExists == undefined) {
                    _this.alertService.info("The Uploaded Budget Format doesn't match with downloaded Sample Sheet.");
                    return;
                }
            }
            else if (_this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                var columnExists = headerRow.find(function (columnNameToCheck) { return columnNameToCheck == "SHRAWAN"; });
                if (columnExists == undefined) {
                    _this.alertService.info("The Uploaded Budget Format doesn't match with downloaded Sample Sheet.");
                    return;
                }
            }
            else if (_this.BudgetObj.BUDGET_INTERVAL == 'YEARLY') {
                var columnExists = headerRow.find(function (columnNameToCheck) { return columnNameToCheck == "BUDGET"; });
                if (columnExists == undefined) {
                    _this.alertService.info("The Uploaded Budget Format doesn't match with downloaded Sample Sheet.");
                    return;
                }
            }
            if (_this.BudgetObj.SUBDIVIDED_BY == "COSTCENTER") {
                var columnExists = headerRow.find(function (columnNameToCheck) { return columnNameToCheck == "COSTCENTER_NAME"; });
                if (columnExists == undefined) {
                    _this.alertService.info("The Uploaded Budget Format doesn't match with downloaded Sample Sheet. Cost Center Column is Missing");
                    return;
                }
            }
            _this.temp_DetailList = [];
            _this.DetailList = [];
            var duplicate_account_ledger = [];
            if (_this.BudgetImportSheetList.length > 0) {
                _this.BudgetImportSheetList.forEach(function (x) {
                    var data = {
                        ACCOUNTGROUP_ID: "",
                        ACID: "",
                        COSTCENTER_CATEGORYID: "",
                        CCID: ""
                    };
                    if (_this.BudgetObj.BUDGET_INTERVAL == "QUARTERLY") {
                        if ((!x.SHRAWAN_ASHOJ || x.SHRAWAN_ASHOJ == 0) && (!x.KARTIK_POUSH || x.KARTIK_POUSH == 0) && (!x.MAGH_CHAITRA || x.MAGH_CHAITRA == 0) && (!x.BAISAKH_ASAR || x.BAISAKH_ASAR == 0)) {
                            return;
                        }
                        else {
                            data.SHRAWAN_ASHOJ = x.SHRAWAN_ASHOJ ? x.SHRAWAN_ASHOJ : 0;
                            data.KARTIK_POUSH = x.KARTIK_POUSH ? x.KARTIK_POUSH : 0;
                            data.MAGH_CHAITRA = x.MAGH_CHAITRA ? x.MAGH_CHAITRA : 0;
                            data.BAISAKH_ASAR = x.BAISAKH_ASAR ? x.BAISAKH_ASAR : 0;
                            data.JULY_SEPTEMBER = x.JULY_SEPTEMBER ? x.JULY_SEPTEMBER : 0;
                            data.OCTOBER_DECEMBER = x.OCTOBER_DECEMBER ? x.OCTOBER_DECEMBER : 0;
                            data.JANUARY_MARCH = x.JANUARY_MARCH ? x.JANUARY_MARCH : 0;
                            data.APRIL_JUNE = x.APRIL_JUNE ? x.APRIL_JUNE : 0;
                            data.BUDGET = 0;
                        }
                    }
                    else if (_this.BudgetObj.BUDGET_INTERVAL == "MONTHLY") {
                        if ((!x.BAISAKH || x.BAISAKH == 0) && (!x.JESTHA || x.JESTHA == 0) && (!x.ASAR || x.ASAR == 0) && (!x.SHRAWAN || x.SHRAWAN == 0) && (!x.BHADRA || x.BHADRA == 0) && (!x.ASHOJ || x.ASHOJ == 0) && (!x.KARTIK || x.KARTIK == 0) && (!x.MANGSIR || x.MANGSIR == 0) && (!x.POUSH || x.POUSH == 0) && (!x.MAGH || x.MAGH == 0) && (!x.FALGUN || x.FALGUN == 0) && (!x.CHAITRA || x.CHAITRA == 0)) {
                            return;
                        }
                        else {
                            data.BAISAKH = x.BAISAKH ? x.BAISAKH : 0;
                            data.JESTHA = x.JESTHA ? x.JESTHA : 0;
                            data.ASAR = x.ASAR ? x.ASAR : 0;
                            data.SHRAWAN = x.SHRAWAN ? x.SHRAWAN : 0;
                            data.BHADRA = x.BHADRA ? x.BHADRA : 0;
                            data.ASHOJ = x.ASHOJ ? x.ASHOJ : 0;
                            data.KARTIK = x.KARTIK ? x.KARTIK : 0;
                            data.MANGSIR = x.MANGSIR ? x.MANGSIR : 0;
                            data.POUSH = x.POUSH ? x.POUSH : 0;
                            data.MAGH = x.MAGH ? x.MAGH : 0;
                            data.FALGUN = x.FALGUN ? x.FALGUN : 0;
                            data.CHAITRA = x.CHAITRA ? x.CHAITRA : 0;
                            // data.JANUARY = 0;
                            // data.FEBRUARY = 0;
                            // data.MARCH = 0;
                            // data.APRIL = 0;
                            // data.MAY = 0;
                            // data.JUNE = 0;
                            // data.JULY = 0;
                            // data.AUGUST = 0;
                            // data.SEPTEMBER = 0;
                            // data.OCTOBER = 0;
                            // data.NOVEMBER = 0;
                            // data.DECEMBER = 0;
                            data.BUDGET = 0;
                        }
                    }
                    else {
                        if (!x.BUDGET || x.BUDGET == 0) {
                            return;
                        }
                        else {
                            data.BUDGET = x.BUDGET;
                        }
                    }
                    // let matchedAccountLedger:any = {};
                    var matchedAccountLedger = _this.AccountService.partyList.find(function (ledger) { return ledger.ACNAME == x.ACNAME; });
                    if (matchedAccountLedger) {
                        data.ACNAME = x.ACNAME;
                        data.ACID = matchedAccountLedger.ACID;
                        data.ACCOUNTGROUP_ID = matchedAccountLedger.PARENTID;
                        data.ACCOUNTGROUP_NAME = matchedAccountLedger.PARENT_NAME;
                    }
                    else {
                        misSpelledLedgerName.push(x);
                        return;
                    }
                    if (_this.BudgetObj.SUBDIVIDED_BY == "COSTCENTER") {
                        if (!x.COSTCENTER_NAME || x.COSTCENTER_NAME == '') {
                            objectsWithoutCostCenterName.push(x);
                            return;
                        }
                        var matchedCostCenter = _this.costCenterList.find(function (cc) { return cc.COSTCENTERNAME == x.COSTCENTER_NAME; });
                        if (matchedCostCenter != undefined) {
                            data.COSTCENTER_NAME = x.COSTCENTER_NAME;
                            data.CCID = matchedCostCenter.CCID;
                            data.COSTCENTER_CATEGORYID = matchedCostCenter.ccgid;
                            data.COSTCENTER_CATEGORYNAME = _this.costCenterCategoryList.find(function (x) { return x.ccgid == data.COSTCENTER_CATEGORYID; }).COSTCENTERGROUPNAME;
                            if (_this.temp_DetailList.length > 0) {
                                _this.temp_DetailList.forEach(function (ledger) {
                                    if (ledger.ACID == data.ACID && ledger.CCID == data.CCID) {
                                        duplicate_account_ledger.push(data);
                                    }
                                });
                            }
                        }
                        else {
                            misSpelledCostCenter.push(x);
                            return;
                        }
                    }
                    else {
                        if (_this.temp_DetailList.length > 0) {
                            _this.temp_DetailList.forEach(function (ledger) {
                                if (ledger.ACID == data.ACID) {
                                    duplicate_account_ledger.push(data);
                                }
                            });
                        }
                        console.log("Duplicate ledger", duplicate_account_ledger);
                    }
                    _this.temp_DetailList.push(data);
                });
                if (objectsWithoutCostCenterName.length > 0) {
                    _this.alertService.info("The cost center for ledger " + objectsWithoutCostCenterName[0].ACNAME + ' does not exist.');
                    _this.temp_DetailList = [];
                    _this.addrow(0);
                    return;
                }
                if (misSpelledLedgerName.length > 0) {
                    _this.alertService.info("Cannot Upload as there is no ledger named " + misSpelledLedgerName[0].ACNAME);
                    _this.temp_DetailList = [];
                    _this.addrow(0);
                    return;
                }
                if (misSpelledCostCenter.length > 0) {
                    _this.alertService.info("Cannot Upload as there is no Cost Center named " + misSpelledCostCenter[0].COSTCENTER_NAME);
                    _this.temp_DetailList = [];
                    _this.addrow(0);
                    return;
                }
                if (_this.temp_DetailList.length == 0) {
                    _this.alertService.info("Budget Amount Should be inserted for at least one ledger.");
                    _this.temp_DetailList = [];
                    _this.addrow(0);
                    return;
                }
                if (duplicate_account_ledger.length) {
                    var dublicate_acname = duplicate_account_ledger[0].ACNAME;
                    _this.alertService.info("Duplicate ledger " + dublicate_acname + " detected!");
                    _this.temp_DetailList = [];
                    _this.addrow(0);
                }
                else {
                    _this.CalculateSum();
                    if (_this.BudgetObj.SUBDIVIDED_BY == "COSTCENTER") {
                        // const objectsWithoutCostCenterName = this.temp_DetailList.filter((x: any) => !('COSTCENTER_NAME' in x) || x.COSTCENTER_NAME == "");
                        if (_this.temp_DetailList.length > 0)
                            _this.Apply();
                        if (_this.temp_DetailList.length > 0) {
                            var uniqueValues = [];
                            var seenValues = {};
                            var key = 'ACID';
                            for (var _i = 0, _a = _this.temp_DetailList; _i < _a.length; _i++) {
                                var obj = _a[_i];
                                if (!seenValues[obj[key]]) {
                                    uniqueValues.push(obj);
                                    seenValues[obj[key]] = true;
                                }
                            }
                            _this.temp_DetailList = uniqueValues;
                        }
                    }
                    else {
                        setTimeout(function () {
                            _this.focusNext(0, 'amount');
                        }, 50);
                    }
                    _this.Close();
                }
            }
        };
        reader.readAsArrayBuffer(file);
    };
    return AddBudgetMasterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridAccountLedger"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddBudgetMasterComponent.prototype, "genericGridAccountLedger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridBudgetList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddBudgetMasterComponent.prototype, "genericGridBudgetList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridCostCenterList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddBudgetMasterComponent.prototype, "genericGridCostCenterList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridCostCenterGroupList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddBudgetMasterComponent.prototype, "genericGridCostCenterGroupList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchInputBox'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], AddBudgetMasterComponent.prototype, "inputBox", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('accountGroupSelectField'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], AddBudgetMasterComponent.prototype, "accountGroupField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AddBudgetMasterComponent.prototype, "handleKeyDownboardEvent", null);
AddBudgetMasterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-budget-master-selector',
        template: __webpack_require__(1840),
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */]],
        styles: [__webpack_require__(120), __webpack_require__(1705)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_7__common_Transaction_Components_transaction_service__["a" /* TransactionService */],
        __WEBPACK_IMPORTED_MODULE_9__Account_Ledger_New_AccLedger_service__["a" /* TreeViewAccService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
], AddBudgetMasterComponent);

var _a;


/***/ }),

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetMasterComponent; });






var BudgetMasterComponent = (function () {
    function BudgetMasterComponent(masterService, router, alertService, loader, _authService) {
        this.masterService = masterService;
        this.router = router;
        this.alertService = alertService;
        this.loader = loader;
        this._authService = _authService;
        this.BudgetList = [];
        this.disableButton = false;
        this.userProfile = {};
        this.userSetting = this._authService.getSetting();
        this.userProfile = _authService.getUserProfile();
        this.getAllBudgetList();
    }
    BudgetMasterComponent.prototype.addBudget = function () {
        this.router.navigate(['./pages/account/AccountLedger/budget-master/addbudget']);
    };
    BudgetMasterComponent.prototype.uploadBudget = function () {
        // this.router.navigate(['./pages/account/AccountLedger/budget-master/uploadbudget'])
        this.router.navigate(['./pages/account/AccountLedger/budget-master/addbudget']);
    };
    BudgetMasterComponent.prototype.getAllBudgetList = function () {
        var _this = this;
        try {
            this.BudgetList = [];
            var fiscalid = this.userProfile.PhiscalYearInfo.PhiscalID;
            var division = this.userProfile.division;
            this.masterService.getAllBudgetList(fiscalid, division)
                .subscribe(function (res) {
                console.log("cost getAllBudgetList", res);
                _this.BudgetList = res;
            }, function (error) {
                _this.alertService.info(error.result._body);
            });
        }
        catch (ex) {
            alert(ex);
        }
    };
    BudgetMasterComponent.prototype.onDeleteClick = function (event) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            try {
                this.masterService.deleteBudgetAllocated(event.VCHRNO, event.BUDGET_NAME, event.PHISCALID, "STATUS").subscribe(function (response) {
                    if (response.status == 'ok') {
                        _this.alertService.info(response.result);
                        _this.getAllBudgetList();
                    }
                    else {
                        _this.alertService.info(response.result);
                    }
                }, function (error) {
                    if (error._body == '"This budget is already saved in transaction."') {
                        if (confirm("This budget is already saved in transaction. Are you sure you want to delete?")) {
                            try {
                                _this.masterService.deleteBudgetAllocated(event.VCHRNO, event.BUDGET_NAME, event.PHISCALID, "ALLOW_DELETE").subscribe(function (response) {
                                    if (response.status == 'ok') {
                                        _this.alertService.info(response.result);
                                        _this.getAllBudgetList();
                                    }
                                    else {
                                        _this.alertService.info(response.result);
                                    }
                                }, function (error) {
                                    _this.alertService.info(error._body);
                                });
                            }
                            catch (ex) {
                                alert(ex);
                            }
                        }
                    }
                    else {
                        _this.alertService.info(error._body);
                    }
                });
            }
            catch (ex) {
                alert(ex);
            }
        }
    };
    BudgetMasterComponent.prototype.onEditClick = function (event) {
        if (confirm("Are you sure you want to edit?")) {
            try {
                if (this.masterService.validateMasterCreation("edit") == false) {
                    return;
                }
                this.router.navigate(["./pages/account/AccountLedger/budget-master/addbudget", { VCHRNO: event.VCHRNO, mode: "edit", returnUrl: this.router.url }]);
            }
            catch (ex) {
                alert(ex);
            }
        }
    };
    BudgetMasterComponent.prototype.onViewClick = function (event) {
        try {
            if (this.masterService.validateMasterCreation("view") == false) {
                return;
            }
            this.router.navigate(["./pages/account/AccountLedger/budget-master/addbudget", { VCHRNO: event.VCHRNO, mode: "view", returnUrl: this.router.url }]);
        }
        catch (ex) {
            alert(ex);
        }
    };
    return BudgetMasterComponent;
}());
BudgetMasterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'budget-master-selector',
        template: __webpack_require__(1842),
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */]],
        styles: [__webpack_require__(120), __webpack_require__(1841)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_4__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_5__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */]])
], BudgetMasterComponent);



/***/ }),

/***/ 1588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__budget_master_routing__ = __webpack_require__(1589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__budget_master_component__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_budget_master_component__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_Transaction_Components_transaction_module__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_nepali_date_picker_nepali_date_picker_module__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_pipe__ = __webpack_require__(1590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_popupLists_AGroupPopup_account_group_popup_grid_module__ = __webpack_require__(1369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Account_Ledger_New_AccLedger_service__ = __webpack_require__(1302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetMasterModule", function() { return BudgetMasterModule; });















var BudgetMasterModule = (function () {
    function BudgetMasterModule() {
    }
    return BudgetMasterModule;
}());
BudgetMasterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["d" /* default */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__common_popupLists_AGroupPopup_account_group_popup_grid_module__["a" /* AccountGroupPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__budget_master_routing__["a" /* BudgetMasterRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__common_Transaction_Components_transaction_module__["a" /* TransactionModule */],
            __WEBPACK_IMPORTED_MODULE_11__common_nepali_date_picker_nepali_date_picker_module__["a" /* NepaliDatePickerModule */],
        ],
        declarations: [
            // ContextmenuComponent,
            __WEBPACK_IMPORTED_MODULE_8__budget_master_component__["a" /* BudgetMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__add_budget_master_component__["a" /* AddBudgetMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__search_pipe__["a" /* SearchPipe */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__Account_Ledger_New_AccLedger_service__["a" /* TreeViewAccService */]]
    })
], BudgetMasterModule);



/***/ }),

/***/ 1589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__budget_master_component__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_budget_master_component__ = __webpack_require__(1430);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetMasterRoutingModule; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__budget_master_component__["a" /* BudgetMasterComponent */] },
    { path: 'addbudget', component: __WEBPACK_IMPORTED_MODULE_3__add_budget_master_component__["a" /* AddBudgetMasterComponent */] },
];
var BudgetMasterRoutingModule = (function () {
    function BudgetMasterRoutingModule() {
    }
    return BudgetMasterRoutingModule;
}());
BudgetMasterRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], BudgetMasterRoutingModule);



/***/ }),

/***/ 1590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (data, query, option) {
        if (data) {
            if (query) {
                if (option == '') {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var comId = (item.BUDGET_NUMBER) ? (item.BUDGET_NUMBER).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        var name = (item.BUDGET_NAME) ? (item.BUDGET_NAME).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        var fromdate = (item.FROM_DATE) ? (item.FROM_DATE).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        var createdon = (item.CREATED_ON) ? (item.CREATED_ON).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        var updatedon = (item.UPDATED_ON) ? (item.UPDATED_ON).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        var status = (item.STATUS) ? (item.STATUS).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (comId.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                        else if (name.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                        else if (fromdate.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                        else if (createdon.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                        else if (updatedon.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                        else if (status.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                    });
                }
                else if (option == 'ACCODE') {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var accode = (item.ACCODE) ? (item.ACCODE).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (accode.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                    });
                }
                else if (option == 'ACNAME') {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var acname = (item.ACNAME) ? (item.ACNAME).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (acname.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                    });
                }
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

/***/ 1705:
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  padding: 1px;\n  margin: 0px;\n  float: right; }\n\n.modal-content {\n  box-shadow: -10px 0px 10px 1px #aaaaaa; }\n\n.modal-content-summary-area {\n  max-height: 20%;\n  height: 20%;\n  overflow: auto;\n  overflow-x: hidden; }\n\n/* layout.css Style */\n.upload-drop-zone {\n  height: 80px;\n  border-width: 2px;\n  margin-bottom: 0px; }\n\n/* skin.css Style*/\n.upload-drop-zone {\n  color: #c7dadf;\n  border-style: dashed;\n  border-color: #c7dadf;\n  border-radius: 2px;\n  line-height: 75px;\n  text-align: center;\n  cursor: pointer;\n  height: 12.5rem; }\n\n.sample-download-area {\n  color: #ccc;\n  border-style: dashed;\n  border-color: #ccc;\n  line-height: 60px;\n  text-align: center;\n  cursor: pointer; }\n\n.upload-drop-zone.drop {\n  color: #222;\n  border-color: #222; }\n\n.image-preview-input {\n  position: relative;\n  overflow: hidden;\n  margin: 0px;\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n\n.image-preview-input input[type=\"file\"] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n.image-preview-input-title {\n  margin-left: 2px; }\n\n.form-control {\n  height: 35px; }\n\n.file-dropover-continue {\n  color: #1b6ed6;\n  border-style: dashed;\n  border-color: #1b6ed6;\n  background: #ded4d4; }\n\n.modal-sticky {\n  position: fixed;\n  top: 275px;\n  right: 20px;\n  width: 40%;\n  z-index: 9999999; }\n\n.outerbox {\n  padding: 12px;\n  background-color: #C8E6FE;\n  border: 1px solid #B6B3B3;\n  border-radius: 8px; }\n\nthead th {\n  color: #fff !important; }\n\n.item-4 {\n  padding-top: 7px;\n  margin-top: 6px;\n  border: none;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  border-radius: 50%;\n  background-color: #FFF; }\n  .item-4:before, .item-4:after {\n    content: \"\";\n    position: absolute;\n    width: 80%;\n    height: 2px;\n    background-color: #36658d;\n    left: 50%;\n    top: 50%; }\n  .item-4:after {\n    transform: translate(-50%, -50%) rotate(45deg); }\n  .item-4:before {\n    transform: translate(-50%, -50%) rotate(-45deg); }\n"

/***/ }),

/***/ 1840:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .sectionWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 83vh;\r\n  }\r\n\r\n  .midTableWrapper {\r\n    flex: 1;\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  .footer-wrapper {\r\n    background: lightgreen;\r\n    min-height: 87px;\r\n  }\r\n\r\n  td {\r\n    border: 1px solid #e6e6e6;\r\n    height: 24px;\r\n\r\n  }\r\n\r\n  input, select {\r\n    /* padding: 8px; */\r\n    border: 0px;\r\n    width: 88%;\r\n    margin: 1.5% 2%;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n\r\n  th {\r\n    font-weight: bold;\r\n    font-family: Roboto, Arial, sans-serif;\r\n\r\n  }\r\n\r\n  thead th {\r\n    color: #fff !important;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  .input_hight {\r\n    height: 24px;\r\n  }\r\n\r\n  select {\r\n    margin: 5px 0;\r\n    margin-left: 2%;\r\n  }\r\n\r\n  select label {\r\n    margin-top: 9px;\r\n  }\r\n\r\n  .totalvalue {\r\n    align-items: center;\r\n  }\r\n\r\n  .totalvalue label {\r\n    white-space: nowrap;\r\n    margin-bottom: 0 !important;\r\n    padding: 0 10px;\r\n\r\n  }\r\n\r\n  .totalvalue input {\r\n    height: 25px;\r\n  }\r\n\r\n  .radioBUttons input {\r\n    margin-left: -40%;\r\n  }\r\n\r\n  .radioBUttons .form-check+.form-check {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .radioBUttons .form-check {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .radioBUttons {\r\n    margin-left: 140px;\r\n    margin-top: 5px;\r\n  }\r\n\r\n  .radioBUttons .form-check-label {\r\n    padding-left: 1.25rem;\r\n    margin-bottom: 0;\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .sectionWrapper button {\r\n    background-color: #4472C4;\r\n  }\r\n  .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\r\n    color: #000 !important;\r\n  }\r\n\r\n\r\nthead th{\r\n  text-align: center;\r\n    border: 1px solid #fff;\r\n    padding: 4px;\r\n    vertical-align: middle;\r\n    font-weight: normal    ;\r\n}\r\n.table > tbody > tr > td {\r\n  text-align: center;\r\n}\r\n\r\n.disabled {\r\n  pointer-events: none; /* Prevents interaction with the disabled rows */\r\n  color: gray; /* Change the text color to indicate the row is disabled */\r\n}\r\n</style>\r\n\r\n\r\n<!-- <for-account-group-popup-grid #acPopupGrid (onItemDoubleClick)=\"onItemDoubleClick($event)\" [Prefix]=\"Prefix\">\r\n</for-account-group-popup-grid> -->\r\n<div class=\"sectionWrapper\">\r\n  <div class=\"clearfix\">\r\n    <div class=\"topWrapper\">\r\n      <div class=\"sticky-top\" style=\"top: 65px;\">\r\n\r\n        <div class=\"col-md-1\">\r\n          <voucher-master-toggler></voucher-master-toggler>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label\r\n            style=\"font-family: Segoe UI Light;font-weight: bold;font-size: 20px;padding-left: 5%;padding-top: 1%;\">{{BudgetObj.MODE}}\r\n            BUDGET</label>\r\n\r\n        </div>\r\n       \r\n\r\n        <div class=\"col-md-5\">\r\n          <button class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\"\r\n            routerLink=\"/pages/account/AccountLedger/budget-master\" >\r\n            F10 Back\r\n          </button>\r\n          <button type=\"button \" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\" (click)=\"saveClick()\"\r\n          [disabled]=\"BudgetObj.MODE=='VIEW' || transaction_status_check\">\r\n           F6 Save\r\n          </button>\r\n\r\n          <button type=\"button \" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\" (click)=\"reset()\">\r\n          <!-- [disabled]=\"BudgetObj.MODE=='VIEW' || BudgetObj.MODE=='EDIT'\"> -->\r\n           F3 Reset\r\n          </button>\r\n          <button [disabled]=\"BudgetObj.MODE=='VIEW'\" type=\"button\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\" (click)=\"displayBudgetImportPopup()\">\r\n           Budget Import\r\n          </button>\r\n\r\n          <!-- <voucher-master-action></voucher-master-action> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main-container\"  style=\"margin-bottom: 0  !important; height:100%\">\r\n      <div class=\"clearfix\" *ngIf=\"masterService.ShowMore\">\r\n\r\n        <!-- <trnmain-voucher-entry></trnmain-voucher-entry> -->\r\n\r\n        <div class=\"col-md-12\" style=\"border-bottom: 1px solid #828080;\r\n      margin-top:14px;\r\n      margin-bottom: 5px;\r\n      padding-bottom: 10px;\r\n      background: #e2eaea; padding-top: 9px;\r\n      width: 100%;\r\n     \">\r\n          <div style=\"display: flex;\">\r\n          </div>\r\n          <!-- <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <label>Voucher No :</label>\r\n              <b>{{BudgetObj.BUDGET_NUMBER}}</b>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"budgetName\" style=\"display: flex; align-items: center;\">\r\n\r\n                <label style=\"flex: 0 0 15%; margin-top: 9px;\">Budget Name :</label>\r\n                <input type=\"text\" style=\"height:24px;width: 95% !important; margin-top: 5px; margin-bottom: 5px;\"\r\n                  [(ngModel)]=\"BudgetObj.BUDGET_NAME\" autocomplete=\"off\" [disabled]=\"BudgetObj.MODE=='VIEW' || transaction_status_check\">\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"Interval\" style=\"display: flex;\">\r\n                    <label style=\"flex: 0 0 34%; margin-top: 9px;\">Interval :</label>\r\n                    <select style=\"flex: 0 0 33%\" class=\"form-select form-control\"\r\n                      [(ngModel)]=\"BudgetObj.BUDGET_INTERVAL\" (change)=\"ChooseInterval($event)\"\r\n                      [disabled]=\"BudgetObj.MODE=='VIEW' || (BudgetObj.MODE=='ADD' && costcenterDetailListTotal>0) || transaction_status_check\">\r\n                      <option value=\"YEARLY\">Annually</option>\r\n                      <option value=\"QUARTERLY\">Quarterly</option>\r\n                      <option value=\"MONTHLY\">Monthly</option>\r\n                    </select>\r\n                    <div *ngIf=\"BudgetObj.BUDGET_INTERVAL != 'YEARLY'\" class=\"Datetype\" style=\"    display: flex;\r\n                    align-items: center;\r\n                    flex: 0 0 36%;\">\r\n                      <div class=\"form-check\" style=\"margin-bottom: 0;\r\n                      font-size: 11px;\">\r\n                        <input  [disabled]=\"BudgetObj.MODE=='VIEW' || transaction_status_check\" class=\"form-check-input\" type=\"radio\" name=\"interval\" id=\"bsInterval\" checked\r\n                          (change)=\"ChooseBsInterval($event)\" value=\"BSINTERVAL\"\r\n                          [(ngModel)]=\"BudgetObj.INTERVAL_ON_AD_OR_BS\">\r\n                        <label class=\"form-check-label\" for=\"bsInterval\" style=\"padding-left: 2.25rem;\">\r\n                          B.S\r\n                        </label>\r\n                      </div>\r\n                      <!-- <div class=\"form-check\" style=\"margin-bottom: 0; margin-top: 0;\r\n                      font-size: 11px;\">\r\n                        <input  [disabled]=\"BudgetObj.MODE=='VIEW'\" class=\"form-check-input\" type=\"radio\" name=\"interval\" id=\"adInterval\"\r\n                          (change)=\"ChooseAdInterval($event)\" value=\"ADINTERVAL\"\r\n                          [(ngModel)]=\"BudgetObj.INTERVAL_ON_AD_OR_BS\">\r\n                        <label class=\"form-check-label\" for=\"adInterval\" style=\"padding-left: 2.25rem;\">\r\n                          A.D\r\n                        </label>\r\n                      </div> -->\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n                  <!-- <div class=\"fromdate\" style=\"display: flex; align-items: center;\">\r\n                    <label style=\"flex: 0 0 34%;\">From:</label>\r\n                    <input style=\"flex: 0 0 28%; height: 24px; \r\n                font-size: 12px;\" placeholder=\"Year Start Date\" (change)=\"changeFromDate($event.target.value,'AD')\"\r\n                      [(ngModel)]=\"BudgetObj.FROM_DATE\" type=\"date\" disabled>\r\n                    <label style=\"flex: 0 0 8%; margin-left: 0%;  font-size: 11px;\"> (A.D)</label>\r\n\r\n                    <div style=\"flex: 0 0 28%; height: 24px;\r\n          font-size: 12px;\">\r\n                      <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n                        (change)=\"changeFromDate($event.detail.value,'BS')\" [(ngModel)]=\"BudgetObj.FROM_BSDATE\">\r\n                      </nepali-date-picker>\r\n                    </div>\r\n                    <label style=\" flex: 0 0 8%;\r\n            margin-left: 0%; font-size: 11px;\"> (B.S)</label>\r\n                  </div>\r\n\r\n                  <div class=\"todate\" style=\"display: flex; align-items: center;\">\r\n                    <label style=\"flex: 0 0 34%;\">To:</label>\r\n                    <input style=\"flex: 0 0 28%; height: 24px;\r\n          font-size: 12px;\" placeholder=\"Year Start Date\" [(ngModel)]=\"BudgetObj.TO_DATE\"\r\n                      (change)=\"changeToDate($event.target.value,'AD')\" type=\"date\" disabled>\r\n                    <label style=\"flex: 0 0 8%; margin-left: 0%;  font-size: 11px;\"> (A.D)</label>\r\n\r\n                    <div style=\"flex: 0 0 28%; height: 24px;\r\n          font-size: 12px;\">\r\n                      <nepali-date-picker name=\"nepaliDateTo\" [id]=\"'nepaliDateTo'\"\r\n                        (change)=\"changeToDate($event.detail.value,'BS')\" [(ngModel)]=\"BudgetObj.TO_BSDATE\">\r\n                      </nepali-date-picker>\r\n                    </div>\r\n                    <label style=\" flex: 0 0 8%;\r\n                    margin-left: 0%; font-size: 11px;\"> (B.S)</label>\r\n\r\n                  </div> -->\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\" Pre-FillData\" style=\"display: flex; align-items: center;\">\r\n\r\n                    <label style=\"flex: 0 0 30%; margin-top: 9px;\">Pre-Fill Data :</label>\r\n                    <input type=\"text\" style=\"font-weight: bold; height:24px;width: 95% !important;\"\r\n                      class=\"form-control accountLedger\" [(ngModel)]=\"BudgetObj.PREFILL_DATA\"\r\n                      placeholder=\"Press Enter for Pre-Fill Data List\"  (keydown.Tab)=\"focusNext(0, 'subdividedby')\"\r\n                      (keydown.enter)=\"PreFillDataClicked($event)\" [disabled]=\"BudgetObj.MODE=='VIEW' || transaction_status_check\"\r\n                      >\r\n                  </div>\r\n                 \r\n           \r\n\r\n\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-lg-4\">\r\n              <!-- <div class=\"  TypeofBudget\" style=\"display: flex;align-items: center; \">\r\n\r\n                <label style=\"flex: 0 0 30%; margin-top: 9px;\">Type of Budget :</label>\r\n\r\n                <select style=\"flex: 0 0 65%\" class=\"form-select form-control\" [(ngModel)]=\"BudgetObj.BUDGET_TYPE\"\r\n                  [disabled]=\"BudgetObj.MODE=='VIEW'\">\r\n                  <option value=\"ON_NET_TRANSACTION\">On Net Transaction</option>\r\n                  <option value=\"ON_CLOSING_BALANCE\">On Closing Balance</option>\r\n                </select>\r\n              </div> -->\r\n\r\n             \r\n              <div class=\"SubDivided\" style=\"display: flex;align-items: center; \">\r\n\r\n                <label style=\"flex: 0 0 30%; margin-top: 9px;\">Sub divided by :</label>\r\n\r\n                <select #subdividedby style=\"flex: 0 0 65%\" class=\"form-select form-control\" [(ngModel)]=\"BudgetObj.SUBDIVIDED_BY\" (change)=\"onSubdivideByChange()\"\r\n                  [disabled]=\"BudgetObj.MODE=='VIEW' || (BudgetObj.MODE=='ADD' && costcenterDetailListTotal>0) || transaction_status_check\">\r\n                  <option value=\"DONOT_SUBDIVIDE\">Donot sub divide</option>\r\n                  <!-- <option value=\"DEPARTMENT\">Department</option> -->\r\n                  <option  *ngIf=\"userSetting.enableCostCenter == 1 || userSetting.enableCostCenter == 2\" value=\"COSTCENTER\">Cost Center</option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\" Action \" style=\"display: flex;\">\r\n\r\n                <label style=\"flex: 0 0 19%;\r\n                margin-top: 9px;\r\n                margin-left: 11%;\">Action :</label>\r\n                <select style=\"flex: 0 0 65%\" class=\"form-select form-control\" (change)=\"SelectionAction($event)\" (keydown.Tab)=\"focusNext(0)\"\r\n                  [(ngModel)]=\"BudgetObj.ACTION\" [disabled]=\"BudgetObj.MODE=='VIEW' || transaction_status_check\">\r\n                  <option selected value=\"IGNORE\">Ignore</option>\r\n                  <option value=\"WARN\">Warn</option>\r\n                  <option value=\"STOP\">Stop</option>\r\n                </select>\r\n\r\n\r\n              </div>\r\n              <!-- <div class=\"radioBUttons\" *ngIf=\"showActionCheckBox==true\"\r\n              style=\"display: flex; align-items: center;\">\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"Monthly\"\r\n                  [(ngModel)]=\"BudgetObj.ACTION_TYPE\" value=\"MONTHLY\" [disabled]=\"BudgetObj.MODE=='VIEW' || BudgetObj.BUDGET_INTERVAL!=''\" [checked]=\"BudgetObj.BUDGET_INTERVAL=='MONTHLY'\">\r\n                <label class=\"form-check-label\" for=\"Monthly\">\r\n                  Monthly\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"Quaterly\"\r\n                  [(ngModel)]=\"BudgetObj.ACTION_TYPE\" value=\"QUARTERLY\" [disabled]=\"BudgetObj.MODE=='VIEW' || BudgetObj.BUDGET_INTERVAL!=''\" [checked]=\"BudgetObj.BUDGET_INTERVAL=='QUARTERLY'\">\r\n                <label class=\"form-check-label\" for=\"Quaterly\" >\r\n                  Quaterly\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"Annually\"\r\n                  [(ngModel)]=\"BudgetObj.ACTION_TYPE\" value=\"ANNUALLY\" [disabled]=\"BudgetObj.MODE=='VIEW' || BudgetObj.BUDGET_INTERVAL!=''\" [checked]=\"BudgetObj.BUDGET_INTERVAL=='ANNUALLY' || BudgetObj.BUDGET_INTERVAL=='YEARLY'\">\r\n                <label class=\"form-check-label\" for=\"Annually\">\r\n                  Annually\r\n                </label>\r\n              </div>\r\n\r\n            </div> -->\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin: 0;\" >\r\n        <ul class=\"nav nav-tabs\" style=\"background-color:#CFD5EA ;\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#budgetEntry\" data-toggle=\"tab\" style=\"color:#000\">Budget Entry</a>\r\n          </li>\r\n         \r\n         \r\n          <li class=\"nav-item\" *ngIf=\"BudgetObj.SUBDIVIDED_BY=='COSTCENTER'\">\r\n            <a class=\"nav-link\" href=\"#costCenterdetails\"  data-toggle=\"tab\" style=\"color:#000\">Cost Center Details</a>\r\n          </li>\r\n\r\n        </ul>\r\n         \r\n        \r\n        <!-- <div class=\"titleWrapper\" style=\"background-color:#CFD5EA ; padding: 10px;\">\r\n          <h6 style=\"margin: 0;\">ACCOUNT LIST</h6>\r\n        </div> -->\r\n\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane active\" id=\"budgetEntry\">\r\n             <div class=\"row\" style=\"position: relative; height:30px\" *ngIf=\"BudgetObj.SUBDIVIDED_BY=='COSTCENTER'\">\r\n          <div *ngIf=\"userSetting.EnableCompulsoryCostCategory==1 && BudgetObj.SUBDIVIDED_BY=='COSTCENTER'\"\r\n            \r\n            class=\"CostCenterCategory col-md-4\" style=\"display: flex;\">\r\n            <label style=\"flex: 0 0 35%; margin-top: 9px;\">Cost Center Category:</label>\r\n\r\n            <!-- <select [disabled]=\"BudgetObj.MODE=='VIEW'\" class=\"form-select\" aria-label=\"Default select example\" [(ngModel)]=\"BudgetObj.COSTCENTER_CATEGORYID\" (change)=\"showCostCenterGroupChange($event)\">\r\n              <option selected value=\"%\"> </option>\r\n              <option *ngFor=\"let i of costCenterCategoryList\" value={{i.ccgid}}>{{i.COSTCENTERGROUPNAME}}\r\n              </option>\r\n           \r\n            </select> -->\r\n            <input type=\"text\" style=\"font-weight: bold; height:24px;width: 95% !important;\"\r\n              class=\"form-control accountLedger\" [(ngModel)]=\"BudgetObj.COSTCENTER_CATEGORYNAME\"\r\n              placeholder=\"Press Enter or Tab for Cost Center Category List\"\r\n              (keydown.Tab)=\"showCostCenterGroupList($event)\" (keydown.enter)=\"showCostCenterGroupList($event)\"\r\n              [disabled]=\"transaction_status_check\" (keydown)=\"preventInput($event)\"autocomplete=\"off\">\r\n          </div>\r\n          <div class=\"CostCenter col-md-4\" style=\"display: flex;\" *ngIf=\"BudgetObj.SUBDIVIDED_BY=='COSTCENTER' && userSetting.COSTCENTERCOMPULSORY==1\">\r\n            <label style=\"flex: 0 0 21%; margin-top: 9px;\">Cost Center :</label>\r\n\r\n            <!-- <select [disabled]=\"BudgetObj.MODE=='VIEW'\" class=\"form-select\" aria-label=\"Default select example\" [(ngModel)]=\"BudgetObj.CCID\" (change)=\"onCostCenterSelect($event)\">\r\n              <option selected value=\"%\"> </option>\r\n              <option *ngFor=\"let i of costCenterList\" value={{i.CCID}}>{{i.COSTCENTERNAME}}\r\n              </option>\r\n           \r\n            </select> -->\r\n            <input id=\"costCenterInput\" type=\"text\" style=\"font-weight: bold; height:24px;width: 95% !important;\"\r\n              class=\"form-control accountLedger\" [(ngModel)]=\"BudgetObj.COSTCENTER_NAME\"\r\n              placeholder=\"Press Enter or Tab for Cost Center List\" (keydown.Tab)=\"showCostCenterList($event)\"\r\n              (keydown.enter)=\"showCostCenterList($event)\" [disabled]=\"transaction_status_check\"\r\n              (keydown)=\"preventInput($event)\" autocomplete=\"off\">\r\n          </div>\r\n          <div *ngIf=\"BudgetObj.SUBDIVIDED_BY=='COSTCENTER'\">\r\n            <button class=\"btn btn-info pull-right\" (click)=\"Apply()\" style=\" color: #fff;\r\n            margin-left: 20px;\r\n            margin-top: 5px;\r\n            position: absolute;\r\n            right: 21px;\r\n            margin-top: 10px;\r\n            border: none;\r\n            padding: 6px;\r\n            top: -5px;;\" [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt || transaction_status_check\">Apply</button>\r\n          </div>\r\n\r\n             </div>\r\n             <!-- <div class=\"midTableWrapper\"> -->\r\n              <div class=\"clearfix\" style=\"margin-top: 5px\">\r\n          \r\n          \r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div style=\"padding-right: 0px !important; padding-left: 0px !important;\">\r\n                      <div style=\"height:auto; overflow-y: scroll\">\r\n                        <table style=\"margin-bottom: 5px;font-size: 13px;width: 100%;\">\r\n                          <thead>\r\n                            <tr style=\" border-bottom: 2px solid #E6E6E6;\r\n                                                    border-top: 2px solid #E6E6E6;\r\n                                                    height: 30px;\r\n                                                    background: #4472C4;\r\n                                                    color: #fff;\">\r\n                              <!-- <th style=\"width: 2%;\">SNo.</th> -->\r\n                              <ng-container *ngFor=\"let column of genericTableList; let i = index\">\r\n          \r\n                                <th *ngIf=\"!column.hidden\" [ngStyle]=\"column.headerNgStyle\">\r\n                                  {{column.header}}\r\n                                </th>\r\n                              </ng-container>\r\n                              <!-- <th style=\"width: 11%;padding-left: 1%;\">\r\n                                Account Ledger\r\n                              </th>\r\n                              <th style=\"width: 11%;padding-left: 1%;\">\r\n                                Amount\r\n                              </th> -->\r\n          \r\n                            </tr>\r\n                          </thead>\r\n                          <tbody *ngFor=\"let t of temp_DetailList; let i = index\" (click)=\"rowClick(i)\" [ngClass]=\"{ 'disabled': transaction_status_check}\">\r\n                            <!-- <ng-container > -->\r\n          \r\n                            <tr style=\"border: 1px solid #e6e6e6;max-height:25px;\">\r\n                              <!-- <ng-container *ngIf=\"!col.hidden\"> -->\r\n          \r\n          \r\n                              <td style=\"line-height:21px; text-align:center\">\r\n                                {{i+1}}\r\n                              </td>\r\n                              <td style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"text\" style=\"height:24px;width: 95% !important;\" placeholder=\"Press Enter to select\" [id]=\"'accountgroup_'+i\"\r\n                                  (keydown.Enter)=\"AccountGroupClick(i);focusNext(0, 'accountGroupSelectField');\" [(ngModel)]=\"t.ACCOUNTGROUP_NAME\"\r\n                                  (keydown)=\"preventInput($event)\" (keydown.tab)=\"focusNext(i, 'ledger')\" autocomplete=\"off\" [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\" (keydown.Shift.Tab)=\"focusPrevious(i)\">\r\n                              </td>\r\n                              <td style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"text\" style=\"height:24px;width: 95% !important;\" placeholder=\"Press Enter to Select Ledger\"\r\n                                  (keydown.Enter)=\"AccountGroupClick(i);focusNext(0, 'searchInputBox');\" [(ngModel)]=\"t.ACNAME\" [id]=\"'ledger_'+i\"\r\n                                  (keydown.tab)=\"focusNext(i, 'amount')\" autocomplete=\"off\" [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\">\r\n                              </td>\r\n          \r\n                              <!-- quarterly in bs-interval starts -->\r\n                              <td *ngIf=\"is_quaterly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.SHRAWAN_ASHOJ\" [id]=\"'shrawanAshojAmountInput_'+i\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_quaterly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.KARTIK_POUSH\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_quaterly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.MAGH_CHAITRA\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_quaterly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.BAISAKH_ASAR\" (keydown.Tab)=\"nextrow(i,t)\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (change)=\"CalculateSum()\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\"(keydown.enter)=\"nextrow(i,t)\" [min]=\"0\">\r\n                              </td>\r\n                              <!-- quarterly in bs-interval ends -->\r\n          \r\n                              <!-- quarterly in ad-interval starts -->\r\n                              <td *ngIf=\"is_quaterly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.JULY_SEPTEMBER\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (change)=\"CalculateSum()\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_quaterly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.OCTOBER_DECEMBER\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (change)=\"CalculateSum()\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_quaterly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.JANUARY_MARCH\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (change)=\"CalculateSum()\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_quaterly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.APRIL_JUNE\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (change)=\"CalculateSum()\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\"(keydown.enter)=\"nextrow(i,t)\" [min]=\"0\">\r\n                              </td>\r\n                              <!-- quarterly in ad-interval ends -->\r\n          \r\n                              <!-- monthly in bs-interval starts -->\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.SHRAWAN\" [id]=\"'shrawanAmountInput_'+i\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.BHADRA\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.ASHOJ\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.KARTIK\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.MANGSIR\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.POUSH\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.MAGH\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.FALGUN\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.CHAITRA\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (change)=\"CalculateSum()\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\"(keydown.enter)=\"nextrow(i,t)\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.BAISAKH\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.JESTHA\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='BSINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.ASAR\" (keydown.Tab)=\"nextrow(i,t)\" (keydown.enter)=\"nextrow(i,t)\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <!-- monthly in bs-interval ends -->\r\n          \r\n                              <!-- monthly in ad-interval starts -->\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.JANUARY\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.FEBRUARY\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.MARCH\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.APRIL\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.MAY\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.JUNE\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.JULY\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.AUGUST\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.SEPTEMBER\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.OCTOBER\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.NOVEMBER\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\"\r\n                                  (change)=\"CalculateSum()\" [min]=\"0\">\r\n                              </td>\r\n                              <td *ngIf=\"is_monthly && BudgetObj.INTERVAL_ON_AD_OR_BS=='ADINTERVAL'\"\r\n                                style=\"line-height:21px; text-align:center\">\r\n                                <input type=\"number\" style=\"height:24px;width: 95% !important;\" [(ngModel)]=\"t.DECEMBER\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || disableAmt\" (change)=\"CalculateSum()\"\r\n                                  (keydown.Shift.Delete)=\"clearRow($event,i,t);\"(keydown.enter)=\"nextrow(i,t)\" [min]=\"0\">\r\n                              </td>\r\n                              <!-- monthly in ad-interval ends -->\r\n          \r\n                              <td>\r\n                                <input type=\"number\" class=\"input_hight Amount\" [(ngModel)]=\"t.BUDGET\" [id]=\"'budgetAmountinput_'+i\"\r\n                                  [disabled]=\"BudgetObj.MODE=='VIEW' || is_monthly || is_quaterly || disableAmt || t.ACCOUNTGROUP_NAME == null\" (keydown.Tab)=\"nextrow(i,t)\"\r\n                                  (keydown.enter)=\"nextrow(i,t)\" (keydown.Shift.Delete)=\"clearRow($event,i,t);\" (change)=\"CalculateSum()\" [min]=\"0\">\r\n          \r\n          \r\n                              </td>\r\n          \r\n                            </tr>\r\n                         \r\n                          </tbody>\r\n          \r\n          \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          \r\n              </div>\r\n\r\n            <div *ngIf=\"!displayBudgetImportPopUp\" class=\"footer\">\r\n              <div class=\"row\" style=\"position: fixed;\r\n                   bottom: 20px; background-color: #fff;\">\r\n          \r\n                <tr>\r\n                  <td style=\"width: 15%;\"></td>\r\n                  <td style=\"width: 7%;\">\r\n                    <div class=\"d-flex\" style=\"display: flex; align-items: center;\">\r\n                      <h5 style=\"font-weight: bold; margin: 0 ;padding-left:10px; flex: 0 0 5%;\">Total:</h5>\r\n                      <input style=\"flex: 0 0 30%; padding: 5px;\" type=\"text\" placeholder=\"0.00:\"\r\n                        [(ngModel)]=\"BudgetObj.TOTAL_BUDGET\" disabled>\r\n                    </div>\r\n          \r\n                  </td>\r\n          \r\n                </tr>\r\n          \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"tab-pane \" id=\"costCenterdetails\">\r\n            <div class=\"row\" style=\"margin-right: 0px;\">\r\n              <button *ngIf=\"BudgetObj.SUBDIVIDED_BY=='COSTCENTER'\" type=\"button \" class=\"btn btn-info pull-right\" (click)=\"exportTOExcel(DetailList, 'Budget')\" style=\"margin-bottom: 5px; background-color: #4472C4;\">\r\n                Export Budget\r\n              </button>\r\n            </div>\r\n           <table id=\"budgetList\" class=\"table table-striped\" >\r\n            <thead style=\"background-color: #4472C4;\">\r\n              <tr >\r\n                <th >S.N</th>\r\n                <th >Account Group</th>\r\n                <th >Account Ledger</th>\r\n                <th *ngIf=\"COSTCENTER_CATEGORYNAME!=null|| COSTCENTER_CATEGORYNAME!=''\">Cost Center Category</th>\r\n                <th>Cost Center</th>\r\n                <th >Total</th>\r\n              </tr>\r\n            \r\n            </thead>\r\n            <tbody>\r\n\r\n             <ng-container *ngIf=\"DetailList\">\r\n              <tr *ngFor=\"let entry of DetailList; let i = index\">\r\n                <td > {{ i+1 }}</td>\r\n                <td>{{ entry.ACCOUNTGROUP_NAME }}</td>\r\n                <td>{{ entry.ACNAME }}</td>\r\n                <td *ngIf=\"COSTCENTER_CATEGORYNAME!=null|| COSTCENTER_CATEGORYNAME!=''\">{{ entry.COSTCENTER_CATEGORYNAME }}</td>\r\n                <td>{{ entry.COSTCENTER_NAME }}</td>\r\n                <td>{{ entry.BUDGET }}</td>\r\n               \r\n              </tr>\r\n\r\n             </ng-container>\r\n             <ng-container *ngIf=\"DetailList==null || DetailList=='' \">\r\n              <tr *ngFor=\"let entry of temp_DetailList; let i = index\">\r\n                <td > {{ i+1 }}</td>\r\n                <td>{{ entry.ACCOUNTGROUP_NAME }}</td>\r\n                <td>{{ entry.ACNAME }}</td>\r\n                <td *ngIf=\"COSTCENTER_CATEGORYNAME!=null|| COSTCENTER_CATEGORYNAME!=''\">{{ entry.COSTCENTER_CATEGORYNAME }}</td>\r\n                <td>{{ entry.COSTCENTER_NAME }}</td>\r\n                <td>{{ entry.BUDGET }}</td>\r\n               \r\n              </tr>\r\n\r\n             </ng-container>\r\n             \r\n           \r\n            \r\n            </tbody>\r\n          </table>\r\n        \r\n          <div class=\"footer\">\r\n            <div class=\"row\" style=\"position: fixed;\r\n                 bottom: 20px; background-color: #fff;\">\r\n        \r\n              <tr>\r\n                <td  style=\"width: 10%;\"></td>\r\n                <td style=\"width: 62%;\">\r\n                 </td>\r\n                 <td style=\"width: 16%;\">Total :</td>\r\n                 <td><input type=\"text\" [(ngModel)]=\"costcenterDetailListTotal\"> </td>\r\n        \r\n              </tr>\r\n        \r\n            </div>\r\n          </div>\r\n\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n \r\n\r\n\r\n  \r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<div style=\"width:90%\" class=\"reportpopup\">\r\n  <generic-popup-grid #genericGridAccountLedger [popupsettings]=\"gridPopupSettingsForAccountLedgerList\"\r\n    (onItemDoubleClick)=\"dblClickAccountSelect($event)\">\r\n  </generic-popup-grid>\r\n  <generic-popup-grid #genericGridBudgetList [popupsettings]=\"gridPopupSettingsForBudgetList\"\r\n    (onItemDoubleClick)=\"dblClickBudgetSelect($event)\">\r\n  </generic-popup-grid>\r\n  <generic-popup-grid #genericGridCostCenterList [popupsettings]=\"gridCostCenterListPopupSettings\"\r\n    (onItemDoubleClick)=\"onCostCenterSelect($event)\"></generic-popup-grid>\r\n  <generic-popup-grid #genericGridCostCenterGroupList [popupsettings]=\"gridCostCenterGroupListPopupSettings\"\r\n    (onItemDoubleClick)=\"onCostCenterGroupSelect($event)\"></generic-popup-grid>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- importBudget PopUP -->\r\n\r\n<div *ngIf=\"displayBudgetImportPopUp\" class=\"poppWrapper\" style=\" position: fixed;\r\nright: 0%;\r\ntop: 75px;\r\nbackground: #fff;\r\nwidth: 45%;\r\nheight: 80vh;\r\n  overflow-y: scroll; overflow-x: hidden;\" id=\"importBudget\"  role=\"dialog\"\r\n  aria-labelledby=\"importBudgetlabel\" aria-hidden=\"false\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header row\">\r\n        <h5 class=\"modal-title col-md-11\" id=\"importBudget\">Import Budget</h5>\r\n        <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\" position: absolute;\r\n                top: 20px;\r\n                right: 30px;\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button> -->\r\n        <button  (keydown.esc)=\"Close()\" (click)=\"Close()\"  class=\"item-4 closeIcon col-md-2\" style=\"padding-top: 7px;\"></button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"upload-area container\" style=\" margin-top: -40px;\">\r\n          <br />\r\n          <div class=\"file-upload-area\">\r\n            <div class=\"row\">\r\n              <div class=\" offset-lg-2 col-md-8\">\r\n\r\n                <div class=\"outerbox\" (drop)=\"onDrop($event)\"\r\n                (dragover)=\"onDragOver($event)\">\r\n                  <div class=\"upload-drop-zone\" style=\"background-color: #fff;\" id=\"drop-zone\">\r\n                    <b>Drag Your File Here or Browse. </b> \r\n                    <!-- <span style=\"font-weight: 800; \r\n                                  font-size: 16px; color: #2D94EC;\">Browse.</span> -->\r\n\r\n                  </div>\r\n                  <div  *ngIf=\"selectedFileNames.length\" style=\"overflow-y:auto; background-color: #292626; color: whitesmoke;\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>SN.</th>\r\n                          <th>Filename</th>\r\n                          <!-- <th>Action</th> -->\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of selectedFileNames; let i = index\">\r\n                          <td>\r\n                            {{ i + 1 }}\r\n                          </td>\r\n                          <td>{{ item }}</td>\r\n                          <!-- <td>\r\n                            <a (click)=\"deleteSelectedItem(i)\">\r\n                              <span class=\"glyphicon glyphicon-trash\"></span\r\n                            ></a>\r\n                          </td> -->\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <div class=\"input-group image-preview\" style=\"justify-content: right;\">\r\n                  <input placeholder=\"\" type=\"text\" class=\"form-control image-preview-filename\" disabled=\"disabled\"\r\n                    name=\"selectedfiles\" style=\"display: none\" />\r\n                  <!-- don't give a name === doesn't send on POST/GET -->\r\n                  <span class=\"input-group-btn\">\r\n                    <!-- image-preview-clear button -->\r\n                    <button type=\"button\" class=\"btn btn-default image-preview-clear\" style=\"display:none;\">\r\n                      <span class=\"glyphicon glyphicon-remove\">Clear</span>\r\n                    </button>\r\n                    <!-- image-preview-input -->\r\n                    <!-- <div class=\"btn btn-info image-preview-input\" style=\"margin-right: 5px; justify-content: right;\">\r\n                      <span class=\"glyphicon glyphicon-folder-open\"></span>\r\n                      <span class=\"image-preview-input-title\">Browse</span>\r\n                      <input type=\"file\" #fileSelect accept=\".png, .jpg, .xlsx\" name=\"input-file-preview\" />\r\n                    </div> -->\r\n                    <div class=\"btn btn-default image-preview-input\">\r\n                      <span class=\"glyphicon glyphicon-folder-open\"></span>\r\n                      <span class=\"image-preview-input-title\">Browse</span>\r\n                      <input *ngIf=\"!isOnceSelected\"\r\n                      type=\"file\"\r\n                      #fileSelect\r\n                      accept=\".csv, .xlsx\"\r\n                      name=\"input-file-preview\"\r\n                      (change)=\"onFileChange($event)\"\r\n                      ng-multiple=\"popupsettings.allowMultiple\"\r\n                    />\r\n                      <input *ngIf=\"isOnceSelected\"\r\n                      type=\"file\"\r\n                      #fileSelect\r\n                      accept=\".csv, .xlsx\"\r\n                      name=\"input-file-preview\"\r\n                      (change)=\"onFileChange($event)\"\r\n                      ng-multiple=\"popupsettings.allowMultiple\"\r\n                    />\r\n                      <!-- rename it -->\r\n                    </div>\r\n                    <button [disabled]=\"selectedFileNames.length==0\" (click)=\"readExcelFile(fileToImport[0])\" style=\"\r\n                                    font-size: 14px;\r\n                                    line-height: 18px;\r\n                                    color: #FFFFFF;\r\n                                    background: #4472C4;\r\n                                     border-radius: 5px;\r\n                                    \" type=\"button\" data-dismiss=\"modal\" class=\"btn btn-labeled btn-info\">\r\n                      <span class=\"btn-label\"><i class=\"glyphicon glyphicon-upload\"></i>\r\n                      </span>Upload\r\n                    </button>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <br />\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"offset-md-1 col-lg-11\">\r\n            <p >Download the <button (click)=\"downloadBudgetTemplate()\" style=\"color: #209e91; border:none;\">sample template</button> to get started.</p>\r\n            <!-- <p *ngIf=\"BudgetObj.BUDGET_INTERVAL == 'QUARTERLY' && BudgetObj.SUBDIVIDED_BY == 'COSTCENTER'\">Download the <a href=\"/assets/Excel_Sample/Budget(1).xlsx\" download=\"Budget.xlsx\"><b> sample template</b></a> to get started.</p>\r\n            <p *ngIf=\"BudgetObj.BUDGET_INTERVAL == 'YEARLY' && BudgetObj.SUBDIVIDED_BY == 'COSTCENTER'\">Download the <a href=\"/assets/Excel_Sample/Budget(2).xlsx\" download=\"Budget.xlsx\"><b> sample template</b></a> to get started.</p>\r\n            <p *ngIf=\"BudgetObj.BUDGET_INTERVAL == 'MONTHLY' && BudgetObj.SUBDIVIDED_BY == 'DONOT_SUBDIVIDE'\">Download the <a href=\"/assets/Excel_Sample/Budget(3).xlsx\" download=\"Budget.xlsx\"><b> sample template</b></a> to get started.</p>\r\n            <p *ngIf=\"BudgetObj.BUDGET_INTERVAL == 'QUARTERLY' && BudgetObj.SUBDIVIDED_BY == 'DONOT_SUBDIVIDE'\">Download the <a href=\"/assets/Excel_Sample/Budget(5).xlsx\" download=\"Budget.xlsx\"><b> sample template</b></a> to get started.</p>\r\n            <p *ngIf=\"BudgetObj.BUDGET_INTERVAL == 'YEARLY' && BudgetObj.SUBDIVIDED_BY == 'DONOT_SUBDIVIDE'\">Download the <a href=\"/assets/Excel_Sample/Budget(4).xlsx\" download=\"Budget.xlsx\"><b> sample template</b></a> to get started.</p> -->\r\n            <p><b>Note :</b></p>\r\n            <p>You can Supply Budget amounts in a csv format for quick importing.</p>\r\n            <p>Enter the budget amount</p>\r\n            <ul>\r\n              <li>Do not change the account ledger names.</li>\r\n              <li>Do not duplicate the account ledger for 'Do not subdivide mode'.</li>\r\n            </ul>\r\n            <ul>\r\n              <li>Do not duplicate the account ledger under the same cost center.</li>\r\n              <li>The uploaded format should be the same as the Selected interval.</li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- p[pup] -->\r\n\r\n<!--  -->\r\n<style>\r\n  .acpopup.table>tbody>tr>td {\r\n    padding: 8px 6px 0px 8px;\r\n    line-height: 20px;\r\n\r\n  }\r\n</style>\r\n\r\n<div *ngIf=\"showPopup\" class=\"poppWrapper\" style=\" position: fixed;\r\nleft: 25%;\r\ntop: 165px;\r\nbackground: #fff;\r\nwidth: 55%;\r\n  overflow: scroll;\">\r\n\r\n  <fieldset style=\"padding: 0; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n    <header style=\"    background: #4472C4 !important;\r\npadding: 0 20px; border-top-left-radius: 10px; border-top-right-radius: 10px;\r\n\">\r\n      <div class=\"row\" style=\"display: flex;\">\r\n        <h5 style=\"padding: 10px 0 0 10px; color: #fff;\">ACCOUNT GROUP</h5>\r\n\r\n        <button  (keydown.esc)=\"Close()\" (click)=\"Close()\"  class=\"item-4 closeIcon\" style=\"padding-top: 7px;\"></button>\r\n        <!-- <div (click)=\"Close()\" class=\"closeIcon\" style=\"padding-top: 7px;\">\r\n          <img src=\"../../../../../assets/icon/close.png\" alt=\"\">\r\n        </div> -->\r\n\r\n      </div>\r\n\r\n    </header>\r\n    <div class=\"row\" style=\"margin: 0;\">\r\n      <div class=\"col-lg-6\" style=\"border:2px solid;border-color:#dcdcdc; width: 50%; padding: 10px 30px;\">\r\n        <header\r\n          style=\"background: #4472C4 !important;\r\n           padding: 0 20px; margin: -7px -26px -7px -14px; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n          <h5 style=\" padding: 7px 0 6px 0px;; color: #fff; text-align: center;\">GROUP SELECTION</h5>\r\n        </header>\r\n\r\n        <div class=\"row\" style=\"margin-top: 20px;\">\r\n          <label class=\"form-control-label col-md-4 \" style=\"width: auto;\">Main Group :</label>\r\n          <div class=\"col-md-7\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n          <select id=\"accountGroupSelectField\" #accountGroupSelectField class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.MGROUP\"\r\n            [ngModelOptions]=\"{standalone: true}\" (change)=\"getSubgroupA($event)\">\r\n            <!-- <option [value]=\"AL\"></option> -->\r\n            <option *ngFor=\"let main of masterService.mainGroupList;let i=index\" [value]=\"main.ACID\">{{main?.ACNAME}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"form-control-label col-md-4 \" style=\"width: auto;\">Sub Group (A) :</label>\r\n          <div class=\"col-md-7\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n          <select class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_A\"\r\n          [disabled]=\"masterService.disableSubGroupA\" [ngModelOptions]=\"{standalone: true}\"\r\n            (change)=\"getSubgroupB($event)\">\r\n            <option [value]=\"\"></option>\r\n            <option *ngFor=\"let sub of masterService.subGroupAList;let i=index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"form-control-label col-md-4 \" style=\"width: auto;\">Sub Group (B) :</label>\r\n          <div class=\"col-md-7\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n          <select class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_B\"\r\n            [disabled]=\"masterService.disableSubGroupB\" [ngModelOptions]=\"{standalone: true}\"\r\n            (change)=\"getSubgroupC($event)\">\r\n            <option [value]=\"\"></option>\r\n            <option *ngFor=\"let sub of masterService.subGroupBList; let i=index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"form-control-label col-md-4 \" style=\"width: auto;\">Sub Group (C) :</label>\r\n          <div class=\"col-md-7 pd0\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n          <select class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_C\"\r\n            [disabled]=\"masterService.disableSubGroupC\" [ngModelOptions]=\"{standalone: true}\"\r\n            (change)=\"selectSubgroupC($event)\">\r\n            <option *ngFor=\"let sub of masterService.subGroupCList; let i = index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-lg-6\" style=\"height: 386px; overflow-y: scroll; overflow-x: hidden; padding-right: 0;\">\r\n        <header style=\"\r\n        padding: 0 20px; position: sticky; top: 0; background-color: #fff !important; z-index: 9;\">\r\n          <div class=\"row\" style=\"display: flex;\">\r\n            <h5 style=\"padding: 10px 0 0 0; color: #000; font-weight: bold;\">Selected Group Lists</h5>\r\n            <div (click)=\"Close()\" class=\"closeIcon\" style=\"padding-top: 7px;\">\r\n              <button class=\"btn btn-sm \" style=\"background-color: #4472C4; color: #fff;\"\r\n                (click)=\"method()\">Apply</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7\" style=\"margin: 2px -25px;\">\r\n              <select\r\n                style=\"width: 100%; padding: 4px 0px;\"\r\n                [(ngModel)]=\"filterOption\"\r\n              >\r\n                <option value=\"\" disabled selected hidden>Select Filter Option</option>\r\n                <option value=\"ACCODE\" selected>A/C Code</option>\r\n                <option value=\"ACNAME\" selected>A/C Name</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-md-6\" style=\"margin: 4px 4px 0px 0px;\">\r\n              <input\r\n                #searchInputBox\r\n                type=\"text\"\r\n                style=\"width: 120%; padding: 5px 3px\"\r\n                placeholder=\"Enter keyword to search\"\r\n                [(ngModel)]=\"filterValue\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n        </header>\r\n\r\n\r\n        <div class=\"SelectAll\" style=\"display: flex; background-color: #E9EBF5;position: sticky;top:70px; z-index:9\">\r\n          <input type=\"text\" type=\"checkbox\" style=\"width: auto; \" (change)=\"handleChange($event)\" id=\"selectAll\">\r\n          <label style=\"margin-top: 8px;\">Select All</label>\r\n\r\n        </div>\r\n\r\n\r\n        <table class=\"table table-striped acpopup\">\r\n          <thead style=\"position: sticky;top:100px; z-index:9\">\r\n            <tr style=\" background: #FFF;\r\n            box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);\r\n            \">\r\n              <th style=\"width: 1%;\"></th>\r\n              <th scope=\"col\" style=\"width:2%; color:#000 !important\">A/C Code</th>\r\n              <th scope=\"col\" style=\"width:100%;color:#000 !important\">A/C Name</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container *ngIf=\"this.AccountService.partyList && this.AccountService.partyList.length >0\">\r\n              <tr *ngFor=\"let party of (AccountService.partyList|searchData: filterValue: filterOption); let i=index\">\r\n                <td style=\"line-height:21px; text-align:center\">\r\n                  <div class=\"form-check\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"party.IS_CHECKED\">\r\n\r\n                  </div>\r\n                </td>\r\n                <td style=\"width:8%\">{{party.ACCODE}}</td>\r\n                <td style=\"width:12%\">{{party.ACNAME}}</td>\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </fieldset>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 1841:
/***/ (function(module, exports) {

module.exports = "input, select{\r\n    height: 25px;\r\n}"

/***/ }),

/***/ 1842:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .table-striped>tbody>tr:nth-of-type(odd) {\r\n    background-color: #CFD5EA;\r\n  }\r\n\r\n  .table-striped>tbody>tr:nth-of-type(even) {\r\n    background-color: #E9EBF5;\r\n  }\r\n\r\n  .table button {\r\n    padding: 2px 10px !important;\r\n    margin-top: 2px;\r\n  }\r\n\r\n  .table td {\r\n    line-height: 29px;\r\n  }\r\n  .table thead th{\r\n    background-color: #fff;\r\n  }\r\n</style>\r\n\r\n<div class=\"sticky-top\">\r\n  <div class=\"row clearfix\" style=\" padding: 3px 20px;\">\r\n    <div class=\"col-md-6\">\r\n      <h3 class=\"page-title\">Budget Master</h3>\r\n    </div>\r\n    <div class=\"col-md-6\" style=\"float: right;\">\r\n      <button class=\"btn btn-info pull-right\" style=\"margin-right : 10px; background-color: #4472C4;\"\r\n        routerLink=\"/pages/dashboard/dashboard\">\r\n        Back\r\n      </button>\r\n      <!-- <button type=\"button \" class=\"btn btn-info pull-right\" data-toggle=\"modal\" data-target=\"#importBudget\" style=\"margin-right : 10px; background-color: #4472C4;\" (click)=\"uploadBudget()\">\r\n          Import Budget\r\n        </button> -->\r\n        \r\n      <button *ngIf=\"userSetting.enableMaster_AddEdit==1\" type=\"button \" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;background-color: #4472C4;\"\r\n        (click)=\"addBudget()\">\r\n        Add Budget\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row\" style=\"align-items: center;\">\r\n  <div class=\"col-md-12 col-sm-8\" style=\"margin-top:4.5rem\">\r\n\r\n    <div class=\"card\" style=\"margin: auto; width: 63rem;\">\r\n      <div class=\"card-header\" style=\"    background: #4472C4;\r\n        color: #ffff;\">\r\n\r\n        <span class=\"col-md-6\">Budget Lists</span>\r\n        <div style=\"margin-left: 45rem; margin-top: -6px;\">\r\n          <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"filter\" #searchFilter=\"ngModel\"\r\n            placeholder=\"Search...\" style=\"width: 15rem; height: 1.7rem; padding: 0px 6px;\">\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"card-body\" style=\"padding: 0;    max-height: 440px !important;\r\n      overflow: scroll;\">\r\n        <table class=\"table table-striped\">\r\n          <thead style=\"    background: #FFF;\r\n            box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);\">\r\n            <tr style=\"position: sticky; top:0;line-height: 0.5rem;\">\r\n              <th scope=\"col\" style=\" font-weight: bold;\">S.N</th>\r\n              <!-- <th scope=\"col\" style=\"font-weight: bold;\">Budget No</th> -->\r\n              <th scope=\"col\" style=\" font-weight: bold\">Budget Name </th>\r\n              <th scope=\"col\" style=\" font-weight: bold\">Period</th>\r\n              <th scope=\"col\" style=\" font-weight: bold\">Created On</th>\r\n              <th scope=\"col\" style=\" font-weight: bold\">Updated On</th>\r\n              <th scope=\"col\" style=\" font-weight: bold\">Status</th>\r\n              <th scope=\"col\" style=\"text-align:center;width:18%; font-weight: bold \">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container>\r\n              <tr *ngFor=\"let list of (BudgetList|searchData:filter:''); let i=index\">\r\n                <td >{{i+1}}</td>\r\n                <!-- <td >{{list.BUDGET_NUMBER}}</td> -->\r\n                <td >{{list.BUDGET_NAME}}</td>\r\n                <td >{{list.FROM_DATE}}-{{list.TO_DATE}}</td>\r\n                <td >{{list.CREATED_ON}}</td>\r\n                <td >{{list.UPDATED_ON}}</td>\r\n                <td >{{list.STATUS}}</td>\r\n                <td style=\"width:18%;text-align: center; display:flex\">\r\n                  <button style=\"width: 60px; margin-right: 10px; background-color: #4472C4;\" type=\"button\"\r\n                    class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\"\r\n                    (click)=\"onViewClick(list)\">View</button>\r\n                  <button *ngIf=\"userSetting.enableMaster_AddEdit==1\" style=\"width: 60px; margin-right: 10px; background-color: #4472C4;\" type=\"button\"\r\n                    class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\"\r\n                    (click)=\"onEditClick(list)\">Edit</button>\r\n                  <button style=\"width: 60px; background-color: #4472C4;\" type=\"button\"\r\n                    class=\"btn btn-sm btn-info mr-1 btn-sm\" data-toggle=\"modal\"\r\n                    (click)=\"onDeleteClick(list)\">Delete</button>\r\n\r\n                </td>\r\n              </tr>\r\n\r\n            </ng-container>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=17.chunk.js.map