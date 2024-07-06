webpackJsonpac__name_([11],{

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1178));
__export(__webpack_require__(1179));
__export(__webpack_require__(1269));
__export(__webpack_require__(1171));
var cell_1 = __webpack_require__(1164);
exports.Cell = cell_1.Cell;
var default_editor_1 = __webpack_require__(1165);
exports.DefaultEditor = default_editor_1.DefaultEditor;
//# sourceMappingURL=ng2-smart-table.js.map

/***/ }),

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PLedger_service__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Transaction_Components_transaction_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_services_navigation_perventor_navigation_perventor_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLedgerComponent; });











var PLedgerComponent = (function () {
    function PLedgerComponent(preventNavigationService, alertService, loadingService, MasterService, PartyService, router, _activatedRoute, _fb, dialog, _authService, _trnMainService) {
        this.preventNavigationService = preventNavigationService;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.MasterService = MasterService;
        this.PartyService = PartyService;
        this._activatedRoute = _activatedRoute;
        this._fb = _fb;
        this.dialog = dialog;
        this._authService = _authService;
        this._trnMainService = _trnMainService;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.SavePartyEmit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.majorParentAcList = [];
        this.acParentList = [];
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.viewMode = false;
        this.subcriptions = [];
        this.initialTextReadOnly = false;
        this.ID = "";
        this.acGroups = [];
        this.actype = "";
        this.disableActype = false;
        this.formObj = {};
        this.Title = "";
        this.PartyGrpList = [];
        this.ChannelList = [];
        this.GeoList = [];
        this.RouteList = [];
        this.BranchList = [];
        this.editModel = {};
        this.CardName = [];
        this.StateList = [];
        this.DistrictList = [];
        this.TrnMainObj = {};
        this.HideACNAME = false;
        this.partyList = [];
        this.solist = [];
        this.SOTableList = [];
        this.router = router;
        this.TrnMainObj = this._trnMainService.TrnMainObj;
        // this.service.getNewValues(selectL)
        //     .subscribe(data => {
        //         if (data.status == 'ok') {
        //             this.ledgerAcObj.PARENT = data.result.parent.ACID;
        //             this.PARENTACNAME = data.result.parent.ACNAME;
        //             this.ledgerAcObj.PType = data.result.parent.PType;
        //         }
        //     }
        //     , error => {
        //         this.router.navigate([this.returnUrl]);
        //         console.log(error);
        //     }
        //     );
    }
    PLedgerComponent.prototype.ngAfterViewInit = function () {
        this.HideACNAME = false;
        this.AfterView();
    };
    PLedgerComponent.prototype.AfterView = function () {
        var _this = this;
        //console.log("CheckPtype", this.PType, this.isGroup);
        // if (this.PType == 'C' && (this.isGroup == false || this.isGroup == 'false')) {
        if (this.PType == "C" && this.isGroup == 0) {
            this.formObj.Name = "Customer Name";
            this.formObj.PSType = "Sales Type";
            this.formObj.PMode = "Payment Mode";
            this.form.patchValue({
                PType: "C",
                TYPE: "A"
            });
        }
        else if (this.PType == "C" && this.isGroup == 1) {
            this.formObj.Name = "Group Name";
            this.form.patchValue({ PType: "C", TYPE: "G" });
        }
        else if (this.PType == "V" && this.isGroup == 0) {
            this.formObj.Name = "Supplier Name";
            this.formObj.PSType = "Purchase Type";
            this.formObj.PMode = "Purchase Mode";
            this.form.patchValue({ PType: "V", TYPE: "A" });
        }
        else if (this.PType == "V" && this.isGroup == 1) {
            this.form.patchValue({ PType: "V", TYPE: "G" });
        }
        // document.getElementById('id') = 'General';
        this.PartyService.getPartyGroupByPtype(this.PType).subscribe(function (res) {
            if (res.status == "ok") {
                _this.PartyGrpList = res.result;
            }
        });
        this.PartyService.getDIV().subscribe(function (res) {
            _this.BranchList = res;
        });
        this.PartyService.getHierachy().subscribe(function (res) {
            if (res.status == "ok") {
                _this.GeoList = res.result.GEO;
                _this.ChannelList = res.result.CHANNEL;
                _this.RouteList = res.result.Route;
            }
        });
        this.MasterService.GETTRNTYPE().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.CardName = res.result;
            }
        });
        this.MasterService.getState().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.StateList = res.result;
            }
        });
        this.MasterService.getDistrict().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.DistrictList = res.result;
            }
        });
        this.userProfile = this._authService.getUserProfile();
    };
    PLedgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._fb.group({
            PARENT: [""],
            TITLE: [""],
            ACNAME: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            SHORTNAME: [""],
            CUSTOMERID: [""],
            CATEGORY: [""],
            Currency: [""],
            PMODE: [""],
            CRLIMIT: [0],
            CRPERIOD: [0],
            PSTYPE: [""],
            DIV: [""],
            GSTTYPE: [""],
            MAILTYPE: [""],
            ISACTIVE: [1],
            ADDRESS: [""],
            TEMPADDRESS: [""],
            CITY: [""],
            STATE: [""],
            AREA: [""],
            LANDMARK: [""],
            PHONE: [""],
            MOBILE: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            EMAIL: [""],
            POSTALCODE: [""],
            FAX: [""],
            VATNO: [""],
            ADHARNO: [""],
            GSTNO: [""],
            PRICELEVELCONFIG: [""],
            PRICELEVEL: [""],
            CTYPE: [""],
            ERPPLANTCODE: [""],
            ERPSTOCKLOCATIONCODE: [""],
            CBALANCE: [0],
            PType: [""],
            MAPID: [""],
            ACCODE: [""],
            ACID: [""],
            TYPE: [""],
            Channel: [""],
            SO: [""],
            GEO: [""],
            ROUTE: [""],
            RouteDays: [""],
            DISTRICT: [""],
            CONTACTPERSON: [""],
            CONTACTMOBILE: [""],
            CONTACTEMAIL: [""]
        });
        this.form.valueChanges.subscribe(function (data) {
            _this.MasterService.PLedgerObj = data;
        });
        this.onFormChanges();
        this.CrDisabled = 'enabled';
        if (!!this._activatedRoute.snapshot.params["mode"])
            this.mode = this._activatedRoute.snapshot.params["mode"];
        if (!!this._activatedRoute.snapshot.params["isGroup"])
            this.isGroup = this._activatedRoute.snapshot.params["isGroup"];
        if (!!this._activatedRoute.snapshot.params["ACID"])
            this.ACID = this._activatedRoute.snapshot.params["ACID"];
        if (!!this._activatedRoute.snapshot.params["PType"])
            this.PType = this._activatedRoute.snapshot.params["PType"];
        if (!!this._activatedRoute.snapshot.params["Title"])
            this.Title = this._activatedRoute.snapshot.params["Title"];
        if (!!this._activatedRoute.snapshot.params["returnUrl"])
            this.returnUrl = this._activatedRoute.snapshot.params["returnUrl"];
        this.getGroups();
        // this.MasterService.getAllAccount().subscribe(res => { this.ledgerAcList.push(<TAcList>res); });
        if (this.mode == "edit") {
            this.form.get("PARENT").disable();
            this.form.get("ACNAME").disable();
            this.form.get("SHORTNAME").disable();
            this.form.get("CUSTOMERID").disable();
            this.form.get("VATNO").disable();
            this.form.get("ACCODE").disable();
            this.form.get("CRLIMIT").disable();
            this.loadingService.show("Getting data, Please wait...");
            this.MasterService.getAllAccount(this.ACID).subscribe(function (data) {
                _this.loadingService.hide();
                _this.editModel = data.result;
                if (data.result2 != null || data.result2 != undefined) {
                    _this.SOTableList.push(data.result2);
                }
                _this.setEditFromValue();
            }, function (error) {
                _this.loadingService.hide();
            });
        }
        else {
            if (this.Title == "AddLedger") {
                this.modeTitle = "Add Party Ledger";
            }
            else if (this.Title == "AddGroup") {
                this.modeTitle = "Add Party Group";
            }
        }
    };
    PLedgerComponent.prototype.BindValue = function (value, isGroup) {
        if (isGroup === void 0) { isGroup = 0; }
        this.PType = value;
        this.isGroup = isGroup;
        this.HideACNAME = true;
        this.AfterView();
        return;
        // this.HideACNAME=false;
        // this.form.patchValue({
        //   PType: '',
        //   TYPE: '',
        //   PARENT:''
        // });
        // this.isGroup=isGroup
        // if (value == "C" && this.isGroup == 0) {
        //   this.HideACNAME=true;
        //   this.formObj.Name = "Customer Name";
        //   this.formObj.PSType = "Sales Type";
        //   this.formObj.PMode = "Payment Mode";
        //   this.form.patchValue({
        //     PType: "C",
        //     TYPE: "A",
        //     PARENT:'PA'
        //   });
        // } else if (value == "C" && this.isGroup == 1) {
        //   this.formObj.Name = "Group Name";
        //   this.form.patchValue({ PType: "C", TYPE: "G",PARENT:'PA' });
        // }
        // // else if (this.PType == 'V' && (this.isGroup == false || this.isGroup == 'false')) {
        // if (value == "V" && this.isGroup == 0) {
        //   //console.log("reached supllier")
        //   this.HideACNAME=true;
        //   this.formObj.Name = "Supplier Name";
        //   this.formObj.PSType = "Purchase Type";
        //   this.formObj.PMode = "Purchase Mode";
        //   this.form.patchValue({ PType: "V", TYPE: "A",PARENT:'PA' });
        // } else if (this.PType == "V" && this.isGroup == 1) {
        //   this.form.patchValue({ PType: "V", TYPE: "G",PARENT:'PA' });
        // }
    };
    PLedgerComponent.prototype.setEditFromValue = function (data) {
        if (data === void 0) { data = null; }
        if (data != null && data != undefined && data != "") {
            this.editModel = data;
        }
        this.form.patchValue({
            PARENT: this.editModel.PARENT,
            TITLE: this.editModel.TITLE,
            ACNAME: this.editModel.ACNAME,
            SHORTNAME: this.editModel.shortname,
            CUSTOMERID: this.editModel.customerID,
            CATEGORY: this.editModel.CATEGORY,
            Currency: this.editModel.Currency,
            PMODE: this.editModel.PMODE,
            CRLIMIT: this.editModel.CRLIMIT,
            CRPERIOD: this.editModel.CRPERIOD,
            PSTYPE: this.editModel.PSTYPE,
            DIV: this.editModel.DIV,
            GSTTYPE: this.editModel.GSTTYPE,
            MAILTYPE: this.editModel.MAILTYPE,
            ISACTIVE: this.editModel.ISACTIVE,
            ADDRESS: this.editModel.ADDRESS,
            TEMPADDRESS: this.editModel.TEMPADDRESS,
            CITY: this.editModel.CITY,
            STATE: this.editModel.STATE,
            AREA: this.editModel.AREA,
            LANDMARK: this.editModel.LANDMARK,
            PHONE: this.editModel.PHONE,
            MOBILE: this.editModel.MOBILE,
            EMAIL: this.editModel.EMAIL,
            POSTALCODE: this.editModel.POSTALCODE,
            FAX: this.editModel.FAX,
            VATNO: this.editModel.VATNO,
            ADHARNO: this.editModel.ADHARNO,
            GSTNO: this.editModel.GSTNO,
            PRICELEVELCONFIG: this.editModel.PRICELEVELCONFIG,
            PRICELEVEL: this.editModel.PRICELEVEL,
            CTYPE: this.editModel.CTYPE,
            ERPPLANTCODE: this.editModel.ERPPLANTCODE,
            CBALANCE: this.editModel.CBALANCE,
            PType: this.editModel.PType,
            MAPID: this.editModel.MAPID,
            ACCODE: this.editModel.ACCODE,
            ACID: this.editModel.ACID,
            TYPE: this.editModel.TYPE,
            isAutoGSTApplicable: this.editModel.isAutoGSTApplicable,
            isRCMApplicable: this.editModel.isRCMApplicable,
            isReverseChargeApplicable: this.editModel.isReverseChargeApplicable
        });
        this.geo = this.editModel.GEO;
    };
    PLedgerComponent.prototype.onFormChanges = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function () {
            if (_this.form.dirty)
                _this.preventNavigationService.preventNavigation(true);
        });
    };
    PLedgerComponent.prototype.majorgroupChange = function () {
        this.filter(this.form.get("majorparent").value);
    };
    PLedgerComponent.prototype.filter = function (majorparent) {
        var _this = this;
        this.MasterService.getpartyListTree().subscribe(function (data) {
            var f = data.filter(function (x) { return x.ACID == majorparent; })[0];
            if (f != null) {
                _this.acParentList = f.children;
            }
        });
    };
    PLedgerComponent.prototype.SumbitSave = function () {
        var _this = this;
        var gsttype = this.form.get("GSTTYPE").value;
        if (gsttype == "Regular" || gsttype == "Composite") {
            if (this.form.get("GSTNO").value == null || this.form.get("GSTNO").value == "") {
                this.alertService.error("Please insert the GST NO.");
                return;
            }
        }
        //console.log("gstsss",gsttype);
        if (this.PType == 'C') {
            if (this.form.get("CUSTOMERID").value == "" || this.form.get("CUSTOMERID").value == null) {
                this.alertService.warning("Customer-ID is required!");
                return;
            }
        }
        if (this.PType == 'V') {
            if (this.form.get('ERPPLANTCODE').value == "" || this.form.get('ERPPLANTCODE').value == null) {
                this.alertService.warning("ERPPLANTCODE is required!");
                return;
            }
        }
        if (this.form.value.MOBILE.length != 10) {
            this.alertService.warning("Mobile number is invalid! Please enter atleast 10 digit number. ");
            return;
        }
        if (this.form.value.VATNO) {
            // console.log({ billtotel: parseFloat(this.form.value.VATNO) });
            var pno = parseFloat(this.form.value.VATNO);
            // if (pno.toString().length != 9) {
            //   this.alertService.error("PAN No is not correct");
            //   return;
            // }
        }
        try {
            var al = {};
            this.form.value.MAPID = "N";
            if (this.mode == "edit") {
                al.ACID = this.ACID;
            }
            var saveModel = this.form.value;
            if (this.PType == 'C') {
                saveModel.PType = "C";
            }
            else {
                saveModel.PType = "V";
            }
            saveModel.GEO = this.geo;
            saveModel.PRICELEVEL = this.geo;
            saveModel.TYPE = "A";
            if (this.mode != "edit") {
                saveModel.PARENT = "PA";
            }
            saveModel.ACNAME = this.form.controls['ACNAME'].value;
            saveModel.SHORTNAME = this.form.controls['SHORTNAME'].value;
            saveModel.ACCODE = saveModel.CUSTOMERID = this.form.controls['CUSTOMERID'].value;
            saveModel.VATNO = this.form.controls['VATNO'].value;
            saveModel.LEVELS = 10;
            // saveModel.ACCODE = this.form.controls['ACCODE'].value;
            saveModel.CRLIMIT = this.form.controls['CRLIMIT'].value;
            this.loadingService.show("Saving Data please wait...");
            var sub = this.MasterService.saveAccount(this.mode, saveModel, this.SOTableList).subscribe(function (data) {
                _this.loadingService.hide();
                if (data.status == "ok") {
                    _this.alertService.success("Data Saved Successfully");
                    _this.preventNavigationService.preventNavigation(false);
                    setTimeout(function () {
                        _this.onClose.emit(true);
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body ==
                        "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(["/login", _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.alertService.error("Error in Saving Data:" + data.result._body);
                }
            }, function (error) {
                _this.loadingService.hide();
                _this.alertService.error(error);
            });
            this.subcriptions.push(sub);
        }
        catch (e) {
            this.alertService.error(e);
        }
    };
    PLedgerComponent.prototype.cancel = function () {
        try {
            this.router.navigate([this.returnUrl]);
        }
        catch (ex) {
            console.log(ex);
            this.alertService.error(ex);
        }
    };
    PLedgerComponent.prototype.changePtype = function (value) {
        this.form.get("Ptype").patchValue(value);
    };
    PLedgerComponent.prototype.onGrpChange = function (event, i, selected) {
        var _this = this;
        try {
            if (selected) {
                // this.actype = selected.ACTYPE
                // this.changeACtype(selected.ACTYPE);
                // this.disableActype == true;
                //latest selected
                this.parentGroup = selected;
            }
            //let newGroup: GroupAccounts = event.value;
            console.log({
                onGrpChangeEvent: event,
                eventIndex: i,
                selected: selected
            });
            var opt_1 = [];
            var ind = i;
            if (event) {
                if (this.acGroups.length > ind + 1) {
                    this.acGroups.splice(ind + 1, this.acGroups.length - 1);
                }
                // console.log({ GroupchageEvent: event, value: event.value.ACNAME });
                this.lastParentID = event.value.ACID;
                this.PartyService.getChildrenGroups(event.value.ACID)
                    .flatMap(function (data) { return data; })
                    .subscribe(function (data) {
                    // console.log({ children: data });
                    if (data.TYPE == "G")
                        opt_1.push({ label: data.ACNAME, value: data });
                }, function (Error) { return console.log({ groupchangeError: Error }); }, function () {
                    if (opt_1.length > 0) {
                        _this.acGroups.push({
                            group: event.value.ACNAME,
                            value: event.value,
                            options: opt_1
                        });
                    }
                    //this.groupListSubject.next(subjectData);
                    // console.log({ negroup2: { group: event.value.ACNAME, value: event.value, options: opt }, subjectData2: subjectData });
                });
            }
        }
        catch (ex) {
            console.log({ onGroupChange: ex });
        }
    };
    PLedgerComponent.prototype.getGroups = function () {
        var _this = this;
        //console.log("Has SUB is false");
        this.actype = "";
        this.disableActype = false;
        this.acGroups = [];
        this.getMainGroup();
        if (!this.ACID)
            return;
        console.log({ acid: this.ACID });
        this.PartyService.getParentGroups(this.ACID)
            .flatMap(function (data) { return data; })
            .subscribe(function (data) {
            try {
                data.SELECTEDGROUPAC = data.CHILDLIST.find(function (itm) { return itm.ACID == data.SELECTEDGROUP; });
                _this.parentGroup = data.SELECTEDGROUPAC;
                console.log({
                    selectedGroup: data.SELECTEDGROUP,
                    selectedGroupAC: data.SELECTEDGROUPAC
                });
                // if (data.SELECTEDGROUPAC.HASSUBLEDGER == 1 && this.hasSubLedger == 0) {
                //     this.hasSubLedger = 1;
                //     this.changehassubEvent(true);
                //     this.disableHassubledger = true;
                //     //console.log("Disable AHS SUB")
                // }
                var opt_2 = [];
                data.CHILDLIST.forEach(function (child) {
                    opt_2.push({ label: child.ACNAME, value: child });
                });
                _this.acGroups.push({
                    group: data.ACNAME,
                    value: data,
                    options: opt_2
                });
            }
            catch (ex) {
                console.log({ getParentGroups: ex });
            }
        }, function (error) {
            console.log({ getgroupError: error });
        }, function () {
            if (_this.acGroups.length > 1) {
                var selectedGroup = _this.acGroups[0].options.find(function (itm) { return itm.value.ACID == _this.acGroups[1].value.ACID; });
                if (selectedGroup) {
                    _this.acGroups[0].value.SELECTEDGROUPAC = selectedGroup.value;
                }
                // console.log({ selectedGroupValue: selectedGroup.value });
                // if (selectedGroup.value.Ptype) {
                //     alert("REACHED")
                //     this.actype = selectedGroup.value.Ptype
                //     this.changePtype(selectedGroup.value.Ptype);
                //     this.disableActype == true;
                // }
                // console.log({groupTofind:this.acGroups[1],options:this.acGroups[0].options,selected:this.acGroups[0].value.SELECTEDGROUPAC,selected2:this.acGroups[1].value.SELECTEDGROUPAC})
            }
        });
        return;
    };
    PLedgerComponent.prototype.getMainGroup = function () {
        var opt = [];
        this.PartyService.getTopGroups()
            .flatMap(function (data) { return data; })
            .subscribe(function (data) {
            opt.push({ label: data.ACNAME, value: data });
        });
        this.acGroups.push({
            group: "Main Group",
            value: { ACNAME: "MAIN GROUP", ACID: null, PARENT: null },
            options: opt
        });
    };
    PLedgerComponent.prototype.clickedNotActive = function (value) {
        if (this.form == null) {
            return;
        }
        this.form.get("isNotActive").patchValue(value);
    };
    PLedgerComponent.prototype.NotActive = function () { };
    PLedgerComponent.prototype.RouteClick = function (value) {
        this.RCODE = value;
        // //console.log("RouteClick", value)
        this.PartyService.getSOFromRoute(value).subscribe(function (res) {
            // //console.log("RES", res)
            // if (res.status == "ok") {
            //   this.solist = res.result;
            // }
        });
    };
    PLedgerComponent.prototype.SOChange = function (value) {
        var soName = this.solist.filter(function (x) { return x.CODE == value; })[0];
        //console.log("Changed", soName);
        this.form.patchValue({
            SO: soName ? soName.CODE : ""
        });
    };
    PLedgerComponent.prototype.RouteAdd = function () {
        var a = {};
        var formValue = this.form.value;
        var route = this.RouteList.filter(function (x) { return x.RouteCode == formValue.ROUTE; })[0];
        var soName = this.solist.filter(function (x) { return x.CODE == formValue.SO; })[0];
        if (soName == undefined || soName == null) {
            this.alertService.info("All fields are required.");
            return;
        }
        a.SONAME = soName ? soName.NAME : "";
        a.RouteName = route ? route.RouteName : "";
        a.SOCODE = soName ? soName.CODE : "";
        a.PCL = soName ? soName.PCL : "";
        this.SOTableList.push(a);
        this.form.patchValue({
            ROUTE: "",
            SO: "",
            SONAME: "",
            RouteDays: ""
        });
    };
    PLedgerComponent.prototype.deleteSOList = function (index) {
        this.SOTableList.splice(index, 1);
    };
    PLedgerComponent.prototype.ChangePMODE = function (value) {
        this.Crvalue = value;
        if (value == "credit" || value == "cashandcredit") {
            this.CrDisabled = 'enable';
        }
        else {
            this.CrDisabled = 'disabled';
            this.form.patchValue({
                CRLIMIT: 0,
                CRPERIOD: 0
            });
        }
    };
    PLedgerComponent.prototype.CreditDisabled = function () {
        try {
            if (this.Crvalue == "credit" || this.Crvalue == 'cashandcredit') {
                this.CrDisabled = 'enable';
                return "white";
            }
            else {
                this.CrDisabled = 'disabled';
                return "#EBEBE4";
            }
        }
        catch (ex) {
            console.log(ex);
            this.alertService.error(ex);
        }
    };
    PLedgerComponent.prototype.changePriceLevel = function () {
        alert("Changes on Pricelevel will affects the Category also!");
    };
    return PLedgerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])("onClose"),
    __metadata("design:type", Object)
], PLedgerComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], PLedgerComponent.prototype, "rootID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], PLedgerComponent.prototype, "PType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], PLedgerComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], PLedgerComponent.prototype, "grp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PLedgerComponent.prototype, "SavePartyEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PLedgerComponent.prototype, "fromTree", void 0);
PLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "PLedger",
        template: __webpack_require__(1363),
        providers: [__WEBPACK_IMPORTED_MODULE_6__PLedger_service__["a" /* PLedgerservice */], __WEBPACK_IMPORTED_MODULE_7__common_Transaction_Components_transaction_service__["a" /* TransactionService */]],
        styles: [__webpack_require__(9), __webpack_require__(39)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__common_services_navigation_perventor_navigation_perventor_service__["a" /* PreventNavigationService */],
        __WEBPACK_IMPORTED_MODULE_9__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_10__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_6__PLedger_service__["a" /* PLedgerservice */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdDialog */],
        __WEBPACK_IMPORTED_MODULE_5__common_services_permission__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_7__common_Transaction_Components_transaction_service__["a" /* TransactionService */]])
], PLedgerComponent);



/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_state__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLedgerservice; });








var PLedgerservice = (function () {
    function PLedgerservice(http, activatedRoute, authService, state, masterService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = state;
        this.masterService = masterService;
    }
    Object.defineProperty(PLedgerservice.prototype, "apiUrl", {
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
    PLedgerservice.prototype.getParentWisePartyList = function (ACID) {
        return this.http.get(this.apiUrl + '/getParentWiseAccount/' + ACID, this.getRequestOption()).flatMap(function (response) { return response.json() || []; });
    };
    PLedgerservice.prototype.getNewValues = function (mcode) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getNewValues/' + mcode, this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getPartyList = function (mcode) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getPartyList/' + mcode, this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getAllParty = function (ACID) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAllData/' + ACID, this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.savePartyList = function (mode, prodObj, RGLIST, AlternateUnits, PBarCodeCollection) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        var opt = this.getRequestOption();
        var hd = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var op = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]();
        var bodyData = { mode: mode, data: { product: prodObj, rglist: RGLIST, alternateunits: AlternateUnits, pbarcodes: PBarCodeCollection } };
        ////console.log("product json");
        var data = JSON.stringify(bodyData, undefined, 2);
        //console.log(data);
        this.http.post(this.apiUrl + "/savePartyList", bodyData, this.getRequestOption())
            .subscribe(function (data) {
            var retData = data.json();
            //console.log(retData);
            if (retData.status == "ok") {
                res.status = "ok";
                res.result = retData.result;
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
    PLedgerservice.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        //console.log({ headers: headers });
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
    };
    PLedgerservice.prototype.getParentGroups = function (acid) {
        var _this = this;
        //console.log({ acid: acid })
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getParents?acid=' + acid, _this.masterService.getRequestOption())
                .map(function (data) {
                //console.log({ parentGrop: data })
                return data.json();
            })
                .subscribe(function (res) {
                if (res.status == 'ok') {
                    observer.next(res.result);
                }
            }, function (error) {
                _this.masterService.resolveError(error, 'getParents');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    PLedgerservice.prototype.getChildrenGroups = function (acid) {
        var _this = this;
        //console.log({ getChildrenAcid: acid, url: this.masterService.apiUrl + '/getChildren?' + acid });
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getChildren?acid=' + acid, _this.masterService.getRequestOption())
                .map(function (data) { return data.json(); })
                .subscribe(function (res) {
                //console.log({ getChildrenResult: res });
                observer.next(res.result);
            }, function (error) {
                _this.masterService.resolveError(error, 'getChildren');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    PLedgerservice.prototype.getTopGroups = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getTopPartyGroups', _this.masterService.getRequestOption())
                .map(function (data) { return data.json(); })
                .subscribe(function (res) {
                observer.next(res.result);
            }, function (error) {
                _this.masterService.resolveError(error, 'getTopGroups');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    PLedgerservice.prototype.getPartyGroupByPtype = function (pType) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getPartyGroup/' + pType, this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getDIV = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getDIV', this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getPartyItemByPtype = function (pType) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getPartyItem/' + pType, this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getAccountLedgerItem = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAccountItem/' + prefix, this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getAllAccount = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAllAccountItem/', this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getAccountLedgerGroup = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAccountGroup', this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getHierachy = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAllHierachy', this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getSOFromRoute = function (rcode) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getSOfromRCode/' + rcode, this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getAllMainGroup = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/AllPrimaryGroup/', this.getRequestOption()).subscribe(function (response) {
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
    PLedgerservice.prototype.getAllAccountGroup = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/AllAccountGroup/', this.getRequestOption()).subscribe(function (response) {
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
    return PLedgerservice;
}());
PLedgerservice = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__global_state__["a" /* GlobalState */], __WEBPACK_IMPORTED_MODULE_0__common_repositories_masterRepo_service__["a" /* MasterRepo */]])
], PLedgerservice);



/***/ }),

/***/ 1267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerSourceConf; });
var ServerSourceConf = (function () {
    function ServerSourceConf(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.endPoint, endPoint = _c === void 0 ? '' : _c, _d = _b.sortFieldKey, sortFieldKey = _d === void 0 ? '' : _d, _e = _b.sortDirKey, sortDirKey = _e === void 0 ? '' : _e, _f = _b.pagerPageKey, pagerPageKey = _f === void 0 ? '' : _f, _g = _b.pagerLimitKey, pagerLimitKey = _g === void 0 ? '' : _g, _h = _b.filterFieldKey, filterFieldKey = _h === void 0 ? '' : _h, _j = _b.totalKey, totalKey = _j === void 0 ? '' : _j, _k = _b.dataKey, dataKey = _k === void 0 ? '' : _k;
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
    return ServerSourceConf;
}());

ServerSourceConf.SORT_FIELD_KEY = '_sort';
ServerSourceConf.SORT_DIR_KEY = '_order';
ServerSourceConf.PAGER_PAGE_KEY = '_page';
ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
ServerSourceConf.TOTAL_KEY = 'x-total-count';
ServerSourceConf.DATA_KEY = '';


/***/ }),

/***/ 1268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_local_data_source__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_source_conf__ = __webpack_require__(1267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(1170);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerDataSource; });




var ServerDataSource = (function (_super) {
    __extends(ServerDataSource, _super);
    function ServerDataSource(http, conf) {
        if (conf === void 0) { conf = {}; }
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.lastRequestCount = 0;
        _this.conf = new __WEBPACK_IMPORTED_MODULE_2__server_source_conf__["a" /* ServerSourceConf */](conf);
        if (!_this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
        return _this;
    }
    ServerDataSource.prototype.count = function () {
        return this.lastRequestCount;
    };
    ServerDataSource.prototype.getElements = function () {
        var _this = this;
        return this.requestElements().map(function (res) {
            // console.log("response got form the server " + JSON.stringify(res))
            var body = JSON.parse(res._body);
            //console.log(JSON.stringify(body))
            _this.lastRequestCount = body.totalCount; //this.extractTotalFromResponse(res);
            _this.data = _this.extractDataFromResponse(res);
            // console.log("from total count " +  JSON.stringify(this.lastRequestCount))
            return _this.data;
        }).toPromise();
    };
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractDataFromResponse = function (res) {
        var rawData = res.json();
        var data = !!this.conf.dataKey ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* getDeepFromObject */])(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error("Data must be an array. Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
    };
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractTotalFromResponse = function (res) {
        // console.log("total key :" + this.conf.totalKey)
        // console.log("total key :" + JSON.stringify(res))
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            var rawData = res.json();
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* getDeepFromObject */])(rawData, this.conf.totalKey, 0);
        }
    };
    ServerDataSource.prototype.requestElements = function () {
        //console.log("hey pradeep i am here.")
        return this.http.get(this.conf.endPoint, this.createRequestOptions());
    };
    ServerDataSource.prototype.createRequestOptions = function () {
        var requestOptions = {};
        var token = localStorage.getItem("TOKEN");
        // console.log("token at data table :" + token? token.replace(/['"]+/g, '') : '')
        // console.log("token at data table :" + token)
        requestOptions.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        //console.log(token);
        requestOptions.headers.append('Authorization', token ? token.replace(/['"]+/g, '') : '');
        requestOptions.search = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]();
        requestOptions = this.addSortRequestOptions(requestOptions);
        requestOptions = this.addFilterRequestOptions(requestOptions);
        return this.addPagerRequestOptions(requestOptions);
    };
    ServerDataSource.prototype.addSortRequestOptions = function (requestOptions) {
        var searchParams = requestOptions.search;
        var sort = [];
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                sort.push({
                    "Field": fieldConf.field,
                    "Dir": fieldConf.direction.toUpperCase()
                });
                // searchParams.set(this.conf.sortFieldKey, fieldConf.field);
                // searchParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
            if (sort.length)
                searchParams.set("sort", JSON.stringify(sort));
        }
        return requestOptions;
    };
    ServerDataSource.prototype.addFilterRequestOptions = function (requestOptions) {
        var searchParams = requestOptions.search;
        var filters = [];
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    filters.push({ "Field": fieldConf['field'], "Value": fieldConf['search'] });
                    // searchParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
            if (filters.length)
                searchParams.set("filters", JSON.stringify(filters));
        }
        return requestOptions;
    };
    ServerDataSource.prototype.addPagerRequestOptions = function (requestOptions) {
        var searchParams = requestOptions.search;
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            searchParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            searchParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return requestOptions;
    };
    return ServerDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__local_local_data_source__["a" /* LocalDataSource */]));



/***/ }),

/***/ 1269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(1162);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_0__grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_source_data_source__ = __webpack_require__(1166);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return __WEBPACK_IMPORTED_MODULE_1__data_source_data_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_source_local_local_data_source__ = __webpack_require__(1173);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LocalDataSource", function() { return __WEBPACK_IMPORTED_MODULE_2__data_source_local_local_data_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_source_server_server_data_source__ = __webpack_require__(1268);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ServerDataSource", function() { return __WEBPACK_IMPORTED_MODULE_3__data_source_server_server_data_source__["a"]; });






/***/ }),

/***/ 1271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_state__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewAcService; });








var TreeViewAcService = (function () {
    function TreeViewAcService(http, activatedRoute, authService, state, masterService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = state;
        this.masterService = masterService;
        this.selectAcdivisionList = [];
        this.selectAcdivisionObj = {};
    }
    Object.defineProperty(TreeViewAcService.prototype, "apiUrl", {
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
    TreeViewAcService.prototype.getParentWiseAccountList = function (ACID) {
        var _this = this;
        this.selectAcdivisionList = [];
        this.selectAcdivisionObj = {};
        //   return this.http.get(this.apiUrl + '/getParentWiseAccount/'+ACID, this.getRequestOption()).flatMap(response => response.json() || []);
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getParentWiseAccount/' + ACID, this.getRequestOption()).subscribe(function (response) {
            var data = response.json();
            //console.log("CheckValue^^",data);
            if (data.status == 'ok') {
                _this.selectAcdivisionList = data.result2;
                _this.selectAcdivisionObj = data.result;
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
    TreeViewAcService.prototype.getAccDivisionMapping = function (ACID) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getParentWiseAccount/' + ACID, this.getRequestOption()).subscribe(function (response) {
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
    TreeViewAcService.prototype.getAccountAutomationGSTRate = function (ACID, parent) {
        return this.http.get(this.apiUrl + ("/getAccountAutomationGSTRate?ACID=" + ACID + "&PARENT=" + parent), this.getRequestOption()).map(function (response) { return response.json() || []; });
    };
    TreeViewAcService.prototype.getNewValues = function (mcode) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getNewValues/' + mcode, this.getRequestOption()).subscribe(function (response) {
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
    // getAccount(ACID:string){
    //          let res={status:"error",result:""};
    //         let returnSubject:Subject<any>=new Subject();
    //        this.http.get(this.apiUrl + '/getAllData/'+ACID, this.getRequestOption()).subscribe(response=>{
    //                 let data = response.json();
    //                 if(data.status == 'ok'){
    //                     returnSubject.next(data);
    //                     returnSubject.unsubscribe();
    //                 }
    //                 else{
    //                     returnSubject.next(data)
    //                     returnSubject.unsubscribe();
    //                 }
    //             },error =>{
    //                 res.status='error';res.result=error;
    //                 returnSubject.next(res);
    //                 returnSubject.unsubscribe();
    //             }
    //             );
    //             return returnSubject;
    //     }
    TreeViewAcService.prototype.getPartyList = function (mcode) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getPartyList/' + mcode, this.getRequestOption()).subscribe(function (response) {
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
    TreeViewAcService.prototype.savePartyList = function (mode, prodObj, RGLIST, AlternateUnits, PBarCodeCollection) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__["Subject"]();
        var opt = this.getRequestOption();
        var hd = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var op = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]();
        var bodyData = { mode: mode, data: { product: prodObj, rglist: RGLIST, alternateunits: AlternateUnits, pbarcodes: PBarCodeCollection } };
        ////console.log("product json");
        var data = JSON.stringify(bodyData, undefined, 2);
        //console.log(data);
        this.http.post(this.apiUrl + "/savePartyList", bodyData, this.getRequestOption())
            .subscribe(function (data) {
            var retData = data.json();
            //console.log(retData);
            if (retData.status == "ok") {
                res.status = "ok";
                res.result = retData.result;
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
    TreeViewAcService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        //console.log({ headers: headers });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
    };
    TreeViewAcService.prototype.getParentGroups = function (acid) {
        var _this = this;
        //console.log({acid:acid})
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getParents?acid=' + acid, _this.masterService.getRequestOption())
                .map(function (data) {
                //console.log({parentGrop:data})
                return data.json();
            })
                .subscribe(function (res) {
                if (res.status == 'ok') {
                    observer.next(res.result);
                }
            }, function (error) {
                _this.masterService.resolveError(error, 'getParents');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    TreeViewAcService.prototype.getChildrenGroups = function (acid) {
        var _this = this;
        //console.log({getChildrenAcid:acid,url:this.masterService.apiUrl + '/getChildren?' + acid});
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getChildren?acid=' + acid, _this.masterService.getRequestOption())
                .map(function (data) { return data.json(); })
                .subscribe(function (res) {
                //console.log({getChildrenResult:res});
                observer.next(res.result);
            }, function (error) {
                _this.masterService.resolveError(error, 'getChildren');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    TreeViewAcService.prototype.getTopGroups = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getTopGroups', _this.masterService.getRequestOption())
                .map(function (data) { return data.json(); })
                .subscribe(function (res) {
                observer.next(res.result);
            }, function (error) {
                _this.masterService.resolveError(error, 'getTopGroups');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    return TreeViewAcService;
}());
TreeViewAcService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__global_state__["a" /* GlobalState */], __WEBPACK_IMPORTED_MODULE_6__common_repositories_masterRepo_service__["a" /* MasterRepo */]])
], TreeViewAcService);



/***/ }),

/***/ 1298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_state__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewAccService; });










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
var TreeViewAccService = (function () {
    function TreeViewAccService(http, activatedRoute, authService, state, masterService) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = state;
        this.masterService = masterService;
        this._treeEnable = true;
        this.ParentInfo = {};
        this.nodes = [];
        this.addGroupSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        // addGroup$: Observable<any> = this.addGroupSubject.asObservable();
        this.loadTableListSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.loadTableList$ = this.loadTableListSubject.asObservable();
        this.partyList = [];
        this.contextMenuActions = [
            {
                html: function (item) { return "Edit"; },
                tag: 'edit',
                enabled: function (item) { return true; },
                visible: function (item) { return true; },
            },
            {
                divider: true,
                visible: true,
            },
            {
                html: function (item) { return "Delete"; },
                tag: 'delete',
                enabled: function (item) { return true; },
                visible: function (item) { return true; },
            },
        ];
        ////console.log("tree",this.tree);
        this.isGroup = false;
    }
    Object.defineProperty(TreeViewAccService.prototype, "treeEnable", {
        //   mainGroupList: any = [];
        //   subGroupAList: any = [];
        //   subGroupBList: any = [];
        // //   subGroupCList: any = [];
        //   groupSelectObj: AccountGroup = <AccountGroup>{};
        //   modeTitle: string;/
        get: function () { return this._treeEnable; },
        set: function (value) { this._treeEnable = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeViewAccService.prototype, "apiUrl", {
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
    TreeViewAccService.prototype.getParentWisePartyList = function (ACID) {
        return this.http.get(this.apiUrl + '/getParentWiseAccount/' + ACID, this.getRequestOption()).flatMap(function (response) { return response.json() || []; });
    };
    TreeViewAccService.prototype.getParentWisePartyPgwsList = function (ACID) {
        return this.http.get(this.apiUrl + '/getParentWiseAccount/' + ACID, this.getRequestOption()).flatMap(function (response) { return response.json() || []; });
    };
    TreeViewAccService.prototype.getNewValues = function (mcode) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getNewValues/' + mcode, this.getRequestOption()).subscribe(function (response) {
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
    TreeViewAccService.prototype.getPartyList = function (mcode) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getPartyList/' + mcode, this.getRequestOption()).subscribe(function (response) {
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
    TreeViewAccService.prototype.getAllParty = function (ACID) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAllData/' + ACID, this.getRequestOption()).subscribe(function (response) {
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
    TreeViewAccService.prototype.savePartyList = function (mode, prodObj, RGLIST, AlternateUnits, PBarCodeCollection) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        var opt = this.getRequestOption();
        var hd = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var op = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]();
        var bodyData = { mode: mode, data: { product: prodObj, rglist: RGLIST, alternateunits: AlternateUnits, pbarcodes: PBarCodeCollection } };
        ////console.log("product json");
        var data = JSON.stringify(bodyData, undefined, 2);
        //console.log(data);
        this.http.post(this.apiUrl + "/savePartyList", bodyData, this.getRequestOption())
            .subscribe(function (data) {
            var retData = data.json();
            //console.log(retData);
            if (retData.status == "ok") {
                res.status = "ok";
                res.result = retData.result;
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
    TreeViewAccService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        //console.log({ headers: headers });
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
    };
    TreeViewAccService.prototype.getParentGroups = function (acid) {
        var _this = this;
        //console.log({ acid: acid })
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getParents?acid=' + acid, _this.masterService.getRequestOption())
                .map(function (data) {
                //console.log({ parentGrop: data })
                return data.json();
            })
                .subscribe(function (res) {
                if (res.status == 'ok') {
                    observer.next(res.result);
                }
            }, function (error) {
                _this.masterService.resolveError(error, 'getParents');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    TreeViewAccService.prototype.getChildrenGroups = function (acid) {
        var _this = this;
        //console.log({ getChildrenAcid: acid, url: this.masterService.apiUrl + '/getChildren?' + acid });
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getChildren?acid=' + acid, _this.masterService.getRequestOption())
                .map(function (data) { return data.json(); })
                .subscribe(function (res) {
                //console.log({ getChildrenResult: res });
                observer.next(res.result);
            }, function (error) {
                _this.masterService.resolveError(error, 'getChildren');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    TreeViewAccService.prototype.getTopGroups = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.masterService.apiUrl + '/getTopPartyGroups', _this.masterService.getRequestOption())
                .map(function (data) { return data.json(); })
                .subscribe(function (res) {
                observer.next(res.result);
            }, function (error) {
                _this.masterService.resolveError(error, 'getTopGroups');
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    TreeViewAccService.prototype.getHierachy = function () {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAllHierachy', this.getRequestOption()).subscribe(function (response) {
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
    TreeViewAccService.prototype.Refresh = function () {
        var _this = this;
        this.masterService._accountTree = [];
        this.masterService.getAccountTreeObservable = null;
        this.busy = this.masterService.getacListTree().map(function (x) { return x; })
            .subscribe(function (res) {
            _this.nodes = res;
            if (_this.tree != null) {
                _this.tree.treeModel.update();
            }
        }, function (error) {
            var err = _this.masterService.resolveError(error, "partyledger - partyledger");
            if (err) {
                alert(err.json());
            }
        });
    };
    TreeViewAccService.prototype.getMainGroupList = function () {
        var res = { status: 'error', result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getMainGroupList', this.getRequestOption())
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
    TreeViewAccService.prototype.getSubGroupList = function (groupID) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getSubGroupList?SELECTEDGROUPID=' + groupID, this.getRequestOption())
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
            res.status = 'error2';
            res.result = error;
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    TreeViewAccService.prototype.getAccountHeirarchy = function (groupID) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAccountHeirarchy?GROUPID=' + groupID, this.getRequestOption())
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
            res.status = 'error2';
            res.result = error;
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    TreeViewAccService.prototype.getSelectNodeObj = function (groupID) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_subject__["Subject"]();
        this.http.get(this.apiUrl + '/getAccountLedgerDetails?GROUPID=' + groupID, this.getRequestOption())
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
            res.status = 'error2';
            res.result = error;
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    return TreeViewAccService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__["b" /* ContextMenuComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__["b" /* ContextMenuComponent */])
], TreeViewAccService.prototype, "contextMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["c" /* TreeComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["c" /* TreeComponent */])
], TreeViewAccService.prototype, "tree", void 0);
TreeViewAccService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__global_state__["a" /* GlobalState */], __WEBPACK_IMPORTED_MODULE_0__common_repositories_masterRepo_service__["a" /* MasterRepo */]])
], TreeViewAccService);

var _a;


/***/ }),

/***/ 1361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_smart_table_src_ng2_smart_table_module__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aledger_routing__ = __webpack_require__(1570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ALedger_component__ = __webpack_require__(1569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ALedgerTable_component__ = __webpack_require__(1420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_services_guard_can_navigate_guard__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_popupLists_AGroupPopup_account_group_popup_grid_module__ = __webpack_require__(1365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PLedger_pledger_module__ = __webpack_require__(1591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Bank_bank_module__ = __webpack_require__(1424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_ledger_accountLedgerTable_component__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__account_ledger_addLedger_component__ = __webpack_require__(1598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_ledger_addSubgrps_component__ = __webpack_require__(1599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_ledger_addLedg_component__ = __webpack_require__(1440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_contextmenu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__party_ledger_addparty_module__ = __webpack_require__(1605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Account_Ledger_New_addAcc_module__ = __webpack_require__(1571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AledgerModule", function() { return AledgerModule; });






















var AledgerModule = (function () {
    function AledgerModule() {
    }
    return AledgerModule;
}());
AledgerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__aledger_routing__["a" /* AledgerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_smart_table_src_ng2_smart_table_module__["Ng2SmartTableModule"],
            __WEBPACK_IMPORTED_MODULE_9__common_popupLists_AGroupPopup_account_group_popup_grid_module__["a" /* AccountGroupPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__PLedger_pledger_module__["a" /* PartyLedgerModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__Bank_bank_module__["BankModule"], __WEBPACK_IMPORTED_MODULE_17_angular_tree_component__["e" /* TreeModule */], __WEBPACK_IMPORTED_MODULE_18_ngx_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_19__party_ledger_addparty_module__["a" /* PartyModule */],
            __WEBPACK_IMPORTED_MODULE_20__Account_Ledger_New_addAcc_module__["a" /* AccNewModule */],
            __WEBPACK_IMPORTED_MODULE_21__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__ALedger_component__["a" /* ALedgerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ALedgerTable_component__["a" /* ALedgerTableComponent */], __WEBPACK_IMPORTED_MODULE_13__account_ledger_accountLedgerTable_component__["a" /* AccountLedgerComponent */], __WEBPACK_IMPORTED_MODULE_14__account_ledger_addLedger_component__["a" /* AddLedgerComponent */], __WEBPACK_IMPORTED_MODULE_15__account_ledger_addSubgrps_component__["a" /* addGrpComponent */], __WEBPACK_IMPORTED_MODULE_16__account_ledger_addLedg_component__["a" /* LedgComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__common_services_guard_can_navigate_guard__["a" /* PendingChangesGuard */]]
    })
], AledgerModule);



/***/ }),

/***/ 1362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KeysPipe; });

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, key, term) {
        ////console.log(items); 
        if (key == null || key == undefined || key == "")
            return items;
        if (term == null || term == undefined || term == "")
            return items;
        return term
            ? items.filter(function (item) {
                return item[key] != undefined
                    && item[key] != null
                    && item[key].toLowerCase().indexOf(term.toLowerCase()) !== -1;
            })
            : items;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (items, sortedBy) {
        ////console.log('sortedBy', sortedBy);
        return items.sort(function (a, b) { return b[sortedBy] - a[sortedBy]; });
    };
    return SortByPipe;
}());
SortByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sortBy'
    })
], SortByPipe);

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], KeysPipe);



/***/ }),

/***/ 1363:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  label {\r\n    width: 150px;\r\n    font-size: 15px;\r\n    color: #403c3c;\r\n  }\r\n\r\n  input {\r\n    height: 30px;\r\n  }\r\n</style>\r\n<!-- begin form here -->\r\n<form [formGroup]=\"form\">\r\n  <div class=\"sticky-top\">\r\n    <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n      <div class=\"col-md-6\">\r\n        <h3 class=\"page-title\">{{ Title }}</h3>\r\n      </div>\r\n      <div class=\"col-md-6\" style=\"float: right;\">\r\n        <div class=\"col-md-6\" style=\"display: contents;\">\r\n          <button style=\"float:right\" type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">\r\n            Back\r\n          </button>\r\n        </div>\r\n        <button style=\"float:right;margin-right:10px\" type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\"\r\n          class=\"btn btn-info\" [disabled]=\"!this.parentGroup\" *ngIf=\"grp == 'G'\">\r\n          Save\r\n        </button>\r\n        <button style=\"float:right;margin-right:10px\" type=\"button\" [disabled]=\"!form.valid\"  (click)=\"SumbitSave()\" title=\"onSave\"\r\n          class=\"btn btn-info\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"tabbable\" id=\"warehouse-tabs\">\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" href=\"#general-info4\" data-toggle=\"tab\">General Info</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#contact-details\" data-toggle=\"tab\">Contact Details</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#gst\" data-toggle=\"tab\">GST</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#other\" data-toggle=\"tab\">Other</a>\r\n            </li>\r\n            <!-- <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#route\" data-toggle=\"tab\">Route</a>\r\n            </li> -->\r\n          </ul>\r\n          <div class=\"tab-content\">\r\n            <div class=\"tab-pane active\" id=\"general-info4\">\r\n              <!-- General Info -->\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  \r\n                  <div *ngIf='HideACNAME==false' class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">{{ formObj.Name }}<a style=\"color: red\">*</a>:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"ACNAME\" placeholder=\"Name\" />\r\n                      <div *ngIf=\"\r\n                          !form.controls['ACNAME'].valid &&\r\n                          form.controls['ACNAME']?.touched\r\n                        \" class=\"text-danger\">\r\n                        <span *ngIf=\"form.get('ACNAME').hasError('required')\">\r\n                          Name is required.\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"isGroup == 0\">\r\n                    <div *ngIf=\"PType == 'V'\" class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Precise Name:</label>\r\n                      <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"SHORTNAME\" placeholder=\"Short Name\" />\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"PType == 'C' && fromTree != 1 \" class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Customer ID<a style=\"color: red\">*</a> :</label>\r\n                      <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"CUSTOMERID\" placeholder=\"SAP-CODE\" />\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"PType == 'C' && fromTree != 1 \" class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Category:</label>\r\n                      <div class=\"col-sm-6\">\r\n                        <select class=\"form-control\" [(ngModel)]=\"geo\" [ngModelOptions]=\"{standalone:true}\"\r\n                          style=\"height:30px;padding-bottom: 0px;\">\r\n                          <option>None</option>\r\n                          <option *ngFor=\"let i of GeoList\" value=\"{{i.OrgTypeCode}}\">{{\r\n                            i.OrgTypeName\r\n                          }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"PType == 'V'\" class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Currency :</label>\r\n                      <div class=\"col-sm-6\">\r\n                        <select class=\"form-control\" formControlName=\"Currency\"\r\n                          style=\"height:30px;padding-bottom: 0px;\">\r\n                          <option value=\"INDIAN RUPEE\">INDIAN RUPEE</option>\r\n                          <option value=\"USD\">USD</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">{{ formObj.PMode }}\r\n                      </label>\r\n                      <div class=\"col-sm-6\">\r\n                        <select class=\"form-control\" formControlName=\"PMODE\" style=\"height:30px;padding-bottom: 0px;\"\r\n                          (change)=\"ChangePMODE($event.target.value)\">\r\n                          <option value=\"cash\">Cash</option>\r\n                          <option value=\"credit\">Credit</option>\r\n                          <option value=\"cashandcredit\">Both Cash and Credit</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Credit Limit:\r\n                      </label>\r\n                      <div class=\"col-sm-6\">\r\n                        <input [style.background-color]=\"CreditDisabled()\"\r\n                          [readOnly]=\"CrDisabled == 'disabled' ? true : false\" type=\"number\" class=\"form-control\"\r\n                          formControlName=\"CRLIMIT\" placeholder=\"CRLIMIT\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Credit Days:\r\n                      </label>\r\n                      <div class=\"col-sm-6\">\r\n                        <input [style.background-color]=\"CreditDisabled()\"\r\n                          [readOnly]=\"CrDisabled == 'disabled' ? true : false\" type=\"number\" class=\"form-control\"\r\n                          formControlName=\"CRPERIOD\" placeholder=\"CRPERIOD\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!-- <div *ngIf=\"PType == 'V'\" class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Credit Balance:\r\n                      </label>\r\n                      <div class=\"col-sm-6\">\r\n                        <input type=\"number\" class=\"form-control\" formControlName=\"CBALANCE\" placeholder=\"CRPERIOD\" />\r\n                      </div>\r\n                    </div> -->\r\n\r\n                    <div class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">\r\n                        {{ formObj.PSType }} <a style=\"color: red\">*</a></label>\r\n                      <div class=\"col-sm-6\">\r\n                        <select class=\"form-control\" formControlName=\"PSTYPE\" style=\"height:30px;padding-bottom: 0px;\">\r\n                          <option value=\"local\">Local</option>\r\n                          <option value=\"interstate\">Interstate</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"PType == 'V'\" class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Branch:</label>\r\n                      <div class=\"col-sm-6\">\r\n                        <select class=\"form-control\" formControlName=\"DIV\" style=\"height:30px;padding-bottom: 0px;\">\r\n                          <option *ngFor=\"let i of BranchList\" value=\"{{ i.INITIAL }}\">{{ i.NAME }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">GST Type <a style=\"color: red\">*</a></label>\r\n                      <div class=\"col-sm-6\">\r\n                        <select class=\"form-control\" formControlName=\"GSTTYPE\" style=\"height:30px;padding-bottom: 0px;\">\r\n                          <option value=\"Regular\">Regular</option>\r\n                          <option value=\"Composite\">Composite</option>\r\n                          <option value=\"Unregistered\">Unregistered</option>\r\n                          <option value=\"UIN Holder\">UIN Holder</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <!-- *ngIf=\"PType == 'V'\" -->\r\n                    <div class=\"form-group row col-sm-6\" *ngIf=\"fromTree != 1 && fromTree != 2  \"   >\r\n                      <label class=\"col-sm-2 form-control-label\">Integration Type:</label>\r\n                      <div class=\"col-sm-6\">\r\n                        <select class=\"form-control\" formControlName=\"MAILTYPE\"\r\n                          style=\"height:30px;padding-bottom: 0px;\">\r\n                          <option value=\"None\">None</option>\r\n                          <option value=\"SAP\">SAP</option>\r\n                          <option CSV=\"None\">CSV</option>\r\n                          <option value=\"EDI\">EDI</option>\r\n                          <option value=\"Inline HTML\">Inline HTML</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-2 form-control-label\">Status:</label>\r\n                      <div class=\"col-sm-6\">\r\n                        <select class=\"form-control\" formControlName=\"ISACTIVE\"\r\n                          style=\"height:30px;padding-bottom: 0px;\">\r\n                          <option value=1>Active</option>\r\n                          <option value=0>Inactive</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"contact-details\">\r\n              <!-- Contact Details -->\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-6 form-control-label\">Address</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"TEMPADDRESS\" placeholder=\"Temp Address\" />\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"PType == 'C' && fromTree != 1 \" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-6 form-control-label\">Shipping Address:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"ADDRESS\"\r\n                        placeholder=\"Shipping Address\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-6 form-control-label\">State <a style=\"color: red\">*</a></label>\r\n                    <div class=\"col-sm-6\">\r\n\r\n                      <select class=\"form-control\" style=\"color:black\" name=\"STATE\" id=\"STATE\" formControlName=\"STATE\">\r\n                        <option *ngFor=\"let i of StateList\" value={{i.StateCode}}>{{i.StateName}}</option>\r\n                      </select>\r\n                      <!-- <div\r\n                        *ngIf=\"\r\n                          !form.controls['STATE'].valid &&\r\n                          form.controls['STATE']?.touched\r\n                        \"\r\n                        class=\"text-danger\"\r\n                      >\r\n                        <span *ngIf=\"form.get('STATE').hasError('required')\">\r\n                          State is required.\r\n                        </span>\r\n                      </div> -->\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">City:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"CITY\" placeholder=\"City\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">District:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <select formControlName=\"DISTRICT\" class=\"form-control\">\r\n                        <option *ngFor=\"let i of DistrictList\" value={{i.Name}} >{{i.Name}}</option>\r\n                        \r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Area:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"AREA\" placeholder=\"AREA\" />\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"PType == 'C'\" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Land Mark:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"LANDMARK\" placeholder=\"LandMark\" />\r\n                      <div *ngIf=\"\r\n                          !form.controls['LANDMARK'].valid &&\r\n                          form.controls['LANDMARK']?.touched\r\n                        \" class=\"text-danger\">\r\n                        <span *ngIf=\"form.get('LANDMARK').hasError('required')\">\r\n                          Postal Code is required.\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Phone:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"PHONE\" placeholder=\"PHONE\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Mobile <a style=\"color: red\">*</a></label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"MOBILE\" placeholder=\"MOBILE\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Email </label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"EMAIL\" placeholder=\"EMAIL\" />\r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div *ngIf=\"PType == 'V'\" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Fax</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"FAX\" placeholder=\"FAX\" />\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"PType == 'V'\" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Postal Code\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"POSTALCODE\" placeholder=\"POSTALCODE\" />\r\n                      <div *ngIf=\"\r\n                          !form.controls['POSTALCODE'].valid &&\r\n                          form.controls['POSTALCODE']?.touched\r\n                        \" class=\"text-danger\">\r\n                        <span *ngIf=\"form.get('POSTALCODE').hasError('required')\">\r\n                          Postal Code is required.\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"isGroup == 0\" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">TITLE:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <select class=\"form-control\" formControlName=\"TITLE\" style=\"height:30px;padding-bottom: 0px;\">\r\n                        <option value=\"Mr\">Mr.</option>\r\n                        <option value=\"Mrs\">Mrs.</option>\r\n                        <option value=\"Mrs\">Others.</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Contact Person </label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"CONTACTPERSON\" placeholder=\"Contact Person Name\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Person Mobile </label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"CONTACTMOBILE\" placeholder=\"Contact Persons Mobile\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Person Email </label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"CONTACTEMAIL\" placeholder=\"Contact Persons Email\" />\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"PType == 'V'&& userProfile.CompanyInfo.ORG_TYPE!= 'retailer' && fromTree != 2  \" class=\"form-group row col-sm-6\">\r\n                      <label class=\"col-sm-6 form-control-label\">ERP Stock Location Code</label>\r\n                      <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"ERPSTOCKLOCATIONCODE\" placeholder=\"ERP Stock Location Code\" />\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"gst\">\r\n              <!-- GST  -->\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">PANNO:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"VATNO\" placeholder=\"VNO\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">GST No:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"GSTNO\" placeholder=\"GSTNO\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-6 form-control-label\">Aadhar No:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"ADHARNO\" placeholder=\"ANO\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"other\">\r\n              <!-- OTHER  -->\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <!-- <div *ngIf=\"PType == 'C'\" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\"\r\n                      >Category/Channel:</label\r\n                    >\r\n                    <div class=\"col-sm-6\">\r\n                      <select\r\n                        class=\"form-control\"\r\n                        formControlName=\"Channel\"\r\n                        style=\"height:30px;padding-bottom: 0px;\"\r\n                      >\r\n                        <option>None</option>\r\n                        <option\r\n                          *ngFor=\"let i of ChannelList\"\r\n                          value=\"i.ChannelCode\"\r\n                          >{{ i.ChannelName }}</option\r\n                        >\r\n                      </select>\r\n                    </div>\r\n                  </div> -->\r\n\r\n                  <div *ngIf=\"PType == 'C'\" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Customer Type:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <select class=\"form-control\" formControlName=\"CTYPE\" style=\"height:30px;padding-bottom: 0px;\">\r\n                        <option value=\"RETAIL INVOICE\">RETAIL INVOICE</option>\r\n                        <option value=\"E-COMMERCE\">E-COMMERCE</option>\r\n                        <option value=\"EXEMPTED\">EXEMPTED</option>\r\n                        <option value=\"TAX INVOICE\">TAX INVOICE</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"PType == 'C' && fromTree != 1 \" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">Price Level:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <select class=\"form-control\" [(ngModel)]=\"geo\" [ngModelOptions]=\"{standalone:true}\"\r\n                        style=\"height:30px;padding-bottom: 0px;\" (change)=\"changePriceLevel()\">\r\n                        <option>None</option>\r\n                        <option *ngFor=\"let i of GeoList\" value=\"{{i.OrgTypeCode}}\">{{\r\n                          i.OrgTypeName\r\n                        }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div *ngIf=\"PType == 'C'\" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\"\r\n                      >Price Level Config:</label\r\n                    >\r\n                    <div class=\"col-sm-6\">\r\n                      <select\r\n                        class=\"form-control\"\r\n                        formControlName=\"PRICELEVELCONFIG\"\r\n                        style=\"height:30px;padding-bottom: 0px;\"\r\n                      >\r\n                        <option value=\"None\">None</option>\r\n                        <option value=\"Apply from Pricelevl Master\"\r\n                          >Apply from Pricelevl Master</option\r\n                        >\r\n                        <option value=\"Apply from Pricelevel Table\"\r\n                          >Apply from Pricelevel Table</option\r\n                        >\r\n                        <option value=\"Apply from PL.Table then PL.Master\"\r\n                          >Apply from PL.Table then PL.Master</option\r\n                        >\r\n                      </select>\r\n                    </div>\r\n                  </div>  -->\r\n                  <!-- <div *ngIf=\"PType == 'V'\" class=\"form-group row col-sm-6\">\r\n                    <label class=\"col-sm-2 form-control-label\">ERP Plant Code<a style=\"color: red\">*</a></label>\r\n                    <div class=\"col-sm-6\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"ERPPLANTCODE\" placeholder=\"SAP-CODE\" />\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"route\">\r\n              <!-- ROUTE -->\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group row col-sm-12\">\r\n                    <label class=\"col-sm-2 form-control-label\">Route:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <select class=\"form-control\" formControlName=\"ROUTE\" style=\"height:30px;padding-bottom: 0px;\"\r\n                        (change)=\"RouteClick($event.target.value)\">\r\n                        <option>None</option>\r\n                        <option *ngFor=\"let i of RouteList\" value=\"{{ i.RouteCode }}\">{{ i?.RouteName }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-12\">\r\n                    <label class=\"col-sm-2 form-control-label\">Sales Officer:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <select class=\"form-control\" formControlName=\"SO\" style=\"height:30px;padding-bottom: 0px;\"\r\n                        (change)=\"SOChange($event.target.value)\">\r\n                        <option>None</option>\r\n                        <option [value]=\"i.CODE\" *ngFor=\"let i of solist\">{{\r\n                          i.NAME\r\n                        }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-12\">\r\n                    <label class=\"col-sm-2 form-control-label\">Officer Code:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <select class=\"form-control\" formControlName=\"SO\" (change)=\"SOChange($event.target.value)\"\r\n                        style=\"height:30px;padding-bottom: 0px;\">\r\n                        <option>None</option>\r\n                        <option [value]=\"i.CODE\" *ngFor=\"let i of solist\">{{ i.CODE }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row col-sm-12\">\r\n                    <label class=\"col-sm-2 form-control-label\">Route Days:</label>\r\n                    <div class=\"col-sm-6\">\r\n                      <select class=\"form-control\" formControlName=\"RouteDays\" style=\"height:30px;padding-bottom: 0px;\">\r\n                        <option>Sunday</option>\r\n                        <option>Monday</option>\r\n                        <option>Tuesday</option>\r\n                        <option>Wednesday</option>\r\n                        <option>Thursday</option>\r\n                        <option>Friday</option>\r\n                        <option>Saturday</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"RouteAdd()\">\r\n                    Add\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group row col-sm-12\" style=\"border: 1px solid #cccccc;    height: 180px;\">\r\n                    <table style=\"width:100%;height: 110px;\">\r\n                      <tr>\r\n                        <th style=\"width:5%\">SNO</th>\r\n                        <th style=\"width:35%\">Route Name</th>\r\n                        <th style=\"width:35%\">Sales Officer</th>\r\n                        <th style=\"width:20%\">Officer Code</th>\r\n\r\n                        <th style=\"width:5%\"></th>\r\n                      </tr>\r\n                     <ng-container *ngIf=\"SOTableList.length\">\r\n                      <tr *ngFor=\"let i of SOTableList;let ind = index\">\r\n                        <td>1</td>\r\n                        <td>{{ i?.RouteName }}</td>\r\n                        <td>{{ i?.SONAME }}</td>\r\n                        <td>{{ i?.SOCODE }}</td>\r\n                        <td>\r\n                          <button class=\"glyphicon glyphicon-trash\" (click)=\"deleteSOList(ind)\"></button>\r\n                        </td>\r\n                      </tr>\r\n                     </ng-container>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ 1364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paged_list_component_base__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repositories__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_masters_components_PLedger_PLedger_service__ = __webpack_require__(1235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForAccountGroupPopUpComponent; });




var ForAccountGroupPopUpComponent = (function (_super) {
    __extends(ForAccountGroupPopUpComponent, _super);
    function ForAccountGroupPopUpComponent(injector, masterService, _Ledgerservice) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.masterService = masterService;
        _this._Ledgerservice = _Ledgerservice;
        /** List Declaration  */
        _this.isActive = false;
        _this.itemList = [];
        _this.selectedRowIndex = 0;
        _this.tabindex = "list";
        /** Output  */
        _this.onPopUpClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onItemDoubleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.popupsettings = {
            title: "Account Groups",
            apiEndpoints: "/getAccountItem/",
            defaultFilterIndex: 0,
            columns: [
                {
                    key: "ACNAME",
                    title: "Account Name",
                    hidden: false,
                    noSearch: false
                },
                // {
                //   key: "ACID",
                //   title: "CODE",
                //   hidden: false,
                //   noSearch: false
                // },
                {
                    key: "PARENT",
                    title: "PARENT",
                    hidden: false,
                    noSearch: false,
                }
            ]
        };
        return _this;
    }
    ForAccountGroupPopUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Ledgerservice.getAllAccountGroup().subscribe(function (res) {
            if (res.status == "ok") {
                _this.itemList = res.result.length > 0 ? res.result.filter(function (x) { return x.TYPE == "G"; }) : [];
            }
        });
    };
    ForAccountGroupPopUpComponent.prototype.show = function (currentItem) {
        if (currentItem === void 0) { currentItem = {}; }
        // this.popupsettings.apiEndpoints=`/getAccountItem/${this.Prefix}`,
        this.isActive = true;
        this.selectedRowIndex = 0;
        if (this.itemList.length > 0)
            return;
        this.refreshPage();
        this.refresh();
    };
    ForAccountGroupPopUpComponent.prototype.refreshAll = function () {
        this.refreshPage();
        this.refresh();
    };
    ForAccountGroupPopUpComponent.prototype.getData = function () {
        var _this = this;
        if (this.Prefix == '') {
            alert("Please select MainGroup first!");
            return;
        }
        this.selectedRowIndex = 0;
        if (this.itemList.length) {
            return;
        }
        this._Ledgerservice.getAccountLedgerItem(this.Prefix).subscribe(function (res) {
            if (res.status == "ok") {
                _this.itemList = res.result.length > 0 ? res.result.filter(function (x) { return x.TYPE == "G"; }) : [];
            }
        });
    };
    ForAccountGroupPopUpComponent.prototype.GetDataFromPrefix = function (Prefix) {
        var _this = this;
        this._Ledgerservice.getAccountLedgerItem(Prefix).subscribe(function (res) {
            if (res.status == "ok") {
                _this.itemList = res.result.length > 0 ? res.result.filter(function (x) { return x.TYPE == "G"; }) : [];
            }
        });
    };
    ForAccountGroupPopUpComponent.prototype.hide = function () {
        this.itemList = [];
        this.pageNumber = 1;
        this.totalItems = 0;
        this.isActive = false;
    };
    ForAccountGroupPopUpComponent.prototype.triggerSearch = function () {
        if (this.filterOption == null ||
            this.filterOption == undefined ||
            this.filterOption == "")
            return;
        if (this.filterValue == null ||
            this.filterValue == undefined ||
            this.filterValue == "")
            return;
        this.refreshPage();
        this.refresh();
    };
    ForAccountGroupPopUpComponent.prototype.singleClick = function (index, $event) {
        this.selectedRowIndex = index;
        this.onItemDoubleClick.emit($event);
    };
    ForAccountGroupPopUpComponent.prototype.doubleClick = function ($event) {
        this.onItemDoubleClick.emit($event);
        this.hide();
    };
    ForAccountGroupPopUpComponent.prototype.updown = function ($event) {
        if ($event.code == "ArrowDown" &&
            this.selectedRowIndex < this.pageSize - 1) {
            $event.preventDefault();
            this.selectedRowIndex++;
        }
        else if ($event.code == "ArrowDown") {
            $event.preventDefault();
            this.selectedRowIndex = 0;
            this.pageNumber = this.pageNumber + 1;
        }
        else if ($event.code == "ArrowUp" && this.selectedRowIndex - 1 > -1) {
            $event.preventDefault();
            this.selectedRowIndex--;
        }
        else if ($event.code == "ArrowUp") {
            $event.preventDefault();
            this.selectedRowIndex = 0;
            this.pageNumber = this.pageNumber > 0 ? this.pageNumber - 1 : this.pageNumber;
        }
        else if ($event.code == "Enter" &&
            this.selectedRowIndex >= 0 &&
            this.selectedRowIndex < this.itemList.length - 1) {
            $event.preventDefault();
            var itemIndex = ((this.pageNumber - 1) * this.pageSize) + (this.selectedRowIndex);
            this.onItemDoubleClick.emit(this.itemList[this.selectedRowIndex]);
            this.hide();
            this.itemListClosed();
        }
    };
    ForAccountGroupPopUpComponent.prototype.itemListClosed = function () {
        this.onPopUpClose.emit();
    };
    return ForAccountGroupPopUpComponent;
}(__WEBPACK_IMPORTED_MODULE_1__paged_list_component_base__["a" /* PagedListingComponentBase */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ForAccountGroupPopUpComponent.prototype, "onPopUpClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ForAccountGroupPopUpComponent.prototype, "onItemDoubleClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ForAccountGroupPopUpComponent.prototype, "Prefix", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ForAccountGroupPopUpComponent.prototype, "updown", null);
ForAccountGroupPopUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "for-account-group-popup-grid",
        template: __webpack_require__(1701),
        styles: [__webpack_require__(9), __webpack_require__(39)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_2__repositories__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_3__pages_masters_components_PLedger_PLedger_service__["a" /* PLedgerservice */]])
], ForAccountGroupPopUpComponent);



/***/ }),

/***/ 1365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repositories__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_group_popup_grid_component__ = __webpack_require__(1460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_directives_pipes_pipes__ = __webpack_require__(1362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ForAccountLedger_component__ = __webpack_require__(1364);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountGroupPopupGridModule; });









var AccountGroupPopupGridModule = AccountGroupPopupGridModule_1 = (function () {
    function AccountGroupPopupGridModule() {
    }
    AccountGroupPopupGridModule.forRoot = function () {
        return {
            ngModule: AccountGroupPopupGridModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_3__repositories__["a" /* MasterRepo */]]
        };
    };
    return AccountGroupPopupGridModule;
}());
AccountGroupPopupGridModule = AccountGroupPopupGridModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__account_group_popup_grid_component__["a" /* AccountGroupPopUpComponent */], __WEBPACK_IMPORTED_MODULE_8__ForAccountLedger_component__["a" /* ForAccountGroupPopUpComponent */], __WEBPACK_IMPORTED_MODULE_7__theme_directives_pipes_pipes__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_7__theme_directives_pipes_pipes__["b" /* SortByPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__account_group_popup_grid_component__["a" /* AccountGroupPopUpComponent */], __WEBPACK_IMPORTED_MODULE_8__ForAccountLedger_component__["a" /* ForAccountGroupPopUpComponent */]]
    })
], AccountGroupPopupGridModule);

var AccountGroupPopupGridModule_1;


/***/ }),

/***/ 1420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_style_loader_smartTables_scss__ = __webpack_require__(1456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_style_loader_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_style_loader_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ng2_smart_table___ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ng2_smart_table____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_ng2_smart_table___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modaldialogs_authorizationDialog_authorizationDialog_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PLedger_PLedger_service__ = __webpack_require__(1235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALedgerTableComponent; });









var ALedgerTableComponent = (function () {
    function ALedgerTableComponent(_Ledgerservice, router, dialog) {
        var _this = this;
        this._Ledgerservice = _Ledgerservice;
        this.router = router;
        this.dialog = dialog;
        this.settings = {
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
                editButtonContent: 'Edit',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            delete: {
                deleteButtonContent: ' ',
                confirmDelete: true
            },
            columns: {
                ACNAME: {
                    title: 'NAME',
                    type: 'string'
                },
                ACCODE: {
                    title: 'ACCODE',
                    type: 'string'
                },
                TYPE: {
                    title: 'Type',
                    type: 'string',
                    valuePrepareFunction: function (value) {
                        switch (value) {
                            case "A":
                                return 'Asset';
                            case "G":
                                return 'Group';
                            default:
                                return '';
                        }
                    },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'All',
                            list: [
                                { value: 'A', title: 'Asset' },
                                { value: 'G', title: 'Group' },
                            ]
                        }
                    }
                },
                ACTYPE: {
                    title: 'AC Type',
                    type: 'string',
                    valuePrepareFunction: function (value) {
                        switch (value) {
                            case "AT":
                                return 'Asset';
                            case "LB":
                                return 'Liability';
                            case "DI":
                                return 'Direct Income';
                            case "DE":
                                return 'Direct Expense';
                            case "II":
                                return 'Indirect Income';
                            case "IE":
                                return 'Indirect Expense';
                            default:
                                return '';
                        }
                    },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'All',
                            list: [
                                { value: 'AT', title: 'Asset' },
                                { value: 'LB', title: 'Liability' },
                                { value: 'DI', title: 'Direcct Income' },
                                { value: 'DE', title: 'Direct Expense' },
                                { value: 'II', title: 'Indirect Income' },
                                { value: 'IE', title: 'Indirect Expense' },
                            ]
                        }
                    }
                },
                HASSUBLEDGER: {
                    title: 'Has Subledger',
                    type: 'string',
                    valuePrepareFunction: function (value) { return value == 1 ? 'Yes' : value == 0 ? 'No' : ''; },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'All',
                            list: [
                                { value: 1, title: 'Yes' },
                                { value: 0, title: 'No' },
                            ]
                        }
                    }
                },
                ISACTIVE: {
                    title: 'STATUS',
                    type: 'string',
                    valuePrepareFunction: function (value) { return value == true ? 'Active' : value == false ? 'InActive' : ''; },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'All',
                            list: [
                                { value: true, title: 'Active' },
                                { value: false, title: 'InActive' },
                            ]
                        }
                    }
                }
            }
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_2__node_modules_ng2_smart_table___["LocalDataSource"]();
        this.messageSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]("You are not authorized.");
        this.message$ = this.messageSubject.asObservable();
        this.MainGrpList = [];
        try {
            ////console.log("Ptype", this.PType)
            if (this.PType == 'C')
                this.partyName = 'New Customer';
            else if (this.PType == 'V')
                this.partyName = 'New Supplier';
            var data_1 = [];
            this._Ledgerservice.getAllAccount().subscribe(function (res) {
                if (res.status == "ok") {
                    data_1 = res.result;
                    _this.source.load(data_1);
                    ////console.log("PledgerTable", data)
                }
            });
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    }
    ALedgerTableComponent.prototype.setMode = function () {
        try {
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ALedgerTableComponent.prototype.onAddClick = function () {
        try {
            this.router.navigate(["./pages/masters/AccountLedger/Account", { mode: "add", isGroup: 0, Title: 'Create Account', returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ALedgerTableComponent.prototype.onGrpAddClick = function () {
        try {
            this.router.navigate(["./pages/masters/AccountLedger/Account", { mode: "add", isGroup: 1, PType: 'G', Title: 'Create Account Group', returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ALedgerTableComponent.prototype.onDeleteConfirm = function (event) {
        try {
            if (window.confirm('Are you sure you want to delete?')) {
                event.confirm.resolve();
            }
            else {
                event.confirm.reject();
            }
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ALedgerTableComponent.prototype.onViewClick = function () {
        try {
            this.router.navigate(["./pages/masters/AccountLedger/Account", { mode: "view", isGroup: 1, PType: 'G', Title: 'Create Account Group', returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ALedgerTableComponent.prototype.onEditClick = function (event) {
        try {
            this.router.navigate(["./pages/masters/AccountLedger/Account",
                {
                    mode: "edit",
                    isGroup: event.data.TYPE == "G" ? 1 : 0,
                    PType: event.data.TYPE,
                    ACID: event.data.ACID,
                    Title: event.data.TYPE == "G" ? 'Edit Account Group' : 'Edit Account',
                    returnUrl: this.router.url
                }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    ALedgerTableComponent.prototype.openAuthDialog = function () {
        var message = { header: "Information", message: this.message$ };
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modaldialogs_authorizationDialog_authorizationDialog_component__["a" /* AuthDialog */], { hasBackdrop: true, data: message });
    };
    return ALedgerTableComponent;
}());
ALedgerTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ALedgerTable',
        template: __webpack_require__(1817),
        styles: [__webpack_require__(120)],
        providers: [__WEBPACK_IMPORTED_MODULE_7__PLedger_PLedger_service__["a" /* PLedgerservice */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__PLedger_PLedger_service__["a" /* PLedgerservice */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */]])
], ALedgerTableComponent);

/*public actions: Array<PageAction> = [];
private router: Router;
constructor(router: Router) {
super();
let self: Divisions = this;
self.router = router;
self.model = new DivisionsModel(self.i18nHelper);
//self.registerEvent(self.model.event)
self.loadDivisions();
this.model.addPageAction(new PageAction("btnAddDivision", "masters.divisions.addDivisionAction", () => self.onAddNewDivisionClicked()));

}

onAddNewDivisionClicked() {
this.router.navigate([route.division.addDivision.name]);
}

onEditDivisionClicked(event: any) {
this.router.navigate([route.division.editDivision.name, { id: event.item.initial }]);
}

onDeleteDivisionClicked(event: any) {
let self: Divisions = this;
divisionsService.delete(event.item.id).then(function () {
self.loadDivisions();
});

}
private loadDivisions() {
let self: Divisions = this;
divisionsService.getDivision().then(function (items: Array<any>) {

self.model.importDivisions(items);
});
}
}*/ 


/***/ }),

/***/ 1421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_contextmenu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component_base__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AccLedger_service__ = __webpack_require__(1298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccNewLedgerComponent; });














var actionMapping = {
    mouse: {
        contextMenu: function (tree, node, $event) {
            $event.preventDefault();
            alert("context menu for " + node.data.ACNAME);
        },
        dblClick: function (tree, node, $event) {
            if (node.hasChildren)
                __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
        },
        click: function (tree, node, $event) {
            $event.shiftKey
                ? __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_SELECTED_MULTI(tree, node, $event)
                : __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_SELECTED(tree, node, $event);
        }
    },
    keys: (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["b" /* KEYS */].ENTER] = function (tree, node, $event) { return node.setActiveAndVisible(); },
        _a)
};
var AccNewLedgerComponent = (function (_super) {
    __extends(AccNewLedgerComponent, _super);
    function AccNewLedgerComponent(masterService, _alertService, _spinerService, _authService, router, AccountService, injector, MasterService) {
        var _this = _super.call(this, injector) || this;
        _this.masterService = masterService;
        _this._alertService = _alertService;
        _this._spinerService = _spinerService;
        _this._authService = _authService;
        _this.router = router;
        _this.AccountService = AccountService;
        _this.injector = injector;
        _this.MasterService = MasterService;
        _this.gridACListPopupSettings = new __WEBPACK_IMPORTED_MODULE_12__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        _this.DialogMessage = "You are not authorized";
        _this.addMode = false;
        _this.loadListSubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        _this.areaList = [];
        _this.loadList$ = _this.loadListSubject.asObservable();
        _this.isLoader = true;
        _this.currentPage = 1;
        _this.itemsPerPage = 200;
        // showPartyLedgerFilterpopUp: boolean;
        _this.LedgerFilterObj = {};
        _this.FormName = {};
        _this.settings = {
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
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true
            },
            pager: {
                display: true,
                perPage: 14
            },
            columns: {
                ACNAME: {
                    title: 'PARTY NAME',
                    type: 'number'
                },
                ADDRESS: {
                    title: 'ADDRESS',
                    type: 'string'
                },
                VATNO: {
                    title: 'VAT NO',
                    type: 'string'
                },
                PartyType: {
                    title: 'PARTY TYPE',
                    type: 'string'
                },
                Category: {
                    title: 'CATEGORY',
                    type: 'string',
                    width: '20px'
                },
                Parent: {
                    title: 'PARTY GROUP',
                    type: 'string',
                    width: '20px'
                }
            }
        };
        _this._treeEnable = true;
        // disableSubGroupA: boolean = true;
        // disableSubGroupB: boolean = true;
        // disableSubGroupC: boolean = true;
        _this.parentGroupID = "";
        _this.nodes = [];
        _this.source = new __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__["b" /* LocalDataSource */]();
        _this.division = [];
        _this.GeoList = [];
        _this.ParentList = [];
        _this.SubGroupAccountMaster = [];
        _this.ChildrenList = [];
        _this.asyncChildren = [
            {
                name: 'child2.1',
                subTitle: 'new and improved'
            }, {
                name: 'child2.2',
                subTitle: 'new and improved2'
            }
        ];
        _this.customTemplateStringOptions = {
            displayField: 'ACNAME',
            isExpandedField: 'expanded',
            idField: 'uuid',
            getChildren: _this.getChildren.bind(_this),
            actionMapping: actionMapping,
            allowDrag: false
        };
        _this.contextMenuActions = [
            {
                html: function (item) { return "Edit"; },
                tag: 'edit',
                enabled: function (item) { return true; },
                visible: function (item) { return true; },
            },
            {
                divider: true,
                visible: true,
            },
            {
                html: function (item) { return "Delete"; },
                tag: 'delete',
                enabled: function (item) { return true; },
                visible: function (item) { return true; },
            },
        ];
        _this.searchParty = "searchByName";
        _this.AccountService.sortAccount = "sortByName";
        _this.masterService.getAccountListTree().map(function (x) { return x; });
        _this.busy = _this.masterService.getAccountListTree().map(function (x) { return x; })
            .subscribe(function (res) {
            // //console.log(res);
            _this.nodes = res;
            // //console.log(this.nodes);
            if (_this.tree != null) {
                _this.tree.treeModel.update();
            }
            // //console.log(this.tree);
        }, function (error) {
            _this.masterService.resolveError(error, "partyLedger - PartyLedger");
        });
        _this.division = [];
        _this.masterService.getAllDivisions()
            .subscribe(function (res) {
            _this.division.push(res);
        }, function (error) {
            _this.masterService.resolveError(error, "divisions - getDivisions");
        });
        _this.AccountService.getHierachy().subscribe(function (res) {
            if (res.status == "ok") {
                _this.GeoList = res.result.GEO;
            }
        });
        // this.getTreeItem();
        _this.AccountService.loadTableListSubject.subscribe(function (x) {
            // //console.log("CheckXValu5",x);
        });
        _this.AccountService.getMainGroupList().subscribe(function (response) {
            // //console.log("Main group,", response);
            if (response.length > 0) {
                _this.masterService.mainGroupList = response;
            }
            else {
                _this.masterService.mainGroupList = [];
            }
        });
        _this.userSetting = _this._authService.getSetting();
        return _this;
    }
    Object.defineProperty(AccNewLedgerComponent.prototype, "treeEnable", {
        get: function () { return this._treeEnable; },
        set: function (value) { this._treeEnable = value; },
        enumerable: true,
        configurable: true
    });
    AccNewLedgerComponent.prototype.getTreeItem = function () {
        this.AccountService.Refresh();
        this.busy = this.AccountService.busy;
        this.nodes = this.AccountService.nodes;
        this.tree = this.AccountService.tree;
    };
    AccNewLedgerComponent.prototype.ngOnInit = function () {
        this.AccountService.subTitle = "";
        var data = [];
        // this.loadListSubject.switchMap(snode => {
        //   data = [];
        //   ////console.log("reach here");
        //   return this.AccountService.getParentWisePartyList(snode.ACID)
        // })
        //   .subscribe(res => {
        //     data.push(<any>res);
        //     this.source.load(data);
        //   })
        // try { 
        //   let apiUrl = `${this.apiUrl}/getAllGeographicalHierarchyPagedList/${snode.ACID}`;
        //   this.source =  this.source = new ServerDataSource(this._http, 
        //     { endPoint: apiUrl, 
        //       dataKey : "data", 
        //       pagerPageKey : "currentPage",
        //       pagerLimitKey : "maxResultCount"
        //     }); 
        // } catch (ex) {
        //   //console.log(ex);
        //   alert(ex);
        // }
    };
    AccNewLedgerComponent.prototype.ngAfterViewInit = function () {
        // document.getElementsByClassName('ACNAME')['0'].style.width = '20%';
        // document.getElementsByClassName('ADDRESS')['0'].style.width = '20%';
        // document.getElementsByClassName('VATNO')['0'].style.width = '8%';
        // document.getElementsByClassName('PartyType')['0'].style.width = '10%';
        // document.getElementsByClassName('Category')['0'].style.width = '8%';
        // document.getElementsByClassName('Parent')['0'].style.width = '20%';
        // this.ledgercomponent.getParentName();
    };
    AccNewLedgerComponent.prototype.getPartyPagedList = function () {
        var _this = this;
        // let apiUrl = `${this.apiUrl}/getParentWiseAccountPagedList/${this.selectedNode.ACID}`;  
        // this.source  = new ServerDataSource(this._http, 
        //   { endPoint: apiUrl, 
        //     dataKey : "data", 
        //     pagerPageKey : "currentPage",
        //     pagerLimitKey : "maxResultCount"
        //   }); 
        var data = [];
        // this.masterService.getAcidWisePartyList(this.selectedNode.ACID)
        // .subscribe(res => {
        //   data.push(<any>res);
        //   this.source.load(data);
        // }, error => {
        //   this.masterService.resolveError(error, "divisions - getDivisions");
        // }
        // );
        this.masterService.getAcidWiseAccountList(this.selectedNode.ACID).subscribe(function (res) {
            if (res.status == "ok") {
                data = res.result;
                _this.source.load(data);
                _this.AccountService.partyList = res ? res.result : [];
                ////console.log("PledgerTable",data)
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
        ////console.log("sourcevalue",this.source);
    };
    AccNewLedgerComponent.prototype.getChildren = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.asyncChildren.map(function (c) {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })); }, 1000);
        });
    };
    AccNewLedgerComponent.prototype.addNode = function (addednode) {
        ////console.log("node reached")
        this.tree.treeModel.getFocusedNode().data.children.push(addednode);
        this.tree.treeModel.update();
    };
    AccNewLedgerComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    AccNewLedgerComponent.prototype.filterNodes = function (value, tree) {
        try {
            // displayField: 'ACNAME', is required
            this.tree.treeModel.filterNodes(value, true);
        }
        catch (ex) {
            ////console.log("PartyFilter", ex);
            alert("PartyFilter-" + ex);
        }
    };
    AccNewLedgerComponent.prototype.activateSubSub = function (tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    AccNewLedgerComponent.prototype.onEvent = function ($event) {
        //console.log.bind(console);
    };
    AccNewLedgerComponent.prototype.onselect = function (tree, $event) {
        //this.source = new ServerDataSource();
        console.log("CheckTree", this.tree);
        this.overdraftIs = '';
        this.selectedNode = tree.treeModel.getFocusedNode().data;
        console.log("on tree click", this.selectedNode);
        this.masterService.SelectedGroup = this.selectedNode.ACID;
        this.getRootParent(this.selectedNode, this.nodes);
        this.loadListSubject.next(this.selectedNode);
        this.AccountService.ParentInfo = this.selectedNode;
        this.getPartyPagedList();
        this.AccountService.sortAccount = "sortByName";
        if (this.selectedNode.ACID == 'AG013' || (this.selectedNode.PARENT ? this.selectedNode.PARENT.ACID == 'AG013' : this.selectedNode.MAPID == 'OD') || this.selectedNode.MAPID == 'OD') {
            this.overdraftIs = 'OD';
        }
        if (this.selectedNode.ACID == 'AG006' || this.selectedNode.MAPID == 'B') {
            this.isBank = true;
        }
        else {
            this.isBank = false;
        }
    };
    AccNewLedgerComponent.prototype.getList = function (selNod) {
        var _this = this;
        //$event.stopPropagation();
        var data = [];
        this.AccountService.getParentWisePartyList(selNod.ACID)
            .subscribe(function (res) {
            data.push(res);
            _this.source.load(data);
        });
    };
    AccNewLedgerComponent.prototype.getRootParent = function (node, list) {
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
    AccNewLedgerComponent.prototype.loopingChild = function (node, cList, root) {
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
    AccNewLedgerComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    AccNewLedgerComponent.prototype.onTreeEnable = function (value) {
        this.treeEnable = value;
    };
    AccNewLedgerComponent.prototype.AddLedger = function () {
        if (this.masterService.validateMasterCreation("create") == false) {
            return;
        }
        if (this.selectedNode.ACID == 'AG01001' || this.selectedNode.ACID == 'AG01002') {
            this._alertService.warning("Cannot add account under this group");
            return;
        }
        this.addMode = true;
        this.modeTitle = "AddLedger";
        this.AccountService.subTitle = ">> Add New Ledger A/C";
        this.mode = "add";
        this.grp = "A";
        this.AccountService.isGroup = false;
        this.masterService.focusAnyControl("ACCODE");
    };
    AccNewLedgerComponent.prototype.AddGroup = function (trees) {
        if (this.masterService.validateMasterCreation("create") == false) {
            return;
        }
        if (this.selectedNode.ACID == 'AG01001' || this.selectedNode.ACID == 'AG01002') {
            this._alertService.warning("Cannot add group under this group");
            return;
        }
        this.addMode = true;
        this.modeTitle = "AddGroup";
        this.AccountService.subTitle = ">> Add New Account Group";
        this.mode = "add";
        this.grp = "G";
        this.AccountService.isGroup = true;
        this.masterService.focusAnyControl("ACCODE");
        this.AccountService.addGroupSubject.next(true);
    };
    AccNewLedgerComponent.prototype.onEditClick = function (party) {
        if (this.masterService.validateMasterCreation("edit") == false) {
            return;
        }
        this.addMode = true;
        this.mode = "edit";
        this.AccountService.subTitle = ">> Edit Ledger A/C";
        // this.selectedNode = event.data;
        // //console.log("@selected party for edit", party);
        this.selectedNode = party;
        this.selectedNode.PARENT_CODE = party.PARENTID;
        this.MasterService.SelectedGroup = party.PARENTID;
        ////console.log("selectedNode",this.selectedNode);
        this.grp = "A";
    };
    AccNewLedgerComponent.prototype.onViewClick = function (party) {
        this.addMode = true;
        this.mode = "view";
        this.AccountService.subTitle = ">> View Ledger A/C";
        // this.selectedNode = event.data;
        this.selectedNode = party;
        this.selectedNode.PARENT_CODE = party.PARENTID;
        this.MasterService.SelectedGroup = party.PARENTID;
        this.grp = "A";
    };
    AccNewLedgerComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AccNewLedgerComponent.prototype.onAddClose = function (event) {
        var _this = this;
        this.addMode = false;
        this.mode = "";
        this.masterService.groupSelectObj = {};
        this.masterService.disableSubGroupA = true;
        this.masterService.disableSubGroupB = true;
        this.masterService.disableSubGroupC = true;
        this.parentGroupID = "";
        this.selectedNode = undefined;
        this.masterService.getAcidWiseAccountList(event, "sortItemByDate").subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
    };
    AccNewLedgerComponent.prototype.contextMenuClick = function (selecteddata, selectedmenu) {
        var _this = this;
        if (selectedmenu.tag == "edit") {
            if (selecteddata.LEVELS == 1) {
                this._alertService.warning("Cannot edit Main Group");
                return;
            }
            // //console.log("Edit Context menu", selecteddata)
            this.addMode = true;
            this.modeTitle = "AddGroup";
            this.AccountService.subTitle = ">> Edit Account Group";
            this.mode = "edit";
            this.selectedNode = selecteddata;
            this.selectedNode.PARENT_CODE = selecteddata.PARENTID;
            ////console.log("selecteddata",selecteddata)
            this.grp = "G";
        }
        else if (selectedmenu.tag == "delete") {
            var childrenPartyList_1 = [];
            var childreenList_1 = [];
            this.masterService.getChildrenPartyAccount(this.selectedNode.ACID).subscribe(function (res) {
                if (res) {
                    childrenPartyList_1 = res.result;
                    ////console.log("partylist",childrenPartyList)
                    if (childrenPartyList_1.length > 0) {
                        _this._alertService.info("PARTY ACCOUNT EXIST UNDER SELECTED PARTY GROUP. HENCE, REQUESTED COMMAND IS ABORTED");
                    }
                    else {
                        ////console.log("children",this.selectedNode.children);
                        childreenList_1 = _this.selectedNode.children;
                        if (childreenList_1.length > 0) {
                            _this._alertService.info("PARTY ACCOUNT EXIST UNDER SELECTED PARTY GROUP. HENCE, REQUESTED COMMAND IS ABORTED");
                        }
                        else {
                            _this.DeleteAcc.show();
                        }
                    }
                }
            });
        }
    };
    AccNewLedgerComponent.prototype.SavePartyEmit = function (value) {
        // //console.log("Party$$$$", value, this.tree)
        if (value.type == "G") {
            this.Refresh();
            this.loadListSubject.next(this.selectedNode);
        }
        else {
            var childAccountList = this.masterService.PartialAccountList.filter(function (a) { return a.PARENT == value.value.PARENT; });
            if (childAccountList.length > 0) {
                ////console.log("Data from Array");
                this.loadListSubject.next(this.selectedNode);
            }
        }
    };
    AccNewLedgerComponent.prototype.EditPartyEmit = function () {
        this.Refresh();
    };
    AccNewLedgerComponent.prototype.getGivenNode = function (nodeid, list, savedNode) {
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var ag = list_2[_i];
            // //console.log({ 'recusiveIteration': ag.ACID })
            ////console.log("ag", ag)
            if (ag.ACID == nodeid) {
                ag.children.push(savedNode);
                // //console.log('requiredvalue', ag);
                return ag;
            }
            else if (ag.children && ag.children.length > 0) {
                var node = this.getGivenNode(nodeid, ag.children, savedNode);
                if (node) {
                    return node;
                }
            }
        }
        return null;
    };
    AccNewLedgerComponent.prototype.DeleteYes = function () {
        var _this = this;
        this.DeleteAcc.hide();
        this._spinerService.show("Deleting Data please wait...");
        this.masterService.deleteAccount(this.selectedNode.ACID).subscribe(function (data) {
            if (data.status == "ok") {
                _this._alertService.success("Data Deleted Successfully");
                _this._spinerService.hide();
                _this.Refresh();
            }
            else {
                //alert(data.result);
                //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                if (data.result._body ==
                    "The ConnectionString property has not been initialized.") {
                    _this.router.navigate(["/login", _this.router.url]);
                    return;
                }
                //Some other issues need to check
                _this._alertService.error("Error in Deleting Data:" + data.result._body);
            }
        });
    };
    AccNewLedgerComponent.prototype.DeleteNo = function () {
        this.DeleteAcc.hide();
    };
    AccNewLedgerComponent.prototype.onClickNo = function () {
        this.DeleteAcc.hide();
    };
    AccNewLedgerComponent.prototype.Refresh = function () {
        var _this = this;
        this.masterService._accountPartyTree = [];
        this.masterService.getPartyTreeObservable = null;
        //this.masterService.getpartyListTree().map(x => { return x })
        this.busy = this.masterService.getAccountListTree().map(function (x) { return x; })
            .subscribe(function (res) {
            // //console.log(res);
            _this.nodes = res;
            // //console.log(this.nodes);
            if (_this.tree != null) {
                _this.tree.treeModel.update();
            }
            // //console.log(this.tree);
        }, function (error) {
            _this.masterService.resolveError(error, "AccountLedger - AccountLedger");
        });
    };
    AccNewLedgerComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            //event.confirm.resolve();
            event.data.ISACTIVE = 0;
            this._spinerService.show("please Wait..");
            this.masterService.inActiveAccount(event.data.ISACTIVE, event.data.ACCODE, event.data.ACID).subscribe(function (res) {
                if (res.status == "ok") {
                    _this._spinerService.hide();
                    _this._alertService.info("Deleted successfully..");
                    _this.getPartyPagedList();
                }
                else {
                    ////console.log("response",res.result._body)
                    _this._spinerService.hide();
                    _this._alertService.info(res.result._body);
                }
            });
        }
        else {
            // event.confirm.reject();
        }
    };
    AccNewLedgerComponent.prototype.partyPagination = function (event) {
        this.isLoader = true;
        this.currentPage = event;
        var t = this;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(function () {
            t.isLoader = false;
        }, 500);
    };
    AccNewLedgerComponent.prototype.backToDashboard = function () {
        this.router.navigate(["pages/dashboard"]);
    };
    AccNewLedgerComponent.prototype.handleKeyDownboardEvent = function ($event) {
        if ($event.code == 'F10') {
            $event.preventDefault();
            this.backToDashboard();
        }
    };
    AccNewLedgerComponent.prototype.ExportAll = function () {
        var _this = this;
        this.FormName.data = "Account";
        var filterObjData = { data: this.FormName, filtername: "AllAccountList" };
        this.masterService.getExcelFile('/getAllLegerList', filterObjData).subscribe(function (data) {
            _this._alertService.hide();
            _this.masterService.downloadFile(data);
            _this.CancelCommand();
        }, function (error) {
            _this._alertService.hide();
        });
    };
    AccNewLedgerComponent.prototype.OkCommand = function () {
        var _this = this;
        this.LedgerFilterObj.FILTER = "Account";
        var filterObjData = { data: this.LedgerFilterObj };
        this.masterService.getExcelFileFilter('/getLedgerByFilter', filterObjData).subscribe(function (data) {
            _this._alertService.hide();
            _this.masterService.downloadFile(data);
            _this.CancelCommand();
        }, function (error) {
            _this._alertService.info("Data not found");
        });
        this.showAccountLedgerFilterpopUp = false;
    };
    AccNewLedgerComponent.prototype.CancelCommand = function () {
        this.LedgerFilterObj = {};
        this.FormName = {};
        this.showAccountLedgerFilterpopUp = false;
    };
    AccNewLedgerComponent.prototype.showAcList = function (i) {
        var TRNMODE = "";
        if (this.LedgerFilterObj.type == "Customer") {
            TRNMODE = "Customer_Pay";
        }
        else if (this.LedgerFilterObj.type == "Supplier") {
            TRNMODE = "SupplierListOnly";
        }
        // //console.log("TRNMODE",TRNMODE)
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
    AccNewLedgerComponent.prototype.onAcSelect = function (acItem) {
        this.LedgerFilterObj.accountName = acItem.ACNAME;
        this.LedgerFilterObj.ACID = acItem.ACID;
    };
    AccNewLedgerComponent.prototype.changeType = function () {
        this.LedgerFilterObj.accountName = "";
        this.LedgerFilterObj.ACID = "";
        this.LedgerFilterObj.accountType = "";
    };
    AccNewLedgerComponent.prototype.sortProductListByDate = function () {
        //console.log("CheckvalueFromTable",this.AccountService.partyList)
    };
    AccNewLedgerComponent.prototype.getSubgroupA = function (e) {
        var _this = this;
        var mainGroupID = e.target.value;
        this.parentGroupID = mainGroupID;
        // let acname=this.masterService.mainGroupList.filter(x=>x.ACID==e.target.value)[0].ACNAME;
        // this.masterService.groupSelectObj.MGROUP=acname;
        this.AccountService.getSubGroupList(mainGroupID).subscribe(function (res) {
            if (res.length > 0) {
                // //console.log("list A", res);
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
    };
    AccNewLedgerComponent.prototype.getSubgroupB = function (e) {
        var _this = this;
        var subGroupID = e.target.value;
        this.parentGroupID = subGroupID;
        // this.masterService.groupSelectObj.SUBGROUP_A = e.target.value;
        // //console.log("sub group A selected", this.parentGroupID)
        this.AccountService.getSubGroupList(this.parentGroupID).subscribe(function (res) {
            if (res.length > 0) {
                // //console.log("list B", res);
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
    };
    AccNewLedgerComponent.prototype.getSubgroupC = function (e) {
        var _this = this;
        var subGroupID = e.target.value;
        if (subGroupID == 'AG01001' || subGroupID == 'AG01002') {
            this._alertService.warning("Cannot add account under this group");
            return;
        }
        this.parentGroupID = subGroupID;
        // this.masterService.groupSelectObj.SUBGROUP_B = e.target.value;
        //console.log("sub group B selected", this.parentGroupID)
        this.AccountService.getSubGroupList(this.parentGroupID).subscribe(function (res) {
            if (res.length > 0) {
                // //console.log("list C", res);
                _this.masterService.subGroupCList = res;
                _this.masterService.disableSubGroupC = false;
            }
            else {
                _this.masterService.subGroupCList = [];
                _this.masterService.disableSubGroupC = true;
                _this.masterService.groupSelectObj.SUBGROUP_C = "";
            }
        });
    };
    AccNewLedgerComponent.prototype.selectSubgroupC = function (e) {
        var subGroupID = e.target.value;
        this.parentGroupID = subGroupID;
        // this.masterService.groupSelectObj.SUBGROUP_C = e.target.value;
    };
    AccNewLedgerComponent.prototype.sortAccountListByName = function () {
        var _this = this;
        // //console.log("ACID k ?", this.selectedNode);
        this.masterService.getAcidWiseAccountList(this.selectedNode.ACID).subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
    };
    AccNewLedgerComponent.prototype.sortAccountListByDate = function () {
        var _this = this;
        // //console.log("ACID k @@@", this.selectedNode);
        this.masterService.getAcidWiseAccountList(this.selectedNode.ACID, "sortItemByDate").subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
    };
    AccNewLedgerComponent.prototype.showAllAccountList = function () {
        var _this = this;
        this.selectedNode = {};
        this.selectedNode.ACID = 'AL';
        // this.masterService.SelectedGroup = this.selectedNode.ACID;
        this.loadListSubject.next(this.selectedNode);
        this.masterService.getAcidWiseAccountList('AL').subscribe(function (res) {
            if (res.status == "ok") {
                _this.AccountService.partyList = res ? res.result : [];
            }
            else {
                _this.AccountService.partyList = [];
            }
        });
    };
    AccNewLedgerComponent.prototype.ExportAccountLedger = function () {
        var _this = this;
        this.masterService.getAccountListOfTree().subscribe(function (res) {
            _this.ParentList = res;
        });
        this.showAccountLedgerFilterpopUp = true;
    };
    AccNewLedgerComponent.prototype.changeAccountType = function () {
        this.LedgerFilterObj.SUBGROUP = "";
        this.LedgerFilterObj.ACID = "";
    };
    AccNewLedgerComponent.prototype.changeAccountGroup = function (event) {
        var _this = this;
        this.LedgerFilterObj.SUBGROUP = "";
        this.LedgerFilterObj.ACID = "";
        this.masterService.getSubGroupForQuickAccountMaster(this.LedgerFilterObj.MAINGROUP).subscribe(function (res) {
            _this.SubGroupAccountMaster = res.result;
        });
        this.masterService.getAcidWiseAccountList(event).subscribe(function (res) {
            // let abc = res.filter(x => x.ACID == this.LedgerFilterObj.MAINGROUP);
            // this.ChildrenList = abc.length > 0 && abc[0].children.filter(x => x.TYPE == "A");
            _this.ChildrenList = res.result;
        });
    };
    return AccNewLedgerComponent;
}(__WEBPACK_IMPORTED_MODULE_11__app_component_base__["a" /* AppComponentBase */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], AccNewLedgerComponent.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_ngx_contextmenu__["b" /* ContextMenuComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ngx_contextmenu__["b" /* ContextMenuComponent */])
], AccNewLedgerComponent.prototype, "contextMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('DeleteAcc'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], AccNewLedgerComponent.prototype, "DeleteAcc", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridACList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AccNewLedgerComponent.prototype, "genericGridACList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["c" /* TreeComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["c" /* TreeComponent */])
], AccNewLedgerComponent.prototype, "tree", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AccNewLedgerComponent.prototype, "handleKeyDownboardEvent", null);
AccNewLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "AccLedgerNew",
        template: __webpack_require__(1819),
        styles: [__webpack_require__(9), __webpack_require__(120), __webpack_require__(1818)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_13__AccLedger_service__["a" /* TreeViewAccService */], __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_9__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_10__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_13__AccLedger_service__["a" /* TreeViewAccService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */]])
], AccNewLedgerComponent);

var _a;


/***/ }),

/***/ 1422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ng2_smart_table___ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ng2_smart_table____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_ng2_smart_table___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_smartTables_scss__ = __webpack_require__(1870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_style_loader_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modaldialogs_authorizationDialog_authorizationDialog_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component_base__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bank_service__ = __webpack_require__(1425);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankListComponent; });










var BankListComponent = (function (_super) {
    __extends(BankListComponent, _super);
    function BankListComponent(
        //private _authService: AuthService, 
        router, dialog, injector) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.dialog = dialog;
        _this.injector = injector;
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
                ADDRESS: {
                    title: 'Branch Name',
                    type: 'string'
                },
                ACCODE: {
                    title: 'Branch Code',
                    type: 'string'
                },
                ACNAME: {
                    title: 'Bank Name',
                    type: 'string'
                },
                IFSC_CODE: {
                    title: 'IFSC CODE',
                    type: 'number'
                },
                ISACTIVE: {
                    title: 'Status',
                    type: 'number',
                    valuePrepareFunction: function (value) { return value == 1 ? 'Active' : 'InActive'; },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'Show all',
                            list: [
                                { value: 1, title: 'Active' },
                                { value: 0, title: 'InActive' },
                            ]
                        }
                    }
                }
            }
        };
        _this.messageSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]("You are not authorized.");
        _this.message$ = _this.messageSubject.asObservable();
        try {
            var apiUrl = _this.apiUrl + "/getAllBankMasterPagedList";
            _this.source = _this.source = new __WEBPACK_IMPORTED_MODULE_1__node_modules_ng2_smart_table___["ServerDataSource"](_this._http, { endPoint: apiUrl,
                dataKey: "data",
                pagerPageKey: "currentPage",
                pagerLimitKey: "maxResultCount"
            });
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
        return _this;
    }
    BankListComponent.prototype.addNewBank = function () {
        try {
            this.router.navigate(["./pages/account/AccountLedger/bank/add-bank", { mode: "add", returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    BankListComponent.prototype.onEditClick = function (event) {
        try {
            this.router.navigate(["./pages/account/AccountLedger/bank/add-bank", { ACID: event.data.ACID, mode: "edit", returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    BankListComponent.prototype.onViewClick = function (event) {
        try {
            // this.router.navigate(["pages/masters/Branch", { name: event.data.BRANCHID, mode: "view", returnUrl: this.router.url }]);
            if (this._authService.checkMenuRight("bank", "view") == true) {
                this.router.navigate(["./pages/account/AccountLedger/bank", { mode: "view", returnUrl: this.router.url }]);
            }
            else {
                this.messageSubject.next("You are not authorized to View new bank.");
                this.openAuthDialog();
            }
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    BankListComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    BankListComponent.prototype.openAuthDialog = function () {
        var message = { header: "Information", message: this.message$ };
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modaldialogs_authorizationDialog_authorizationDialog_component__["a" /* AuthDialog */], { hasBackdrop: true, data: message });
    };
    return BankListComponent;
}(__WEBPACK_IMPORTED_MODULE_8__app_component_base__["a" /* AppComponentBase */]));
BankListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bank-list',
        template: __webpack_require__(1823),
        providers: [__WEBPACK_IMPORTED_MODULE_3__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_9__bank_service__["a" /* BankMasterService */]],
        styles: [__webpack_require__(120)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], BankListComponent);



/***/ }),

/***/ 1423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_repositories__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_navigation_perventor_navigation_perventor_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bank_service__ = __webpack_require__(1425);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankComponent; });









var BankComponent = (function () {
    function BankComponent(fb, alertService, preventNavigationService, router, loadingService, MasterService, _authService, _activatedRoute, _bankService) {
        var _this = this;
        this.fb = fb;
        this.alertService = alertService;
        this.preventNavigationService = preventNavigationService;
        this.router = router;
        this.loadingService = loadingService;
        this.MasterService = MasterService;
        this._authService = _authService;
        this._activatedRoute = _activatedRoute;
        this._bankService = _bankService;
        this.viewMode = false;
        this.mode = "add";
        this.subcriptions = [];
        this.modeTitle = '';
        this.AcListObj = {};
        this.initialTextReadOnly = false;
        this.StateList = [];
        this.userProfile = this._authService.getUserProfile();
        this.buildForm();
        this.MasterService.getState().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.StateList = res.result;
            }
        });
    }
    BankComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            if (!!this._activatedRoute.snapshot.params['returnUrl']) {
                this.returnUrl = this._activatedRoute.snapshot.params['returnUrl'];
            }
            if (!!this._activatedRoute.snapshot.params['ACID']) {
                var BID = "";
                BID = this._activatedRoute.snapshot.params['ACID'];
                this._bankService.getBankList(BID)
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        //console.log(data);
                        var bankObj = data.result;
                        ////console.log("bank Obj value" + bankObj);
                        _this.form.patchValue({
                            ACID: bankObj.ACID,
                            ADDRESS: bankObj.ADDRESS,
                            TYPE: bankObj.TYPE,
                            ACNAME: bankObj.ACNAME,
                            CRLIMIT: bankObj.CRLIMIT,
                            BANKACCOUNTNUMBER: bankObj.BANKACCOUNTNUMBER,
                            CITY: bankObj.CITY,
                            PHONE: bankObj.PHONE,
                            GSTNO: bankObj.GSTNO,
                            PSTYPE: bankObj.PSTYPE,
                            ISACTIVE: bankObj.ISACTIVE,
                            PARENT: bankObj.PARENT,
                            MAPID: bankObj.MAPID,
                            HASSUBLEDGER: bankObj.HASSUBLEDGER,
                            ACCODE: bankObj.ACCODE,
                            IFCS_CODE: bankObj.IFCS_CODE,
                            CTYPE: bankObj.CTYPE
                        });
                        if (_this._activatedRoute.snapshot.params['mode'] == null) {
                            _this.modeTitle = "Edit Bank";
                        }
                        else if (_this._activatedRoute.snapshot.params['mode'] == "view") {
                            _this.modeTitle = "View Bank";
                        }
                        _this.mode = 'edit';
                        _this.initialTextReadOnly = true;
                    }
                    else {
                        _this.mode = '';
                        _this.modeTitle = "Edit -Error in Bank Hierarchy";
                        _this.initialTextReadOnly = true;
                    }
                }, function (error) {
                    _this.mode = '';
                    _this.modeTitle = "Edit2 -Error in Bank";
                    //this.masterService.resolveError(error, "Company Hierarchy - getBranch");
                });
            }
            else {
                this.mode = "add";
                this.modeTitle = "Add Bank";
                this.initialTextReadOnly = false;
            }
        }
        catch (ex) {
        }
    };
    BankComponent.prototype.buildForm = function () {
        var _this = this;
        this.form = this.fb.group({
            ACID: [""],
            ADDRESS: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            TYPE: ["A"],
            ACNAME: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            CRLIMIT: [0],
            BANKACCOUNTNUMBER: [""],
            CITY: [""],
            PHONE: [""],
            GSTNO: [""],
            PSTYPE: [""],
            PType: ["V"],
            ISACTIVE: [1],
            PARENT: ["AT1069"],
            MAPID: ["B"],
            HASSUBLEDGER: [0],
            LEVELS: [4],
            ACTYPE: ["AT"],
            CTYPE: [""],
            ACCODE: [""],
            IFCS_CODE: [""],
            STATE: [""],
            BANKBUILDING: [""] //bankbuilding use for Country
        });
        this.form.valueChanges.subscribe(function (data) {
            _this.MasterService.BankObj = data;
        });
        this.onFormChanges();
    };
    BankComponent.prototype.onFormChanges = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (val) {
            if (_this.form.dirty)
                _this.preventNavigationService.preventNavigation(true);
        });
    };
    BankComponent.prototype.onSave = function () {
        if (this.form.controls['CTYPE'].value == null
            || this.form.controls['ACNAME'].value == null
            || this.form.controls['CTYPE'].value == ""
            || this.form.controls['ACNAME'].value == ""
            || this.form.controls['CTYPE'].value == undefined
            || this.form.controls['ACNAME'].value == undefined) {
            this.alertService.error("Please Filll the mandatory fields");
        }
        else {
            try {
                this.onSubmit();
            }
            catch (ex) {
                this.alertService.error(ex);
            }
        }
    };
    BankComponent.prototype.onSubmit = function () {
        var _this = this;
        try {
            var saveModel = Object.assign({}, this.form.value);
            saveModel.DIV = this.userProfile.userDivision;
            if (this.mode == "edit") {
            }
            else {
            }
            // ////console.log("ALedger Data"+JSON.stringify(saveModel));
            this.loadingService.show("Saving Data please wait...");
            var sub = this.MasterService.saveAccount(this.mode, saveModel, null).subscribe(function (data) {
                _this.loadingService.hide();
                if (data.status == "ok") {
                    ////console.log("PARTYDATA@@@@", data);
                    _this.alertService.success("Data Saved Successfully");
                    _this.preventNavigationService.preventNavigation(false);
                    setTimeout(function () {
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    _this.alertService.error("Error in Saving Data:" + data.result._body);
                }
            }, function (error) {
                _this.loadingService.hide();
                _this.alertService.error(error);
            });
            this.subcriptions.push(sub);
        }
        catch (ex) {
            this.alertService.error(ex);
        }
    };
    BankComponent.prototype.cancel = function () {
        try {
            this.router.navigate([this.returnUrl]);
        }
        catch (ex) {
            //console.log(ex);
            this.alertService.error(ex);
        }
    };
    BankComponent.prototype.disabled = function () {
        try {
            if (this.viewMode == true) {
                return "#EBEBE4";
            }
            else {
                return "";
            }
        }
        catch (ex) {
            //console.log(ex);
            this.alertService.error(ex);
        }
    };
    BankComponent.prototype.editDisabled = function () {
        try {
            if (this.mode == "edit") {
                return "#EBEBE4";
            }
            else {
                return "";
            }
        }
        catch (ex) {
            //console.log(ex);
            this.alertService.error(ex);
        }
    };
    return BankComponent;
}());
BankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bankdetails',
        template: __webpack_require__(1824),
        providers: [__WEBPACK_IMPORTED_MODULE_1__common_repositories__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_8__bank_service__["a" /* BankMasterService */]],
        styles: [__webpack_require__(120)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_3__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_4__common_services_navigation_perventor_navigation_perventor_service__["a" /* PreventNavigationService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_6__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_1__common_repositories__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_7__common_services_permission__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_8__bank_service__["a" /* BankMasterService */]])
], BankComponent);



/***/ }),

/***/ 1424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ng2_smart_table_src_ng2_smart_table_module__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bank_component__ = __webpack_require__(1423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bank_routing__ = __webpack_require__(1577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bank_list_component__ = __webpack_require__(1422);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankModule", function() { return BankModule; });










var BankModule = (function () {
    function BankModule() {
    }
    return BankModule;
}());
BankModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__["e" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__bank_routing__["a" /* BankRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__node_modules_ng2_smart_table_src_ng2_smart_table_module__["Ng2SmartTableModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__bank_list_component__["a" /* BankListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__bank_component__["a" /* BankComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__bank_component__["a" /* BankComponent */]
        ]
    })
], BankModule);



/***/ }),

/***/ 1425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global_state__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankMasterService; });






var BankMasterService = (function () {
    function BankMasterService(http, activatedRoute, authService, state) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.state = state;
    }
    Object.defineProperty(BankMasterService.prototype, "apiUrl", {
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
    BankMasterService.prototype.getBankList = function (bid) {
        var res = { status: "error", result: "" };
        var returnSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_subject__["Subject"]();
        ////console.log("about to edit");
        var bodyData = { mode: 'query', data: { BID: bid } };
        this.http.post(this.apiUrl + '/getBankMasterlist', bodyData, this.getRequestOption())
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
    BankMasterService.prototype.getRequestOption = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        //console.log({ headers: headers });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
    };
    return BankMasterService;
}());
BankMasterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__app_global_state__["a" /* GlobalState */]])
], BankMasterService);



/***/ }),

/***/ 1434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_repositories__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerLedgerComponent; });


var CustomerLedgerComponent = (function () {
    // Ptype: string
    function CustomerLedgerComponent(MasterService) {
        this.MasterService = MasterService;
        // this.Ptype="C"
        this.MasterService.PType = 'C';
    }
    return CustomerLedgerComponent;
}());
CustomerLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'CustomerLedger',
        template: "<pLedgerTable></pLedgerTable>",
        styles: [__webpack_require__(9)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_repositories__["a" /* MasterRepo */]])
], CustomerLedgerComponent);



/***/ }),

/***/ 1435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_repositories__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierLedgerComponent; });


var SupplierLedgerComponent = (function () {
    // Ptype: string
    function SupplierLedgerComponent(MasterService) {
        this.MasterService = MasterService;
        // this.Ptype="V"
        this.MasterService.PType = 'V';
    }
    return SupplierLedgerComponent;
}());
SupplierLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'SupplierLedger',
        template: "<pLedgerTable></pLedgerTable>",
        styles: [__webpack_require__(9)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_repositories__["a" /* MasterRepo */]])
], SupplierLedgerComponent);



/***/ }),

/***/ 1439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_permission_authService_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ng2_smart_table___ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ng2_smart_table____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__node_modules_ng2_smart_table___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_style_loader_Companies_smartTables_scss__ = __webpack_require__(1871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_style_loader_Companies_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_style_loader_Companies_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__accountLedger_service__ = __webpack_require__(1271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_contextmenu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__addLedg_component__ = __webpack_require__(1440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_services_navigation_perventor_navigation_perventor_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__PLedger_PLedger_component__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_hotkeys__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_Transaction_Components_transaction_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLedgerComponent; });
/* unused harmony export DObj */
/* unused harmony export DivList */




















var actionMapping = {
    mouse: {
        contextMenu: function (tree, node, $event) {
            $event.preventDefault();
            alert("context menu for " + node.data.name);
        },
        dblClick: function (tree, node, $event) {
            if (node.hasChildren)
                __WEBPACK_IMPORTED_MODULE_7_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
        },
        click: function (tree, node, $event) {
            $event.shiftKey
                ? __WEBPACK_IMPORTED_MODULE_7_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_SELECTED_MULTI(tree, node, $event)
                : __WEBPACK_IMPORTED_MODULE_7_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_SELECTED(tree, node, $event);
        }
    },
    keys: (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_7_angular_tree_component__["b" /* KEYS */].ENTER] = function (tree, node, $event) { return node.setActiveAndVisible(); },
        _a)
};
var AccountLedgerComponent = (function () {
    function AccountLedgerComponent(masterService, _authService, router, AccountService, _hotkeysService, preventNavigationService, alertService, loadingService, _fb, _transactionService) {
        //console.log("@@authservice", _authService.getPhiscalInfo())
        var _this = this;
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.AccountService = AccountService;
        this._hotkeysService = _hotkeysService;
        this.preventNavigationService = preventNavigationService;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this._fb = _fb;
        this._transactionService = _transactionService;
        this.DialogMessage = "You are not authorized";
        this.nodes = [];
        this.PartialAccountList = [];
        this.data = [];
        this.subcriptions = [];
        this.dynamicDDList = [];
        this.addMode = false;
        this.selectedNodeEdit = 0;
        this.autoCalculationParam = {};
        this.settings = {
            mode: "external",
            add: {
                addButtonContent: '',
            },
            // view: {
            //   viewButtonContent: 'View',
            //   saveButtonContent: '<i class="ion-checkmark"></i>',
            //   cancelButtonContent: '<i class="ion-close"></i>',
            // },
            edit: {
                editButtonContent: 'Edit',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            delete: {
                deleteButtonContent: ' ',
                confirmDelete: true
            },
            columns: {
                ACID: {
                    title: 'AC ID',
                    type: 'number'
                },
                PARENT: {
                    title: 'Parent',
                    type: 'string'
                },
                ACNAME: {
                    title: 'AcName',
                    type: 'string'
                }
            }
        };
        this._treeEnable = true;
        this.source = new __WEBPACK_IMPORTED_MODULE_8__node_modules_ng2_smart_table___["LocalDataSource"]();
        this.loadListSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.loadList$ = this.loadListSubject.asObservable();
        this.formObj = {};
        this.nodeObj = {};
        this.isOnlyMainParent = 0;
        this.Parent = {};
        this.BankPartyVerification = {};
        this.AdditionalInfo = 0;
        this.showPLedgerInfo = 0;
        this.showCustomer = 0;
        this.showBank = 0;
        this.showAssets = 0;
        this.HSN_Active = 0;
        this.isAccount = true;
        this.parentHasSubLedger = false;
        this.division = [];
        this.divisionList = [];
        this.SelectedDivisionList = [];
        this.divisioncheckObj = {};
        this.ParentList = [];
        this.ShiftParentObj = {};
        this.LedgerFilterObj = {};
        this.FormName = {};
        this.SubGroupAccountMaster = [];
        this.ChildrenList = [];
        this.asyncChildren = [
            {
                name: 'child2.1',
                subTitle: 'new and improved'
            }, {
                name: 'child2.2',
                subTitle: 'new and improved2'
            }
        ];
        this.customTemplateStringOptions = {
            displayField: 'ACNAME',
            isExpandedField: 'expanded',
            idField: 'uuid',
            getChildren: this.getChildren.bind(this),
            actionMapping: actionMapping,
            allowDrag: false
        };
        this.contextMenuActions = [
            {
                html: function (item) { return "Edit"; },
                tag: 'edit',
                enabled: function (item) { return true; },
                visible: function (item) { return true; },
            },
            {
                divider: true,
                visible: true,
            },
            {
                html: function (item) { return "Delete"; },
                tag: 'delete',
                enabled: function (item) { return true; },
                visible: function (item) { return true; },
            },
        ];
        this.DivListForSave = [];
        this.gridBankPopupSettings = new __WEBPACK_IMPORTED_MODULE_19__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        // this.lgModel.show();
        // ////console.log("@@_transactionService.userSetting.ENABLESUBLEDGER", this._transactionService.userSetting.ENABLESUBLEDGER)
        this.mode = "add";
        this.masterService.PType = '';
        this.userProfile = this._authService.getUserProfile();
        this.busy = this.masterService.getacListTree().map(function (x) { return x; })
            .subscribe(function (res) {
            _this.nodes = res;
            if (_this.tree != null) {
                _this.tree.treeModel.update();
            }
        }, function (error) {
            var err = _this.masterService.resolveError(error, "accountLedger - accountLedger");
            if (err) {
                alert(err.json());
            }
        });
        this.division = [];
        this.masterService.getAllDivisions()
            .subscribe(function (res) {
            _this.division.push(res);
            _this.divisionList.push(res);
        }, function (error) {
            _this.masterService.resolveError(error, "divisions - getDivisions");
        });
        if (this.masterService.userSetting.DIVISIONWISEACLISTING == 1) {
            this.enableDivisionMapping = true;
            this.formObj.enableDivSelectionTable = false;
        }
        else {
            this.enableDivisionMapping = false;
        }
    }
    Object.defineProperty(AccountLedgerComponent.prototype, "treeEnable", {
        get: function () { return this._treeEnable; },
        set: function (value) { this._treeEnable = value; },
        enumerable: true,
        configurable: true
    });
    AccountLedgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.autoCalculationParam.igst = 0;
        this.autoCalculationParam.cgst = 0;
        this.autoCalculationParam.sgst = 0;
        this.autoCalculationParam.cess = 0;
        this._hotkeysService.add(new __WEBPACK_IMPORTED_MODULE_17_angular2_hotkeys__["Hotkey"]("f10", function (event) {
            event.preventDefault();
            _this.ngOnInit();
            return false;
        }));
        this.formObj.DIV = this.userProfile.userDivision;
        this.enableDivision = false;
        this.loadListSubject.switchMap(function (snode) {
            _this.data = [];
            return _this.AccountService.getParentWiseAccountList(snode.ACID);
        })
            .subscribe(function (res) {
            _this.data.push(res);
            _this.source.load(_this.data);
            if (_this.AccountService.selectAcdivisionList.length > 0) {
                _this.formObj.DIV = _this.AccountService.selectAcdivisionList[0].MAINDIV;
                _this.changeDivision(_this.AccountService.selectAcdivisionList[0].MAINDIV);
                _this.divisioncheckObj.ShareAccount = 1;
                _this.ClickShareAccount("x");
                _this.enableDivSelectionTable(1);
                // //console.log("checkValue##", this.divisionList, this.AccountService.selectAcdivisionList)
                for (var _i = 0, _a = _this.divisionList; _i < _a.length; _i++) {
                    var i = _a[_i];
                    for (var _b = 0, _c = _this.AccountService.selectAcdivisionList; _b < _c.length; _b++) {
                        var j = _c[_b];
                        if (i.INITIAL == j.DIV) {
                            _this.AccountService.selectAcdivisionList[0].MAINDIV == j.DIV ? i.isDefault = true : i.isDefault = false;
                            i.isCheck = true;
                        }
                    }
                }
                if (_this.AccountService.selectAcdivisionList[0].ISCOMMONAC == 1) {
                    _this.divisioncheckObj.ShareAllDiv = "2";
                    _this.formObj.ISCOMMONAC = 1;
                    _this.divisioncheckObj.ShareAccount = 1;
                    _this.showDivSelectionTable = false;
                }
                else {
                    _this.divisioncheckObj.ShareAllDiv = "0";
                    _this.formObj.ISCOMMONAC = 0;
                    _this.divisioncheckObj.ShareSelectiveDiv = "1";
                    _this.divisioncheckObj.ShareAccount = 1;
                }
            }
            else {
                _this.divisioncheckObj.ShareAccount = 0;
                _this.ClickShareAccount("x");
                _this.enableDivSelectionTable(0);
                if (_this.selectedNode.ISCOMMONAC == 0) {
                    _this.formObj.DIV = _this.selectedNode.DIV;
                }
                else {
                    _this.formObj.DIV = _this.userProfile.userDivision;
                }
            }
        });
        this.divisioncheckObj.ShareSelectiveDiv = 1;
        // this.loadListSubject.switchMap(snode => {
        //   return this.AccountService.getAccountAutomationGSTRate(snode.ACID, snode.PARENTID)
        // })
        //   .subscribe(res => {
        //     let gstRate: any = res;
        //     for (let i in gstRate) {
        //       if (gstRate[i].PARTICULAR == "Integrated Tax") {
        //         this.autoCalculationParam.igst = gstRate[i].RATE;
        //       }
        //       if (gstRate[i].PARTICULAR == "Central Tax") {
        //         this.autoCalculationParam.cgst = gstRate[i].RATE;
        //       }
        //       if (gstRate[i].PARTICULAR == "UT Tax") {
        //         this.autoCalculationParam.sgst = gstRate[i].RATE;
        //       }
        //       if (gstRate[i].PARTICULAR == "Cess") {
        //         this.autoCalculationParam.cess = gstRate[i].RATE;
        //       }
        //     };
        //   })
        this.isParentBank = false;
    };
    AccountLedgerComponent.prototype.ngAfterViewInit = function () {
        this._BE.nativeElement.focus();
        this.formObj.ISCOMMON = 0;
    };
    AccountLedgerComponent.prototype.getChildren = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.asyncChildren.map(function (c) {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })); }, 1000);
        });
    };
    AccountLedgerComponent.prototype.addNode = function (addednode) {
        var Node = this.tree.treeModel.getFocusedNode();
        // if (fNode == null) {
        //   this.tree.treeModel.nodes.push(addednode);
        // }
        // else {
        //   alert("child")
        this.tree.treeModel.getFocusedNode().data.children.push(addednode);
        // }
        this.tree.treeModel.update();
    };
    AccountLedgerComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    AccountLedgerComponent.prototype.filterNodes = function (text, tree) {
        try {
            tree.treeModel.filterNodes(text, true);
        }
        catch (ex) {
            alert(ex);
        }
    };
    AccountLedgerComponent.prototype.activateSubSub = function (tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    AccountLedgerComponent.prototype.onEvent = function ($event) {
        // //console.log.bind(console);
    };
    AccountLedgerComponent.prototype.onselect = function (tree, $event) {
        var _this = this;
        //console.log("TreeSelec",tree)
        this.OverdraftIs = ' ';
        this.source = new __WEBPACK_IMPORTED_MODULE_8__node_modules_ng2_smart_table___["LocalDataSource"]();
        this.AdditionalInfo = 0;
        this.showBank = 0;
        this.showPLedgerInfo = 0;
        this.selectedNode = tree.treeModel.getFocusedNode().data;
        this.selectedNodeEdit = this.selectedNode.ACID;
        this.GroupStatus = this.selectedNode.TYPE;
        ////console.log("onselect", this.selectedNode, this.nodes);
        this.tagForDisplayingAccname = this.selectedNode.TYPE;
        this.ViewMode = true;
        this.getRootParent(this.selectedNode, this.nodes);
        this.loadListSubject.next(this.selectedNode);
        this.formObj.ACNAME = this.selectedNode.ACNAME;
        this.formObj.ACCODE = this.selectedNode.ACCODE;
        this.parentHasSubLedger = false;
        //console.log("@@this.selectedNode.", this.selectedNode)
        if (this.selectedNode.TYPE == "A") {
            this.ShiftParentObj.ACID = this.selectedNode.ACID;
            this.ShiftParentObj.ACNAME = this.selectedNode.ACNAME;
            if (this.selectedNode.PARENT != null) {
                this.ShiftParentObj.FROMPARENT = this.selectedNode.PARENT.ACID;
            }
            this.showShiftParentButton = true;
        }
        else {
            this.showShiftParentButton = false;
        }
        this.searchParentHasSubLedger();
        if (this.selectedNode.ACID == 'AG013' || (this.selectedNode.PARENT ? this.selectedNode.PARENT.MAPID == 'OD' : this.selectedNode.MAPID == 'OD') || this.selectedNode.MAPID == 'OD') {
            this.OverdraftIs = 'OD';
        }
        if (this.selectedNode.PARENT !== null && this.selectedNode !== null) {
            if (this.selectedNode.PARENT.MAPID == 'B' || this.selectedNode.MAPID == 'B') {
                this.showBank = 1;
                this.isGroup = 0;
            }
            else {
                this.isGroup = 0;
                this.showBank = 0;
            }
        }
        else {
            this.showBank = 0;
            this.showBank = 0;
        }
        this.formObj.HASSUBLEDGER = this.selectedNode.HASSUBLEDGER;
        this.formObj.HSN_SACCODE = this.selectedNode.HSN_SACCODE;
        this.formObj.CRLIMIT = this.selectedNode.CRLIMIT;
        var childAccountList = this.masterService.PartialAccountList.filter(function (a) { return a.PARENT == _this.selectedNode.id; });
        this.mode = "select";
        var customerData;
        var checkAcid = this.selectedNode.ACID.substring(0, 2);
        if (this.selectedNode.PType == "C" && this.selectedNode.TYPE == "A") {
            this.loadingService.show("Getting data, Please wait...");
            this.masterService.getAllAccount(this.selectedNode.ACID).subscribe(function (data) {
                _this.NewItem();
                _this.modeTitle = 'View And Edit Customer';
                _this.showPLedgerInfo = 1;
                _this.isGroup = 0;
                _this.Party = "Customer";
                _this.PTypeForParty = _this.selectedNode.PType;
                _this.formObj.ACNAME = _this.selectedNode.ACNAME;
                _this.formObj.mode = "edit";
                _this.mode = "view";
                _this.loadingService.hide();
                customerData = data.result;
                // this.formObj.isAutoGSTApplicable = customerData.isAutoGSTApplicable;
                // this.formObj.isRCMApplicable = customerData.isRCMApplicable;
                _this.formObj.isAutoGSTApplicable = 0;
                _this.formObj.isRCMApplicable = 0;
                _this.PLedgerChild.setEditFromValue(customerData);
            }, function (error) {
                _this.loadingService.hide();
            });
        }
        else if ((this.selectedNode.PType == 'V' && checkAcid == 'PA') || this.selectedNode.ACID == 'LB1199') {
            this.loadingService.show("Getting data, Please wait...");
            this.masterService.getAllAccount(this.selectedNode.ACID).subscribe(function (data) {
                _this.NewItem();
                _this.modeTitle = 'View And Edit Supplier';
                _this.showPLedgerInfo = 1;
                _this.isGroup = 0;
                _this.Party = "Supplier";
                _this.PTypeForParty = _this.selectedNode.PType;
                _this.formObj.ACNAME = _this.selectedNode.ACNAME;
                _this.formObj.mode = "edit";
                _this.mode = "view";
                _this.loadingService.hide();
                customerData = data.result;
                _this.formObj.isAutoGSTApplicable = customerData.isAutoGSTApplicable;
                _this.formObj.isRCMApplicable = customerData.isRCMApplicable;
                _this.formObj.isReverseChargeApplicable = customerData.isReverseChargeApplicable;
                _this.PLedgerChild.setEditFromValue(customerData);
            }, function (error) {
                _this.loadingService.hide();
            });
        }
        // else {
        //   this.masterService.getAllAccount(this.selectedNode.ACID).subscribe(
        //     data => {
        //       // this.NewItem()
        //       this.modeTitle = 'View And Edit'
        //       this.PTypeForParty = this.selectedNode.PType
        //       this.formObj.ACNAME = this.selectedNode.ACNAME;
        //       this.formObj.mode = "edit"
        //       this.mode = "view"
        //       this.loadingService.hide();
        //       customerData = data.result;
        //       this.formObj.isAutoGSTApplicable = customerData.isAutoGSTApplicable;
        //       this.formObj.isRCMApplicable = customerData.isRCMApplicable;
        //       this.formObj.isReverseChargeApplicable = customerData.isReverseChargeApplicable;
        //     },
        //     error => {
        //       this.loadingService.hide();
        //     }
        //   );
        // }
    };
    AccountLedgerComponent.prototype.searchParentHasSubLedger = function () {
        ////console.log("subledger", this.selectedNode.PARENT);
        if (this.selectedNode.PARENT != null &&
            this.selectedNode.PARENT != undefined &&
            this.selectedNode.PARENT != "" &&
            this.selectedNode.PARENT !== null) {
            if (this.selectedNode.PARENT.HASSUBLEDGER == 1) {
                this.parentHasSubLedger = true;
                ////console.log("reach here1");
            }
            else {
                this.parentHasSubLedger = false;
                ////console.log("reach here2");
            }
        }
        else {
            ////console.log("reach here");
            this.parentHasSubLedger = false;
        }
    };
    AccountLedgerComponent.prototype.getRootParent = function (node, list) {
        this.Parent.Under = '';
        if (node.ACID == "CA")
            this.formObj.ACTYPE = "LB";
        else
            this.formObj.ACTYPE = node.ACID;
        this.nodeObj = node;
        this.UnderObj = node.PARENT;
        if (node.PARENTID == 'BS' || node.PARENTID == 'PL' || node.PARENTID == 'TD') {
            this.PrimaryGrpObj = node;
            this.Parent.Primary = node.ACNAME;
            this.isOnlyMainParent = 1;
            this.UnderObj = node;
            return;
        }
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var t = list_1[_i];
            if (node.PARENTID != t.ACID) {
                this.loopingChild(node, t.children, t);
            }
            else {
                this.root = node.PARENTID;
                this.PrimaryGrpObj = node;
            }
        }
        this.Parent.Under = this.UnderObj.ACNAME;
        if (node.TYPE == "G") {
            this.UnderObj = node;
            this.isGroup == 1;
            this.modeTitle = 'View Group';
            this.ViewMode = true;
            ////console.log("isgroup value", this.isGroup);
            // ////console.log("viewmode",this.ViewMode);
            //   this.formObj.HASSUBLEDGER =
            //     this.selectedNode.Parent.HASSUBLEDGER
            //       ? 1
            //       : 0
            // }
            // else{
            //   this.isGroup=0;
            //   this.formObj.HASSUBLEDGER=0;
            //   this.modeTitle='View Account'
        }
        else {
            this.modeTitle = 'View Account';
            this.ViewMode = true;
        }
        // this.Parent.Primary=this.PrimaryGrpObj.ACNAME;
        if (this.root == 'LB') {
            this.Parent.Primary = 'LIABILITES';
            this.formObj.ACTYPE = 'LB';
        }
        else if (this.root == 'AT') {
            this.Parent.Primary = 'ASSETS';
            this.formObj.ACTYPE = 'AT';
        }
        else if (this.root == 'DI') {
            this.Parent.Primary = 'DIRECT INCOME';
            this.formObj.ACTYPE = 'DI';
        }
        else if (this.root == 'DE') {
            this.Parent.Primary = 'DIRECT EXPENSES';
            this.formObj.ACTYPE = 'DE';
        }
        else if (this.root == 'IE') {
            this.Parent.Primary = 'INDIRECT EXPENSES';
            this.formObj.ACTYPE = 'IE';
        }
        else if (this.root == 'II') {
            this.Parent.Primary = 'INDIRECT INCOME';
            this.formObj.ACTYPE = 'II';
        }
        else if (this.root == 'CA') {
            this.Parent.Primary = 'CAPITAL A/C';
            this.formObj.ACTYPE = 'LB';
        }
        this.isOnlyMainParent = 0;
    };
    AccountLedgerComponent.prototype.loopingChild = function (node, cList, root) {
        for (var _i = 0, cList_1 = cList; _i < cList_1.length; _i++) {
            var c = cList_1[_i];
            if (c != node) {
                this.loopingChild(node, c.children, root);
            }
            else {
                this.root = root.ACID;
                this.PrimaryGrpObj = root;
            }
        }
    };
    AccountLedgerComponent.prototype.getNoOfChild = function (list, selectedid, rootid) {
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var i = list_2[_i];
            if (i.ACID == selectedid) {
                break;
            }
            else {
                this.dynamicDDList.push({ label: 'Parent' });
                this.getNoOfChild(i.children, selectedid, rootid);
            }
        }
    };
    AccountLedgerComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    AccountLedgerComponent.prototype.onTreeEnable = function (value) {
        this.treeEnable = value;
    };
    AccountLedgerComponent.prototype.AddLedger = function () {
        this.addMode = true;
        this.modeTitle = "AddLedger";
        this.mode = "add";
        this.grp = "A";
        return;
    };
    AccountLedgerComponent.prototype.AddSubGroup = function (trees) {
        this.addMode = true;
        this.modeTitle = "AddSubGroup";
        this.mode = "add";
        this.grp = "G";
    };
    AccountLedgerComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    AccountLedgerComponent.prototype.onEditClick = function (event) {
        this.addMode = true;
        this.mode = "edit";
        this.selectedNode = event.data;
        this.grp = "A";
    };
    AccountLedgerComponent.prototype.onAddClose = function (event) {
        this.addMode = false;
    };
    AccountLedgerComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AccountLedgerComponent.prototype.contextMenuClick = function (selecteddata, selectedmenu) {
        if (selectedmenu.tag == "edit") {
            this.addMode = true;
            this.mode = "edit";
            this.selectedNode = selecteddata;
            this.grp = "G";
        }
        else if (selectedmenu.tag == "delete") {
        }
    };
    AccountLedgerComponent.prototype.SaveAcEmit = function (value) {
        if (value.type == "G") {
            this.getGivenNode(value.lastparent, this.nodes, value.value);
            this.tree.treeModel.update();
        }
        else {
            var childAccountList = this.masterService.PartialAccountList.filter(function (a) { return a.PARENT == value.value.PARENT; });
            if (childAccountList.length > 0) {
                this.source.load(childAccountList);
            }
        }
    };
    AccountLedgerComponent.prototype.getGivenNode = function (nodeid, list, savedNode) {
        for (var _i = 0, list_3 = list; _i < list_3.length; _i++) {
            var ag = list_3[_i];
            if (ag.ACID == nodeid) {
                ag.children.push(savedNode);
                return ag;
            }
            else if (ag.children && ag.children.length > 0) {
                var node = this.getGivenNode(nodeid, ag.children, savedNode);
                if (node) {
                    return node;
                }
            }
        }
        return null;
    };
    AccountLedgerComponent.prototype.NewGroup = function () {
        var _this = this;
        if (!this.validateBranch("create new group")) {
            return;
        }
        // if(this.nodeObj.ACID=='AG01001' || this.nodeObj.ACID=='AG01002'){
        //   this.DialogMessage = "Cannot create Group or Account inside this.";
        //   this.childModal.show()
        //                           setTimeout(() => {
        //                         this.childModal.hide();
        //                     }, 2000)
        //   return;
        // }
        if (this.masterService.validateMasterCreation("create") == false) {
            return;
        }
        if (this.nodeObj.ACID == 'AG01001' || this.nodeObj.ACID == 'AG01002') {
            this.alertService.info('Cannot create Group or Account inside this.');
            return;
        }
        this.ViewMode = false;
        this.tagForDisplayingAccname = 'G';
        setTimeout(function () {
            _this._BE.nativeElement.focus();
        }, 20);
        this.mode = "add";
        this.addMode = true;
        this.formObj.ACNAME = '';
        this.modeTitle = 'New Group';
        this.formObj.TYPE = 'G';
        this.isGroup = 1;
        this.showPLedgerInfo = 0;
        this.BankPartyVerification.SupplierGrp = 0;
        this.isAccount = false;
        // this.Parent.Primary=this.PrimaryGrpObj.ACNAME;
        if (this.nodeObj.TYPE == 'G') {
            // this.UnderObj = this.nodeObj.ACNAME;
            if (this.selectedNode.HASSUBLEDGER == 1) {
                //if parent has subledger then hide child has subledger option
                this.parentHasSubLedger = true;
            }
            this.Parent.Under = this.nodeObj.ACNAME;
            this.formObj.HASSUBLEDGER = 0;
            this.formObj.PARENT = this.nodeObj.ACID;
            this.formObj.MAPID = this.nodeObj.MAPID;
            this.formObj.PType = this.nodeObj.PType;
            var checkAcid = this.nodeObj.ACID.substring(0, 2);
            this.formObj.LEVELS = this.nodeObj.LEVELS + 1;
            if ((this.formObj.PType == 'V' && checkAcid == 'PA') || this.nodeObj.ACID == 'LB1199') {
                this.BankPartyVerification.SupplierGrp = 1;
            }
            if (this.nodeObj.ACID.substring(0, 2) == 'IE' || this.UnderObj.ACID.substring(0, 2) == 'DE') {
                this.HSN_Active = 1;
            }
        }
        else {
            // this.UnderObj = this.nodeObj.PARENT.ACNAME;
            this.Parent.Under = this.UnderObj.ACNAME;
            this.formObj.PARENT = this.UnderObj.ACID;
            this.formObj.MAPID = this.nodeObj.MAPID;
            this.formObj.PType = this.nodeObj.PType;
            this.formObj.LEVELS = this.nodeObj.LEVELS;
        }
        this.divisioncheckObj = {};
    };
    AccountLedgerComponent.prototype.NewItem = function () {
        var _this = this;
        if (!this.validateBranch("create new item")) {
            return;
        }
        // if(this.nodeObj.ACID=='AG01001' || this.nodeObj.ACID=='AG01002'){
        //   this.DialogMessage = "Cannot create Group or Account inside this.";
        //   this.childModal.show()
        //                           setTimeout(() => {
        //                         this.childModal.hide();
        //                     }, 2000)
        //   return;
        // }
        if (this.masterService.validateMasterCreation("create") == false) {
            return;
        }
        this.GroupStatus = '';
        if (this.nodeObj.ACID == 'AG01001' || this.nodeObj.ACID == 'AG01002') {
            this.alertService.info('Cannot create Group or Account inside this.');
            return;
        }
        this.ViewMode = false;
        this.tagForDisplayingAccname = 'A';
        //console.log("CHeckValue#",this.nodeObj.ACID)
        if (this.nodeObj.ACID == "AG006") {
            this.isParentBank = true;
        }
        setTimeout(function () {
            _this._BE.nativeElement.focus();
        }, 20);
        if (document.getElementById("Name") != null) {
            document.getElementById("Name").focus();
        }
        this.mode = "add";
        this.isAccount = true;
        this.addMode = true;
        this.formObj.ACNAME = '';
        this.modeTitle = 'New Account';
        this.formObj.TYPE = 'A';
        this.isGroup = 0;
        this.showBank = 0;
        this.showPLedgerInfo = 0;
        this.HSN_Active = 0;
        this.BankPartyVerification.Bank = 0;
        this.BankPartyVerification.Customer = 0;
        this.BankPartyVerification.Supplier = 0;
        this.BankPartyVerification.SupplierGrp = 0;
        // this.PLedgerChild.BindValue('Q');
        this.formObj.CRLIMIT = '';
        var checkAcid = this.nodeObj.ACID.substring(0, 2);
        if (this.nodeObj.TYPE == 'G') {
            this.Parent.Under = this.nodeObj.ACNAME;
            this.formObj.PARENT = this.nodeObj.ACID;
            this.formObj.MAPID = this.nodeObj.MAPID;
            this.formObj.PType = this.nodeObj.PType;
            this.formObj.LEVELS = this.nodeObj.LEVELS + 1;
            if (this.nodeObj.ACID.substring(0, 2) == 'IE' || this.nodeObj.ACID.substring(0, 2) == 'DE') {
                this.HSN_Active = 1;
            }
        }
        else {
            this.Parent.Under = this.UnderObj.ACNAME;
            this.formObj.PARENT = this.UnderObj.ACID;
            this.formObj.MAPID = this.nodeObj.MAPID;
            this.formObj.PType = this.nodeObj.PType;
            this.formObj.LEVELS = this.nodeObj.LEVELS;
        }
        if (this.formObj.MAPID == 'B') {
            this.AdditionalInfo = 1;
            this.showBank = 1;
            this.isGroup = 0;
            this.BankPartyVerification.Bank = 1;
            this.formObj.MAPID = 'B';
        }
        else if (this.formObj.MAPID == 'C') {
            this.showAssets = 1;
            this.formObj.MAPID = 'C';
        }
        else {
            this.showAssets = 0;
            this.formObj.MAPID = '';
        }
        if (this.formObj.PType == 'C') {
            this.AdditionalInfo = 1;
            this.showPLedgerInfo = 1;
            this.showCustomer = 1;
            // this.PLedgerChild.BindValue('C', 0);
            this.masterService.PType = 'C';
            this.Party = "Customer";
            this.isGroup = 0;
            this.BankPartyVerification.Customer = 1;
            this.fromTreeTag = 1;
        }
        if ((this.formObj.PType == 'V' && checkAcid == 'PA') || this.nodeObj.ACID == 'LB1199') {
            this.AdditionalInfo = 1;
            this.showPLedgerInfo = 1;
            this.PTypeForParty = 'V';
            this.Party = "Supplier";
            this.isGroup = 0;
            this.showCustomer = 0;
            // this.PLedgerChild.BindValue('V', 0);
            this.masterService.PType = 'V';
            this.BankPartyVerification.Supplier = 1;
            this.fromTreeTag = 2;
        }
        this.divisioncheckObj = {};
        this.showDivSelectionTable = false;
        this.division.forEach(function (x) {
            x.isCheck = false;
        });
        this.formObj.DIV = this.userProfile.userDivision;
    };
    AccountLedgerComponent.prototype.SumbitSave = function () {
        var _this = this;
        if (this.masterService.validateMasterCreation("save") == false) {
            return;
        }
        if (this.mode == "view") {
            this.alertService.warning("Cannot Save. You are in view Mode");
        }
        else {
            try {
                // this.form.value.MAPID = "N";
                ////console.log("@@nodeObj", this.nodeObj)
                if (this.nodeObj.ACID == 'AG013' || (this.nodeObj.PARENT ? this.nodeObj.PARENT.MAPID == 'OD' : this.nodeObj.MAPID == 'OD') || this.nodeObj.MAPID == 'OD') {
                    this.formObj.MAPID = "OD";
                }
                var saveModel = Object.assign({}, this.formObj);
                if (saveModel.ACNAME == '') {
                    alert("Please enter ACNAME first!");
                    return;
                }
                else if (saveModel.PARENT == '') {
                    alert("Please Choose Parent!");
                    return;
                }
                if (this.BankPartyVerification.Customer == 1 || this.BankPartyVerification.Supplier == 1) {
                    // if (this.masterService.PLedgerObj.GSTTYPE == '') {
                    //   alert("Please Choose GSTTYPE!")
                    //   return;
                    // }
                    // if (this.masterService.PLedgerObj.PSTYPE == '') {
                    //   alert("Please Choose Sales/Purchase Type!")
                    //   return;
                    // }
                    // if (this.masterService.PLedgerObj.STATE == '') {
                    //   alert("Please Choose States!")
                    //   return;
                    // }
                }
                if (saveModel.HASSUBLEDGER == 1 && this.isGroup == 1) {
                    saveModel.MCAT = 'SG';
                }
                if (saveModel.DIV == '' || saveModel.DIV == null) {
                    saveModel.DIV = this.userProfile.userDivision;
                }
                if (this.formObj.CRLIMIT == '' || this.formObj.CRLIMIT === null || this.formObj.CRLIMIT == null || this.formObj.CRLIMIT === undefined || this.formObj.CRLIMIT === '') {
                    this.formObj.CRLIMIT = 0;
                    saveModel.CRLIMIT = 0;
                }
                if (this.divisioncheckObj.ShareAllDiv == 2) {
                    saveModel.ISCOMMONAC = 1;
                    if (this.mode == "add") {
                    }
                }
                else {
                    saveModel.ISCOMMONAC = 0;
                }
                saveModel.enableDivSelectionTable = this.formObj.enableDivSelectionTable;
                var divisionObj = {};
                divisionObj.DIV = this.divisioncheckObj.MultipleDivision;
                ////console.log("divisionObj", divisionObj)
                // this.SelectedDivisionList.push(divisionObj);
                this.loadingService.show("Saving Data please wait...");
                if (this.masterService.PLedgerObj.PType == "C") {
                    this.masterService.PLedgerObj.GEO = this.PLedgerChild.geo;
                }
                var DObj_1 = {};
                if (this.showDivSelectionTable == true) {
                    this.DivListForSave = [];
                    for (var _i = 0, _a = this.division; _i < _a.length; _i++) {
                        var i = _a[_i];
                        if (i.isCheck == true) {
                            var dObj = {};
                            dObj.ACID = i.ACID;
                            dObj.DIV = i.INITIAL;
                            this.DivListForSave.push(dObj);
                        }
                    }
                    DObj_1.DivList = this.DivListForSave;
                }
                else {
                    if (this.divisioncheckObj.ShareAllDiv == 2 || this.divisioncheckObj.ShareAllDiv == 1) {
                        saveModel.enableDivSelectionTable = true;
                        this.DivListForSave = [];
                        for (var _b = 0, _c = this.division; _b < _c.length; _b++) {
                            var i = _c[_b];
                            var dObj = {};
                            dObj.ACID = i.ACID;
                            dObj.DIV = i.INITIAL;
                            this.DivListForSave.push(dObj);
                        }
                        DObj_1.DivList = this.DivListForSave;
                    }
                }
                // ////console.log("CheckDivisionList",this.DivListForSave,this.showDivSelectionTable,this.division)
                // return;
                var sub = this.masterService.saveAccountLedgerOnly(this.mode, saveModel, null, this.BankPartyVerification, this.masterService.BankObj, this.masterService.PLedgerObj, this.AdditionalInfo, this.autoCalculationParam, DObj_1).subscribe(function (data) {
                    _this.loadingService.hide();
                    if (data.status == "ok") {
                        _this.nodes.map(function (data) { data; });
                        _this.alertService.success("Data Saved Successfully");
                        _this.preventNavigationService.preventNavigation(false);
                        _this.showPLedgerInfo = 0;
                        _this.isGroup = 0;
                        _this.showBank = 0;
                        _this.masterService.BankObj = {};
                        _this.masterService.PLedgerObj = {};
                        _this.formObj.ACNAME = '';
                        _this.formObj.ACCODE = '';
                        document.getElementById('generalInfo').click();
                        _this.addMode = false;
                        _this.Refresh();
                        _this.autoCalculationParam.igst = 0;
                        _this.autoCalculationParam.cgst = 0;
                        _this.autoCalculationParam.sgst = 0;
                        _this.autoCalculationParam.cess = 0;
                        _this.formObj.isAutoGSTApplicable = 0;
                        _this.formObj.isRCMApplicable = 0;
                        _this.formObj.isReverseChargeApplicable = 0;
                        _this.formObj.CRLIMIT = '';
                        _this.divisioncheckObj = {};
                        DObj_1 = {};
                        _this.cancel();
                        _this.formObj.enableDivSelectionTable = false;
                        _this.showDivSelectionTable = false;
                    }
                    else {
                        //alert(data.result);
                        //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                        if (data.result._body ==
                            "The ConnectionString property has not been initialized.") {
                            _this.router.navigate(["/login", _this.router.url]);
                            return;
                        }
                        //Some other issues need to check
                        _this.alertService.error("Error in Saving Data:" + data.result._body);
                    }
                }, function (error) {
                    _this.loadingService.hide();
                    _this.alertService.error(error);
                });
                this.subcriptions.push(sub);
            }
            catch (e) {
                this.alertService.error(e);
            }
        }
    };
    AccountLedgerComponent.prototype.initilizeAl = function () {
        this.formObj.ACNAME = '';
        this.Parent.Under = '';
        this.Parent.Primary = '';
        this.formObj.HASSUBLEDGER = 0;
        this.formObj.HSN_SACCODE = '';
    };
    AccountLedgerComponent.prototype.cancel = function () {
        this.addMode = false;
        this.showPLedgerInfo = 0;
        this.isGroup = 0;
        this.modeTitle = "";
        this.initilizeAl();
        document.getElementById('generalInfo').click();
        this.mode = 'new';
        //this.ViewMode = true;
        this.isAccount = true;
        this.parentHasSubLedger = false;
        this.ViewMode = true;
        this.divisioncheckObj = {};
        this.showDivSelectionTable = false;
        this.division.forEach(function (x) {
            x.isCheck = false;
        });
        this.formObj.DIV = this.userProfile.userDivision;
    };
    AccountLedgerComponent.prototype.EditItem = function () {
        var _this = this;
        if (!this.validateBranch("Edit")) {
            return;
        }
        this.ViewMode = false;
        this.modeTitle = 'Edit Account';
        this.mode = 'edit';
        this.HSN_Active = 0;
        // this.Parent.Under = this.nodeObj.PARENT;
        this.formObj.PARENT = this.nodeObj.PARENTID;
        this.formObj.MAPID = this.nodeObj.MAPID;
        this.formObj.PType = this.nodeObj.PType;
        this.formObj.TYPE = this.nodeObj.TYPE;
        this.formObj.ACCODE = this.nodeObj.ACCODE;
        //this.formObj.ACID = this.nodeObj.ACID;
        this.formObj.ACID = this.selectedNodeEdit;
        if (this.nodeObj.ACID.substring(0, 2) == 'IE' || this.nodeObj.ACID.substring(0, 2) == 'DE') {
            this.HSN_Active = 1;
        }
        setTimeout(function () {
            _this._BE.nativeElement.focus();
        }, 20);
    };
    AccountLedgerComponent.prototype.DeleteItem = function () {
        //this.DeleteAcc.show();
        if (!this.validateBranch("delete")) {
            return;
        }
        var childreenList = [];
        childreenList = this.nodeObj.children;
        if (childreenList.length > 0) {
            this.alertService.info("TRANSACTION EXIST UNDER SELECTED ACCOUNT NAME. HENCE, REQUESTED COMMAND IS ABORTED.");
        }
        else {
            this.DeleteAcc.show();
        }
    };
    AccountLedgerComponent.prototype.DeleteYes = function () {
        var _this = this;
        if (!this.validateBranch("delete")) {
            return;
        }
        this.DeleteAcc.hide();
        this.loadingService.show("Deleting Data please wait...");
        this.masterService.deleteAccount(this.nodeObj.ACID).subscribe(function (data) {
            if (data.status == "ok") {
                _this.alertService.success("Data Deleted Successfully");
                _this.loadingService.hide();
                _this.Parent = {};
                _this.formObj = {};
                _this.Refresh();
            }
            else {
                _this.loadingService.hide();
                //alert(data.result);
                //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                if (data.result._body ==
                    "The ConnectionString property has not been initialized.") {
                    _this.router.navigate(["/login", _this.router.url]);
                    return;
                }
                //Some other issues need to check
                _this.alertService.info("Error in Deleting Data:" + data.result._body);
            }
        });
    };
    AccountLedgerComponent.prototype.DeleteNo = function () {
        if (!this.validateBranch("delete")) {
            return;
        }
        this.DeleteAcc.hide();
    };
    AccountLedgerComponent.prototype.onClickNo = function () {
        this.DeleteAcc.hide();
    };
    AccountLedgerComponent.prototype.GSTApplicablecheck = function (e) {
        if (e.target.checked) {
            this.formObj.GSTchecked = 1;
        }
        else {
            this.formObj.GSTchecked = 0;
        }
    };
    AccountLedgerComponent.prototype.TDSApplicablecheck = function (e) {
        if (e.target.checked) {
            this.formObj.TDSchecked = 1;
        }
        else {
            this.formObj.TDSchecked = 0;
        }
    };
    AccountLedgerComponent.prototype.Refresh = function () {
        var _this = this;
        this.masterService._accountTree = [];
        this.masterService.getAccountTreeObservable = null;
        this.busy = this.masterService.getacListTree().map(function (x) { return x; })
            .subscribe(function (res) {
            _this.nodes = res;
            if (_this.tree != null) {
                _this.tree.treeModel.update();
            }
        }, function (error) {
            var err = _this.masterService.resolveError(error, "accountLedger - accountLedger");
            if (err) {
                alert(err.json());
            }
        });
    };
    AccountLedgerComponent.prototype.autoCalculationevent = function (e) {
        if (e.target.checked) {
            this.formObj.isAutoGSTApplicable = 1;
        }
        else {
            this.formObj.isAutoGSTApplicable = 0;
        }
    };
    AccountLedgerComponent.prototype.rcmChangeEvent = function (e) {
        if (e.target.checked) {
            this.formObj.isRCMApplicable = 1;
        }
        else {
            this.formObj.isRCMApplicable = 0;
        }
    };
    AccountLedgerComponent.prototype.backToDashboard = function () {
        this.router.navigate(["pages/dashboard"]);
    };
    AccountLedgerComponent.prototype.validateBranch = function (text) {
        return true;
        if (this._transactionService.userProfile.CompanyInfo.MAIN == 0 && this._transactionService.userSetting.EnableCentralMasterCreation == 1) {
            this.alertService.warning("Cannot " + text + " Ledger under branch office");
            return false;
        }
        else {
            return true;
        }
    };
    AccountLedgerComponent.prototype.enableDivSelectionTable = function (showTable) {
        var _this = this;
        // ////console.log("@@showTable", showTable)
        if (showTable == 1) {
            this.showDivSelectionTable = true;
            this.formObj.enableDivSelectionTable = true;
            this.division.forEach(function (x) {
                x.INITIAL == _this.userProfile.CompanyInfo.INITIAL ? x.isCheck = true : '';
            });
        }
        else {
            this.showDivSelectionTable = false;
            this.formObj.enableDivSelectionTable = false;
        }
        this.divisioncheckObj.ShareAllDiv = 0;
        this.formObj.ISCOMMONAC = 0;
    };
    AccountLedgerComponent.prototype.ShareAllDiv = function (event) {
        // ////console.log("@@event", event)
        this.formObj.enableDivSelectionTable = false;
        if (event == 1) {
            this.showDivSelectionTable = false;
            this.formObj.ISCOMMONAC = 1;
        }
        else {
            this.formObj.ISCOMMONAC = 0;
        }
    };
    AccountLedgerComponent.prototype.check = function (e) {
        this.divisioncheckObj.MultipleDivision = e.target.value;
        // //console.log('checkValue@!', this.divisioncheckObj.MultipleDivision)
    };
    AccountLedgerComponent.prototype.rowClick = function (i) {
        this.activeIndex = i;
    };
    AccountLedgerComponent.prototype.changeDivision = function (e) {
        this.division.forEach(function (x) {
            x.INITIAL == e ? x.isDefault = true : x.isDefault = false;
        });
        if (this.mode == "edit") {
            this.division.forEach(function (x) {
                x.INITIAL == e ? x.isCheck = true : x.isCheck = false;
            });
        }
        else {
            this.division.forEach(function (x) {
                x.INITIAL == e ? x.isCheck = true : x.isCheck = false;
            });
        }
    };
    AccountLedgerComponent.prototype.handleKeyDownboardEvent = function ($event) {
        if ($event.code == 'F6') {
            $event.preventDefault();
            this.SumbitSave();
        }
        else if ($event.code == 'F3') {
            $event.preventDefault();
            this.cancel();
        }
        else if ($event.code == 'F5') {
            $event.preventDefault();
            this.EditItem();
        }
        if ($event.code == 'F10') {
            $event.preventDefault();
            this.backToDashboard();
        }
    };
    AccountLedgerComponent.prototype.ClickShareAccount = function (value) {
        this.formObj.enableDivSelectionTable = false;
        if (this.divisioncheckObj.ShareAccount == 1) {
            this.changeDivision(this.masterService.userProfile.CompanyInfo.INITIAL);
            this.enableDivision = true;
        }
        else {
            this.divisioncheckObj.ShareAllDiv = 0;
            this.divisioncheckObj.ShareSelectiveDiv = 0;
            this.enableDivision = false;
        }
        this.formObj.enableDivSelectionTable = false;
        this.showDivSelectionTable = false;
    };
    AccountLedgerComponent.prototype.shiftParent = function () {
        var _this = this;
        this.masterService.getAccountListOfTree().subscribe(function (res) {
            _this.ParentList = res;
        });
        this.ShiftParent.show();
    };
    AccountLedgerComponent.prototype.onClose = function () {
        this.ShiftParentObj = {};
        this.ShiftParent.hide();
    };
    AccountLedgerComponent.prototype.ConfirmShiftParent = function () {
        var _this = this;
        this.masterService.ShiftParent(this.ShiftParentObj).subscribe(function (res) {
            _this.onClose();
            _this.Refresh();
        });
    };
    AccountLedgerComponent.prototype.ExportAccountLedger = function () {
        var _this = this;
        this.masterService.getAccountListOfTree().subscribe(function (res) {
            _this.ParentList = res;
        });
        this.showAccountLedgerFilterpopUp = true;
    };
    AccountLedgerComponent.prototype.ExportAll = function () {
        var _this = this;
        this.FormName.data = "Account";
        var filterObjData = { data: this.FormName, filtername: "AllAccountList" };
        this.masterService.getExcelFile('/getAllLegerList', filterObjData).subscribe(function (data) {
            _this.alertService.hide();
            _this.masterService.downloadFile(data);
            _this.CancelCommand();
        }, function (error) {
            _this.alertService.hide();
        });
    };
    AccountLedgerComponent.prototype.OkCommand = function () {
        var _this = this;
        this.LedgerFilterObj.FILTER = "Account";
        var filterObjData = { data: this.LedgerFilterObj };
        this.masterService.getExcelFileFilter('/getLedgerByFilter', filterObjData).subscribe(function (data) {
            _this.alertService.hide();
            _this.masterService.downloadFile(data);
            _this.CancelCommand();
        }, function (error) {
            _this.alertService.hide();
        });
        this.showAccountLedgerFilterpopUp = false;
    };
    AccountLedgerComponent.prototype.CancelCommand = function () {
        this.LedgerFilterObj = {};
        this.FormName = {};
        this.showAccountLedgerFilterpopUp = false;
    };
    AccountLedgerComponent.prototype.changeAccountGroup = function () {
        var _this = this;
        this.LedgerFilterObj.SUBGROUP = "";
        this.LedgerFilterObj.ACID = "";
        this.masterService.getSubGroupForQuickAccountMaster(this.LedgerFilterObj.MAINGROUP).subscribe(function (res) {
            _this.SubGroupAccountMaster = res.result;
        });
        this.masterService.getAccountListOfTree().subscribe(function (res) {
            var abc = res.filter(function (x) { return x.ACID == _this.LedgerFilterObj.MAINGROUP; });
            _this.ChildrenList = abc.length > 0 && abc[0].children.filter(function (x) { return x.TYPE == "A"; });
        });
    };
    AccountLedgerComponent.prototype.changeAccountType = function () {
        this.LedgerFilterObj.SUBGROUP = "";
        this.LedgerFilterObj.ACID = "";
    };
    AccountLedgerComponent.prototype.showBankPopup = function () {
        this.gridBankPopupSettings = {
            title: "Accounts",
            apiEndpoints: "/getBankPagedList/",
            defaultFilterIndex: 1,
            columns: [
                {
                    key: "BANKCODE",
                    title: "Bank CODE",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "BANKNAME",
                    title: "Bank NAME",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
        this.genericGridBankList.show();
    };
    AccountLedgerComponent.prototype.onBankSelect = function (value) {
        //console.log("ValueCheck",value)
        this.formObj.ACNAME = value.BANKNAME;
        this.formObj.ACCODE = value.BANKCODE;
    };
    return AccountLedgerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */])
], AccountLedgerComponent.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('fields'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], AccountLedgerComponent.prototype, "fieldsEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("LedgerChild"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__addLedg_component__["a" /* LedgComponent */])
], AccountLedgerComponent.prototype, "LedgerChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('lgModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */])
], AccountLedgerComponent.prototype, "lgModel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_tree_component__["c" /* TreeComponent */]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('DeleteAcc'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */])
], AccountLedgerComponent.prototype, "DeleteAcc", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("PLedgerChild"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16__PLedger_PLedger_component__["a" /* PLedgerComponent */])
], AccountLedgerComponent.prototype, "PLedgerChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_11_ngx_contextmenu__["b" /* ContextMenuComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11_ngx_contextmenu__["b" /* ContextMenuComponent */])
], AccountLedgerComponent.prototype, "contextMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("Name"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], AccountLedgerComponent.prototype, "_BE", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('ShiftParent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */])
], AccountLedgerComponent.prototype, "ShiftParent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AccountLedgerComponent.prototype, "handleKeyDownboardEvent", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("genericGridBankList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_19__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AccountLedgerComponent.prototype, "genericGridBankList", void 0);
AccountLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "accountLedger",
        template: __webpack_require__(1842),
        // styles: [require('../../../Style.css')],
        providers: [__WEBPACK_IMPORTED_MODULE_10__accountLedger_service__["a" /* TreeViewAcService */], __WEBPACK_IMPORTED_MODULE_2__common_services_permission_authService_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_2__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_10__accountLedger_service__["a" /* TreeViewAcService */], __WEBPACK_IMPORTED_MODULE_17_angular2_hotkeys__["HotkeysService"],
        __WEBPACK_IMPORTED_MODULE_13__common_services_navigation_perventor_navigation_perventor_service__["a" /* PreventNavigationService */],
        __WEBPACK_IMPORTED_MODULE_14__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_15__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_18__common_Transaction_Components_transaction_service__["a" /* TransactionService */]])
], AccountLedgerComponent);

var DObj = (function () {
    function DObj() {
    }
    return DObj;
}());

var DivList = (function () {
    function DivList() {
    }
    return DivList;
}());

var _a;


/***/ }),

/***/ 1440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accountLedger_service__ = __webpack_require__(1271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modaldialogs_messageDialog_messageDialog_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_permission__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedgComponent; });











var LedgComponent = (function () {
    function LedgComponent(MasterService, router, accountService, _activatedRoute, _fb, dialog, _authService) {
        this.MasterService = MasterService;
        this.accountService = accountService;
        this._activatedRoute = _activatedRoute;
        this._fb = _fb;
        this.dialog = dialog;
        this._authService = _authService;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.modeTitle = '';
        this.SaveAcEmit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.majorparent = {};
        this.majorParentAcList = [];
        this.acParentList = [];
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.dialogMessageSubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.dialogMessage$ = this.dialogMessageSubject.asObservable();
        //DialogMessage: string = "Saving data please wait ..."
        this.subcriptions = [];
        this.acledgerSubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.acledgerList$ = this.acledgerSubject.asObservable();
        // modeTitle: string = '';
        this.viewMode = false;
        this.initialTextReadOnly = false;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* LocalDataSource */]();
        // groupListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
        // groupList$: Observable<any[]> = this.groupListSubject.asObservable();
        this.acGroups = [];
        this.hasSubLedger = 0;
        this.disableHassubledger = false;
        this.actype = '';
        this.disableActype = false;
        this.value = false;
        // mode: string = "add";
        this.SubGroup = true;
        this.DialogMessage = "Saving data please wait ...";
        ////console.log("");
        this.router = router;
        this.majorparent.children = [];
        // if (!!_activatedRoute.snapshot.params['returnUrl']) {
        //     this.returnUrl = this._activatedRoute.snapshot.params['returnUrl'];
        // }
        this.userProfile = this._authService.getUserProfile();
        // ////console.log("User",this.userProfile)
    }
    LedgComponent.prototype.ngOnInit = function () {
        var _this = this;
        ////console.log("AddLedger Reached")
        this.AddLedger = this._fb.group({
            ACNAME: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            majorparent: [''],
            // parentid: [''],
            hasSub: [''],
            ACType: [''],
            ACCODE: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            ASSETTYPE: [''],
            isNotActive: ['']
        });
        var self = this;
        this.getGroups();
        this.value = false;
        this.modeTitle;
        if (this.mode == 'edit') {
            ////console.log("Mode Edit", this.ACID);
            this.modeTitle = 'Edit Ledger';
            this.MasterService.getAllAccount(this.ACID)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    ////console.log("EDIT GetAllAccountReached");
                    // this.AddLedger.get('parentid').setValue(data.result.PARENT);
                    _this.AddLedger.get('ACNAME').setValue(data.result.ACNAME);
                    _this.AddLedger.get('ACCODE').setValue(data.result.ACCODE);
                    //console.log(data);
                    _this.mode = 'edit';
                    _this.initialTextReadOnly = true;
                }
                else {
                    _this.mode = '';
                    _this.modeTitle = "Edit - Error in AccountLedger";
                    _this.initialTextReadOnly = true;
                }
            }, function (error) {
                _this.mode = '';
                _this.modeTitle = "Edit2 - Error in AccountLedger";
                _this.MasterService.resolveError(error, "AccountLedger - getAccountLedger");
            });
        }
    };
    LedgComponent.prototype.majorgroupChange = function (majorparent) {
        this.filter(this.AddLedger.get('majorparent').value);
        //  var p= this.treeList.filter(x => x.ACID == majorparent)[0];
        //   if(p!=null){ this.acParentList =p.children;} 
    };
    LedgComponent.prototype.filter = function (majorparent) {
        var _this = this;
        this.MasterService.getacListTree().subscribe(function (data) {
            var p = data.filter(function (x) { return x.ACID == majorparent; })[0];
            if (p != null) {
                _this.acParentList = p.CHILDREN;
            }
        });
    };
    LedgComponent.prototype.onSave = function () {
        var _this = this;
        this.dialogMessageSubject.next("Saving Data please wait...");
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__modaldialogs_messageDialog_messageDialog_component__["a" /* MessageDialog */], { hasBackdrop: true, data: { header: 'Information', message: this.dialogMessage$ } });
        try {
            ////console.log("submit call");
            //console.log({ PARENT: this.parentGroup })
            if (!this.parentGroup)
                throw new Error("Parent is missing");
            var al_1 = {};
            if (this.mode == 'edit') {
                al_1.ACID = this.ACID;
                //console.log({ EDITEDACID: al.ACID })
            }
            if (this.modeTitle == 'AddLedger' || this.mode == 'edit' && this.grp == 'A') {
                //console.log({ ModeTitle: "A" })
                al_1.TYPE = "A";
            }
            else {
                //console.log({ ModeTitle: "G" })
                al_1.TYPE = "G";
            }
            al_1.ACNAME = this.AddLedger.value.ACNAME;
            al_1.PType = this.AddLedger.value.ASSETTYPE;
            // al.PARENT = this.AddLedger.value.parentid == null ? this.AddLedger.value.majorparent : this.AddLedger.value.parentid;
            al_1.PARENT = this.parentGroup.ACID;
            al_1.HASSUBLEDGER = this.AddLedger.value.hasSub;
            al_1.ACCODE = this.AddLedger.value.ACCODE;
            al_1.ACTYPE = this.parentGroup.ACTYPE;
            al_1.MAPID = this.AddLedger.value.ASSETTYPE;
            al_1.DIV = this.userProfile.userDivision;
            // al.IsNotActive = this.AddLedger.value.isNotActive
            //console.log({ ACLedgSave: al })
            //console.log({ SAVEMODE: this.mode })
            var sub = this.MasterService.saveAccount(this.mode, al_1)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    ////console.log("Status",data.status)
                    var selNode = {};
                    if (_this.grp == 'A') {
                        al_1.ACID = data.result.ACID;
                        _this.MasterService.PartialAccountList.push(al_1);
                        selNode = { type: 'A', value: al_1 };
                        ////console.log("TYPE99", selNode)
                    }
                    else {
                        selNode = { type: 'G', lastparent: _this.lastParentID, value: { ACID: data.result.acid, ACNAME: al_1.ACNAME, PARENT: null, PARENTID: _this.lastParentID, children: [] } };
                    }
                    _this.SaveAcEmit.emit(selNode);
                    _this.dialogMessageSubject.next("Data Saved Successfully");
                    setTimeout(function () {
                        dialogRef.close();
                        // this.AccountTreePart(al);
                        //console.log({ AccountTree: this.AccountTreePart })
                        _this.onClose.emit(true);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
        }
        catch (ex) {
            this.dialogMessageSubject.next(ex);
            setTimeout(function () {
                dialogRef.close();
            }, 3000);
            //  alert(ex);
            //  //console.log(ex);
        }
    };
    LedgComponent.prototype.cancel = function () {
        // this.router.navigate(["./pages/masters/AccountLedger"]);
        // this.onClose.emit(true);
    };
    LedgComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    LedgComponent.prototype.AccountTreePart = function (event) {
        var _this = this;
        ////console.log("AccountTreePartCall")
        var addLedg = { ACID: event.ACID, ACNAME: event.ACNAME, PARENT: event.PARENT, SERIAL: event.SERIAL };
        this.MasterService.PartialAccountList.push(addLedg);
        var childproductList = this.MasterService.PartialAccountList.filter(function (p) { return p.PARENT == _this.selectedNode.ACID; });
        if (childproductList.length > 0) {
            this.source.load(childproductList);
        }
    };
    // public onGroupChange(event, i,selected) {
    //     try {
    //         let subjectData = this.groupListSubject.getValue();
    //         let newGroup: GroupAccounts = selected;
    //         //console.log({event:event, subjectData: subjectData, eventIndex: i ,selected:selected});
    //         newGroup.CHILDLIST = [];
    //         var ind = i;
    //         if(subjectData.length>ind+1){
    //             subjectData.splice(ind + 1, subjectData.length - 1)
    //         }
    //         //console.log({ negroup: newGroup, subjectData: subjectData });
    //         if (event) {
    //             //console.log({ GroupchageEvent: event, value: newGroup.ACID });
    //             this.accountService.getChildrenGroups(newGroup.ACID).subscribe(data => {
    //                 newGroup.CHILDLIST.push(data);
    //             }, Error => //console.log({ groupchangeError: Error })
    //                 , () => {
    //                     subjectData.push(newGroup);
    //                     this.groupListSubject.next(subjectData);
    //                     //console.log({ negroup2: newGroup, subjectData2: subjectData });
    //                 }
    //             );
    //         }
    //     }
    //     catch (ex) {
    //         //console.log({ onGroupChange: ex })
    //     }
    // }
    LedgComponent.prototype.onGrpChange = function (event, i, selected) {
        var _this = this;
        try {
            if (selected) {
                this.actype = selected.ACTYPE;
                this.changeACtype(selected.ACTYPE);
                this.disableActype == true;
                //latest selected 
                this.parentGroup = selected;
            }
            //let newGroup: GroupAccounts = event.value;
            //console.log({ onGrpChangeEvent: event, eventIndex: i, selected: selected });
            var opt_1 = [];
            var ind = i;
            if (event) {
                if (this.acGroups.length > ind + 1) {
                    this.acGroups.splice(ind + 1, this.acGroups.length - 1);
                }
                //console.log({ GroupchageEvent: event, value: event.value.ACNAME, ACID: event.value.ACID });
                this.lastParentID = event.value.ACID;
                this.accountService.getChildrenGroups(event.value.ACID)
                    .flatMap(function (data) { return data; })
                    .subscribe(function (data) {
                    var selNode = {};
                    //console.log({ children: data });
                    if (data.TYPE == 'G')
                        opt_1.push({ label: data.ACNAME, value: data });
                }, function (Error) {
                    return ;
                } //console.log({ groupchangeError: Error })
                , function () {
                    if (opt_1.length > 0) {
                        _this.acGroups.push({ group: event.value.ACNAME, value: event.value, options: opt_1 });
                    }
                    //this.groupListSubject.next(subjectData);
                    // //console.log({ negroup2: { group: event.value.ACNAME, value: event.value, options: opt }, subjectData2: subjectData });
                });
            }
        }
        catch (ex) {
            //console.log({ onGroupChange: ex })
        }
    };
    LedgComponent.prototype.getGroups = function () {
        var _this = this;
        //FIRST GET THE MAIN GROUP
        this.hasSubLedger = 0;
        this.changehassubEvent(false);
        this.disableHassubledger = false;
        ////console.log("Has SUB is false")
        this.actype = '';
        this.disableActype = false;
        this.acGroups = [];
        this.getMainGroup();
        if (!this.ACID)
            return;
        //console.log({ acid: this.ACID });
        this.accountService.getParentGroups(this.ACID)
            .flatMap(function (data) { return data; })
            .subscribe(function (data) {
            try {
                data.SELECTEDGROUPAC = data.CHILDLIST.find(function (itm) { return itm.ACID == data.SELECTEDGROUP; });
                _this.parentGroup = data.SELECTEDGROUPAC;
                //console.log({ selectedGroup: data.SELECTEDGROUP, selectedGroupAC: data.SELECTEDGROUPAC })
                if (data.SELECTEDGROUPAC.HASSUBLEDGER == 1 && _this.hasSubLedger == 0) {
                    _this.hasSubLedger = 1;
                    _this.changehassubEvent(true);
                    _this.disableHassubledger = true;
                    ////console.log("Disable AHS SUB")
                }
                var opt_2 = [];
                data.CHILDLIST.forEach(function (child) {
                    opt_2.push({ label: child.ACNAME, value: child });
                });
                _this.acGroups.push({ group: data.ACNAME, value: data, options: opt_2 });
            }
            catch (ex) {
                //console.log({ getParentGroups: ex })
            }
        }, function (error) {
        } //console.log({ getgroupError: error }) }
        , function () {
            if (_this.acGroups.length > 1) {
                var selectedGroup = _this.acGroups[0].options.find(function (itm) {
                    return itm.value.ACID == _this.acGroups[1].value.ACID;
                });
                if (selectedGroup) {
                    _this.acGroups[0].value.SELECTEDGROUPAC = selectedGroup.value;
                }
                //console.log({ selectedGroupValue: selectedGroup.value });
                if (_this.actype == '' && selectedGroup.value.ACTYPE) {
                    _this.actype = selectedGroup.value.ACTYPE;
                    _this.changeACtype(selectedGroup.value.ACTYPE);
                    _this.disableActype == true;
                }
                // //console.log({groupTofind:this.acGroups[1],options:this.acGroups[0].options,selected:this.acGroups[0].value.SELECTEDGROUPAC,selected2:this.acGroups[1].value.SELECTEDGROUPAC})
            }
        });
        return;
    };
    LedgComponent.prototype.getMainGroup = function () {
        var opt = [];
        this.accountService.getTopGroups()
            .flatMap(function (data) { return data; })
            .subscribe(function (data) {
            opt.push({ label: data.ACNAME, value: data });
        });
        ////console.log("VALUE#######",this.value)
        this.acGroups.push({ group: 'Main Group', value: { ACNAME: 'MAIN GROUP', ACID: null, PARENT: null }, options: opt });
    };
    LedgComponent.prototype.changehassubEvent = function (value) {
        if (this.AddLedger == null) {
            return;
        }
        this.AddLedger.get('hasSub').patchValue(value);
        //console.log({ HasSubVAlue: value })
    };
    LedgComponent.prototype.changeACtype = function (value) {
        try {
            this.AddLedger.get('ACType').patchValue(value);
            //console.log({ ChangeValue: value })
            if (value == 'AT') {
                this.value = true;
            }
            else {
                this.value = false;
            }
        }
        catch (ex) {
            //console.log(ex);
        }
    };
    LedgComponent.prototype.clickedNotActive = function (value) {
        if (this.AddLedger == null) {
            return;
        }
        this.AddLedger.get('isNotActive').patchValue(value);
    };
    LedgComponent.prototype.check = function () {
    };
    LedgComponent.prototype.checkActive = function () {
    };
    LedgComponent.prototype.BindValue = function (value) {
        this.AddLedger.patchValue({
            ACNAME: value
        });
    };
    return LedgComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])('onClose'),
    __metadata("design:type", Object)
], LedgComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["b" /* ModalDirective */])
], LedgComponent.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('acid'),
    __metadata("design:type", String)
], LedgComponent.prototype, "ACID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], LedgComponent.prototype, "rootID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], LedgComponent.prototype, "modeTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], LedgComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], LedgComponent.prototype, "grp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LedgComponent.prototype, "SaveAcEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('PrimaryGrp'),
    __metadata("design:type", String)
], LedgComponent.prototype, "PrimaryGrp", void 0);
LedgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'addLedgerSelector',
        template: __webpack_require__(1843),
        providers: [],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_0__accountLedger_service__["a" /* TreeViewAcService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdDialog */], __WEBPACK_IMPORTED_MODULE_10__common_services_permission__["a" /* AuthService */]])
], LedgComponent);



/***/ }),

/***/ 1443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_smart_table___ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_smart_table____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_smart_table___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partyledger_service__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component_base__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_popupLists_file_uploader_file_uploader_popup_component__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyLedgerComponent; });















var actionMapping = {
    mouse: {
        contextMenu: function (tree, node, $event) {
            $event.preventDefault();
            alert("context menu for " + node.data.ACNAME);
        },
        dblClick: function (tree, node, $event) {
            if (node.hasChildren)
                __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
        },
        click: function (tree, node, $event) {
            $event.shiftKey
                ? __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_SELECTED_MULTI(tree, node, $event)
                : __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TREE_ACTIONS */].TOGGLE_SELECTED(tree, node, $event);
        }
    },
    keys: (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["b" /* KEYS */].ENTER] = function (tree, node, $event) { return node.setActiveAndVisible(); },
        _a)
};
var PartyLedgerComponent = (function (_super) {
    __extends(PartyLedgerComponent, _super);
    function PartyLedgerComponent(masterService, _alertService, _spinerService, _authService, router, partyservice, injector, MasterService) {
        var _this = _super.call(this, injector) || this;
        _this.masterService = masterService;
        _this._alertService = _alertService;
        _this._spinerService = _spinerService;
        _this._authService = _authService;
        _this.router = router;
        _this.partyservice = partyservice;
        _this.injector = injector;
        _this.MasterService = MasterService;
        _this.gridACListPopupSettings = new __WEBPACK_IMPORTED_MODULE_13__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        _this.DialogMessage = "You are not authorized";
        _this.addMode = false;
        _this.loadListSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        _this.areaList = [];
        _this.loadList$ = _this.loadListSubject.asObservable();
        _this.isLoader = true;
        _this.currentPage = 1;
        _this.itemsPerPage = 200;
        _this.LedgerFilterObj = {};
        _this.FormName = {};
        _this.settings = {
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
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true
            },
            pager: {
                display: true,
                perPage: 14
            },
            columns: {
                ACNAME: {
                    title: 'PARTY NAME',
                    type: 'number'
                },
                ADDRESS: {
                    title: 'ADDRESS',
                    type: 'string'
                },
                VATNO: {
                    title: 'VAT NO',
                    type: 'string'
                },
                PartyType: {
                    title: 'PARTY TYPE',
                    type: 'string'
                },
                Category: {
                    title: 'CATEGORY',
                    type: 'string',
                    width: '20px'
                },
                Parent: {
                    title: 'PARTY GROUP',
                    type: 'string',
                    width: '20px'
                }
            }
        };
        _this._treeEnable = true;
        _this.parentPartyID = '';
        _this.mainGroupID = '';
        _this.nodes = [];
        _this.source = new __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_smart_table___["LocalDataSource"]();
        _this.division = [];
        _this.GeoList = [];
        _this.fileUploadPopupSettings = new __WEBPACK_IMPORTED_MODULE_14__common_popupLists_file_uploader_file_uploader_popup_component__["a" /* FileUploaderPopUpSettings */]();
        _this.asyncChildren = [
            {
                name: 'child2.1',
                subTitle: 'new and improved'
            }, {
                name: 'child2.2',
                subTitle: 'new and improved2'
            }
        ];
        _this.customTemplateStringOptions = {
            displayField: 'ACNAME',
            isExpandedField: 'expanded',
            idField: 'uuid',
            getChildren: _this.getChildren.bind(_this),
            actionMapping: actionMapping,
            allowDrag: false
        };
        _this.contextMenuActions = [
            {
                html: function (item) { return "Edit"; },
                tag: 'edit',
                enabled: function (item) { return true; },
                visible: function (item) { return true; },
            },
            {
                divider: true,
                visible: true,
            },
            {
                html: function (item) { return "Delete"; },
                tag: 'delete',
                enabled: function (item) { return true; },
                visible: function (item) { return true; },
            },
        ];
        _this.searchParty = "searchByName";
        _this.masterService.getpartyListTree().map(function (x) { return x; });
        _this.busy = _this.masterService.getpartyListTree().map(function (x) { return x; })
            .subscribe(function (res) {
            //console.log(res);
            _this.nodes = res;
            //console.log(this.nodes);
            if (_this.tree != null) {
                _this.tree.treeModel.update();
            }
            //console.log(this.tree);
        }, function (error) {
            _this.masterService.resolveError(error, "partyLedger - PartyLedger");
        });
        _this.userSetting = _this._authService.getSetting();
        _this.division = [];
        _this.masterService.getAllDivisions()
            .subscribe(function (res) {
            _this.division.push(res);
        }, function (error) {
            _this.masterService.resolveError(error, "divisions - getDivisions");
        });
        _this.partyservice.getHierachy().subscribe(function (res) {
            if (res.status == "ok") {
                _this.GeoList = res.result.GEO;
            }
        });
        // this.getTreeItem();
        _this.partyservice.loadTableListSubject.subscribe(function (x) {
            //console.log("CheckXValu5",x);
        });
        _this.partyservice.getPartyGroupList().subscribe(function (response) {
            //console.log("PARTY group,", response);
            if (response.length > 0) {
                _this.masterService.partyGroupList = response;
            }
            else {
                _this.masterService.partyGroupList = [];
            }
        });
        return _this;
    }
    Object.defineProperty(PartyLedgerComponent.prototype, "treeEnable", {
        get: function () { return this._treeEnable; },
        set: function (value) { this._treeEnable = value; },
        enumerable: true,
        configurable: true
    });
    PartyLedgerComponent.prototype.getTreeItem = function () {
        this.partyservice.Refresh();
        this.busy = this.partyservice.busy;
        this.nodes = this.partyservice.nodes;
        this.tree = this.partyservice.tree;
    };
    PartyLedgerComponent.prototype.ngOnInit = function () {
        this.partyservice.subTitle = "";
        var data = [];
        // this.loadListSubject.switchMap(snode => {
        //   data = [];
        //   ////console.log("reach here");
        //   return this.partyservice.getParentWisePartyList(snode.ACID)
        // })
        //   .subscribe(res => {
        //     data.push(<any>res);
        //     this.source.load(data);
        //   })
        // try { 
        //   let apiUrl = `${this.apiUrl}/getAllGeographicalHierarchyPagedList/${snode.ACID}`;
        //   this.source =  this.source = new ServerDataSource(this._http, 
        //     { endPoint: apiUrl, 
        //       dataKey : "data", 
        //       pagerPageKey : "currentPage",
        //       pagerLimitKey : "maxResultCount"
        //     }); 
        // } catch (ex) {
        //   //console.log(ex);
        //   alert(ex);
        // }
        this.fileUploadPopupSettings = Object.assign(new __WEBPACK_IMPORTED_MODULE_14__common_popupLists_file_uploader_file_uploader_popup_component__["a" /* FileUploaderPopUpSettings */](), {
            title: "Party Ledger Excel Upload",
            sampleFileUrl: "/downloadSampleFile/PARTYLEDGER",
            uploadEndpoints: "/masterImport/PARTYLEDGER",
            allowMultiple: false,
            acceptFormat: ".xlsx",
            filename: "PARTYLEDGER",
        });
    };
    PartyLedgerComponent.prototype.ngAfterViewInit = function () {
        // document.getElementsByClassName('ACNAME')['0'].style.width = '20%';
        // document.getElementsByClassName('ADDRESS')['0'].style.width = '20%';
        // document.getElementsByClassName('VATNO')['0'].style.width = '8%';
        // document.getElementsByClassName('PartyType')['0'].style.width = '10%';
        // document.getElementsByClassName('Category')['0'].style.width = '8%';
        // document.getElementsByClassName('Parent')['0'].style.width = '20%';
        // this.ledgercomponent.getParentName();
    };
    PartyLedgerComponent.prototype.getPartyPagedList = function () {
        var _this = this;
        // let apiUrl = `${this.apiUrl}/getParentWiseAccountPagedList/${this.selectedNode.ACID}`;  
        // this.source  = new ServerDataSource(this._http, 
        //   { endPoint: apiUrl, 
        //     dataKey : "data", 
        //     pagerPageKey : "currentPage",
        //     pagerLimitKey : "maxResultCount"
        //   }); 
        var data = [];
        // this.masterService.getAcidWisePartyList(this.selectedNode.ACID)
        // .subscribe(res => {
        //   data.push(<any>res);
        //   this.source.load(data);
        // }, error => {
        //   this.masterService.resolveError(error, "divisions - getDivisions");
        // }
        // );
        this.masterService.getAcidWisePartyList(this.selectedNode.ACID).subscribe(function (res) {
            if (res.status == "ok") {
                data = res.result;
                _this.source.load(data);
                _this.partyservice.partyList = res ? res.result : [];
                ////console.log("PledgerTable",data)
            }
            else {
                _this.partyservice.partyList = [];
            }
        });
        ////console.log("sourcevalue",this.source);
    };
    PartyLedgerComponent.prototype.getChildren = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.asyncChildren.map(function (c) {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })); }, 1000);
        });
    };
    PartyLedgerComponent.prototype.addNode = function (addednode) {
        ////console.log("node reached")
        this.tree.treeModel.getFocusedNode().data.children.push(addednode);
        this.tree.treeModel.update();
    };
    PartyLedgerComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    PartyLedgerComponent.prototype.filterNodes = function (value, tree) {
        try {
            // displayField: 'ACNAME', is required
            this.tree.treeModel.filterNodes(value, true);
        }
        catch (ex) {
            ////console.log("PartyFilter", ex);
            alert("PartyFilter-" + ex);
        }
    };
    PartyLedgerComponent.prototype.activateSubSub = function (tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    PartyLedgerComponent.prototype.onEvent = function ($event) {
        //console.log.bind(console);
    };
    PartyLedgerComponent.prototype.onselect = function (tree, $event) {
        //this.source = new ServerDataSource();
        ////console.log("CheckTree",this.tree);
        this.selectedNode = tree.treeModel.getFocusedNode().data;
        //console.log("on tree click", this.selectedNode);
        this.MasterService.SelectedGroup = this.selectedNode.ACID;
        this.getRootParent(this.selectedNode, this.nodes);
        this.loadListSubject.next(this.selectedNode);
        this.partyservice.ParentInfo = this.selectedNode;
        this.getPartyPagedList();
        this.partyservice.sortParty = "sortByName";
    };
    PartyLedgerComponent.prototype.getList = function (selNod) {
        var _this = this;
        //$event.stopPropagation();
        var data = [];
        this.partyservice.getParentWisePartyList(selNod.ACID)
            .subscribe(function (res) {
            data.push(res);
            _this.source.load(data);
        });
    };
    PartyLedgerComponent.prototype.getRootParent = function (node, list) {
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
    PartyLedgerComponent.prototype.loopingChild = function (node, cList, root) {
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
    PartyLedgerComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    PartyLedgerComponent.prototype.onTreeEnable = function (value) {
        this.treeEnable = value;
    };
    PartyLedgerComponent.prototype.AddLedger = function () {
        if (this.masterService.validateMasterCreation("create") == false || this._authService.checkMenuRight("PartyTree", "add") == false) {
            this._alertService.info("Current user has no Rights to Add party.");
            return;
        }
        this.addMode = true;
        this.modeTitle = "AddLedger";
        this.partyservice.subTitle = ">> Add New Party A/C";
        this.mode = "add";
        this.grp = "A";
        this.masterService.focusAnyControl("ACCODE");
    };
    PartyLedgerComponent.prototype.AddGroup = function (trees) {
        if (this.masterService.validateMasterCreation("create") == false || this._authService.checkMenuRight("PartyTree", "add") == false) {
            this._alertService.info("Current user has no Rights to Add Party Group.");
            return;
        }
        this.addMode = true;
        this.modeTitle = "AddGroup";
        this.partyservice.subTitle = ">> Add New Party Group";
        this.mode = "add";
        this.grp = "G";
        this.masterService.focusAnyControl("ACCODE");
        this.partyservice.addGroupSubject.next(true);
    };
    PartyLedgerComponent.prototype.onEditClick = function (party) {
        //console.log("ON EDIT CLICK", party);
        if (this.masterService.validateMasterCreation("edit") == false || this._authService.checkMenuRight("PartyTree", "edit") == false) {
            this._alertService.info("Current user has no Rights to Edit Party.");
            return;
        }
        this.addMode = true;
        this.mode = "edit";
        this.modeTitle = "AddLedger";
        this.partyservice.subTitle = ">> Edit Party A/C";
        // this.selectedNode = event.data;
        ////console.log("@selected party for edit", party);
        this.selectedNode = party;
        this.MasterService.SelectedGroup = party.PARENT_CODE;
        ////console.log("selectedNode",this.selectedNode);
        this.grp = "A";
    };
    PartyLedgerComponent.prototype.onViewClick = function (party) {
        if (this._authService.checkMenuRight("PartyTree", "view") == false) {
            this._alertService.info("Current user has no  Rights to View Party.");
            return;
        }
        this.addMode = true;
        this.mode = "view";
        this.partyservice.subTitle = ">> View Party A/C";
        // this.selectedNode = event.data;
        this.selectedNode = party;
        this.grp = "A";
    };
    PartyLedgerComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    PartyLedgerComponent.prototype.onAddClose = function (event) {
        var _this = this;
        this.addMode = false;
        this.mode = "";
        this.masterService.groupSelectObj = {};
        this.masterService.disableSubPartyA = true;
        this.masterService.disableSubPartyB = true;
        this.masterService.disableSubPartyC = true;
        this.parentPartyID = "";
        this.selectedNode = undefined;
        this.masterService.getAcidWisePartyList(event, "sortItemByDate").subscribe(function (res) {
            if (res.status == "ok") {
                _this.partyservice.partyList = res ? res.result : [];
                ////console.log("PledgerTable",data)
            }
            else {
                _this.partyservice.partyList = [];
            }
        });
    };
    PartyLedgerComponent.prototype.contextMenuClick = function (selecteddata, selectedmenu) {
        var _this = this;
        //console.log("context menu click", selecteddata, selectedmenu)
        if (selectedmenu.tag == "edit") {
            ////console.log("Edit Context menu")
            this.addMode = true;
            this.modeTitle = "AddGroup";
            this.partyservice.subTitle = ">> Edit Party Group";
            this.mode = "edit";
            this.selectedNode = selecteddata;
            this.selectedNode.PARENT_CODE = selecteddata.PARENTID;
            ////console.log("selecteddata",selecteddata)
            this.grp = "G";
        }
        else if (selectedmenu.tag == "delete") {
            var childrenPartyList_1 = [];
            var childreenList_1 = [];
            this.masterService.getChildrenPartyAccount(this.selectedNode.ACID).subscribe(function (res) {
                if (res) {
                    childrenPartyList_1 = res.result;
                    ////console.log("partylist",childrenPartyList)
                    if (childrenPartyList_1.length > 0) {
                        _this._alertService.info("PARTY ACCOUNT EXIST UNDER SELECTED PARTY GROUP. HENCE, REQUESTED COMMAND IS ABORTED");
                    }
                    else {
                        ////console.log("children",this.selectedNode.children);
                        childreenList_1 = _this.selectedNode.children;
                        if (childreenList_1.length > 0) {
                            _this._alertService.info("PARTY ACCOUNT EXIST UNDER SELECTED PARTY GROUP. HENCE, REQUESTED COMMAND IS ABORTED");
                        }
                        else {
                            _this.DeleteAcc.show();
                        }
                    }
                }
            });
        }
    };
    PartyLedgerComponent.prototype.SavePartyEmit = function (value) {
        //console.log("Party$$$$", value)
        if (value.type == "G") {
            // this.getGivenNode(value.lastparent, this.nodes, value.value);
            // this.tree.treeModel.update();
            // if (this.tree != null) {
            //   this.tree.treeModel.update();
            // }
            this.Refresh();
            this.loadListSubject.next(this.selectedNode);
        }
        else {
            var childAccountList = this.masterService.PartialAccountList.filter(function (a) { return a.PARENT == value.value.PARENT; });
            if (childAccountList.length > 0) {
                ////console.log("Data from Array");
                this.loadListSubject.next(this.selectedNode);
            }
        }
    };
    PartyLedgerComponent.prototype.EditPartyEmit = function () {
        this.Refresh();
    };
    PartyLedgerComponent.prototype.getGivenNode = function (nodeid, list, savedNode) {
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var ag = list_2[_i];
            //console.log({ 'recusiveIteration': ag.ACID })
            ////console.log("ag", ag)
            if (ag.ACID == nodeid) {
                ag.children.push(savedNode);
                //console.log('requiredvalue', ag);
                return ag;
            }
            else if (ag.children && ag.children.length > 0) {
                var node = this.getGivenNode(nodeid, ag.children, savedNode);
                if (node) {
                    return node;
                }
            }
        }
        return null;
    };
    PartyLedgerComponent.prototype.DeleteYes = function () {
        var _this = this;
        this.DeleteAcc.hide();
        this._spinerService.show("Deleting Data please wait...");
        this.masterService.deleteAccount(this.selectedNode.ACID).subscribe(function (data) {
            if (data.status == "ok") {
                _this._alertService.success("Data Deleted Successfully");
                _this._spinerService.hide();
                _this.Refresh();
            }
            else {
                //alert(data.result);
                //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                if (data.result._body ==
                    "The ConnectionString property has not been initialized.") {
                    _this.router.navigate(["/login", _this.router.url]);
                    return;
                }
                //Some other issues need to check
                _this._alertService.error("Error in Deleting Data:" + data.result._body);
            }
        });
    };
    PartyLedgerComponent.prototype.DeleteNo = function () {
        this.DeleteAcc.hide();
    };
    PartyLedgerComponent.prototype.onClickNo = function () {
        this.DeleteAcc.hide();
    };
    PartyLedgerComponent.prototype.Refresh = function () {
        var _this = this;
        this.masterService._accountPartyTree = [];
        this.masterService.getPartyTreeObservable = null;
        //this.masterService.getpartyListTree().map(x => { return x })
        this.busy = this.masterService.getpartyListTree().map(function (x) { return x; })
            .subscribe(function (res) {
            //console.log(res);
            _this.nodes = res;
            //console.log(this.nodes);
            if (_this.tree != null) {
                _this.tree.treeModel.update();
            }
            //console.log(this.tree);
        }, function (error) {
            _this.masterService.resolveError(error, "partyLedger - PartyLedger");
        });
    };
    PartyLedgerComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            //event.confirm.resolve();
            event.data.ISACTIVE = 0;
            this._spinerService.show("please Wait..");
            this.masterService.inActiveAccount(event.data.ISACTIVE, event.data.ACCODE, event.data.ACID).subscribe(function (res) {
                if (res.status == "ok") {
                    _this._spinerService.hide();
                    _this._alertService.info("Deleted successfully..");
                    _this.getPartyPagedList();
                }
                else {
                    ////console.log("response",res.result._body)
                    _this._spinerService.hide();
                    _this._alertService.info(res.result._body);
                }
            });
        }
        else {
            // event.confirm.reject();
        }
    };
    PartyLedgerComponent.prototype.partyPagination = function (event) {
        this.isLoader = true;
        this.currentPage = event;
        var t = this;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(function () {
            t.isLoader = false;
        }, 500);
    };
    PartyLedgerComponent.prototype.backToDashboard = function () {
        this.router.navigate(["pages/dashboard"]);
    };
    PartyLedgerComponent.prototype.handleKeyDownboardEvent = function ($event) {
        if ($event.code == 'F10') {
            $event.preventDefault();
            this.backToDashboard();
        }
    };
    PartyLedgerComponent.prototype.ExportPartyLedger = function () {
        this.showPartyLedgerFilterpopUp = true;
    };
    PartyLedgerComponent.prototype.ExportAll = function () {
        var _this = this;
        this.FormName.data = "Party";
        var filterObjData = { data: this.FormName, filtername: "AllPartyList" };
        this.masterService.getExcelFile('/getAllLegerList', filterObjData).subscribe(function (data) {
            _this._alertService.hide();
            _this.masterService.downloadFile(data);
            _this.CancelCommand();
        }, function (error) {
            _this._alertService.hide();
        });
    };
    PartyLedgerComponent.prototype.OkCommand = function () {
        var _this = this;
        this.LedgerFilterObj.FILTER = "Party";
        var filterObjData = { data: this.LedgerFilterObj };
        this.masterService.getExcelFileFilter('/getLedgerByFilter', filterObjData).subscribe(function (data) {
            _this._alertService.hide();
            _this.masterService.downloadFile(data);
            _this.CancelCommand();
        }, function (error) {
            _this._alertService.info("Data not found");
        });
        this.showPartyLedgerFilterpopUp = false;
    };
    PartyLedgerComponent.prototype.CancelCommand = function () {
        this.LedgerFilterObj = {};
        this.FormName = {};
        this.showPartyLedgerFilterpopUp = false;
    };
    PartyLedgerComponent.prototype.showAcList = function (i) {
        var TRNMODE = "";
        if (this.LedgerFilterObj.type == "Customer") {
            TRNMODE = "Customer_Pay";
        }
        else if (this.LedgerFilterObj.type == "Supplier") {
            TRNMODE = "SupplierListOnly";
        }
        //console.log("TRNMODE",TRNMODE)
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
    PartyLedgerComponent.prototype.onAcSelect = function (acItem) {
        this.LedgerFilterObj.accountName = acItem.ACNAME;
        this.LedgerFilterObj.ACID = acItem.ACID;
    };
    PartyLedgerComponent.prototype.changeType = function () {
        this.LedgerFilterObj.accountName = "";
        this.LedgerFilterObj.ACID = "";
        this.LedgerFilterObj.accountType = "";
    };
    PartyLedgerComponent.prototype.sortProductListByDate = function () {
        //console.log("CheckvalueFromTable",this.partyservice.partyList)
    };
    PartyLedgerComponent.prototype.getSubPartyA = function (e) {
        var _this = this;
        var mainPartyId = e.target.value;
        this.parentPartyID = mainPartyId;
        this.mainGroupID = mainPartyId;
        this.partyservice.getSubPartyList(mainPartyId).subscribe(function (res) {
            if (res.length > 0) {
                //console.log("party A", res);
                _this.masterService.subPartyAList = res;
                _this.masterService.disableSubPartyA = false;
                _this.masterService.disableSubPartyB = true;
                _this.masterService.disableSubPartyC = true;
                _this.masterService.groupSelectObj.SUBGROUP_A = "";
                _this.masterService.groupSelectObj.SUBGROUP_B = "";
                _this.masterService.groupSelectObj.SUBGROUP_C = "";
            }
            else {
                _this.masterService.subPartyAList = [];
                _this.masterService.disableSubPartyA = true;
                _this.masterService.disableSubPartyB = true;
                _this.masterService.disableSubPartyC = true;
                _this.masterService.groupSelectObj.SUBGROUP_A = "";
                _this.masterService.groupSelectObj.SUBGROUP_B = "";
                _this.masterService.groupSelectObj.SUBGROUP_C = "";
            }
        });
    };
    PartyLedgerComponent.prototype.getSubPartyB = function (e) {
        var _this = this;
        var subGroupID = e.target.value;
        this.parentPartyID = subGroupID;
        // //console.log("sub group A selected", this.parentGroupID)
        this.partyservice.getSubPartyList(this.parentPartyID).subscribe(function (res) {
            if (res.length > 0) {
                //console.log("list B", res);
                _this.masterService.subPartyBList = res;
                _this.masterService.disableSubPartyB = false;
                _this.masterService.disableSubPartyC = true;
            }
            else {
                _this.masterService.subPartyBList = [];
                _this.masterService.disableSubPartyB = true;
                _this.masterService.disableSubPartyC = true;
                _this.masterService.groupSelectObj.SUBGROUP_B = "";
            }
        });
    };
    PartyLedgerComponent.prototype.getSubPartyC = function (e) {
        var _this = this;
        var subGroupID = e.target.value;
        this.parentPartyID = subGroupID;
        //console.log("sub group B selected", this.parentPartyID)
        this.partyservice.getSubPartyList(this.parentPartyID).subscribe(function (res) {
            if (res.length > 0) {
                //console.log("list C", res);
                _this.masterService.subPartyCList = res;
                _this.masterService.disableSubPartyC = false;
            }
            else {
                _this.masterService.subPartyCList = [];
                _this.masterService.disableSubPartyC = true;
                _this.masterService.groupSelectObj.SUBGROUP_C = "";
            }
        });
    };
    PartyLedgerComponent.prototype.selectSubPartyC = function (e) {
        var subGroupID = e.target.value;
        this.parentPartyID = subGroupID;
    };
    PartyLedgerComponent.prototype.sortPartyListByName = function () {
        var _this = this;
        this.masterService.getAcidWisePartyList(this.selectedNode.ACID).subscribe(function (res) {
            if (res.status == "ok") {
                _this.partyservice.partyList = res ? res.result : [];
            }
            else {
                _this.partyservice.partyList = [];
            }
        });
    };
    PartyLedgerComponent.prototype.sortPartyListByDate = function () {
        var _this = this;
        this.masterService.getAcidWisePartyList(this.selectedNode.ACID, "sortItemByDate").subscribe(function (res) {
            if (res.status == "ok") {
                _this.partyservice.partyList = res ? res.result : [];
            }
            else {
                _this.partyservice.partyList = [];
            }
        });
    };
    PartyLedgerComponent.prototype.ExcelUploadPartyLedger = function () {
        this.fileUploadPopup.show();
    };
    PartyLedgerComponent.prototype.fileUploadSuccess = function (uploadedResult) {
        if (!uploadedResult || uploadedResult == null || uploadedResult == undefined) {
            return;
        }
    };
    return PartyLedgerComponent;
}(__WEBPACK_IMPORTED_MODULE_12__app_component_base__["a" /* AppComponentBase */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], PartyLedgerComponent.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__["b" /* ContextMenuComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__["b" /* ContextMenuComponent */])
], PartyLedgerComponent.prototype, "contextMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('DeleteAcc'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], PartyLedgerComponent.prototype, "DeleteAcc", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("genericGridACList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], PartyLedgerComponent.prototype, "genericGridACList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["c" /* TreeComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["c" /* TreeComponent */])
], PartyLedgerComponent.prototype, "tree", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fileUploadPopup"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_14__common_popupLists_file_uploader_file_uploader_popup_component__["b" /* FileUploaderPopupComponent */])
], PartyLedgerComponent.prototype, "fileUploadPopup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], PartyLedgerComponent.prototype, "handleKeyDownboardEvent", null);
PartyLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "partyLedger",
        template: __webpack_require__(1852),
        styles: [__webpack_require__(9), __webpack_require__(120), __webpack_require__(1851)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_7__partyledger_service__["a" /* TreeViewPartyervice */], __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_10__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_11__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_7__partyledger_service__["a" /* TreeViewPartyervice */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */]])
], PartyLedgerComponent);

var _a;


/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1688);
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

/***/ }),

/***/ 1457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1693);
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

/***/ }),

/***/ 1460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paged_list_component_base__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repositories__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_masters_components_PLedger_PLedger_service__ = __webpack_require__(1235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountGroupPopUpComponent; });




var AccountGroupPopUpComponent = (function (_super) {
    __extends(AccountGroupPopUpComponent, _super);
    function AccountGroupPopUpComponent(injector, masterService, _Ledgerservice) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.masterService = masterService;
        _this._Ledgerservice = _Ledgerservice;
        /** List Declaration  */
        _this.isActive = false;
        _this.itemList = [];
        _this.selectedRowIndex = 0;
        _this.tabindex = "list";
        /** Output  */
        _this.onPopUpClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onItemDoubleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.popupsettings = {
            title: "Account Groups",
            apiEndpoints: "/getAccountItem/",
            defaultFilterIndex: 0,
            columns: [
                {
                    key: "ACNAME",
                    title: "Account Name",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "ACID",
                    title: "CODE",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "PARENT",
                    title: "PARENT",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
        return _this;
    }
    AccountGroupPopUpComponent.prototype.show = function (currentItem) {
        if (currentItem === void 0) { currentItem = {}; }
        // this.popupsettings.apiEndpoints=`/getAccountItem/${this.Prefix}`,
        this.isActive = true;
        this.selectedRowIndex = 0;
        if (this.itemList.length > 0)
            return;
        this.refreshPage();
        this.refresh();
    };
    AccountGroupPopUpComponent.prototype.getData = function () {
        var _this = this;
        if (this.Prefix == '') {
            alert("Please select MainGroup first!");
            return;
        }
        this.selectedRowIndex = 0;
        if (this.itemList.length) {
            return;
        }
        this._Ledgerservice.getAccountLedgerItem(this.Prefix).subscribe(function (res) {
            if (res.status == "ok") {
                _this.itemList = res.result.length > 0 ? res.result.filter(function (x) { return x.TYPE == "G"; }) : [];
            }
        });
    };
    AccountGroupPopUpComponent.prototype.hide = function () {
        this.itemList = [];
        this.pageNumber = 1;
        this.totalItems = 0;
        this.isActive = false;
    };
    AccountGroupPopUpComponent.prototype.triggerSearch = function () {
        if (this.filterOption == null ||
            this.filterOption == undefined ||
            this.filterOption == "")
            return;
        if (this.filterValue == null ||
            this.filterValue == undefined ||
            this.filterValue == "")
            return;
        this.refreshPage();
        this.refresh();
    };
    AccountGroupPopUpComponent.prototype.singleClick = function (index) {
        this.selectedRowIndex = index;
    };
    AccountGroupPopUpComponent.prototype.doubleClick = function ($event) {
        this.onItemDoubleClick.emit($event);
        this.hide();
    };
    AccountGroupPopUpComponent.prototype.updown = function ($event) {
        if ($event.code == "ArrowDown" &&
            this.selectedRowIndex < this.pageSize - 1) {
            $event.preventDefault();
            this.selectedRowIndex++;
        }
        else if ($event.code == "ArrowDown") {
            $event.preventDefault();
            this.selectedRowIndex = 0;
            this.pageNumber = this.pageNumber + 1;
        }
        else if ($event.code == "ArrowUp" && this.selectedRowIndex - 1 > -1) {
            $event.preventDefault();
            this.selectedRowIndex--;
        }
        else if ($event.code == "ArrowUp") {
            $event.preventDefault();
            this.selectedRowIndex = 0;
            this.pageNumber = this.pageNumber > 0 ? this.pageNumber - 1 : this.pageNumber;
        }
        else if ($event.code == "Enter" &&
            this.selectedRowIndex >= 0 &&
            this.selectedRowIndex < this.itemList.length - 1) {
            $event.preventDefault();
            var itemIndex = ((this.pageNumber - 1) * this.pageSize) + (this.selectedRowIndex);
            this.onItemDoubleClick.emit(this.itemList[this.selectedRowIndex]);
            this.hide();
            this.itemListClosed();
        }
    };
    AccountGroupPopUpComponent.prototype.itemListClosed = function () {
        this.onPopUpClose.emit();
    };
    return AccountGroupPopUpComponent;
}(__WEBPACK_IMPORTED_MODULE_1__paged_list_component_base__["a" /* PagedListingComponentBase */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AccountGroupPopUpComponent.prototype, "onPopUpClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AccountGroupPopUpComponent.prototype, "onItemDoubleClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccountGroupPopUpComponent.prototype, "Prefix", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AccountGroupPopUpComponent.prototype, "updown", null);
AccountGroupPopUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "account-group-popup-grid",
        template: __webpack_require__(1702),
        styles: [__webpack_require__(9), __webpack_require__(39)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_2__repositories__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_3__pages_masters_components_PLedger_PLedger_service__["a" /* PLedgerservice */]])
], AccountGroupPopUpComponent);



/***/ }),

/***/ 1569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Transaction_Components_transaction_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PLedger_PLedger_service__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_services_navigation_perventor_navigation_perventor_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_popupLists_AGroupPopup_ForAccountLedger_component__ = __webpack_require__(1364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__PLedger_PLedger_component__ = __webpack_require__(1181);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALedgerComponent; });














var ALedgerComponent = (function () {
    function ALedgerComponent(preventNavigationService, alertService, loadingService, MasterService, router, _activatedRoute, _fb, dialog, _authService, _Ledgerservice) {
        var _this = this;
        this.preventNavigationService = preventNavigationService;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.MasterService = MasterService;
        this._activatedRoute = _activatedRoute;
        this._fb = _fb;
        this.dialog = dialog;
        this._authService = _authService;
        this._Ledgerservice = _Ledgerservice;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.SavePartyEmit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.showAssets = 0;
        this.PARENTNAME = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('');
        this.majorParentAcList = [];
        this.acParentList = [];
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.viewMode = false;
        this.DialogMessage = "Saving data please wait ...";
        this.subcriptions = [];
        this.initialTextReadOnly = false;
        this.ID = "";
        // parentGroup: GroupParty;
        this.acGroups = [];
        this.dialogMessageSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this.dialogMessage$ = this.dialogMessageSubject.asObservable();
        this.actype = "";
        this.disableActype = false;
        this.formObj = {};
        this.Title = "";
        this.isSubGrpEmpty = true;
        this.MainGrpList = [];
        this.AllGrpList = [];
        this.isActive = false;
        this.BankPartyVerification = {};
        this.AdditionalInfo = 0;
        this.showPLedgerInfo = 0;
        this.showBank = 0;
        this.selectedRowIndex = 0;
        this.router = router;
        this.userProfile = this._authService.getUserProfile();
        this.showAssets = 0;
        this._Ledgerservice.getAllMainGroup().subscribe(function (res) {
            ////console.log("reachedaaa",res)
            if (res.status == "ok") {
                _this.MainGrpList = res.result;
            }
        });
    }
    ALedgerComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this.acPopupGrid.show("a");
        // }, 4000);
        this.acPopupGrid.show(this.AccCurrentSelectedGroup);
    };
    ALedgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._fb.group({
            PARENT: [""],
            ACCODE: [""],
            ACNAME: [""],
            ISACTIVE: [1],
            HASSUBLEDGER: [0],
            ACTYPE: [""],
            DIV: [""],
            MAPID: [""],
            TYPE: [""],
            ACID: [""],
            MainGroup: [""],
        });
        this.onFormChanges();
        if (!!this._activatedRoute.snapshot.params["mode"])
            this.mode = this._activatedRoute.snapshot.params["mode"];
        if (!!this._activatedRoute.snapshot.params["isGroup"])
            this.isGroup = this._activatedRoute.snapshot.params["isGroup"];
        if (!!this._activatedRoute.snapshot.params["PType"])
            this.PType = this._activatedRoute.snapshot.params["PType"];
        this.form.patchValue({
            TYPE: this.PType
        });
        if (!!this._activatedRoute.snapshot.params["Title"])
            this.Title = this._activatedRoute.snapshot.params["Title"];
        if (!!this._activatedRoute.snapshot.params["ACID"])
            this.ACID = this._activatedRoute.snapshot.params["ACID"];
        if (!!this._activatedRoute.snapshot.params["returnUrl"])
            this.returnUrl = this._activatedRoute.snapshot.params["returnUrl"];
        if (!!this._activatedRoute.snapshot.params["PType"])
            this.PType = this._activatedRoute.snapshot.params["PType"];
        this.form.patchValue({
            TYPE: this.PType
        });
        if (this.mode == "edit") {
            //this.form.get("PARENT").disable();
            //  this.form.get("ACCODE").disable();
            //this.form.get("ACNAME").disable();
            //this.form.get("HASSUBLEDGER").disable();
            // this.form.get("ACTYPE").disable();
            // this.form.get("DIV").disable();
            // this.form.get("MAPID").disable();
            this.loadingService.show("Getting data, Please wait...");
            this.MasterService.getAllAccount(this.ACID).subscribe(function (data) {
                _this.loadingService.hide();
                _this.editItem = data.result;
                _this.PARENTNAME.patchValue(data.result.GROUPNAME);
                _this.form.patchValue({
                    HASSUBLEDGER: data.result.HASSUBLEDGER,
                    PARENT: data.result.PARENT,
                    ACCODE: data.result.ACCODE,
                    ACNAME: data.result.ACNAME,
                    ISACTIVE: data.result.ISACTIVE,
                    DIV: data.result.DIV,
                    MAPID: data.result.MAPID,
                    ACID: data.result.ACID
                });
                _this.Prefix = data.result.ACID.substring(0, 2);
            }, function (error) {
                _this.loadingService.hide();
                _this.alertService.error(error);
            });
        }
        else {
            if (this.Title == "AddLedger") {
                this.modeTitle = "Add Account Ledger";
            }
            else if (this.Title == "AddGroup") {
                this.modeTitle = "Add Account Group";
            }
        }
    };
    ALedgerComponent.prototype.onAcGroupPopupTab = function () {
        // this.acPopupGrid.show(this.AccCurrentSelectedGroup);
    };
    ALedgerComponent.prototype.onItemDoubleClick = function (event) {
        this.AdditionalInfo = 0;
        this.showBank = 0;
        this.showPLedgerInfo = 0;
        this.isSubGrpEmpty = false;
        this.AccCurrentSelectedGroup = event;
        ////console.log("selected group" + JSON.stringify(this.AccCurrentSelectedGroup));
        //  if(this.AccCurrentSelectedGroup.PARENT.substring(0,2) == "BS"){
        //    return this.showAssets = true;
        //  }
        if (this.AccCurrentSelectedGroup.ACID.substring(0, 2) == "AT")
            this.showAssets = 1;
        else
            this.showAssets = 0;
        var hasSubLedger = this.isGroup == 1
            ? this.AccCurrentSelectedGroup.HASSUBLEDGER
                ? 1
                : 0
            : 0;
        this.form.patchValue({
            HASSUBLEDGER: hasSubLedger,
            PARENT: this.AccCurrentSelectedGroup.ACNAME,
        });
        ////console.log("CheckSelectedGroup",this.AccCurrentSelectedGroup)
        // this.acPopupGrid.hide()
        var subPrefix = this.AccCurrentSelectedGroup.ACID.substring(0, 2);
        this.Prefix = subPrefix;
        // if(this.AccCurrentSelectedGroup.ACID=='B'){
        // this.childModal.show();
        // }
        this.form.patchValue({
            MAPID: '',
            Ptype: ''
        });
        this.PARENTNAME.patchValue(this.AccCurrentSelectedGroup.ACNAME);
        this.BankPartyVerification.Bank = 0;
        this.BankPartyVerification.Customer = 0;
        this.BankPartyVerification.Supplier = 0;
        if (this.AccCurrentSelectedGroup.ACID == 'ATG0003' || this.AccCurrentSelectedGroup.MAPID == 'B') {
            this.AdditionalInfo = 1;
            // this.showPLedgerInfo=1
            this.showBank = 1;
            this.showAssets = 1;
            this.form.patchValue({
                MAPID: 'B'
            });
            this.BankPartyVerification.Bank = 'saveBank';
        }
        else if (this.AccCurrentSelectedGroup.ACID == 'ATG0003' || this.AccCurrentSelectedGroup.MAPID == 'C') {
            this.showAssets = 1;
            this.form.patchValue({
                MAPID: 'C'
            });
        }
        else {
            this.showAssets = 0;
            this.form.patchValue({
                MAPID: ''
            });
        }
        this.PLedgerChild.BindValue('Q');
        if (this.AccCurrentSelectedGroup.ACID == 'LBG38' || this.AccCurrentSelectedGroup.PType == 'C') {
            //Sundry creditor
            this.AdditionalInfo = 1;
            this.showPLedgerInfo = 1;
            this.PLedgerChild.BindValue('C');
            this.MasterService.PType = 'C';
            this.form.patchValue({
                Ptype: 'C'
            });
            this.BankPartyVerification.Customer = 1;
        }
        if (this.AccCurrentSelectedGroup.ACID == 'AT01001' || this.AccCurrentSelectedGroup.PType == 'V') {
            //sundry deptors
            this.AdditionalInfo = 1;
            this.showPLedgerInfo = 1;
            this.PTypeForParty = 'V';
            this.PLedgerChild.BindValue('V');
            this.MasterService.PType = 'V';
            this.form.patchValue({
                Ptype: 'V'
            });
            this.BankPartyVerification.Supplier = 1;
        }
    };
    // @ViewChild('lgModal') childModal: ModalDirective;
    ALedgerComponent.prototype.hide = function () {
        this.isActive = false;
    };
    ALedgerComponent.prototype.onFormChanges = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (val) {
            if (_this.form.dirty)
                _this.preventNavigationService.preventNavigation(true);
        });
    };
    ALedgerComponent.prototype.majorgroupChange = function () {
        this.filter(this.form.get("majorparent").value);
    };
    ALedgerComponent.prototype.filter = function (majorparent) {
        var _this = this;
        this.MasterService.getpartyListTree().subscribe(function (data) {
            var f = data.filter(function (x) { return x.ACID == majorparent; })[0];
            if (f != null) {
                _this.acParentList = f.children;
            }
        });
    };
    ALedgerComponent.prototype.SumbitSave = function () {
        var _this = this;
        if (this.form.value.VATNO) {
            var pno = parseFloat(this.form.value.VATNO);
            if (this.userProfile.userSetting.isOverSeas == 0) {
                if (pno.toString().length != 9) {
                    this.alertService.error("PAN No is not correct");
                    this.acPopupGrid.show(this.AccCurrentSelectedGroup);
                    return;
                }
            }
        }
        try {
            // this.form.value.MAPID = "N";
            var saveModel = Object.assign({}, this.form.value);
            ////console.log("SAVEOBJ",this.form.value)
            if (this.isSubGrpEmpty == false) {
                if (this.AccCurrentSelectedGroup.HASSUBLEDGER == 1 && this.isGroup == 0) {
                    saveModel.MCAT = 'SL';
                }
                if (this.mode == "edit") {
                    //this.editItem.ISACTIVE = saveModel.ISACTIVE
                    //saveModel = this.editItem; 
                    // ////console.log("editItem"+this.editItem);
                    //////console.log("Edit Account" + JSON.stringify(saveModel));
                }
                else {
                    saveModel.PARENT = this.AccCurrentSelectedGroup.ACID;
                }
            }
            else {
                saveModel.PARENT = this.Prefix;
            }
            ////console.log("SAVEOBJ1",saveModel)
            if (saveModel.HASSUBLEDGER == 1 && this.isGroup == 1) {
                saveModel.MCAT = 'SG';
            }
            saveModel.DIV = this.userProfile.userDivision;
            //saveModel.MAPID = "N";
            this.loadingService.show("Saving Data please wait...");
            var sub = this.MasterService.saveAccountLedgerOnly(this.mode, saveModel, null, this.BankPartyVerification, this.MasterService.BankObj, this.MasterService.PLedgerObj, 0, null).subscribe(function (data) {
                _this.loadingService.hide();
                if (data.status == "ok") {
                    ////console.log("PARTYDATA@@@@", data);
                    _this.alertService.success("Data Saved Successfully");
                    _this.preventNavigationService.preventNavigation(false);
                    setTimeout(function () {
                        _this.onClose.emit(true);
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body ==
                        "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(["/login", _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.alertService.error("Error in Saving Data:" + data.result._body);
                    _this.acPopupGrid.show(_this.AccCurrentSelectedGroup);
                }
            }, function (error) {
                _this.loadingService.hide();
                _this.alertService.error(error);
            });
            this.subcriptions.push(sub);
        }
        catch (e) {
            this.alertService.error(e);
        }
    };
    ALedgerComponent.prototype.cancel = function () {
        try {
            this.router.navigate([this.returnUrl]);
        }
        catch (ex) {
            //console.log(ex);
            this.alertService.error(ex);
        }
    };
    ALedgerComponent.prototype.changePtype = function (value) {
        this.form.get("Ptype").patchValue(value);
    };
    ALedgerComponent.prototype.NotActive = function () { };
    ALedgerComponent.prototype.closePartyPopup = function () {
        this.sParty.nativeElement.style.display = "none";
    };
    ALedgerComponent.prototype.SelectMainGrp = function () {
        this.AdditionalInfo = 0;
        this.showPLedgerInfo = 0;
        this.showBank = 0;
        this.isSubGrpEmpty = true;
        this.AllGrpList = [];
        this.form.patchValue({
            HASSUBLEDGER: '',
            PARENTNAME: ''
        });
        this.acPopupGrid.GetDataFromPrefix(this.Prefix);
        // this.acPopupGrid.show(this.AccCurrentSelectedGroup)
    };
    ALedgerComponent.prototype.doubleClick = function ($event) {
        this.onItemDoubleClick($event);
    };
    ALedgerComponent.prototype.singleClick = function (index) {
        this.selectedRowIndex = index;
    };
    return ALedgerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])("acPopupGrid"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__common_popupLists_AGroupPopup_ForAccountLedger_component__["a" /* ForAccountGroupPopUpComponent */])
], ALedgerComponent.prototype, "acPopupGrid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])("onClose"),
    __metadata("design:type", Object)
], ALedgerComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], ALedgerComponent.prototype, "rootID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], ALedgerComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], ALedgerComponent.prototype, "grp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ALedgerComponent.prototype, "SavePartyEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])("showParty"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
], ALedgerComponent.prototype, "sParty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])("PLedgerChild"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13__PLedger_PLedger_component__["a" /* PLedgerComponent */])
], ALedgerComponent.prototype, "PLedgerChild", void 0);
ALedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: "ALedger",
        template: __webpack_require__(1816),
        providers: [__WEBPACK_IMPORTED_MODULE_8__PLedger_PLedger_service__["a" /* PLedgerservice */], __WEBPACK_IMPORTED_MODULE_7__common_Transaction_Components_transaction_service__["a" /* TransactionService */]],
        styles: [__webpack_require__(9), __webpack_require__(39)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__common_services_navigation_perventor_navigation_perventor_service__["a" /* PreventNavigationService */],
        __WEBPACK_IMPORTED_MODULE_10__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_11__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdDialog */],
        __WEBPACK_IMPORTED_MODULE_6__common_services_permission__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_8__PLedger_PLedger_service__["a" /* PLedgerservice */]])
], ALedgerComponent);



/***/ }),

/***/ 1570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ALedgerTable_component__ = __webpack_require__(1420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_guard_can_navigate_guard__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_ledger_accountLedgerTable_component__ = __webpack_require__(1439);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AledgerRoutingModule; });





var routes = [
    { path: 'Account', component: __WEBPACK_IMPORTED_MODULE_2__ALedgerTable_component__["a" /* ALedgerTableComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__common_services_guard_can_navigate_guard__["a" /* PendingChangesGuard */]] },
    { path: 'AccountList', component: __WEBPACK_IMPORTED_MODULE_2__ALedgerTable_component__["a" /* ALedgerTableComponent */] },
    { path: 'AccountTree', component: __WEBPACK_IMPORTED_MODULE_4__account_ledger_accountLedgerTable_component__["a" /* AccountLedgerComponent */] },
    { path: 'bank', loadChildren: function() { return Promise.resolve().then(__webpack_require__.bind(null, 1424))  .then( function(module) { return module['BankModule']; } ); } },
    { path: 'chalan-master', loadChildren: function() { return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 1600))  .then( function(module) { return module['ChalanMaserModule']; } ); } },
    { path: 'subledger-master', loadChildren: function() { return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 1611))  .then( function(module) { return module['SubLedgerMasterModule']; } ); } },
    { path: 'voucher-series-master', loadChildren: function() { return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 1596))  .then( function(module) { return module['VoucherSeriesModule']; } ); } },
    { path: 'cost-center', loadChildren: function() { return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 1584))  .then( function(module) { return module['CostCenterModule']; } ); } },
    { path: 'cost-center-category', loadChildren: function() { return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 1581))  .then( function(module) { return module['CostCenterCategoryModule']; } ); } },
    { path: 'merchant-details', loadChildren: function() { return __webpack_require__.e/* import() */(28).then(__webpack_require__.bind(null, 1588))  .then( function(module) { return module['MerchantDetailsModule']; } ); } },
    { path: 'budget-master', loadChildren: function() { return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 1578))  .then( function(module) { return module['BudgetMasterModule']; } ); } },
    { path: 'partycategory-master', loadChildren: function() { return __webpack_require__.e/* import() */(27).then(__webpack_require__.bind(null, 1593))  .then( function(module) { return module['PartyCategoryMasterModule']; } ); } }
];
var AledgerRoutingModule = (function () {
    function AledgerRoutingModule() {
    }
    return AledgerRoutingModule;
}());
AledgerRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], AledgerRoutingModule);



/***/ }),

/***/ 1571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_contextmenu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_pipe__ = __webpack_require__(1576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AccLedgerTable_component__ = __webpack_require__(1421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addAccgrp_component__ = __webpack_require__(1574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__addAcc_routing__ = __webpack_require__(1572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__addAccledger_component__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__addAccMajorgrp_component__ = __webpack_require__(1573);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccNewModule; });















var AccNewModule = (function () {
    function AccNewModule() {
    }
    return AccNewModule;
}());
AccNewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__["e" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_12__addAcc_routing__["a" /* AccNewRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__AccLedgerTable_component__["a" /* AccNewLedgerComponent */], __WEBPACK_IMPORTED_MODULE_11__addAccgrp_component__["a" /* AddAccLedgerGrpComponent */], __WEBPACK_IMPORTED_MODULE_8__search_pipe__["a" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_13__addAccledger_component__["a" /* AddAccLedgerComponent */], __WEBPACK_IMPORTED_MODULE_14__addAccMajorgrp_component__["a" /* addAccMajorGrpComponent */]
        ],
        exports: []
    })
], AccNewModule);



/***/ }),

/***/ 1572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AccLedgerTable_component__ = __webpack_require__(1421);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccNewRoutingModule; });



var routes = [
    { path: 'AccountMaster', component: __WEBPACK_IMPORTED_MODULE_2__AccLedgerTable_component__["a" /* AccNewLedgerComponent */] },
];
var AccNewRoutingModule = (function () {
    function AccNewRoutingModule() {
    }
    return AccNewRoutingModule;
}());
AccNewRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], AccNewRoutingModule);



/***/ }),

/***/ 1573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AccLedger_service__ = __webpack_require__(1298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAccMajorGrpComponent; });






var addAccMajorGrpComponent = (function () {
    function addAccMajorGrpComponent(service, router, _activatedRoute, MasterService, _fb) {
        // this.router = router;
        // if (!!_activatedRoute.snapshot.params['returnUrl']) {
        //     this.acListtree.ACID = _activatedRoute.snapshot.params['returnUrl'];
        // }
        this.service = service;
        this._activatedRoute = _activatedRoute;
        this.MasterService = MasterService;
        this._fb = _fb;
        this.ledgerAcObj = {};
        this.acListtree = {};
        this.DialogMessage = "Saving Data please wait ...";
        this.subcriptions = [];
        this.viewMode = true;
        this.modeTitle = '';
        this.mode = "add";
    }
    addAccMajorGrpComponent.prototype.ngOnInit = function () {
        // try {
        //     let self = this;
        //     if (!!this._activatedRoute.snapshot.params['returnUrl']) {
        //         this.ledgerAcObj.PARENT = 'PA';
        //     }
        // } catch (ex) {
        //     //console.log(ex);
        //     alert(ex);
        // }
        // this.Addform = this._fb.group({
        //     ACNAME: ['', Validators.required],
        //     PType:[''],
        // })
    };
    addAccMajorGrpComponent.prototype.cancel = function () {
        this.router.navigate(["./pages/masters/PartyLedger"]);
    };
    addAccMajorGrpComponent.prototype.onSave = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.SumbitSave();
    };
    addAccMajorGrpComponent.prototype.SumbitSave = function () {
        var _this = this;
        ////console.log("Submit call")
        try {
            var am = {};
            am.ACNAME = this.Addform.value.ACNAME;
            am.TYPE = "G";
            am.PARENT = "PA";
            //console.log({ AddMajor: am });
            var sub = this.MasterService.saveAccount(this.mode, am)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate(["pages/account/AccountLedger/AccountMaster"]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    // ptypeRadioChangeEvent(value)
    // {
    //    this.Addform.controls['PType'].setValue(value);
    //     //console.log({value:value});
    // }
    addAccMajorGrpComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    return addAccMajorGrpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */])
], addAccMajorGrpComponent.prototype, "childModal", void 0);
addAccMajorGrpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addAccMajorgrpSelector',
        template: __webpack_require__(1820),
        providers: [__WEBPACK_IMPORTED_MODULE_5__AccLedger_service__["a" /* TreeViewAccService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__AccLedger_service__["a" /* TreeViewAccService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
], addAccMajorGrpComponent);



/***/ }),

/***/ 1574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAccLedgerGrpComponent; });





var AddAccLedgerGrpComponent = (function () {
    function AddAccLedgerGrpComponent(MasterService, router, _activatedRoute, fb) {
        // this.router = router;
        this.MasterService = MasterService;
        this._activatedRoute = _activatedRoute;
        this.fb = fb;
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.subcriptions = [];
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
    }
    // salesman:Salesman=<Salesman>{};
    AddAccLedgerGrpComponent.prototype.ngOnInit = function () {
        // this.form = this.fb.group({
        //     majorparent: [''],
        //     ACNAME: ['', Validators.required],
        //     hasSub:[''],
        // })
        // this.MasterService.getpartyListTree()
        //     .subscribe(data => {
        //         let p = data.filter(x => x.PARENTID == 'PA');
        //         this.ParentAcList = p;
        //         if (!!this._activatedRoute.snapshot.params['Par']) {
        //             this.majorparent = this._activatedRoute.snapshot.params['Par'];
        //             this.form.get('majorparent').patchValue(this.majorparent);
        //             ////console.log("Get");
        //             //console.log(this.majorparent);
        //         }
        //     });
        // let self = this;
        // if (!!this._activatedRoute.snapshot.params['ACID']) {
        //     let ACID = this._activatedRoute.snapshot.params['ACID'];
        // }
    };
    AddAccLedgerGrpComponent.prototype.changehassubEvent = function (value) {
        if (this.form == null)
            return;
        this.form.get('hasSub').patchValue(value);
        ////console.log("value:"+value);
    };
    AddAccLedgerGrpComponent.prototype.onSave = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.SumbitSave();
    };
    AddAccLedgerGrpComponent.prototype.SumbitSave = function () {
        var _this = this;
        try {
            var ap = {};
            ap.ACNAME = this.form.value.ACNAME;
            ap.TYPE = "G";
            ap.PARENT = this.form.value.majorparent;
            ap.HASSUBLEDGER = this.form.value.hasSub;
            //console.log({AddPartyGroup:ap})
            var sub = this.MasterService.saveAccount(this.mode, ap)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddAccLedgerGrpComponent.prototype.cancel = function () {
        this.router.navigate(["pages/account/AccountLedger/AccountMaster"]);
    };
    AddAccLedgerGrpComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    return AddAccLedgerGrpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */])
], AddAccLedgerGrpComponent.prototype, "childModal", void 0);
AddAccLedgerGrpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addAccGrpSelector',
        template: __webpack_require__(1821),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
], AddAccLedgerGrpComponent);



/***/ }),

/***/ 1575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modaldialogs_messageDialog_messageDialog_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AccLedger_service__ = __webpack_require__(1298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAccLedgerComponent; });
/* unused harmony export DObj */
/* unused harmony export DivList */













var AddAccLedgerComponent = (function () {
    function AddAccLedgerComponent(MasterService, AccountService, router, _activatedRoute, _fb, dialog, _authService, spinnerservice, alertservice) {
        var _this = this;
        this.MasterService = MasterService;
        this.AccountService = AccountService;
        this._activatedRoute = _activatedRoute;
        this._fb = _fb;
        this.dialog = dialog;
        this._authService = _authService;
        this.spinnerservice = spinnerservice;
        this.alertservice = alertservice;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        // @Input('parent') Parent: string;
        this.Parent = {};
        this.Title = '';
        this.SavePartyEmit = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.EditPartyEmit = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.gridBankPopupSettings = new __WEBPACK_IMPORTED_MODULE_12__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.majorParentAcList = [];
        this.acParentList = [];
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.viewMode = false;
        this.DialogMessage = "Saving data please wait ...";
        this.subcriptions = [];
        this.initialTextReadOnly = false;
        this.ID = '';
        this.acGroups = [];
        this.dialogMessageSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.dialogMessage$ = this.dialogMessageSubject.asObservable();
        this.actype = '';
        this.disableActype = false;
        this.GeoList = [];
        this.DistrictList = [];
        this.areaList = [];
        this.division = [];
        this.showDivSelectionTable = false;
        this.divisionList = [];
        this.SelectedDivisionList = [];
        this.DivListForSave = [];
        this.TDSType_List = [];
        this.BankPartyVerification = {};
        this.ChangedDiv = '';
        this.nodeObj = {};
        this.isOnlyMainParent = 0;
        this.router = router;
        this.userProfile = this._authService.getUserProfile();
        this.userSetting = this._authService.getSetting();
        this.division = [];
        this.MasterService.getAllDivisions()
            .subscribe(function (res) {
            _this.division.push(res);
        }, function (error) {
            _this.MasterService.resolveError(error, "divisions - getDivisions");
        });
        this.MasterService.getTDSTypeList().subscribe(function (res) {
            _this.TDSType_List = res.result;
        });
    }
    AddAccLedgerComponent.prototype.Init = function () {
        // this.service.getNewValues(selectL)
        //     .subscribe(data => {
        //         if (data.status == 'ok') {
        var _this = this;
        //             this.ledgerAcObj.PARENT = data.result.parent.ACID;
        //             this.PARENTACNAME = data.result.parent.ACNAME;
        //             this.ledgerAcObj.PType = data.result.parent.PType;
        //         }
        //     }
        //     , error => {
        //         this.router.navigate([this.returnUrl]);
        //         //console.log(error);
        //     }
        //     );
        ////console.log("userSetting", this.userSetting)
        this.AccountService.getHierachy().subscribe(function (res) {
            if (res.status == "ok") {
                _this.GeoList = res.result.GEO;
            }
        });
        this.MasterService.getDistrict().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.DistrictList = res.result;
            }
        });
        this.MasterService.getAreaDetail().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.areaList = res.result;
            }
        });
    };
    AddAccLedgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._fb.group({
            majorparent: [''],
            parentid: [''],
            ACNAME: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            Ptype: [''],
            MAPID: [''],
            ADDRESS: [''],
            PHONE: [''],
            FAX: [''],
            EMAIL: [''],
            ACCODE: [''],
            isNotActive: [''],
            CITY: [''],
            STATE: [''],
            COMMON: [0],
            ISACTIVE: [1],
            VATNO: [''],
            CRPERIOD: [0],
            CRLIMIT: [0],
            GEO: ['111111-1'],
            CNAME: [''],
            ONAME: [''],
            OCONTACT: [''],
            ODESIGNATION: [''],
            CONTACTNAME: [''],
            CONTACT_A: [''],
            CONTACT_B: [''],
            CDESIGNATION: [''],
            RELATEDSPERSON_A: [''],
            RELATEDSPERSON_B: [''],
            NOTES: [''],
            Mobile: [''],
            INITIAL: [''],
            IsInitialValue: [0],
            createMember: [''],
            DIV: [this.userProfile.userDivision],
            ShareAccount: [''],
            ShareSelectiveDiv: [''],
            ShareAllDiv: [''],
            enableDivSelectionTable: [0],
            cusName: [''],
            ISCOMMONAC: [0],
            HASSUBLEDGER: [0],
            ACTYPE: [''],
            TDS_TYPE: ['']
            // BANKACCOUNTNUMBER : ['']
        });
        this.AccountService.addGroupSubject.subscribe(function (res) {
            //console.log('common');
        });
        this.Init();
        this.MasterService.userSetting.DIVISIONWISEACLISTING == 1 ?
            this.enableDivisionMapping = true :
            this.enableDivisionMapping = false;
        this.form.get('ShareAllDiv').disable();
        this.form.get('ShareSelectiveDiv').disable();
        this.form.get('ACTYPE').disable();
        if (this.mode == "add") {
            // //console.log("WHEN ADD", this.selectedNode)
            this.getGroupList(this.ACID);
            this.getRootParent(this.selectedNode, this.nodes);
            this.accLevel = this.selectedNode.LEVELS + 1;
            this.accMapId = this.selectedNode.MAPID;
        }
        if (this.userSetting.AUTOACCODE == 1) {
            this.disableACCodeIfAutoSuponeisOne();
        }
        // this.CheckCompanyAndValidate();
        this.getGroups();
        // this.MasterService.getAllAccount().subscribe(res => { this.ledgerAcList.push(<TAcList>res); });
        this.MasterService.getAccountListTree()
            .subscribe(function (data) {
            var l = data.filter(function (x) { return x.PARENTID == 'PAG'; });
            _this.majorParentAcList = l;
            if (!!_this._activatedRoute.snapshot.params['Par']) {
                _this.majorparent = _this._activatedRoute.snapshot.params['Par'];
                _this.form.get('majorparent').setValue(_this.majorparent);
                _this.majorgroupChange();
            }
            if (_this.mode == 'edit' || _this.mode == 'view') {
                _this.mode == 'edit' ? _this.modeTitle = "Edit Party A/C" : _this.modeTitle = "View Party Ledger";
                _this.getParentName(_this.mode);
                _this.form.get('ACTYPE').disable();
                _this.MasterService.getAllAccount(_this.ACID)
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        //console.log("")
                        _this.parentValueForEditMode = data.result.PARENT;
                        _this.form.get('ACNAME').setValue(data.result.ACNAME);
                        _this.form.get('HASSUBLEDGER').setValue(data.result.HASSUBLEDGER);
                        _this.form.get('ACCODE').setValue(data.result.ACCODE);
                        // this.form.get('ACCODE').setValue(data.result.ACID);
                        _this.form.get('COMMON').setValue(data.result.COMMON);
                        _this.form.get('ISACTIVE').setValue(data.result.ISACTIVE);
                        _this.form.get('DIV').setValue(data.result.DIV);
                        _this.form.get('ISCOMMONAC').setValue(data.result.ISCOMMONAC);
                        _this.form.get('ACTYPE').setValue(data.result.ACTYPE);
                        // this.form.get('BANKACCOUNTNUMBER').setValue(data.result.BANKACCOUNTNUMBER);
                        _this.form.get('TDS_TYPE').setValue(data.result.TDS_TYPE);
                        _this.form.get('INITIAL').setValue(data.result.INITIAL);
                        if (data.result.INITIAL == null || data.result.INITIAL == "") {
                            _this.form.get('IsInitialValue').setValue(0);
                            _this.form.get('INITIAL').disable();
                        }
                        else {
                            _this.form.get('IsInitialValue').setValue(1);
                            _this.form.get('INITIAL').enable();
                        }
                        if (data.result3.length > 0) {
                            _this.form.get('ShareAccount').setValue(1);
                            _this.enableShareOptions(1);
                            if (_this.division.length == data.result3.length) {
                                _this.form.get('ShareAllDiv').setValue('2');
                                _this.enableDivSelectionTable(2);
                            }
                            else {
                                _this.form.get('ShareSelectiveDiv').setValue('1');
                                _this.enableDivSelectionTable(1);
                            }
                            _this.changeDivision(_this.MasterService.userProfile.CompanyInfo.INITIAL);
                            _this.division.forEach(function (x) {
                                data.result3.forEach(function (div) {
                                    x.INITIAL == div.DIV ? x.isCheck = true : '';
                                });
                            });
                        }
                        // this.getGroupList();
                    }
                });
            }
        });
        if (this.mode == 'edit' || this.mode == 'view') {
            //console.log("edit mode", this.parentIdOnEdit);
            this.getGroupList(this.parentIdOnEdit);
        }
        if (this.mode == 'view') {
            this.form.get('ACNAME').disable();
            this.form.get('ADDRESS').disable();
            this.form.get('PHONE').disable();
            this.form.get('FAX').disable();
            this.form.get('EMAIL').disable();
            this.form.get('VATNO').disable();
            this.form.get('ACCODE').disable();
            this.form.get('CRLIMIT').disable();
            this.form.get('Ptype').disable();
            this.form.get('HASSUBLEDGER').disable();
            this.form.get('Mobile').disable();
            this.form.get('CITY').disable();
            this.form.get('CRPERIOD').disable();
            this.form.get('STATE').disable();
            this.form.get('ISACTIVE').disable();
            this.form.get('CNAME').disable();
            this.form.get('ONAME').disable();
            this.form.get('OCONTACT').disable();
            this.form.get('GEO').disable();
            this.form.get('ODESIGNATION').disable();
            this.form.get('CONTACTNAME').disable();
            this.form.get('CONTACT_A').disable();
            this.form.get('CONTACT_B').disable();
            this.form.get('CDESIGNATION').disable();
            this.form.get('RELATEDSPERSON_A').disable();
            this.form.get('RELATEDSPERSON_B').disable();
            this.form.get('NOTES').disable();
            this.form.get('COMMON').disable();
            this.form.get('INITIAL').disable();
            this.form.get('IsInitialValue').disable();
            this.form.get('ACTYPE').disable();
            this.form.get('TDS_TYPE').disable();
            // this.form.get('BANKACCOUNTNUMBER').disable();
            // this.MasterService.disableGroupSelection = true;
        }
        ////console.log("parentname", this.Parent)
        if (this.Title == "AddLedger") {
            this.modeTitle = "Add New A/C";
        }
        else if (this.Title == "AddGroup") {
            this.modeTitle = "Add New Group";
        }
        if (this.mode == 'edit') {
            this.modeTitle = "Edit A/C";
        }
        if (this.mode == 'view') {
            this.modeTitle = "View A/C";
        }
    };
    AddAccLedgerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        //console.log("ng on changes", this.parentGroupID, this.ACID);
        if (changes.ACID) {
            //console.log("from tree", this.ACID)
            this.getParentName(this.mode);
            // this.getRootParent(this.selectedNode,this.nodes);
        }
        if (changes.parentGroupID) {
            if (this.parentGroupID != undefined && this.parentGroupID != "") {
                //console.log("group changed", this.parentGroupID);
                if (this.parentGroupID == 'AG013') {
                    this.overdraft = 'OD';
                }
                else {
                    this.overdraft = '';
                }
                if (this.parentGroupID == 'AG006') {
                    this.isBank = true;
                }
                else {
                    this.isBank = false;
                }
                if (this.mode == 'add') {
                    this.ACID = this.parentGroupID;
                }
                this.MasterService.SelectedGroup = this.parentGroupID;
                this.getParentNameInGroupSelect(this.parentGroupID, "add");
                this.AccountService.getSelectNodeObj(this.parentGroupID).subscribe(function (res) {
                    var actype = res[0].ACTYPE;
                    _this.accACTYPE = res[0].ACTYPE;
                    _this.accLevel = res[0].LEVELS + 1;
                    _this.accMapId = res[0].MAPID;
                    _this.form.get('ACTYPE').setValue(actype);
                });
            }
        }
    };
    AddAccLedgerComponent.prototype.ngAfterViewInit = function () {
        this.acnameField.nativeElement.focus();
    };
    AddAccLedgerComponent.prototype.getParentName = function (mode) {
        var _this = this;
        this.MasterService.getParentNamebyID(this.ACID, mode).subscribe(function (res) {
            ////console.log("result1231231231312", res);
            var parentName = res[0];
            _this.form.get('parentid').setValue(parentName.ACNAME);
            _this.form.get('parentid').disable();
        });
    };
    AddAccLedgerComponent.prototype.getParentNameInGroupSelect = function (PARENTACID, mode) {
        var _this = this;
        this.MasterService.getParentNamebyID(PARENTACID, mode).subscribe(function (res) {
            var parentName = res[0];
            _this.form.get('parentid').setValue(parentName.ACNAME);
            _this.form.get('parentid').disable();
        });
    };
    AddAccLedgerComponent.prototype.disableACCodeIfAutoSuponeisOne = function () {
        //console.log('disable')
        this.form.get('ACCODE').disable();
    };
    AddAccLedgerComponent.prototype.CheckCompanyAndValidate = function () {
        if (this.userSetting.CompanyType == "B2B") {
            // this.form.get('VATNO').setValidators([Validators.required]);
            // this.form.get('VATNO').updateValueAndValidity;
            this.form.get('ACCODE').setValidators([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]);
            this.form.get('ACCODE').updateValueAndValidity;
            this.form.get('CRPERIOD').setValidators([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]);
            this.form.get('CRPERIOD').updateValueAndValidity;
            this.form.get('CRLIMIT').setValidators([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]);
            this.form.get('CRLIMIT').updateValueAndValidity;
            this.form.get('GEO').setValidators([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]);
            this.form.get('GEO').updateValueAndValidity;
        }
        if (this.userSetting.CompanyType == "B2C") {
            this.form.get('ACCODE').clearValidators;
            this.form.get('ACCODE').updateValueAndValidity;
            this.form.get('VATNO').clearValidators;
            this.form.get('VATNO').updateValueAndValidity;
            this.form.get('CRPERIOD').clearValidators;
            this.form.get('CRPERIOD').updateValueAndValidity;
            this.form.get('CRLIMIT').clearValidators;
            this.form.get('CRLIMIT').updateValueAndValidity;
            this.form.get('GEO').clearValidators;
            this.form.get('GEO').updateValueAndValidity;
        }
    };
    AddAccLedgerComponent.prototype.majorgroupChange = function () {
        this.filter(this.form.get('majorparent').value);
    };
    AddAccLedgerComponent.prototype.filter = function (majorparent) {
        var _this = this;
        this.MasterService.getAccountListTree().subscribe(function (data) {
            var f = data.filter(function (x) { return x.ACID == majorparent; })[0];
            if (f != null) {
                _this.acParentList = f.children;
            }
        });
    };
    AddAccLedgerComponent.prototype.SumbitSave = function () {
        var _this = this;
        if (this.MasterService.validateMasterCreation("save") == false) {
            return;
        }
        if (this.MasterService.userSetting.AUTOACCODE == 0 && this.form.value.ACCODE == "") {
            this.alertservice.warning("Accode is mandatory");
            return;
        }
        if (this.ACID == 'AG01001' || this.ACID == 'AG01002') {
            this.alertservice.warning("Cannot save account under this Group");
            return;
        }
        if (this.form.value.TDS_TYPE) {
            var tdstype = parseFloat(this.form.value.TDS_TYPE);
            if (tdstype.toString().length < 2) {
                this.alertservice.warning("TDS Type should be minimum 2 character long.");
                return;
            }
            if (tdstype.toString().length > 50) {
                this.alertservice.warning("TDS Type should be maximum 50 character long.");
                return;
            }
        }
        this.dialogMessageSubject.next("Saving Data please wait...");
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modaldialogs_messageDialog_messageDialog_component__["a" /* MessageDialog */], { hasBackdrop: true, data: { header: 'Information', message: this.dialogMessage$ } });
        try {
            // if (!this.parentGroup) throw new Error("Parent is missing");
            //console.log("FORM VALUES", this.form.value);
            var al_1 = {};
            var partyAdditionalInfo = {};
            if (this.Title == 'AddLedger' || this.mode == 'edit' && this.grp == 'A') {
                al_1.TYPE = "A";
            }
            else {
                al_1.TYPE = "G";
            }
            if (this.mode != 'edit') {
                al_1.PARENT = this.ACID;
                al_1.ACCODE = this.userSetting.AUTOACCODE != 1 ? this.form.value.ACCODE.trim() : null;
            }
            al_1.ACNAME = this.form.value.ACNAME ? this.form.value.ACNAME.trim() : this.form.value.ACNAME,
                al_1.ISACTIVE = this.form.value.isNotActive;
            al_1.ACID = this.ACID;
            al_1.HASSUBLEDGER = this.form.value.HASSUBLEDGER;
            al_1.DIV = this.ChangedDiv;
            al_1.ACTYPE = this.accACTYPE ? this.accACTYPE : this.form.controls.ACTYPE.value;
            al_1.LEVELS = this.accLevel;
            al_1.MAPID = this.accMapId;
            al_1.CRLIMIT = this.form.controls.CRLIMIT.value ? this.form.controls.CRLIMIT.value : 0;
            if (al_1.DIV == '' || al_1.DIV == null) {
                al_1.DIV = this.userProfile.userDivision;
            }
            al_1.TDS_TYPE = this.form.value.TDS_TYPE;
            if (this.mode == 'edit') {
                al_1.ACID = this.ACID;
                al_1.PARENT = this.parentValueForEditMode;
                al_1.ACCODE = this.form.get('ACCODE').value;
                //console.log({ ACID: al.ACID });
                //console.log({ ID: this.ID });
            }
            if (this.form.value.ShareAccount) {
                al_1.ISCOMMONAC = 1;
            }
            else {
                al_1.ISCOMMONAC = 0;
            }
            al_1.COMMON = this.form.value.COMMON;
            al_1.ISACTIVE = this.form.value.ISACTIVE;
            al_1.ISCOMMONAC = this.form.value.ISCOMMONAC;
            al_1.INITIAL = this.form.value.INITIAL;
            al_1.enableDivSelectionTable = this.showDivSelectionTable;
            // al.BANKACCOUNTNUMBER = this.form.controls.BANKACCOUNTNUMBER.value;
            var divisionObj = {};
            divisionObj.DIV = this.form.value.MultipleDivision;
            // al.enableDivSelectionTable = false;
            var DObj_1 = {};
            if (this.showDivSelectionTable == true) {
                al_1.ISCOMMONAC = 0;
                this.DivListForSave = [];
                for (var _i = 0, _a = this.division; _i < _a.length; _i++) {
                    var i = _a[_i];
                    //  //console.log("@@division",this.division)
                    if (i.isCheck == true) {
                        var dObj = {};
                        dObj.ACID = i.ACID;
                        dObj.DIV = i.INITIAL;
                        this.DivListForSave.push(dObj);
                    }
                }
                DObj_1.DivList = this.DivListForSave;
            }
            else {
                if (this.form.value.ShareAllDiv == 2 || this.form.value.ShareAllDiv == 1) {
                    al_1.enableDivSelectionTable = true;
                    al_1.ISCOMMONAC = 1;
                    this.DivListForSave = [];
                    for (var _b = 0, _c = this.division; _b < _c.length; _b++) {
                        var i = _c[_b];
                        var dObj = {};
                        dObj.ACID = i.ACID;
                        dObj.DIV = i.INITIAL;
                        this.DivListForSave.push(dObj);
                    }
                    DObj_1.DivList = this.DivListForSave;
                }
            }
            if (this.Title != "AddGroup") {
                if (al_1.PARENT.slice(al_1.PARENT.length - 3) != 'PAG') {
                    al_1.PARENT = this.MasterService.SelectedGroup;
                }
            }
            console.log("CheckSaveObj", al_1, this.MasterService.SelectedGroup);
            //   return;
            var sub = this.MasterService.saveAccountLedgerOnly(this.mode, al_1, null, this.BankPartyVerification, this.MasterService.BankObj, this.MasterService.PLedgerObj, 0, null, DObj_1)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    var selNode = {};
                    if (_this.grp == 'A') {
                        al_1.ACID = data.result.acid;
                        _this.MasterService.PartialAccountList.push(al_1);
                        selNode = { type: 'A', value: al_1 };
                        ////console.log("TYPE99", selNode)
                    }
                    else {
                        // alert("reached")
                        selNode = { type: 'G', lastparent: _this.ACID, value: { ACID: data.result.ACID, ACNAME: data.result.ACNAME, PARENT: data.result.PARENT, PARENTID: data.result.PARENTID, children: [] } };
                    }
                    if (_this.mode == 'edit') {
                        _this.EditPartyEmit.emit();
                    }
                    else {
                        _this.SavePartyEmit.emit(selNode);
                    }
                    _this.AccountService.loadTableListSubject.next(al_1);
                    for (var _i = 0, _a = _this.AccountService.partyList; _i < _a.length; _i++) {
                        var i = _a[_i];
                        if (i.ACID == al_1.PARENT) {
                            i.children.push(al_1);
                        }
                    }
                    _this.dialogMessageSubject.next("Data Saved Successfully");
                    setTimeout(function () {
                        dialogRef.close();
                        _this.onClose.emit(_this.ACID);
                        _this.router.navigate(["pages/account/AccountLedger/AccountMaster"]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.dialogMessageSubject.next("Error in Saving Data:" + data.result._body);
                    //console.log(data.result._body);
                    setTimeout(function () {
                        dialogRef.close();
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddAccLedgerComponent.prototype.cancel = function () {
        var acid = this.mode == 'add' ? this.ACID : this.parentIdOnEdit;
        this.onClose.emit(acid);
        this.AccountService.subTitle = " ";
    };
    AddAccLedgerComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    AddAccLedgerComponent.prototype.changePtype = function (value) {
        // this.form.get('Ptype').patchValue(value);
        ////console.log("@@value", value);
        if (value == 'V') {
            this.form.get('createMember').disable;
        }
        else {
            this.form.get('createMember').enable;
        }
    };
    AddAccLedgerComponent.prototype.onGrpChange = function (event, i, selected) {
        var _this = this;
        try {
            if (selected) {
                // this.actype = selected.ACTYPE
                // this.changeACtype(selected.ACTYPE);
                // this.disableActype == true;
                //latest selected 
                this.parentGroup = selected;
            }
            //let newGroup: GroupAccounts = event.value;
            //console.log({ onGrpChangeEvent: event, eventIndex: i, selected: selected });
            var opt_1 = [];
            var ind = i;
            if (event) {
                if (this.acGroups.length > ind + 1) {
                    this.acGroups.splice(ind + 1, this.acGroups.length - 1);
                }
                //console.log({ GroupchageEvent: event, value: event.value.ACNAME });
                this.lastParentID = event.value.ACID;
                this.AccountService.getChildrenGroups(event.value.ACID)
                    .flatMap(function (data) { return data; })
                    .subscribe(function (data) {
                    //console.log({ children: data });
                    if (data.TYPE == 'G')
                        opt_1.push({ label: data.ACNAME, value: data });
                }, function (Error) {
                    return function () {
                        if (opt_1.length > 0) {
                            _this.acGroups.push({ group: event.value.ACNAME, value: event.value, options: opt_1 });
                        }
                        //this.groupListSubject.next(subjectData);
                        // //console.log({ negroup2: { group: event.value.ACNAME, value: event.value, options: opt }, subjectData2: subjectData });
                    };
                });
            }
        }
        catch (ex) {
            //console.log({ onGroupChange: ex })
        }
    };
    AddAccLedgerComponent.prototype.onChangeArea = function (event) {
        var userAreaName = event.target.value;
        var checkArea = [];
        if (userAreaName != null) {
            checkArea = this.areaList.filter(function (x) { return x.AREANAME.toUpperCase() == userAreaName.toUpperCase(); });
            if (checkArea.length == 0) {
                if (confirm("Do you want to add new Area")) {
                }
                else {
                    this.form.get('CITY').patchValue("");
                }
            }
        }
    };
    AddAccLedgerComponent.prototype.getGroups = function () {
        var _this = this;
        //FIRST GET THE MAIN GROUP
        // this.hasSubLedger = 0;
        // this.changehassubEvent(false);
        // this.disableHassubledger = false;
        // alert("reached")
        ////console.log("Has SUB is false")
        this.actype = '';
        this.disableActype = false;
        this.acGroups = [];
        this.getMainGroup();
        if (!this.ACID)
            return;
        //console.log({ acid: this.ACID });
        this.AccountService.getParentGroups(this.ACID)
            .flatMap(function (data) { return data; })
            .subscribe(function (data) {
            try {
                data.SELECTEDGROUPAC = data.CHILDLIST.find(function (itm) { return itm.ACID == data.SELECTEDGROUP; });
                _this.parentGroup = data.SELECTEDGROUPAC;
                //console.log({ selectedGroup: data.SELECTEDGROUP, selectedGroupAC: data.SELECTEDGROUPAC })
                // this.parentid = data.SELECTEDGROUPAC.SELECTEDGROUPAC.ACNAME;
                // if (data.SELECTEDGROUPAC.HASSUBLEDGER == 1 && this.hasSubLedger == 0) {
                //     this.hasSubLedger = 1;
                //     this.changehassubEvent(true);
                //     this.disableHassubledger = true;
                //     ////console.log("Disable AHS SUB")
                // }
                var opt_2 = [];
                data.CHILDLIST.forEach(function (child) {
                    opt_2.push({ label: child.ACNAME, value: child });
                });
                _this.acGroups.push({ group: data.ACNAME, value: data, options: opt_2 });
            }
            catch (ex) {
                //console.log({ getParentGroups: ex })
            }
        }, function (error) {
            (function () {
                if (_this.acGroups.length > 1) {
                    var selectedGroup = _this.acGroups[0].options.find(function (itm) {
                        return itm.value.ACID == _this.acGroups[1].value.ACID;
                    });
                    if (selectedGroup) {
                        _this.acGroups[0].value.SELECTEDGROUPAC = selectedGroup.value;
                    }
                    //console.log({ selectedGroupValue: selectedGroup.value });
                    // if (selectedGroup.value.Ptype) {
                    //     alert("REACHED")
                    //     this.actype = selectedGroup.value.Ptype
                    //     this.changePtype(selectedGroup.value.Ptype);
                    //     this.disableActype == true;
                    // }
                    // //console.log({groupTofind:this.acGroups[1],options:this.acGroups[0].options,selected:this.acGroups[0].value.SELECTEDGROUPAC,selected2:this.acGroups[1].value.SELECTEDGROUPAC})
                }
            });
        });
        return;
    };
    AddAccLedgerComponent.prototype.getMainGroup = function () {
        var opt = [];
        this.AccountService.getTopGroups()
            .flatMap(function (data) { return data; })
            .subscribe(function (data) {
            opt.push({ label: data.ACNAME, value: data });
        });
        this.acGroups.push({ group: 'Main Group', value: { ACNAME: 'MAIN GROUP', ACID: null, PARENT: null }, options: opt });
        ////console.log("CheckAcGroup", this.acGroups)
    };
    AddAccLedgerComponent.prototype.clickedNotActive = function (value) {
        if (this.form == null) {
            return;
        }
        this.form.get('isNotActive').patchValue(value);
    };
    AddAccLedgerComponent.prototype.NotActive = function () {
    };
    AddAccLedgerComponent.prototype.enableInitial = function (value) {
        // ////console.log("@@value", value)
        if (value == 0) {
            this.form.get('INITIAL').disable();
        }
        else {
            this.form.get('INITIAL').enable();
        }
    };
    AddAccLedgerComponent.prototype.enableShareOptions = function (enableShareDiv) {
        // ////console.log("@@enableShareDiv", enableShareDiv)
        if (enableShareDiv == 1) {
            this.form.get('ShareSelectiveDiv').enable();
            this.form.get('ShareAllDiv').enable();
            // this.showDivSelectionTable = true;
        }
        else {
            this.form.get('ShareSelectiveDiv').disable();
            this.form.get('ShareAllDiv').disable();
            this.form.get('ShareSelectiveDiv').setValue(0);
            this.form.get('ShareAllDiv').setValue(0);
            this.showDivSelectionTable = false;
        }
    };
    AddAccLedgerComponent.prototype.enableDivSelectionTable = function (showTable) {
        var _this = this;
        // ////console.log("@@showTable", showTable)
        if (showTable == 1) {
            this.showDivSelectionTable = true;
            this.form.get('ShareAllDiv').setValue(0);
            this.enableDivision = true;
            this.division.forEach(function (x) {
                x.INITIAL == _this.userProfile.CompanyInfo.INITIAL ? x.isCheck = true : '';
            });
        }
        else {
            this.showDivSelectionTable = false;
            this.enableDivision = false;
        }
    };
    AddAccLedgerComponent.prototype.ShareAllDiv = function (ShareAllDiv) {
        this.showDivSelectionTable = false;
        if (ShareAllDiv == 1) {
            this.form.get('ShareSelectiveDiv').setValue(0);
            this.form.get('ISCOMMONAC').setValue(1);
        }
        else {
            this.form.get('ISCOMMONAC').setValue(0);
        }
        this.form.get('enableDivSelectionTable').setValue(false);
    };
    AddAccLedgerComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    AddAccLedgerComponent.prototype.handleKeyDownboardEvent = function ($event) {
        if ($event.code == "F3") {
            $event.preventDefault();
            this.cancel();
        }
    };
    AddAccLedgerComponent.prototype.check = function (e) {
        // //console.log('checkValue@!',this.division)
        this.form.value.MultipleDivision = e.target.value;
    };
    AddAccLedgerComponent.prototype.rowClick = function (i) {
        this.activeIndex = i;
    };
    AddAccLedgerComponent.prototype.changeDivision = function (e) {
        // //console.log("CheckValue@",e)
        this.ChangedDiv = e;
        this.division.forEach(function (x) {
            x.INITIAL == e ? x.isDefault = true : x.isDefault = false;
        });
        if (this.mode == "add") {
            this.division.forEach(function (x) {
                x.INITIAL == e ? x.isCheck = true : x.isCheck = false;
            });
        }
        else {
            this.division.forEach(function (x) {
                x.INITIAL == e ? x.isCheck = true : '';
            });
        }
    };
    AddAccLedgerComponent.prototype.ClickShareAccount = function (value) {
        this.form.value.enableDivSelectionTable = false;
        if (this.form.value.ShareAccount == 1) {
            this.changeDivision(this.MasterService.userProfile.CompanyInfo.INITIAL);
            this.enableDivision = true;
        }
        else {
            this.form.get('ShareAllDiv').setValue(0);
            this.form.get('ShareSelectiveDiv').setValue(0);
            this.enableDivision = false;
        }
        this.form.get('enableDivSelectionTable').setValue(false);
    };
    AddAccLedgerComponent.prototype.getGroupList = function (parentACID) {
        //console.log("get group list", this.ACID);
        var _this = this;
        if (parentACID) {
            this.AccountService.getAccountHeirarchy(parentACID).subscribe(function (res) {
                //console.log("result hai", res);
                var itemGroup = res[0];
                //console.log("MAIN GROUP LSIR", this.MasterService.mainGroupList);
                _this.MasterService.groupSelectObj.MGROUP = itemGroup.L1;
                //console.log("main group id", this.MasterService.groupSelectObj.MGROUP);
                _this.AccountService.getSubGroupList(_this.MasterService.groupSelectObj.MGROUP).subscribe(function (res) {
                    if (res.length > 0) {
                        _this.MasterService.subGroupAList = res;
                        _this.MasterService.groupSelectObj.SUBGROUP_A = itemGroup.L2;
                        //console.log("SUBGROUP A LIST", this.MasterService.subGroupAList);
                        _this.MasterService.disableSubGroupA = false;
                        _this.AccountService.getSubGroupList(_this.MasterService.groupSelectObj.SUBGROUP_A).subscribe(function (res) {
                            if (res.length > 0) {
                                _this.MasterService.subGroupBList = res;
                                _this.MasterService.groupSelectObj.SUBGROUP_B = itemGroup.L3;
                                _this.MasterService.disableSubGroupB = false;
                                _this.AccountService.getSubGroupList(_this.MasterService.groupSelectObj.SUBGROUP_B).subscribe(function (res) {
                                    if (res.length > 0) {
                                        _this.MasterService.subGroupCList = res;
                                        _this.MasterService.groupSelectObj.SUBGROUP_C = itemGroup.L4;
                                        _this.MasterService.disableSubGroupC = false;
                                    }
                                    else {
                                        _this.MasterService.disableSubGroupC = true;
                                    }
                                });
                            }
                            else {
                                _this.MasterService.disableSubGroupB = true;
                            }
                        });
                    }
                    else {
                        _this.MasterService.disableSubGroupA = true;
                    }
                });
            });
        }
    };
    AddAccLedgerComponent.prototype.getRootParent = function (node, list) {
        // return;
        // console.log("ChewcekLog",node,list)
        //console.log("get Rooy parent", node,list);
        this.Parent.Under = '';
        // if (node.ACID == "CA") this.form.value.ACTYPE = "LB"; this.form.get('ACTYPE').setValue("LB");
        if (node.ACID == "CA")
            this.form.get('ACTYPE').setValue("LB");
        else
            this.form.get('ACTYPE').setValue(node.ACID);
        this.nodeObj = node;
        this.UnderObj = node.PARENT;
        if (node.PARENTID == 'BS' || node.PARENTID == 'PL' || node.PARENTID == 'TD') {
            this.PrimaryGrpObj = node;
            this.Parent.Primary = node.ACNAME;
            this.isOnlyMainParent = 1;
            this.UnderObj = node;
            return;
        }
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var t = list_1[_i];
            if (node.PARENTID != t.ACID) {
                this.loopingChild(node, t.children, t);
            }
            else {
                this.root = node.PARENTID;
                this.PrimaryGrpObj = node;
            }
        }
        if (this.UnderObj) {
            this.Parent.Under = this.UnderObj.ACNAME;
        }
        if (node.TYPE == "G") {
            this.UnderObj = node;
            this.isGroup == 1;
            this.modeTitle = 'View Group';
            this.ViewMode = true;
        }
        else {
            this.modeTitle = 'View Account';
            this.ViewMode = true;
        }
        // this.Parent.Primary=this.PrimaryGrpObj.ACNAME;
        if (this.root == 'LB') {
            this.Parent.Primary = 'LIABILITES';
            //   this.form.value.ACTYPE = 'LB'
            this.form.get('ACTYPE').setValue('LB');
        }
        else if (this.root == 'AT') {
            this.Parent.Primary = 'ASSETS';
            //   this.form.value.ACTYPE = 'AT'
            this.form.get('ACTYPE').setValue('AT');
        }
        else if (this.root == 'DI') {
            this.Parent.Primary = 'DIRECT INCOME';
            //   this.form.value.ACTYPE = 'DI'
            this.form.get('ACTYPE').setValue('DI');
        }
        else if (this.root == 'DE') {
            this.Parent.Primary = 'DIRECT EXPENSES';
            //   this.form.value.ACTYPE = 'DE'
            this.form.get('ACTYPE').setValue('DE');
        }
        else if (this.root == 'IE') {
            this.Parent.Primary = 'INDIRECT EXPENSES';
            //   this.form.value.ACTYPE = 'IE'
            this.form.get('ACTYPE').setValue('IE');
        }
        else if (this.root == 'II') {
            this.Parent.Primary = 'INDIRECT INCOME';
            //   this.form.value.ACTYPE = 'II'
            this.form.get('ACTYPE').setValue('II');
        }
        else if (this.root == 'CA') {
            this.Parent.Primary = 'CAPITAL A/C';
            //   this.form.value.ACTYPE = 'LB'
            this.form.get('ACTYPE').setValue('LB');
        }
        this.form.get('ACTYPE').disable();
        this.accACTYPE = this.form.controls.ACTYPE.value;
        this.isOnlyMainParent = 0;
    };
    AddAccLedgerComponent.prototype.loopingChild = function (node, cList, root) {
        for (var _i = 0, cList_1 = cList; _i < cList_1.length; _i++) {
            var c = cList_1[_i];
            if (c != node) {
                this.loopingChild(node, c.children, root);
            }
            else {
                this.root = root.ACID;
                this.PrimaryGrpObj = root;
            }
        }
    };
    AddAccLedgerComponent.prototype.DeleteLedger = function () {
        //console.log("CURRENT ACCNT ACID", this.ACID);
        this.DeleteAcc.show();
    };
    AddAccLedgerComponent.prototype.DeleteYes = function () {
        var _this = this;
        //console.log("DELETE YES", this.ACID,this.parentIdOnEdit);
        this.DeleteAcc.hide();
        this.spinnerservice.show("Deleting account, please wait...");
        this.MasterService.deleteAccount(this.ACID).subscribe(function (data) {
            if (data.status == "ok") {
                _this.alertservice.success("Account deleted successfully");
                _this.spinnerservice.hide();
                _this.onClose.emit(_this.parentIdOnEdit);
                _this.router.navigate(["pages/account/AccountLedger/AccountMaster"]);
            }
            else {
                _this.spinnerservice.hide();
                _this.alertservice.error("Error in  deleting data: " + data.result._body);
            }
        });
    };
    AddAccLedgerComponent.prototype.DeleteNo = function () {
        this.DeleteAcc.hide();
    };
    AddAccLedgerComponent.prototype.showBankPopup = function () {
        this.gridBankPopupSettings = {
            title: "Accounts",
            apiEndpoints: "/getBankPagedList/",
            defaultFilterIndex: 1,
            columns: [
                {
                    key: "BANKCODE",
                    title: "Bank CODE",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "BANKNAME",
                    title: "Bank NAME",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
        this.genericGridBankList.show();
    };
    AddAccLedgerComponent.prototype.onBankSelect = function (value) {
        //console.log("ValueCheck",value)
        this.form.get('ACNAME').setValue(value.BANKNAME);
        this.form.get('ACCODE').setValue(value.BANKCODE);
    };
    AddAccLedgerComponent.prototype.onChangeTDSType = function (event) {
        var user_tdstype = event.target.value;
        var check_TDSType = [];
        if (user_tdstype != null) {
            check_TDSType = this.TDSType_List.filter(function (x) { return x.TDS_TYPE.toUpperCase() == user_tdstype.toUpperCase(); });
            if (check_TDSType.length == 0) {
                if (confirm("Do you want to add new TDS Type?")) {
                }
                else {
                }
            }
        }
    };
    return AddAccLedgerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])('onClose'),
    __metadata("design:type", Object)
], AddAccLedgerComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('acid'),
    __metadata("design:type", String)
], AddAccLedgerComponent.prototype, "ACID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('PARENTID'),
    __metadata("design:type", Object)
], AddAccLedgerComponent.prototype, "PARENTID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('partyParentName'),
    __metadata("design:type", Object)
], AddAccLedgerComponent.prototype, "partyParentName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddAccLedgerComponent.prototype, "rootID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddAccLedgerComponent.prototype, "Title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddAccLedgerComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddAccLedgerComponent.prototype, "grp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["b" /* ModalDirective */])
], AddAccLedgerComponent.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddAccLedgerComponent.prototype, "SavePartyEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddAccLedgerComponent.prototype, "EditPartyEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('ACNAME'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
], AddAccLedgerComponent.prototype, "acnameField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddAccLedgerComponent.prototype, "parentGroupID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddAccLedgerComponent.prototype, "parentIdOnEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AddAccLedgerComponent.prototype, "selectedNode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Array)
], AddAccLedgerComponent.prototype, "nodes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddAccLedgerComponent.prototype, "overdraft", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AddAccLedgerComponent.prototype, "isBank", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('DeleteAcc'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["b" /* ModalDirective */])
], AddAccLedgerComponent.prototype, "DeleteAcc", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])("genericGridBankList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddAccLedgerComponent.prototype, "genericGridBankList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AddAccLedgerComponent.prototype, "handleKeyDownboardEvent", null);
AddAccLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'addAccLedgerSelector',
        template: __webpack_require__(1822),
        //  [(ngModel)]="PARENTACNAME"
        // [(ngModel)]="RootName"
        providers: [__WEBPACK_IMPORTED_MODULE_9__AccLedger_service__["a" /* TreeViewAccService */]],
        styles: ["input:disabled, select:disabled, textarea:disabled {\n    cursor: not-allowed !important;\n    color: black !important;\n    background-color: #EBEBE4 !important;\n}\n\nbutton:disabled{\ncursor: not-allowed !important;\n}"]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_9__AccLedger_service__["a" /* TreeViewAccService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdDialog */],
        __WEBPACK_IMPORTED_MODULE_8__common_services_permission__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_10__common_services_spinner_spinner_service__["a" /* SpinnerService */],
        __WEBPACK_IMPORTED_MODULE_11__common_services_alert_alert_service__["a" /* AlertService */]])
], AddAccLedgerComponent);

var DObj = (function () {
    function DObj() {
    }
    return DObj;
}());

var DivList = (function () {
    function DivList() {
    }
    return DivList;
}());



/***/ }),

/***/ 1576:
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
                if (option == "searchByName") {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var comId = (item.ACNAME) ? (item.ACNAME).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (comId.indexOf(searchedQuery) !== -1) {
                            // //console.log("CheckIten",item)
                            return item;
                        }
                    });
                }
                else if (option == "searchByVat") {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var comId = (item.ACCODE) ? (item.ACCODE).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (comId.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                    });
                }
                else if (option == "orderByStamp") {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var comId = (item.VATNO) ? (item.VATNO).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (comId.indexOf(searchedQuery) !== -1) {
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

/***/ 1577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bank_component__ = __webpack_require__(1423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bank_list_component__ = __webpack_require__(1422);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankRoutingModule; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__bank_list_component__["a" /* BankListComponent */] },
    { path: 'add-bank', component: __WEBPACK_IMPORTED_MODULE_2__bank_component__["a" /* BankComponent */] },
];
var BankRoutingModule = (function () {
    function BankRoutingModule() {
    }
    return BankRoutingModule;
}());
BankRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], BankRoutingModule);



/***/ }),

/***/ 1590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_style_loader_smartTables_scss__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_style_loader_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_style_loader_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ng2_smart_table___ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ng2_smart_table____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_ng2_smart_table___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modaldialogs_authorizationDialog_authorizationDialog_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PLedger_service__ = __webpack_require__(1235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pLedgerTableComponent; });










var pLedgerTableComponent = (function () {
    function pLedgerTableComponent(_Ledgerservice, router, dialog, masterService) {
        var _this = this;
        this._Ledgerservice = _Ledgerservice;
        this.router = router;
        this.dialog = dialog;
        this.masterService = masterService;
        this.settings = {
            mode: 'external',
            add: {
                addButtonContent: '',
                createButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            edit: {
                editButtonContent: 'Edit',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            delete: {
                deleteButtonContent: ' ',
                confirmDelete: true
            },
            columns: {
                ACNAME: {
                    title: 'NAME',
                    type: 'string'
                },
                shortname: {
                    title: 'Short Name',
                    type: 'string'
                },
                ACCODE: {
                    title: 'SAPCODE',
                    type: 'string'
                },
                Address: {
                    title: 'ADDRESS',
                    type: 'string'
                },
                GSTNO: {
                    title: 'GST No',
                    type: 'string'
                },
                ISACTIVE: {
                    title: 'STATUS',
                    type: 'string',
                    valuePrepareFunction: function (value) { return value == true ? 'Active' : 'InActive'; },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'Show all',
                            list: [
                                { value: true, title: 'Active' },
                                { value: false, title: 'InActive' },
                            ]
                        }
                    }
                }
            }
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_2__node_modules_ng2_smart_table___["LocalDataSource"]();
        this.messageSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]("You are not authorized.");
        this.message$ = this.messageSubject.asObservable();
        try {
            this.PType = this.masterService.PType;
            //  ////console.log("Ptype",this.PType)
            if (this.PType == 'C')
                this.partyName = 'New Customer';
            else if (this.PType == 'V')
                this.partyName = 'New Supplier';
            var data_1 = [];
            this._Ledgerservice.getPartyItemByPtype(this.PType).subscribe(function (res) {
                if (res.status == "ok") {
                    data_1 = res.result;
                    _this.source.load(data_1);
                    //  ////console.log("PledgerTable",data)
                }
            });
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    }
    pLedgerTableComponent.prototype.setMode = function () {
        try {
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    pLedgerTableComponent.prototype.onAddClick = function () {
        try {
            if (this.PType == 'C')
                this.router.navigate(["./pages/masters/PartyLedger/Customer", { mode: "add", isGroup: 0, PType: 'C', Title: 'Create Customer', returnUrl: this.router.url }]);
            else if (this.PType == 'V')
                this.router.navigate(["./pages/masters/PartyLedger/Supplier", { mode: "add", isGroup: 0, PType: 'V', Title: 'Create Supplier', returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    pLedgerTableComponent.prototype.onGrpAddClick = function () {
        try {
            if (this.PType == 'C')
                this.router.navigate(["./pages/masters/PartyLedger/Customer", { mode: "add", isGroup: 1, PType: 'C', Title: 'Create Customer Group', returnUrl: this.router.url }]);
            else if (this.PType == 'V')
                this.router.navigate(["./pages/masters/PartyLedger/Supplier", { mode: "add", isGroup: 1, PType: 'V', Title: 'Create Supplier Group', returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    pLedgerTableComponent.prototype.onDeleteConfirm = function (event) {
        try {
            if (window.confirm('Are you sure you want to delete?')) {
                event.confirm.resolve();
            }
            else {
                event.confirm.reject();
            }
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    pLedgerTableComponent.prototype.onViewClick = function () {
        try {
            // this.router.navigate(["./pages/masters/company", { initial: event.data.INITIAL, mode: "view", returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    pLedgerTableComponent.prototype.onEditClick = function (event) {
        try {
            var acid = event.data.ACID;
            if (this.PType == 'C')
                this.router.navigate(["./pages/masters/PartyLedger/Customer", { mode: "edit", ACID: acid, isGroup: 0, PType: 'C', Title: 'Edit Customer', returnUrl: this.router.url }]);
            else if (this.PType == 'V')
                this.router.navigate(["./pages/masters/PartyLedger/Supplier", { mode: "edit", ACID: acid, isGroup: 0, PType: 'V', Title: 'Edit Supplier', returnUrl: this.router.url }]);
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    // onEditClick(event): void {
    //     try {
    //         this.router.navigate(["./pages/masters/Customer/CustomerList", { initial: event.data.INITIAL, name: event.data.NAME, mode: "edit", returnUrl: this.router.url }]);
    //     } catch (ex) {
    //         //console.log(ex);
    //         alert(ex);
    //     }
    // }
    pLedgerTableComponent.prototype.openAuthDialog = function () {
        var message = { header: "Information", message: this.message$ };
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modaldialogs_authorizationDialog_authorizationDialog_component__["a" /* AuthDialog */], { hasBackdrop: true, data: message });
    };
    return pLedgerTableComponent;
}());
pLedgerTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pLedgerTable',
        template: __webpack_require__(1835),
        styles: [__webpack_require__(120)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__PLedger_service__["a" /* PLedgerservice */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdDialog */], __WEBPACK_IMPORTED_MODULE_3__common_repositories_masterRepo_service__["a" /* MasterRepo */]])
], pLedgerTableComponent);

/*public actions: Array<PageAction> = [];
private router: Router;
constructor(router: Router) {
super();
let self: Divisions = this;
self.router = router;
self.model = new DivisionsModel(self.i18nHelper);
//self.registerEvent(self.model.event)
self.loadDivisions();
this.model.addPageAction(new PageAction("btnAddDivision", "masters.divisions.addDivisionAction", () => self.onAddNewDivisionClicked()));

}

onAddNewDivisionClicked() {
this.router.navigate([route.division.addDivision.name]);
}

onEditDivisionClicked(event: any) {
this.router.navigate([route.division.editDivision.name, { id: event.item.initial }]);
}

onDeleteDivisionClicked(event: any) {
let self: Divisions = this;
divisionsService.delete(event.item.id).then(function () {
self.loadDivisions();
});

}
private loadDivisions() {
let self: Divisions = this;
divisionsService.getDivision().then(function (items: Array<any>) {

self.model.importDivisions(items);
});
}
}*/ 


/***/ }),

/***/ 1591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ng2_smart_table_src_ng2_smart_table_module__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PLedger_component__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SupplierLedger_component__ = __webpack_require__(1435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CustomerLedger_component__ = __webpack_require__(1434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pledger_routing__ = __webpack_require__(1592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PLedgerTable_component__ = __webpack_require__(1590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PLedger_service__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_Transaction_Components_transaction_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyLedgerModule; });














var PartyLedgerModule = (function () {
    function PartyLedgerModule() {
    }
    return PartyLedgerModule;
}());
PartyLedgerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__["e" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__pledger_routing__["a" /* PartyLedgerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_ng2_smart_table_src_ng2_smart_table_module__["Ng2SmartTableModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__PLedger_component__["a" /* PLedgerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__SupplierLedger_component__["a" /* SupplierLedgerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__CustomerLedger_component__["a" /* CustomerLedgerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__PLedgerTable_component__["a" /* pLedgerTableComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__PLedger_service__["a" /* PLedgerservice */], __WEBPACK_IMPORTED_MODULE_13__common_Transaction_Components_transaction_service__["a" /* TransactionService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__PLedger_component__["a" /* PLedgerComponent */]]
    })
], PartyLedgerModule);



/***/ }),

/***/ 1592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PLedger_component__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SupplierLedger_component__ = __webpack_require__(1435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CustomerLedger_component__ = __webpack_require__(1434);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyLedgerRoutingModule; });





var routes = [
    { path: 'Supplier', component: __WEBPACK_IMPORTED_MODULE_2__PLedger_component__["a" /* PLedgerComponent */] },
    { path: 'SupplierList', component: __WEBPACK_IMPORTED_MODULE_3__SupplierLedger_component__["a" /* SupplierLedgerComponent */] },
    { path: 'Customer', component: __WEBPACK_IMPORTED_MODULE_2__PLedger_component__["a" /* PLedgerComponent */] },
    { path: 'CustomerList', component: __WEBPACK_IMPORTED_MODULE_4__CustomerLedger_component__["a" /* CustomerLedgerComponent */] },
];
var PartyLedgerRoutingModule = (function () {
    function PartyLedgerRoutingModule() {
    }
    return PartyLedgerRoutingModule;
}());
PartyLedgerRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], PartyLedgerRoutingModule);



/***/ }),

/***/ 1598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accountLedger_service__ = __webpack_require__(1271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLedgerComponent; });






var AddLedgerComponent = (function () {
    function AddLedgerComponent(MasterService, service, router, _activatedRoute) {
        this.MasterService = MasterService;
        this.service = service;
        this._activatedRoute = _activatedRoute;
        this.majorparent = {};
        this.majorParentAcList = [];
        this.acParentList = [];
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.DialogMessage = "Saving data please wait ...";
        this.subcriptions = [];
        this.acledgerSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.acledgerList$ = this.acledgerSubject.asObservable();
        this.mode = "add";
        this.router = router;
        this.majorparent.children = [];
        // this.service.getNewValues(selectL)
        //     .subscribe(data => {
        //         if (data.status == 'ok') {
        //             this.ledgerAcObj.PARENT = data.result.parent.ACID;
        //             this.PARENTACNAME = data.result.parent.ACNAME;
        //             this.ledgerAcObj.PType = data.result.parent.PType;
        //         }
        //     }
        //     , error => {
        //         this.router.navigate([this.returnUrl]);
        //         //console.log(error);
        //     }
        //     );
        if (!!_activatedRoute.snapshot.params['returmURl']) {
            var selectq = this._activatedRoute.snapshot.params['returmURl'];
        }
    }
    AddLedgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busy = this.MasterService.getacListTree()
            .subscribe(function (data) {
            // let l = data.filter(x => x.PARENTID == 'BS' || 'PL' || 'TD');
            _this.majorParentAcList = data;
            _this.acledgerSubject.next(data);
            ////console.log("initial call")
            //console.log(this.majorParentAcList);
            //  this.treeList=data;
            if (!!_this._activatedRoute.snapshot.params['Par']) {
                var mp = _this._activatedRoute.snapshot.params['Par'];
                var s = _this.majorParentAcList.filter(function (x) { return x.ACID == mp; })[0];
                if (s != null) {
                    _this.majorparent = s;
                }
                //this.majorgroupChange( this.majorparent);
            }
            if (!!_this._activatedRoute.snapshot.params['ACID']) {
                _this.parentid = _this._activatedRoute.snapshot.params['ACID'];
            }
        });
    };
    AddLedgerComponent.prototype.majorgroupChange = function (majorparent) {
        ////console.log("call")
        //console.log(this.majorparent);
        //  var p= this.treeList.filter(x => x.ACID == majorparent)[0];
        //   if(p!=null){ this.acParentList =p.children;} 
    };
    //     filter(majorparent) {
    //         this.MasterService.getacListTree().subscribe(data => {
    //             var p= data.filter(x => x.ACID == majorparent)[0];
    //             if(p!=null){ this.acParentList =p.children;} });
    // }
    AddLedgerComponent.prototype.onSave = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.SumbitSave();
    };
    AddLedgerComponent.prototype.SumbitSave = function () {
        var _this = this;
        try {
            ////console.log("submit call");
            this.ledgerAcObj.TYPE = "A";
            // let pp = <TAcList>{}
            // pp.ACNAME=this.form.value.ACNAME;
            if (this.parentid == null) {
                this.ledgerAcObj.PARENT = this.majorparent;
                ////console.log("null value");
                //console.log(this.ledgerAcObj.PARENT);
            }
            else {
                this.ledgerAcObj.PARENT = this.parentid;
            }
            var sub = this.MasterService.saveAccount(this.mode, this.ledgerAcObj)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddLedgerComponent.prototype.cancel = function () {
        this.router.navigate(["./pages/masters/AccountLedger"]);
    };
    AddLedgerComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    return AddLedgerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */])
], AddLedgerComponent.prototype, "childModal", void 0);
AddLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addLedgerSelectors',
        template: " <div class=\"row\" class=\"form-horizontal\">\n    <ba-card [title]=\"modeTitle\" baCardClass=\"with-scroll\">\n    <div class=\"form-group row\">\n    <label class=\"col-sm-2 form-control-label\">Root Parent:</label>\n    <div class=\"col-sm-2\">\n    \n        <select style=\"width:130px; height:28px;\" [(ngModel)]=\"majorparent\" (ngModelChange)=\"majorgroupChange(majorparent)\">\n       <option *ngFor=\"let code of acledgerList$ | async\" [ngValue]=\"code\">{{code.ACNAME}}</option>\n      </select>\n     </div>\n  </div>\n  <div [ngBusy]=\"busy\"></div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 form-control-label\">Parent:</label>\n    <div class=\"col-sm-2\">\n     <select style=\"width:130px; height:28px;\" [(ngModel)]=\"parentid\">\n     <option *ngFor=\"let code of majorparent.children\" [ngValue]=\"code.ACID\">{{code.ACNAME}}</option>\n    </select>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 form-control-label\">Ledger Name:</label>\n    <div class=\"col-sm-2\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ledgerAcObj.ACNAME\" placeholder=\"Group Name\">\n    </div>\n  </div>\n  <div *ngIf=\"ledgerAcObj.PType!='B'\">\n  <fieldset style=\"border:1px solid black; margin-top:30px;\">\n                <label style=\"background-color:white; position: absolute; margin-top:-17px; margin-left: 20px; padding:5px;\">Account Type</label>\n\n                <table>\n                    <tr>\n                        <td> <label style=\"width:200px; padding:5px; margin-top:10px; margin-left:50px;\">Assets: </label><input disabled value=\"A\" type=\"radio\"  [checked]=\"ledgerAcObj.PType=='A'\" >\n                        <td> <label style=\"width:200px; padding:5px; margin-top:10px; margin-left:30px;\">Liabilities: </label><input disabled type=\"radio\" value=\"L\" [checked]=\"ledgerAcObj.PType=='L'\">\n                    </tr>\n                    <tr>\n                        <td> <label style=\"width:200px; padding:5px; margin-top:10px; margin-left:50px;\">Direct Income: </label><input disabled  value=\"D\" type=\"radio\" [checked]=\"ledgerAcObj.PType=='D'\">\n                         <td> <label style=\"width:200px; padding:5px; margin-top:10px; margin-left:30px;\">Indirect Income: </label><input disabled value=\"I\" type=\"radio\" [checked]=\"ledgerAcObj.PType=='I'\">   \n                    </tr>\n\n                </table>\n\n            </fieldset>\n            </div>\n   \n    </ba-card>\n    </div>\n    \n  <button type=\"button\" (click)=\"onSave()\" title=\"onSave\" class=\"btn btn-info\">Save</button>\n\n  <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button>\n  \n   <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n            aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n          \n        </button>\n                        <h4 class=\"modal-title\">Information</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        {{DialogMessage}}\n                    </div>\n                    <!--<div class=\"modal-footer\">\n                        <button class=\"btn btn-info confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\n                        <button class=\"btn btn-info confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\n                    </div>!-->\n\n                </div>\n            </div>\n        </div>\n     <div>\n  ",
        //  [(ngModel)]="PARENTACNAME"
        // [(ngModel)]="RootName"
        providers: [__WEBPACK_IMPORTED_MODULE_1__accountLedger_service__["a" /* TreeViewAcService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__accountLedger_service__["a" /* TreeViewAcService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
], AddLedgerComponent);



/***/ }),

/***/ 1599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accountLedger_service__ = __webpack_require__(1271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addGrpComponent; });






var addGrpComponent = (function () {
    function addGrpComponent(masterService, AccountService, router, _activatedRoute, fb) {
        this.masterService = masterService;
        this.AccountService = AccountService;
        this._activatedRoute = _activatedRoute;
        this.fb = fb;
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.subcriptions = [];
        this.DialogMessage = "Saving data please wait ...";
        this.viewMode = false;
        this.modeTitle = '';
        this.initialTextReadOnly = false;
        this.mode = "add";
        this.router = router;
        if (!!_activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = _activatedRoute.snapshot.params['returnUrl'];
        }
    }
    // salesman:Salesman=<Salesman>{};
    addGrpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AddACGrpForm = this.fb.group({
            ACNAME: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            majorparent: [''],
            hasSub: [''],
            Ptype: ['']
        });
        if (this._activatedRoute.snapshot.params['SeletectedData']) {
            var selectedAcid = this._activatedRoute.snapshot.params['SeletectedData'];
            ////console.log("selectedAcid")
            this.masterService.getAllAccount(selectedAcid)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    _this.AddACGrpForm.get('ACNAME').setValue(data.result.ACNAME);
                    //console.log(data);
                    _this.mode = 'edit';
                    _this.initialTextReadOnly = true;
                }
            });
        }
        this.masterService.getacListTree()
            .subscribe(function (data) {
            var p = data.filter(function (x) { return x.PARENTID == 'BS' || 'PL' || 'TD'; });
            _this.ParentAcList = p;
            if (!!_this._activatedRoute.snapshot.params['Par']) {
                _this.majorparent = _this._activatedRoute.snapshot.params['Par'];
                ////console.log("Get");
                //console.log(this.majorparent);
                _this.AddACGrpForm.controls['majorparent'].patchValue(_this.majorparent);
            }
        });
        //getting parent and majorgroup for new product group insert
        if (!!this._activatedRoute.snapshot.params['SI']) {
            var selectedID = this._activatedRoute.snapshot.params['SI'];
            if (selectedID == "null") {
                this.ledgerAcObj.PARENT = 'PA';
                return;
            }
        }
    };
    addGrpComponent.prototype.onSave = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.SumbitSave();
    };
    addGrpComponent.prototype.SumbitSave = function () {
        var _this = this;
        try {
            ////console.log("submit call");
            var ag = {};
            ag.TYPE = "G";
            ag.PARENT = this.AddACGrpForm.value.majorparent;
            ag.ACNAME = this.AddACGrpForm.value.ACNAME;
            ag.PType = this.AddACGrpForm.value.Ptype;
            ag.HASSUBLEDGER = this.AddACGrpForm.value.hasSub;
            //console.log({ ag: ag });
            var sub = this.masterService.saveAccount(this.mode, ag)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    addGrpComponent.prototype.cancel = function () {
        this.router.navigate(["./pages/masters/AccountLedger"]);
    };
    addGrpComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    addGrpComponent.prototype.changehassubEvent = function (value) {
        if (this.AddACGrpForm == null) {
            return;
        }
        this.AddACGrpForm.get('hasSub').patchValue(value);
    };
    addGrpComponent.prototype.changePtype = function (value) {
        this.AddACGrpForm.get('Ptype').patchValue(value);
    };
    return addGrpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["b" /* ModalDirective */])
], addGrpComponent.prototype, "childModal", void 0);
addGrpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addGrpSelector',
        template: __webpack_require__(1844),
        providers: [__WEBPACK_IMPORTED_MODULE_1__accountLedger_service__["a" /* TreeViewAcService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__accountLedger_service__["a" /* TreeViewAcService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
], addGrpComponent);



/***/ }),

/***/ 1604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partyledger_service__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMajorGrpComponent; });






var addMajorGrpComponent = (function () {
    function addMajorGrpComponent(service, router, _activatedRoute, MasterService, _fb) {
        // this.router = router;
        // if (!!_activatedRoute.snapshot.params['returnUrl']) {
        //     this.acListtree.ACID = _activatedRoute.snapshot.params['returnUrl'];
        // }
        this.service = service;
        this._activatedRoute = _activatedRoute;
        this.MasterService = MasterService;
        this._fb = _fb;
        this.ledgerAcObj = {};
        this.acListtree = {};
        this.DialogMessage = "Saving Data please wait ...";
        this.subcriptions = [];
        this.viewMode = true;
        this.modeTitle = '';
        this.mode = "add";
    }
    addMajorGrpComponent.prototype.ngOnInit = function () {
        // try {
        //     let self = this;
        //     if (!!this._activatedRoute.snapshot.params['returnUrl']) {
        //         this.ledgerAcObj.PARENT = 'PA';
        //     }
        // } catch (ex) {
        //     //console.log(ex);
        //     alert(ex);
        // }
        // this.Addform = this._fb.group({
        //     ACNAME: ['', Validators.required],
        //     PType:[''],
        // })
    };
    addMajorGrpComponent.prototype.cancel = function () {
        this.router.navigate(["./pages/masters/PartyLedger"]);
    };
    addMajorGrpComponent.prototype.onSave = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.SumbitSave();
    };
    addMajorGrpComponent.prototype.SumbitSave = function () {
        var _this = this;
        ////console.log("Submit call")
        try {
            var am = {};
            am.ACNAME = this.Addform.value.ACNAME;
            am.TYPE = "G";
            am.PARENT = "PA";
            //console.log({ AddMajor: am });
            var sub = this.MasterService.saveAccount(this.mode, am)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    // ptypeRadioChangeEvent(value)
    // {
    //    this.Addform.controls['PType'].setValue(value);
    //     //console.log({value:value});
    // }
    addMajorGrpComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    return addMajorGrpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["b" /* ModalDirective */])
], addMajorGrpComponent.prototype, "childModal", void 0);
addMajorGrpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addMajorgrpSelector',
        template: __webpack_require__(1848),
        providers: [__WEBPACK_IMPORTED_MODULE_1__partyledger_service__["a" /* TreeViewPartyervice */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__partyledger_service__["a" /* TreeViewPartyervice */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
], addMajorGrpComponent);



/***/ }),

/***/ 1605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ng2_smart_table_src_ng2_smart_table_module__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partyLedgerTable_component__ = __webpack_require__(1443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addparty_routing__ = __webpack_require__(1606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addMajorgrp_component__ = __webpack_require__(1604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__addpartygrp_component__ = __webpack_require__(1607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__addpartyledger_component__ = __webpack_require__(1608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_pipe__ = __webpack_require__(1609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_pagination__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_popupLists_file_uploader_file_uploader_popup_module__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyModule; });

















var PartyModule = (function () {
    function PartyModule() {
    }
    return PartyModule;
}());
PartyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_angular_tree_component__["e" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__addparty_routing__["a" /* PartyRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__common_popupLists_generic_grid_generic_popup_grid_module__["a" /* GenericPopupGridModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__node_modules_ng2_smart_table_src_ng2_smart_table_module__["Ng2SmartTableModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_16__common_popupLists_file_uploader_file_uploader_popup_module__["a" /* FileUploaderPopupModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__partyLedgerTable_component__["a" /* PartyLedgerComponent */], __WEBPACK_IMPORTED_MODULE_11__addMajorgrp_component__["a" /* addMajorGrpComponent */], __WEBPACK_IMPORTED_MODULE_12__addpartygrp_component__["a" /* AddPartyLedgerGrpComponent */], __WEBPACK_IMPORTED_MODULE_13__addpartyledger_component__["a" /* AddPartyLedgerComponent */], __WEBPACK_IMPORTED_MODULE_14__search_pipe__["a" /* SearchPipe */]
        ],
        exports: []
    })
], PartyModule);



/***/ }),

/***/ 1606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partyLedgerTable_component__ = __webpack_require__(1443);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyRoutingModule; });



var routes = [
    { path: 'PartyTree', component: __WEBPACK_IMPORTED_MODULE_2__partyLedgerTable_component__["a" /* PartyLedgerComponent */] },
];
var PartyRoutingModule = (function () {
    function PartyRoutingModule() {
    }
    return PartyRoutingModule;
}());
PartyRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], PartyRoutingModule);



/***/ }),

/***/ 1607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPartyLedgerGrpComponent; });





var AddPartyLedgerGrpComponent = (function () {
    function AddPartyLedgerGrpComponent(MasterService, router, _activatedRoute, fb) {
        // this.router = router;
        this.MasterService = MasterService;
        this._activatedRoute = _activatedRoute;
        this.fb = fb;
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.subcriptions = [];
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
    }
    // salesman:Salesman=<Salesman>{};
    AddPartyLedgerGrpComponent.prototype.ngOnInit = function () {
        // this.form = this.fb.group({
        //     majorparent: [''],
        //     ACNAME: ['', Validators.required],
        //     hasSub:[''],
        // })
        // this.MasterService.getpartyListTree()
        //     .subscribe(data => {
        //         let p = data.filter(x => x.PARENTID == 'PA');
        //         this.ParentAcList = p;
        //         if (!!this._activatedRoute.snapshot.params['Par']) {
        //             this.majorparent = this._activatedRoute.snapshot.params['Par'];
        //             this.form.get('majorparent').patchValue(this.majorparent);
        //             ////console.log("Get");
        //             //console.log(this.majorparent);
        //         }
        //     });
        // let self = this;
        // if (!!this._activatedRoute.snapshot.params['ACID']) {
        //     let ACID = this._activatedRoute.snapshot.params['ACID'];
        // }
    };
    AddPartyLedgerGrpComponent.prototype.changehassubEvent = function (value) {
        if (this.form == null)
            return;
        this.form.get('hasSub').patchValue(value);
        ////console.log("value:"+value);
    };
    AddPartyLedgerGrpComponent.prototype.onSave = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.SumbitSave();
    };
    AddPartyLedgerGrpComponent.prototype.SumbitSave = function () {
        var _this = this;
        try {
            var ap = {};
            ap.ACNAME = this.form.value.ACNAME;
            ap.TYPE = "G";
            ap.PARENT = this.form.value.majorparent;
            ap.HASSUBLEDGER = this.form.value.hasSub;
            //console.log({AddPartyGroup:ap})
            var sub = this.MasterService.saveAccount(this.mode, ap)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddPartyLedgerGrpComponent.prototype.cancel = function () {
        this.router.navigate(["./pages/masters/PartyLedger"]);
    };
    AddPartyLedgerGrpComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    return AddPartyLedgerGrpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* ModalDirective */])
], AddPartyLedgerGrpComponent.prototype, "childModal", void 0);
AddPartyLedgerGrpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addGrpSelector',
        template: __webpack_require__(1849),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
], AddPartyLedgerGrpComponent);



/***/ }),

/***/ 1608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modaldialogs_messageDialog_messageDialog_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partyledger_service__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_repositories_masterRepo_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_services_permission__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_alert_alert_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_services_spinner_spinner_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPartyLedgerComponent; });
/* unused harmony export DObj */
/* unused harmony export DivList */
/* unused harmony export AdditionalBankObj */
/* unused harmony export AdditionalBankList */



// import { GroupParty } from './partyLedger.service';










var AddPartyLedgerComponent = (function () {
    function AddPartyLedgerComponent(MasterService, PartyService, router, _activatedRoute, _fb, dialog, _authService, alertSerivces, spinnerservice) {
        var _this = this;
        this.MasterService = MasterService;
        this.PartyService = PartyService;
        this._activatedRoute = _activatedRoute;
        this._fb = _fb;
        this.dialog = dialog;
        this._authService = _authService;
        this.alertSerivces = alertSerivces;
        this.spinnerservice = spinnerservice;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.Title = '';
        this.SavePartyEmit = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.EditPartyEmit = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.BankList = [];
        this.majorParentAcList = [];
        this.acParentList = [];
        this.acListtree = {};
        this.ledgerAcObj = {};
        this.viewMode = false;
        this.DialogMessage = "Saving data please wait ...";
        this.subcriptions = [];
        this.initialTextReadOnly = false;
        this.ID = '';
        this.acGroups = [];
        this.dialogMessageSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.dialogMessage$ = this.dialogMessageSubject.asObservable();
        this.actype = '';
        this.disableActype = false;
        this.GeoList = [];
        this.DistrictList = [];
        this.areaList = [];
        this.division = [];
        this.divisionList = [];
        this.SelectedDivisionList = [];
        this.DivListForSave = [];
        this.bankObj = {};
        this.bankArray = [];
        this.bank = false;
        this.DistrictListbyState = [];
        this.PartyCat_List = [];
        this.AdditionalBankList = [];
        this.gridBankPopupSettings = new __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridAdditionalBankPopupSettings = new __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridACListPartyPopupSettings = new __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridPopupSettingsForContractPrice = new __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.gridPopupSettingsForSalesmanList = new __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["b" /* GenericPopUpSettings */]();
        this.ChangedDiv = '';
        this.router = router;
        // this.service.getNewValues(selectL)
        //     .subscribe(data => {
        //         if (data.status == 'ok') {
        //             this.ledgerAcObj.PARENT = data.result.parent.ACID;
        //             this.PARENTACNAME = data.result.parent.ACNAME;
        //             this.ledgerAcObj.PType = data.result.parent.PType;
        //         }
        //     }
        //     , error => {
        //         this.router.navigate([this.returnUrl]);
        //         //console.log(error);
        //     }
        //     );
        this.userProfile = this._authService.getUserProfile();
        this.userSetting = this._authService.getSetting();
        this.Is_OverseasParty = 0;
        ////console.log("userSetting", this.userSetting)
        this.PartyService.getHierachy().subscribe(function (res) {
            if (res.status == "ok") {
                _this.GeoList = res.result.GEO;
            }
        });
        this.MasterService.getDistrict().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.DistrictList = res.result;
            }
        });
        this.MasterService.getAreaDetail().subscribe(function (res) {
            if (res.status == 'ok') {
                _this.areaList = res.result;
            }
        });
        this.division = [];
        this.MasterService.getAllDivisions()
            .subscribe(function (res) {
            _this.division.push(res);
        }, function (error) {
            _this.MasterService.resolveError(error, "divisions - getDivisions");
        });
    }
    AddPartyLedgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PartyService.addGroupSubject.subscribe(function (res) {
            //console.log('common');
        });
        this.MasterService.userSetting.DIVISIONWISEACLISTING == 1 ?
            this.enableDivisionMapping = true :
            this.enableDivisionMapping = false;
        this.form = this._fb.group({
            majorparent: [''],
            parentid: [''],
            ACNAME: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            Ptype: [''],
            MAPID: [''],
            ADDRESS: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            PHONE: [''],
            FAX: [''],
            EMAIL: [''],
            ACCODE: [''],
            isNotActive: [''],
            CITY: [''],
            STATE: [''],
            COMMON: [0],
            ISACTIVE: [1],
            VATNO: [''],
            CRPERIOD: [0],
            CRLIMIT: [0],
            GEO: ['111111-1'],
            CNAME: [''],
            ONAME: [''],
            OCONTACT: [''],
            ODESIGNATION: [''],
            CONTACTNAME: [''],
            CCONTACT_A: [''],
            CCONTACT_B: [''],
            CDESIGNATION: [''],
            RELATEDSPERSON_A: [''],
            RELATEDSPERSON_B: [''],
            NOTES: [''],
            Mobile: [''],
            INITIAL: [''],
            IsInitialValue: [0],
            createMember: [''],
            DIV: [this.userProfile.userDivision],
            ShareAccount: [''],
            ShareSelectiveDiv: [''],
            ShareAllDiv: [''],
            enableDivSelectionTable: [0],
            cusName: [''],
            ISCOMMONAC: [0],
            BANKACCOUNTNUMBER: [''],
            BANKCODE: [''],
            BANKNAME: [''],
            ISBRANCH: [''],
            BAISHAKH: [0],
            JESTHA: [0],
            ASHAD: [0],
            SHARWAN: [0],
            BHADRA: [0],
            ASHWIN: [0],
            KARTIK: [0],
            MANGSHIR: [0],
            PAUSH: [0],
            MAGH: [0],
            FALGUN: [0],
            CHAITRA: [0],
            TARGET_AMOUNT: [0],
            DISTRICT: [''],
            ADDITIONALBANKACCOUNTNUMBER: [''],
            ADDITIONALBANKCODE: [''],
            ADDITIONALBANKNAME: [''],
            PCompany: [''],
            PCompanyName: [''],
            IS_OVERSEAS_PARTY: [0],
            SALESMANID: [''],
            SALESMAN: [''],
        });
        if (this.userSetting.Country == 1) {
            this.form.get('GEO').setValue('');
        }
        this.form.get('ShareAllDiv').disable();
        this.form.get('ShareSelectiveDiv').disable();
        if (this.mode == "add") {
            this.getPartyList(this.ACID);
        }
        if (this.userSetting.AUTOSUPCODE == 1) {
            this.disableACCodeIfAutoSuponeisOne();
        }
        this.CheckCompanyAndValidate();
        this.getGroups();
        //console.log("ACID on ad party", this.ACID);
        if (this.ACID == 'PAG01') {
            this.form.get('Ptype').setValue('V');
            this.ISCUSTOMER = false;
            if (this.userSetting.Country == 1) {
                if (this.mode == "add") {
                    this.PartyService.getHierachy().subscribe(function (res) {
                        if (res.status == "ok") {
                            _this.GeoList = res.result.GEO;
                            _this.PartyCat_List = _this.GeoList.filter(function (x) { return x.PTYPE == 'V'; });
                            _this.form.get('GEO').setValue('111111-1');
                        }
                    });
                }
            }
        }
        else {
            this.form.get('Ptype').setValue('C');
            this.ISCUSTOMER = true;
            if (this.userSetting.Country == 1) {
                if (this.mode == "add") {
                    this.PartyService.getHierachy().subscribe(function (res) {
                        if (res.status == "ok") {
                            _this.GeoList = res.result.GEO;
                            _this.PartyCat_List = _this.GeoList.filter(function (x) { return x.PTYPE == 'C'; });
                            _this.form.get('GEO').setValue('123456-7');
                        }
                    });
                }
            }
        }
        if (this.userSetting.CREATE_CPROFILE_AS_MEMBER == 1 && this.form.value.Ptype == 'C') {
            this.form.get('createMember').setValue(false);
        }
        // this.MasterService.getAllAccount().subscribe(res => { this.ledgerAcList.push(<TAcList>res); });
        this.MasterService.getpartyListTree()
            .subscribe(function (data) {
            var l = data.filter(function (x) { return x.PARENTID == 'PAG'; });
            _this.majorParentAcList = l;
            if (!!_this._activatedRoute.snapshot.params['Par']) {
                _this.majorparent = _this._activatedRoute.snapshot.params['Par'];
                _this.form.get('majorparent').setValue(_this.majorparent);
                _this.majorgroupChange();
            }
            if (_this.mode == 'edit' || _this.mode == 'view') {
                _this.mode == 'edit' ? _this.modeTitle = "Edit Party A/C" : _this.modeTitle = "View Party Ledger";
                _this.getParentName(_this.mode);
                _this.MasterService.getAllAccount(_this.ACID)
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        _this.parentValueForEditMode = data.result.PARENT;
                        _this.form.get('ACNAME').setValue(data.result.ACNAME);
                        _this.form.get('ADDRESS').setValue(data.result.ADDRESS);
                        _this.form.get('PHONE').setValue(data.result.PHONE);
                        _this.form.get('FAX').setValue(data.result.FAX);
                        _this.form.get('EMAIL').setValue(data.result.EMAIL);
                        _this.form.get('VATNO').setValue(data.result.VATNO);
                        _this.form.get('ACCODE').setValue(data.result.ACCODE);
                        _this.form.get('CRLIMIT').setValue(data.result.CRLIMIT);
                        _this.form.get('Ptype').setValue(data.result.PType);
                        _this.form.get("SALESMANID").setValue(data.result.SALESMANID);
                        _this.form.get("SALESMAN").setValue(data.result.SALESMAN);
                        if (data.result.PType == 'C') {
                            _this.ISCUSTOMER = true;
                            if (_this.userSetting.Country == 1) {
                                _this.PartyCat_List = _this.GeoList.filter(function (x) { return x.PTYPE == 'C'; });
                            }
                        }
                        else {
                            _this.ISCUSTOMER = false;
                            if (_this.userSetting.Country == 1) {
                                _this.PartyCat_List = _this.GeoList.filter(function (x) { return x.PTYPE == 'V'; });
                            }
                        }
                        _this.form.get('Mobile').setValue(data.result.MOBILE);
                        _this.form.get('GEO').setValue(data.result.GEO);
                        _this.form.get('COMMON').setValue(data.result.COMMON);
                        _this.form.get('CITY').setValue(data.result.CITY);
                        _this.form.get('ISBRANCH').setValue(data.result.ISBRANCH);
                        _this.form.get('CRPERIOD').setValue(data.result.CRPERIOD);
                        _this.form.get('STATE').setValue(data.result.STATE);
                        _this.form.get('ISACTIVE').setValue(data.result.ISACTIVE);
                        _this.form.get('DIV').setValue(data.result.DIV);
                        _this.form.get('ISCOMMONAC').setValue(data.result.ISCOMMONAC);
                        _this.form.get('BANKNAME').setValue(data.result.BANKNAME);
                        _this.form.get('BANKCODE').setValue(data.result.BANKCODE);
                        _this.form.get('BANKACCOUNTNUMBER').setValue(data.result.BANKACCOUNTNUMBER);
                        _this.displayDistrictOnEdit(data.result.STATE);
                        _this.form.get('DISTRICT').setValue(data.result.DISTRICT);
                        _this.form.get('IS_OVERSEAS_PARTY').patchValue(data.result.IS_OVERSEAS_PARTY);
                        _this.Is_OverseasParty = data.result.IS_OVERSEAS_PARTY;
                        if (_this.userSetting.ENABLEPARENTCOMPANY == 1) {
                            _this.form.get('PCompany').setValue(data.result.PCompany);
                            _this.form.get('PCompanyName').setValue(data.result.PCompanyName);
                            _this.form.get("SALESMANID").setValue(data.result.SALESMANID);
                            _this.form.get("SALESMAN").setValue(data.result.SALESMAN);
                        }
                        if (data.result2 && data.result2 != null) {
                            _this.form.get('CNAME').setValue(data.result2.CNAME);
                            _this.form.get('ONAME').setValue(data.result2.ONAME);
                            _this.form.get('OCONTACT').setValue(data.result2.OCONTACT);
                            _this.form.get('ODESIGNATION').setValue(data.result2.ODESIGNATION);
                            _this.form.get('CONTACTNAME').setValue(data.result2.CONTACTNAME);
                            _this.form.get('CCONTACT_A').setValue(data.result2.CCONTACT_A);
                            _this.form.get('CCONTACT_B').setValue(data.result2.CCONTACT_B);
                            _this.form.get('CDESIGNATION').setValue(data.result2.CDESIGNATION);
                            _this.form.get('RELATEDSPERSON_A').setValue(data.result2.RELATEDSPERSON_A);
                            _this.form.get('RELATEDSPERSON_B').setValue(data.result2.RELATEDSPERSON_B);
                            _this.form.get('NOTES').setValue(data.result2.NOTES);
                        }
                        _this.form.get('NOTES').setValue(data.result.ISCOMMONAC);
                        _this.form.get('INITIAL').setValue(data.result.INITIAL);
                        if (data.result.INITIAL == null || data.result.INITIAL == "") {
                            _this.form.get('IsInitialValue').setValue(0);
                            _this.form.get('INITIAL').disable();
                        }
                        else {
                            _this.form.get('IsInitialValue').setValue(1);
                            _this.form.get('INITIAL').enable();
                        }
                        if (data.result.CTYPE == 'Member Also') {
                            _this.form.get('createMember').setValue(1);
                        }
                        else {
                            _this.form.get('createMember').setValue(0);
                        }
                        if (data.result3.length > 0) {
                            _this.form.get('ShareAccount').setValue(1);
                            _this.enableShareOptions(1);
                            if (_this.division.length == data.result3.length) {
                                _this.form.get('ShareAllDiv').setValue('2');
                                _this.enableDivSelectionTable(2);
                            }
                            else {
                                _this.form.get('ShareSelectiveDiv').setValue('1');
                                _this.enableDivSelectionTable(1);
                            }
                            _this.changeDivision(_this.MasterService.userProfile.CompanyInfo.INITIAL);
                            _this.division.forEach(function (x) {
                                data.result3.forEach(function (div) {
                                    x.INITIAL == div.DIV ? x.isCheck = true : '';
                                });
                            });
                        }
                        if (data.result4 && data.result4 != null) {
                            _this.form.get('BAISHAKH').setValue(data.result4.BAISHAKH);
                            _this.form.get('JESTHA').setValue(data.result4.JESTHA);
                            _this.form.get('ASHAD').setValue(data.result4.ASHAD);
                            _this.form.get('SHARWAN').setValue(data.result4.SHARWAN);
                            _this.form.get('BHADRA').setValue(data.result4.BHADRA);
                            _this.form.get('ASHWIN').setValue(data.result4.ASHWIN);
                            _this.form.get('KARTIK').setValue(data.result4.KARTIK);
                            _this.form.get('MANGSHIR').setValue(data.result4.MANGSHIR);
                            _this.form.get('PAUSH').setValue(data.result4.PAUSH);
                            _this.form.get('MAGH').setValue(data.result4.MAGH);
                            _this.form.get('FALGUN').setValue(data.result4.FALGUN);
                            _this.form.get('CHAITRA').setValue(data.result4.CHAITRA);
                            _this.form.get('TARGET_AMOUNT').setValue(data.result4.TARGET_AMOUNT);
                        }
                        if (data.result5.length > 0) {
                            _this.AdditionalBankList = data.result5;
                            if (data.result.BANKNAME && data.result.BANKACCOUNTNUMBER && data.result.BANKCODE) {
                                var index = data.result5.length && data.result5.findIndex(function (x) { return x.BANKCODE == data.result.BANKCODE; });
                                _this.AdditionalBankList.splice(index, 1);
                            }
                        }
                    }
                });
            }
        });
        if (this.mode == 'edit' || this.mode == 'view') {
            //console.log("edit mode", this.parentIdOnEdit);
            this.getPartyList(this.parentIdOnEdit);
        }
        if (this.mode == 'view') {
            this.form.get('ACNAME').disable();
            this.form.get('ADDRESS').disable();
            this.form.get('PHONE').disable();
            this.form.get('FAX').disable();
            this.form.get('EMAIL').disable();
            this.form.get('VATNO').disable();
            this.form.get('ACCODE').disable();
            this.form.get('CRLIMIT').disable();
            this.form.get('Ptype').disable();
            this.form.get('Mobile').disable();
            this.form.get('CITY').disable();
            this.form.get('CRPERIOD').disable();
            this.form.get('STATE').disable();
            this.form.get('ISACTIVE').disable();
            this.form.get('CNAME').disable();
            this.form.get('ONAME').disable();
            this.form.get('OCONTACT').disable();
            this.form.get('GEO').disable();
            this.form.get('ODESIGNATION').disable();
            this.form.get('CONTACTNAME').disable();
            this.form.get('CCONTACT_A').disable();
            this.form.get('CCONTACT_B').disable();
            this.form.get('CDESIGNATION').disable();
            this.form.get('RELATEDSPERSON_A').disable();
            this.form.get('RELATEDSPERSON_B').disable();
            this.form.get('NOTES').disable();
            this.form.get('COMMON').disable();
            this.form.get('INITIAL').disable();
            this.form.get('IsInitialValue').disable();
            this.form.get('ISBRANCH').disable();
            this.form.get('BANKNAME').disable();
            this.form.get('BANKACCOUNTNUMBER').disable();
            this.form.get('DISTRICT').disable();
            this.form.get('BAISHAKH').disable();
            this.form.get('JESTHA').disable();
            this.form.get('ASHAD').disable();
            this.form.get('SHARWAN').disable();
            this.form.get('BHADRA').disable();
            this.form.get('ASHWIN').disable();
            this.form.get('KARTIK').disable();
            this.form.get('MANGSHIR').disable();
            this.form.get('PAUSH').disable();
            this.form.get('MAGH').disable();
            this.form.get('FALGUN').disable();
            this.form.get('CHAITRA').disable();
            this.form.get('TARGET_AMOUNT').disable();
            this.form.get('ADDITIONALBANKNAME').disable();
            this.form.get('ADDITIONALBANKACCOUNTNUMBER').disable();
            this.form.get('PCompanyName').disable();
            this.form.get('IS_OVERSEAS_PARTY').disable();
            this.form.get("SALESMAN").disable();
            this.form.get("SALESMANID").disable();
        }
        ////console.log("parentname", this.Parent)
        if (this.Title == "AddLedger") {
            this.modeTitle = "Add New Party A/C";
        }
        else if (this.Title == "AddGroup") {
            this.modeTitle = "Add New Party Group";
        }
        if (this.mode == 'edit') {
            this.modeTitle = "Edit Party A/C";
        }
        if (this.mode == 'view') {
            this.modeTitle = "View Party A/C";
        }
    };
    AddPartyLedgerComponent.prototype.contractPricePopup = function () {
        this.getContractPriceList();
        this.genericGridContract.show();
    };
    AddPartyLedgerComponent.prototype.getContractPriceList = function () {
        this.gridPopupSettingsForContractPrice = {
            title: "Contract Price List",
            apiEndpoints: "/getContractPricePagedList",
            defaultFilterIndex: 0,
            //   useDefinefilterValue: null,
            columns: [
                {
                    key: "CMID",
                    title: "Price ID",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "PRICENAME",
                    title: "Price Name",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
    };
    AddPartyLedgerComponent.prototype.onSalesmanEnter = function (event) {
        this.getSalesmanList();
        this.genericGridSalesman.show();
    };
    AddPartyLedgerComponent.prototype.getSalesmanList = function () {
        this.gridPopupSettingsForSalesmanList = {
            title: "Salesman List",
            apiEndpoints: "/getSalesmanPagedList",
            defaultFilterIndex: 0,
            // useDefinefilterValue: null,
            columns: [
                {
                    key: "SALESMANID",
                    title: "SALESMAN ID",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "NAME",
                    title: "NAME",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "TELNO",
                    title: "MOBILE",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
    };
    AddPartyLedgerComponent.prototype.onSalesmanSelect = function (value) {
        console.log("salesman details", value);
        this.form.get('SALESMAN').setValue(value.NAME);
        this.form.get('SALESMANID').setValue(value.SALESMANID);
        this.form.updateValueAndValidity();
    };
    AddPartyLedgerComponent.prototype.ngOnChanges = function (changes) {
        //console.log("on party change", this.parentPartyID)
        if (!this.form) {
            this.resetForm();
        }
        if (changes.ACID) {
            //console.log("from tree", this.ACID)
            this.getParentName(this.mode);
        }
        if (changes.parentPartyID) {
            if (this.parentPartyID != undefined && this.parentPartyID != "") {
                //console.log("group changed", this.parentPartyID);
                if (this.mode == 'add') {
                    this.ACID = this.parentPartyID;
                }
                this.MasterService.SelectedGroup = this.parentPartyID;
                this.getParentNameInGroupSelect(this.parentPartyID, "add");
            }
        }
        if (changes.mainGroupID) {
            //console.log("main group changed", this.mainGroupID);
            if (this.mainGroupID != undefined && this.mainGroupID != "") {
                if (this.parentPartyID == 'PAG01') {
                    if (this.form) {
                        this.form.get('Ptype').setValue('V');
                    }
                    this.ISCUSTOMER = false;
                    if (this.userSetting.Country == 1) {
                        this.PartyCat_List = this.GeoList.filter(function (x) { return x.PTYPE == 'V'; });
                    }
                }
                else {
                    if (this.form) {
                        this.form.get('Ptype').setValue('C');
                    }
                    this.ISCUSTOMER = true;
                    if (this.userSetting.Country == 1) {
                        this.PartyCat_List = this.GeoList.filter(function (x) { return x.PTYPE == 'C'; });
                    }
                }
            }
        }
    };
    AddPartyLedgerComponent.prototype.ngAfterViewInit = function () {
        this.acnameField.nativeElement.focus();
    };
    AddPartyLedgerComponent.prototype.getParentName = function (mode) {
        var _this = this;
        this.MasterService.getParentNamebyID(this.ACID, mode).subscribe(function (res) {
            ////console.log("result1231231231312", res);
            var parentName = res[0];
            if (_this.form) {
                _this.form.get('parentid').setValue(parentName.ACNAME);
                _this.form.get('parentid').disable();
            }
        });
    };
    AddPartyLedgerComponent.prototype.getParentNameInGroupSelect = function (PARENTACID, mode) {
        var _this = this;
        this.MasterService.getParentNamebyID(PARENTACID, mode).subscribe(function (res) {
            var parentName = res[0];
            if (_this.form) {
                _this.form.get('parentid').setValue(parentName.ACNAME);
                _this.form.get('parentid').disable();
            }
        });
    };
    AddPartyLedgerComponent.prototype.disableACCodeIfAutoSuponeisOne = function () {
        //console.log('disable')
        this.form.get('ACCODE').disable();
    };
    AddPartyLedgerComponent.prototype.CheckCompanyAndValidate = function () {
        if (this.userSetting.CompanyType == "B2B") {
            this.form.get('VATNO').setValidators([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
            this.form.get('VATNO').updateValueAndValidity;
            // this.form.get('ACCODE').setValidators([Validators.required]);
            // this.form.get('ACCODE').updateValueAndValidity;
            this.form.get('CRPERIOD').setValidators([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
            this.form.get('CRPERIOD').updateValueAndValidity;
            this.form.get('CRLIMIT').setValidators([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
            this.form.get('CRLIMIT').updateValueAndValidity;
            this.form.get('GEO').setValidators([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
            this.form.get('GEO').updateValueAndValidity;
        }
        if (this.userSetting.CompanyType == "B2C") {
            this.form.get('ACCODE').clearValidators;
            this.form.get('ACCODE').updateValueAndValidity;
            this.form.get('VATNO').clearValidators;
            this.form.get('VATNO').updateValueAndValidity;
            this.form.get('CRPERIOD').clearValidators;
            this.form.get('CRPERIOD').updateValueAndValidity;
            this.form.get('CRLIMIT').clearValidators;
            this.form.get('CRLIMIT').updateValueAndValidity;
            this.form.get('GEO').clearValidators;
            this.form.get('GEO').updateValueAndValidity;
        }
    };
    AddPartyLedgerComponent.prototype.majorgroupChange = function () {
        this.filter(this.form.get('majorparent').value);
    };
    AddPartyLedgerComponent.prototype.filter = function (majorparent) {
        var _this = this;
        this.MasterService.getpartyListTree().subscribe(function (data) {
            var f = data.filter(function (x) { return x.ACID == majorparent; })[0];
            if (f != null) {
                _this.acParentList = f.children;
            }
        });
    };
    AddPartyLedgerComponent.prototype.SumbitSave = function () {
        var _this = this;
        if (this.MasterService.validateMasterCreation("save") == false) {
            return;
        }
        // this.ISCUSTOMER=false;
        // console.log("@@value",  this.ISCUSTOMER);
        if ((this.ACID == null || this.ACID == undefined) && (this.form.controls.parentid.value == "" || this.form.controls.parentid.value == null || this.form.controls.parentid.value == undefined)) {
            this.alertSerivces.warning("Please select parent group before save!");
            return;
        }
        if (this.form.value.IsInitialValue == true && this.userSetting.ENABLEINTERCOMPANYPARTY == 1) {
            if (this.form.value.INITIAL.length > 3 || this.form.value.INITIAL.length < 3) {
                alert("Inter Company ID should be 3 characters only!");
                return;
            }
        }
        else {
            this.form.value.INITIAL = '';
        }
        console.log("w", this.form.value.ACCODE);
        if (this.MasterService.userSetting.AUTOSUPCODE == 0 && this.form.value.ACCODE == "") {
            this.alertSerivces.warning("Accode is mandatory");
            return;
        }
        //console.log("BANKACCOUNTNUMBER",this.form.value.BANKNAME,this.form.value.BANKACCOUNTNUMBER)
        if (this.form.value.BANKNAME) {
            if (this.form.value.BANKACCOUNTNUMBER == "" || this.form.value.BANKACCOUNTNUMBER === null || this.form.value.BANKACCOUNTNUMBER === undefined) {
                this.alertSerivces.info("Please Enter Bank Account Number.");
                return;
            }
            var additionalbankdetailsObj = {};
            additionalbankdetailsObj.BANKCODE = this.form.value.BANKCODE;
            additionalbankdetailsObj.BANKNAME = this.form.value.BANKNAME;
            additionalbankdetailsObj.BANKACCOUNTNUMBER = this.form.value.BANKACCOUNTNUMBER;
            this.AdditionalBankList.push(additionalbankdetailsObj);
        }
        this.dialogMessageSubject.next("Saving Data please wait...");
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modaldialogs_messageDialog_messageDialog_component__["a" /* MessageDialog */], { hasBackdrop: true, data: { header: 'Information', message: this.dialogMessage$ } });
        if (this.form.value.VATNO) {
            //console.log({ billtotel: parseFloat(this.form.value.VATNO) })
            var pno = parseFloat(this.form.value.VATNO);
            if (this.userSetting.isOverSeas == 0 || this.Is_OverseasParty == 0) {
                if (pno.toString().length != 9) {
                    alert("VAT No is not correct");
                    dialogRef.close();
                    return;
                }
            }
        }
        try {
            // if (!this.parentGroup) throw new Error("Parent is missing");
            var al_1 = {};
            var partyAdditionalInfo = {};
            var SalesTargetData = {};
            if (this.Title == 'AddLedger' || this.mode == 'edit' && this.grp == 'A') {
                al_1.TYPE = "A";
                al_1.CRLIMIT = this.form.value.CRLIMIT;
            }
            else {
                al_1.CRLIMIT = 0;
                al_1.TYPE = "G";
            }
            if (this.mode != 'edit') {
                al_1.PARENT = this.ACID;
            }
            al_1.ACNAME = this.form.value.ACNAME ? this.form.value.ACNAME.trim() : this.form.value.ACNAME,
                al_1.MAPID = "N",
                al_1.ADDRESS = this.form.value.ADDRESS,
                al_1.PHONE = this.form.value.PHONE,
                al_1.FAX = this.form.value.FAX,
                al_1.EMAIL = this.form.value.EMAIL,
                al_1.VATNO = this.form.value.VATNO,
                al_1.ACCODE = this.form.value.ACCODE,
                al_1.PType = this.form.value.Ptype,
                al_1.ISACTIVE = this.form.value.isNotActive;
            al_1.ACID = this.ACID;
            al_1.BANKACCOUNTNUMBER = this.form.value.BANKACCOUNTNUMBER;
            al_1.BANKNAME = this.form.value.BANKNAME;
            al_1.BANKCODE = this.form.value.BANKCODE;
            al_1.DIV = this.ChangedDiv;
            if (al_1.DIV == '' || al_1.DIV == null) {
                al_1.DIV = this.userProfile.userDivision;
            }
            if (this.mode == 'edit') {
                //console.log("in EDIT MODE, acid", this.ACID,"parent",this.parentValueForEditMode )
                al_1.ACID = this.ACID;
                al_1.PARENT = this.parentValueForEditMode;
                //console.log({ ACID: al.ACID });
                //console.log({ ID: this.ID });
            }
            if (this.form.value.ShareAccount) {
                al_1.ISCOMMONAC = 1;
            }
            else {
                al_1.ISCOMMONAC = 0;
            }
            al_1.CITY = this.form.value.CITY;
            al_1.STATE = this.form.value.STATE;
            al_1.COMMON = this.form.value.COMMON;
            al_1.ISACTIVE = this.form.value.ISACTIVE;
            al_1.GEO = this.form.value.GEO;
            al_1.CRPERIOD = this.form.value.CRPERIOD;
            al_1.MOBILE = this.form.value.Mobile;
            al_1.CATEGORY = this.form.value.GEO;
            al_1.ISCOMMONAC = this.form.value.ISCOMMONAC;
            al_1.ISBRANCH = this.form.value.ISBRANCH;
            al_1.DISTRICT = this.form.value.DISTRICT;
            this.form.value.createMember == 1 ? al_1.CTYPE = 'Member Also' : al_1.CTYPE = "";
            al_1.IS_OVERSEAS_PARTY = this.form.value.IS_OVERSEAS_PARTY;
            if (al_1.CITY != null) {
                var checkAreaID = this.areaList.filter(function (x) { return x.AREANAME.toUpperCase() == _this.form.value.CITY.toUpperCase(); });
                // ////console.log("@@checkAreaID",checkAreaID);
                al_1.AREA_ID = checkAreaID[0] ? checkAreaID[0].AREAID : null;
            }
            al_1.INITIAL = this.form.value.INITIAL;
            // al.ISCOMMONAC = this.form.value.Sha
            al_1.PCL = 'pc002';
            al_1.PCompany = this.form.value.PCompany;
            al_1.PCompanyName = this.form.value.PCompanyName;
            // al.COMMON = this.form.value.common;
            partyAdditionalInfo.CNAME = this.form.value.CNAME;
            partyAdditionalInfo.ONAME = this.form.value.ONAME;
            partyAdditionalInfo.OCONTACT = this.form.value.OCONTACT;
            partyAdditionalInfo.ODESIGNATION = this.form.value.ODESIGNATION;
            partyAdditionalInfo.CONTACTNAME = this.form.value.CONTACTNAME;
            partyAdditionalInfo.CCONTACT_A = this.form.value.CCONTACT_A;
            partyAdditionalInfo.CCONTACT_B = this.form.value.CCONTACT_B;
            partyAdditionalInfo.CDESIGNATION = this.form.value.CDESIGNATION;
            partyAdditionalInfo.RELATEDSPERSON_A = this.form.value.RELATEDSPERSON_A;
            partyAdditionalInfo.RELATEDSPERSON_B = this.form.value.RELATEDSPERSON_B;
            partyAdditionalInfo.NOTES = this.form.value.NOTES;
            SalesTargetData.BAISHAKH = this.form.value.BAISHAKH;
            SalesTargetData.JESTHA = this.form.value.JESTHA;
            SalesTargetData.ASHAD = this.form.value.ASHAD;
            SalesTargetData.SHARWAN = this.form.value.SHARWAN;
            SalesTargetData.BHADRA = this.form.value.BHADRA;
            SalesTargetData.ASHWIN = this.form.value.ASHWIN;
            SalesTargetData.KARTIK = this.form.value.KARTIK;
            SalesTargetData.MANGSHIR = this.form.value.MANGSHIR;
            SalesTargetData.PAUSH = this.form.value.PAUSH;
            SalesTargetData.MAGH = this.form.value.MAGH;
            SalesTargetData.FALGUN = this.form.value.FALGUN;
            SalesTargetData.CHAITRA = this.form.value.CHAITRA;
            SalesTargetData.TARGET_AMOUNT = this.form.value.TARGET_AMOUNT;
            var AdditionalBankObj_1 = {};
            AdditionalBankObj_1.AdditionalBankList = this.AdditionalBankList;
            // //console.log('saveValue',al)
            this.createMember = this.form.value.createMember;
            // this.selectedSharedDiv = thi
            // ////console.log("@@createMember",this.createMember)
            if (this.Title == "AddGroup") {
                this.createMember = false;
            }
            if (al_1.PType == 'V' && al_1.VATNO == '' && this.grp == 'A' && (this.Is_OverseasParty == 0 && this.userSetting.VATNOTCOMPULSORY == 1)) {
                console.log(al_1.PType, this.Is_OverseasParty, this.grp);
                alert("Please Enter VATNO First!");
                dialogRef.close();
                return;
            }
            if (al_1.PType == 'V') {
                this.createMember = false;
            }
            if (this.userSetting.Country == 1) {
                if (al_1.PType == 'V' && al_1.VATNO == '' && this.grp == 'A' && (this.Is_OverseasParty == 0 && this.userSetting.VATNOTCOMPULSORY == 0)) {
                    console.log(al_1.PType, this.grp, this.Is_OverseasParty, this.userSetting.VATNOTCOMPULSORY);
                    alert("Please Enter VATNO First!");
                    dialogRef.close();
                    return;
                }
            }
            if (this.userSetting.CREATE_CPROFILE_AS_MEMBER == 1 && this.createMember == true && al_1.PType == 'C') {
                if (al_1.MOBILE == '' || al_1.MOBILE == null || al_1.MOBILE === undefined) {
                    alert("Please Enter Mobile No. First!");
                    dialogRef.close();
                    return;
                }
            }
            if (!(al_1.MOBILE == '' || al_1.MOBILE == null || al_1.MOBILE === undefined)) {
                if (al_1.MOBILE.length != 10) {
                    alert("Mobile No. should be ten digit length!");
                    dialogRef.close();
                    return;
                }
            }
            if (this.userSetting.ENABLESALES_TARGET == 1 && this.ISCUSTOMER == true && this.form.value.Ptype == 'C' && this.grp == 'A') {
                if (this.calculateMonthBalance() == false) {
                    dialogRef.close();
                    return;
                }
                if (this.calculateTotalMonthBalance() == false) {
                    dialogRef.close();
                    return;
                }
            }
            if (this.userSetting.ENABLEPARENTCOMPANY == 1) {
                if (this.form.value.PCompany === "" || this.form.value.PCompany === null || this.form.value.PCompany === undefined) {
                    dialogRef.close();
                    this.alertSerivces.info("Please select parent company!!");
                    return;
                }
            }
            al_1.enableDivSelectionTable = this.showDivSelectionTable;
            var divisionObj = {};
            divisionObj.DIV = this.form.value.MultipleDivision;
            var DObj_1 = {};
            if (this.showDivSelectionTable == true) {
                al_1.ISCOMMONAC = 0;
                this.DivListForSave = [];
                for (var _i = 0, _a = this.division; _i < _a.length; _i++) {
                    var i = _a[_i];
                    ////console.log("@@division",this.division)
                    if (i.isCheck == true) {
                        var dObj = {};
                        dObj.ACID = i.ACID;
                        dObj.DIV = i.INITIAL;
                        this.DivListForSave.push(dObj);
                    }
                }
                DObj_1.DivList = this.DivListForSave;
            }
            else {
                if (this.form.value.ShareAllDiv == 2 || this.form.value.ShareAllDiv == 1) {
                    al_1.enableDivSelectionTable = true;
                    al_1.ISCOMMONAC = 1;
                    this.DivListForSave = [];
                    for (var _b = 0, _c = this.division; _b < _c.length; _b++) {
                        var i = _c[_b];
                        var dObj = {};
                        dObj.ACID = i.ACID;
                        dObj.DIV = i.INITIAL;
                        this.DivListForSave.push(dObj);
                    }
                    DObj_1.DivList = this.DivListForSave;
                }
            }
            //   //console.log("PARENT BEFORE SAVE", al.PARENT,al.PARENT.slice(al.PARENT.length -3) )
            if (this.Title != "AddGroup") {
                if (al_1.PARENT.slice(al_1.PARENT.length - 3) != 'PAG') {
                    al_1.PARENT = this.MasterService.SelectedGroup;
                }
            }
            //console.log("AL", al);
            var sub = this.MasterService.saveAccount(this.mode, al_1, this.createMember, partyAdditionalInfo, DObj_1, SalesTargetData, AdditionalBankObj_1)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    //console.log('PARTYDATA@@@@', data)
                    var selNode = {};
                    if (_this.grp == 'A') {
                        al_1.ACID = data.result.acid;
                        _this.MasterService.PartialAccountList.push(al_1);
                        selNode = { type: 'A', value: al_1 };
                        ////console.log("TYPE99", selNode)
                    }
                    else {
                        // alert("reached")
                        selNode = { type: 'G', lastparent: _this.ACID, value: { ACID: data.result.ACID, ACNAME: data.result.ACNAME, PARENT: data.result.PARENT, PARENTID: data.result.PARENTID, children: [] } };
                    }
                    if (_this.mode == 'edit') {
                        _this.EditPartyEmit.emit();
                    }
                    else {
                        //console.log("save party emit",selNode);
                        _this.SavePartyEmit.emit(selNode);
                    }
                    //console.log("GROUP SAVE");
                    _this.PartyService.loadTableListSubject.next(al_1);
                    for (var _i = 0, _a = _this.PartyService.partyList; _i < _a.length; _i++) {
                        var i = _a[_i];
                        if (i.ACID == al_1.PARENT) {
                            i.children.push(al_1);
                        }
                    }
                    _this.dialogMessageSubject.next("Data Saved Successfully");
                    setTimeout(function () {
                        //console.log("data saved success");
                        dialogRef.close();
                        _this.onClose.emit(_this.ACID);
                        _this.router.navigate(["pages/account/AccountLedger/PartyTree"]);
                    }, 1000);
                }
                else {
                    //alert(data.result);
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.dialogMessageSubject.next("Error in Saving Data:" + data.result._body);
                    //console.log(data.result._body);
                    setTimeout(function () {
                        dialogRef.close();
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddPartyLedgerComponent.prototype.cancel = function () {
        var acid = this.mode == 'add' ? this.ACID : this.parentIdOnEdit;
        this.onClose.emit(true);
        this.PartyService.subTitle = " ";
    };
    AddPartyLedgerComponent.prototype.hideChildModal = function () {
        try {
            this.childModal.hide();
        }
        catch (ex) {
            //console.log(ex);
            alert(ex);
        }
    };
    AddPartyLedgerComponent.prototype.changePtype = function (value) {
        // this.form.get('Ptype').patchValue(value);
        if (value == 'V') {
            this.form.get('createMember').disable;
            this.ISCUSTOMER = false;
            if (this.userSetting.Country == 1) {
                this.PartyCat_List = this.GeoList.filter(function (x) { return x.PTYPE == 'V'; });
                if (this.mode == "add") {
                    this.form.get('GEO').setValue('111111-1');
                }
            }
        }
        else {
            this.form.get('createMember').enable;
            this.ISCUSTOMER = true;
            if (this.userSetting.Country == 1) {
                this.PartyCat_List = this.GeoList.filter(function (x) { return x.PTYPE == 'C'; });
                if (this.mode == "add") {
                    this.form.get('GEO').setValue('123456-7');
                }
            }
        }
    };
    AddPartyLedgerComponent.prototype.onGrpChange = function (event, i, selected) {
        var _this = this;
        try {
            if (selected) {
                // this.actype = selected.ACTYPE
                // this.changeACtype(selected.ACTYPE);
                // this.disableActype == true;
                //latest selected 
                this.parentGroup = selected;
            }
            //let newGroup: GroupAccounts = event.value;
            //console.log({ onGrpChangeEvent: event, eventIndex: i, selected: selected });
            var opt_1 = [];
            var ind = i;
            if (event) {
                if (this.acGroups.length > ind + 1) {
                    this.acGroups.splice(ind + 1, this.acGroups.length - 1);
                }
                //console.log({ GroupchageEvent: event, value: event.value.ACNAME });
                this.lastParentID = event.value.ACID;
                this.PartyService.getChildrenGroups(event.value.ACID)
                    .flatMap(function (data) { return data; })
                    .subscribe(function (data) {
                    //console.log({ children: data });
                    if (data.TYPE == 'G')
                        opt_1.push({ label: data.ACNAME, value: data });
                }, function (Error) {
                    return function () {
                        if (opt_1.length > 0) {
                            _this.acGroups.push({ group: event.value.ACNAME, value: event.value, options: opt_1 });
                        }
                        //this.groupListSubject.next(subjectData);
                        // //console.log({ negroup2: { group: event.value.ACNAME, value: event.value, options: opt }, subjectData2: subjectData });
                    };
                });
            }
        }
        catch (ex) {
            //console.log({ onGroupChange: ex })
        }
    };
    AddPartyLedgerComponent.prototype.onChangeArea = function (event) {
        var userAreaName = event.target.value;
        var checkArea = [];
        if (userAreaName != null) {
            checkArea = this.areaList.filter(function (x) { return x.AREANAME.toUpperCase() == userAreaName.toUpperCase(); });
            if (checkArea.length == 0) {
                if (confirm("Do you want to add new Area")) {
                }
                else {
                    this.form.get('CITY').patchValue("");
                }
            }
        }
    };
    AddPartyLedgerComponent.prototype.getGroups = function () {
        var _this = this;
        //FIRST GET THE MAIN GROUP
        // this.hasSubLedger = 0;
        // this.changehassubEvent(false);
        // this.disableHassubledger = false;
        // alert("reached")
        ////console.log("Has SUB is false")
        this.actype = '';
        this.disableActype = false;
        this.acGroups = [];
        this.getMainGroup();
        if (!this.ACID)
            return;
        //console.log({ acid: this.ACID });
        this.PartyService.getParentGroups(this.ACID)
            .flatMap(function (data) { return data; })
            .subscribe(function (data) {
            try {
                data.SELECTEDGROUPAC = data.CHILDLIST.find(function (itm) { return itm.ACID == data.SELECTEDGROUP; });
                _this.parentGroup = data.SELECTEDGROUPAC;
                //console.log({ selectedGroup: data.SELECTEDGROUP, selectedGroupAC: data.SELECTEDGROUPAC })
                // this.parentid = data.SELECTEDGROUPAC.SELECTEDGROUPAC.ACNAME;
                // if (data.SELECTEDGROUPAC.HASSUBLEDGER == 1 && this.hasSubLedger == 0) {
                //     this.hasSubLedger = 1;
                //     this.changehassubEvent(true);
                //     this.disableHassubledger = true;
                //     ////console.log("Disable AHS SUB")
                // }
                var opt_2 = [];
                data.CHILDLIST.forEach(function (child) {
                    opt_2.push({ label: child.ACNAME, value: child });
                });
                _this.acGroups.push({ group: data.ACNAME, value: data, options: opt_2 });
            }
            catch (ex) {
                //console.log({ getParentGroups: ex })
            }
        }, function (error) {
            (function () {
                if (_this.acGroups.length > 1) {
                    var selectedGroup = _this.acGroups[0].options.find(function (itm) {
                        return itm.value.ACID == _this.acGroups[1].value.ACID;
                    });
                    if (selectedGroup) {
                        _this.acGroups[0].value.SELECTEDGROUPAC = selectedGroup.value;
                    }
                    //console.log({ selectedGroupValue: selectedGroup.value });
                    // if (selectedGroup.value.Ptype) {
                    //     alert("REACHED")
                    //     this.actype = selectedGroup.value.Ptype
                    //     this.changePtype(selectedGroup.value.Ptype);
                    //     this.disableActype == true;
                    // }
                    // //console.log({groupTofind:this.acGroups[1],options:this.acGroups[0].options,selected:this.acGroups[0].value.SELECTEDGROUPAC,selected2:this.acGroups[1].value.SELECTEDGROUPAC})
                }
            });
        });
        return;
    };
    AddPartyLedgerComponent.prototype.getMainGroup = function () {
        var opt = [];
        this.PartyService.getTopGroups()
            .flatMap(function (data) { return data; })
            .subscribe(function (data) {
            opt.push({ label: data.ACNAME, value: data });
        });
        this.acGroups.push({ group: 'Main Group', value: { ACNAME: 'MAIN GROUP', ACID: null, PARENT: null }, options: opt });
        ////console.log("CheckAcGroup", this.acGroups)
    };
    AddPartyLedgerComponent.prototype.clickedNotActive = function (value) {
        if (this.form == null) {
            return;
        }
        this.form.get('isNotActive').patchValue(value);
    };
    AddPartyLedgerComponent.prototype.NotActive = function () {
    };
    AddPartyLedgerComponent.prototype.enableInitial = function (value) {
        // ////console.log("@@value", value)
        if (value == 0) {
            this.form.get('INITIAL').disable();
        }
        else {
            this.form.get('INITIAL').enable();
        }
    };
    AddPartyLedgerComponent.prototype.enableShareOptions = function (enableShareDiv) {
        // ////console.log("@@enableShareDiv", enableShareDiv)
        if (enableShareDiv == 1) {
            this.form.get('ShareSelectiveDiv').enable();
            this.form.get('ShareAllDiv').enable();
            // this.showDivSelectionTable = true;
        }
        else {
            this.form.get('ShareSelectiveDiv').disable();
            this.form.get('ShareAllDiv').disable();
            this.form.get('ShareSelectiveDiv').setValue(0);
            this.form.get('ShareAllDiv').setValue(0);
            this.showDivSelectionTable = false;
        }
    };
    AddPartyLedgerComponent.prototype.enableDivSelectionTable = function (showTable) {
        var _this = this;
        // ////console.log("@@showTable", showTable)
        if (showTable == 1) {
            this.showDivSelectionTable = true;
            this.form.get('ShareAllDiv').setValue(0);
            this.enableDivision = true;
            this.division.forEach(function (x) {
                x.INITIAL == _this.userProfile.CompanyInfo.INITIAL ? x.isCheck = true : '';
            });
        }
        else {
            this.showDivSelectionTable = false;
            this.enableDivision = false;
        }
    };
    AddPartyLedgerComponent.prototype.ShareAllDiv = function (ShareAllDiv) {
        this.showDivSelectionTable = false;
        if (ShareAllDiv == 1) {
            this.form.get('ShareSelectiveDiv').setValue(0);
            this.form.get('ISCOMMONAC').setValue(1);
        }
        else {
            this.form.get('ISCOMMONAC').setValue(0);
        }
        this.form.get('enableDivSelectionTable').setValue(false);
    };
    AddPartyLedgerComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    AddPartyLedgerComponent.prototype.handleKeyDownboardEvent = function ($event) {
        if ($event.code == "F3") {
            $event.preventDefault();
            this.cancel();
        }
    };
    AddPartyLedgerComponent.prototype.check = function (e) {
        // //console.log('checkValue@!',this.division)
        this.form.value.MultipleDivision = e.target.value;
    };
    AddPartyLedgerComponent.prototype.rowClick = function (i) {
        this.activeIndex = i;
    };
    AddPartyLedgerComponent.prototype.changeDivision = function (e) {
        // //console.log("CheckValue@",e)
        this.ChangedDiv = e;
        this.division.forEach(function (x) {
            x.INITIAL == e ? x.isDefault = true : x.isDefault = false;
        });
        if (this.mode == "add") {
            this.division.forEach(function (x) {
                x.INITIAL == e ? x.isCheck = true : x.isCheck = false;
            });
        }
        else {
            this.division.forEach(function (x) {
                x.INITIAL == e ? x.isCheck = true : '';
            });
        }
    };
    AddPartyLedgerComponent.prototype.ClickShareAccount = function (value) {
        this.form.value.enableDivSelectionTable = false;
        if (this.form.value.ShareAccount == 1) {
            this.changeDivision(this.MasterService.userProfile.CompanyInfo.INITIAL);
            this.enableDivision = true;
        }
        else {
            this.form.get('ShareAllDiv').setValue(0);
            this.form.get('ShareSelectiveDiv').setValue(0);
            this.enableDivision = false;
        }
        this.form.get('enableDivSelectionTable').setValue(false);
    };
    AddPartyLedgerComponent.prototype.add = function () {
        this.bank = true;
        // //console.log("form ko value", this.form.controls.BankName.value)
        var bankobj = {};
        bankobj.BankName = this.form.get("BankName").value;
        bankobj.BranchName = this.form.get("BranchName").value;
        bankobj.AccountNumber = this.form.get("AccountNumber").value;
        this.bankArray.push(bankobj);
        // //console.log("sabai value of table",bankobj);
    };
    AddPartyLedgerComponent.prototype.SaveBankdetail = function () {
        var _this = this;
        // let bodyData =  this.bankObj} 
        this.bankObj.CUSTOMERNAME = this.form.get("cusName").value;
        this.bankObj.ADDRESS = this.form.get("Address").value;
        this.bankObj.VATNO = this.form.get("VatNo").value;
        this.bankObj.BankDetails = this.bankArray;
        this.MasterService.saveBankDetail(this.bankObj).subscribe(function (res) {
            //console.log("result aayo",res)
            if (res.status == "ok") {
                _this.alertSerivces.info("Saved successfully!");
            }
            else {
                _this.alertSerivces.error(res.result);
            }
        }, function (error) {
            _this.alertSerivces.error("Error in savin data. Please try again!");
        });
    };
    AddPartyLedgerComponent.prototype.showBankPopup = function () {
        this.gridBankPopupSettings = {
            title: "Bank List",
            apiEndpoints: "/getBankPagedList/",
            defaultFilterIndex: 1,
            columns: [
                {
                    key: "BANKCODE",
                    title: "Bank Code",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "BANKNAME",
                    title: "Bank Name",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
        this.genericGridBankList.show();
    };
    AddPartyLedgerComponent.prototype.onBankSelect = function (value) {
        //console.log("ValueCheck",value)
        this.form.get('BANKCODE').patchValue(value.BANKCODE);
        this.form.get('BANKNAME').patchValue(value.BANKNAME);
    };
    AddPartyLedgerComponent.prototype.onAddBankSelect = function (value) {
        this.form.get('ADDITIONALBANKCODE').patchValue(value.BANKCODE);
        this.form.get('ADDITIONALBANKNAME').patchValue(value.BANKNAME);
    };
    AddPartyLedgerComponent.prototype.showAddBankPopup = function () {
        this.gridAdditionalBankPopupSettings = {
            title: "Bank List",
            apiEndpoints: "/getBankPagedList/",
            defaultFilterIndex: 1,
            columns: [
                {
                    key: "BANKCODE",
                    title: "Bank Code",
                    hidden: false,
                    noSearch: false
                },
                {
                    key: "BANKNAME",
                    title: "Bank Name",
                    hidden: false,
                    noSearch: false
                }
            ]
        };
        this.genericGridAdditionalBankList.show();
    };
    AddPartyLedgerComponent.prototype.onCLickAddBank = function () {
        if (this.form.value.ADDITIONALBANKCODE === '' || this.form.value.ADDITIONALBANKCODE === null || this.form.value.ADDITIONALBANKCODE === undefined ||
            this.form.value.ADDITIONALBANKNAME === '' || this.form.value.ADDITIONALBANKNAME === null || this.form.value.ADDITIONALBANKNAME === undefined ||
            this.form.value.ADDITIONALBANKACCOUNTNUMBER === '' || this.form.value.ADDITIONALBANKACCOUNTNUMBER === null || this.form.value.ADDITIONALBANKACCOUNTNUMBER === undefined) {
            return;
        }
        var additionalbankdetailsObj = {};
        additionalbankdetailsObj.BANKCODE = this.form.value.ADDITIONALBANKCODE;
        additionalbankdetailsObj.BANKNAME = this.form.value.ADDITIONALBANKNAME;
        additionalbankdetailsObj.BANKACCOUNTNUMBER = this.form.value.ADDITIONALBANKACCOUNTNUMBER;
        this.AdditionalBankList.push(additionalbankdetailsObj);
        this.form.get('ADDITIONALBANKCODE').setValue('');
        this.form.get('ADDITIONALBANKNAME').setValue('');
        this.form.get('ADDITIONALBANKACCOUNTNUMBER').setValue('');
    };
    AddPartyLedgerComponent.prototype.getPartyList = function (parentACID) {
        var _this = this;
        //console.log("get party list", this.ACID);
        if (parentACID) {
            this.PartyService.getPartyHeirarchy(parentACID).subscribe(function (res) {
                //console.log("result hai", res);
                var itemGroup = res[0];
                //console.log("MAIN GROUP LSIR", this.MasterService.mainGroupList);
                _this.MasterService.groupSelectObj.MGROUP = itemGroup.L1;
                //console.log("main group id", this.MasterService.groupSelectObj.MGROUP);
                _this.PartyService.getSubPartyList(_this.MasterService.groupSelectObj.MGROUP).subscribe(function (res) {
                    if (res.length > 0) {
                        _this.MasterService.subPartyAList = res;
                        _this.MasterService.groupSelectObj.SUBGROUP_A = itemGroup.L2;
                        //console.log("SUBGROUP A LIST", this.MasterService.subPartyAList);
                        _this.MasterService.disableSubPartyA = false;
                        _this.PartyService.getSubPartyList(_this.MasterService.groupSelectObj.SUBGROUP_A).subscribe(function (res) {
                            if (res.length > 0) {
                                _this.MasterService.subPartyBList = res;
                                _this.MasterService.groupSelectObj.SUBGROUP_B = itemGroup.L3;
                                _this.MasterService.disableSubPartyB = false;
                                _this.PartyService.getSubPartyList(_this.MasterService.groupSelectObj.SUBGROUP_B).subscribe(function (res) {
                                    if (res.length > 0) {
                                        _this.MasterService.subPartyCList = res;
                                        _this.MasterService.groupSelectObj.SUBGROUP_C = itemGroup.L4;
                                        _this.MasterService.disableSubPartyC = false;
                                    }
                                    else {
                                        _this.MasterService.disableSubPartyC = true;
                                    }
                                });
                            }
                            else {
                                _this.MasterService.disableSubPartyB = true;
                            }
                        });
                    }
                    else {
                        _this.MasterService.disableSubPartyA = true;
                    }
                });
            });
        }
    };
    AddPartyLedgerComponent.prototype.DeleteParty = function () {
        //console.log("current party acid", this.ACID);
        this.DeletePar.show();
    };
    AddPartyLedgerComponent.prototype.DeleteYes = function () {
        var _this = this;
        this.DeletePar.hide();
        this.spinnerservice.show("Deleting Party, please wait...");
        this.MasterService.deleteAccount(this.ACID).subscribe(function (data) {
            if (data.status == "ok") {
                _this.alertSerivces.success("Party deleted !");
                _this.spinnerservice.hide();
                _this.onClose.emit(_this.parentIdOnEdit);
                _this.router.navigate(["pages/account/AccountLedger/PartyTree"]);
            }
            else {
                _this.spinnerservice.hide();
                _this.alertSerivces.error("Error in deleting data: " + data.result._body);
            }
        });
    };
    AddPartyLedgerComponent.prototype.DeleteNo = function () {
        this.DeletePar.hide();
    };
    AddPartyLedgerComponent.prototype.checkDuplicateVAT = function (event) {
        var _this = this;
        //console.log("chec duplicte vat", event, this.MasterService.userSetting.EnableDuplicateVATforParty);
        if (this.MasterService.userSetting.EnableDuplicateVATforParty === 1) {
            this.PartyService.checkduplicateVATNO(event.target.value).subscribe(function (res) {
                //console.log("result checkduplicate", res);
                if (res == 'DUPLICATE') {
                    if (confirm("VAT no. already exists. Do you want to continue with the same VAT no. ?")) {
                    }
                    else {
                        _this.form.get('VATNO').patchValue("");
                    }
                }
            });
        }
    };
    AddPartyLedgerComponent.prototype.onStateChange = function (event) {
        this.DistrictListbyState = this.DistrictList.filter(function (x) { return x.State == event.target.value; });
    };
    AddPartyLedgerComponent.prototype.displayDistrictOnEdit = function (StateCode) {
        this.DistrictListbyState = this.DistrictList.filter(function (x) { return x.State == StateCode; });
    };
    AddPartyLedgerComponent.prototype.calculateMonthBalance = function () {
        var BAISAKH = this.form.value.BAISHAKH;
        var JESTHA = this.form.value.JESTHA;
        var ASHAD = this.form.value.ASHAD;
        var SHARWAN = this.form.value.SHARWAN;
        var BHADRA = this.form.value.BHADRA;
        var ASHWIN = this.form.value.ASHWIN;
        var KARTIK = this.form.value.KARTIK;
        var MANGSHIR = this.form.value.MANGSHIR;
        var PAUSH = this.form.value.PAUSH;
        var MAGH = this.form.value.MAGH;
        var FALGUN = this.form.value.FALGUN;
        var CHAITRA = this.form.value.CHAITRA;
        if ((BAISAKH + JESTHA + ASHAD + SHARWAN + BHADRA + ASHWIN + KARTIK + MANGSHIR + PAUSH + MAGH + FALGUN + CHAITRA) > 100) {
            this.alertSerivces.info("Monthly balance exceed 100% !!");
            return false;
        }
    };
    AddPartyLedgerComponent.prototype.calculateTotalMonthBalance = function () {
        var BAISAKH = this.form.value.BAISHAKH;
        var JESTHA = this.form.value.JESTHA;
        var ASHAD = this.form.value.ASHAD;
        var SHARWAN = this.form.value.SHARWAN;
        var BHADRA = this.form.value.BHADRA;
        var ASHWIN = this.form.value.ASHWIN;
        var KARTIK = this.form.value.KARTIK;
        var MANGSHIR = this.form.value.MANGSHIR;
        var PAUSH = this.form.value.PAUSH;
        var MAGH = this.form.value.MAGH;
        var FALGUN = this.form.value.FALGUN;
        var CHAITRA = this.form.value.CHAITRA;
        if ((BAISAKH + JESTHA + ASHAD + SHARWAN + BHADRA + ASHWIN + KARTIK + MANGSHIR + PAUSH + MAGH + FALGUN + CHAITRA) < 100) {
            this.alertSerivces.info("Monthly balance should be 100% !!");
            return false;
        }
    };
    AddPartyLedgerComponent.prototype.RemoveBankFromList = function (index) {
        this.AdditionalBankList.splice(index, 1);
    };
    AddPartyLedgerComponent.prototype.showParentAccountList = function () {
        this.gridACListPartyPopupSettings = {
            title: "Accounts",
            apiEndpoints: "/getAccountPagedListByMapId/Details/PartyOpeningBalance/",
            defaultFilterIndex: 1,
            columns: [
                {
                    key: "ACCODE",
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
        this.genericGridACListParty.show();
    };
    AddPartyLedgerComponent.prototype.onAddParentCompanySelect = function (value) {
        this.form.get('PCompany').patchValue(value.ACID);
        this.form.get('PCompanyName').patchValue(value.ACNAME);
    };
    AddPartyLedgerComponent.prototype.changeIsOverseasParty = function (value) {
        if (value == true) {
            this.Is_OverseasParty = 1;
        }
        else {
            this.Is_OverseasParty = 0;
        }
    };
    AddPartyLedgerComponent.prototype.resetForm = function () {
        this.form = this._fb.group({
            majorparent: [''],
            parentid: [''],
            ACNAME: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            Ptype: [''],
            MAPID: [''],
            ADDRESS: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            PHONE: [''],
            FAX: [''],
            EMAIL: [''],
            ACCODE: [''],
            isNotActive: [''],
            CITY: [''],
            STATE: [''],
            COMMON: [0],
            ISACTIVE: [1],
            VATNO: [''],
            CRPERIOD: [0],
            CRLIMIT: [0],
            GEO: ['111111-1'],
            CNAME: [''],
            ONAME: [''],
            OCONTACT: [''],
            ODESIGNATION: [''],
            CONTACTNAME: [''],
            CCONTACT_A: [''],
            CCONTACT_B: [''],
            CDESIGNATION: [''],
            RELATEDSPERSON_A: [''],
            RELATEDSPERSON_B: [''],
            NOTES: [''],
            Mobile: [''],
            INITIAL: [''],
            IsInitialValue: [0],
            createMember: [''],
            DIV: [this.userProfile.userDivision],
            ShareAccount: [''],
            ShareSelectiveDiv: [''],
            ShareAllDiv: [''],
            enableDivSelectionTable: [0],
            cusName: [''],
            ISCOMMONAC: [0],
            BANKACCOUNTNUMBER: [''],
            BANKCODE: [''],
            BANKNAME: [''],
            ISBRANCH: [''],
            BAISHAKH: [0],
            JESTHA: [0],
            ASHAD: [0],
            SHARWAN: [0],
            BHADRA: [0],
            ASHWIN: [0],
            KARTIK: [0],
            MANGSHIR: [0],
            PAUSH: [0],
            MAGH: [0],
            FALGUN: [0],
            CHAITRA: [0],
            TARGET_AMOUNT: [0],
            DISTRICT: [''],
            ADDITIONALBANKACCOUNTNUMBER: [''],
            ADDITIONALBANKCODE: [''],
            ADDITIONALBANKNAME: [''],
            PCompany: [''],
            PCompanyName: [''],
            IS_OVERSEAS_PARTY: [0]
        });
    };
    return AddPartyLedgerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])('onClose'),
    __metadata("design:type", Object)
], AddPartyLedgerComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('acid'),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "ACID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('parent'),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "Parent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('PARENTID'),
    __metadata("design:type", Object)
], AddPartyLedgerComponent.prototype, "PARENTID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('partyParentName'),
    __metadata("design:type", Object)
], AddPartyLedgerComponent.prototype, "partyParentName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "rootID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "Title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "grp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["b" /* ModalDirective */])
], AddPartyLedgerComponent.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddPartyLedgerComponent.prototype, "SavePartyEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddPartyLedgerComponent.prototype, "EditPartyEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('ACNAME'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
], AddPartyLedgerComponent.prototype, "acnameField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "parentPartyID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "parentIdOnEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddPartyLedgerComponent.prototype, "mainGroupID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('DeletePar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["b" /* ModalDirective */])
], AddPartyLedgerComponent.prototype, "DeletePar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])("genericGridBankList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddPartyLedgerComponent.prototype, "genericGridBankList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])("genericGridAdditionalBankList"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddPartyLedgerComponent.prototype, "genericGridAdditionalBankList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])("genericGridACListParty"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddPartyLedgerComponent.prototype, "genericGridACListParty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])("genericGridContract"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddPartyLedgerComponent.prototype, "genericGridContract", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])("genericGridSalesman"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__common_popupLists_generic_grid_generic_popup_grid_component__["c" /* GenericPopUpComponent */])
], AddPartyLedgerComponent.prototype, "genericGridSalesman", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["HostListener"])("document : keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AddPartyLedgerComponent.prototype, "handleKeyDownboardEvent", null);
AddPartyLedgerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'addPartyLedgerSelector',
        template: __webpack_require__(1850),
        //  [(ngModel)]="PARENTACNAME"
        // [(ngModel)]="RootName"
        providers: [__WEBPACK_IMPORTED_MODULE_4__partyledger_service__["a" /* TreeViewPartyervice */]],
        styles: ["input:disabled, select:disabled, textarea:disabled {\n    cursor: not-allowed !important;\n    color: black !important;\n    background-color: #EBEBE4 !important;\n}\n\nbutton:disabled{\ncursor: not-allowed !important;\n}"]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__common_repositories_masterRepo_service__["a" /* MasterRepo */],
        __WEBPACK_IMPORTED_MODULE_4__partyledger_service__["a" /* TreeViewPartyervice */],
        __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdDialog */],
        __WEBPACK_IMPORTED_MODULE_9__common_services_permission__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_10__common_services_alert_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_12__common_services_spinner_spinner_service__["a" /* SpinnerService */]])
], AddPartyLedgerComponent);

var DObj = (function () {
    function DObj() {
    }
    return DObj;
}());

var DivList = (function () {
    function DivList() {
    }
    return DivList;
}());

var AdditionalBankObj = (function () {
    function AdditionalBankObj() {
    }
    return AdditionalBankObj;
}());

var AdditionalBankList = (function () {
    function AdditionalBankList() {
    }
    return AdditionalBankList;
}());



/***/ }),

/***/ 1609:
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
                if (option == "searchByName") {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var comId = (item.ACNAME) ? (item.ACNAME).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (comId.indexOf(searchedQuery) !== -1) {
                            // //console.log("CheckIten",item)
                            return item;
                        }
                    });
                }
                else if (option == "searchByVat") {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var comId = (item.VATNO) ? (item.VATNO).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (comId.indexOf(searchedQuery) !== -1) {
                            return item;
                        }
                    });
                }
                else if (option == "orderByStamp") {
                    return data.filter(function (item) {
                        var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                        var comId = (item.VATNO) ? (item.VATNO).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                        if (comId.indexOf(searchedQuery) !== -1) {
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

/***/ 1688:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table-container table.ng2-smart-table {\n  color: #000000; }\n  .ng2-smart-table-container table.ng2-smart-table th, .ng2-smart-table-container table.ng2-smart-table td {\n    border: 1px solid gainsboro !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  .ng2-smart-table-container table.ng2-smart-table input {\n    line-height: 1.5 !important; }\n  .ng2-smart-table-container table.ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #000000;\n    font-weight: 900; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 900 !important; }\n      .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #000000 !important; }\n  .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action {\n    font-size: 14px !important;\n    color: #000000;\n    padding: 0 5px;\n    display: inline-block; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n\nnav.ng2-smart-pagination-nav {\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ 1689:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table-container table.ng2-smart-table {\n  color: #000000; }\n  .ng2-smart-table-container table.ng2-smart-table th, .ng2-smart-table-container table.ng2-smart-table td {\n    border: 1px solid gainsboro !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  .ng2-smart-table-container table.ng2-smart-table input {\n    line-height: 1.5 !important; }\n  .ng2-smart-table-container table.ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #000000;\n    font-weight: 900; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 900 !important; }\n      .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #000000 !important; }\n  .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action {\n    font-size: 14px !important;\n    color: #000000;\n    padding: 0 5px;\n    display: inline-block; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n\nnav.ng2-smart-pagination-nav {\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ 1691:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table-container table.ng2-smart-table {\n  color: #000000; }\n  .ng2-smart-table-container table.ng2-smart-table th, .ng2-smart-table-container table.ng2-smart-table td {\n    border: 1px solid gainsboro !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  .ng2-smart-table-container table.ng2-smart-table input {\n    line-height: 1.5 !important; }\n  .ng2-smart-table-container table.ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #000000;\n    font-weight: 900; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 900 !important; }\n      .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #000000 !important; }\n  .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action {\n    font-size: 14px !important;\n    color: #000000;\n    padding: 0 5px;\n    display: inline-block; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n\nnav.ng2-smart-pagination-nav {\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ 1693:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table-container table.ng2-smart-table {\n  color: #000000; }\n  .ng2-smart-table-container table.ng2-smart-table th, .ng2-smart-table-container table.ng2-smart-table td {\n    border: 1px solid gainsboro !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  .ng2-smart-table-container table.ng2-smart-table input {\n    line-height: 1.5 !important; }\n  .ng2-smart-table-container table.ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #000000;\n    font-weight: 900; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 900 !important; }\n      .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #000000 !important; }\n  .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action {\n    font-size: 14px !important;\n    color: #000000;\n    padding: 0 5px;\n    display: inline-block; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n\nnav.ng2-smart-pagination-nav {\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ 1701:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .modal-content {\r\n    padding: 1px;\r\n    margin: 0px;\r\n    float: right;\r\n  }\r\n\r\n  .table-scroll {\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  tbody>tr:hover {\r\n    background-color: #f3f5f4;\r\n    cursor: pointer;\r\n  }\r\n\r\n  tr {\r\n    font-size: 11px;\r\n  }\r\n\r\n  .selected-row {\r\n    background-color: #ced6d3 !important;\r\n  }\r\n\r\n  .modal-sticky-account {\r\n    position: fixed;\r\n    right: 5px;\r\n    width: 50%;\r\n    height: 74%;\r\n    z-index: 9999999;\r\n  }\r\n\r\n  .table>tbody>tr>td {\r\n    line-height: 30px !important;\r\n  }\r\n</style>\r\n<div class=\"modal-sticky-account\" [class.modal-sticky-hide]=\"!isActive\"\r\n  style=\"display : block; padding: 0px;margin-top: -14px;\">\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\" *ngIf=\"popupsettings\" style=\"\r\n            background-color: #f5f5f5 !important\">\r\n    <div class=\"modal-header\" style=\"padding: 0px;\">\r\n      <h4 class=\"modal-title\" style=\"text-align: center;\">\r\n        {{ popupsettings.title }}\r\n      </h4>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-6\" style=\"margin: 2px 0px;\">\r\n          <select style=\"width: 100%;\" [(ngModel)]=\"filterOption\" (ngModelChange)=\"triggerSearch($event)\">\r\n            <option [value]=\"\" selected>Select Filter Option</option>\r\n            <option [value]=\"item.key\" *ngFor=\"let item of popupsettings.columns\">{{ item.title }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-6\" style=\"margin: 2px 0px;\">\r\n          <input #inputBox type=\"text\" style=\"width: 100%;\" placeholder=\"enter text for search\"\r\n            [(ngModel)]=\"filterValue\" (ngModelChange)=\"triggerSearch($event)\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 table-scroll\" style=\"height: 30%;max-height: 380px\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr style=\"    background: #63bbb2;\">\r\n            <th *ngFor=\"let item of popupsettings.columns\">{{ item.title }}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"itemList\">\r\n          <!-- (dblclick)=\"doubleClick(itemObj)\" -->\r\n          <tr class=\"highlight\" [class.selected-row]=\"selectedRowIndex == i\" *ngFor=\"\r\n                    let itemObj of itemList \r\n                      | filter: filterOption :filterValue  \r\n                      | paginate\r\n                        : {\r\n                            id: tabindex,\r\n                            itemsPerPage: pageSize,\r\n                            currentPage: pageNumber \r\n                          };\r\n                    let i = index\r\n                  \" (click)=\"singleClick(i,itemObj)\" title=\"click for detail view\">\r\n            <td *ngFor=\"let item of popupsettings.columns\" style=\"text-align: left !important;\">\r\n              {{ itemObj[item.key] }}\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"row clearfix\" style=\"float: center; margin : 4px 0px;\">\r\n        <div class=\"col-md-12\" style=\"width:100%\" *ngIf=\"itemList.length\">\r\n          <pagination-controls [id]=\"tabindex\" (pageChange)=\"onPageChange($event)\" maxSize=\"5\" directionLinks=\"true\"\r\n            autoHide=\"true\" responsive=\"true\" previousLabel=\"Previous\" nextLabel=\"Next\"\r\n            screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\r\n            screenReaderCurrentLabel=\"Account List\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1702:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .modal-content {\r\n    padding: 1px;\r\n    margin: 0px;\r\n    float: right;\r\n  }\r\n  .table-scroll {\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  tbody > tr:hover {\r\n    background-color: #f3f5f4;\r\n    cursor: pointer;\r\n  }\r\n  tr{\r\n    font-size: 11px;\r\n  }\r\n  .selected-row{\r\n    background-color: #ced6d3 !important;\r\n  }\r\n  .td{\r\n    text-align: left;\r\n  }\r\n</style>\r\n<div\r\n  class=\"modal-sticky\"\r\n  [class.modal-sticky-hide]=\"!isActive\"\r\n  style=\"display : block; padding: 0px;\"\r\n>\r\n  <!-- Modal content -->\r\n  <div\r\n    class=\"modal-content\"\r\n    style=\"box-shadow: -10px 0px 10px 1px #aaaaaa;\"\r\n    *ngIf=\"popupsettings\"\r\n  >\r\n    <div class=\"modal-header\" style=\"padding: 0px;background: #8cccfb;\">\r\n      <button class=\"close\" aria-label=\"Close\" (click)=\"hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <h4 class=\"modal-title\" style=\"text-align: center;\">\r\n        {{ popupsettings.title }}\r\n      </h4>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-6\" style=\"margin: 2px 0px;\">\r\n          <select\r\n            style=\"width: 100%;\"\r\n            [(ngModel)]=\"filterOption\"\r\n            (ngModelChange)=\"triggerSearch($event)\"\r\n          >\r\n            <option [value]=\"\" selected>Select Filter Option</option>\r\n            <option\r\n              [value]=\"item.key\"\r\n              *ngFor=\"let item of popupsettings.columns\"\r\n              >{{ item.title }}</option\r\n            >\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-6\" style=\"margin: 2px 0px;\">\r\n          <input\r\n            #inputBox\r\n            type=\"text\"\r\n            style=\"width: 100%;\"\r\n            placeholder=\"enter text for search\"\r\n            [(ngModel)]=\"filterValue\"\r\n            (ngModelChange)=\"triggerSearch($event)\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 table-scroll\" style=\"height: 30%;\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr style=\"background: #8cccfb;\">\r\n            <th *ngFor=\"let item of popupsettings.columns\">{{ item.title }}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"itemList\">\r\n          <tr\r\n            class=\"highlight\"\r\n            [class.selected-row]= \"selectedRowIndex == i\"\r\n            *ngFor=\"\r\n              let itemObj of itemList\r\n                | filter: filterOption :filterValue\r\n                | paginate\r\n                  : {\r\n                      id: tabindex,\r\n                      itemsPerPage: pageSize,\r\n                      currentPage: pageNumber\r\n                    };\r\n              let i = index\r\n            \"\r\n            (dblclick)=\"doubleClick(itemObj)\"\r\n            (click)=\"singleClick(i)\"\r\n            title=\"double click for detail view\"\r\n          >\r\n            <td *ngFor=\"let item of popupsettings.columns\">\r\n              {{ itemObj[item.key] }}\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"row clearfix\" style=\"float: center; margin : 4px 0px;\">\r\n        <div class=\"col-md-12\" style=\"width:100%\" *ngIf=\"itemList.length\">\r\n          <pagination-controls\r\n            [id]=\"tabindex\"\r\n            (pageChange)=\"onPageChange($event)\"\r\n            maxSize=\"9\"\r\n            directionLinks=\"true\"\r\n            autoHide=\"true\"\r\n            responsive=\"true\"\r\n            previousLabel=\"Previous\"\r\n            nextLabel=\"Next\"\r\n            screenReaderPaginationLabel=\"Pagination\"\r\n            screenReaderPageLabel=\"page\"\r\n            screenReaderCurrentLabel=\"You're on page\"\r\n          ></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1816:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  label {\r\n    width: 150px;\r\n    font-size: 15px;\r\n    color: #403c3c;\r\n  }\r\n\r\n  input {\r\n    height: 30px;\r\n  }\r\n\r\n \r\n</style>\r\n\r\n<div class=\"sticky-top\">\r\n  <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n    <div class=\"col-md-6\">\r\n      <h3 class=\"page-title\">{{ Title }}</h3>\r\n    </div>\r\n    <div class=\"col-md-6\" style=\"float: right;\"></div>\r\n    <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"cancel()\" style=\"margin-right : 10px;\">\r\n      Back\r\n    </button>\r\n    <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info pull-right\"\r\n      style=\"margin-right : 10px;\">\r\n      Save\r\n    </button>\r\n    <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info pull-right\"\r\n      [disabled]=\"!this.parentGroup\" *ngIf=\"grp == 'G'\" style=\"margin-right : 10px;\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"tabbable\" id=\"ALEDGER-tabs\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#general-info1\" data-toggle=\"tab\">General Info</a>\r\n          </li>\r\n         \r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" *ngIf='showBank==1 && isGroup == 0 && isGroup == 0' href=\"#tab2\" data-toggle=\"tab\">Bank</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"  *ngIf='showPLedgerInfo==1 && isGroup == 0 && MasterService.PType == \"C\"' href=\"#tab3\" data-toggle=\"tab\">Customer</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\"  *ngIf='showPLedgerInfo==1 && isGroup == 0 && MasterService.PType == \"V\"' href=\"#tab4\" data-toggle=\"tab\">Supplier</a>\r\n                </li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane active\" id=\"general-info1\">\r\n            <form [formGroup]=\"form\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"col-md-8\">\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-3 form-control-label\">Group Name*</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"ACNAME\" placeholder=\"Name\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-3 form-control-label\">Primary Group*</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <select class=\"form-control\" name=\"MainGroup\" (change)=\"SelectMainGrp()\" [(ngModel)]=\"Prefix\"\r\n                          [ngModelOptions]=\"{standalone:true}\">\r\n                          <option *ngFor=\"let i of MainGrpList\" value=\"{{i.ACID}}\">{{i.ACNAME}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-3 form-control-label\">Under:</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" [formControl]=\"PARENTNAME\"\r\n                          (keydown.tab)=\"onAcGroupPopupTab()\" (keydown.enter)=\"onAcGroupPopupTab()\"\r\n                          placeholder=\"Press ENTER or TAB to Choose Group\" />\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group row\">\r\n                      <label class=\"col-sm-3 form-control-label\">ACCode</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          formControlName=\"ACCODE\"\r\n                          placeholder=\"CODE\"\r\n                        />\r\n                      </div>\r\n                    </div> -->\r\n\r\n                    <ng-container>\r\n                      <div class=\"form-group row\">\r\n                        <label class=\"col-sm-3 form-control-label\">Has Sub Ledger</label>\r\n                        <div class=\"col-sm-9\">\r\n                          <input type=\"checkbox\" formControlName=\"HASSUBLEDGER\">\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ng-container>\r\n                    <!-- <div *ngIf=\"showAssets==1\" class=\"form-group row\">\r\n                        <label class=\"col-sm-3 form-control-label\"\r\n                          >Assets Type</label\r\n                        >\r\n                        <div class=\"col-sm-9\">\r\n                          <select\r\n                            class=\"form-control\"\r\n                            formControlName=\"MAPID\"\r\n                            style=\"height:30px;padding-bottom: 0px;\"\r\n                          >\r\n                            <option value=\"C\">Cash</option>\r\n                            <option value=\"O\">Others</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>  -->\r\n                    <!-- <div class=\"form-group row\">\r\n                        <label class=\"col-sm-3 form-control-label\"\r\n                          >Status*</label\r\n                        >\r\n                        <div class=\"col-sm-9\">\r\n                          <select\r\n                            class=\"form-control\"\r\n                            formControlName=\"ISACTIVE\"\r\n                            style=\"height:30px;padding-bottom: 0px;\"\r\n                          >\r\n                            <option value=1>Active</option>\r\n                            <option value=0>Inactive</option>\r\n                          </select>\r\n                        </div>\r\n                      </div> -->\r\n                    <!-- *ngIf=\"AccCurrentSelectedGroup\" -->\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                      <for-account-group-popup-grid #acPopupGrid (onItemDoubleClick)=\"onItemDoubleClick($event)\" [Prefix]=\"Prefix\">\r\n                        </for-account-group-popup-grid>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          \r\n          <div class=\"tab-pane\" id=\"tab2\" >\r\n              <h4>Bank Information</h4>\r\n              <bankdetails></bankdetails>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"tab3\">\r\n                <h4>Customer Information</h4>\r\n                <PLedger #PLedgerChild [PType]='PTypeForParty'></PLedger>\r\n              </div>\r\n              <div class=\"tab-pane\" id=\"tab4\">\r\n                  <h4>Supplier Information</h4>\r\n                  <PLedger #PLedgerChild [PType]='PTypeForParty'></PLedger>\r\n                </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\" style=\"margin-top: -210px;width: 106%;height: 480px;margin-left:0px\">\r\n          <button class=\"close\" (click)=\"CloseParty()\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        <div class=\"modal-body\">\r\n          <PLedger [title]=\"Acctitle\"></PLedger>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div> -->"

/***/ }),

/***/ 1817:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n        <div class=\"row\">\r\n          <button class=\"btn btn-info\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\" >New Account</button>\r\n          <button class=\"btn btn-info\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onGrpAddClick()\" >Create Group</button>\r\n        </div>\r\n        <div class=\"row\">\r\n          <ba-card baCardClass=\"with-scroll\">\r\n            <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\" (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n          </ba-card>\r\n        </div>\r\n</div>\r\n    "

/***/ }),

/***/ 1818:
/***/ (function(module, exports) {

module.exports = "\r\n  .table td, .table th{\r\n    padding: 0px !important;\r\n  }\r\n  \r\n\r\n  tbody {\r\n    display:block;\r\n    height:62vh;\r\n    overflow:auto;\r\n}\r\n\r\nthead, tbody tr {\r\n  display:table;\r\n  width:100%;\r\n  table-layout:fixed;/* even columns width , fix width of table too*/\r\n}\r\n\r\nth{\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  font-family: Roboto,Arial,sans-serif;\r\n}\r\n\r\ntd{\r\n  font-size: 13px;\r\n  font-family: Roboto,Arial,sans-serif;\r\n\r\n}\r\n\r\n.table tbody tr td{\r\n  line-height: 24px;\r\n}\r\n\r\n.btn-sm{\r\n  line-height: 3px;\r\n}\r\n\r\n.btn-info{\r\n    margin: auto 1px;\r\n}\r\n\r\n.form-control{\r\n  font-size: 12px !important;\r\n}\r\n\r\n\r\n.searchBy{\r\n  font-size: 13px;\r\n  margin-left: 18rem;\r\n}\r\n\r\n.selectrow{\r\n  padding: 0px 15px;\r\n}\r\n\r\n.plainBackGround{\r\n  border: 2px solid #dcdcdc;\r\n}"

/***/ }),

/***/ 1819:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- <ba-card style=\"background-color: #6b5656;max-height: 650px !important;\" baCardClass=\"with-scroll\"> -->\r\n\r\n  <div [ngBusy]=\"busy\">\r\n    <div class=\"sticky-top\">\r\n      <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n        <div class=\"col-md-6\">\r\n          <label\r\n            style=\"font-family: Segoe UI Light;font-weight: bold;font-size: 18px;padding-top: 3px;width:152px !important;\">ACCOUNT\r\n            MASTER</label>\r\n          <label *ngIf=\"this.AccountService.subTitle\"\r\n            style=\"font-family: Segoe UI Light;font-weight: bold;font-size: 17px;padding-top: 3px;width:auto;\">\r\n            {{this.AccountService.subTitle}}</label>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n\r\n        <div class=\"col-md-4\" style=\"float: right;\">\r\n          <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"backToDashboard()\"\r\n            style=\" margin-bottom: 10px;  margin-left: 10px;\">\r\n            F10 Back\r\n          </button>\r\n          <button *ngIf=\"userSetting.enableMaster_AddEdit==1\" [disabled]=\"addMode || this.selectedNode==undefined\" type=\"button\" class=\"btn btn-info pull-right\"\r\n            (click)=\"AddLedger()\" style=\" margin-bottom: 10px;  margin-left: 10px;\">Add Account</button>\r\n          <button *ngIf=\"userSetting.enableMaster_AddEdit==1\" [disabled]=\"addMode || this.selectedNode==undefined\" type=\"button\" class=\"btn btn-info pull-right\" (click)=\"AddGroup(Tree)\"\r\n            style=\"margin-bottom: 10px;\">Add Group</button>\r\n            <button type=\"button\" class=\"btn btn-info pull-right\" (click)=\"ExportAccountLedger()\" style=\"margin-right : 10px;width:100px\">Export Account</button>\r\n          <!-- <button [disabled]=\"addMode\" type=\"button\" class=\"btn btn-info pull-right\" (click)=\"ExportPartyLedger()\"\r\n            style=\"margin-bottom: 10px;margin-right: 11px;\">Export Account</button> -->\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3 \" style=\"padding-top: 40px; \">\r\n    <div class=\"col-md-12\" style=\"padding: 0px\">\r\n      <!-- <button [disabled]=\"addMode\" type=\"button\" class=\"btn btn-info right\" (click)=\"AddGroup(Tree)\" style=\"margin-bottom: 10px;\">Add Group</button>\r\n                <button [disabled]=\"addMode || this.selectedNode==undefined\" type=\"button\" class=\"btn btn-info right\" (click)=\"AddLedger()\" style=\" margin-bottom: 10px;  margin-left: 10px;\">Add Party</button> -->\r\n\r\n    </div>\r\n    <div class=\"plainBackGround\">\r\n      <form>\r\n        <fieldset [class.disabledbutton]=\"addMode\" [disabled]=\"addMode\"\r\n          style=\"border:0px solid;border-color:#dcdcdc; margin-top: -10px;\" *ngIf=\"mode != 'add' && mode != 'edit'\">\r\n          <input name=\"filter\" #filter (keyup)=\"filterNodes(filter.value, tree)\" placeholder=\"&nbsp; Search Account\"\r\n            class=\"filterclass\" />\r\n          <div id=treediv>\r\n            <div\r\n              style=\"overflow: auto; border: black;border-width: 2px;height: 500px;background:white;font-size:12px; margin-left: -8px; width: 106%;\">\r\n              <Tree #tree [nodes]=\"nodes\" [focused]=\"true\" [options]=\"customTemplateStringOptions\"\r\n                (onEvent)=\"onEvent($event)\" (onActivate)=\"onselect(tree,$event)\">\r\n                <ng-template #treeNodeTemplate let-node>\r\n                  <!-- <span title=\"{{node.data.subTitle}}\" [contextMenu]=\"myContextMenu\" [contextMenuSubject]=\"node.data\">{{ node.data.ACNAME }}{{ childrenCount(node) }}</span> -->\r\n                  <span title=\"{{node.data.subTitle}} \" [contextMenu]=\"myContextMenu\" [contextMenuSubject]=\"node.data \"\r\n                    style=\"margin-left:24px\"><img src=\"../../../assets/img/Folder.jpg\" alt=\"Group\" height=\"20\"\r\n                      width=\"20\" style=\"margin-top:-2px\">\r\n                    {{ node.data.ACNAME }}\r\n                  </span>\r\n                </ng-template>\r\n                <ng-template #loadingTemplate>Loading, please hold....</ng-template>\r\n              </Tree>\r\n\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <!--select field-->\r\n        <fieldset \r\n          style=\"border:2px solid;border-color:#dcdcdc; padding: 5px 5px; height:77vh\"\r\n           *ngIf=\"mode == 'add' || mode == 'edit'\"\r\n           [disabled]=\"masterService.disableGroupSelection\">\r\n          \r\n          <div class=\"row\">\r\n            <label class=\"form-control-label col-md-4 \" style=\"width: auto;\">Main Group :</label>\r\n            <div class=\"col-md-7\">\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n            <select id=\"mainGroup\" class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.MGROUP\" [ngModelOptions]=\"{standalone: true}\" (change)=\"getSubgroupA($event)\">\r\n                <option [value]=\"\"></option>\r\n                <option *ngFor=\"let main of masterService.mainGroupList;let i=index\" [value]=\"main.ACID\">{{main?.ACNAME}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"row\">\r\n            <label class=\"form-control-label col-md-4 \" style=\"width: auto;\">Sub Group (A) :</label>\r\n            <div class=\"col-md-7\">\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n            <select class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_A\" [disabled]=\"masterService.disableSubGroupA\" [ngModelOptions]=\"{standalone: true}\" (change)=\"getSubgroupB($event)\" >\r\n                <option [value]=\"\"></option>\r\n                <option *ngFor=\"let sub of masterService.subGroupAList;let i=index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"row\">\r\n            <label class=\"form-control-label col-md-4 \" style=\"width: auto;\" >Sub Group (B) :</label>\r\n            <div class=\"col-md-7\">\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n            <select class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_B\" [disabled]=\"masterService.disableSubGroupB\" [ngModelOptions]=\"{standalone: true}\" (change)=\"getSubgroupC($event)\">\r\n                <option [value]=\"\"></option>\r\n                <option *ngFor=\"let sub of masterService.subGroupBList; let i=index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"row\">\r\n            <label class=\"form-control-label col-md-4 \" style=\"width: auto;\" >Sub Group (C) :</label>\r\n            <div class=\"col-md-7 pd0\">\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n            <select class=\"form-control\"  [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_C\" [disabled]=\"masterService.disableSubGroupC\" [ngModelOptions]=\"{standalone: true}\" (change)=\"selectSubgroupC($event)\">\r\n                <option *ngFor=\"let sub of masterService.subGroupCList; let i = index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}</option>\r\n            </select>\r\n        </div>\r\n        </fieldset>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!-- </ba-card> -->\r\n\r\n  <div *ngIf=\"!addMode\" class=\"col-md-9\" style=\"padding-left: 5px;padding-top: 40px;background-color: white;\">\r\n    <!-- <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n          (view)=\"onViewClick($event)\"></ng2-smart-table> -->\r\n    <div class=\"row\" style=\"margin:10px 12px\">\r\n      <div class=\"col-md-4\" style=\"margin-top: 3px;\">\r\n        <input type=\"radio\" name=\"item\" [(ngModel)]=\"searchParty\" #searchPartyByName=\"ngModel\"\r\n          value=\"searchByName\">&nbsp; Search By Name &nbsp;&nbsp;\r\n        <input type=\"radio\" name=\"item\" [(ngModel)]=\"searchParty\" #searchPartyByVat=\"ngModel\" value=\"searchByVat\">&nbsp;\r\n        Search By Acc Code. &nbsp;&nbsp;\r\n        \r\n      </div>\r\n      <div class=\"col-md-4\" style=\"padding-left: 0px;\">\r\n        <input type=\"text\" name=\"search\" [(ngModel)]=\"partyFilter\" #searchFilter=\"ngModel\" class=\"form-control\"\r\n          placeholder=\"Search...\" style=\"width: 95%; height: 1.7rem; padding: 0px 6px;\">\r\n      </div>\r\n      <div class=\"col-md-4\" style=\"padding-left: 0px;\">\r\n      <input type=\"radio\" name=\"sortItem\" [(ngModel)]=\"AccountService.sortAccount\"  value=\"sortByName\" (change)=\"sortAccountListByName()\">&nbsp;\r\n        Sort By Name &nbsp;\r\n        <input type=\"radio\" name=\"sortItem\" [(ngModel)]=\"AccountService.sortAccount\" value=\"sortByDate\" (change)=\"sortAccountListByDate()\">&nbsp;\r\n        Sort By Date &nbsp;\r\n        <button class=\"btn btn-info\" (click)=\"showAllAccountList()\">Show All</button>\r\n        <!-- <input type=\"radio\" name=\"sortItem\" [(ngModel)]=\"AccountService.sortAccount\" value=\"showAll\" (change)=\"showAllAccountList()\">&nbsp;\r\n        Show All &nbsp; -->\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <table class=\"table table-striped\" style=\"margin-left: 1rem; width: 97%;\">\r\n        <thead>\r\n          <tr style=\"position: sticky; top:0;line-height: 2.4rem;\">\r\n            <th scope=\"col\" style=\"width:2%\">S.N</th>\r\n            <th scope=\"col\" style=\"width:12%\">Account Name</th>\r\n            <th scope=\"col\" style=\"width:8%\">Account Code</th>\r\n            <th scope=\"col\" style=\"width:8%\">Account Type</th>\r\n            <th scope=\"col\" style=\"width:8%\">Parent Group</th>\r\n\r\n            <th scope=\"col\" style=\"width:10%; text-align: center;\">Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngIf=\"this.AccountService.partyList && this.AccountService.partyList.length >0\">\r\n            <tr\r\n              *ngFor=\"let party of (this.AccountService.partyList|searchData:partyFilter:searchParty|paginate:{itemsPerPage:itemsPerPage,currentPage: currentPage,totalItems: totalCount}); let i=index\">\r\n              <td style=\"width:2%\">{{i+1}}</td>\r\n              <td style=\"width:12%\">{{party.ACNAME}}</td>\r\n              <td style=\"width:8%\">{{party.ACCODE}}</td>\r\n              <td style=\"width:8%\">{{party.ACTYPE_NAME}}</td>\r\n             <td style=\"width:8%\">{{party.PARENT_NAME}}</td>\r\n\r\n             \r\n              <td style=\"width:10%; text-align: center;\">\r\n\r\n                <a data-toggle=\"modal\" (click)=\"onViewClick(party)\">View&nbsp;&nbsp;</a>\r\n                <a *ngIf=\"userSetting.enableMaster_AddEdit==1\" data-toggle=\"modal\" (click)=\"onEditClick(party)\">Edit</a>\r\n\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"this.AccountService.partyList && (this.AccountService.partyList|searchData:partyFilter:searchParty).length === 0\">\r\n            <tr>\r\n              <td colspan=\"8\">\r\n                <div class=\"font-weight-bold\">Account Ledger Information are unavailable.</div>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"pagination\"\r\n        *ngIf=\"this.AccountService.partyList && (this.AccountService.partyList|searchData:partyFilter:searchParty).length > itemsPerPage\">\r\n        <div style=\"margin-left: 18rem;\">\r\n          <pagination-controls (pageChange)=\"partyPagination($event)\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"addMode\" class=\"col-md-9\" style=\"padding-left: 5px;padding-top: 30px;overflow: scroll;height: 600px;\">\r\n    <addAccLedgerSelector [Title]=\"modeTitle\" [acid]=\"selectedNode?.ACID\" [PARENTID]=\"selectedNode?.PARENT\"\r\n       [rootID]=\"root\" (onClose)=\"onAddClose($event)\" [mode]=\"mode\" [grp]=\"grp\"\r\n      (EditPartyEmit)=\"EditPartyEmit()\" (SavePartyEmit)=\"SavePartyEmit($event)\" [parentGroupID] = \"parentGroupID\" [parentIdOnEdit]=\"selectedNode?.PARENT_CODE\" [selectedNode]=\"selectedNode\" [nodes]=\"nodes\" [overdraft]=\"overdraftIs\" [isBank]=\"isBank\" ></addAccLedgerSelector>\r\n  </div>\r\n  <context-menu #myContextMenu>\r\n    <ng-template *ngFor=\"let action of contextMenuActions\" contextMenuItem let-item [visible]=\"action.visible\"\r\n      [enabled]=\"action.enabled\" [divider]=\"action.divider\" (execute)=\"contextMenuClick($event.item,action)\">\r\n      {{ action.html(item) }}\r\n    </ng-template>\r\n  </context-menu>\r\n</div>\r\n\r\n\r\n\r\n<div>\r\n  <div class=\"modal fade\" bsModal #DeleteAcc=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" style=\"margin:-10rem;height:34rem\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\" style=\"width: 420px;\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"onClickNo()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n\r\n          </button>\r\n          <h4 class=\"modal-title\">Delete Account</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" style=\"margin-top: -10px;margin-bottom: 12px;\">\r\n              Are you sure you want to delete this account?\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <button (click)=\"DeleteYes()\" style=\"margin-right: 4px;\" class=\"btn btn-danger \">Yes</button>\r\n              <button (click)=\"DeleteNo()\" type=\"button \" class=\"btn btn-warning\">No</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<style>\r\n  .filterclass {\r\n    margin: 10px;\r\n    margin-left: -8px;\r\n    height: 28px;\r\n    width: 284px;\r\n    color: #666666;\r\n    border: 1px solid #cbcbcb;\r\n    border-radius: 5px;\r\n    background-color: #ffffff;\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n  }\r\n</style>\r\n<!-- <div class=\"modal-sticky\" *ngIf=\"showPartyLedgerFilterpopUp\" style=\"display: block;\r\npadding: 0px;\r\nmargin-bottom: 159px;\r\nheight: 241px;\r\nposition: absolute;\r\nright: 30%;\r\n/* top: 5px; */\r\nwidth: 550px;\r\nz-index: 9999999;\r\nborder: 1px solid;background: white;\">\r\n\r\n  <div class=\"modal-content modal-content-main-area\">\r\n    <div class=\"modal-header\" style=\"height: 40px;padding-bottom: 6%;\">\r\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Ledger filter </h4>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\" style=\"height: 226px; margin-top : 10px;    margin-left: 3%;\">\r\n\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Party Group : </label>\r\n        </div>\r\n\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.type\" (change)=\"changeType()\">\r\n          <option value =\"Customer\">Customer</option>\r\n          <option value =\"Supplier\">Supplier</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Party Type : </label>\r\n        </div>\r\n\r\n\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.accountType\">\r\n          <option *ngFor=\"let i of GeoList\" value=\"{{i.OrgTypeCode}}\" >{{\r\n            i.OrgTypeName\r\n            }}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Party Name : </label>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" [(ngModel)]=\"LedgerFilterObj.accountName\" style=\"height:24px;width: 92% !important;margin-left: -5%;\"\r\n          (keydown.Enter)=\"showAcList(i);\"\r\n           placeholder=\"Press Enter to select\" autocomplete=\"off\">\r\n\r\n        </div>\r\n      </div>\r\n      <div style=\"float: right;\r\n      margin-top: 14px;\r\n      margin-right: 9%;\">\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"OkCommand()\">Apply</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"ExportAll()\">Export\r\n          All</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"CancelCommand()\">Cancel</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div> -->\r\n\r\n<div class=\"modal-sticky\" *ngIf=\"showAccountLedgerFilterpopUp\" style=\"display: block;\r\npadding: 0px;\r\nmargin-bottom: 159px;\r\nheight: 241px;\r\nposition: absolute;\r\nright: 30%;\r\n/* top: 5px; */\r\nwidth: 550px;\r\nz-index: 9999999;\r\nborder: 1px solid;background: white;\">\r\n\r\n  <div class=\"modal-content modal-content-main-area\">\r\n    <div class=\"modal-header\" style=\"height: 40px;padding-bottom: 6%;\">\r\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Ledger filter </h4>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\" style=\"height: 226px; margin-top : 10px;    margin-left: 3%;\">\r\n\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Account Group : </label>\r\n        </div>\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.MAINGROUP\" (ngModelChange)=\"changeAccountGroup($event)\">\r\n          <option *ngFor=\"let parent of ParentList\" value=\"{{parent.ACID}}\">{{parent.ACNAME}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Account Type: </label>\r\n        </div>\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.ACCOUNTTYPE\" (change)=\"changeAccountType()\">\r\n          <option value=\"Group\">Group</option>\r\n          <option value=\"Account\">Account</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 8px;\" *ngIf=\"LedgerFilterObj.ACCOUNTTYPE == 'Group'\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Sub Account Group : </label>\r\n        </div>\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.SUBGROUP\">\r\n          <option *ngFor=\"let parent of SubGroupAccountMaster\" value=\"{{parent.ACID}}\">{{parent.ACNAME}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 8px;\" *ngIf=\"LedgerFilterObj.ACCOUNTTYPE == 'Account'\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Account Name : </label>\r\n        </div>\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.ACID\">\r\n          <option *ngFor=\"let parent of ChildrenList\" value=\"{{parent.ACID}}\">{{parent.ACNAME}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div style=\"float: right;\r\n      margin-top: 14px;\r\n      margin-right: 9%;\">\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"OkCommand()\">Apply</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"ExportAll()\">Export\r\n          All</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"CancelCommand()\">Cancel</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<generic-popup-grid #genericGridACList [popupsettings]=\"gridACListPopupSettings\"\r\n  (onItemDoubleClick)=\"onAcSelect($event)\"></generic-popup-grid>"

/***/ }),

/***/ 1820:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Addform\">\r\n<div class=\"row\" class=\"form-horizontal\">\r\n    <ba-card [title]=\"modeTitle\" baCardClass=\"with-scroll\">\r\n    <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 form-control-label\">Group Name:</label>\r\n    <div class=\"col-sm-5\">\r\n       <input type=\"text\" class=\"form-control\" formControlName=\"ACNAME\" placeholder=\"Group Name\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"Addform.controls['ACNAME'].touched && !Addform.controls['ACNAME'].valid\">GroupName is Required.</div>\r\n     \r\n    </div> \r\n  </div>\r\n \r\n  </ba-card>\r\n    </div>\r\n    \r\n  <button type=\"button\" (click)=\"onSave()\" title=\"Save\" class=\"btn btn-info\">Save</button>\r\n\r\n  <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button>\r\n  </form>\r\n  <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n                        <h4 class=\"modal-title\">Information</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        {{DialogMessage}}\r\n                    </div>\r\n                    <!--<div class=\"modal-footer\">\r\n                        <button class=\"btn btn-info confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                        <button class=\"btn btn-info confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                    </div>!-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n     <div>"

/***/ }),

/***/ 1821:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n<div class=\"row\" class=\"form-horizontal\">\r\n    <ba-card [title]=\"modeTitle\" baCardClass=\"with-scroll\">\r\n    <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 form-control-label\">Group Name:</label>\r\n    <div class=\"col-sm-2\">\r\n        <select style=\"width:130px; height:28px;\" formControlName=\"majorparent\">\r\n       <option *ngFor=\"let code of ParentAcList\" [ngValue]=\"code.ACID\">{{code.ACNAME}}</option>\r\n         <!--<div class=\"alert alert-danger\" *ngIf=\"form.controls['ACNAME'].touched && !Addform.controls['ACNAME'].valid\">GroupName is Required.</div>-->\r\n      </select>\r\n     </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 form-control-label\">New SubGroup:</label>\r\n    <div class=\"col-sm-2\">\r\n      <input type=\"text\" class=\"form-control\"formControlName=\"ACNAME\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"form.controls['ACNAME'].touched && !form.controls['ACNAME'].valid\">GroupName is Required.</div>\r\n    </div>\r\n  </div>\r\n <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 form-control-label\">Has Subledger:</label>\r\n    <div class=\"col-sm-2\">\r\n      <input  [value]=1 name=\"hasSub\" type=\"checkbox\" (change)=\"changehassubEvent(1)\">\r\n        \r\n    </div>\r\n  </div>\r\n \r\n    </ba-card>\r\n    </div>\r\n    \r\n  <button type=\"button\" (click)=\"onSave()\" title=\"Save\" class=\"btn btn-info\">Save</button>\r\n\r\n  <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button>\r\n </form>\r\n  <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n                        <h4 class=\"modal-title\">Information</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        {{DialogMessage}}\r\n                    </div>\r\n                    <!--<div class=\"modal-footer\">\r\n                        <button class=\"btn btn-info confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                        <button class=\"btn btn-info confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                    </div>!-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n     <div>"

/***/ }),

/***/ 1822:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  label {\r\n    width: 150px;\r\n    font-size: 15px;\r\n    color: #403c3c;\r\n  }\r\n\r\n  input {\r\n    height: 30px;\r\n  }\r\n\r\n  label{\r\n    font-size: 14px;\r\n  }\r\n</style>\r\n<!-- begin form here -->\r\n<form [formGroup]=\"form\">\r\n  \r\n  <div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px; margin-top: 0px !important;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"tabbable\" id=\"warehouse-tabs\">\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" href=\"#general-info4\" data-toggle=\"tab\">Account Information</a>\r\n            </li>\r\n           \r\n           \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#divisionwise-setting\" *ngIf=\"grp =='A' && enableDivisionMapping == true\" data-toggle=\"tab\">Division Wise Setting</a>\r\n            </li>\r\n\r\n            <!-- <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#bank-setting\" *ngIf=\"grp =='A' \" data-toggle=\"tab\">Bank Setting</a>\r\n            </li> -->\r\n           \r\n            <!-- <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#route\" data-toggle=\"tab\">Route</a>\r\n            </li> -->\r\n          </ul>\r\n                  <!-- <label *ngIf=\"modeTitle\" style=\"font-weight: bold;font-size: 16px;width: 200px;padding-top: 1%;\">&nbsp;>> {{ modeTitle}}</label> -->\r\n          \r\n            <div style=\"float: right;padding-top: 8px;padding-right: 8px;\">\r\n              <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" \r\n      *ngIf=\"grp=='A'\" [disabled]=\"!form.valid || mode=='view'\" style=\"width:80px;margin-right: 10px;\">Save</button>\r\n    <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" *ngIf=\"grp=='G'\" style=\"width:80px;margin-right: 10px;\">Save</button>\r\n    <button type=\"button\" (click)=\"DeleteLedger()\" class=\"btn btn-info\" *ngIf=\"grp ==  'A' && mode == 'view'\" style=\"width: 80px;margin-right: 10px;\">Delete</button>\r\n    <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\" style=\"width:80px;\">F3 Reset</button>\r\n            </div>\r\n         \r\n          <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\" id=\"general-info4\">\r\n                <!-- General Info -->\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-sm-12\">\r\n                   <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                    \r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Parent:</label>\r\n                        <!-- [(ngModel)]=\"g.value.SELECTEDGROUPAC\" [ngModelOptions]=\"{standalone: true}\" -->\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\"  placeholder=\"Parent\" formControlName=\"parentid\"/>\r\n                        </div> \r\n                     </div>\r\n                     <div *ngIf=\"Title == 'AddLedger' || mode=='edit' && grp=='A' || mode=='view' \">\r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Account Name:</label>\r\n                        <div class=\"col-sm-8\">\r\n                          <input *ngIf=\"isBank != true\" type=\"text\" #ACNAME style=\"font-size: 12px !important;width: 97%;\" class=\"form-control\" formControlName=\"ACNAME\" placeholder=\"Account Name\">\r\n                          <input *ngIf=\"isBank == true\" type=\"text\" #ACNAME style=\"font-size: 12px !important;width: 97%;\" class=\"form-control\" formControlName=\"ACNAME\" \r\n                          placeholder=\"Type bank name or enter to select Bank name\" (keydown.Enter)=\"showBankPopup();\" >\r\n\r\n                        </div>\r\n                      </div>\r\n                      <!-- <div class=\"alert alert-danger\" *ngIf=\"form.controls['ACNAME'].touched && !form.controls['ACNAME'].valid\">PartyLedger Name is Required.</div> -->\r\n              \r\n                     \r\n                      <!-- <div class=\"alert alert-danger\" *ngIf=\"form.controls['ADDRESS'].touched && !form.controls['ADDRESS'].valid\">Address is Required.</div> -->\r\n                    </div>\r\n                    <div *ngIf=\"Title == 'AddGroup' || mode=='edit'  && grp!='A'\" class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">GroupName:</label>\r\n                      <div class=\"col-sm-8\">\r\n                        <input type=\"text\" #ACNAME formControlName=\"ACNAME\" style=\"font-size: 12px !important;width: 97%;\" class=\"form-control\" placeholder=\"Group Name\" />\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    \r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">                  \r\n                    <label *ngIf=\"((Title == 'AddLedger' ||  grp=='A') && MasterService.userSetting.AUTOACCODE ==0) ||(MasterService.userSetting.AUTOACCODE ==1)\" class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">A/C Code:</label>\r\n                    <div *ngIf=\"((Title == 'AddLedger' ||  grp=='A') && MasterService.userSetting.AUTOACCODE ==0) ||(MasterService.userSetting.AUTOACCODE ==1)\" class=\"col-sm-3\">\r\n                      <input type=\"text\" id=\"ACCODE\" style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"ACCODE\" placeholder=\"Account Code\">\r\n                      <div class=\"alert alert-danger\" *ngIf=\"form.controls['ACCODE'].touched && !form.controls['ACCODE'].valid\">Account Code is Required.</div>\r\n                    </div>\r\n                    <div *ngIf=\"(grp == 'A' && MasterService.userSetting.ENABLESUBLEDGER == 1) || (grp == 'G' && MasterService.userSetting.ENABLESUBLEDGER == 2)\" class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <div class=\"col-sm-3\">\r\n                        <input style=\"margin-left:1rem;\" type=\"checkbox\" formControlName=\"HASSUBLEDGER\">\r\n                        <label class=\"col-sm-3 form-control-label\" style=\"padding-top: 7px;\">Has Sub Ledger</label>\r\n                      </div>\r\n                      </div>\r\n                   </div>\r\n\r\n                   <div *ngIf=\"(Title == 'AddLedger' || mode=='edit' && grp=='A' || mode=='view') && overdraft == 'OD' \">\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Credit Limit :</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\"  placeholder=\"Credit limit\" formControlName=\"CRLIMIT\"/>\r\n                      </div> \r\n                      </div>\r\n                    </div>\r\n\r\n                   <div *ngIf=\"Title == 'AddLedger' || mode=='edit' && grp=='A' || mode=='view' \">\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Account Type:</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\"  placeholder=\"AC type\" formControlName=\"ACTYPE\"/>\r\n                      </div> \r\n                      </div>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"(Title == 'AddLedger' || mode=='edit' && grp=='A' || mode=='view') && \r\n                      (ACID == MasterService.userSetting.TDS_PAYABLE || \r\n                      ACID == MasterService.userSetting.TDS_RECEIVABLE || \r\n                      parentValueForEditMode == MasterService.userSetting.TDS_PAYABLE || \r\n                      parentValueForEditMode == MasterService.userSetting.TDS_RECEIVABLE ||\r\n                      MasterService.groupSelectObj.SUBGROUP_A == MasterService.userSetting.TDS_PAYABLE || \r\n                      MasterService.groupSelectObj.SUBGROUP_A == MasterService.userSetting.TDS_RECEIVABLE ||\r\n                      MasterService.groupSelectObj.SUBGROUP_B == MasterService.userSetting.TDS_PAYABLE || \r\n                      MasterService.groupSelectObj.SUBGROUP_B == MasterService.userSetting.TDS_RECEIVABLE ||\r\n                      MasterService.groupSelectObj.SUBGROUP_C == MasterService.userSetting.TDS_PAYABLE || \r\n                      MasterService.groupSelectObj.SUBGROUP_C == MasterService.userSetting.TDS_RECEIVABLE)\">\r\n                        <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                          <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">TDS Type:</label>\r\n                          <div class=\"col-sm-3\">\r\n                            <input type=\"text\" class=\"form-control\"  style=\"font-size: 12px !important;\" id=\"tdstype\" formControlName=\"TDS_TYPE\" name=\"tdstype\" list=\"tdstypelist\" (change)=\"onChangeTDSType($event)\"  \r\n                            placeholder=\"TDS Type\" maxlength=\"50\" minlength=\"2\" autocomplete=\"off\"/>\r\n                            <datalist id=\"tdstypelist\">\r\n                              <option *ngFor=\"let i of TDSType_List\" value=\"{{i.TDS_TYPE}}\">{{i.TDS_TYPE}}</option>\r\n                            </datalist>\r\n                          </div> \r\n                          </div>\r\n                          </div>\r\n\r\n                      <!-- <div *ngIf=\"(Title == 'AddLedger' || mode=='edit' && grp=='A' || mode=='view') && isBank==true\">\r\n                        <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                          <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Account No:</label>\r\n                          <div class=\"col-sm-3\">\r\n                            <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Bank Account Number\"\r\n                              formControlName=\"BANKACCOUNTNUMBER\" />\r\n                          </div>\r\n                        </div>\r\n                      </div> -->\r\n\r\n                  </div>\r\n                </div>\r\n\r\n          \r\n              </div> <!--general info tab end-->\r\n\r\n            \r\n\r\n              <div class=\"tab-pane\" id=\"divisionwise-setting\">\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"col-md-6width: 42%;\">\r\n                        <fieldset style=\"background-color: #e2eaea;\">\r\n                          <legend style=\"font-size: 15px !important;width: 51%;\">Associated Division Mapping :</legend>\r\n                          <div class=\"col-md-12\">\r\n                            <div class=\"col-sm-3\">\r\n                              <label class=\"form-control-label\">Division :</label>\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                              <select class=\"form-control\" formControlName=\"DIV\" (change)=\"changeDivision($event.target.value)\">\r\n                                <option *ngFor=\"let div of division\" value=\"{{ div.INITIAL }}\">\r\n                                  {{ div.NAME }}\r\n                              </option>      </select>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-6\" style=\"margin-top: 3%;\">\r\n                            <fieldset >\r\n                              <legend style=\"font-size: 15px !important;width: 51%;\">\r\n                              <div>\r\n                                <!-- <input type=\"checkbox\" formControlName=\"createMember\" style=\"height:13px;\"> -->\r\n                              </div>\r\n                              \r\n                                <input type=\"checkbox\" style=\"height: 13px !important;\" name=\"checkDivision\" id=\"checkDivision\" formControlName=\"ShareAccount\" (change)=\"enableShareOptions($event.target.checked==1?1:0)\">\r\n                                Shared This Account :</legend>\r\n                                  <input type=\"radio\" style=\"height: 13px !important;\" formControlName=\"ShareSelectiveDiv\" value=1 (change)=\"enableDivSelectionTable($event.target.checked==1?1:0)\">&nbsp;Share To Selective Division\r\n                                <!-- </div> -->\r\n                                <br>\r\n                                <!-- <div class=\"col-sm-6\"> -->\r\n                                  <input type=\"radio\" style=\"height: 13px !important;\" formControlName=\"ShareAllDiv\" value=2 (change)=\"ShareAllDiv($event.target.checked==1?1:0)\">&nbsp;Share To All Division\r\n                              \r\n                            </fieldset>\r\n                          </div>\r\n                          <div class=\"col-md-6\"  style=\"margin-top: 3%;\">\r\n                            <fieldset *ngIf=\"showDivSelectionTable\" style=\"background-color: #e2eaea;height :173px;\">\r\n                              <legend style=\"font-size: 15px !important;width: 60%;\">\r\n                                Account Sharing Division Selection :</legend>\r\n                              <div style=\"overflow-y: auto;height: 132px;\">\r\n                                <table>\r\n                                  <tr *ngFor=\"let d of division;let i = index\" >\r\n                                    <td style=\"border:1px solid #e0e0e0;width: 1%;\">\r\n                                      <input type=\"checkbox\" [(ngModel)]=\"d.isCheck\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        (change)=\"check($event)\" value=\"{{d}}\" (click)='rowClick(i)' *ngIf = '!d.isDefault'>\r\n                                        <input type=\"checkbox\" [(ngModel)]=\"d.isCheck\" [ngModelOptions]=\"{standalone: true}\" [checked] *ngIf = 'd.isDefault' disabled>\r\n                                    </td>\r\n                                    <td style=\"border:1px solid #e0e0e0;padding-left: 24px;width:100%\">{{d.NAME}}</td>\r\n                                  </tr>\r\n        \r\n        \r\n        \r\n                                </table>\r\n                              </div>\r\n                            \r\n                            </fieldset>\r\n                            </div>\r\n                          \r\n                        </fieldset>\r\n                        \r\n                      </div>\r\n                    <!-- <div class=\"col-md-6\">\r\n                    <fieldset *ngIf=\"showDivSelectionTable\" style=\"background-color: #e2eaea;height :173px\">\r\n                      <legend style=\"font-size: 15px !important;width: 60%;\">\r\n                        Account Sharing Division Selection :</legend>\r\n                      <div style=\"overflow-y: auto;height: 132px;\">\r\n                        <table>\r\n                          <tr *ngFor=\"let d of division;let i = index\" >\r\n                            <td style=\"border:1px solid #e0e0e0;width: 1%;\">\r\n                              <input type=\"checkbox\" [(ngModel)]=\"d.isCheck\" [ngModelOptions]=\"{standalone: true}\"\r\n                                (change)=\"check($event)\" value=\"{{d}}\" (click)='rowClick(i)' *ngIf = '!d.isDefault'>\r\n                                <input type=\"checkbox\" [(ngModel)]=\"d.isCheck\" [ngModelOptions]=\"{standalone: true}\" [checked] *ngIf = 'd.isDefault' disabled>\r\n                            </td>\r\n                            <td style=\"border:1px solid #e0e0e0;padding-left: 24px;width:100%\">{{d.NAME}}</td>\r\n                          </tr>\r\n\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    \r\n                    </fieldset>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"tab-pane\" id=\"bank-setting\">\r\n                <div class=\"form-group row\" style=\"margin-top:40px;\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"row\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"margin-top: 14px;\">Customer Name:</label>\r\n                        <div class=\"col-sm-8\" style=\"margin-left: -27px;\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important; margin-top: 10px;\" class=\"form-control\" formControlName=\"cusName\" placeholder=\"Customer Name\">\r\n                        </div>\r\n\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"margin-top: 14px;;\">Address:</label>\r\n                        <div class=\"col-sm-8\" style=\"margin-left: -27px;\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important; margin-top: 10px;\" class=\"form-control\"  placeholder=\"Address\">\r\n                        </div>\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"margin-top: 14px;\">VAT No.:</label>\r\n                        <div class=\"col-sm-8\" style=\"margin-left: -27px;\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important; margin-top: 10px;\" class=\"form-control\"  placeholder=\"VAT NO.\">\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"row\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"margin-top: 14px;\">Bank Name:</label>\r\n                        <div class=\"col-sm-8\" style=\"margin-left: -27px;\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important; margin-top: 10px;\" class=\"form-control\"  placeholder=\"Bank Name\">\r\n                        </div>\r\n\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"margin-top: 14px;\">Branch:</label>\r\n                        <div class=\"col-sm-8\" style=\"margin-left: -27px;\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important; margin-top: 10px;\" class=\"form-control\"  placeholder=\"Branch Name\">\r\n                        </div>\r\n\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"margin-top: 14px;\">Account Number:</label>\r\n                        <div class=\"col-sm-8\" style=\"margin-left: -27px;\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important; margin-top: 10px;\" class=\"form-control\"  placeholder=\"Account Number\">\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div style=\"float: right;padding-top: 8px;padding-right: 8px; margin-bottom: 7px;\">\r\n                      <button type=\"button\"  title=\"Cancel\" class=\"btn btn-info\" style=\"width:80px;\">ADD</button>\r\n                    </div>\r\n\r\n                      <div>\r\n                        <table style=\"margin-bottom: 5px; font-size: 13px; width: 100%\">\r\n                          <thead>\r\n                            <tr\r\n                              style=\"\r\n                                border-bottom: 2px solid #e6e6e6;\r\n                                border-top: 2px solid #e6e6e6;\r\n                                height: 30px;\r\n                                background: #63bbb2;\r\n                                color: black;\r\n                              \"\r\n                            >\r\n                              <th style=\"width: 1%; text-align:center;\">SNo.</th>\r\n                              <th style=\"width: 10%; padding-left: 1%; text-align:center;\">Bank Name</th>\r\n                              <th style=\"width: 7%; padding-left: 1% ;text-align:center;\">Branch</th>\r\n                              <th style=\"width: 7%; padding-left: 1%; text-align:center;\">Account Number</th>\r\n\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr style=\"border: 1px; max-height: 25px\">\r\n\r\n                              <td style=\"line-height: 21px; text-align: center; border: 1px solid #e6e6e6;\">\r\n                              1\r\n                              </td>\r\n                  \r\n                              <td style=\"line-height: 21px; text-align: center; border: 1px solid #e6e6e6;\">\r\n                                <input class=\"form-control\"\r\n                                  style=\"height: 25px; width: 95% !important\"/>\r\n                              </td>\r\n                              <td style=\"line-height: 21px; text-align: center; border: 1px solid #e6e6e6;\">\r\n                                <input class=\"form-control\" style=\"height: 25px; width: 95% !important\"/>\r\n                              </td>\r\n                              <td style=\"line-height: 21px; text-align: center; border: 1px solid #e6e6e6;\">\r\n                                <input class=\"form-control\" style=\"height: 25px; width: 95% !important\"\r\n                                  type=\"text\"/>\r\n                              </td>\r\n                              \r\n                              \r\n                              \r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n\r\n                      </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>  <!--banl setting tab content end-->\r\n         \r\n         \r\n          </div> <!--tab content-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<form [formGroup]='form'>\r\n  <!-- <div class=\"row\" class=\"form-horizontal\">\r\n    <div style=\"background-color:#ffffff; border:1px solid;border-color:#dcdcdc; padding:20px; margin-bottom: 10px;\">\r\n      <div class=\"com-sm-12\" style=\"padding:5px;border-bottom: solid 1px #dcdcdc; margin-bottom: 10px;\">\r\n        <h5>{{modeTitle}}</h5>\r\n      </div>\r\n    \r\n    </div>\r\n  </div> -->\r\n\r\n  <!--  -->\r\n  <!-- <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" \r\n    *ngIf=\"grp=='A'\" [disabled]=\"!form.valid || mode=='view'\">Save</button>\r\n  <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" *ngIf=\"grp=='G'\">Save</button>\r\n  <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button> -->\r\n</form>\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n     \r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div>\r\n  <div class=\"modal fade\" bsModal #DeleteAcc=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" style=\"margin:-100px;height:460px\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\" style=\"width: 420px;\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"onClickNo()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n\r\n          </button>\r\n          <h4 class=\"modal-title\">Delete Account</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" style=\"margin-top: -10px;margin-bottom: 12px;\">\r\n              Are you sure you want to delete this account?\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <button (click)=\"DeleteYes()\" style=\"margin-right: 4px;\" class=\"btn btn-danger \">Yes</button>\r\n              <button (click)=\"DeleteNo()\" type=\"button \" class=\"btn btn-warning\">No</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<generic-popup-grid #genericGridBankList [popupsettings]=\"gridBankPopupSettings\"\r\n  (onItemDoubleClick)=\"onBankSelect($event)\"></generic-popup-grid>\r\n"

/***/ }),

/***/ 1823:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n        <div class =\"row\">\r\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"addNewBank()\" style=\"margin-left:18px; margin-bottom: 10px;\">New Bank </button>\r\n            </div>\r\n        \r\n          <div class=\"row\">\r\n            <ba-card  title=\"Bank\" baCardClass=\"with-scroll\">\r\n              <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (view)=\"onViewClick($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\"></ng2-smart-table>\r\n            </ba-card>\r\n          </div>  \r\n</div>"

/***/ }),

/***/ 1824:
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\r\n  <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n    <div class=\"col-md-6\">\r\n      <h3 class=\"page-title\">{{ modeTitle }}</h3>\r\n    </div>\r\n    <div class=\"col-md-6\" style=\"float: right;\">\r\n      <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"cancel()\" style=\"margin-right : 10px;\">\r\n        Back\r\n      </button>\r\n      <button *ngIf=\"viewMode == false\" (click)=\"onSave()\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"tabbable\" id=\"warehouse-tabs\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#general-info3\" data-toggle=\"tab\">General Info</a>\r\n          </li>\r\n          <!-- <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#tab2\" data-toggle=\"tab\">Section 2</a>\r\n                    </li> -->\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane active\" id=\"general-info3\">\r\n            <form class=\"row\" class=\"form-horizontal\" [formGroup]=\"form\">\r\n              <!-- <ba-card baCardClass=\"with-scroll\">  -->\r\n              <div class=\"col-md-6\">\r\n                <!-- <div class=\"form-group row\">\r\n                                            <label class=\"col-sm-4 form-control-label\">Location Name</label>\r\n                                            <div class=\"col-sm-8\">\r\n                                                <input type=\"text\" [style.background-color]=\"disabled()\"\r\n                                                    [style.background-color]=\"editDisabled()\" style=\"color:black\"\r\n                                                    class=\"form-control\" id=\"brandTypeName\" name=\"brandTypeName\"\r\n                                                    formControlName=\"ADDRESS\" placeholder=\"Location Name\" />\r\n                                                                                                                          \r\n                                            </div>\r\n                                    </div> -->\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">Bank Name*</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"brandTypeName\" name=\"brandTypeName\"\r\n                      formControlName=\"ACNAME\" placeholder=\"Account Name\" />\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 form-control-label\">Account Type* </label>\r\n                    <div class=\"col-sm-8\">\r\n                      <select class=\"form-control\" formControlName=\"CTYPE\">\r\n  \r\n                        <option value='Saving account'>Saving account</option>\r\n                        <option value='Current account'>Current account</option>\r\n                        <option value='Bank OCC account'>Bank OCC account</option>\r\n  \r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">Branch Name</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"branchNameId\" name=\"BranchName\"\r\n                      formControlName=\"ADDRESS\" placeholder=\"Branch Name\" />\r\n\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">Branch Code</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"branchCodeId\" name=\"BranchCode\"\r\n                      formControlName=\"ACCODE\" placeholder=\"Branch Code\" />\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">IFSC code</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"IFCS_CODE\" name=\"IFCS_CODE\"\r\n                      formControlName=\"IFCS_CODE\" placeholder=\"IFCS CODE\" />\r\n\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">Account Credit Limit</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"number\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"brandTypeName\" name=\"brandTypeName\"\r\n                      formControlName=\"CRLIMIT\" placeholder=\"Account Credit Limit\" />\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">Account Number</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"brandTypeName\" name=\"brandTypeName\"\r\n                      formControlName=\"BANKACCOUNTNUMBER\" placeholder=\"Account Number\" />\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group row\">\r\n                                                <label class=\"col-sm-4 form-control-label\">Building</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input type=\"text\" [style.background-color]=\"disabled()\"\r\n                                                        [style.background-color]=\"editDisabled()\" style=\"color:black\"\r\n                                                        class=\"form-control\" id=\"brandTypeName\" name=\"brandTypeName\"\r\n                                                        formControlName=\"BANKBUILDING\" placeholder=\"Building\" />\r\n                                                                                                                              \r\n                                                </div>\r\n                                        </div> -->\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">City</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"brandTypeName\" name=\"brandTypeName\"\r\n                      formControlName=\"CITY\" placeholder=\"City\" />\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">Phone No</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"brandTypeName\" name=\"brandTypeName\"\r\n                      formControlName=\"PHONE\" placeholder=\"Phone No\" />\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">GST No</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" [style.background-color]=\"disabled()\" [style.background-color]=\"editDisabled()\"\r\n                      style=\"color:black\" class=\"form-control\" id=\"brandTypeName\" name=\"brandTypeName\"\r\n                      formControlName=\"GSTNO\" placeholder=\"GST NO\" />\r\n\r\n                  </div>\r\n                </div> -->\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">Location Type</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <select class=\"form-control\" formControlName=\"PSTYPE\">\r\n                      <option value='local'>Local</option>\r\n                      <option value='interstate'>Interstate</option>\r\n                      <option value='import'>Import</option>\r\n                      <option value='unregistered'>Unregistered</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group row\">\r\n                                                <label class=\"col-sm-4 form-control-label\">Cost Center  Enables</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                  <select class=\"form-control\" formControlName=\"BANKCOSTCENTER\">\r\n                                                      <option value=1>Yes</option>\r\n                                                      <option value=0>No</option>\r\n                                                  </select>                                                                                                                            \r\n                                                </div>\r\n                                        </div> -->\r\n                                        <div class=\"form-group row\">\r\n                                          <label class=\"col-sm-4 form-control-label\">State </label>\r\n                                          <div class=\"col-sm-8\">\r\n                      \r\n                                            <select class=\"form-control\"  formControlName=\"STATE\">\r\n                                              <option *ngFor=\"let i of StateList\" value={{i.StateCode}}>{{i.StateName}}</option>\r\n                                            </select>\r\n                                          \r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"form-group row\">\r\n                                          <label class=\"col-sm-4 form-control-label\">Country</label>\r\n                                          <div class=\"col-sm-8\">\r\n                                            <input type=\"text\" \r\n                                              style=\"color:black\" class=\"form-control\" id=\"COUNTRY\" name=\"COUNTRY\"\r\n                                              formControlName=\"BANKBUILDING\" placeholder=\"Country Name\" />\r\n                        \r\n                                          </div>\r\n                                        </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-4 form-control-label\">Bank Account Status</label>\r\n                  <div class=\"col-sm-8\">\r\n                    <select class=\"form-control\" formControlName=\"ISACTIVE\">\r\n                      <option value=1>Active</option>\r\n                      <option value=0>InActive</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <!-- </ba-card>  -->\r\n            </form>\r\n          </div>\r\n          <!-- <div class=\"tab-pane\" id=\"tab2\">\r\n                      <p>\r\n                        Howdy, I'm in Section 2.\r\n                      </p>\r\n                    </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1835:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n        <div class=\"row\">\r\n          <button class=\"btn btn-info\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\" >{{partyName}}</button>\r\n          <!-- <button class=\"btn btn-info\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onGrpAddClick()\" >Create Group</button> -->\r\n        </div>\r\n        <div class=\"row\">\r\n          <ba-card baCardClass=\"with-scroll\">\r\n            <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\" (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n          </ba-card>\r\n        </div>\r\n      </div>\r\n    "

/***/ }),

/***/ 1842:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  label {\r\n    width: 150px;\r\n    font-size: 15px;\r\n    color: #403c3c;\r\n  }\r\n\r\n  input {\r\n    height: 30px;\r\n  }\r\n</style>\r\n\r\n<div class=\"sticky-top\">\r\n  <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n    <div class=\"col-md-6\">\r\n      <!-- <h3 class=\"page-title\">{{ modeTitle }}</h3> -->\r\n      <label style=\"font-family: Segoe UI Light;font-weight: bold;font-size: 18px;padding-top: 1%;\">ACCOUNT\r\n        MASTER</label>\r\n      <label *ngIf=\"modeTitle\" style=\"font-weight: bold;font-size: 16px;\">&nbsp;>>{{ modeTitle}}</label>\r\n    </div>\r\n    <div class=\"col-md-6\" style=\"float: right;\"></div>\r\n\r\n    <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"backToDashboard()\"\r\n      style=\"margin-right : 10px;width:80px\">\r\n      F10 Back\r\n    </button>\r\n\r\n    <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"cancel()\" style=\"margin-right : 10px;width:80px\">\r\n      F3 Reset\r\n    </button>\r\n\r\n    <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info pull-right\"\r\n      [disabled]=\"!this.parentGroup || this.ViewMode == true\"\r\n      *ngIf=\"grp == 'G' && (this.nodeObj.ACID!='AG01001' || this.nodeObj.ACID=='AG01002')  \"\r\n      style=\"margin-right : 10px;width:80px\">\r\n      F6 Save\r\n    </button>\r\n    <button type=\"button\" (click)=\"DeleteItem()\" [disabled]=\"mode == 'edit'\" *ngIf=\"mode != 'add'\" title=\"onSave\"\r\n      class=\"btn btn-info pull-right\" style=\"margin-right : 10px;width:80px\">\r\n      Delete\r\n    </button>\r\n    <button type=\"button\" *ngIf=\"mode != 'add' && (this.nodeObj.ACID!='AG01001' || this.nodeObj.ACID=='AG01002')  \"\r\n      (click)=\"EditItem()\" title=\"onSave\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;width:80px\">\r\n      F5 Edit\r\n    </button>\r\n\r\n    <!-- <button type=\"button\" *ngIf=\"mode !='add'\" (click)=\"Refresh()\" title=\"onSave\" class=\"btn btn-info pull-right\"\r\n      style=\"margin-right : 10px;width:80px\">\r\n      Refresh\r\n    </button> -->\r\n    <button type=\"button\" (click)=\"SumbitSave()\" [disabled]=\"this.ViewMode == true\" title=\"onSave\"\r\n      class=\"btn btn-info pull-right\" style=\"margin-right : 10px;width:80px\"\r\n      *ngIf=\" this.mode != 'VIEW'  && (this.nodeObj.ACID!='AG01001' || this.nodeObj.ACID=='AG01002' ) \">\r\n      F6 Save\r\n    </button>\r\n    <button *ngIf=\"showShiftParentButton\" type=\"button\" class=\"btn btn-info pull-right\" style=\"margin-right : 10px;width:80px\" (click)=\"shiftParent()\">Shift Parent</button>\r\n    <button type=\"button\" class=\"btn btn-info pull-right\" (click)=\"ExportAccountLedger()\" style=\"margin-right : 10px;width:100px\">Export Account</button>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"tabbable\" id=\"ALEDGER-tabs\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#general-info1\" id=\"generalInfo\" data-toggle=\"tab\">General Info</a>\r\n          </li>\r\n\r\n          <!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link\" *ngIf='showBank==1 && isGroup == 0' href=\"#tab2\" data-toggle=\"tab\">Bank</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#tab3\" id=\"customerTab\" data-toggle=\"tab\"\r\n              *ngIf='showPLedgerInfo==1 && isGroup == 0'>{{Party}}</a>\r\n          </li> -->\r\n          <!-- <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" *ngIf='showPLedgerInfo==1 && isGroup == 0 && showCustomer == 0' href=\"#tab4\" data-toggle=\"tab\">Supplier</a>\r\n                  </li> -->\r\n        </ul>\r\n        <div [ngBusy]=\"busy\"></div>\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane active\" id=\"general-info1\">\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"col-md-3\">\r\n\r\n                <div class=\"plainBackGround\">\r\n\r\n                  <!-- <fieldset style=\"border:1px solid;border-color:#dcdcdc;height:440px;margin-left:20px\"> -->\r\n                  <fieldset [class.disabledbutton]=\"addMode\" [disabled]=\"addMode\"\r\n                    style=\"border:1px solid;border-color:#dcdcdc;height:550px;margin-left:-25px;overflow: auto;\">\r\n\r\n                    <div id=treediv>\r\n                      <h4>Account Ledger</h4>\r\n                      <input name=\"filter\" #filter (keyup)=\"filterNodes(filter.value, tree)\"\r\n                        placeholder=\"&nbsp;Search Account\" class=\"filterclass\" />\r\n                      <div\r\n                        style=\" overflow: auto; border: black;border-width: 2px;background:#f0f3f4;margin:10px;font-size:12px;\">\r\n                        <Tree #tree [nodes]=\"nodes \" [focused]=\"true \" [options]=\"customTemplateStringOptions\r\n                                                              \" (onEvent)=\"onEvent($event) \"\r\n                          (onActivate)=\"onselect(tree,$event) \">\r\n                          <ng-template #treeNodeTemplate let-node>\r\n                            <span *ngIf=\"node.data.TYPE=='G' && node.children.length>0\" title=\"{{node.data.subTitle}} \"\r\n                              [contextMenu]=\"myContextMenu\" [contextMenuSubject]=\"node.data \"\r\n                              style=\"margin-left:24px\"><img src=\"../../../assets/img/Folder.jpg\" alt=\"Group\" height=\"20\"\r\n                                width=\"20\" style=\"margin-top:-2px\">\r\n                              {{ node.data.ACNAME }}{{ childrenCount(node) }}\r\n                            </span>\r\n\r\n                            <span *ngIf=\"node.data.TYPE=='G' && node.children.length==0\" title=\"{{node.data.subTitle}} \"\r\n                              [contextMenu]=\"myContextMenu\" [contextMenuSubject]=\"node.data \">\r\n                              <img src=\"../../../assets/img/Folder.jpg\" alt=\"Group\" height=\"20\" width=\"20\"\r\n                                style=\"margin-top:-2px\">\r\n                              {{ node.data.ACNAME }}{{ childrenCount(node) }}\r\n                            </span>\r\n                            <span *ngIf=\"node.data.TYPE=='A'\" title=\"{{node.data.subTitle}} \"\r\n                              [contextMenu]=\"myContextMenu\" [contextMenuSubject]=\"node.data \"><img\r\n                                src=\"../../../assets/img/File.png\" alt=\"ListItem\" height=\"20\" width=\"15\"\r\n                                style=\"margin-top:-2px\">\r\n                              {{ node.data.ACNAME }}</span>\r\n                          </ng-template>\r\n                          <ng-template #loadingTemplate>Loading, please hold....</ng-template>\r\n                        </Tree>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <div class=\"row\">\r\n\r\n                  <button type=\"button \" class=\"btn btn-info pull-right\" [disabled]=\"this.mode == 'edit'\"\r\n                    (click)=\"NewGroup()\" style=\"margin-right : 10px;width:100px\"\r\n                    *ngIf=\"(this.nodeObj.ACID!='AG01001' || this.nodeObj.ACID!='AG01002')\">\r\n                    New Group\r\n                  </button>\r\n                  <button type=\"button\" [disabled]=\"this.mode == 'edit'\" (click)=\"NewItem()\" title=\"onSave\"\r\n                    class=\"btn btn-info pull-right\" style=\"margin-right : 10px;width:100px\"\r\n                    *ngIf=\"(this.nodeObj.ACID!='AG01001' || this.nodeObj.ACID!='AG01002')\">\r\n                    New Account\r\n                  </button>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-top:20px\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-3 form-control-label\">Primary Group*</label>\r\n                    <div class=\"col-sm-9\">\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Parent.Primary\" disabled\r\n                        style=\"color: #000000 !important;\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-3 form-control-label\">Under:</label>\r\n                    <div class=\"col-sm-9\">\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Parent.Under\" disabled\r\n                        style=\"color: #000000 !important;\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\" *ngIf=\"isAccount == true \r\n                  &&  this.tagForDisplayingAccname !='G'\r\n                  &&  isParentBank == false\r\n                  \">\r\n                    <label class=\"col-sm-3 form-control-label\">A/C Code:</label>\r\n                    <div class=\"col-sm-9\">\r\n                      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"formObj.ACCODE\"\r\n                        style=\"color: #000000 !important;\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\" *ngIf=\"isAccount == true \r\n                  &&  this.tagForDisplayingAccname !='G'\r\n                  &&  isParentBank == true\r\n                  \">\r\n\r\n                  <!-- //For Bank -->\r\n                    <label class=\"col-sm-3 form-control-label\">A/C Code:</label>\r\n                    <div class=\"col-sm-9\">\r\n\r\n                      <input type=\"text\" (keydown.Enter)=\"showBankPopup(); ACCODE.blur();\" class=\"form-control\"  [(ngModel)]=\"formObj.ACCODE\" #ACCODE\r\n                        style=\"color: #000000 !important;\" placeholder=\"Enter to Select Bank Code\" />\r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"form-group row\">\r\n                    <label *ngIf=\"isAccount == false || this.tagForDisplayingAccname =='G'\"\r\n                      class=\"col-sm-3 form-control-label\">Group Name*\r\n                    </label>\r\n                    <label *ngIf=\"isAccount == true &&  this.tagForDisplayingAccname !='G'\"\r\n                      class=\"col-sm-3 form-control-label\">Account Name*\r\n                    </label>\r\n                    <div class=\"col-sm-9\"  *ngIf=\"isParentBank == false\">\r\n                      <input type=\"text\" id=\"Name\" class=\"form-control\" placeholder=\"ACNAME\" #Name\r\n                        [(ngModel)]=\"formObj.ACNAME\"\r\n                        [disabled]=\"this.nodeObj.ACID=='AG01001' || this.nodeObj.ACID=='AG01002' || this.ViewMode == true \"\r\n                        style=\"color: #000000 !important;\" />\r\n                    </div>\r\n                    <div class=\"col-sm-9\" *ngIf=\"isParentBank == true\">\r\n                      <input type=\"text\" id=\"Name\" class=\"form-control\" placeholder=\"ACNAME\" #Name\r\n                        [(ngModel)]=\"formObj.ACNAME\"\r\n                        [disabled]=\"this.nodeObj.ACID=='AG01001' || this.nodeObj.ACID=='AG01002' || this.ViewMode == true \"\r\n                        style=\"color: #000000 !important;\"  placeholder=\"Enter to Select Bank\" (keydown.Enter)=\"showBankPopup(); Name.blur();\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\" *ngIf=\"this.nodeObj.ACID=='AG01001' || this.nodeObj.ACID=='AG01002'\"\r\n                    style=\"margin-left: 0px;color: #2dacd1;\">\r\n                    Note : *cannot create Group/Account under this.\r\n                  </div>\r\n                  <ng-container>\r\n                    <div class=\"form-group row\"\r\n                      *ngIf=\"((isAccount == true && _transactionService.userSetting.ENABLESUBLEDGER == 2 && this.GroupStatus != 'G') || (this.GroupStatus == 'G' && _transactionService.userSetting.ENABLESUBLEDGER == 2)) && this.parentHasSubLedger ==false;\">\r\n                      <label class=\"col-sm-3 form-control-label\">Has Sub Ledger</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"checkbox\" [disabled]=\"this.ViewMode == true\" value=1\r\n                          [(ngModel)]=\"formObj.HASSUBLEDGER\">\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n                  </ng-container>\r\n                  <div class=\"form-group row\">\r\n                    <label *ngIf=\"isAccount == true &&  this.tagForDisplayingAccname !='G' && OverdraftIs == 'OD'\"\r\n                      class=\"col-sm-3 form-control-label\">Credit Limit*\r\n                    </label>\r\n                    <div class=\"col-sm-9\">\r\n                      <input *ngIf=\"isAccount == true &&  this.tagForDisplayingAccname !='G' && OverdraftIs == 'OD'\"\r\n                        type=\"number\" id=\"crlimit\" class=\"form-control\" placeholder=\"Credit Limit\" #Name\r\n                        [(ngModel)]=\"formObj.CRLIMIT\" [disabled]=\"this.ViewMode == true \"\r\n                        style=\"color: #000000 !important;\" autocomplete=\"off\" />\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div *ngIf='HSN_Active==1' class=\"form-group row\">\r\n                    <label class=\"col-sm-3 form-control-label\">HSN/SAC</label>\r\n                    <div class=\"col-sm-9\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"HSN/SAC\" [(ngModel)]=\"formObj.HSN_SACCODE\" />\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n                <div class=\"row\">\r\n\r\n                  <!-- <div class=\"form-inline\" style=\"margin:5px;\">\r\n                      <div class=\"checkbox\">\r\n                        <label>RCM Applicable:</label>\r\n                        <input type=\"checkbox\" name=\"rcmapplicable\" (change)=\"rcmChangeEvent($event)\"\r\n                          [checked]=\"formObj.isRCMApplicable==1\" style=\"vertical-align: middle;\">\r\n                      </div>\r\n                    </div> -->\r\n                  <!-- <div class=\"form-inline\" style=\"margin:5px;\">\r\n                  <div class=\"checkbox\">\r\n                    <label>GST Applicable:</label>\r\n                    <input type=\"checkbox\" name=\"isAutoGSTApplicable\" (change)=\"autoCalculationevent($event)\"\r\n                      [checked]=\"formObj.isAutoGSTApplicable==1\" style=\"vertical-align: middle;\">\r\n                  </div>\r\n                </div> -->\r\n                  <ng-container *ngIf=\"formObj.isAutoGSTApplicable==1\">\r\n                    <fieldset>\r\n                      <div class=\"form-inline\" style=\"margin:5px;\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"taxtype\"><strong>Tax Type</strong></label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rate\"><strong>Rate%</strong></label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-inline\" style=\"margin:5px;\">\r\n                        <div class=\"\">\r\n                          <label for=\"igst\">Integrated Tax</label>\r\n                          <input type=\"text\" name=\"igst\" #igst class=\"form-control\"\r\n                            [(ngModel)]=\"autoCalculationParam.igst\" (keydown.enter)=\"cgst.focus()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-inline\" style=\"margin:5px;\">\r\n                        <div class=\"\">\r\n                          <label for=\"cgst\">Central Tax</label>\r\n                          <input type=\"text\" name=\"cgst\" #cgst class=\"form-control\"\r\n                            [(ngModel)]=\"autoCalculationParam.cgst\" (keydown.enter)=\"sgst.focus()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-inline\" style=\"margin:5px;\">\r\n                        <div class=\"\">\r\n                          <label for=\"sgst\">UT Tax</label>\r\n                          <input type=\"text\" #sgst name=\"sgst\" class=\"form-control\"\r\n                            [(ngModel)]=\"autoCalculationParam.sgst\" (keydown.enter)=\"cess.focus()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-inline\" style=\"margin:5px;\">\r\n                        <div class=\"\">\r\n                          <label for=\"exampleInputName2\">Cess</label>\r\n                          <input type=\"text\" #cess name=\"cess\" class=\"form-control\"\r\n                            [(ngModel)]=\"autoCalculationParam.cess\" (keydown.enter)=\"igst.focus()\">\r\n                        </div>\r\n                      </div>\r\n                    </fieldset>\r\n                  </ng-container>\r\n\r\n                  <!-- divisiowisemappting -->\r\n                  <div *ngIf='enableDivisionMapping' class=\"form-group row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"col-md-6\">\r\n                        <fieldset style=\"background-color: #e2eaea;\">\r\n                          <legend style=\"font-size: 15px !important;width: 51%;\">Associated Division Mapping :</legend>\r\n                          <div class=\"col-md-12\">\r\n                            <div class=\"col-sm-3\">\r\n                              <label class=\"form-control-label\">Division :</label>\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                              <select class=\"form-control\" [(ngModel)]=\"formObj.DIV\" (change)=\"changeDivision($event.target.value)\">\r\n                                <option *ngFor=\"let div of division\" value=\"{{ div.INITIAL }}\">\r\n                                  {{ div.NAME }}\r\n                                </option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-12\" style=\"margin-top: 3%;\">\r\n                            <fieldset>\r\n                              <legend style=\"font-size: 15px !important;width: 51%;\">\r\n                                <input type=\"checkbox\" value=0 [(ngModel)]=\"divisioncheckObj.ShareAccount\" (change)=\"ClickShareAccount($event.target.value)\">\r\n                                <label>Shared This Account :</label>\r\n\r\n                              </legend>\r\n                              <div>\r\n                                <div class=\"col-sm-6\">\r\n                                  <input type=\"radio\" style=\"height: 13px !important;\" name=\"ShareDivision\" value=1\r\n                                    [(ngModel)]=\"divisioncheckObj.ShareSelectiveDiv\"\r\n                                    (change)=\"enableDivSelectionTable($event.target.checked==1?1:0)\" [disabled]=\"enableDivision == false\">&nbsp;Share To\r\n                                  Selective Division\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                  <input type=\"radio\" style=\"height: 13px !important;\" name=\"ShareDivision\" value=2\r\n                                    [(ngModel)]=\"divisioncheckObj.ShareAllDiv\"\r\n                                    (change)=\"ShareAllDiv($event.target.checked==1?1:0)\" [disabled]=\"enableDivision == false\">&nbsp;Share To All Division\r\n                                </div>\r\n                              </div>\r\n                            </fieldset>\r\n                          </div>\r\n\r\n                        </fieldset>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <fieldset *ngIf=\"showDivSelectionTable\" style=\"background-color: #e2eaea;\">\r\n                          <legend style=\"font-size: 15px !important\">\r\n                            Account Sharing Division Selection :</legend>\r\n                          <div style=\"overflow-y: auto;height: 120px;\">\r\n                            <table>\r\n                              <tr *ngFor=\"let d of division;let i = index\" >\r\n                                <td style=\"border:1px solid #e0e0e0;width: 1%;\">\r\n                                  <input type=\"checkbox\" [(ngModel)]=\"d.isCheck\"\r\n                                    (change)=\"check($event)\" value=\"{{d}}\" (click)='rowClick(i)' *ngIf = '!d.isDefault'>\r\n                                    <input type=\"checkbox\" [(ngModel)]=\"d.isCheck\" [checked] *ngIf = 'd.isDefault' disabled>\r\n                                </td>\r\n                                <td style=\"border:1px solid #e0e0e0;padding-left: 24px;width:100%\">{{d.NAME}}</td>\r\n                              </tr>\r\n\r\n\r\n\r\n                            </table>\r\n                          </div>\r\n\r\n                        </fieldset>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- divisiowisemappting -->\r\n\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!-- <div class=\"tab-pane\" id=\"tab2\">\r\n            <h4>Bank Information</h4>\r\n            <bankdetails></bankdetails>\r\n          </div>\r\n          <div class=\"tab-pane\" id=\"tab3\">\r\n            <h4> Information</h4>\r\n            <PLedger #PLedgerChild [PType]='PTypeForParty' [fromTree]='fromTreeTag'></PLedger>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<style>\r\n  .filterclass {\r\n    margin: 10px;\r\n    height: 25px;\r\n    width: 220px;\r\n    color: #666666;\r\n    border: 1px solid #cbcbcb;\r\n    border-radius: 5px;\r\n    background-color: #ffffff;\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n  }\r\n</style>\r\n\r\n<div>\r\n  <div class=\"modal fade\" bsModal #DeleteAcc=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" style=\"margin:-100px;height:460px\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\" style=\"width: 420px;\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"onClickNo()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n\r\n          </button>\r\n          <h4 class=\"modal-title\">Delete Account</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" style=\"margin-top: -10px;margin-bottom: 12px;\">\r\n              Are you sure you want to delete this account?\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <button (click)=\"DeleteYes()\" style=\"margin-right: 4px;\" class=\"btn btn-danger \">Yes</button>\r\n              <button (click)=\"DeleteNo()\" type=\"button \" class=\"btn btn-warning\">No</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div >\r\n  <div class=\"modal fade\" bsModal #ShiftParent=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" style=\"margin:-100px;\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\" style=\"width: 420px;\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"onClose()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n\r\n          </button>\r\n          <h4 class=\"modal-title\">Shift Parent</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" style=\"margin-top: -10px;margin-bottom: 12px;\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <label>From Parent</label>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <select class=\"form-control\" style=\"margin-bottom: 5px;\" [(ngModel)]=\"ShiftParentObj.FROMPARENT\" disabled>\r\n                      <option *ngFor=\"let parent of ParentList\" value=\"{{parent.ACID}}\">{{parent.ACNAME}}</option>\r\n                    </select >\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                  <label>To Parent</label>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"ShiftParentObj.TOPARENT\">\r\n                    <option *ngFor=\"let parent of ParentList\" value=\"{{parent.ACID}}\">{{parent.ACNAME}}</option>\r\n                  </select>\r\n              </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <button type=\"button\" (click)=\"ConfirmShiftParent()\" style=\"margin-right: 4px;\" class=\"btn btn-info \">Ok</button>\r\n              <button (click)=\"onClose()\" type=\"button\" class=\"btn btn-info\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-sticky\" *ngIf=\"showAccountLedgerFilterpopUp\" style=\"display: block;\r\npadding: 0px;\r\nmargin-bottom: 159px;\r\nheight: 241px;\r\nposition: absolute;\r\nright: 30%;\r\n/* top: 5px; */\r\nwidth: 550px;\r\nz-index: 9999999;\r\nborder: 1px solid;background: white;\">\r\n\r\n  <div class=\"modal-content modal-content-main-area\">\r\n    <div class=\"modal-header\" style=\"height: 40px;padding-bottom: 6%;\">\r\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Ledger filter </h4>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\" style=\"height: 226px; margin-top : 10px;    margin-left: 3%;\">\r\n\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Account Group : </label>\r\n        </div>\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.MAINGROUP\" (change)=\"changeAccountGroup()\">\r\n          <option *ngFor=\"let parent of ParentList\" value=\"{{parent.ACID}}\">{{parent.ACNAME}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Account Type: </label>\r\n        </div>\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.ACCOUNTTYPE\" (change)=\"changeAccountType()\">\r\n          <option value=\"Group\">Group</option>\r\n          <option value=\"Account\">Account</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 8px;\" *ngIf=\"LedgerFilterObj.ACCOUNTTYPE == 'Group'\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Sub Account Group : </label>\r\n        </div>\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.SUBGROUP\">\r\n          <option *ngFor=\"let parent of SubGroupAccountMaster\" value=\"{{parent.ACID}}\">{{parent.ACNAME}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 8px;\" *ngIf=\"LedgerFilterObj.ACCOUNTTYPE == 'Account'\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Account Name : </label>\r\n        </div>\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.ACID\">\r\n          <option *ngFor=\"let parent of ChildrenList\" value=\"{{parent.ACID}}\">{{parent.ACNAME}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div style=\"float: right;\r\n      margin-top: 14px;\r\n      margin-right: 9%;\">\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"OkCommand()\">Apply</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"ExportAll()\">Export\r\n          All</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"CancelCommand()\">Cancel</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<generic-popup-grid #genericGridBankList [popupsettings]=\"gridBankPopupSettings\"\r\n  (onItemDoubleClick)=\"onBankSelect($event)\"></generic-popup-grid>"

/***/ }),

/***/ 1843:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"AddLedger\">\r\n    <div class=\"row\" class=\"form-horizontal\">\r\n\r\n        <div style=\" border:1px solid;border-color:#dcdcdc; padding:20px; margin-bottom: 10px;\">\r\n            <div class=\"com-sm-12\" style=\"padding:5px;border-bottom: solid 1px #dcdcdc; margin-bottom: 10px;\">\r\n                <h5>{{modeTitle}}</h5>\r\n            </div>\r\n\r\n            <!-- <div *ngFor=\"let g of acGroups;let k = index\" class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\"> {{g.group}} </label>\r\n                 <div class=\"col-sm-6\">\r\n                    <p-dropdown [style]=\"{'width':'350px'}\" [options]=\"g.options\" [(ngModel)]=\"g.value.SELECTEDGROUPAC\" [ngModelOptions]=\"{standalone: true}\"\r\n                        (onChange)=\"onGrpChange($event,k,g.value.SELECTEDGROUPAC)\" placeholder=\"Select a group\"></p-dropdown>\r\n                </div> \r\n            </div> -->\r\n            <div class=\"form-group row\">\r\n\r\n                    <label class=\"col-sm-2 form-control-label\">Primary Group:</label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" placeholder=\"Group Name\" formControlName=\"ACNAME\" class=\"form-control\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n\r\n                        <label class=\"col-sm-2 form-control-label\">Under:</label>\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"text\" placeholder=\"Group Name\" formControlName=\"ACNAME\" class=\"form-control\" />\r\n                        </div>\r\n                    </div>\r\n            <div class=\"form-group row\">\r\n\r\n                <label class=\"col-sm-2 form-control-label\">LedgerName:</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"text\"placeholder=\"Ledger Name\" formControlName=\"ACNAME\" class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n             <div class=\"alert alert-danger\" *ngIf=\"AddLedger.controls['ACCODE'].touched && !AddLedger.controls['ACCODE'].valid\">LedgerName is Required.</div>\r\n            \r\n           \r\n            \r\n          \r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\">Has Subledger:</label>\r\n                <div class=\"col-sm-2\" style=\"margin-top:10px;\">\r\n                    <!-- <input [value]=1 formControlName=\"hasSub\" type=\"checkbox\" (change)=\"changehassubEvent(1)\"> -->\r\n                    <input type=\"checkbox\"  (change)=\"check($event.target.checked==1?1:0)\" formControlName=\"hasSub\" name=\"hasSubLedger\" >\r\n                </div>\r\n\r\n            </div>\r\n           \r\n            \r\n            <!-- <fieldset style=\"border:1px solid #dcdcdc; margin-top:30px;\">\r\n                <label style=\"background-color:white; position: absolute; margin-top:-22px; margin-left: 20px; padding:5px;\">ACType</label>\r\n\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Actype\" value=\"AT\" (onClick)=\"changeACtype('AT')\" formControlName=\"ACType\" label=\"Assets\"\r\n                                disabled=\"disableActype==true\"></p-radioButton>\r\n\r\n                        </td>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Actype\" value=\"LB\" (onClick)=\"changeACtype('LB')\" formControlName=\"ACType\" label=\"Liabilities\"\r\n                                disabled=\"disableActype==true\"></p-radioButton>\r\n                        </td>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Actype\" value=\"DE\" (onClick)=\"changePtype('DE')\" formControlName=\"ACType\" label=\"Direct Expenses\"\r\n                                disabled=\"disableActype==true\"></p-radioButton>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Actype\" value=\"IE\" (onClick)=\"changeACtype('IE')\" formControlName=\"ACType\" label=\"Indirect Expenses\"\r\n                                disabled=\"disableActype==true\"></p-radioButton>\r\n                        </td>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Actype\" value=\"DI\" (onClick)=\"changeACtype('DI')\" formControlName=\"ACType\" label=\"Direct Income\"\r\n                                disabled=\"disableActype==true\"></p-radioButton>\r\n                        </td>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Actype\" value=\"II\" (onClick)=\"changeACtype('II')\" formControlName=\"ACType\" label=\"Indirect Income\"\r\n                                disabled=\"disableActype==true\"></p-radioButton>\r\n                        </td>\r\n                    </tr>\r\n\r\n                </table>\r\n\r\n            </fieldset> -->\r\n\r\n            <fieldset *ngIf=\"value==true\" style=\"border:1px solid #dcdcdc; margin-top:30px;\">\r\n                <label style=\"background-color:white; position: absolute; margin-top:-22px; margin-left: 20px; padding:5px;\">ASSETS</label>\r\n\r\n                <!-- <table>\r\n                    <tr>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Assets\" formControlName=\"ASSETTYPE\" label=\"Cash\" disabled=\"disableActype==true\"></p-radioButton>\r\n                        </td>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Assets\" formControlName=\"ASSETTYPE\" label=\"Bank\" disabled=\"disableActype==true\"></p-radioButton>\r\n                        </td>\r\n                        <td>\r\n                            <p-radioButton class=\"radioMargin\" name=\"Assets\" formControlName=\"ASSETTYPE\" label=\"Others\" disabled=\"disableActype==true\"></p-radioButton>\r\n                        </td>\r\n                    </tr>\r\n                </table> -->\r\n\r\n            </fieldset>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <button type=\"button\" (click)=\"onSave()\" title=\"onSave\" class=\"btn btn-info\" [disabled]=\"!parentGroup || !AddLedger.valid\" >Save</button>\r\n\r\n    <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button>\r\n</form>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n                <h4 class=\"modal-title\">Information</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                {{DialogMessage}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<style>\r\n    .inputLenght {\r\n        width: 350px;\r\n        height: 30px;\r\n    }\r\n\r\n    .radioMargin {\r\n        margin-left: 100px;\r\n    }\r\n\r\n    .ui-dropdown .ui-dropdown-label {\r\n        display: block;\r\n        border: 0;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        font-weight: normal;\r\n        width: 100%;\r\n        padding-right: 1.5em;\r\n        height: 20px;\r\n    }\r\n</style>"

/***/ }),

/***/ 1844:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='AddACGrpForm'>\r\n    <div class=\"row\" class=\"form-horizontal\">\r\n        <ba-card [title]=\"modeTitle\" baCardClass=\"with-scroll\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\">Group Name:</label>\r\n                <div class=\"col-sm-2\">\r\n                    <select style=\"width:130px; height:28px;\" formControlName=\"majorparent\">\r\n       <option *ngFor=\"let code of ParentAcList\" [ngValue]=\"code.ACID\">{{code.ACNAME}}</option>\r\n      </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\">New Group:</label>\r\n                <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"ACNAME\">\r\n                    <div class=\"alert alert-danger\" *ngIf=\"AddACGrpForm.controls['ACNAME'].touched && !AddACGrpForm.controls['ACNAME'].valid\">New Group is Required.</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 form-control-label\">Has Subledger:</label>\r\n                <div class=\"col-sm-2\">\r\n                    <input [value]=1 formControlName=\"hasSub\" type=\"checkbox\" (change)=\"changehassubEvent(1)\">\r\n\r\n                </div>\r\n            </div>\r\n           <fieldset style=\"border:1px solid black; margin-top:30px;\">\r\n                <label style=\"background-color:white; position: absolute; margin-top:-17px; margin-left: 20px; padding:5px;\">PType</label>\r\n\r\n                <table>\r\n                    <tr>\r\n                        <td> <label style=\"width:200px; padding:5px; margin-top:10px; margin-left:50px;\">Assets: </label><input  [value]=\"A\" type=\"radio\" (change)=\"changePtype('A')\" formControlName=\"Ptype\">\r\n                        <td> <label style=\"width:200px; padding:5px; margin-top:10px; margin-left:30px;\">Liabilities: </label><input  type=\"radio\" [value]=\"L\"  (change)=\"changePtype('L')\" formControlName=\"Ptype\">\r\n                    </tr>\r\n                    <tr>\r\n                        <td> <label style=\"width:200px; padding:5px; margin-top:10px; margin-left:50px;\">Direct Income: </label><input  [value]=\"D\" type=\"radio\"  (change)=\"changePtype('D')\" formControlName=\"Ptype\">\r\n                         <td> <label style=\"width:200px; padding:5px; margin-top:10px; margin-left:30px;\">Indirect Income: </label><input  [value]=\"I\" type=\"radio\"  (change)=\"changePtype('I')\" formControlName=\"Ptype\">   \r\n                    </tr>\r\n\r\n                </table>\r\n\r\n            </fieldset>\r\n\r\n        </ba-card>\r\n    </div>\r\n\r\n    <button type=\"button\" (click)=\"onSave()\" title=\"Save\" class=\"btn btn-info\">Save</button>\r\n\r\n    <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button>\r\n</form>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n                <h4 class=\"modal-title\">Information</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                {{DialogMessage}}\r\n            </div>\r\n            <!--<div class=\"modal-footer\">\r\n                        <button class=\"btn btn-info confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                        <button class=\"btn btn-info confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                    </div>!-->\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div>"

/***/ }),

/***/ 1848:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Addform\">\r\n<div class=\"row\" class=\"form-horizontal\">\r\n    <ba-card [title]=\"modeTitle\" baCardClass=\"with-scroll\">\r\n    <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 form-control-label\">Group Name:</label>\r\n    <div class=\"col-sm-5\">\r\n       <input type=\"text\" class=\"form-control\" formControlName=\"ACNAME\" placeholder=\"Group Name\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"Addform.controls['ACNAME'].touched && !Addform.controls['ACNAME'].valid\">GroupName is Required.</div>\r\n     \r\n    </div> \r\n  </div>\r\n \r\n  </ba-card>\r\n    </div>\r\n    \r\n  <button type=\"button\" (click)=\"onSave()\" title=\"Save\" class=\"btn btn-info\">Save</button>\r\n\r\n  <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button>\r\n  </form>\r\n  <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n                        <h4 class=\"modal-title\">Information</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        {{DialogMessage}}\r\n                    </div>\r\n                    <!--<div class=\"modal-footer\">\r\n                        <button class=\"btn btn-info confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                        <button class=\"btn btn-info confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                    </div>!-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n     <div>"

/***/ }),

/***/ 1849:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n<div class=\"row\" class=\"form-horizontal\">\r\n    <ba-card [title]=\"modeTitle\" baCardClass=\"with-scroll\">\r\n    <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 form-control-label\">Group Name:</label>\r\n    <div class=\"col-sm-2\">\r\n        <select style=\"width:130px; height:28px;\" formControlName=\"majorparent\">\r\n       <option *ngFor=\"let code of ParentAcList\" [ngValue]=\"code.ACID\">{{code.ACNAME}}</option>\r\n         <!--<div class=\"alert alert-danger\" *ngIf=\"form.controls['ACNAME'].touched && !Addform.controls['ACNAME'].valid\">GroupName is Required.</div>-->\r\n      </select>\r\n     </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 form-control-label\">New SubGroup:</label>\r\n    <div class=\"col-sm-2\">\r\n      <input type=\"text\" class=\"form-control\"formControlName=\"ACNAME\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"form.controls['ACNAME'].touched && !form.controls['ACNAME'].valid\">GroupName is Required.</div>\r\n    </div>\r\n  </div>\r\n <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 form-control-label\">Has Subledger:</label>\r\n    <div class=\"col-sm-2\">\r\n      <input  [value]=1 name=\"hasSub\" type=\"checkbox\" (change)=\"changehassubEvent(1)\">\r\n        \r\n    </div>\r\n  </div>\r\n \r\n    </ba-card>\r\n    </div>\r\n    \r\n  <button type=\"button\" (click)=\"onSave()\" title=\"Save\" class=\"btn btn-info\">Save</button>\r\n\r\n  <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button>\r\n </form>\r\n  <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n                        <h4 class=\"modal-title\">Information</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        {{DialogMessage}}\r\n                    </div>\r\n                    <!--<div class=\"modal-footer\">\r\n                        <button class=\"btn btn-info confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                        <button class=\"btn btn-info confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                    </div>!-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n     <div>"

/***/ }),

/***/ 1850:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  label {\r\n    width: 150px;\r\n    font-size: 15px;\r\n    color: #403c3c;\r\n  }\r\n\r\n  input {\r\n    height: 30px;\r\n  }\r\n\r\n  label{\r\n    font-size: 14px;\r\n  }\r\n  .req-red {\r\n  color: #ff0d0d;\r\n}\r\n</style>\r\n<!-- begin form here -->\r\n<form [formGroup]=\"form\">\r\n  \r\n  <div class=\"main-container\" style=\"padding-top : 10px; margin-bottom: 0px; margin-top: 0px !important;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"tabbable\" id=\"warehouse-tabs\">\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" href=\"#general-info4\" data-toggle=\"tab\">Party a/c Information</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#contact-details\" *ngIf=\"grp =='A'\" data-toggle=\"tab\">Additional Information</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#bank-details\" *ngIf=\"grp =='A'\" data-toggle=\"tab\">Bank Details</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#divisionwise-setting\" *ngIf=\"grp =='A' && enableDivisionMapping == true\" data-toggle=\"tab\">Division Wise Setting</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#sales-target\" *ngIf=\"grp =='A' && userSetting.ENABLESALES_TARGET == 1 && ISCUSTOMER==true\" data-toggle=\"tab\">Sales Target</a>\r\n            </li>\r\n\r\n           \r\n           \r\n            <!-- <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#route\" data-toggle=\"tab\">Route</a>\r\n            </li> -->\r\n          </ul>\r\n                  <!-- <label *ngIf=\"modeTitle\" style=\"font-weight: bold;font-size: 16px;width: 200px;padding-top: 1%;\">&nbsp;>> {{ modeTitle}}</label> -->\r\n          \r\n            <div style=\"float: right;padding-top: 8px;padding-right: 8px;\">\r\n              <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" \r\n      *ngIf=\"grp=='A' && Is_OverseasParty==0\" [disabled]=\"!form.valid || mode=='view'\" style=\"width:80px;margin-right: 10px;\">Save</button>\r\n      \r\n      <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" \r\n      *ngIf=\"grp=='A' && Is_OverseasParty==1\" [disabled]=\" mode=='view'\" style=\"width:80px;margin-right: 10px;\">Save</button>\r\n    \r\n      <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" *ngIf=\"grp=='G'\" style=\"width:80px;margin-right: 10px;\">Save</button>\r\n    <button type=\"button\" (click)=\"DeleteParty()\" class=\"btn btn-info\" *ngIf=\"grp == 'A' && mode == 'view'\" style=\"width: 80px;margin-right: 10px;\">Delete</button>\r\n    <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\" style=\"width:80px;\">F3 Reset</button>\r\n            </div>\r\n         \r\n          <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\" id=\"general-info4\">\r\n                <!-- General Info -->\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-sm-12\">\r\n                  \r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                    \r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Parent: <span class=\"req-red\">*</span></label>\r\n                        <!-- [(ngModel)]=\"g.value.SELECTEDGROUPAC\" [ngModelOptions]=\"{standalone: true}\" -->\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\"  placeholder=\"Parent\" formControlName=\"parentid\"/>\r\n                        </div> \r\n                    \r\n                      <label *ngIf=\"Title == 'AddLedger' ||  grp=='A'\" class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">A/C Code:</label>\r\n                      <div *ngIf=\"Title == 'AddLedger' ||  grp=='A'\" class=\"col-sm-3\">\r\n                        <input type=\"text\" id=\"ACCODE\" style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"ACCODE\" placeholder=\"Account Code\">\r\n                        <!-- <div class=\"alert alert-danger\" *ngIf=\"form.controls['ACCODE'].touched && !form.controls['ACCODE'].valid\">Account Code is Required.</div> -->\r\n                      </div>\r\n                    \r\n                    </div>\r\n                    <div *ngIf=\"Title == 'AddGroup' || mode=='edit'  && grp!='A'\" class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">GroupName:</label>\r\n                      <div class=\"col-sm-8\">\r\n                        <input type=\"text\" #ACNAME formControlName=\"ACNAME\" style=\"font-size: 12px !important;width: 97%;\" class=\"form-control\" placeholder=\"Group Name\" />\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"Title == 'AddLedger' || mode=='edit' && grp=='A' || mode=='view' \">\r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\" *ngIf=\"userSetting.ENABLEPARENTCOMPANY == 1\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Parent Company:</label>\r\n                        <div class=\"col-sm-8\">\r\n                        <input type=\"text\" style=\"font-size: 12px !important;width: 97%;\" class=\"form-control\" \r\n                        placeholder=\"Press Enter to Select Parent Company\" formControlName=\"PCompanyName\" #ParentCompany (keydown.Enter)=\"showParentAccountList();\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Ledger Name: <span class=\"req-red\">*</span></label>\r\n                        <div class=\"col-sm-8\">\r\n                          <input type=\"text\" #ACNAME style=\"font-size: 12px !important;width: 97%;\" class=\"form-control\" formControlName=\"ACNAME\" placeholder=\"Ledger Name\">\r\n                        </div>\r\n                      </div>\r\n                      <!-- <div class=\"alert alert-danger\" *ngIf=\"form.controls['ACNAME'].touched && !form.controls['ACNAME'].valid\">PartyLedger Name is Required.</div> -->\r\n              \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Address: <span class=\"req-red\">*</span></label>\r\n                        <div class=\"col-sm-8\">\r\n                          <input type=\"textarea\"  style=\"height: 45px !important;font-size: 12px !important; width:97%;\" rows=\"2\" cols=\"50\" class=\"form-control\" formControlName=\"ADDRESS\" placeholder=\"Address\">\r\n                        </div>\r\n                      </div>\r\n                      <!-- <div class=\"alert alert-danger\" *ngIf=\"form.controls['ADDRESS'].touched && !form.controls['ADDRESS'].valid\">Address is Required.</div> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div *ngIf=\"Title == 'AddLedger' || mode=='edit' && grp=='A' || mode=='view' \">\r\n                    <div class=\"col-md-5\">\r\n\r\n                      <div *ngIf=\"userSetting.isOverSeas == 1\" class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <div class=\"col-sm-2\"></div>\r\n                          <div class=\"col-sm-7\" style=\"margin-left: 31%;\">\r\n                            <div class=\"row\">\r\n                            <input type=\"checkbox\" formControlName=\"IS_OVERSEAS_PARTY\" style=\"height:15px;\" class=\"col-sm-1\" \r\n                            (change)=\"changeIsOverseasParty(form.value.IS_OVERSEAS_PARTY)\">\r\n                            <label class=\"col-sm-6\">Is Overseas party</label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                      <div *ngIf=\"userSetting.Country == 1\" class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">VAT No: <span *ngIf=\"((this.userSetting.CompanyType == 'B2B'  || (this.userSetting.CompanyType == 'B2C' && !ISCUSTOMER)) && this.Is_OverseasParty != 1 && this.MasterService.userSetting.EnableDuplicateVATforParty != 1) \" class=\"req-red\">*</span> </label>\r\n                        <div class=\"col-sm-7\" *ngIf=\"Is_OverseasParty == 1 || (userSetting.VATNOTCOMPULSORY == 1 && ISCUSTOMER==false)\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"VATNO\" placeholder=\"VAT No .\" (change)=\"checkDuplicateVAT($event)\">\r\n                         \r\n                        </div>\r\n                        <div class=\"col-sm-7\" *ngIf=\"(Is_OverseasParty == 0 && (userSetting.VATNOTCOMPULSORY == 0 || (userSetting.VATNOTCOMPULSORY == 1 && ISCUSTOMER==true)))\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"VATNO\" placeholder=\"VAT No.\" (keypress)=\"keyPress($event)\" maxlength=\"9\" minlength=\"9\" (change)=\"checkDuplicateVAT($event)\">\r\n                          <div class=\"alert alert-danger\" *ngIf=\"form.controls['VATNO'].touched && !form.controls['VATNO'].valid\">VATNO is Required.</div>\r\n                        </div>\r\n\r\n                        \r\n                      </div>\r\n\r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Tel no:</label>\r\n                        <div class=\"col-sm-7\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"PHONE\" placeholder=\"Tel No.\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Mobile:</label>\r\n                        <div class=\"col-sm-7\">\r\n                          <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"Mobile\" placeholder=\"Phone No.\" (keypress)=\"keyPress($event)\" maxlength=\"10\" minlength=\"10\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Email:</label>\r\n                      <div class=\"col-sm-7\">\r\n                        <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"EMAIL\" placeholder=\"Email Address\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Area:</label>\r\n                      <div class=\"col-sm-7\">\r\n                      <input type=\"text\" style=\"font-size: 12px !important;\" name=\"product\" list=\"productName\" (change)=\"onChangeArea($event)\"  class=\"form-control\" formControlName=\"CITY\"/>\r\n                      <datalist id=\"productName\">\r\n                        <option *ngFor=\"let i of areaList\" value=\"{{i.AREANAME}}\">{{\r\n                          i.AREANAME\r\n                        }}</option>\r\n                      </datalist>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"form.controls['CITY'].touched && !form.controls['CITY'].valid\">Area is Required</div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\" *ngIf=\"userSetting.Country == 1\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Province</label>\r\n                        <div class=\"col-sm-7\">\r\n                          <select  style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"STATE\" (change)=\"onStateChange($event)\">\r\n                            <option value=\"\"></option>\r\n                            <option value=\"1\">1</option>\r\n                            <option value=\"2\">2</option>\r\n                            <option value=\"3\">3</option>\r\n                            <option value=\"4\">4</option>\r\n                            <option value=\"5\">5</option>\r\n                            <option value=\"6\">6</option>\r\n                            <option value=\"7\">7</option>\r\n                            <option  *ngIf=\"userSetting.Country == 1\" value=\"8\">8</option>\r\n                          </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\" *ngIf=\"userSetting.Country == 1\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">District</label>\r\n                        <div class=\"col-sm-7\">\r\n                          <select  style=\"font-size: 12px !important;\" class=\"form-control\" formControlName=\"DISTRICT\">\r\n                            <option value=\"\"></option>\r\n                            <option *ngFor=\"let i of DistrictListbyState\" value={{i.Name}} >{{i.Name}}</option>\r\n                          </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Status:</label>\r\n                      <div class=\"col-sm-7\">\r\n                        <!-- <input type=\"checkbox\" class=\"form-control\" (change)=\"clickedNotActive(1)\" formControlName=\"isNotActive\"> -->\r\n                    \r\n                          <select formControlName=\"ISACTIVE\"  style=\"font-size: 12px !important;\" class=\"form-control\">\r\n                            <option value=\"1\">ACTIVE</option>\r\n                            <option value=\"0\">INACTIVE</option>\r\n                            \r\n                          </select>\r\n                          \r\n                        <!-- <input type=\"checkbox\"  (change)=\"NotActive($event.target.checked==1?1:0)\" formControlName=\"ISACTIVE\"> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!--right column-->\r\n                  <div class=\"col-md-5\">\r\n                    <!-- <div class=\"form-group row \">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px; white-space: nowrap;\">Contract Price:</label>\r\n                      <div class=\"col-sm-7\">\r\n                        <input type=\"text\"   style=\"font-size: 12px !important;width:95%; \" class=\"form-control\" placeholder=\"Please Enter to Select\"  (keydown.enter)=\"contractPricePopup($event)\"/>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row \">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px; white-space: nowrap;\">Salesman:</label>\r\n                      <div class=\"col-sm-7\">\r\n                        <input type=\"text\"   style=\"font-size: 12px !important;width:95%; \" class=\"form-control\" formControlName=\"SALESMAN\" placeholder=\"Please Enter to Select\" (keydown.enter)=\"onSalesmanEnter($event)\" autocomplete=\"off\"  />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row \">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px; white-space: nowrap;\">Term and Condition:</label>\r\n                      <div class=\"col-sm-7\">\r\n                        <input type=\"text\"   style=\"font-size: 12px !important;width:95%; \" class=\"form-control\" placeholder=\"Please Enter to Select\" />\r\n                      </div>\r\n                    </div> -->\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Party Category:</label>\r\n                      <div class=\"col-sm-7\">\r\n                        <select *ngIf=\"userSetting.Country != 1\" class=\"form-control\" formControlName=\"GEO\"\r\n                        style=\"height:30px;padding-bottom: 0px;font-size: 12px !important;width:95%;\">\r\n                        <option *ngFor=\"let i of GeoList\" value=\"{{i.OrgTypeCode}}\">{{\r\n                          i.OrgTypeName\r\n                        }}</option>\r\n                      </select>\r\n                      <select *ngIf=\"userSetting.Country == 1\" class=\"form-control\" formControlName=\"GEO\"\r\n                        style=\"height:30px;padding-bottom: 0px;font-size: 12px !important;width:95%;\">\r\n                        <option *ngFor=\"let i of PartyCat_List\" value=\"{{i.OrgTypeCode}}\">{{\r\n                          i.OrgTypeName\r\n                        }}</option>\r\n                      </select>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"form.controls['GEO'].touched && !form.controls['GEO'].valid\">Please select Party Category</div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom:10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Party type:</label>\r\n                      <div class=\"col-sm-7\" style=\"padding-top: 7px;\">\r\n                        <input type=\"radio\" style=\"height:13px;font-size: 12px !important;\" formControlName=\"Ptype\"  value=\"C\" (change)=\"changePtype('C')\">&nbsp;Customer&nbsp;\r\n                        <input type=\"radio\" style=\"height:13px;\" formControlName=\"Ptype\"  value=\"V\" (change)=\"changePtype('V')\">&nbsp;Supplier  \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Credit Limit:</label>\r\n                      <div class=\"col-sm-7\">\r\n                        <input type=\"number\" style=\"font-size: 12px !important;width:95%;\" class=\"form-control\" formControlName=\"CRLIMIT\" placeholder=\"Credit Limit\">\r\n                        <div class=\"alert alert-danger\" *ngIf=\"form.controls['CRLIMIT'].touched && !form.controls['CRLIMIT'].valid\">Credit limit is required</div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 7px;\">Credit Days:</label>\r\n                      <div class=\"col-sm-3\">\r\n                        <input type=\"number\" style=\"font-size: 12px !important;\" class=\"form-control\"  placeholder=\"Credit Days\" formControlName=\"CRPERIOD\">\r\n                        <div class=\"alert alert-danger\" *ngIf=\"form.controls['CRPERIOD'].touched && !form.controls['CRPERIOD'].valid\">Credit Days is required</div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                    <div class=\"col-sm-2\"></div>\r\n                      <div class=\"col-sm-9\" style=\"margin-left: 31%;\">\r\n                        <div class=\"row\">\r\n                        <input type=\"checkbox\" value=1 formControlName=\"COMMON\" style=\"height:15px;\" class=\"col-sm-1\">\r\n                        <label style=\"width: 230px !important;\" class=\"col-sm-5\">is Common Nature Party A/C</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <div class=\"col-sm-2\"></div>\r\n                        <div class=\"col-sm-9\" style=\"margin-left: 31%;\">\r\n                          <div class=\"row\">\r\n                          <input type=\"checkbox\" value=1 formControlName=\"ISBRANCH\" style=\"height:15px;\" class=\"col-sm-1\">\r\n                          <label style=\"width: 230px !important;\" class=\"col-sm-5\">is Branch Party A/C</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    <div class=\"form-group row\" *ngIf=\"userSetting.CREATE_CPROFILE_AS_MEMBER == 1 && form.value.Ptype == 'C'\" style=\"margin-bottom: 10px !important;\">\r\n                      <div class=\"col-sm-2\">\r\n                      </div>\r\n                      <div class=\"col-sm-9\" style=\"margin-left: 31%;\">\r\n                        <div class=\"row\">\r\n                        <input type=\"checkbox\" formControlName=\"createMember\" style=\"height:15px;\" class=\"col-sm-1\">\r\n                        <label style=\"width: 220px !important;\" class=\"col-sm-5\">Create A/C as Member Also</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" *ngIf=\"userSetting.ENABLEINTERCOMPANYPARTY == 1\"  style=\"margin-top: 0px;\">\r\n                      <div class=\"col-sm-2\">\r\n                      </div>\r\n                      <div class=\"col-sm-9\" style=\"margin-left: 24%;\">\r\n                        <fieldset style=\"width: 90%;\">\r\n                          <legend style=\"font-size: 15px !important;width: 90%;\">\r\n                            <input type=\"checkbox\" class=\"form-control col-sm-1\" style=\"height: 14px; width: 14px;margin-bottom: -14px;margin-left: 10px;\" id=\"interparty\" name=\"interparty\" formControlName=\"IsInitialValue\" (change)=\"enableInitial($event.target.checked==1?1:0)\">\r\n                            <label class=\"form-control-label col-sm-4\" style=\"width: 100% ;margin-left: 10%;\">Is Intercompany Party A/C</label>\r\n                          </legend>\r\n                          <div class=\"col-sm-6\" style=\"margin-top: -5px;\">\r\n                            <label class=\"form-control-label\" style=\"width: 220px !important;\">Inter Company ID</label>\r\n                          </div>\r\n                          <div class=\"col-sm-6\" style=\"margin-top: -10px;\">\r\n                            <input type=\"text\" style=\"font-size: 12px !important;margin-left: 12px;\" class=\"form-control\" placeholder=\"Initial\" formControlName=\"INITIAL\">\r\n                            <!-- <select class=\"form-control\" formControlName=\"INITIAL\" style=\"font-size: 12px !important;width: 122%; margin-left: -15%; margin-top: -3%;\">\r\n                              <option value=\" \"></option>\r\n                              <option *ngFor=\"let div of division\" value=\"{{ div.INITIAL }}\" >\r\n                                {{ div.NAME }}\r\n                            </option>\r\n                            </select> -->\r\n                          </div>\r\n                        </fieldset>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n                  <!--right column end-->\r\n\r\n\r\n                  </div>\r\n\r\n                </div> <!--bottom half end-->\r\n\r\n                    \r\n              </div> <!--general info tab end-->\r\n\r\n              <div class=\"tab-pane\" id=\"contact-details\">\r\n                <!-- Contact Details -->\r\n                <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Company Name:</label>\r\n                      <div class=\"col-sm-8\">\r\n                        <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"CNAME\" >\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <fieldset style=\"border:1px solid #dcdcdc; margin-top:15px;\">\r\n                          <legend style=\"font-size:15px;font-weight: bold; width: auto;\">Owner Info</legend>\r\n              \r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Name :</label>\r\n                            <div class=\"col-sm-8\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Name\" formControlName=\"ONAME\" >\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Contact No :</label>\r\n                            <div class=\"col-sm-6\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Contact No\" formControlName=\"OCONTACT\">\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Designation :</label>\r\n                            <div class=\"col-sm-6\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Designation\" formControlName=\"ODESIGNATION\" >\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n\r\n                      </div>\r\n\r\n                      <div class=\"col-md-6\">\r\n                        <fieldset style=\"border:1px solid #dcdcdc; margin-top:15px;\">\r\n                          <legend style=\"font-size:15px;font-weight: bold; width: auto;\">Contact Person Information</legend>\r\n\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Name :</label>\r\n                            <div class=\"col-sm-8\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Name\" formControlName=\"CONTACTNAME\">\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Contact No (A) :</label>\r\n                            <div class=\"col-sm-4\" style=\"padding-right: 0px;\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Contact No (A)\" formControlName=\"CCONTACT_A\">\r\n                            </div>\r\n                            <div class=\"col-sm-4\" style=\"padding-left: 0px;\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Contact No (B)\" formControlName=\"CCONTACT_B\">\r\n                            </div>\r\n                          \r\n                          </div>\r\n\r\n\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Designation :</label>\r\n                            <div class=\"col-sm-6\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Designation\" formControlName=\"CDESIGNATION\">\r\n                            </div>\r\n                          </div>\r\n                          \r\n                \r\n                        </fieldset>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <fieldset style=\"border:1px solid #dcdcdc; margin-top:15px;\">\r\n                          <legend style=\"font-size:15px; font-weight:bold; width: auto;\">Dealing Sales Executive Information :</legend>\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Name(Primary) :</label>\r\n                            <div class=\"col-sm-8\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Name(Primary)\" formControlName=\"RELATEDSPERSON_A\">\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px; margin-bottom: 10px !important;\">\r\n\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;width: 161px !important;\">Name(Secondary) :</label>\r\n                            <div class=\"col-sm-7\" style=\"padding-left: 3px;\"> \r\n                              <input type=\"text\" style=\"font-size: 12px !important; width: 110%;\" class=\"form-control\" placeholder=\"Name(Secondary)\" formControlName=\"RELATEDSPERSON_B\">\r\n                            </div>\r\n                          </div>\r\n                        \r\n                \r\n                        </fieldset>\r\n                      </div>\r\n\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group row\" style=\"margin-top:55px;\">\r\n                          <div class=\"row\">\r\n                          <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px; padding-left: 2rem;\">Notes:</label>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <input type=\"textarea\"  style=\" height: 55px !important;font-size: 12px !important; margin-left: 2rem; width: 90%;\" rows=\"2\" cols=\"100\" class=\"form-control\" formControlName=\"NOTES\" placeholder=\"NOTES\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    \r\n                    \r\n                  </div>\r\n                </div>\r\n              </div> <!--additional info tab end-->\r\n              <div class=\"tab-pane\" id=\"bank-details\">\r\n                <!-- Contact Details -->\r\n                <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Default Bank:</label>\r\n                      <div class=\"col-sm-8\">\r\n                        <input type=\"text\" style=\"font-size: 12px !important;width: 48%;\" class=\"form-control\" \r\n                        placeholder=\"Press Enter to Select\" formControlName=\"BANKNAME\" #BankName (keydown.Enter)=\"showBankPopup(); BankName.blur();\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Bank Code:</label>\r\n                      <div class=\"col-sm-8\">\r\n                        <input type=\"text\" style=\"font-size: 12px !important;width: 48%;\" class=\"form-control\" placeholder=\"Bank Code\" formControlName=\"BANKCODE\" disabled>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                      <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Account number:</label>\r\n                      <div class=\"col-sm-8\">\r\n                        <input type=\"text\" style=\"font-size: 12px !important;width: 48%;\" class=\"form-control\" placeholder=\"Account Number\" formControlName=\"BANKACCOUNTNUMBER\" >\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <fieldset style=\"border:1px solid #dcdcdc; margin-top:15px;\">\r\n                          <legend style=\"font-size:15px;font-weight: bold; width: auto;\">Additional Bank (Optional)</legend>\r\n              \r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Bank Name :</label>\r\n                            <div class=\"col-sm-8\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Press Enter to Select\" (keydown.Enter)=\"showAddBankPopup()\" formControlName=\"ADDITIONALBANKNAME\" >\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Bank Code :</label>\r\n                            <div class=\"col-sm-6\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Bank Code\" formControlName=\"ADDITIONALBANKCODE\" disabled>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group row\" style=\"margin-left: 0px;margin-bottom: 10px !important;\">\r\n                            <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Account number :</label>\r\n                            <div class=\"col-sm-6\">\r\n                              <input type=\"text\" style=\"font-size: 12px !important;\" class=\"form-control\" placeholder=\"Account Number\" formControlName=\"ADDITIONALBANKACCOUNTNUMBER\">\r\n                            </div>\r\n                          </div>\r\n                          <button  class=\"btn btn-primary\" (click)=\"onCLickAddBank()\" [disabled]=\"mode=='view'\">Add</button>\r\n                        </fieldset>\r\n\r\n                      </div>\r\n\r\n                      <div class=\"col-md-6\">\r\n                        <fieldset style=\"border:1px solid #dcdcdc; margin-top:15px;\">\r\n                          <legend style=\"font-size:15px;font-weight: bold; width: auto;\">Details</legend>\r\n                          <table>\r\n                            <tr>\r\n                              <th style=\"width: 40%;background-color: #63bbb2;\">\r\n                                Bank Name\r\n                              </th>\r\n                              <th style=\"width: 20%;background-color: #63bbb2;\">\r\n                                Bank Code\r\n                              </th>\r\n                              <th style=\"width: 40%;background-color: #63bbb2;height: 37px;\">\r\n                                Account number\r\n                              </th>\r\n                              <th style=\"width: 20%;background-color: #63bbb2;\"></th>\r\n                              </tr>\r\n                              <tr style=\"height: 30px;\" *ngFor=\"let i of AdditionalBankList;let i = index\">\r\n                                <td style=\"width: 50%;\">{{i.BANKNAME}}</td>\r\n                                <td style=\"width: 34%;\">{{i.BANKCODE}}</td>\r\n                                <td>{{i.BANKACCOUNTNUMBER}}</td>\r\n                                <td><button class=\"btn btn-danger\" (click)=\"RemoveBankFromList(i)\" [disabled]=\"mode=='view'\">-</button></td>\r\n                              </tr>\r\n                          </table>\r\n                       \r\n\r\n                          \r\n\r\n\r\n                          \r\n                          \r\n                \r\n                        </fieldset>\r\n                      </div>\r\n                    </div>\r\n\r\n                    \r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"tab-pane\" id=\"divisionwise-setting\">\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"col-md-6width: 42%;\">\r\n                        <fieldset style=\"background-color: #e2eaea;\">\r\n                          <legend style=\"font-size: 15px !important;width: 51%;\">Associated Division Mapping :</legend>\r\n                          <div class=\"col-md-12\">\r\n                            <div class=\"col-sm-3\">\r\n                              <label class=\"form-control-label\">Division :</label>\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                              <select class=\"form-control\" formControlName=\"DIV\" (change)=\"changeDivision($event.target.value)\">\r\n                                <option *ngFor=\"let div of division\" value=\"{{ div.INITIAL }}\">\r\n                                  {{ div.NAME }}\r\n                              </option>      </select>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-12\" style=\"margin-top: 3%;\">\r\n                            <fieldset >\r\n                              <legend style=\"font-size: 15px !important;width: 51%;\">\r\n                              <div>\r\n                                <!-- <input type=\"checkbox\" formControlName=\"createMember\" style=\"height:13px;\"> -->\r\n                              </div> \r\n\r\n                                <input type=\"checkbox\" style=\"height: 13px !important;\" name=\"checkDivision\" id=\"checkDivision\" formControlName=\"ShareAccount\" (change)=\"enableShareOptions($event.target.checked==1?1:0)\">\r\n                                Shared This Account :</legend>\r\n                                <div class=\"col-sm-6\">\r\n                                  <input type=\"radio\" style=\"height: 13px !important;\" formControlName=\"ShareSelectiveDiv\" value=1 (change)=\"enableDivSelectionTable($event.target.checked==1?1:0)\">&nbsp;Share To Selective Division\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                  <input type=\"radio\" style=\"height: 13px !important;\" formControlName=\"ShareAllDiv\" value=2 (change)=\"ShareAllDiv($event.target.checked==1?1:0)\">&nbsp;Share To All Division\r\n                                </div>\r\n                            </fieldset>\r\n                          </div>\r\n                          \r\n                        </fieldset>\r\n                      </div>\r\n                    <div class=\"col-md-6\">\r\n                    <fieldset *ngIf=\"showDivSelectionTable\" style=\"background-color: #e2eaea;height :173px\">\r\n                      <legend style=\"font-size: 15px !important;width: 60%;\">\r\n                        Account Sharing Division Selection :</legend>\r\n                      <div style=\"overflow-y: auto;height: 132px;\">\r\n                        <table>\r\n                          <tr *ngFor=\"let d of division;let i = index\" >\r\n                            <td style=\"border:1px solid #e0e0e0;width: 1%;\">\r\n                              <input type=\"checkbox\" [(ngModel)]=\"d.isCheck\" [ngModelOptions]=\"{standalone: true}\"\r\n                                (change)=\"check($event)\" value=\"{{d}}\" (click)='rowClick(i)' *ngIf = '!d.isDefault'>\r\n                                <input type=\"checkbox\" [(ngModel)]=\"d.isCheck\" [ngModelOptions]=\"{standalone: true}\" [checked] *ngIf = 'd.isDefault' disabled>\r\n                            </td>\r\n                            <td style=\"border:1px solid #e0e0e0;padding-left: 24px;width:100%\">{{d.NAME}}</td>\r\n                          </tr>\r\n\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    \r\n                    </fieldset>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"tab-pane\" id=\"sales-target\">\r\n                <!-- Sales Target -->\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group row\" style=\"margin-top: 10px !important;\">\r\n                    <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;margin-left: 0px;\">Yearly Target:</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input type=\"number\" style=\"font-size: 12px !important;width: 23%;\" class=\"form-control\" placeholder=\"Target Amount\" formControlName=\"TARGET_AMOUNT\" >\r\n                    </div>\r\n                  </div>  \r\n                </div>\r\n                <fieldset>\r\n                  <legend style=\"font-size:16px;font-weight: bold; width:auto;margin-bottom: -4px;\">Monthly Balance</legend>\r\n                <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Shrawan Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Shrawan Target\" formControlName=\"SHARWAN\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Bhadra Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Bhadra Target\" formControlName=\"BHADRA\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Ashwin Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Ashwin Target\" formControlName=\"ASHWIN\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Kartik Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Kartik Target\" formControlName=\"KARTIK\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Mangsir Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Mangsir Target\" formControlName=\"MANGSHIR\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Poush Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Poush Target\" formControlName=\"PAUSH\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Magh Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Magh Target\" formControlName=\"MAGH\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Falgun Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Falgun Target\" formControlName=\"FALGUN\" (input)=\"calculateMonthBalance()\"> \r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Chaitra Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Chaitra Target\" formControlName=\"CHAITRA\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Baisakh Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Baisakh Target\" formControlName=\"BAISHAKH\" (input)=\"calculateMonthBalance()\" >\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div>   \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Jestha Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Jestha Target\" formControlName=\"JESTHA\" (input)=\"calculateMonthBalance()\" >\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"form-group row\" style=\"margin-bottom: 10px !important;\">\r\n                        <label class=\"col-sm-2 form-control-label\" style=\"padding-top: 5px;\">Asadh Target:</label>\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"number\" style=\"font-size: 12px !important;width:100%\" class=\"form-control\" placeholder=\"Asadh Target\" formControlName=\"ASHAD\" (input)=\"calculateMonthBalance()\">\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                          <label style=\"margin-top: 5px;margin-left: -21px;\">%</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>  \r\n                  </div>\r\n                 \r\n                </div>\r\n              </fieldset>\r\n              </div>\r\n               <!--sales target tab end-->\r\n\r\n      \r\n         \r\n         \r\n          </div> <!--tab content-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<!-- ////////////////////////////////BANKSETTING TABLE////////////////////////////////////////   -->\r\n<div *ngIf =\"bank\">\r\n  <table style=\"margin-bottom: 5px; font-size: 13px; width: 100%\">\r\n    <thead>\r\n      <tr\r\n        style=\"\r\n          border-bottom: 2px solid #e6e6e6;\r\n          border-top: 2px solid #e6e6e6;\r\n          height: 30px;\r\n          background: #63bbb2;\r\n          color: black;\r\n        \"\r\n      >\r\n        <th style=\"width: 1%; text-align:center;\">SNo.</th>\r\n        <th style=\"width: 10%; padding-left: 1%; text-align:center;\">Bank Name</th>\r\n        <th style=\"width: 7%; padding-left: 1% ;text-align:center;\">Branch</th>\r\n        <th style=\"width: 7%; padding-left: 1%; text-align:center;\">Account Number</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor= \"let bankobj of bankArray; let i = index\" style=\"border: 1px; max-height: 25px\">\r\n\r\n        <td style=\"line-height: 21px; text-align: center; border: 1px solid #e6e6e6;\">\r\n        {{i+1}}\r\n        </td>\r\n\r\n        <td style=\"line-height: 21px; text-align: center; border: 1px solid #e6e6e6;\">\r\n          <input class=\"form-control\"  [(ngModel)]=\"bankobj.BankName\"\r\n            style=\"height: 25px; width: 95% !important\"/>\r\n            <!-- {{bankobj.BankName}} -->\r\n        </td>\r\n        <td style=\"line-height: 21px; text-align: center; border: 1px solid #e6e6e6;\">\r\n          <input class=\"form-control\"  [(ngModel)]=\"bankobj.BranchName\" style=\"height: 25px; width: 95% !important\"/>\r\n        </td>\r\n        <td style=\"line-height: 21px; text-align: center; border: 1px solid #e6e6e6;\">\r\n          <input class=\"form-control\"  [(ngModel)]=\"bankobj.AccountNumber\" style=\"height: 25px; width: 95% !important\"\r\n            type=\"text\"/>\r\n        </td>\r\n        \r\n        \r\n        \r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n<!-- ////////////////////////////////BANKSETTING TABLE End////////////////////////////////////////   -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<form [formGroup]='form'>\r\n  <!-- <div class=\"row\" class=\"form-horizontal\">\r\n    <div style=\"background-color:#ffffff; border:1px solid;border-color:#dcdcdc; padding:20px; margin-bottom: 10px;\">\r\n      <div class=\"com-sm-12\" style=\"padding:5px;border-bottom: solid 1px #dcdcdc; margin-bottom: 10px;\">\r\n        <h5>{{modeTitle}}</h5>\r\n      </div>\r\n    \r\n    </div>\r\n  </div> -->\r\n\r\n  <!--  -->\r\n  <!-- <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" \r\n    *ngIf=\"grp=='A'\" [disabled]=\"!form.valid || mode=='view'\">Save</button>\r\n  <button type=\"button\" (click)=\"SumbitSave()\" title=\"onSave\" class=\"btn btn-info\" *ngIf=\"grp=='G'\">Save</button>\r\n  <button type=\"button\" (click)=\"cancel()\" title=\"Cancel\" class=\"btn btn-info\">Back</button> -->\r\n</form>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n     \r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<generic-popup-grid #genericGridBankList [popupsettings]=\"gridBankPopupSettings\"\r\n  (onItemDoubleClick)=\"onBankSelect($event)\"></generic-popup-grid>\r\n\r\n  <generic-popup-grid #genericGridAdditionalBankList [popupsettings]=\"gridAdditionalBankPopupSettings\"\r\n  (onItemDoubleClick)=\"onAddBankSelect($event)\"></generic-popup-grid>\r\n  \r\n  <generic-popup-grid #genericGridACListParty [popupsettings]=\"gridACListPartyPopupSettings\"\r\n  (onItemDoubleClick)=\"onAddParentCompanySelect($event)\"></generic-popup-grid>\r\n\r\n\r\n  <generic-popup-grid #genericGridContract [popupsettings]=\"gridPopupSettingsForContractPrice\" (onItemDoubleClick)=\"onContactPriceSelected($event)\">\r\n  </generic-popup-grid>\r\n\r\n  <generic-popup-grid #genericGridSalesman [popupsettings]=\"gridPopupSettingsForSalesmanList\" (onItemDoubleClick)=\"onSalesmanSelect($event)\">\r\n  </generic-popup-grid>\r\n\r\n  <div>\r\n    <div class=\"modal fade\" bsModal #DeletePar=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" style=\"margin:-100px;height:460px\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\" style=\"width: 420px;\">\r\n          <div class=\"modal-header\">\r\n            <button class=\"close\" aria-label=\"Close\" (click)=\"onClickNo()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n  \r\n            </button>\r\n            <h4 class=\"modal-title\">Delete Party</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\" style=\"margin-top: -10px;margin-bottom: 12px;\">\r\n                Are you sure you want to delete this party?\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <button (click)=\"DeleteYes()\" style=\"margin-right: 4px;\" class=\"btn btn-danger \">Yes</button>\r\n                <button (click)=\"DeleteNo()\" type=\"button \" class=\"btn btn-warning\">No</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 1851:
/***/ (function(module, exports) {

module.exports = "\r\n  .table td, .table th{\r\n    padding: 0px !important;\r\n  }\r\n  \r\n\r\n  tbody {\r\n    display:block;\r\n    height:62vh;\r\n    overflow:auto;\r\n}\r\n\r\nthead, tbody tr {\r\n  display:table;\r\n  width:100%;\r\n  table-layout:fixed;/* even columns width , fix width of table too*/\r\n}\r\n\r\nth{\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  font-family: Roboto,Arial,sans-serif;\r\n}\r\n\r\ntd{\r\n  font-size: 13px;\r\n  font-family: Roboto,Arial,sans-serif;\r\n\r\n}\r\n\r\n.table tbody tr td{\r\n  line-height: 24px;\r\n}\r\n\r\n.btn-sm{\r\n  line-height: 3px;\r\n}\r\n\r\n.btn-info{\r\n    margin: auto 1px;\r\n}\r\n\r\n.form-control{\r\n  font-size: 12px !important;\r\n}\r\n\r\n\r\n.searchBy{\r\n  font-size: 13px;\r\n  margin-left: 18rem;\r\n}\r\n\r\n.selectrow{\r\n  padding: 0px 15px;\r\n}\r\n\r\n.plainBackGround{\r\n  border: 2px solid #dcdcdc;\r\n}"

/***/ }),

/***/ 1852:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- <ba-card style=\"background-color: #6b5656;max-height: 650px !important;\" baCardClass=\"with-scroll\"> -->\r\n\r\n  <div [ngBusy]=\"busy\">\r\n    <div class=\"sticky-top\">\r\n      <div class=\"row clearfix\" style=\" padding: 0px 20px;\">\r\n        <div class=\"col-md-6\">\r\n          <label\r\n            style=\"font-family: Segoe UI Light;font-weight: bold;font-size: 18px;padding-top: 3px;width:117px !important;\">PARTY\r\n            MASTER</label>\r\n          <label *ngIf=\"this.partyservice.subTitle\"\r\n            style=\"font-family: Segoe UI Light;font-weight: bold;font-size: 17px;padding-top: 3px;width:190px !important;\">\r\n            {{this.partyservice.subTitle}}</label>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-md-1\"></div>\r\n\r\n        <div class=\"col-md-5\" style=\"float: right;\">\r\n          <button type=\"button \" class=\"btn btn-info pull-right\" (click)=\"backToDashboard()\"\r\n            style=\" margin-bottom: 10px;  margin-left: 10px;\">\r\n            F10 Back\r\n          </button>\r\n          <button *ngIf=\"userSetting.enableMaster_AddEdit==1\" [disabled]=\"addMode || this.selectedNode==undefined\" type=\"button\" class=\"btn btn-info pull-right\"\r\n            (click)=\"AddLedger()\" style=\" margin-bottom: 10px;  margin-left: 10px;\">Add Party</button>\r\n          <button *ngIf=\"userSetting.enableMaster_AddEdit==1\" [disabled]=\"addMode\" type=\"button\" class=\"btn btn-info pull-right\" (click)=\"AddGroup(Tree)\"\r\n            style=\"margin-bottom: 10px;\">Add Group</button>\r\n          <button [disabled]=\"addMode\" type=\"button\" class=\"btn btn-info pull-right\" (click)=\"ExportPartyLedger()\"\r\n            style=\"margin-bottom: 10px;margin-right: 11px;\">Export Party</button>\r\n            <button [disabled]=\"addMode\" type=\"button\" class=\"btn btn-info pull-right\" (click)=\"ExcelUploadPartyLedger()\"\r\n            style=\"margin-bottom: 10px;margin-right: 11px;\">Excel Upload</button>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3 \" style=\"padding-top: 40px; \">\r\n    <div class=\"col-md-12\" style=\"padding: 0px\">\r\n      <!-- <button [disabled]=\"addMode\" type=\"button\" class=\"btn btn-info right\" (click)=\"AddGroup(Tree)\" style=\"margin-bottom: 10px;\">Add Group</button>\r\n                <button [disabled]=\"addMode || this.selectedNode==undefined\" type=\"button\" class=\"btn btn-info right\" (click)=\"AddLedger()\" style=\" margin-bottom: 10px;  margin-left: 10px;\">Add Party</button> -->\r\n\r\n    </div>\r\n    <div class=\"plainBackGround\">\r\n      <form>\r\n        <fieldset [class.disabledbutton]=\"addMode\" [disabled]=\"addMode\"\r\n          style=\"border:0px solid;border-color:#dcdcdc; margin-top: -10px;\" *ngIf=\"mode != 'add' && mode != 'edit'\">\r\n          <input name=\"filter\" #filter (keyup)=\"filterNodes(filter.value, tree)\" placeholder=\"&nbsp; Search Party\"\r\n            class=\"filterclass\" />\r\n          <div id=treediv>\r\n            <div\r\n              style=\"overflow: auto; border: black;border-width: 2px;height: 500px;background:white;font-size:12px; margin-left: -8px; width: 106%;\">\r\n              <Tree #tree [nodes]=\"nodes\" [focused]=\"true\" [options]=\"customTemplateStringOptions\"\r\n                (onEvent)=\"onEvent($event)\" (onActivate)=\"onselect(tree,$event)\">\r\n                <ng-template #treeNodeTemplate let-node>\r\n                  <!-- <span title=\"{{node.data.subTitle}}\" [contextMenu]=\"myContextMenu\" [contextMenuSubject]=\"node.data\">{{ node.data.ACNAME }}{{ childrenCount(node) }}</span> -->\r\n                  <span title=\"{{node.data.subTitle}} \" [contextMenu]=\"myContextMenu\" [contextMenuSubject]=\"node.data \"\r\n                    style=\"margin-left:24px\"><img src=\"../../../assets/img/Folder.jpg\" alt=\"Group\" height=\"20\"\r\n                      width=\"20\" style=\"margin-top:-2px\">\r\n                    {{ node.data.ACNAME }}\r\n                  </span>\r\n                </ng-template>\r\n                <ng-template #loadingTemplate>Loading, please hold....</ng-template>\r\n              </Tree>\r\n\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <!--select field-->\r\n        <fieldset \r\n          style=\"border:2px solid;border-color:#dcdcdc; padding: 5px 5px; height:77vh\"\r\n           *ngIf=\"mode == 'add' || mode == 'edit'\">\r\n          \r\n          <div class=\"row\">\r\n            <label class=\"form-control-label col-md-4 \" style=\"width: auto;\">Main Group :</label>\r\n            <div class=\"col-md-7\">\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n            <select id=\"mainGroup\" class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.MGROUP\" [ngModelOptions]=\"{standalone: true}\" (change)=\"getSubPartyA($event)\">\r\n                <option [value]=\"\"></option>\r\n                <option *ngFor=\"let main of masterService.partyGroupList;let i=index\" [value]=\"main.ACID\">{{main?.ACNAME}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"row\">\r\n            <label class=\"form-control-label col-md-4 \" style=\"width: auto;\">Sub Group (A) :</label>\r\n            <div class=\"col-md-7\">\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n            <select class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_A\" [disabled]=\"masterService.disableSubPartyA\" [ngModelOptions]=\"{standalone: true}\" (change)=\"getSubPartyB($event)\" >\r\n                <option [value]=\"\"></option>\r\n                <option *ngFor=\"let sub of masterService.subPartyAList;let i=index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"row\">\r\n            <label class=\"form-control-label col-md-4 \" style=\"width: auto;\" >Sub Group (B) :</label>\r\n            <div class=\"col-md-7\">\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n            <select class=\"form-control\" [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_B\" [disabled]=\"masterService.disableSubPartyB\" [ngModelOptions]=\"{standalone: true}\" (change)=\"getSubPartyC($event)\">\r\n                <option [value]=\"\"></option>\r\n                <option *ngFor=\"let sub of masterService.subPartyBList; let i=index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"row\">\r\n            <label class=\"form-control-label col-md-4 \" style=\"width: auto;\" >Sub Group (C) :</label>\r\n            <div class=\"col-md-7 pd0\">\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div class=\"row selectrow\">\r\n            <select class=\"form-control\"  [(ngModel)]=\"masterService.groupSelectObj.SUBGROUP_C\" [disabled]=\"masterService.disableSubPartyC\" [ngModelOptions]=\"{standalone: true}\" (change)=\"selectSubPartyC($event)\" >\r\n              <option [value]=\"\"></option>\r\n              <option *ngFor=\"let sub of masterService.subPartyCList; let i = index\" [value]=\"sub.ACID\">{{sub?.ACNAME}}</option>\r\n            </select>\r\n        </div>\r\n        </fieldset>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!-- </ba-card> -->\r\n\r\n  <div *ngIf=\"!addMode\" class=\"col-md-9\" style=\"padding-left: 5px;padding-top: 40px;background-color: white;\">\r\n    <!-- <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n          (view)=\"onViewClick($event)\"></ng2-smart-table> -->\r\n    <div class=\"row\" style=\"margin:10px 12px\">\r\n      <div class=\"col-md-4\" style=\"margin-top: 3px;\">\r\n        <input type=\"radio\" name=\"item\" [(ngModel)]=\"searchParty\" #searchPartyByName=\"ngModel\"\r\n          value=\"searchByName\">&nbsp; Search By Name &nbsp;&nbsp;\r\n        <input type=\"radio\" name=\"item\" [(ngModel)]=\"searchParty\" #searchPartyByVat=\"ngModel\" value=\"searchByVat\">&nbsp;\r\n        Search By VAT No. &nbsp;&nbsp;\r\n        \r\n      </div>\r\n      <div class=\"col-md-4\" style=\"padding-left: 0px;\">\r\n        <input type=\"text\" name=\"search\" [(ngModel)]=\"partyFilter\" #searchFilter=\"ngModel\" class=\"form-control\"\r\n          placeholder=\"Search...\" style=\"width: 95%; height: 1.7rem; padding: 0px 6px;\">\r\n      </div>\r\n      <div class=\"col-md-4\" style=\"padding-left: 0px;\">\r\n      <input type=\"radio\" name=\"sortItem\" [(ngModel)]=\"partyservice.sortParty\"   value=\"sortByName\" (change)=\"sortPartyListByName()\">&nbsp;\r\n        Sort By Name\r\n        <input type=\"radio\" name=\"sortItem\" [(ngModel)]=\"partyservice.sortParty\"  value=\"sortByDate\" (change)=\"sortPartyListByDate()\">&nbsp;\r\n        Sort By Date\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <table class=\"table table-striped\" style=\"margin-left: 1rem; width: 97%;\">\r\n        <thead>\r\n          <tr style=\"position: sticky; top:0;line-height: 2.4rem;\">\r\n            <th scope=\"col\" style=\"width:3%\">S.N</th>\r\n            <th scope=\"col\" style=\"width:18%\">Party Name</th>\r\n            <th scope=\"col\" style=\"width:12%\">Address</th>\r\n            <th scope=\"col\" style=\"width:8%\">VAT No.</th>\r\n            <th scope=\"col\" style=\"width:7%\">Party Type</th>\r\n            <th scope=\"col\" style=\"width:6%\">Category</th>\r\n            <th scope=\"col\" style=\"width:10%\">Party Group</th>\r\n            <th scope=\"col\" style=\"width:10%; text-align: center;\">Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngIf=\"this.partyservice.partyList && this.partyservice.partyList.length >0\">\r\n            <tr\r\n              *ngFor=\"let party of (this.partyservice.partyList|searchData:partyFilter:searchParty|paginate:{itemsPerPage:itemsPerPage,currentPage: currentPage,totalItems: totalCount}); let i=index\">\r\n              <td style=\"width:3%\">{{i+1}}</td>\r\n              <td style=\"width:18%\">{{party.ACNAME}}</td>\r\n              <td style=\"width:12%\">{{party.ADDRESS}}</td>\r\n              <td style=\"width:8%\">{{party.VATNO}}</td>\r\n              <td style=\"width:7%\">{{party.PARTYTYPE}}</td>\r\n              <td style=\"width:6%\">{{party.CATEGORY}}</td>\r\n              <td style=\"width:10%\">{{party.PARENT}}</td>\r\n              <td style=\"width:10%; text-align: center;\">\r\n\r\n                <a data-toggle=\"modal\" (click)=\"onViewClick(party)\">View&nbsp;&nbsp;</a>\r\n                <a  *ngIf=\"userSetting.enableMaster_AddEdit==1\"  data-toggle=\"modal\" (click)=\"onEditClick(party)\">Edit</a>\r\n\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"this.partyservice.partyList && (this.partyservice.partyList|searchData:partyFilter:searchParty).length === 0\">\r\n            <tr>\r\n              <td colspan=\"8\">\r\n                <div class=\"font-weight-bold\">Party Ledger Information are unavailable.</div>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"pagination\"\r\n        *ngIf=\"this.partyservice.partyList && (this.partyservice.partyList|searchData:partyFilter:searchParty).length > itemsPerPage\">\r\n        <div style=\"margin-left: 18rem;\">\r\n          <pagination-controls (pageChange)=\"partyPagination($event)\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"addMode\" class=\"col-md-9\" style=\"padding-left: 5px;padding-top: 30px;overflow: scroll;height: 600px;\">\r\n    <addPartyLedgerSelector [Title]=\"modeTitle\" [acid]=\"selectedNode?.ACID\" [PARENTID]=\"selectedNode?.PARENT\"\r\n      [parent]=\"selectedNode?.ACNAME\" [rootID]=\"root\" (onClose)=\"onAddClose($event)\" [mode]=\"mode\" [grp]=\"grp\"\r\n      (EditPartyEmit)=\"EditPartyEmit()\" (SavePartyEmit)=\"SavePartyEmit($event)\" [parentPartyID] = \"parentPartyID\" [mainGroupID]=\"mainGroupID\" [parentIdOnEdit]=\"selectedNode?.PARENT_CODE\"></addPartyLedgerSelector>\r\n  </div>\r\n  <context-menu #myContextMenu>\r\n    <ng-template *ngFor=\"let action of contextMenuActions\" contextMenuItem let-item [visible]=\"action.visible\"\r\n      [enabled]=\"action.enabled\" [divider]=\"action.divider\" (execute)=\"contextMenuClick($event.item,action)\">\r\n      {{ action.html(item) }}\r\n    </ng-template>\r\n  </context-menu>\r\n</div>\r\n\r\n\r\n\r\n<div>\r\n  <div class=\"modal fade\" bsModal #DeleteAcc=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" style=\"margin:-10rem;height:34rem\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\" style=\"width: 420px;\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"onClickNo()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n\r\n          </button>\r\n          <h4 class=\"modal-title\">Delete Party</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" style=\"margin-top: -10px;margin-bottom: 12px;\">\r\n              Are you sure you want to delete this party?\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <button (click)=\"DeleteYes()\" style=\"margin-right: 4px;\" class=\"btn btn-danger \">Yes</button>\r\n              <button (click)=\"DeleteNo()\" type=\"button \" class=\"btn btn-warning\">No</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<style>\r\n  .filterclass {\r\n    margin: 10px;\r\n    margin-left: -8px;\r\n    height: 28px;\r\n    width: 284px;\r\n    color: #666666;\r\n    border: 1px solid #cbcbcb;\r\n    border-radius: 5px;\r\n    background-color: #ffffff;\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n  }\r\n</style>\r\n<div class=\"modal-sticky\" *ngIf=\"showPartyLedgerFilterpopUp\" style=\"display: block;\r\npadding: 0px;\r\nmargin-bottom: 159px;\r\nheight: 241px;\r\nposition: absolute;\r\nright: 30%;\r\n/* top: 5px; */\r\nwidth: 550px;\r\nz-index: 9999999;\r\nborder: 1px solid;background: white;\">\r\n\r\n  <div class=\"modal-content modal-content-main-area\">\r\n    <div class=\"modal-header\" style=\"height: 40px;padding-bottom: 6%;\">\r\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Ledger filter </h4>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\" style=\"height: 226px; margin-top : 10px;    margin-left: 3%;\">\r\n\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Party Group : </label>\r\n        </div>\r\n\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.type\" (change)=\"changeType()\">\r\n          <option value =\"Customer\">Customer</option>\r\n          <option value =\"Supplier\">Supplier</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Party Type : </label>\r\n        </div>\r\n\r\n\r\n        <select class=\"col-sm-8\" style=\"width: 56%;\" [(ngModel)] = \"LedgerFilterObj.accountType\">\r\n          <option *ngFor=\"let i of GeoList\" value=\"{{i.OrgTypeCode}}\" >{{\r\n            i.OrgTypeName\r\n            }}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"row\" style=\"margin-top: 8px;\">\r\n        <div class=\"col-sm-4\">\r\n          <label class=\"form-control-label\">Party Name : </label>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" [(ngModel)]=\"LedgerFilterObj.accountName\" style=\"height:24px;width: 92% !important;margin-left: -5%;\"\r\n          (keydown.Enter)=\"showAcList(i);\"\r\n           placeholder=\"Press Enter to select\" autocomplete=\"off\">\r\n\r\n        </div>\r\n      </div>\r\n      <div style=\"float: right;\r\n      margin-top: 14px;\r\n      margin-right: 9%;\">\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"OkCommand()\">Apply</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"ExportAll()\">Export\r\n          All</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"background: #3caed0;border-color: #2dacd1;\" (click)=\"CancelCommand()\">Cancel</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<generic-popup-grid #genericGridACList [popupsettings]=\"gridACListPopupSettings\"\r\n  (onItemDoubleClick)=\"onAcSelect($event)\"></generic-popup-grid>\r\n\r\n  <file-uploader-popup #fileUploadPopup [popupsettings]=\"fileUploadPopupSettings\"\r\n    (onUploaded)=\"fileUploadSuccess($event)\">\r\n  </file-uploader-popup>"

/***/ }),

/***/ 1870:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1689);
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

/***/ }),

/***/ 1871:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1691);
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
//# sourceMappingURL=11.chunk.js.map