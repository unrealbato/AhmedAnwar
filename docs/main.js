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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-experience/work-experience.component */ "./src/app/work-experience/work-experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./technical-skills/technical-skills.component */ "./src/app/technical-skills/technical-skills.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _misc_misc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./misc/misc.component */ "./src/app/misc/misc.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: 'work-experience',
        component: _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceComponent"]
    },
    {
        path: 'education',
        component: _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"]
    },
    {
        path: 'technical-skills',
        component: _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_5__["TechnicalSkillsComponent"]
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
    },
    {
        path: 'misc',
        component: _misc_misc_component__WEBPACK_IMPORTED_MODULE_7__["MiscComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\" *ngIf=\"!ShowMe else Resume\">\n  <img id=\"Cat\" src=\"assets/dev_cat.gif\" type=\"gif\" />\n</div>\n\n<ng-template #Resume>\n  <mat-sidenav-container  class=\"container\">\n    <mat-sidenav [mode]=\"SideMode\" [opened]=\"Drawer\" class=\"sideNav\">\n      <mat-card>\n        <mat-card-header>\n        </mat-card-header>\n        <mat-card-title>Ahmed Anwar</mat-card-title>\n        <mat-card-subtitle>Full Stack Web developer</mat-card-subtitle>\n        <img mat-card-image src=\"../assets/profile.jpg\">\n        <mat-card-content>\n          <mat-action-list>\n            <button mat-list-item routerLink=\"\">Home</button>\n            <button mat-list-item routerLink=\"work-experience\">Work Experience</button>\n            <button mat-list-item routerLink=\"education\">Education</button>\n            <button mat-list-item routerLink=\"technical-skills\">Technical Skills</button>\n            <button mat-list-item routerLink=\"projects\">Projects</button>\n            <button mat-list-item routerLink=\"misc\">Misc</button>\n          </mat-action-list>\n          <mat-divider></mat-divider>\n          <mat-list dense>\n            <mat-list-item>\n              <mat-icon mat-list-icon>email</mat-icon>\n              <p>ahmed.icti5@gmail.com</p>\n            </mat-list-item>\n            <mat-list-item>\n              <mat-icon mat-list-icon>phone</mat-icon>\n              <p>01274258218</p>\n            </mat-list-item>\n            <mat-list-item>\n              <mat-icon mat-list-icon>map</mat-icon>\n              <p>Haram - Giza, Egypt</p>\n            </mat-list-item>\n            <mat-list-item>\n              <mat-icon mat-list-icon>web</mat-icon>\n              <a href=\"https://unrealbato.github.io/resume\" target=\"_blank\">unrealbato.github.io/resume</a>\n            </mat-list-item>\n            <mat-list-item>\n              <mat-icon mat-list-icon>linked</mat-icon>\n              <a href=\"https://www.linkedin.com/in/ahmedroot/\" target=\"_blank\">https://www.linkedin.com/in/ahmedroot/</a>\n            </mat-list-item>\n          </mat-list>\n        </mat-card-content>\n      </mat-card>\n\n\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <mat-toolbar>\n        <button mat-button (click)=\"Drawer = !Drawer\">\n          <mat-icon>menu</mat-icon>\n        </button>\n        <span class=\"capitalize\">{{title}}</span>\n      </mat-toolbar>\n      <div class=\"mainContent\">\n        <router-outlet></router-outlet>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</ng-template>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  min-height: 100vh; }\n\n.sideNav {\n  width: 35vw; }\n\n.content {\n  width: 65vw; }\n\n@media only screen and (max-width: 991px) {\n  .sideNav {\n    width: 75vw; }\n  .content {\n    width: 100vw; } }\n\nmat-sidenav-container {\n  padding: 0; }\n\nmat-sidenav {\n  min-height: 100vh; }\n\nmat-sidenav-content {\n  min-height: 100vh; }\n\nmat-list {\n  width: 100%;\n  word-break: break-word; }\n\nimg {\n  width: 100%;\n  height: auto;\n  margin: unset !important; }\n\n.capitalize {\n  text-transform: capitalize; }\n\n#Cat {\n  position: absolute;\n  width: 30vw;\n  height: auto;\n  left: 50vw;\n  top: 50vh;\n  margin-right: -50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RzXFxteS1yZXN1bWUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUFJSDtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF1QixFQUFBOztBQUd6QjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVye1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc2lkZU5hdntcclxuICB3aWR0aDogMzV2dztcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgd2lkdGg6IDY1dnc7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCkge1xyXG4gIC5zaWRlTmF2e1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgfVxyXG5cclxuICAuY29udGVudHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbn1cclxuXHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubWF0LXNpZGVuYXZ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbm1hdC1saXN0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbmltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiB1bnNldCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXBpdGFsaXplIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuI0NhdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGxlZnQ6IDUwdnc7XHJcbiAgdG9wOiA1MHZoO1xyXG4gIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.Drawer = true;
        this.SideMode = 'side';
        this.ShowMe = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium
        ]).subscribe(function (result) {
            if (result.matches) {
                _this.SideMode = 'side';
                _this.Drawer = true;
            }
            else {
                _this.SideMode = 'over';
                _this.Drawer = true;
            }
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.title = event.url.replace('/', '').replace('-', ' ');
                if (_this.title === '') {
                    _this.title = 'Home';
                }
            }
        });
        setTimeout(function () { return _this.ShowMe = true; }, 50);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work-experience/work-experience.component */ "./src/app/work-experience/work-experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./technical-skills/technical-skills.component */ "./src/app/technical-skills/technical-skills.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _misc_misc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./misc/misc.component */ "./src/app/misc/misc.component.ts");
/* harmony import */ var _project_shots_project_shots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-shots/project-shots.component */ "./src/app/project-shots/project-shots.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_7__["WorkExperienceComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                _technical_skills_technical_skills_component__WEBPACK_IMPORTED_MODULE_9__["TechnicalSkillsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _misc_misc_component__WEBPACK_IMPORTED_MODULE_11__["MiscComponent"],
                _project_shots_project_shots_component__WEBPACK_IMPORTED_MODULE_12__["ProjectShotsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            ],
            entryComponents: [
                _project_shots_project_shots_component__WEBPACK_IMPORTED_MODULE_12__["ProjectShotsComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentContainer\">\n  <mat-card>\n    <mat-card-title>B.SC in Engineering</mat-card-title>\n    <mat-card-subtitle>\n      <h2>Modern Academy</h2>\n      <p>2009</p>\n    </mat-card-subtitle>\n    <mat-card-content>\n      <mat-list>\n        <mat-list-item>\n          <mat-icon mat-list-icon>class</mat-icon>\n          <h4 mat-line>Electronics & Communication Tech<br/><span>Very Good With Honor</span></h4>\n        </mat-list-item>\n        <mat-list-item>\n          <h2 mat-line></h2>\n        </mat-list-item>\n      </mat-list>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/education/education.component.sass":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-top: 5px; }\n\nspan {\n  color: gray;\n  font-family: \"Fira Code\";\n  font-size: small;\n  font-weight: bold; }\n\nh1 {\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL0M6XFxwcm9qZWN0c1xcbXktcmVzdW1lL3NyY1xcYXBwXFxlZHVjYXRpb25cXGVkdWNhdGlvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxuc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuaDEge1xuICBmb250LXNpemU6IDIwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.sass */ "./src/app/education/education.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentContainer\">\n  <div>\n    <h1 style=\"color:crimson\">Welcome, Sir!</h1>\n    <h3>Glade you have visited my portfolio, I'm Ahmed Anwar & maybe I could be your next potential candidate as a Web Developer.</h3>\n  </div>\n\n  <div>\n    <h2 style=\"color:crimson\">Let me guide you to know me better</h2>\n    <h3>My experience 1+ year as full-stack dev plus operation tasks such as server deployment and OS environment stack configuration, please refer to my work experience for more details.</h3>\n  </div>\n\n  <div>\n    <h4>I'm Currently Looking for a job opportunity as JS  developer preferable Angular, However, I have expertise with VueJS, Vuetify & Bootstrap.</h4>\n  </div>\n\n  <div>\n    <button mat-raised-button><span>Status:</span> Looking for a suitable opportunity</button>\n   </div>\n    <div>\n      <button mat-raised-button><span>Availability:</span> 2 Weeks</button>\n    </div>\n    <div>\n      <button mat-raised-button><span>Salary:</span> $$$$</button>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  color: maroon !important;\n  margin: auto; }\n\nspan {\n  font-size: 17px;\n  font-weight: bold;\n  font-family: \"Fira Code\";\n  color: green; }\n\n.mat-list-text {\n  color: maroon !important; }\n\nbutton {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxccHJvamVjdHNcXG15LXJlc3VtZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSx3QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGNvbG9yOiBtYXJvb24haW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG87IH1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICBjb2xvcjogZ3JlZW47IH1cblxuLm1hdC1saXN0LXRleHQge1xuICBjb2xvcjogbWFyb29uIWltcG9ydGFudDsgfVxuXG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/misc/misc.component.html":
/*!******************************************!*\
  !*** ./src/app/misc/misc.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentContainer\">\n  <mat-card>\n    <mat-card-title>SKILLS & COMPETENCES</mat-card-title>\n    <mat-card-content>\n      <mat-list>\n        <mat-list-item>Goal Oriented</mat-list-item>\n        <mat-list-item>Time Management</mat-list-item>\n        <mat-list-item>Critical Thinking</mat-list-item>\n        <mat-list-item>Research & Strategy</mat-list-item>\n        <mat-list-item>Supportive</mat-list-item>\n        <mat-list-item>Integrity</mat-list-item>\n        <mat-list-item>\n          <h3 matLine>Certificate of Good Conduct</h3>\n          <h4 matLine>Military Service</h4>\n        </mat-list-item>\n      </mat-list>\n    </mat-card-content>\n  </mat-card>\n\n\n  <mat-card>\n    <mat-card-title>LANGUAGES</mat-card-title>\n    <mat-card-content>\n      <div id=\"lang\">\n        <section>\n          <h2>English</h2>\n          <p>Professional Working Proficiency</p>\n        </section>\n        <section>\n          <h2>Arabic</h2>\n          <p>Native or Bilingual Proficiency</p>\n        </section>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-title>INTERESTS</mat-card-title>\n    <mat-card-content>\n      <mat-chip-list>\n        <mat-chip>Science</mat-chip>\n        <mat-chip>Philosophy</mat-chip>\n        <mat-chip>Nutrition</mat-chip>\n        <mat-chip>Coffee</mat-chip>\n        <mat-chip>Gaming</mat-chip>\n        <mat-chip>Technology</mat-chip>\n      </mat-chip-list>\n    </mat-card-content>\n  </mat-card>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/misc/misc.component.sass":
/*!******************************************!*\
  !*** ./src/app/misc/misc.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-chip-list div {\n  width: 30%; }\n\nmat-card {\n  margin-top: 5px; }\n\nfigure.mat-figure {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important; }\n\n#lang {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  align-content: center;\n  flex-wrap: wrap; }\n\n#lang section {\n    display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzYy9DOlxccHJvamVjdHNcXG15LXJlc3VtZS9zcmNcXGFwcFxcbWlzY1xcbWlzYy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLFVBQVUsRUFBQTs7QUFFZDtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSx1Q0FBZ0M7RUFBaEMsd0NBQWdDO1VBQWhDLGlDQUFnQyxFQUFBOztBQUVsQztFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDhCQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFMakI7SUFRSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21pc2MvbWlzYy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubWF0LWNoaXAtbGlzdCB7XG4gIGRpdiB7XG4gICAgd2lkdGg6IDMwJTsgfSB9XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNXB4OyB9XG5cbmZpZ3VyZS5tYXQtZmlndXJlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiFpbXBvcnRhbnQ7IH1cblxuI2xhbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/misc/misc.component.ts":
/*!****************************************!*\
  !*** ./src/app/misc/misc.component.ts ***!
  \****************************************/
/*! exports provided: MiscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscComponent", function() { return MiscComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MiscComponent = /** @class */ (function () {
    function MiscComponent() {
    }
    MiscComponent.prototype.ngOnInit = function () {
    };
    MiscComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-misc',
            template: __webpack_require__(/*! ./misc.component.html */ "./src/app/misc/misc.component.html"),
            styles: [__webpack_require__(/*! ./misc.component.sass */ "./src/app/misc/misc.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MiscComponent);
    return MiscComponent;
}());



/***/ }),

/***/ "./src/app/project-shots/project-shots.component.html":
/*!************************************************************!*\
  !*** ./src/app/project-shots/project-shots.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.name}} project</h1>\n<div mat-dialog-content>\n  <img [src]=\"shotSrc()\" alt=\"{{data.name}}\">\n</div>\n"

/***/ }),

/***/ "./src/app/project-shots/project-shots.component.sass":
/*!************************************************************!*\
  !*** ./src/app/project-shots/project-shots.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  height: auto; }\n\nh1 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1zaG90cy9DOlxccHJvamVjdHNcXG15LXJlc3VtZS9zcmNcXGFwcFxccHJvamVjdC1zaG90c1xccHJvamVjdC1zaG90cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3Qtc2hvdHMvcHJvamVjdC1zaG90cy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87IH1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/project-shots/project-shots.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/project-shots/project-shots.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectShotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectShotsComponent", function() { return ProjectShotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ProjectShotsComponent = /** @class */ (function () {
    function ProjectShotsComponent(data) {
        this.data = data;
    }
    ProjectShotsComponent.prototype.ngOnInit = function () {
    };
    ProjectShotsComponent.prototype.shotSrc = function () {
        if (this.data.name === 'ad3ely') {
            return 'assets/projects/ad3ely_1.JPG';
        }
        if (this.data.name === 'salon') {
            return 'assets/projects/salon_1.JPG';
        }
        if (this.data.name === 'dr-egypt') {
            return 'assets/projects/dr-egypt_1.JPG';
        }
        if (this.data.name === 'viendofit') {
            return 'assets/projects/viendofit_1.JPG';
        }
    };
    ProjectShotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-shots',
            template: __webpack_require__(/*! ./project-shots.component.html */ "./src/app/project-shots/project-shots.component.html"),
            styles: [__webpack_require__(/*! ./project-shots.component.sass */ "./src/app/project-shots/project-shots.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProjectShotsComponent);
    return ProjectShotsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentContainer\">\n  <mat-card>\n    <mat-card-title>Ad3ely</mat-card-title>\n    <mat-card-subtitle>\n      <mat-chip-list>\n        <mat-chip>Angular</mat-chip>\n        <mat-chip>Firebase</mat-chip>\n        <mat-chip>Rxjs</mat-chip>\n        <mat-chip>Universal</mat-chip>\n      </mat-chip-list>\n    </mat-card-subtitle>\n    <mat-card-content>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Description\n          </mat-panel-title>\n          <mat-panel-description>\n            a social network for prayers\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ul>\n          <li><a href=\"https://ad3ely.com\" target=\"_blank\">Ad3ely.com</a></li>\n          <li>Angular as SPA\n            <ul>\n              <li>Ant Design Zorro as CSS Framework with Custom Styles</li>\n              <li>SCSS</li>\n            </ul>\n          </li>\n          <li>Firebase Integration using Angularfire2\n            <ul>\n              <li>Firestore / Storage / Hosting </li>\n              <li>Auth [ email&pass - Facebook - Twitter - Google ]\n                <ul>\n                  <li>Email Verification</li>\n                  <li>Password Reset</li>\n                </ul>\n              </li>\n              <li>Functions\n                <ul>\n                  <li>Server Side Rendering SSR using Angular Universal</li>\n                </ul>\n              </li>\n\n            </ul>\n          </li>\n          <li>Rxjs Observable</li>\n          <li>Google Analytics Integration\n            <ul>\n              <li>Angular Routing Event</li>\n            </ul>\n          </li>\n          <li>Server Deployment\n            <ul>\n              <li>Firebase Function / Hosting</li>\n            </ul>\n          </li>\n          <li ><button mat-button (click)=\"openDialog('ad3ely')\">Screen Shots</button></li>\n        </ul>\n      </mat-expansion-panel>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-title>Salon</mat-card-title>\n    <mat-card-subtitle>\n      <mat-chip-list>\n        <mat-chip>Laravel</mat-chip>\n        <mat-chip>Vuetify</mat-chip>\n        <mat-chip>Pusher</mat-chip>\n      </mat-chip-list>\n    </mat-card-subtitle>\n    <mat-card-content>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Description\n          </mat-panel-title>\n          <mat-panel-description>\n            Booking & Reservation\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ul>\n          <li><a href=\"https://https://salon-eg.com/en\" target=\"_blank\">salon-eg.com</a></li>\n          <li>Vuetify as Front-End Framework\n            <ul>\n              <li>Custom  Admin Panel</li>\n              <li>Custom Salon panel</li>\n            </ul>\n          </li>\n          <li>Laravel as Back-End\n            <ul>\n              <li>Eloquent <-> MySQL DB & Relations</li>\n              <li>Mobile Application API / Restful Resources</li>\n              <li>Pusher [Push Notification] Web & Mobile</li>\n              <li>Multi-authentication system</li>\n            </ul>\n          </li>\n          <li>Server Deployment\n            <ul>\n              <li>Cloud: DigitalOcean</li>\n              <li>OS: Ubuntu 18.04</li>\n              <li>Http Server: Nginx</li>\n            </ul>\n          </li>\n          <li ><button mat-button (click)=\"openDialog('salon')\">Screen Shots</button></li>\n        </ul>\n      </mat-expansion-panel>\n    </mat-card-content>\n  </mat-card>\n\n\n  <mat-card>\n    <mat-card-title>Dr. Egypt</mat-card-title>\n    <mat-card-subtitle>\n      <mat-chip-list>\n        <mat-chip>Laravel</mat-chip>\n        <mat-chip>Bootstrap</mat-chip>\n        <mat-chip>Vue</mat-chip>\n      </mat-chip-list>\n    </mat-card-subtitle>\n    <mat-card-content>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Description\n          </mat-panel-title>\n          <mat-panel-description>\n            Egypt Health Platform\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ul>\n          <li><a href=\"#\" target=\"_blank\">Dr Egypt</a></li>\n          <li>Bootstrap as Front-End Framework\n            <ul>\n              <li>Encapsulated using Vue Component</li>\n            </ul>\n          </li>\n          <li>Laravel as Back-End\n            <ul>\n              <li>Eloquent <-> MySQL DB & Relations</li>\n              <li>Mobile Application API / Restful Resources</li>\n              <li>Multi-authentication system</li>\n            </ul>\n          </li>\n          <li>Server Deployment\n            <ul>\n              <li>Cloud: DigitalOcean</li>\n              <li>OS: Ubuntu 18.04</li>\n              <li>Http Server: Nginx</li>\n            </ul>\n          </li>\n          <li ><button mat-button (click)=\"openDialog('dr-egypt')\">Screen Shots</button></li>\n        </ul>\n      </mat-expansion-panel>\n\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-title>Viendfit</mat-card-title>\n    <mat-card-subtitle>\n      <mat-chip-list>\n        <mat-chip>Laravel</mat-chip>\n        <mat-chip>Vue</mat-chip>\n        <mat-chip>JQuery</mat-chip>\n      </mat-chip-list>\n    </mat-card-subtitle>\n    <mat-card-content>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Description\n          </mat-panel-title>\n          <mat-panel-description>\n            Health & Nutrition Portal\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ul>\n          <li><a href=\"https://viendofit.com\" target=\"_blank\">viendofit.com</a></li>\n          <li>Vue / Bootsrtap front-end\n            <ul>\n              <li>Custom  Admin Panel</li>\n            </ul>\n          </li>\n          <li>Laravel as Back-End\n            <ul>\n              <li>Eloquent <-> MySQL DB & Relations</li>\n            </ul>\n          </li>\n          <li>Server Deployment\n            <ul>\n              <li>Cloud: DigitalOcean</li>\n            </ul>\n          </li>\n          <li ><button mat-button (click)=\"openDialog('viendofit')\">Screen Shots</button></li>\n        </ul>\n      </mat-expansion-panel>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.sass":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXHByb2plY3RzXFxteS1yZXN1bWUvc3JjXFxhcHBcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYXQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDVweDsgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _project_shots_project_shots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-shots/project-shots.component */ "./src/app/project-shots/project-shots.component.ts");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(dialog) {
        this.dialog = dialog;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.openDialog = function (projectName) {
        var dialogRef = this.dialog.open(_project_shots_project_shots_component__WEBPACK_IMPORTED_MODULE_3__["ProjectShotsComponent"], {
            height: 'auto',
            width: '80vw',
            data: { name: projectName }
        });
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.sass */ "./src/app/projects/projects.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/technical-skills/technical-skills.component.html":
/*!******************************************************************!*\
  !*** ./src/app/technical-skills/technical-skills.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentContainer\">\n  <mat-card>\n    <mat-card-title>Programming Languages</mat-card-title>\n    <mat-card-content>\n      <mat-chip-list>\n        <mat-chip color=\"yellow\" selected>JavaScript</mat-chip>\n        <mat-chip color=\"\">TypeScript</mat-chip>\n        <mat-chip color=\"\">PHP</mat-chip>\n      </mat-chip-list>\n    </mat-card-content>\n  </mat-card>\n\n<mat-card>\n  <mat-card-title>Frameworks</mat-card-title>\n  <mat-card-content>\n    <mat-chip-list>\n      <mat-chip color=\"\">Angular</mat-chip>\n      <mat-chip color=\"\">Nuxt</mat-chip>\n      <mat-chip color=\"\">Laravel</mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>libraries</mat-card-title>\n  <mat-card-content>\n    <mat-chip-list>\n      <mat-chip color=\"\">Vue</mat-chip>\n      <mat-chip color=\"\">Vuetify</mat-chip>\n      <mat-chip color=\"\">Ant Design</mat-chip>\n      <mat-chip color=\"\">Angular Material</mat-chip>\n      <mat-chip color=\"\">AngularFire2</mat-chip>\n      <mat-chip color=\"\">Firebase</mat-chip>\n      <mat-chip color=\"\">Bootstrap</mat-chip>\n      <mat-chip color=\"\">JQuery</mat-chip>\n      <mat-chip color=\"\">Moment</mat-chip>\n      <mat-chip color=\"\">Axios</mat-chip>\n      <mat-chip color=\"\">Pusher</mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Tools</mat-card-title>\n  <mat-card-content>\n    <mat-chip-list>\n      <mat-chip color=\"\">NPM</mat-chip>\n      <mat-chip color=\"\">Yarn</mat-chip>\n      <mat-chip color=\"\">Git</mat-chip>\n      <mat-chip color=\"\">PHP Storm</mat-chip>\n      <mat-chip color=\"\">VS Code</mat-chip>\n      <mat-chip color=\"\">Laragon</mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Misc</mat-card-title>\n  <mat-card-content>\n    <mat-chip-list>\n      <mat-chip color=\"\">Linux Admin</mat-chip>\n      <mat-chip color=\"\">Networking</mat-chip>\n      <mat-chip color=\"\">Research</mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Certificates</mat-card-title>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item>\n        <h3 matLine>Red Hat Certified Engineer</h3>\n        <h4 matLine>ID : 140 – 197 - 294</h4>\n      </mat-list-item>\n\n      <mat-list-item>\n        <h2 matLine>Red Hat Certified System Administrator</h2>\n        <h4 matLine>ID : 140 – 197 - 294</h4>\n      </mat-list-item>\n\n      <mat-list-item>\n        <h2 matLine>SYSTEL Training Center</h2>\n        <h4 matLine>Achievement Basic Telecommunication, Two Way Mobility Network\n          & Broadband</h4>\n      </mat-list-item>\n\n      <mat-list-item>\n        <h2 matLine>Military Service</h2>\n        <h4 matLine> Achievement Required Skills for Radar System Equipment, Alert &\n            Defense System</h4>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/technical-skills/technical-skills.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/technical-skills/technical-skills.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5pY2FsLXNraWxscy9DOlxccHJvamVjdHNcXG15LXJlc3VtZS9zcmNcXGFwcFxcdGVjaG5pY2FsLXNraWxsc1xcdGVjaG5pY2FsLXNraWxscy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNhbC1za2lsbHMvdGVjaG5pY2FsLXNraWxscy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubWF0LWNhcmQge1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/technical-skills/technical-skills.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/technical-skills/technical-skills.component.ts ***!
  \****************************************************************/
/*! exports provided: TechnicalSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalSkillsComponent", function() { return TechnicalSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechnicalSkillsComponent = /** @class */ (function () {
    function TechnicalSkillsComponent() {
        this.colors = [
            'primary', 'accent', 'warn'
        ];
    }
    TechnicalSkillsComponent.prototype.ngOnInit = function () {
    };
    TechnicalSkillsComponent.prototype.chipColor = function () {
        var index = 1;
        console.log(index);
        return this.colors[index];
    };
    TechnicalSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technical-skills',
            template: __webpack_require__(/*! ./technical-skills.component.html */ "./src/app/technical-skills/technical-skills.component.html"),
            styles: [__webpack_require__(/*! ./technical-skills.component.sass */ "./src/app/technical-skills/technical-skills.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechnicalSkillsComponent);
    return TechnicalSkillsComponent;
}());



/***/ }),

/***/ "./src/app/work-experience/work-experience.component.html":
/*!****************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentContainer\">\n<mat-card>\n  <mat-card-title>Web Developer</mat-card-title>\n  <mat-card-subtitle>\n    <p>Digitalsigma</p>\n    <p>06/2018 – 8/2019</p>\n    <p>Tasks</p>\n  </mat-card-subtitle>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item>- Responsible for server-side web application back-end using\n        Laravel Framework 5+ & API integration</mat-list-item>\n      <mat-list-item>- Front-end side Using Vue Js, Bootstrap, JQuery</mat-list-item>\n      <mat-list-item>- Database creation, integration & deployment process</mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Community Support Representative</mat-card-title>\n  <mat-card-subtitle>\n    <p>UBER</p>\n    <p>10/2016 – 05/2017</p>\n    <p>Tasks</p>\n  </mat-card-subtitle>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item>- Deliver high-quality service across multiple support platforms\n        (email, chat, phone)</mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n\n\n<mat-card>\n  <mat-card-title>Linux System Engineer</mat-card-title>\n  <mat-card-subtitle>\n    <p>Nutech</p>\n    <p>05/2015 – 03/2016</p>\n    <p>Tasks</p>\n  </mat-card-subtitle>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item>- Research & Development for Open Source Linux Based Solutions</mat-list-item>\n      <mat-list-item>- Assists With the integration of technologies</mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Samsung Mobile Service Engineer</mat-card-title>\n  <mat-card-subtitle>\n    <p>Union Group</p>\n    <p>11/2013 – 07/2014</p>\n    <p>Tasks</p>\n  </mat-card-subtitle>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item>- Fault Finding Repairs and Maintenance (Hardware/Software) of\n        Customer’s Mobiles</mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Technical Support</mat-card-title>\n  <mat-card-subtitle>\n    <p>IQ Networking</p>\n    <p>12/2012 – 05/2013</p>\n  </mat-card-subtitle>\n</mat-card>\n\n<mat-card>\n  <mat-card-title>Reserved Officer</mat-card-title>\n  <mat-card-subtitle>\n    <p>Egypt Armed Forces</p>\n    <p>01/2010 – 10/2012</p>\n  </mat-card-subtitle>\n</mat-card>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/work-experience/work-experience.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-top: 5px; }\n\np {\n  margin-bottom: 0;\n  margin-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay1leHBlcmllbmNlL0M6XFxwcm9qZWN0c1xcbXktcmVzdW1lL3NyY1xcYXBwXFx3b3JrLWV4cGVyaWVuY2VcXHdvcmstZXhwZXJpZW5jZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd29yay1leHBlcmllbmNlL3dvcmstZXhwZXJpZW5jZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubWF0LWNhcmQge1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/work-experience/work-experience.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.ts ***!
  \**************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkExperienceComponent = /** @class */ (function () {
    function WorkExperienceComponent() {
    }
    WorkExperienceComponent.prototype.ngOnInit = function () {
    };
    WorkExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-experience',
            template: __webpack_require__(/*! ./work-experience.component.html */ "./src/app/work-experience/work-experience.component.html"),
            styles: [__webpack_require__(/*! ./work-experience.component.sass */ "./src/app/work-experience/work-experience.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkExperienceComponent);
    return WorkExperienceComponent;
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

module.exports = __webpack_require__(/*! C:\projects\my-resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map