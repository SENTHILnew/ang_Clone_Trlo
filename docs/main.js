(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_view_component_main_view_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-view-component/main-view-component.component */ "./src/app/main-view-component/main-view-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _main_view_component_main_view_component_component__WEBPACK_IMPORTED_MODULE_2__["MainViewComponentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgCover{\r\n    background-position: 50%;\r\n    background-size: cover;\r\n}\r\n\r\n.mainElem{   \r\n    height: 100vh;\r\n    width: 100vw;\r\n    overflow:auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdDb3ZlcntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5tYWluRWxlbXsgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'bgCover':CommonServiceService.isboardview}\" class=\"mainElem\"\r\n    [style.background-color]=\"CommonServiceService.isboardview?CommonServiceService.selectedBoard.bgColor:'white'\"\r\n    [style.background-image]=\"CommonServiceService.isboardview?CommonServiceService.selectedBoard.bgImg:'none'\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-service.service */ "./src/app/common-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(CommonServiceService) {
        this.CommonServiceService = CommonServiceService;
        this.title = 'TheCloneWar';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_view_component_main_view_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-view-component/main-view-component.component */ "./src/app/main-view-component/main-view-component.component.ts");
/* harmony import */ var _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-component/header-component.component */ "./src/app/header-component/header-component.component.ts");
/* harmony import */ var _content_component_content_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-component/content-component.component */ "./src/app/content-component/content-component.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "./node_modules/ngx-bootstrap/sortable/fesm5/ngx-bootstrap-sortable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_view_component_main_view_component_component__WEBPACK_IMPORTED_MODULE_6__["MainViewComponentComponent"],
                _header_component_header_component_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentComponent"],
                _content_component_content_component_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponentComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"].forRoot(),
                ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_10__["SortableModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/common-service.service.ts ***!
  \*******************************************/
/*! exports provided: CommonServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServiceService", function() { return CommonServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonServiceService = /** @class */ (function () {
    function CommonServiceService() {
        this.isboardview = false;
        this.moveCopyMenuShow = false;
        this.selectedOption = "";
        this.selectedView = 'boards';
        this.boards = [];
        this.selectedBoard = null;
        this.selectedListitem = null;
        this.isitemEdited = false;
        this.seletedList = null;
        this.isitemContentEdited = false;
    }
    CommonServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonServiceService);
    return CommonServiceService;
}());



/***/ }),

/***/ "./src/app/content-component/content-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/content-component/content-component.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maincontent {\r\n    width: 100%;\r\n    min-width: 352px;\r\n    /*  padding-left: 20px;\r\n    padding-right: 20px; */\r\n}\r\n\r\n.pad10 {\r\n    padding-left: 10px;\r\n    color: #17394d;\r\n    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;\r\n    display: inline-block;\r\n    line-height: 24px;\r\n    margin: 4px 0 0;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n}\r\n\r\n.flexList {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    margin-top: 10px;\r\n}\r\n\r\n.cardHeading {\r\n    padding-left: 8px;\r\n    padding-top: 8px;\r\n    color: white;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.star {\r\n    float: right;\r\n    padding-right: 5px;\r\n    padding-bottom: 5px;\r\n    color: white;\r\n}\r\n\r\n.card {\r\n    background-color: rgb(0, 121, 191);\r\n    background-size: cover;\r\n    background-position: 50%;\r\n}\r\n\r\n.cardContainer {\r\n    width: 25%;\r\n    min-width: 125px;\r\n    padding-left: 12px;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n.divContainer {\r\n    display: flex;\r\n    height: 100px;\r\n    position: relative;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.divContainer:hover {\r\n    background-color: #0000001f;\r\n}\r\n\r\n.newBoard {\r\n    margin: auto;\r\n    padding-left: 0px;\r\n    padding-top: 0;\r\n}\r\n\r\n.newBoardCard {\r\n    background-color: #abb4b9;\r\n}\r\n\r\n.createContainer {\r\n    background-color: #4a9ee2;\r\n    padding: 16px;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n    background-size: cover;\r\n    background-position: 50%;\r\n    max-height: 115px;\r\n    width: 65%;\r\n}\r\n\r\n.createInput {\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    color: white;\r\n    height: 30px;\r\n    padding: 4px;\r\n    background: hsla(0, 0%, 100%, 0.35);\r\n    width: 100%;\r\n}\r\n\r\n.createInput:hover {\r\n    background: hsla(0, 0%, 100%, .15);\r\n}\r\n\r\n.createSelect {\r\n    background: hsla(0, 0%, 100%, 0.35);\r\n    border: none;\r\n    width: 125px;\r\n    color: white;\r\n}\r\n\r\n.createOption {\r\n    color: black;\r\n}\r\n\r\n.flexBox {\r\n    list-style: none;\r\n    height: 100px;\r\n    width: 100px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    margin: 0;\r\n}\r\n\r\n.cellStyle {\r\n    height: 10px;\r\n    width: 10px\r\n}\r\n\r\n.innerBtn {\r\n    background: 50%/cover #fff;\r\n    box-shadow: none;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    color: rgba(0, 0, 0, .4);\r\n    display: flex;\r\n    height: 100%;\r\n    justify-content: center;\r\n    margin: 0;\r\n    min-height: 0;\r\n    padding: 0;\r\n    position: relative;\r\n    line-height: 0;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.contain {\r\n    display: grid;\r\n    grid-template-columns: 25% 25% 25%;\r\n    grid-template-rows: 25% 25% 25%;\r\n    grid-column-gap: 5px;\r\n    grid-row-gap: 5px;\r\n    list-style: none;\r\n    padding-left: 1%;\r\n}\r\n\r\n.cell {\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.boardHeader {\r\n    background: #00000030;\r\n    height: 55px;\r\n    padding: 10px;\r\n}\r\n\r\n.subHeader {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    color: white;\r\n    line-height: 28px;\r\n    overflow: hidden;\r\n    padding-left: 2px;\r\n    padding-right: 10px;\r\n    float: left;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.divider {\r\n    border-left: 1px solid hsla(0, 0%, 100%, .2);\r\n    height: 16px;\r\n    margin: 8px 6px 0 0;\r\n    float: left;\r\n}\r\n\r\n.headerStar {\r\n    padding-top: 9px;\r\n    margin-left: 5px;\r\n    margin-right: 8px;\r\n    color: white;\r\n    float: left;\r\n}\r\n\r\n.headerBtn {\r\n    margin-top: 0px;\r\n    float: left;\r\n    margin-left: 5px;\r\n}\r\n\r\n.innerContainer {\r\n    width: 100%;\r\n    overflow: auto;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 85vh;\r\n}\r\n\r\n.cardList {\r\n    width: 16rem;\r\n    background-color: #dfe3e6;\r\n    margin-right: 20px;\r\n    display: flex;\r\n    min-width: 250px;\r\n    flex-direction: column;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n\r\n.cardListHeader {\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    color: #17394d;\r\n    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.menuList {\r\n    float: right\r\n}\r\n\r\n.fltRgt {\r\n    float: right;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    vertical-align: bottom;\r\n    -webkit-transform: translateY(50%);\r\n            transform: translateY(50%);\r\n    width: 13px;\r\n    height: 13px;\r\n    cursor: pointer;\r\n}\r\n\r\n.addfield {\r\n    margin-top: 14px;\r\n    color: #dadada;\r\n    border-radius: 3px;\r\n    padding: 4px;\r\n}\r\n\r\n.addfield:hover {\r\n    color: white;\r\n    background-color: #0000001f;\r\n}\r\n\r\n.addfieldList {\r\n    margin-top: 14px;\r\n    color: #00000078;\r\n    border-radius: 3px;\r\n    padding: 4px;\r\n}\r\n\r\n.addfieldList:hover {\r\n    color: #000000d7;\r\n    background-color: #0000001f;\r\n}\r\n\r\n.padCard {\r\n    padding-left: 10px;\r\n    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.padCard:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.addListCard {\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    text-align: center;\r\n    background-color: #0000005e;\r\n}\r\n\r\n.carTextArea {\r\n    border-radius: 4px;\r\n    margin: 10px 0px;\r\n    display: block;\r\n    border: none;\r\n    width: 180px;\r\n    height: 50px;\r\n    box-shadow: 0 1px 0 rgba(9, 45, 66, .25);\r\n}\r\n\r\n.cardBtn {\r\n    padding: 3px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.addlistCls {\r\n    float: left;\r\n    padding-top: 10px;\r\n    color: white;\r\n}\r\n\r\n.addLisBg {\r\n    margin: 5px;\r\n}\r\n\r\n.boardtitleEditer {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    background: #00000061;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    padding-left: 4px;\r\n}\r\n\r\n.quickEditorContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.quickEditortext {\r\n    border-radius: 4px;\r\n    height: 70px;\r\n    width: 200px;\r\n    border: 2px solid #0078ff96;\r\n    resize: none;\r\n    overflow: auto;\r\n    margin-left: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1jb21wb25lbnQvY29udGVudC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakI7MkJBQ3VCO0NBQzFCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwREFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMERBQTBEO0NBQzdEOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQ0FBbUM7Q0FDdEM7O0FBRUQ7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFVBQVU7Q0FDYjs7QUFFRDtJQUNJLGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLDBEQUEwRDtDQUM3RDs7QUFFRDtJQUNJLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLDRCQUFvQjtJQUFwQix5QkFBb0I7SUFBcEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBEQUEwRDtDQUM3RDs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQiwwREFBMEQ7Q0FDN0Q7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSw0QkFBb0I7SUFBcEIseUJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC1jb21wb25lbnQvY29udGVudC1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzUycHg7XHJcbiAgICAvKiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDsgKi9cclxufVxyXG5cclxuLnBhZDEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiAjMTczOTRkO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZmxleExpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZEhlYWRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyMSwgMTkxKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbn1cclxuXHJcbi5jYXJkQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5kaXZDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGl2Q29udGFpbmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxZjtcclxufVxyXG5cclxuLm5ld0JvYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5uZXdCb2FyZENhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYjRiOTtcclxufVxyXG5cclxuLmNyZWF0ZUNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE5ZWUyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIG1heC1oZWlnaHQ6IDExNXB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG5cclxuLmNyZWF0ZUlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjM1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3JlYXRlSW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgLjE1KTtcclxufVxyXG5cclxuLmNyZWF0ZVNlbGVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjM1KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNyZWF0ZU9wdGlvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mbGV4Qm94IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNlbGxTdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweFxyXG59XHJcblxyXG4uaW5uZXJCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogNTAlL2NvdmVyICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSAyNSUgMjUlO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDVweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxufVxyXG5cclxuLmJvYXJkSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAzMDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJIZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIC4yKTtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogOHB4IDZweCAwIDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmhlYWRlclN0YXIge1xyXG4gICAgcGFkZGluZy10b3A6IDlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uaGVhZGVyQnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmlubmVyQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbn1cclxuXHJcbi5jYXJkTGlzdCB7XHJcbiAgICB3aWR0aDogMTZyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlM2U2O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmNhcmRMaXN0SGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzE3Mzk0ZDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1lbnVMaXN0IHtcclxuICAgIGZsb2F0OiByaWdodFxyXG59XHJcblxyXG4uZmx0Umd0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIGNvbG9yOiAjZGFkYWRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uYWRkZmllbGQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFmO1xyXG59XHJcblxyXG4uYWRkZmllbGRMaXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDc4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uYWRkZmllbGRMaXN0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwZDc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWY7XHJcbn1cclxuXHJcbi5wYWRDYXJkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnBhZENhcmQ6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5hZGRMaXN0Q2FyZCB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDVlO1xyXG59XHJcblxyXG4uY2FyVGV4dEFyZWEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDksIDQ1LCA2NiwgLjI1KTtcclxufVxyXG5cclxuLmNhcmRCdG4ge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYWRkbGlzdENscyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRkTGlzQmcge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5ib2FyZHRpdGxlRWRpdGVyIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA2MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcblxyXG4ucXVpY2tFZGl0b3JDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5xdWlja0VkaXRvcnRleHQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNzhmZjk2O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/content-component/content-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/content-component/content-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Home View-->\r\n<div *ngIf=\"!this.CommonServiceService.isboardview\" class=\"container\" style=\"margin-top:70px\">\r\n  <div class=\"maincontent\" *ngIf=\"this.starrData.length>0\">\r\n    <div class=\"header\">\r\n      <div class=\" fa fa-star-o\">\r\n\r\n      </div>\r\n      <span class=\"pad10\">Starred Boards</span>\r\n    </div>\r\n    <ul class=\"flexList\">\r\n      <li class=\"cardContainer\" *ngFor=\"let board of this.starrData;index as i;trackBy:trackByFun\"\r\n        (click)=\"openBoardView(board)\">\r\n        <a class=\"card\" [style.background-color]=\"board.bgColor\" [style.background-image]=\"board.bgImg\">\r\n          <div class=\"divContainer\">\r\n            <div class=\"cardHeading\">{{board.title}}</div>\r\n            <div><span class=\"fa fa-star-o star\" [style.color]=\"board.star? 'yellow':'white'\"\r\n                (click)=\"board.star=!board.star;this.split($event)\"></span></div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"maincontent\">\r\n    <div class=\"header\">\r\n      <div class=\" fa fa-user\">\r\n\r\n      </div>\r\n      <span class=\"pad10\">Personal Boards</span>\r\n    </div>\r\n    <ul class=\"flexList\">\r\n      <li class=\"cardContainer\" *ngFor=\"let board of this.CommonServiceService.boards;index as i;trackBy:trackByFun\"\r\n        (click)=\"openBoardView(board)\">\r\n        <a class=\"card\" [style.background-color]=\"board.bgColor\" [style.background-image]=\"board.bgImg\">\r\n          <div class=\"divContainer\">\r\n            <div class=\"cardHeading\">{{board.title}}</div>\r\n            <div><span class=\"fa fa-star-o star\" [style.color]=\"board.star? 'yellow':'white'\"\r\n                (click)=\"board.star=!board.star;this.split($event)\"></span></div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li class=\"cardContainer\" (click)=\"createNewBoard(template)\">\r\n        <a class=\"card newBoardCard\">\r\n          <div class=\"divContainer\">\r\n            <div class=\"cardHeading newBoard\">Create new board...</div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n<!--Board View-->\r\n<div *ngIf=\"this.CommonServiceService.isboardview\">\r\n  <div class=\"boardHeader\">\r\n    <div class=\"subHeader\"><span *ngIf=\"!titleedited\"\r\n        (click)=\"editTitle()\">{{CommonServiceService.selectedBoard.title}}</span>\r\n      <input *ngIf=\"titleedited\" class=\"boardtitleEditer\" #titlElm type=\"text\"\r\n        [(ngModel)]=\"CommonServiceService.selectedBoard.title\" (blur)=\"titleedited=false\">\r\n    </div>\r\n    <span class=\"divider\"></span>\r\n    <span class=\"fa fa-star-o headerStar\" [style.color]=\"CommonServiceService.selectedBoard.star? 'yellow':'white'\"\r\n      (click)=\"CommonServiceService.selectedBoard.star=!CommonServiceService.selectedBoard.star\"></span>\r\n    <span class=\"divider\"></span>\r\n    <button type=\"button\" (click)=\"deleteItems()\" class=\"btn btn-primary btCustom mar0 headerBtn\">\r\n      <span class=\"optFont\">Delete Multiple</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"innerContainer\">\r\n    <div class=\"card cardList\" *ngFor=\"let list of CommonServiceService.selectedBoard.list;let i=index\">\r\n      <div class=\"card-body\">\r\n        <div class=\"cardListHeader\"><span *ngIf=\"!list.isEdited\" (click)=\"list.isEdited=true\">{{list.title}}</span>\r\n          <input *ngIf=\"list.isEdited\" class=\"boardtitleEditer\" type=\"text\" [(ngModel)]=\"list.title\"\r\n            (blur)=\"list.isEdited=false\">\r\n          <span class=\"fa fa-ellipsis-h menuList\" (click)=\"editList(list)\"></span></div>\r\n        <ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\r\n          <div (contextmenu)=\"openEditor($event,item.initData,list)\" (click)=\"editListItem(item.initData,list)\">\r\n            <div><span>{{item.value}}</span><span class=\"fa fa-pencil fltRgt\"\r\n                (click)=\"openEditor($event,item.initData,list)\"></span>\r\n            </div>\r\n            <div>\r\n              <span *ngIf=\"item.initData.desc!==''\" class=\"fa fa-align-left\"></span>\r\n              <span style=\"margin-left: 8px;\" *ngIf=\"item.initData.comments?.length!==0\">\r\n                <span class=\"fa fa-comment-o\"></span><span>{{item.initData.comments.length}}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <bs-sortable [(ngModel)]=\"list.itemsInList\" *ngIf=\"!list.refresh\" fieldName=\"title\"\r\n          [itemTemplate]=\"itemTemplate\" itemClass=\"sortable-item\" itemActiveClass=\"sortableItemActive\"\r\n          placeholderItem=\"  \" placeholderClass=\"placeholderStyle\" wrapperClass=\"sortable-wrapper\">\r\n        </bs-sortable>\r\n        <div class=\"addfieldList\" (click)=\"list.isAddingListItem=true\" *ngIf=\"!list.isAddingListItem\">\r\n          <span class=\"fa fa-plus\"></span><span class=\"padCard\" *ngIf=\"list.itemsInList.length===0\">Add a\r\n            card</span><span class=\"padCard\" *ngIf=\"list.itemsInList.length>0\">Add another card</span>\r\n        </div>\r\n        <div *ngIf=\"list.isAddingListItem\">\r\n          <textarea class=\"carTextArea\" #val placeholder=\"Enter a title for this card..\"></textarea>\r\n          <button type=\"button\" class=\"btn btn-success cardBtn\" (click)=\"addtoCard(val,i)\">Add Card</button>\r\n          <span class=\"fa fa-close\" (click)=\"list.isAddingListItem=false\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card cardList addListCard\">\r\n      <div *ngIf=\"!this.isAddingCardtoList\">\r\n        <div class=\"addfield\" style=\"margin-top: 0px\" (click)=\"this.isAddingCardtoList=true\">\r\n          <span class=\"fa fa-plus\"></span><span class=\"padCard\">Add another List</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"addLisBg\" *ngIf=\"this.isAddingCardtoList\">\r\n        <textarea class=\"carTextArea\" #val placeholder=\"Enter a title for this List..\"></textarea>\r\n        <button type=\"button\" class=\"btn btn-success cardBtn\" style=\"float: left;\" (click)=\"addToList(val)\">Add\r\n          List</button>\r\n        <span class=\"fa fa-close addlistCls\" (click)=\"this.isAddingCardtoList=false\"></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Add new-->\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Create New Board</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeAddNew()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"padding-left: 6px;\">\r\n    <form>\r\n      <div style=\"display:flex\">\r\n        <div class=\" createContainer\" [style.background-color]=\"backgroundColorDefault\"\r\n          [style.background-image]=\"backgroundDefault\">\r\n          <div style=\"padding-bottom: 10px\">\r\n            <input type=\"text\" class=\"createInput\" [(ngModel)]=\"titleNew\" [ngModelOptions]=\"{standalone: true}\"\r\n              placeholder=\"Add board Title\">\r\n          </div>\r\n          <div style=\"padding-bottom: 10px\">\r\n            <select [(ngModel)]=\"privacyOpt\" [ngModelOptions]=\"{standalone: true}\" class=\"createSelect\">\r\n              <option value=\"Public\" class=\"createOption\">Public</option>\r\n              <option value=\"Private\" class=\"createOption\" selected>Private</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <ul class=\"contain\">\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" type=\"button\" (click)=\"changeBgImg($event)\"\r\n                  style=\"background-image: url(&quot;https://images.unsplash.com/photo-1553600842-dc436cacbab4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9&quot;);\"></button>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" type=\"button\" (click)=\"changeBgImg($event)\"\r\n                  style=\"background-image: url(&quot;https://images.unsplash.com/photo-1553534952-63b37844b7f2?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9&quot;);\"></button>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" type=\"button\" (click)=\"changeBgImg($event)\"\r\n                  style=\"background-image: url(&quot;https://images.unsplash.com/photo-1553616185-389b0d49fd4c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9&quot;);\"></button>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" type=\"button\" (click)=\"changeBgImg($event)\"\r\n                  style=\"background-image: url(&quot;https://images.unsplash.com/photo-1553623717-091c3c3d1153?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9&quot;);\"></button>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" title=\"blue\" type=\"button\" (click)=\"changeBgColor('rgb(0, 121, 191)')\"\r\n                  style=\"background-color: rgb(0, 121, 191);\"></button> </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" title=\"orange\" (click)=\"changeBgColor('rgb(210, 144, 52)')\" type=\"button\"\r\n                  style=\"background-color: rgb(210, 144, 52);\"></button> </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" title=\"green\" type=\"button\" (click)=\"changeBgColor('rgb(81, 152, 57)')\"\r\n                  style=\"background-color: rgb(81, 152, 57);\"></button> </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" title=\"red\" type=\"button\" (click)=\"changeBgColor('rgb(176, 70, 50)')\"\r\n                  style=\"background-color: rgb(176, 70, 50);\"></button> </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <div class=\"cell\">\r\n                <button class=\"innerBtn\" title=\"lightGreen\" type=\"button\" (click)=\"changeBgColor('rgb(149, 176, 50)')\"\r\n                  style=\"background-color: rgb(149, 176, 50);\"></button> </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <button type=\"button\" [disabled]=\"titleNew.length===0\" class=\"btn btn-success\"\r\n        (click)=\"careBoard()\">Create</button>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!--PopUp Menu-->\r\n<ng-template #templateList>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{this.CommonServiceService.selectedOption}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeListModel()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"padding-left: 6px;\">\r\n    <app-popup (close)=\"closeListModel()\"></app-popup>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<ng-template #quickEditor>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Card Quick Editor</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closequickEditor()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"padding-left: 6px;\">\r\n    <form>\r\n      <div class=\"quickEditorContainer\">\r\n        <textarea class=\"quickEditortext\" #titleElm>{{this.CommonServiceService.selectedListitem.title}}</textarea>\r\n        <div>\r\n          <div class=\"quick-editor-action\"><a class=\"quick-editor-subAction\" (click)=\"moveElemt($event,'Move')\">\r\n              <span class=\"fa fa-arrows\"></span><span class=\"marLeft4\">Move</span></a>\r\n            <a (click)=\"moveElemt($event,'Copy')\" class=\"quick-editor-subAction\">\r\n              <span class=\"fa fa-copy\"></span><span class=\"marLeft4\">Copy</span></a>\r\n            <a (click)=\"deleteElem()\" class=\"quick-editor-subAction\"><span class=\"fa fa-archive\"></span>\r\n              <span class=\"marLeft4\">Delete</span></a></div>\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"button\" style=\"margin-left: 30px;\" class=\"btn btn-success\"\r\n        (click)=\"saveChange($event,titleElm)\">Save</button>\r\n    </form>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/content-component/content-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content-component/content-component.component.ts ***!
  \******************************************************************/
/*! exports provided: ContentComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponentComponent", function() { return ContentComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-service.service */ "./src/app/common-service.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponentComponent = /** @class */ (function () {
    function ContentComponentComponent(CommonServiceService, ChangeDetectorRef, modalService, _sanitizer) {
        this.CommonServiceService = CommonServiceService;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.modalService = modalService;
        this._sanitizer = _sanitizer;
        this.opnitemEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.starredItems = [];
        this.isMenu = false;
        this.isAddingCardtoList = false;
        this.titleedited = false;
        this.seletedIndex = null;
        this.starrData = [];
        this.listView = true;
        this.titleNew = "";
        this.privacyOpt = "Private";
        this.backgroundDefault = "";
        this.backgroundColorDefault = 'rgb(2, 106, 167)';
    }
    Object.defineProperty(ContentComponentComponent.prototype, "openpopUp", {
        set: function (control) {
            if (control) {
                this.CommonServiceService.selectedOption = control;
                this.modalRef = this.modalService.show(this.templateList);
            }
        },
        enumerable: true,
        configurable: true
    });
    ContentComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backgroundDefault = this._sanitizer.bypassSecurityTrustStyle("url(https://images.unsplash.com/photo-1553600842-dc436cacbab4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9)");
        this.split();
        this.subscription = this.modalService.onHide.subscribe(function (reason) {
            if (_this.CommonServiceService.seletedList) {
                _this.CommonServiceService.seletedList.refresh = true;
                _this.ChangeDetectorRef.detectChanges();
                _this.CommonServiceService.seletedList.refresh = false;
            }
        });
    };
    ContentComponentComponent.prototype.split = function (event) {
        this.starrData = this.CommonServiceService.boards.filter(function (obj) {
            return obj.star;
        });
        if (event)
            event.stopPropagation();
    };
    ContentComponentComponent.prototype.createNewBoard = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ContentComponentComponent.prototype.trackByFun = function (index, board) {
        return board.id;
    };
    ContentComponentComponent.prototype.changeBgImg = function (event) {
        this.backgroundDefault = this._sanitizer.bypassSecurityTrustStyle(event.currentTarget.style.backgroundImage);
    };
    ContentComponentComponent.prototype.changeBgColor = function (event) {
        this.backgroundDefault = 'none';
        this.backgroundColorDefault = event;
    };
    ContentComponentComponent.prototype.careBoard = function () {
        var id = this.CommonServiceService.boards.length + 1;
        var board = new Borad(this.titleNew, this.privacyOpt, this.backgroundDefault, this.backgroundColorDefault, id);
        console.log(board);
        this.CommonServiceService.boards.push(board);
        this.closeAddNew();
    };
    ContentComponentComponent.prototype.closeAddNew = function () {
        this.titleNew = "";
        this.privacyOpt = "Private";
        this.backgroundDefault = this._sanitizer.bypassSecurityTrustStyle("url(https://images.unsplash.com/photo-1553600842-dc436cacbab4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9)");
        this.backgroundColorDefault = 'rgb(2, 106, 167)';
        this.modalRef.hide();
    };
    /* changeView(view) {
      this.CommonServiceService.selectedView = view;
    } */
    ContentComponentComponent.prototype.openBoardView = function (obj) {
        this.CommonServiceService.selectedBoard = obj;
        this.CommonServiceService.isboardview = true;
        if (obj.list.length === 0) {
            this.isAddingCardtoList = true;
        }
    };
    ContentComponentComponent.prototype.showMenu = function () {
        this.isMenu = !this.isMenu;
    };
    ContentComponentComponent.prototype.removeEditingtitle = function (id) {
        this.titleedited = false;
        var ind = this.CommonServiceService.boards.findIndex(function (board) {
            return board.id === id;
        });
        if (ind > -1) {
            this.CommonServiceService.boards[ind].title = this.CommonServiceService.selectedBoard.title;
        }
    };
    ContentComponentComponent.prototype.addToList = function (elem) {
        if (elem.value === "" || elem.value === " ")
            return;
        var id = this.CommonServiceService.selectedBoard.list.length;
        var listemItem = new ListItem(elem.value, id);
        elem.value = '';
        this.CommonServiceService.selectedBoard.list.push(listemItem);
        this.isAddingCardtoList = false;
    };
    ContentComponentComponent.prototype.addtoCard = function (elem, index) {
        if (elem.value === "" || elem.value === " ")
            return;
        var id = this.CommonServiceService.selectedBoard.list[index].itemsInList.length + 1;
        var listemItem = new ListItemcontent(elem.value, id);
        elem.value = '';
        this.CommonServiceService.selectedBoard.list[index].itemsInList.push(listemItem);
        this.CommonServiceService.selectedBoard.list[index].isAddingListItem = false;
        this.CommonServiceService.selectedBoard.list[index].refresh = true;
        this.ChangeDetectorRef.detectChanges();
        this.CommonServiceService.selectedBoard.list[index].refresh = false;
    };
    ContentComponentComponent.prototype.addClass = function (index) {
        this.seletedIndex = index;
        this.CommonServiceService.selectedBoard.list[index].isAddingListItem = true;
    };
    ContentComponentComponent.prototype.closeListModel = function () {
        this.modalRef.hide();
    };
    ContentComponentComponent.prototype.editListItem = function (item, list) {
        this.CommonServiceService.selectedListitem = item;
        this.CommonServiceService.seletedList = list;
        this.opnitemEdit.emit();
    };
    ContentComponentComponent.prototype.editList = function (list) {
        this.CommonServiceService.selectedOption = 'List Menu';
        this.CommonServiceService.seletedList = list;
        this.modalRef = this.modalService.show(this.templateList);
        // this.CommonServiceService.moveCopyMenuShow = true;
    };
    ContentComponentComponent.prototype.deleteItems = function () {
        this.CommonServiceService.selectedOption = 'Delete Multiple';
        this.modalRef = this.modalService.show(this.templateList);
    };
    /* onDragStart(event, data, list, index) {
      event.dataTransfer.setData('data', JSON.stringify({ data, list, index }));
    }
    onDrop(event, data, list, index) {
      let dataTransfer = JSON.parse(event.dataTransfer.getData('data'));
      console.log(dataTransfer);
      let ind = this.CommonServiceService.selectedBoard.list.findIndex((obj) => {
        return obj.id === dataTransfer.list.id;
      });
      let datamoved = this.CommonServiceService.selectedBoard.list[ind].itemsInList.splice(dataTransfer.index, 1);
      console.log({ data, list, index });
      list.itemsInList.splice(index, 0, datamoved[0]);
      event.preventDefault();
    }
    allowDrop(event) {
      event.preventDefault();
    } */
    ContentComponentComponent.prototype.openEditor = function (event, item, list) {
        this.CommonServiceService.selectedListitem = item;
        this.CommonServiceService.seletedList = list;
        this.modalRef2 = this.modalService.show(this.quickEditor);
        event.stopPropagation();
        event.preventDefault();
    };
    ContentComponentComponent.prototype.moveElemt = function (event, control) {
        this.CommonServiceService.selectedOption = control;
        this.modalRef = this.modalService.show(this.templateList);
        this.modalRef2.hide();
    };
    ContentComponentComponent.prototype.deleteElem = function () {
        var _this = this;
        var ind = this.CommonServiceService.seletedList.itemsInList.findIndex(function (a) {
            return a.id === _this.CommonServiceService.selectedListitem.id;
        });
        this.CommonServiceService.seletedList.itemsInList.splice(ind, 1);
        this.modalRef2.hide();
    };
    ContentComponentComponent.prototype.saveChange = function (event, element) {
        if (element.value !== "")
            this.CommonServiceService.selectedListitem.title = element.value;
        this.closequickEditor();
    };
    ContentComponentComponent.prototype.closequickEditor = function () {
        this.modalRef2.hide();
    };
    ContentComponentComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ContentComponentComponent.prototype.ngAfterViewInit = function () {
        this.ChangeDetectorRef.detectChanges();
    };
    ContentComponentComponent.prototype.editTitle = function () {
        this.titleedited = true;
        this.ChangeDetectorRef.detectChanges();
        this.titlElm.nativeElement.focus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContentComponentComponent.prototype, "opnitemEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('openpopUp'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ContentComponentComponent.prototype, "openpopUp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateList'),
        __metadata("design:type", Object)
    ], ContentComponentComponent.prototype, "templateList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('quickEditor'),
        __metadata("design:type", Object)
    ], ContentComponentComponent.prototype, "quickEditor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('titlElm'),
        __metadata("design:type", Object)
    ], ContentComponentComponent.prototype, "titlElm", void 0);
    ContentComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-component',
            template: __webpack_require__(/*! ./content-component.component.html */ "./src/app/content-component/content-component.component.html"),
            styles: [__webpack_require__(/*! ./content-component.component.css */ "./src/app/content-component/content-component.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ContentComponentComponent);
    return ContentComponentComponent;
}());

var Borad = /** @class */ (function () {
    function Borad(titel, confin, bgImg, bgColor, id) {
        this.confin = confin;
        this.title = titel;
        this.bgImg = bgImg;
        this.bgColor = bgColor;
        this.id = id;
        this.list = [];
        this.history = [];
        this.star = false;
        this.del = false;
    }
    return Borad;
}());
var ListItem = /** @class */ (function () {
    function ListItem(title, id) {
        this.isAddingListItem = false;
        this.refresh = false;
        this.title = title;
        this.itemsInList = [];
        this.id = id + title;
        this.del = false;
        this.isEdited = false;
    }
    return ListItem;
}());
var ListItemcontent = /** @class */ (function () {
    function ListItemcontent(title, id) {
        this.title = title;
        this.desc = "";
        this.id = id + title;
        this.comments = [];
        this.del = false;
    }
    return ListItemcontent;
}());


/***/ }),

/***/ "./src/app/header-component/header-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/header-component/header-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conta {\r\n    height: 100%;\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.showIconse {\r\n    display: inline;\r\n}\r\n\r\n.maincontainer {\r\n    color: white;\r\n    min-height: 45px\r\n}\r\n\r\n.padLeft4 {\r\n    padding-left: 4px;\r\n}\r\n\r\n.iconHeader {\r\n    height: 42px;\r\n    width: 42px;\r\n    margin-top: 0px;\r\n    float: right;\r\n    margin-right: 8px;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWNvbXBvbmVudC9oZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5zaG93SWNvbnNlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm1haW5jb250YWluZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogNDVweFxyXG59XHJcblxyXG4ucGFkTGVmdDQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5pY29uSGVhZGVyIHtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header-component/header-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/header-component/header-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"maincontainer\" [style.background]=\"CommonServiceService.isboardview?'rgba(0,0,0,.15)':'#026aa7'\">\r\n\r\n      <button type=\"button\" (click)=\"changeView()\" class=\"btn btn-primary btCustom\">\r\n            <span class=\"fa fa-home\"></span>\r\n            <span class=\"padLeft4 optFont\">Home</span>\r\n      </button>\r\n      <button type=\"button\" (click)=\"editList()\" class=\"btn btn-primary btCustom mar0\">\r\n            <span class=\"optFont\">Delete Boards</span>\r\n      </button>\r\n      <img class=\"iconHeader\" src=\"assets/tropper.jpg\" alt=\"clone\" (click)=\"openLink()\">\r\n</div>"

/***/ }),

/***/ "./src/app/header-component/header-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/header-component/header-component.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentComponent", function() { return HeaderComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-service.service */ "./src/app/common-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponentComponent = /** @class */ (function () {
    function HeaderComponentComponent(CommonServiceService, ChangeDetectorRef) {
        this.CommonServiceService = CommonServiceService;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.openPop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBordsCliked = false;
    }
    HeaderComponentComponent.prototype.ngOnInit = function () {
    };
    HeaderComponentComponent.prototype.editList = function () {
        this.CommonServiceService.selectedOption = 'Board Menu';
        this.openPop.emit('openPopup');
    };
    HeaderComponentComponent.prototype.changeView = function () {
        this.openPop.emit('viewChange');
        this.CommonServiceService.isboardview = false;
        this.ChangeDetectorRef.detectChanges();
    };
    HeaderComponentComponent.prototype.openLink = function () {
        window.open('https://www.google.com/search?ei=ptGwXJeyO9ub9QO5l5-YBw&q=star+wars+the+clone+war&oq=star+wars+the+clone+war', 'blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponentComponent.prototype, "openPop", void 0);
    HeaderComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-component',
            template: __webpack_require__(/*! ./header-component.component.html */ "./src/app/header-component/header-component.component.html"),
            styles: [__webpack_require__(/*! ./header-component.component.css */ "./src/app/header-component/header-component.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HeaderComponentComponent);
    return HeaderComponentComponent;
}());



/***/ }),

/***/ "./src/app/main-view-component/main-view-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main-view-component/main-view-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subHeader {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    color: black;\r\n    line-height: 28px;\r\n    overflow: hidden;\r\n    padding-left: 2px;\r\n    padding-right: 10px;\r\n    float: left;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.boardtitleEditer {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    background: #00000061;\r\n    color: white;\r\n    border: 2px solid rgba(53, 53, 245, 0.753);\r\n    border-radius: 4px;\r\n    padding-left: 4px;\r\n}\r\n\r\n.listItemEditcon {\r\n    margin-top: 10px;\r\n    display: flex\r\n}\r\n\r\n.listitemMenu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 2%;\r\n    margin-right: 2%;\r\n    width: 80%;\r\n}\r\n\r\n.editDcescBtn {\r\n    float: none !important;\r\n    height: 25px;\r\n    width: 50px;\r\n    border-radius: 3px;\r\n    color: black;\r\n    background: #00000021;\r\n    padding: 0px;\r\n}\r\n\r\n.descLabel {\r\n    margin-right: 4px;\r\n    font-size: 18px;\r\n}\r\n\r\n.explainP {\r\n    width: 100%;\r\n    height: 50px;\r\n    background: #00000042;\r\n    border-radius: 3px;\r\n    padding: 8px;\r\n}\r\n\r\n.descTextArea {\r\n    overflow: hidden;\r\n    overflow-wrap: break-word;\r\n    resize: none;\r\n    height: 90px;\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    border: 2px solid #0076ffbd;\r\n}\r\n\r\n.desccn {\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.descmarg {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    margin-left: 10px;\r\n}\r\n\r\n.deleteLink {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    margin-left: 18px;\r\n}\r\n\r\n.nameTag {\r\n    font-size: 17px;\r\n    margin-left: 14px;\r\n    font-weight: 800;\r\n    color: #1d1b1b9c;\r\n}\r\n\r\n.commentCard {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 5px;\r\n    margin-left: 18px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    background: #0000000d;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n\r\n.actionHeder {\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    color: #7f7e7e;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi12aWV3LWNvbXBvbmVudC9tYWluLXZpZXctY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLDBEQUEwRDtDQUM3RDs7QUFFRDtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNEJBQW9CO0lBQXBCLHlCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXZpZXctY29tcG9uZW50L21haW4tdmlldy1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJIZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYm9hcmR0aXRsZUVkaXRlciB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDUzLCA1MywgMjQ1LCAwLjc1Myk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmxpc3RJdGVtRWRpdGNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleFxyXG59XHJcblxyXG4ubGlzdGl0ZW1NZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5lZGl0RGNlc2NCdG4ge1xyXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDIxO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZGVzY0xhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZXhwbGFpblAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5kZXNjVGV4dEFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDc2ZmZiZDtcclxufVxyXG5cclxuLmRlc2NjbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmRlc2NtYXJnIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmRlbGV0ZUxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbi5uYW1lVGFnIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjMWQxYjFiOWM7XHJcbn1cclxuXHJcbi5jb21tZW50Q2FyZCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uYWN0aW9uSGVkZXIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjN2Y3ZTdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-view-component/main-view-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main-view-component/main-view-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-component class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\" (openPop)=\"openpopMenu($event)\"\r\n  style=\"padding-left: 0px;padding-right: 0px\"></app-header-component>\r\n<app-content-component *ngIf=\"!refresh\" (opnitemEdit)=\"openitemEdit()\" [openpopUp]=\"inputString\">\r\n</app-content-component>\r\n\r\n<!--Delete Boards-->\r\n<ng-template #templateBoard>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{this.CommonServiceService.selectedOption}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeBoardModel()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"padding-left: 6px;\">\r\n    <app-popup (upDateboards)=\"openpopMenu($event)\" (close)=\"closeBoardModel()\"></app-popup>\r\n  </div>\r\n</ng-template>\r\n\r\n<!--Description /comments-->\r\n\r\n<ng-template #templateEditListitem>\r\n  <div class=\"modal-body\" style=\"padding-left: 6px;\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeListModel()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <div class=\"subHeader\"><span class=\"fa fa-credit-card\" style=\"margin-right:4px\" *ngIf=\"!titleEditable\"></span><span\r\n        *ngIf=\"!titleEditable\" (click)=\"titleEditable=true\">{{CommonServiceService.selectedListitem.title}}</span>\r\n      <input *ngIf=\"titleEditable\" class=\"boardtitleEditer\" type=\"text\"\r\n        [(ngModel)]=\"CommonServiceService.selectedListitem.title\" (blur)=\"titleEditable=false\">\r\n    </div>\r\n    <div style=\"padding-top: 7px;\">\r\n      <span>in List {{CommonServiceService.seletedList?.title}}</span>\r\n    </div>\r\n    <div class=\"listItemEditcon\">\r\n      <div  class=\"listitemMenu\">\r\n        <div>\r\n          <div><span class=\"fa fa-align-left descLabel\">\r\n            </span>\r\n            <span class=\"descLabel\">Description</span>\r\n            <button class=\"btn btn-primary btCustom mar0 headerBtn editDcescBtn\" (click)=\"edittingDesc=true\"\r\n              type=\"button\"><span class=\"optFont\">Edit</span></button>\r\n          </div>\r\n          <div class=\"desccn\">\r\n            <div\r\n              *ngIf=\"(CommonServiceService.selectedListitem?.desc!==''||CommonServiceService.selectedListitem?.desc!==' ')&& !edittingDesc\"\r\n              dir=\"auto\">\r\n              <p class=\"descmarg\">{{CommonServiceService.selectedListitem?.desc}}</p>\r\n            </div>\r\n            <p (click)=\"edittingDesc=true\" class=\"explainP\"\r\n              *ngIf=\"(CommonServiceService.selectedListitem?.desc===''||CommonServiceService.selectedListitem?.desc===' ')&& !edittingDesc\">\r\n              <a>Add a more detailed description…</a></p>\r\n            <div *ngIf=\"edittingDesc\"><textarea #descElem placeholder=\"Add a more detailed description…\"\r\n                class=\"descTextArea\">{{CommonServiceService.selectedListitem?.desc}}</textarea>\r\n              <div><input type=\"submit\" class=\"btn btn-primary btCustom mar0 headerBtn editDcescBtn\"\r\n                  (click)=\"changeDesc(descElem)\" value=\"Save\"><a class=\"fa fa-close\" (click)=\"edittingDesc=false\"></a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div><span class=\"fa fa-comment-o descLabel\">\r\n            </span>\r\n            <span class=\"descLabel\">Add Commend</span>\r\n          </div>\r\n          <div class=\"desccn\">\r\n            <form>\r\n              <div>\r\n                <div><textarea #comment class=\"descTextArea\" placeholder=\"Write a comment…\" tabindex=\"1\"\r\n                    dir=\"auto\"></textarea></div>\r\n              </div>\r\n              <div>\r\n                <input (click)=\"commentedFun(comment)\" class=\"btn btn-primary btCustom mar0 headerBtn editDcescBtn\"\r\n                  tabindex=\"3\" type=\"submit\" value=\"Save\">\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div><span class=\"fa fa-history descLabel\">\r\n            </span>\r\n            <span class=\"descLabel\">Activity</span>\r\n          </div>\r\n          <div class=\"desccn\">\r\n            <div style=\"border-bottom: 1px solid #63636345;\"\r\n              *ngFor=\"let item of CommonServiceService.selectedListitem?.comments;let i=index\">\r\n              <div><span class=\"nameTag\">You</span>\r\n\r\n                <div class=\"card commentCard\">\r\n                  <p>{{item}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"deleteLink\">\r\n                <div><span><a (click)=\"deletecomment(i)\">Delete</a></span></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style=\"margin-right: 2%;\" class=\"listitemMenu\">\r\n        <div class=\"actionHeder\">Actions List</div>\r\n        <div class=\"quick-editor-action\" style=\" margin-left:0px\"><a class=\"quick-editor-subAction\"\r\n            (click)=\"moveElemt($event,'Move')\">\r\n            <span class=\"fa fa-arrows\"></span><span class=\"marLeft4\">Move</span></a>\r\n          <a (click)=\"moveElemt($event,'Copy')\" class=\"quick-editor-subAction\">\r\n            <span class=\"fa fa-copy\"></span><span class=\"marLeft4\">Copy</span></a>\r\n          <a (click)=\"deleteElem()\" class=\"quick-editor-subAction\"><span class=\"fa fa-archive\"></span>\r\n            <span class=\"marLeft4\">Delete</span></a></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/main-view-component/main-view-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-view-component/main-view-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainViewComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponentComponent", function() { return MainViewComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-service.service */ "./src/app/common-service.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainViewComponentComponent = /** @class */ (function () {
    function MainViewComponentComponent(_sanitizer, CommonServiceService, modalService, ChangeDetectorRef) {
        this._sanitizer = _sanitizer;
        this.CommonServiceService = CommonServiceService;
        this.modalService = modalService;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.inputString = null;
        this.isaddnewboard = false;
        this.titleNew = "";
        this.privacyOpt = "Private";
        this.backgroundDefault = "";
        this.backgroundColorDefault = 'rgb(2, 106, 167)';
        this.currentData = [];
        this.moveCopyMenuShow = false;
        this.listMenuShown = false;
        this.edittingDesc = false;
        this.refresh = false;
    }
    MainViewComponentComponent.prototype.ngOnInit = function () {
        this.backgroundDefault = this._sanitizer.bypassSecurityTrustStyle("url(https://images.unsplash.com/photo-1553600842-dc436cacbab4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjcwNjZ9)");
    };
    MainViewComponentComponent.prototype.openpopMenu = function (control) {
        if (control === 'openPopup') {
            this.modalRef = this.modalService.show(this.templateBoard);
        }
        else if (control === 'viewChange') {
            this.inputString = null;
            this.refresh = true;
            this.ChangeDetectorRef.detectChanges();
            this.refresh = false;
        }
    };
    MainViewComponentComponent.prototype.closeBoardModel = function () {
        this.modalRef.hide();
    };
    MainViewComponentComponent.prototype.closeListModel = function () {
        this.CommonServiceService.seletedList.refresh = true;
        this.ChangeDetectorRef.detectChanges();
        this.CommonServiceService.seletedList.refresh = false;
        this.modalRef2.hide();
    };
    MainViewComponentComponent.prototype.changeDesc = function (elem) {
        if (elem.value === '' || elem.value === ' ')
            return;
        this.CommonServiceService.selectedListitem.desc = elem.value;
        this.edittingDesc = false;
    };
    MainViewComponentComponent.prototype.changepop = function (event) {
        this.CommonServiceService.selectedOption = event;
    };
    MainViewComponentComponent.prototype.changedHed = function (elem) {
        if (elem.value === "" || elem.value === "")
            return;
        this.CommonServiceService.selectedListitem.title = elem.value;
        this.titleEditable = false;
    };
    MainViewComponentComponent.prototype.commentedFun = function (elem) {
        if (elem.value === "" || elem.value === "")
            return;
        this.CommonServiceService.selectedListitem.comments.push(elem.value);
        elem.value = "";
    };
    MainViewComponentComponent.prototype.deletecomment = function (index) {
        this.CommonServiceService.selectedListitem.comments.splice(index, 1);
    };
    MainViewComponentComponent.prototype.openitemEdit = function () {
        var _this = this;
        this.modalRef2 = this.modalService.show(this.templateEditListitem, { class: 'modal-lg' });
        this.modalService.onHide.subscribe(function (reason) {
            _this.CommonServiceService.seletedList.refresh = true;
            _this.ChangeDetectorRef.detectChanges();
            _this.CommonServiceService.seletedList.refresh = false;
        });
    };
    MainViewComponentComponent.prototype.deleteElem = function () {
        var _this = this;
        var ind = this.CommonServiceService.seletedList.itemsInList.findIndex(function (a) {
            return a.id === _this.CommonServiceService.selectedListitem.id;
        });
        this.CommonServiceService.seletedList.itemsInList.splice(ind, 1);
        this.modalRef2.hide();
    };
    MainViewComponentComponent.prototype.moveElemt = function (event, control) {
        this.inputString = null;
        this.modalRef2.hide();
        this.ChangeDetectorRef.detectChanges();
        this.inputString = control;
        this.ChangeDetectorRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateBoard'),
        __metadata("design:type", Object)
    ], MainViewComponentComponent.prototype, "templateBoard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateEditListitem'),
        __metadata("design:type", Object)
    ], MainViewComponentComponent.prototype, "templateEditListitem", void 0);
    MainViewComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view-component',
            template: __webpack_require__(/*! ./main-view-component.component.html */ "./src/app/main-view-component/main-view-component.component.html"),
            styles: [__webpack_require__(/*! ./main-view-component.component.css */ "./src/app/main-view-component/main-view-component.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _common_service_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MainViewComponentComponent);
    return MainViewComponentComponent;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.css":
/*!*******************************************!*\
  !*** ./src/app/popup/popup.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listStyle {\r\n    height: 30px;\r\n    padding: 4px;\r\n    border-bottom: 1px #00000017 solid;\r\n    cursor: pointer;\r\n    margin-top: 5px;\r\n    background-color: #00000012;\r\n}\r\n\r\n.listStyle:hover {\r\n    background-color: #0000003d;\r\n    text-decoration: underline;\r\n    color: white;\r\n}\r\n\r\n.listUlStyle {\r\n    list-style: none;\r\n    padding-left: 4px;\r\n}\r\n\r\n.menuLabel {\r\n    margin-right: 30px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #350035;\r\n}\r\n\r\n.menudrop {\r\n    width: 200px;\r\n    height: 40px;\r\n    border-radius: 6px;\r\n    border: 1px #3d04c1 solid;\r\n    padding: 8px;\r\n}\r\n\r\n.board-label {\r\n    display: inline;\r\n    vertical-align: middle;\r\n    font-size: 17px;\r\n    padding-left: 35px;\r\n}\r\n\r\n.bord-checkbox {\r\n    vertical-align: middle;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 14px;\r\n    display: inline;\r\n}\r\n\r\n.board-btn {\r\n    padding-bottom: 1em;\r\n    padding-left: 2em;\r\n    margin-top: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAvcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdFN0eWxlIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCAjMDAwMDAwMTcgc29saWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTI7XHJcbn1cclxuXHJcbi5saXN0U3R5bGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saXN0VWxTdHlsZSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5tZW51TGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMzUwMDM1O1xyXG59XHJcblxyXG4ubWVudWRyb3Age1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggIzNkMDRjMSBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmJvYXJkLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbi5ib3JkLWNoZWNrYm94IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmJvYXJkLWJ0biB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/popup/popup.component.html":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Move/Copy card-->\r\n<div *ngIf=\"this.CommonServiceService.selectedOption==='Move' || this.CommonServiceService.selectedOption==='Copy'\">\r\n  <div>\r\n    <div style=\"padding: 15px;\"><span class=\"menuLabel\" style=\"margin-right: 47px;\">Board</span>\r\n      <select [(ngModel)]=\"selectedBoard\" class=\"menudrop\" (ngModelChange)=\"boardChange($event)\">\r\n        <option *ngFor=\"let item of this.CommonServiceService.boards\" [ngValue]=\"item\">{{item.title}}</option>\r\n      </select></div>\r\n  </div>\r\n  <div>\r\n    <div style=\"padding: 15px;\"><span class=\"menuLabel\" style=\"margin-right: 65px;\">List</span>\r\n      <select [(ngModel)]=\"selectedList\" class=\"menudrop\" (ngModelChange)=\"listChange($event)\">\r\n        <option *ngFor=\"let item of selectedBoard.list\" [ngValue]=\"item\">{{item.title}}</option>\r\n      </select></div>\r\n    <div style=\"padding: 15px;\"><span class=\"menuLabel\">Position</span>\r\n      <select [(ngModel)]=\"selectedPosition\" class=\"menudrop\">\r\n        <option *ngFor=\"let item of selectedList.itemsInList;let i=index\" [ngValue]=\"i\">{{i}}</option>\r\n      </select></div>\r\n  </div><input type=\"submit\" class=\"btn btn-success\" style=\"margin-left: 15px;\" (click)=\"commit()\"\r\n    [value]=\"this.CommonServiceService.selectedOption==='Move'?'Move Card':'Copy Card'\">\r\n</div>\r\n\r\n<!--List Menu-->\r\n<div *ngIf=\"this.CommonServiceService.selectedOption==='List Menu'\">\r\n  <ul class=\"listUlStyle\">\r\n    <li class=\"listStyle\"><a (click)=\"triggerEvent('Copy Menu')\">Copy List</a></li>\r\n    <li class=\"listStyle\"><a (click)=\"triggerEvent('Move Menu')\">Move List</a></li>\r\n  </ul>\r\n</div>\r\n\r\n<!--Move/Copy List-->\r\n<div\r\n  *ngIf=\"this.CommonServiceService.selectedOption==='Move Menu' || this.CommonServiceService.selectedOption==='Copy Menu'\">\r\n  <div>\r\n    <div style=\"padding: 15px;\"><span class=\"menuLabel\" style=\"margin-right: 47px;\">Board</span>\r\n      <select class=\"menudrop\" [(ngModel)]=\"selectedBoard\" (ngModelChange)=\"boardChange($event)\">\r\n        <option *ngFor=\"let item of this.CommonServiceService.boards\" [ngValue]=\"item\">{{item.title}}</option>\r\n      </select></div>\r\n  </div>\r\n  <div>\r\n    <div style=\"padding: 15px;\"><span class=\"menuLabel\">Position</span>\r\n      <select class=\"menudrop\" [(ngModel)]=\"selectedPosition\">\r\n        <option *ngFor=\"let item of selectedBoard.list;let i=index\" [ngValue]=\"i\">{{i}}</option>\r\n      </select></div>\r\n  </div><input class=\"btn btn-success\" style=\"margin-left: 15px;\" type=\"submit\" (click)=\"commit()\"\r\n    [value]=\"this.CommonServiceService.selectedOption==='Move Menu'?'Move List':'Copy List'\">\r\n\r\n</div>\r\n\r\n<!--Delete Boards-->\r\n<div *ngIf=\"CommonServiceService.selectedOption==='Board Menu'\">\r\n  <div>\r\n    <div *ngFor=\"let board of CommonServiceService.boards\" style=\"margin-bottom: 5px;\">\r\n      <label class=\"board-label\">\r\n        <input class=\"bord-checkbox\" type=\"checkbox\" name=\"checklists\" [(ngModel)]=\"board.del\">{{board.title}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"board-btn\"><input class=\"btn btn-success\" type=\"submit\" (click)=\"commit()\" value=\"Delete\"></div>\r\n</div>\r\n\r\n\r\n<!--Delete Lists/Cards together for particular board-->\r\n<div *ngIf=\"CommonServiceService.selectedOption==='Delete Multiple'\">\r\n\r\n  <div style=\"padding: 35px;\">\r\n\r\n    <div *ngFor=\"let list of CommonServiceService.selectedBoard.list\" style=\"margin-bottom: 15px;\">\r\n      <label style=\"font-size: 18px;\r\n              font-weight: 600;\r\n              color: #521052;\">List</label><br>\r\n      <label style=\"display: inline;\r\n        vertical-align: middle;\r\n        font-size: 15px;\r\n        font-weight: 400;\">\r\n        <input style=\"vertical-align: middle; display: inline;width:20px;height:20px;margin-right: 5px;\" type=\"checkbox\"\r\n          name=\"checklists\" [(ngModel)]=\"list.del\">{{list.title}}</label>\r\n      <br>\r\n      <label style=\"    margin-top: 15px;\r\n          padding-left: 10px;\r\n          color: #521052;\">Cards</label>\r\n      <br>\r\n      <div style=\"padding-left: 10px;\r\n          font-weight: 400;\" *ngFor=\"let card of list.itemsInList\">\r\n        <label style=\"display: inline;vertical-align: middle;font-size: 17px;padding-left: 12px;\">\r\n          <input style=\"vertical-align: middle; display: inline;width:20px;height:20px;margin-right: 5px;\"\r\n            type=\"checkbox\" name=\"checklists\" [(ngModel)]=\"card.del\">{{card.title}}</label></div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div style=\"padding-bottom: 1em;padding-left: 1em;\"><input class=\"btn btn-success\" type=\"submit\" (click)=\"commit()\"\r\n      value=\"Delete\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-service.service */ "./src/app/common-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupComponent = /** @class */ (function () {
    function PopupComponent(CommonServiceService, modalService) {
        this.CommonServiceService = CommonServiceService;
        this.modalService = modalService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.upDateboards = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PopupComponent.prototype.ngOnInit = function () {
        this.selectedBoard = this.CommonServiceService.boards[0];
        this.selectedList = this.selectedBoard.list[0];
        this.selectedPosition = 0;
    };
    PopupComponent.prototype.boardChange = function (event) {
        console.log(event);
        this.selectedList = event.list[0];
        this.selectedPosition = 0;
    };
    PopupComponent.prototype.listChange = function (event) {
        this.selectedPosition = 0;
    };
    PopupComponent.prototype.commit = function () {
        var _this = this;
        if (this.CommonServiceService.selectedOption === 'Move') {
            var ind = this.CommonServiceService.seletedList.itemsInList.findIndex(function (a) {
                return a.id === _this.CommonServiceService.selectedListitem.id;
            });
            var data = this.CommonServiceService.seletedList.itemsInList.splice(ind, 1);
            var dataCopy = Object.assign({}, data[0]);
            this.selectedList.itemsInList.splice(this.selectedPosition, 0, dataCopy);
            this.CommonServiceService.seletedList.refresh = true;
            this.CommonServiceService.seletedList.refresh = false;
        }
        else if (this.CommonServiceService.selectedOption === "Move Menu") {
            var ind = this.CommonServiceService.selectedBoard.list.findIndex(function (a) {
                return a.id === _this.CommonServiceService.seletedList.id;
            });
            var data = this.CommonServiceService.selectedBoard.list.splice(ind, 1);
            var data2 = Object.assign({}, data[0]);
            this.selectedBoard.list.splice(this.selectedPosition, 0, data2);
        }
        else if (this.CommonServiceService.selectedOption === "Copy Menu") {
            var ind = this.CommonServiceService.selectedBoard.list.findIndex(function (a) {
                return a.id === _this.CommonServiceService.seletedList.id;
            });
            var data = this.CommonServiceService.selectedBoard.list[ind];
            var data2 = Object.assign({}, data);
            this.selectedBoard.list.splice(this.selectedPosition, 0, data2);
        }
        else if (this.CommonServiceService.selectedOption === "Board Menu") {
            this.CommonServiceService.boards = this.CommonServiceService.boards.filter(function (a) {
                return !a.del;
            });
            this.CommonServiceService.isboardview = false;
            this.upDateboards.emit('viewChange');
        }
        else if (this.CommonServiceService.selectedOption === "Delete Multiple") {
            this.CommonServiceService.selectedBoard.list = this.CommonServiceService.selectedBoard.list.filter(function (a) {
                return !a.del;
            });
            this.CommonServiceService.selectedBoard.list.forEach(function (element) {
                element.itemsInList = element.itemsInList.filter(function (a) {
                    return !a.del;
                });
                element.refresh = true;
                element.refresh = false;
            });
        }
        else {
            var dataCopy = Object.assign({}, this.CommonServiceService.selectedListitem);
            this.selectedList.itemsInList.splice(this.selectedPosition, 0, dataCopy);
            this.CommonServiceService.seletedList.refresh = true;
            this.CommonServiceService.seletedList.refresh = false;
        }
        this.closeBtn();
        this.CommonServiceService.isitemEdited = false;
        this.CommonServiceService.isitemContentEdited = false;
    };
    PopupComponent.prototype.closeBtn = function () {
        this.close.emit('close');
    };
    PopupComponent.prototype.triggerEvent = function (control) {
        this.CommonServiceService.selectedOption = control;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "upDateboards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateList'),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "templateList", void 0);
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\ang_Clone_Trlo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map