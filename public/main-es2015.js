(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<ng-flash-message></ng-flash-message>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"><br><br>\r\n    <div id=\"header1\">\r\n        <h2 class=\"page-header\">Dashboard</h2>\r\n        <h6>To Manage Your Todos</h6>\r\n    </div>\r\n    <div id=\"header\">\r\n        <input type=\"text\" placeholder=\"Enter An Activity\" #item>\r\n        <button (click)=\"addTodo(item)\">\r\n            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><g><path class=\"fill\" d=\"M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z\"/></g></svg>\r\n        </button>\r\n    </div>\r\n    <div id=\"todos\">\r\n        <h5 class=\"todo\" *ngFor=\"let todo of todos\" [ngClass]=\"{'completed':todo.completed}\">\r\n            <input type=\"checkbox\" style=\"float: left;margin:20px;\" (change)=\"onToggle(todo)\">\r\n            {{ todo.title }}\r\n            <button (click)=\"deleteTodo(todo._id)\" class=\"btn btn-danger\" style=\"margin-top:5px;margin-right:5px;float: right;\">\r\n                Delete \r\n            </button>\r\n        </h5>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!user\">\r\n    you are not logged in\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron text-center\">\n    <h1>Full Stack Todo App</h1>\n    <p class=\"lead\">Welcome to our custom todo application built from scratch</p>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a><br>or<br>\n      <a class=\"btn btn-danger\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>Nest JS Backend</h3>\n      <p>A rock solid NestJS server using Mongoose to organize models and query the database</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Angular-CLI</h3>\n      <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>JWT Tokens</h3>\n      <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 class=\"page-header\">Login</h2>\n    <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" [(ngModel)]=\"uname\" name=\"uname\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" [(ngModel)]=\"passw\" name=\"passw\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" (click)=\"onLoginSubmit()\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\">Todo App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n        <ul class=\"navbar-nav nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/register\">Register<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/login\">Login<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/dashboard\">Dashboard <span class=\"sr-only\">(current)</span></a>\n            </li> \n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/profile\">Profile <span class=\"sr-only\">(current)</span></a>\n            </li> \n        </ul>\n        <ul class=\"navbar-nav nav navbar-right\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"logout()\">Logout <span class=\"sr-only\">(current)</span></a>\n            </li>    \n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"><br><br>\n    <h2 class=\"page-header\">{{ user.name }}</h2><br><br><hr>\n    <div>\n        Email: {{ user.email }}\n        <hr>\n        Username: {{ user.uname }}\n        <hr>\n    </div>\n</div>\n<div *ngIf=\"!user\">\n    you are not logged in\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 class=\"page-header\">Register</h2>\n    <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" [(ngModel)]=\"uname\" name=\"uname\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n    </div>\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" [(ngModel)]=\"passw\" name=\"passw\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" (click)=\"onRegisterSubmit()\">\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");








const routes = [{
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
    },
    {
        path: "profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _validateService_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validateService/validate.service */ "./src/app/validateService/validate.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessagesModule"].forRoot()
        ],
        providers: [_validateService_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, input, button {\r\nfont-family: 'Roboto', sans-serif;\r\n}\r\nbody{\r\n    background: #edf0f1;\r\n    padding: 100px 0 0 0;\r\n}\r\n#header1{\r\n    width: 100%;\r\n    height: 100px;\r\n    /* position: fixed; */\r\n    padding: 15px;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 5;\r\n    background: #25b99a;\r\n    box-shadow: 0px 2px 4px rgba(44,62,80,0.15);\r\n}\r\n#todos{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: auto;\r\n    padding: 15px;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 5;\r\n    background: #276de6;\r\n    box-shadow: 0px 2px 4px rgba(44,62,80,0.15);\r\n    border-bottom-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    border-top-left-radius: 10px;\r\n}\r\n#header{\r\n    width: 100%;\r\n    height: 80px;\r\n    /* position: fixed; */\r\n    padding: 15px;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 5;\r\n    background: #25b99a;\r\n    box-shadow: 0px 2px 4px rgba(44,62,80,0.15);\r\n    border-bottom-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n}\r\n#header input {\r\nwidth: 80%;\r\nheight: 50px;\r\nfloat: left;\r\ncolor: #fff;\r\nfont-size: 15px;\r\nfont-weight: 400;\r\ntext-indent: 18px;\r\npadding: 0 60px 0 0;\r\nbackground: rgba(255, 255, 255, 0.2);\r\nborder-radius: 5px 25px 25px 5px;\r\nborder: 0px;\r\nbox-shadow: none;\r\noutline: none;\r\n\r\n-webkit-appearance: none;\r\n-moz-appearance: none;\r\n}\r\n#header input::-webkit-input-placeholder {\r\ncolor: rgba(255, 255, 255, 0.75);\r\n}\r\n#header button {\r\nwidth: 50px;\r\nheight: 50px;\r\ntop:15px;\r\nright:15px;\r\nz-index:2;\r\nborder-radius: 25px;\r\nbackground: #fff;\r\nborder: 0px;\r\nbox-shadow: none;\r\noutline: none;\r\ncursor: pointer;\r\nmargin-left: -50px;\r\n\r\n-webkit-appearance: none;\r\n-moz-appearance: none;\r\n}\r\n#header button svg{\r\n    width: 16px;\r\n    height: 16px;\r\n    position: absolute;\r\n    margin: -7px 0 0 -7px\r\n}\r\n#header button svg .fill{\r\n    fill: #25b99a;\r\n}\r\n#todos .todo{\r\n    font-size: 14px;\r\n    font-weight: 200;\r\n    color: #444;\r\n    line-height: 50px;\r\n    width: 95%;\r\n    float: left;\r\n    height: 50px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    box-shadow: 0px 1px 2px rgba(44,62,80,0.10);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n}\r\n.completed{\r\n    text-decoration: line-through;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsZ0NBQWdDO0lBQ2hDLCtCQUErQjtBQUNuQztBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVk7QUFDWixXQUFXO0FBQ1gsV0FBVztBQUNYLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixvQ0FBb0M7QUFDcEMsZ0NBQWdDO0FBQ2hDLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsYUFBYTs7QUFFYix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osUUFBUTtBQUNSLFVBQVU7QUFDVixTQUFTO0FBQ1QsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixlQUFlO0FBQ2Ysa0JBQWtCOztBQUVsQix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakI7QUFDSjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGlucHV0LCBidXR0b24ge1xyXG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICNlZGYwZjE7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwIDAgMDtcclxufVxyXG4jaGVhZGVyMXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJhY2tncm91bmQ6ICMyNWI5OWE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDQ0LDYyLDgwLDAuMTUpO1xyXG59XHJcbiN0b2Rvc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjc2ZGU2O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSg0NCw2Miw4MCwwLjE1KTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG4jaGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjViOTlhO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSg0NCw2Miw4MCwwLjE1KTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG4jaGVhZGVyIGlucHV0IHtcclxud2lkdGg6IDgwJTtcclxuaGVpZ2h0OiA1MHB4O1xyXG5mbG9hdDogbGVmdDtcclxuY29sb3I6ICNmZmY7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxudGV4dC1pbmRlbnQ6IDE4cHg7XHJcbnBhZGRpbmc6IDAgNjBweCAwIDA7XHJcbmJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuYm9yZGVyLXJhZGl1czogNXB4IDI1cHggMjVweCA1cHg7XHJcbmJvcmRlcjogMHB4O1xyXG5ib3gtc2hhZG93OiBub25lO1xyXG5vdXRsaW5lOiBub25lO1xyXG5cclxuLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4tbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuI2hlYWRlciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbmNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG59XHJcbiNoZWFkZXIgYnV0dG9uIHtcclxud2lkdGg6IDUwcHg7XHJcbmhlaWdodDogNTBweDtcclxudG9wOjE1cHg7XHJcbnJpZ2h0OjE1cHg7XHJcbnotaW5kZXg6MjtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxuYmFja2dyb3VuZDogI2ZmZjtcclxuYm9yZGVyOiAwcHg7XHJcbmJveC1zaGFkb3c6IG5vbmU7XHJcbm91dGxpbmU6IG5vbmU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxubWFyZ2luLWxlZnQ6IC01MHB4O1xyXG5cclxuLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4tbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuI2hlYWRlciBidXR0b24gc3Zne1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IC03cHggMCAwIC03cHhcclxufVxyXG4jaGVhZGVyIGJ1dHRvbiBzdmcgLmZpbGx7XHJcbiAgICBmaWxsOiAjMjViOTlhO1xyXG59XHJcbiN0b2RvcyAudG9kb3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoNDQsNjIsODAsMC4xMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG59XHJcbi5jb21wbGV0ZWR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let DashboardComponent = class DashboardComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.todos = [];
        this.user = JSON.parse(localStorage.getItem("user"));
        if (!this.user) {
            this.router.navigate(['login']);
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json",
            "auth": localStorage.getItem("id_token")
        });
        this.http.post("/todos/getAll", {},{ headers }).subscribe(data => {
            data["todos"].forEach(element => {
                element.completed = false;
                this.todos.push(element);
            });
        });
    }
    ngOnInit() {
        console.log(this.todos);
    }
    addTodo(todo) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json",
            "auth": localStorage.getItem("id_token")
        });
        this.http.post("/todos/add", { "title": todo.value }, { headers }).subscribe(data => {
            this.todos.push(data["todo"]);
        });
        todo.value = "";
    }
    deleteTodo(id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json",
            "auth": localStorage.getItem("id_token")
        });
        this.http.post("/todos/delete/" + id, {}, { headers }).subscribe(data => {
            window.location.reload();
        });
    }
    onToggle(todo) {
        todo.completed = !todo.completed;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(ngFlashMessageService, http, router) {
        this.ngFlashMessageService = ngFlashMessageService;
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        var user = {
            uname: this.uname,
            passw: this.passw
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": 'application/json'
        });
        this.http.post("/users/auth", user, { headers: headers }).subscribe(res => {
            if (res["success"] == "false") {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [res["msg"]],
                    dismissible: true,
                    timeout: false,
                    type: 'danger'
                });
            }
            else {
                localStorage.setItem("id_token", res['token']);
                localStorage.setItem("user", JSON.stringify(res["user"]));
                this.token = res["token"];
                this.user = res["user"];
                this.ngFlashMessageService.showFlashMessage({
                    messages: ["You are now logged in"],
                    dismissible: true,
                    timeout: false,
                    type: 'success'
                });
                this.router.navigate(["dashboard"]);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(ngFlashMessageService, router) {
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.loggedIn = false;
        if (localStorage.getItem("users")) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    }
    ngOnInit() {
    }
    logout() {
        localStorage.clear();
        this.ngFlashMessageService.showFlashMessage({
            messages: ["You are now logged out"],
            dismissible: true,
            timeout: false,
            type: 'success'
        });
        this.router.navigate(['login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProfileComponent = class ProfileComponent {
    constructor(router) {
        this.router = router;
        this.user = JSON.parse(localStorage.getItem("user"));
        if (!this.user) {
            this.router.navigate(['login']);
        }
    }
    ngOnInit() {
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _validateService_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validateService/validate.service */ "./src/app/validateService/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(vs, ngFlashMessageService, http, router) {
        this.vs = vs;
        this.ngFlashMessageService = ngFlashMessageService;
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        var user = ({
            name: this.name,
            email: this.email,
            uname: this.uname,
            passw: this.passw,
        });
        if (!this.vs.validateRegister(user)) {
            var msg = "please fill in all fields";
            this.ngFlashMessageService.showFlashMessage({
                messages: [msg],
                dismissible: true,
                timeout: false,
                type: 'danger'
            });
            return false;
        }
        else if (!this.vs.validateEmail(user.email)) {
            var msg = "please use a valid email";
            this.ngFlashMessageService.showFlashMessage({
                messages: [msg],
                dismissible: true,
                timeout: false,
                type: 'danger'
            });
            return false;
        }
        else {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": 'application/json'
            });
            this.http.post("/users/add", user, { headers: headers }).subscribe(res => {
                this.ngFlashMessageService.showFlashMessage({
                    messages: ["You may now log in"],
                    dismissible: true,
                    timeout: false,
                    type: 'success'
                });
                this.router.navigate(["login"]);
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _validateService_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/validateService/validate.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/validateService/validate.service.ts ***!
  \*****************************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidateService = class ValidateService {
    constructor() { }
    validateRegister(user) {
        if (user.name == undefined || user.email == undefined || user.uname == undefined || user.passw == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};
ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ValidateService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vedant\Documents\NodeJs Projects\Nest\todo-app\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map