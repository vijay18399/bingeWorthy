"use strict";
(self["webpackChunkbingeWorthy"] = self["webpackChunkbingeWorthy"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_features_content_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/content/pages/home/home.component */ 337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  component: src_app_features_content_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  path: ''
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);




function AppComponent_nav_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \"horro movies\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \"time travel movies\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \"dc movies\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "search \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \"marvel movies\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "search \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \"thor 4\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppComponent_nav_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 10)(2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function AppComponent_nav_0_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11)(1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Explore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
  }
}
function AppComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav")(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BingeWorthy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_nav_0_div_3_Template, 23, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_nav_0_div_4_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_nav_0_ul_5_Template, 7, 6, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("searchbar", !ctx_r0.showSearchbar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showSearchbar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showSearchbar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showSearchbar);
  }
}
class AppComponent {
  constructor(router) {
    this.router = router;
    this.showSearchbar = true;
    this.showNavBar = true;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        console.log(event.url);
        this.showSearchbar = event.url != '/search';
        this.showNavBar = !(event.url == '/signin' || event.url == '/signup');
      }
    });
  }
  isLoggedIn() {
    return true;
    // return this.authService.isLoggedIn();
  }

  logout() {
    // this.authService.logout();
    this.router.navigate(['']);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 1,
  consts: [[3, "searchbar", 4, "ngIf"], ["routerLink", "/", 1, "brand", "m-l-16"], ["routerLink", "/search", "class", "search-container", 4, "ngIf"], ["class", "search-inputcontainer", 4, "ngIf"], ["class", "navbar", 4, "ngIf"], ["routerLink", "/search", 1, "search-container"], [1, "suggestions"], [1, "suggestion"], [1, "fa", "fa-search"], [1, "search-inputcontainer"], ["placeholder", "search for binge content", "type", "text"], [1, "navbar"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/explore", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 6, 5, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavBar);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  styles: [".m-2[_ngcontent-%COMP%] {\n  margin: 2px !important;\n}\n\n.p-2[_ngcontent-%COMP%] {\n  padding: 2px !important;\n}\n\n.m-t-2[_ngcontent-%COMP%] {\n  margin-top: 2px !important;\n}\n\n.p-t-2[_ngcontent-%COMP%] {\n  padding-top: 2px !important;\n}\n\n.m-b-2[_ngcontent-%COMP%] {\n  margin-bottom: 2px !important;\n}\n\n.p-b-2[_ngcontent-%COMP%] {\n  padding-bottom: 2px !important;\n}\n\n.m-l-2[_ngcontent-%COMP%] {\n  margin-left: 2px !important;\n}\n\n.p-l-2[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n\n.m-r-2[_ngcontent-%COMP%] {\n  margin-right: 2px !important;\n}\n\n.p-r-2[_ngcontent-%COMP%] {\n  padding-right: 2px !important;\n}\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px !important;\n}\n\n.m-t-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.p-t-4[_ngcontent-%COMP%] {\n  padding-top: 4px !important;\n}\n\n.m-b-4[_ngcontent-%COMP%] {\n  margin-bottom: 4px !important;\n}\n\n.p-b-4[_ngcontent-%COMP%] {\n  padding-bottom: 4px !important;\n}\n\n.m-l-4[_ngcontent-%COMP%] {\n  margin-left: 4px !important;\n}\n\n.p-l-4[_ngcontent-%COMP%] {\n  padding-left: 4px !important;\n}\n\n.m-r-4[_ngcontent-%COMP%] {\n  margin-right: 4px !important;\n}\n\n.p-r-4[_ngcontent-%COMP%] {\n  padding-right: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n\n.m-t-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.p-t-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.m-b-8[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n\n.p-b-8[_ngcontent-%COMP%] {\n  padding-bottom: 8px !important;\n}\n\n.m-l-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n}\n\n.p-l-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n}\n\n.m-r-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.p-r-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.m-10[_ngcontent-%COMP%] {\n  margin: 10px !important;\n}\n\n.p-10[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n.m-t-10[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n\n.p-t-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.m-b-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\n\n.p-b-10[_ngcontent-%COMP%] {\n  padding-bottom: 10px !important;\n}\n\n.m-l-10[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\n\n.p-l-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n}\n\n.m-r-10[_ngcontent-%COMP%] {\n  margin-right: 10px !important;\n}\n\n.p-r-10[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n}\n\n.m-12[_ngcontent-%COMP%] {\n  margin: 12px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.m-t-12[_ngcontent-%COMP%] {\n  margin-top: 12px !important;\n}\n\n.p-t-12[_ngcontent-%COMP%] {\n  padding-top: 12px !important;\n}\n\n.m-b-12[_ngcontent-%COMP%] {\n  margin-bottom: 12px !important;\n}\n\n.p-b-12[_ngcontent-%COMP%] {\n  padding-bottom: 12px !important;\n}\n\n.m-l-12[_ngcontent-%COMP%] {\n  margin-left: 12px !important;\n}\n\n.p-l-12[_ngcontent-%COMP%] {\n  padding-left: 12px !important;\n}\n\n.m-r-12[_ngcontent-%COMP%] {\n  margin-right: 12px !important;\n}\n\n.p-r-12[_ngcontent-%COMP%] {\n  padding-right: 12px !important;\n}\n\n.m-14[_ngcontent-%COMP%] {\n  margin: 14px !important;\n}\n\n.p-14[_ngcontent-%COMP%] {\n  padding: 14px !important;\n}\n\n.m-t-14[_ngcontent-%COMP%] {\n  margin-top: 14px !important;\n}\n\n.p-t-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.m-b-14[_ngcontent-%COMP%] {\n  margin-bottom: 14px !important;\n}\n\n.p-b-14[_ngcontent-%COMP%] {\n  padding-bottom: 14px !important;\n}\n\n.m-l-14[_ngcontent-%COMP%] {\n  margin-left: 14px !important;\n}\n\n.p-l-14[_ngcontent-%COMP%] {\n  padding-left: 14px !important;\n}\n\n.m-r-14[_ngcontent-%COMP%] {\n  margin-right: 14px !important;\n}\n\n.p-r-14[_ngcontent-%COMP%] {\n  padding-right: 14px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.m-t-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.p-t-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.m-b-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px !important;\n}\n\n.p-b-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.m-l-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n}\n\n.p-l-16[_ngcontent-%COMP%] {\n  padding-left: 16px !important;\n}\n\n.m-r-16[_ngcontent-%COMP%] {\n  margin-right: 16px !important;\n}\n\n.p-r-16[_ngcontent-%COMP%] {\n  padding-right: 16px !important;\n}\n\n.m-18[_ngcontent-%COMP%] {\n  margin: 18px !important;\n}\n\n.p-18[_ngcontent-%COMP%] {\n  padding: 18px !important;\n}\n\n.m-t-18[_ngcontent-%COMP%] {\n  margin-top: 18px !important;\n}\n\n.p-t-18[_ngcontent-%COMP%] {\n  padding-top: 18px !important;\n}\n\n.m-b-18[_ngcontent-%COMP%] {\n  margin-bottom: 18px !important;\n}\n\n.p-b-18[_ngcontent-%COMP%] {\n  padding-bottom: 18px !important;\n}\n\n.m-l-18[_ngcontent-%COMP%] {\n  margin-left: 18px !important;\n}\n\n.p-l-18[_ngcontent-%COMP%] {\n  padding-left: 18px !important;\n}\n\n.m-r-18[_ngcontent-%COMP%] {\n  margin-right: 18px !important;\n}\n\n.p-r-18[_ngcontent-%COMP%] {\n  padding-right: 18px !important;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px !important;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.m-t-20[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\n\n.p-t-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.m-b-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\n\n.p-b-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px !important;\n}\n\n.m-l-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.p-l-20[_ngcontent-%COMP%] {\n  padding-left: 20px !important;\n}\n\n.m-r-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.p-r-20[_ngcontent-%COMP%] {\n  padding-right: 20px !important;\n}\n\n.m-22[_ngcontent-%COMP%] {\n  margin: 22px !important;\n}\n\n.p-22[_ngcontent-%COMP%] {\n  padding: 22px !important;\n}\n\n.m-t-22[_ngcontent-%COMP%] {\n  margin-top: 22px !important;\n}\n\n.p-t-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.m-b-22[_ngcontent-%COMP%] {\n  margin-bottom: 22px !important;\n}\n\n.p-b-22[_ngcontent-%COMP%] {\n  padding-bottom: 22px !important;\n}\n\n.m-l-22[_ngcontent-%COMP%] {\n  margin-left: 22px !important;\n}\n\n.p-l-22[_ngcontent-%COMP%] {\n  padding-left: 22px !important;\n}\n\n.m-r-22[_ngcontent-%COMP%] {\n  margin-right: 22px !important;\n}\n\n.p-r-22[_ngcontent-%COMP%] {\n  padding-right: 22px !important;\n}\n\n.m-24[_ngcontent-%COMP%] {\n  margin: 24px !important;\n}\n\n.p-24[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n\n.m-t-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.p-t-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.m-b-24[_ngcontent-%COMP%] {\n  margin-bottom: 24px !important;\n}\n\n.p-b-24[_ngcontent-%COMP%] {\n  padding-bottom: 24px !important;\n}\n\n.m-l-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.p-l-24[_ngcontent-%COMP%] {\n  padding-left: 24px !important;\n}\n\n.m-r-24[_ngcontent-%COMP%] {\n  margin-right: 24px !important;\n}\n\n.p-r-24[_ngcontent-%COMP%] {\n  padding-right: 24px !important;\n}\n\n@keyframes _ngcontent-%COMP%_scrollUp {\n  15%, 25% {\n    transform: translateY(-20%);\n  }\n  40%, 50% {\n    transform: translateY(-40%);\n  }\n  65%, 75% {\n    transform: translateY(-60%);\n  }\n  90%, 100% {\n    transform: translateY(-80%);\n  }\n}\n@keyframes _ngcontent-%COMP%_jump {\n  0% {\n    margin-top: 0;\n  }\n  35% {\n    margin-top: -75px;\n  }\n  70% {\n    margin-top: 0px;\n  }\n}\n@keyframes _ngcontent-%COMP%_stretch {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.05);\n  }\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: calc(12vh - 1px);\n  border: 1px solid #E0E0E0;\n}\n@media (max-width: 767px) {\n  nav[_ngcontent-%COMP%] {\n    height: calc(10vh - 2px);\n  }\n  nav.searchbar[_ngcontent-%COMP%] {\n    height: 125px;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n}\nnav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  text-align: center;\n  color: #18193F;\n}\nnav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% - 350px);\n}\n@media (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\nnav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 90%;\n  background: rgb(255, 255, 255);\n  border: 1px solid rgb(221, 221, 221);\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;\n  padding-left: 35px;\n}\nnav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: 0px;\n}\nnav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 12px;\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  border: 0px;\n  border-radius: 5px;\n  height: 40px;\n  width: 300px;\n  background-color: #F8F8F8;\n  cursor: pointer;\n  margin: auto;\n  overflow: hidden;\n  position: relative;\n}\n@media (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%] {\n  margin: 0 0.625rem;\n  padding: 0;\n  animation: _ngcontent-%COMP%_scrollUp 4s infinite;\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 40px;\n  list-style: none;\n  color: #e0dddd;\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8e8c8c;\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 15px;\n}\nnav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #000000;\n  margin-right: 10px;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  color: #0D60C8;\n}\nnav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background-color: #18193F;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19tZWRpYS5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0Usc0JBQUE7QUNISjs7QURLRTtFQUNFLHVCQUFBO0FDRko7O0FES0k7RUFDRSwwQkFBQTtBQ0ZOOztBRElJO0VBQ0UsMkJBQUE7QUNETjs7QURISTtFQUNFLDZCQUFBO0FDTU47O0FESkk7RUFDRSw4QkFBQTtBQ09OOztBRFhJO0VBQ0UsMkJBQUE7QUNjTjs7QURaSTtFQUNFLDRCQUFBO0FDZU47O0FEbkJJO0VBQ0UsNEJBQUE7QUNzQk47O0FEcEJJO0VBQ0UsNkJBQUE7QUN1Qk47O0FEbENFO0VBQ0Usc0JBQUE7QUNxQ0o7O0FEbkNFO0VBQ0UsdUJBQUE7QUNzQ0o7O0FEbkNJO0VBQ0UsMEJBQUE7QUNzQ047O0FEcENJO0VBQ0UsMkJBQUE7QUN1Q047O0FEM0NJO0VBQ0UsNkJBQUE7QUM4Q047O0FENUNJO0VBQ0UsOEJBQUE7QUMrQ047O0FEbkRJO0VBQ0UsMkJBQUE7QUNzRE47O0FEcERJO0VBQ0UsNEJBQUE7QUN1RE47O0FEM0RJO0VBQ0UsNEJBQUE7QUM4RE47O0FENURJO0VBQ0UsNkJBQUE7QUMrRE47O0FEMUVFO0VBQ0Usc0JBQUE7QUM2RUo7O0FEM0VFO0VBQ0UsdUJBQUE7QUM4RUo7O0FEM0VJO0VBQ0UsMEJBQUE7QUM4RU47O0FENUVJO0VBQ0UsMkJBQUE7QUMrRU47O0FEbkZJO0VBQ0UsNkJBQUE7QUNzRk47O0FEcEZJO0VBQ0UsOEJBQUE7QUN1Rk47O0FEM0ZJO0VBQ0UsMkJBQUE7QUM4Rk47O0FENUZJO0VBQ0UsNEJBQUE7QUMrRk47O0FEbkdJO0VBQ0UsNEJBQUE7QUNzR047O0FEcEdJO0VBQ0UsNkJBQUE7QUN1R047O0FEbEhFO0VBQ0UsdUJBQUE7QUNxSEo7O0FEbkhFO0VBQ0Usd0JBQUE7QUNzSEo7O0FEbkhJO0VBQ0UsMkJBQUE7QUNzSE47O0FEcEhJO0VBQ0UsNEJBQUE7QUN1SE47O0FEM0hJO0VBQ0UsOEJBQUE7QUM4SE47O0FENUhJO0VBQ0UsK0JBQUE7QUMrSE47O0FEbklJO0VBQ0UsNEJBQUE7QUNzSU47O0FEcElJO0VBQ0UsNkJBQUE7QUN1SU47O0FEM0lJO0VBQ0UsNkJBQUE7QUM4SU47O0FENUlJO0VBQ0UsOEJBQUE7QUMrSU47O0FEMUpFO0VBQ0UsdUJBQUE7QUM2Sko7O0FEM0pFO0VBQ0Usd0JBQUE7QUM4Sko7O0FEM0pJO0VBQ0UsMkJBQUE7QUM4Sk47O0FENUpJO0VBQ0UsNEJBQUE7QUMrSk47O0FEbktJO0VBQ0UsOEJBQUE7QUNzS047O0FEcEtJO0VBQ0UsK0JBQUE7QUN1S047O0FEM0tJO0VBQ0UsNEJBQUE7QUM4S047O0FENUtJO0VBQ0UsNkJBQUE7QUMrS047O0FEbkxJO0VBQ0UsNkJBQUE7QUNzTE47O0FEcExJO0VBQ0UsOEJBQUE7QUN1TE47O0FEbE1FO0VBQ0UsdUJBQUE7QUNxTUo7O0FEbk1FO0VBQ0Usd0JBQUE7QUNzTUo7O0FEbk1JO0VBQ0UsMkJBQUE7QUNzTU47O0FEcE1JO0VBQ0UsNEJBQUE7QUN1TU47O0FEM01JO0VBQ0UsOEJBQUE7QUM4TU47O0FENU1JO0VBQ0UsK0JBQUE7QUMrTU47O0FEbk5JO0VBQ0UsNEJBQUE7QUNzTk47O0FEcE5JO0VBQ0UsNkJBQUE7QUN1Tk47O0FEM05JO0VBQ0UsNkJBQUE7QUM4Tk47O0FENU5JO0VBQ0UsOEJBQUE7QUMrTk47O0FEMU9FO0VBQ0UsdUJBQUE7QUM2T0o7O0FEM09FO0VBQ0Usd0JBQUE7QUM4T0o7O0FEM09JO0VBQ0UsMkJBQUE7QUM4T047O0FENU9JO0VBQ0UsNEJBQUE7QUMrT047O0FEblBJO0VBQ0UsOEJBQUE7QUNzUE47O0FEcFBJO0VBQ0UsK0JBQUE7QUN1UE47O0FEM1BJO0VBQ0UsNEJBQUE7QUM4UE47O0FENVBJO0VBQ0UsNkJBQUE7QUMrUE47O0FEblFJO0VBQ0UsNkJBQUE7QUNzUU47O0FEcFFJO0VBQ0UsOEJBQUE7QUN1UU47O0FEbFJFO0VBQ0UsdUJBQUE7QUNxUko7O0FEblJFO0VBQ0Usd0JBQUE7QUNzUko7O0FEblJJO0VBQ0UsMkJBQUE7QUNzUk47O0FEcFJJO0VBQ0UsNEJBQUE7QUN1Uk47O0FEM1JJO0VBQ0UsOEJBQUE7QUM4Uk47O0FENVJJO0VBQ0UsK0JBQUE7QUMrUk47O0FEblNJO0VBQ0UsNEJBQUE7QUNzU047O0FEcFNJO0VBQ0UsNkJBQUE7QUN1U047O0FEM1NJO0VBQ0UsNkJBQUE7QUM4U047O0FENVNJO0VBQ0UsOEJBQUE7QUMrU047O0FEMVRFO0VBQ0UsdUJBQUE7QUM2VEo7O0FEM1RFO0VBQ0Usd0JBQUE7QUM4VEo7O0FEM1RJO0VBQ0UsMkJBQUE7QUM4VE47O0FENVRJO0VBQ0UsNEJBQUE7QUMrVE47O0FEblVJO0VBQ0UsOEJBQUE7QUNzVU47O0FEcFVJO0VBQ0UsK0JBQUE7QUN1VU47O0FEM1VJO0VBQ0UsNEJBQUE7QUM4VU47O0FENVVJO0VBQ0UsNkJBQUE7QUMrVU47O0FEblZJO0VBQ0UsNkJBQUE7QUNzVk47O0FEcFZJO0VBQ0UsOEJBQUE7QUN1Vk47O0FEbFdFO0VBQ0UsdUJBQUE7QUNxV0o7O0FEbldFO0VBQ0Usd0JBQUE7QUNzV0o7O0FEbldJO0VBQ0UsMkJBQUE7QUNzV047O0FEcFdJO0VBQ0UsNEJBQUE7QUN1V047O0FEM1dJO0VBQ0UsOEJBQUE7QUM4V047O0FENVdJO0VBQ0UsK0JBQUE7QUMrV047O0FEblhJO0VBQ0UsNEJBQUE7QUNzWE47O0FEcFhJO0VBQ0UsNkJBQUE7QUN1WE47O0FEM1hJO0VBQ0UsNkJBQUE7QUM4WE47O0FENVhJO0VBQ0UsOEJBQUE7QUMrWE47O0FEMVlFO0VBQ0UsdUJBQUE7QUM2WUo7O0FEM1lFO0VBQ0Usd0JBQUE7QUM4WUo7O0FEM1lJO0VBQ0UsMkJBQUE7QUM4WU47O0FENVlJO0VBQ0UsNEJBQUE7QUMrWU47O0FEblpJO0VBQ0UsOEJBQUE7QUNzWk47O0FEcFpJO0VBQ0UsK0JBQUE7QUN1Wk47O0FEM1pJO0VBQ0UsNEJBQUE7QUM4Wk47O0FENVpJO0VBQ0UsNkJBQUE7QUMrWk47O0FEbmFJO0VBQ0UsNkJBQUE7QUNzYU47O0FEcGFJO0VBQ0UsOEJBQUE7QUN1YU47O0FDbmJBO0VBRUk7SUFDSSwyQkFBQTtFRHFiTjtFQ3RiRTtJQUNJLDJCQUFBO0VEd2JOO0VDemJFO0lBQ0ksMkJBQUE7RUQyYk47RUM1YkU7SUFDSSwyQkFBQTtFRDhiTjtBQUNGO0FDM2JBO0VBQ0U7SUFDRSxhQUFBO0VENmJGO0VDM2JBO0lBQ0UsaUJBQUE7RUQ2YkY7RUMzYkE7SUFDRSxlQUFBO0VENmJGO0FBQ0Y7QUMzYkE7RUFDSTtJQUNZLHNCQUFBO0VENmJkO0VDMWJVO0lBQ0ksbUJBQUE7RUQ0YmQ7RUMxYlU7SUFDSSxzQkFBQTtFRDRiZDtBQUNGO0FBdmRBO0VEa0JFLGFBQUE7RUFDQSxtQkNqQm1CO0VEa0JuQiw4QkNsQjBCO0VBQ3hCLHdCQUFBO0VBQ0EseUJBQUE7QUEwZEo7QUU5ZEU7RUZBRjtJQU1NLHdCQUFBO0VBNGRKO0VBM2RJO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7RUE2ZE47QUFDRjtBQTFkSTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRSxjR3BCRztBSGdmVDtBQTFkRztFQUNDLGtCQUFBO0VBQ0EseUJBQUE7QUE0ZEo7QUVqZkU7RUZtQkM7SUFJRyxVQUFBO0VBOGRKO0FBQ0Y7QUE3ZE07RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUErZFI7QUE5ZFE7RUFDRSxZQUFBO0FBZ2VWO0FBN2RNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQStkUjtBQTVkSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE4ZE47QUVsaEJFO0VGMkNFO0lBV0ksYUFBQTtFQWdlTjtBQUNGO0FBL2RNO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFpZVY7QUFoZVU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFrZVo7QUFqZVk7RUFDQyxjQUFBO0FBbWViO0FBL2RNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWllUjtBQTFkSTtFRGhFRixhQUFBO0VBQ0EsbUJDZ0VzQjtFRC9EdEIsOEJDK0Q2QjtBQThkL0I7QUE3ZE87RUFDQyxpQkFBQTtFQUNBLGNHakZBO0VIa0ZBLGtCQUFBO0VBQ0EsZUFBQTtBQStkUjtBRXZqQkU7RUZ5Rk07SUFFSSxhQUFBO0VBZ2VWO0FBQ0Y7QUE5ZFE7RUFDRSxjR2pHSDtBSGlrQlA7QUE5ZFE7RUFDRSx5QkFBQTtFQUNBLFlHN0ZIO0VIOEZHLGlCQUFBO0VBQ0Esa0JBQUE7QUFnZVYiLCJzb3VyY2VzQ29udGVudCI6WyIkc3BhY2VhbW91bnRzOiAoMiw0LDgsMTAsMTIsMTQsMTYsMTgsMjAsMjIsMjQpOyAvLyBBZGp1c3QgdGhpcyB0byBpbmNsdWRlIHRoZSBwaXhlbCBhbW91bnRzIHlvdSBuZWVkLlxyXG4kc2lkZXM6ICh0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQpOyAvLyBMZWF2ZSB0aGlzIHZhcmlhYmxlIGFsb25lXHJcblxyXG5AZWFjaCAkc3BhY2UgaW4gJHNwYWNlYW1vdW50cyB7XHJcbiAgLm0tI3skc3BhY2V9IHtcclxuICAgIG1hcmdpbjogI3skc3BhY2V9cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnAtI3skc3BhY2V9IHtcclxuICAgIHBhZGRpbmc6ICN7JHNwYWNlfXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIEBlYWNoICRzaWRlIGluICRzaWRlcyB7XHJcbiAgICAubS0je3N0ci1zbGljZSgkc2lkZSwgMCwgMSl9LSN7JHNwYWNlfSB7XHJcbiAgICAgIG1hcmdpbi0jeyRzaWRlfTogI3skc3BhY2V9cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wLSN7c3RyLXNsaWNlKCRzaWRlLCAwLCAxKX0tI3skc3BhY2V9IHtcclxuICAgICAgcGFkZGluZy0jeyRzaWRlfTogI3skc3BhY2V9cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT0gW0lTLUZMRVhdXHJcbkBtaXhpbiBpcy1mbGV4KCRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG4vLyA9PT09PT09PT09IFtJUy1GTEVYLUNPTE9VTU5dXHJcbkBtaXhpbiBpcy1mbGV4LWNvbHVtbigkYWxpZ24sICRqdXN0aWZ5KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxufVxyXG4iLCJAaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuQGltcG9ydCBcImFuaW1hdGlvbnNcIjtcclxuQGltcG9ydCBcIm1lZGlhXCI7XHJcbm5hdntcclxuXHJcbiAgICBAaW5jbHVkZSBpcy1mbGV4KGNlbnRlcixzcGFjZS1iZXR3ZWVuKTtcclxuICAgIGhlaWdodDogY2FsYygxMnZoIC0gMXB4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTB2aCAtIDJweCk7XHJcbiAgICAgICYuc2VhcmNoYmFye1xyXG4gICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5icmFuZHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogJHZpb2xldDtcclxuICAgIH1cclxuICAgLnNlYXJjaC1pbnB1dGNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNTBweCk7XHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgICBpbnB1dHtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggOHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgb3V0bGluZTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgIHRvcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgICBib3JkZXI6IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5zdWdnZXN0aW9ucyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMC42MjVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzY3JvbGxVcCA0cyBpbmZpbml0ZTtcclxuICAgICAgICAgIC5zdWdnZXN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBkZGRkO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgY29sb3I6ICM4ZThjOGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLm5hdmJhcntcclxuICAgICAgIEBpbmNsdWRlIGlzLWZsZXgoY2VudGVyLHNwYWNlLWJldHdlZW4pO1xyXG4gICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTkzRjtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vIFZhcmlhYmxlc1xyXG4kaXRlbS1jb3VudDogNTtcclxuXHJcbkBrZXlmcmFtZXMgc2Nyb2xsVXAge1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggKCRpdGVtLWNvdW50IC0gMSkge1xyXG4gICAgI3soJGkgKiAyNSkgLSAxMCV9LCAjeyRpICogMjUlfSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCgtMTAwJSAvICRpdGVtLWNvdW50KSAqICRpKTtcclxuICAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMganVtcCB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIG1hcmdpbi10b3A6IC03NXB4O1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHN0cmV0Y2gge1xyXG4gICAgMCUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IiwiJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMDI0cHg7XHJcblxyXG5AbWl4aW4gbW9iaWxlIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogI3skdGFibGV0LXdpZHRoIC0gMXB4fSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGggLSAxcHh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIvLyBfY29sb3JzLnNjc3NcclxuJHZpb2xldDogIzE4MTkzRjtcclxuJGJsdWU6ICMwRDYwQzg7XHJcbiRwaW5rOiAjQjE1Q0MyO1xyXG4kb3JhbmdlOiAjRkM2MkEwO1xyXG4kcGVhY2g6ICNGRjg5Nzg7XHJcbiR5ZWxsb3c6ICNGRkMxNUU7XHJcbiRncmVlbjogI0Y5Rjg3MTtcclxuJGdyYXk6ICNkMmQyZDI7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHdoaXRlOiNmZmZmO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _features_content_content_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/content/content.module */ 1263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.HashLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _features_content_content_module__WEBPACK_IMPORTED_MODULE_2__.ContentModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _features_content_content_module__WEBPACK_IMPORTED_MODULE_2__.ContentModule]
  });
})();

/***/ }),

/***/ 7369:
/*!************************************************************************************!*\
  !*** ./src/app/features/content/components/image-slider/image-slider.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSliderComponent": () => (/* binding */ ImageSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function ImageSliderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSliderComponent_div_8_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const slideIndex_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.goToSlide(slideIndex_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u25CF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slideIndex_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slideIndex_r2 == ctx_r0.currentIndex);
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
class ImageSliderComponent {
  constructor() {
    this.slides = [];
    this.currentIndex = 0;
  }
  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
  goToPrevious() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
  goToNext() {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  goToSlide(slideIndex) {
    this.currentIndex = slideIndex;
  }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) {
  return new (t || ImageSliderComponent)();
};
ImageSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ImageSliderComponent,
  selectors: [["app-image-slider"]],
  inputs: {
    slides: "slides"
  },
  decls: 9,
  vars: 4,
  consts: [[1, "slider"], [1, "leftArrow", 3, "click"], [1, "rightArrow", 3, "click"], [1, "slide", 3, "ngStyle"], [1, "dotsContainer"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "dot", 3, "click"]],
  template: function ImageSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSliderComponent_Template_div_click_2_listener() {
        return ctx.goToPrevious();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2770");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSliderComponent_Template_div_click_4_listener() {
        return ctx.goToNext();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2771");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImageSliderComponent_div_8_Template, 2, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.getCurrentSlideUrl()));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  styles: [".slider[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.slider[_ngcontent-%COMP%]   .rightArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  right: 10px;\n  font-size: 45px;\n  color: #fff;\n  z-index: 1;\n  cursor: pointer;\n}\n.slider[_ngcontent-%COMP%]   .leftArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  left: 10px;\n  font-size: 45px;\n  color: #fff;\n  z-index: 1;\n  cursor: pointer;\n}\n.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  background-size: cover;\n  background-position: center;\n}\n.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  cursor: pointer;\n  font-size: 20px;\n}\n.slider[_ngcontent-%COMP%]   .dotsContainer[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  color: #0D60C8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGVudC9jb21wb25lbnRzL2ltYWdlLXNsaWRlci9pbWFnZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFIRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSEo7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBSEo7QUFLRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUhKO0FBSUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFGTjtBQUlNO0VBQ0UsY0FBQTtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnJpZ2h0QXJyb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmxlZnRBcnJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kb3RzQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5kb3Qge1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzBENjBDODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9782:
/*!************************************************************!*\
  !*** ./src/app/features/content/content-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentRoutingModule": () => (/* binding */ ContentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 337);
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/content/content.component */ 3081);
/* harmony import */ var _pages_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/content-slider/content-slider.component */ 9541);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ 5880);
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ 1232);
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ 1827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);









const routes = [{
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  path: ''
}, {
  component: _pages_content_content_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent,
  path: 'content/:id'
}, {
  component: _pages_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_2__.ContentSliderComponent,
  path: 'explore'
}, {
  component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent,
  path: 'search'
}, {
  component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__.SignUpComponent,
  path: 'signup'
}, {
  component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__.SignInComponent,
  path: 'signin'
}];
class ContentRoutingModule {}
ContentRoutingModule.ɵfac = function ContentRoutingModule_Factory(t) {
  return new (t || ContentRoutingModule)();
};
ContentRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ContentRoutingModule
});
ContentRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ContentRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 1263:
/*!****************************************************!*\
  !*** ./src/app/features/content/content.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentModule": () => (/* binding */ ContentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 337);
/* harmony import */ var _pages_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/content-slider/content-slider.component */ 9541);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search/search.component */ 5880);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/image-slider/image-slider.component */ 7369);
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/content/content.component */ 3081);
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-routing.module */ 9782);
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ 1232);
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ 1827);
/* harmony import */ var _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reset/reset.component */ 327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6839);












class ContentModule {}
ContentModule.ɵfac = function ContentModule_Factory(t) {
  return new (t || ContentModule)();
};
ContentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: ContentModule
});
ContentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _content_routing_module__WEBPACK_IMPORTED_MODULE_6__.ContentRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ContentModule, {
    declarations: [_components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__.ImageSliderComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _pages_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _pages_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_1__.ContentSliderComponent, _pages_content_content_component__WEBPACK_IMPORTED_MODULE_5__.ContentComponent, _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__.SignUpComponent, _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__.SignInComponent, _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_9__.ResetComponent],
    imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _content_routing_module__WEBPACK_IMPORTED_MODULE_6__.ContentRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule]
  });
})();

/***/ }),

/***/ 9541:
/*!***********************************************************************************!*\
  !*** ./src/app/features/content/pages/content-slider/content-slider.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentSliderComponent": () => (/* binding */ ContentSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/api.service */ 4761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




const _c0 = ["reelsContainer"];
function ContentSliderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContentSliderComponent_div_2_div_1_i_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentSliderComponent_div_2_div_1_i_21_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.navTo(i_r4 - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContentSliderComponent_div_2_div_1_i_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentSliderComponent_div_2_div_1_i_22_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.navTo(i_r4 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    justifyContent: a0
  };
};
function ContentSliderComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14)(6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "121K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "1K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "11K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ContentSliderComponent_div_2_div_1_i_21_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ContentSliderComponent_div_2_div_1_i_22_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", x_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", x_r3.poster || "assets/images/no-poster.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", x_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/content/", x_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, i_r4 == 0 ? "flex-end" : "space-between"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r4 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r4 + 1 != ctx_r2.totalCount);
  }
}
function ContentSliderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentSliderComponent_div_2_div_1_Template, 23, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movies);
  }
}
// import { KEY } from 'src/app/bo/enum';
// import { ApiService } from 'src/app/services/api.service';
class ContentSliderComponent {
  // Your existing movies array
  constructor(apiService) {
    this.apiService = apiService;
    this.movies = [];
    this.pageNumber = 1;
    this.shortNumber = 0;
    this.currentPage = 1;
    this.fetchMovies();
  }
  fetchMovies() {
    this.apiService.getContent({
      perPage: 4,
      page: this.pageNumber
    }).subscribe(data => {
      this.totalCount = data.totalCount;
      this.movies = [...this.movies, ...data.contents];
    });
  }
  ngOnInit() {
    document.addEventListener("keydown", event => {
      if (event.key === "ArrowDown") {
        this.navTo(this.shortNumber + 1);
      }
      if (event.key === "ArrowUp") {
        this.navTo(this.shortNumber - 1);
      }
    });
  }
  topAny() {
    if (this.reelsContainer) {
      return this.reelsContainer.nativeElement.scrollTop === 0;
    }
    return true;
  }
  navTo(i) {
    if (i + 1 > this.totalCount) {
      return;
    }
    console.log(i >= this.movies.length - 2 && this.movies.length <= this.totalCount);
    this.shortNumber = i;
    let movieId = this.movies[i]._id;
    document.getElementById(movieId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
    if (i >= this.movies.length - 2 && this.movies.length <= this.totalCount) {
      this.pageNumber++;
      this.fetchMovies();
    }
  }
}
ContentSliderComponent.ɵfac = function ContentSliderComponent_Factory(t) {
  return new (t || ContentSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
ContentSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContentSliderComponent,
  selectors: [["app-content-slider"]],
  viewQuery: function ContentSliderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.reelsContainer = _t.first);
    }
  },
  decls: 3,
  vars: 2,
  consts: [[1, "login-page"], ["class", "loader", 4, "ngIf"], ["class", "reelsContainer", 4, "ngIf"], [1, "loader"], ["id", "a", 1, "circle"], ["id", "b", 1, "circle"], ["id", "c", 1, "circle"], ["id", "d", 1, "circle"], [1, "reelsContainer"], ["class", "reel", 3, "id", 4, "ngFor", "ngForOf"], [1, "reel", 3, "id"], [1, "detail"], ["alt", "", 3, "src"], [1, "info"], [1, "actions"], [1, "action", "active"], [1, "fa-solid", "fa-thumbs-up"], [1, "action"], [1, "fa-solid", "fa-thumbs-down"], [1, "action", 3, "routerLink"], [1, "fa-solid", "fa-eye"], [1, "fa-solid", "fa-bookmark"], [1, "nav-buttons", 3, "ngStyle"], ["class", "fa-solid fa-arrow-up", 3, "click", 4, "ngIf"], ["class", "fa-solid fa-arrow-down", 3, "click", 4, "ngIf"], [1, "fa-solid", "fa-arrow-up", 3, "click"], [1, "fa-solid", "fa-arrow-down", 3, "click"]],
  template: function ContentSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentSliderComponent_div_1_Template, 5, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContentSliderComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movies.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movies.length != 0);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  styles: ["@keyframes _ngcontent-%COMP%_scrollUp {\n  15%, 25% {\n    transform: translateY(-20%);\n  }\n  40%, 50% {\n    transform: translateY(-40%);\n  }\n  65%, 75% {\n    transform: translateY(-60%);\n  }\n  90%, 100% {\n    transform: translateY(-80%);\n  }\n}\n@keyframes _ngcontent-%COMP%_jump {\n  0% {\n    margin-top: 0;\n  }\n  35% {\n    margin-top: -75px;\n  }\n  70% {\n    margin-top: 0px;\n  }\n}\n@keyframes _ngcontent-%COMP%_stretch {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.05);\n  }\n}\n.login-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  height: 88vh;\n  width: 100%;\n  background-color: #18193F;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n    height: 90vh;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background: white;\n  border-radius: 2px;\n  margin: 0 10px;\n  animation: _ngcontent-%COMP%_jump 1s linear infinite;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle#a[_ngcontent-%COMP%] {\n  background-color: #f4aa0b;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle#b[_ngcontent-%COMP%] {\n  background-color: #eb0d78;\n  animation-delay: 0.2s;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle#c[_ngcontent-%COMP%] {\n  background-color: #079891;\n  animation-delay: 0.4s;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle#d[_ngcontent-%COMP%] {\n  background-color: #9c04b3;\n  animation-delay: 0.6s;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%] {\n  background-color: #0D60C8;\n  display: flex;\n  overflow: auto;\n  gap: 12vh;\n  flex-direction: column;\n  scroll-snap-type: y mandatory;\n  width: 100%;\n  align-items: flex-start;\n  height: 88vh;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%] {\n    height: 90vh;\n    gap: 15vh;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%] {\n  height: 88vh;\n  scroll-snap-align: start;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%] {\n    height: 90vh;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  position: relative;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  border-radius: 10px;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  color: #f8f8f8;\n  width: 280px;\n  padding: 10px;\n  background: rgba(13, 13, 13, 0.7803921569);\n  border: 10px;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 50px;\n  position: absolute;\n  right: -60px;\n  top: 100px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin: 5px 0px;\n  font-size: 18px;\n  padding: 5px;\n  background-color: #f8f8f8;\n  color: #000000;\n  border-radius: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: #c7c8cd;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: #f8f8f8;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 400;\n  color: #f8f8f8;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 115px);\n  position: absolute;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin: 5px 0px;\n  font-size: 18px;\n  padding: 5px;\n  background-color: #f8f8f8;\n  color: #000000;\n  border-radius: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: #cdc7c7;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19hbmltYXRpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2ZlYXR1cmVzL2NvbnRlbnQvcGFnZXMvY29udGVudC1zbGlkZXIvY29udGVudC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJO0lBQ0ksMkJBQUE7RUNITjtFREVFO0lBQ0ksMkJBQUE7RUNBTjtFRERFO0lBQ0ksMkJBQUE7RUNHTjtFREpFO0lBQ0ksMkJBQUE7RUNNTjtBQUNGO0FESEE7RUFDRTtJQUNFLGFBQUE7RUNLRjtFREhBO0lBQ0UsaUJBQUE7RUNLRjtFREhBO0lBQ0UsZUFBQTtFQ0tGO0FBQ0Y7QURIQTtFQUNJO0lBQ1ksc0JBQUE7RUNLZDtFREZVO0lBQ0ksbUJBQUE7RUNJZDtFREZVO0lBQ0ksc0JBQUE7RUNJZDtBQUNGO0FBakNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBbUNGO0FBbENFO0VBQ0UsWUFBQTtFQUlBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBaUNKO0FDM0NFO0VEQ0E7SUFHSSxZQUFBO0VBMkNKO0FBQ0Y7QUFyQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUF1Q047QUF0Q007RUFDRSx5QkFBQTtBQXdDUjtBQXRDTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUF3Q1I7QUF0Q007RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBd0NSO0FBdENNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQXdDUjtBQXBDRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFzQ0o7QUNsRkU7RURtQ0E7SUFXSSxZQUFBO0lBQ0EsU0FBQTtFQXdDSjtBQUNGO0FBdkNJO0VBQ0UsWUFBQTtFQUlBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBc0NOO0FDaEdFO0VEaURFO0lBR0ksWUFBQTtFQWdETjtBQUNGO0FBMUNNO0VBQ0Usa0JBQUE7QUE0Q1I7QUEzQ1E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUE2Q1Y7QUExQ1E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBNENWO0FBekNRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUEyQ1Y7QUM5SEU7RUQ2RU07SUFRSSxVQUFBO0VBNkNWO0FBQ0Y7QUE1Q1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQThDWjtBQTVDWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUE4Q2Q7QUE1Q2M7RUFDRSx5QkFBQTtBQThDaEI7QUF6Q2M7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUEyQ2hCO0FBdkNZO0VBQ0UsMENBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXlDZDtBQWxDTTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFvQ1I7QUMzS0U7RURpSUk7SUFRRSxhQUFBO0VBc0NOO0FBQ0Y7QUFyQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBdUNWO0FBckNVO0VBQ0UseUJBQUE7QUF1Q1o7QUFoQ0U7RUFDRSxhQUFBO0FBa0NKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFyaWFibGVzXHJcbiRpdGVtLWNvdW50OiA1O1xyXG5cclxuQGtleWZyYW1lcyBzY3JvbGxVcCB7XHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAoJGl0ZW0tY291bnQgLSAxKSB7XHJcbiAgICAjeygkaSAqIDI1KSAtIDEwJX0sICN7JGkgKiAyNSV9IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoKC0xMDAlIC8gJGl0ZW0tY291bnQpICogJGkpO1xyXG4gICAgIH1cclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBqdW1wIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICAzNSUge1xyXG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3RyZXRjaCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0iLCJAaW1wb3J0IFwiYW5pbWF0aW9uc1wiO1xyXG5AaW1wb3J0IFwibWVkaWFcIjtcclxuLmxvZ2luLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLmxvYWRlcntcclxuICAgIGhlaWdodDogODh2aDtcclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgIGhlaWdodCA6IDkwdmg7XHJcbiAgICB9XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE5M0Y7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICBhbmltYXRpb246IGp1bXAgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAmI2F7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YWEwYjtcclxuICAgICAgfVxyXG4gICAgICAmI2Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjBkNzg7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICB9XHJcbiAgICAgICYjYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3OTg5MTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAgIH1cclxuICAgICAgJiNkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMwNGIzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmVlbHNDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBENjBDODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGdhcDogMTJ2aDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDg4dmg7XHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBoZWlnaHQgOiA5MHZoO1xyXG4gICAgICBnYXA6IDE1dmg7XHJcbiAgICB9XHJcbiAgICAucmVlbCB7XHJcbiAgICAgIGhlaWdodDogODh2aDtcclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBoZWlnaHQgOiA5MHZoO1xyXG4gICAgICB9XHJcbiAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzBkMGQwZGM3O1xyXG4gICAgICAgICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogLTYwcHg7XHJcbiAgICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzhjZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y4ZjhmODtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgICAubmF2LWJ1dHRvbnMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTVweCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGM3Yzc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVlbHNDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIkdGFibGV0LXdpZHRoOiA3NjhweDtcclxuJGRlc2t0b3Atd2lkdGg6IDEwMjRweDtcclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyR0YWJsZXQtd2lkdGggLSAxcHh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSBhbmQgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aCAtIDFweH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 3081:
/*!*********************************************************************!*\
  !*** ./src/app/features/content/pages/content/content.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/api.service */ 4761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




function ContentComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const genre_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](genre_r7);
  }
}
function ContentComponent_div_0_div_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r9);
  }
}
function ContentComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tags:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentComponent_div_0_div_11_span_4_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.movie.tags);
  }
}
function ContentComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Release Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, ctx_r3.movie.releaseDate, "medium"));
  }
}
function ContentComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const actor_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", actor_r10.profile || "assets/images/default-profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](actor_r10.name);
  }
}
function ContentComponent_div_0_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_div_0_button_17_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const i_r12 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.toggleSeason(i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const season_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", season_r11.number == ctx_r5.activeSeason.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Season ", i_r12 + 1, "");
  }
}
function ContentComponent_div_0_div_18_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.activeSeason.description);
  }
}
function ContentComponent_div_0_div_18_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " 5 Mar 2021 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const episode_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" S", ctx_r16.activeSeason.number, "E", i_r18 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](episode_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", episode_r17.description, " ");
  }
}
function ContentComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContentComponent_div_0_div_18_p_2_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentComponent_div_0_div_18_li_4_Template, 11, 4, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.activeSeason.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.activeSeason.episodes);
  }
}
function ContentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ContentComponent_div_0_span_7_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ContentComponent_div_0_div_11_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContentComponent_div_0_div_12_Template, 6, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ContentComponent_div_0_div_14_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13)(16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ContentComponent_div_0_button_17_Template, 2, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ContentComponent_div_0_div_18_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.movie.poster || "assets/images/no-poster.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movie.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.movie.plot);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.movie.tags.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.movie.releaseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movie.actors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movie.seasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.activeSeason);
  }
}
class ContentComponent {
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
    // Assuming you have defined an array to keep track of expanded seasons:
    this.expandedSeasons = [];
  }
  // Function to toggle the visibility of season details
  toggleSeason(i) {
    this.activeSeason = this.movie.seasons[i];
  }
  // Function to check if a season is expanded or collapsed
  isSeasonExpanded(season) {
    return this.expandedSeasons.includes(season);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      // Call a method to fetch movie details based on the ID
      this.getMovieDetails(this.movieId);
    });
  }
  getMovieDetails(id) {
    // Implement your logic to fetch movie details from the server using the movie ID
    // You can use an API service or make an HTTP request here
    // Update the component properties with the fetched movie data
    this.apiService.getContentById(id).subscribe(data => {
      console.log(data);
      this.movie = data;
      if (this.movie.seasons.length) {
        this.activeSeason = this.movie.seasons[0];
      }
    });
  }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) {
  return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContentComponent,
  selectors: [["app-content"]],
  decls: 1,
  vars: 1,
  consts: [["class", "movie-page", 4, "ngIf"], [1, "movie-page"], ["alt", "", 1, "poster", 3, "src"], [1, "movie-details"], [1, "breadcrumb"], [1, "title"], [1, "genres"], ["class", "genre", 4, "ngFor", "ngForOf"], [1, "plot"], [1, "details"], ["class", "details-item", 4, "ngIf"], [1, "actors"], ["class", "actor-item", 4, "ngFor", "ngForOf"], [1, "seasons-tabs"], [1, "season-btns"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "season-tab", 4, "ngIf"], [1, "genre"], [1, "details-item"], [1, "label"], [1, "value"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "actor-item"], ["alt", "", 3, "src"], [3, "click"], [1, "season-tab"], ["class", "description", 4, "ngIf"], [1, "episodes-list"], [4, "ngFor", "ngForOf"], [1, "description"], [1, "fa-solid", "fa-calendar-days"]],
  template: function ContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContentComponent_div_0_Template, 19, 9, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movieId && ctx.movie);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: [".movie-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.movie-page[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 100%;\n  border-right: 1px solid rgb(242, 242, 242);\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%] {\n  position: sticky;\n  align-self: flex-start;\n  padding-top: 2rem;\n  padding-left: 2rem;\n  \n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  margin: 0;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .genre[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin: 2px;\n  padding: 8px;\n  border-radius: 4px;\n  font-weight: 400;\n  font-size: 14px;\n  color: rgb(38, 50, 56);\n  background-color: rgb(245, 245, 245);\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .plot[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .details-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: flex;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .details-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 8px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%]   .actor-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n  margin-bottom: 12px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%]   .actor-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 8px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%]   .actor-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border-radius: 13px;\n  background-color: #F5F5F5;\n  color: #4527A0;\n  font-size: 14px;\n  font-weight: 600;\n  border: 0px;\n  margin: 5px;\n  cursor: pointer;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-btns[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: #4527A0;\n  color: #F5F5F5;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border: 2px dotted #5C6BC0;\n  padding: 14px;\n  border-radius: 10px;\n  background: rgba(179, 157, 219, 0.7607843137);\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 2px solid #EEEEEE;\n  border-radius: 10px;\n  padding: 12px;\n  margin-top: 8px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  font-weight: 900;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #9C27B0;\n  border-radius: 10px;\n  padding: 5px;\n  color: white;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: #ffffff;\n  color: #4527A0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGVudC9wYWdlcy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQW9FQSxpQkFBQTtBQW5FSjtBQUNJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDTjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjtBQUVNO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FBQVI7QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFLTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUhSO0FBS1E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBSFY7QUFRSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBTk47QUFRTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFOVjtBQVNRO0VBQ0UsZUFBQTtBQVBWO0FBYUk7RUFDRSxnQkFBQTtBQVhOO0FBWU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVZSO0FBV1E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBVFY7QUFVVTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQVJaO0FBYU07RUFDRSxtQkFBQTtBQVhSO0FBWVE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQVZWO0FBYVE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBWFY7QUFhVTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVhaO0FBWVk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBVmQ7QUFZWTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQVZkO0FBV2M7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFUaEI7QUFVZ0I7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFSbEIiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHJcbiAgLnBvc3RlciB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjQyLCAyNDIsIDI0Mik7XHJcbiAgfVxyXG5cclxuICAubW92aWUtZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2VucmVzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgIC5nZW5yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMzgsIDUwLCA1Nik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wbG90IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAuZGV0YWlscy1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdG9ycyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgIC5hY3Rvci1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFNlYXNvbnMgVGFicyAqL1xyXG4gICAgLnNlYXNvbnMtdGFicyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIC5zZWFzb24tYnRuc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICAgICAgICBjb2xvcjogIzQ1MjdBMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUyN0EwO1xyXG4gICAgICAgICAgICBjb2xvcjogI0Y1RjVGNTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zZWFzb24tdGFiIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggZG90dGVkICM1QzZCQzA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNiMzlkZGJjMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsLmVwaXNvZGVzLWxpc3Qge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRUVFRUVFO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5QzI3QjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDUyN0EwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 337:
/*!***************************************************************!*\
  !*** ./src/app/features/content/pages/home/home.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/image-slider/image-slider.component */ 7369);


class HomeComponent {
  constructor() {
    this.slides = [{
      url: 'https://www.themoviedb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg',
      title: 'RRR'
    }, {
      url: 'https://i.imgur.com/Js7wGIt.jpeg',
      title: 'Bahubali'
    }, {
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDT8DLq-8swTp99tkIg7WkHlQEChWGAl71dJClxCLnR4y5-zwd',
      title: '24'
    }, {
      url: "https://rukminim2.flixcart.com/image/850/1000/av-media/movies/g/x/d/robo-original-imadd5zx3tyf3ugq.jpeg",
      title: "Robo"
    }];
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 8,
  vars: 1,
  consts: [[1, "home-page"], [1, "slider-container"], [3, "slides"], [1, "main-container"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-image-slider", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Find Your Next Addictive Series");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Filtered For You: Unearth Binge-Worthy Movies and Series Tailored to Your Tastes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("slides", ctx.slides);
    }
  },
  dependencies: [_components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_0__.ImageSliderComponent],
  styles: [".home-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 95px);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.home-page[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%] {\n  height: 380px;\n  width: 300px;\n}\n.home-page[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%]   .slider-image[_ngcontent-%COMP%] {\n  height: 380px;\n  width: 100%;\n}\n.home-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 400px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 25px 5px;\n}\n.home-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #0D60C8;\n  font-size: 45px;\n  margin-bottom: 20px;\n}\n.home-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 25px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGVudC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFBRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDTjtBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKO0FBRUk7RUFDRSxjQ3pCQztFRDBCRCxlQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuLmhvbWUtcGFnZSB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAzODBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAuc2xpZGVyLWltYWdlIHtcclxuICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMjVweCA1cHg7XHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIvLyBfY29sb3JzLnNjc3NcclxuJHZpb2xldDogIzE4MTkzRjtcclxuJGJsdWU6ICMwRDYwQzg7XHJcbiRwaW5rOiAjQjE1Q0MyO1xyXG4kb3JhbmdlOiAjRkM2MkEwO1xyXG4kcGVhY2g6ICNGRjg5Nzg7XHJcbiR5ZWxsb3c6ICNGRkMxNUU7XHJcbiRncmVlbjogI0Y5Rjg3MTtcclxuJGdyYXk6ICNkMmQyZDI7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHdoaXRlOiNmZmZmO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 327:
/*!*****************************************************************!*\
  !*** ./src/app/features/content/pages/reset/reset.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetComponent": () => (/* binding */ ResetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class ResetComponent {}
ResetComponent.ɵfac = function ResetComponent_Factory(t) {
  return new (t || ResetComponent)();
};
ResetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ResetComponent,
  selectors: [["app-reset"]],
  decls: 2,
  vars: 0,
  template: function ResetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reset works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5880:
/*!*******************************************************************!*\
  !*** ./src/app/features/content/pages/search/search.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class SearchComponent {}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)();
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 22,
  vars: 0,
  consts: [[1, "search-page"], [1, "trending"], [1, "title"], [1, "fa-solid", "fa-arrow-trend-up"], [1, "trending-list"], [1, "trend"], [1, "ribbon-2"], ["src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d402e261-4f38-49bb-924d-0ba2c0e845c3/dg2gpb4-cf9a8e2e-29b2-444e-8fa9-86f615c057f2.jpg/v1/fill/w_800,h_1000,q_70,strp/jawan_fan_made_poster_2023_by_tarikulraana_dg2gpb4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwMCIsInBhdGgiOiJcL2ZcL2Q0MDJlMjYxLTRmMzgtNDliYi05MjRkLTBiYTJjMGU4NDVjM1wvZGcyZ3BiNC1jZjlhOGUyZS0yOWIyLTQ0NGUtOGZhOS04NmY2MTVjMDU3ZjIuanBnIiwid2lkdGgiOiI8PTEyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MSgoUG-4v0v_PTrhngMHmqPOq0heGXpMhef3qMaAOMg", "alt", ""], ["src", "https://media.spicyonion.com/cache/images/profile/title/miss-shetty-mr-polishetty-telugu-movie/miss-shetty-mr-polishetty-telugu-movie-2240x320.jpg", "alt", ""], ["src", "https://media.spicyonion.com/cache/images/profile/title/kushi-telugu-movie/kushi-telugu-movie-1240x320.jpg", "alt", ""], ["src", "https://m.media-amazon.com/images/M/MV5BNDA5YzlhNjItMDgxNC00MjQ4LWIzMDMtYTUyMzBhNjViNDk3XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg", "alt", ""]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Trending ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "in Theaters");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "in Theaters");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "in Theaters");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5)(19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "in OTT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["[class^=ribbon-][_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 23px;\n}\n[class^=ribbon-][_ngcontent-%COMP%]:before, [class^=ribbon-][_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon-1[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 100px;\n  background: #ee583a;\n  top: -6px;\n  left: 25px;\n}\n.ribbon-1[_ngcontent-%COMP%]:before {\n  height: 0;\n  width: 0;\n  border-bottom: 6px solid #ca3011;\n  border-right: 6px solid transparent;\n  right: -6px;\n}\n.ribbon-1[_ngcontent-%COMP%]:after {\n  height: 0;\n  width: 0;\n  border-left: 30px solid #ee583a;\n  border-right: 30px solid #ee583a;\n  border-bottom: 30px solid transparent;\n  bottom: -30px;\n}\n\n.ribbon-2[_ngcontent-%COMP%] {\n  width: 166px;\n  height: 24px;\n  background: #21749a;\n  left: 0px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 10px;\n  color: white;\n}\n.ribbon-2[_ngcontent-%COMP%]:after {\n  height: 0;\n  width: 0;\n  border-top: 12.5px solid transparent;\n  border-bottom: 12.5px solid transparent;\n  border-left: 15px solid #21749a;\n  right: -15px;\n}\n\n.ribbon-3[_ngcontent-%COMP%], .ribbon-4[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 50px;\n  margin-left: -10px;\n  margin-right: -10px;\n  background: #efb23b;\n}\n.ribbon-3[_ngcontent-%COMP%]:before, .ribbon-4[_ngcontent-%COMP%]:before {\n  height: 0;\n  width: 0;\n  border-top: 10px solid #cd8d11;\n  border-left: 10px solid transparent;\n  bottom: -10px;\n}\n.ribbon-3[_ngcontent-%COMP%]:after, .ribbon-4[_ngcontent-%COMP%]:after {\n  height: 0;\n  width: 0;\n  border-top: 10px solid #cd8d11;\n  border-right: 10px solid transparent;\n  right: 0;\n  bottom: -10px;\n}\n\n.ribbon-4[_ngcontent-%COMP%]:before {\n  height: 0;\n  width: 0;\n  border-width: 20px 20px;\n  border-style: solid;\n  border-color: #31a5b3 #31a5b3 #31a5b3 transparent;\n  top: 20px;\n  left: -30px;\n}\n.ribbon-4[_ngcontent-%COMP%]:after {\n  height: 0;\n  width: 0;\n  border-width: 20px 20px;\n  border-style: solid;\n  border-color: #31a5b3 transparent #31a5b3 #31a5b3;\n  top: 20px;\n  right: -30px;\n}\n\n.ribbon-content[_ngcontent-%COMP%] {\n  height: inherit;\n  margin-bottom: 0;\n  background: #37b7c7;\n  z-index: 100;\n}\n.ribbon-content[_ngcontent-%COMP%]:before {\n  height: 0;\n  width: 0;\n  border-top: 10px solid #26808b;\n  border-left: 10px solid transparent;\n  bottom: -10px;\n}\n.ribbon-content[_ngcontent-%COMP%]:after {\n  height: 0;\n  width: 0;\n  border-top: 10px solid #26808b;\n  border-right: 10px solid transparent;\n  right: 0;\n  bottom: -10px;\n}\n\n.search-page[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.search-page[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.search-page[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n.search-page[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .trending-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n}\n.search-page[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .trending-list[_ngcontent-%COMP%]   .trend[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 280px;\n  position: relative;\n  margin: 0px 10px;\n}\n.search-page[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]   .trending-list[_ngcontent-%COMP%]   .trend[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3JpYmJvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGVudC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0FGO0FEQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QUQwRkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUN2RkY7QUR3RkU7RUE1RkEsU0FBQTtFQUNBLFFBQUE7RUFpREUsZ0NBQUE7RUFNRSxtQ0FBQTtFQXNDRixXQUFBO0FDbkZKO0FEcUZFO0VBaEdBLFNBQUE7RUFDQSxRQUFBO0VBZ0JJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQStFRixhQUFBO0FDL0VKOztBRHFGQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2xGSjtBRG1GRTtFQW5IQSxTQUFBO0VBQ0EsUUFBQTtFQXFCSSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUE2RkYsWUFBQTtBQzdFSjs7QURtRkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2hGRjtBRGlGRTtFQWpJQSxTQUFBO0VBQ0EsUUFBQTtFQXNDRSw4QkFBQTtFQUdFLG1DQUFBO0VBeUZGLGFBQUE7QUM1RUo7QUQ4RUU7RUFySUEsU0FBQTtFQUNBLFFBQUE7RUFzQ0UsOEJBQUE7RUFNRSxvQ0FBQTtFQTBGRixRQUFBO0VBQ0EsYUFBQTtBQ3pFSjs7QURnRkU7RUEvSUEsU0FBQTtFQUNBLFFBQUE7RUF3RUUsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBc0VBLFNBQUE7RUFDQSxXQUFBO0FDekVKO0FEMkVFO0VBcEpBLFNBQUE7RUFDQSxRQUFBO0VBOEVFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQXFFQSxTQUFBO0VBQ0EsWUFBQTtBQ3JFSjs7QUR3RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7QUN0RUY7QUR1RUU7RUFoS0EsU0FBQTtFQUNBLFFBQUE7RUFzQ0UsOEJBQUE7RUFHRSxtQ0FBQTtFQXdIRixhQUFBO0FDbEVKO0FEb0VFO0VBcEtBLFNBQUE7RUFDQSxRQUFBO0VBc0NFLDhCQUFBO0VBTUUsb0NBQUE7RUF5SEYsUUFBQTtFQUNBLGFBQUE7QUMvREo7O0FBakhFO0VBQ0UsVUFBQTtBQW9ISjtBQW5ISTtFQUNFLGFBQUE7QUFxSE47QUFwSE87RUFDQyxnQkFBQTtBQXNIUjtBQW5ISTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFxSE47QUFwSE07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBT0EsZ0JBQUE7QUFnSFI7QUF0SFE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBd0hYIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbltjbGFzc149XCJyaWJib24tXCJdIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMjNweDtcclxuICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRyaWFuZ2xlICgkc2l6ZSwgJGNvbG9yLCAkZGlyZWN0aW9uKSB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG5cclxuICAkd2lkdGg6IG50aCgkc2l6ZSwgMSk7XHJcbiAgJGhlaWdodDogbnRoKCRzaXplLCBsZW5ndGgoJHNpemUpKTtcclxuXHJcbiAgJGZvcmVncm91bmQtY29sb3I6IG50aCgkY29sb3IsIDEpO1xyXG4gICRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuICBAaWYgKGxlbmd0aCgkY29sb3IpID09IDIpIHtcclxuICAgICRiYWNrZ3JvdW5kLWNvbG9yOiBudGgoJGNvbG9yLCAyKTtcclxuICB9XHJcblxyXG4gIEBpZiAoJGRpcmVjdGlvbiA9PSB1cCkgb3IgKCRkaXJlY3Rpb24gPT0gZG93bikgb3IgKCRkaXJlY3Rpb24gPT0gcmlnaHQpIG9yICgkZGlyZWN0aW9uID09IGxlZnQpIHtcclxuXHJcbiAgICAkd2lkdGg6ICR3aWR0aCAvIDI7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24gPT0gdXAge1xyXG4gICAgICBib3JkZXItbGVmdDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmlnaHQ6ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogJGhlaWdodCBzb2xpZCAkZm9yZWdyb3VuZC1jb2xvcjtcclxuXHJcbiAgICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gcmlnaHQge1xyXG4gICAgICBib3JkZXItdG9wOiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLWxlZnQ6ICRoZWlnaHQgc29saWQgJGZvcmVncm91bmQtY29sb3I7XHJcblxyXG4gICAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGRvd24ge1xyXG4gICAgICBib3JkZXItbGVmdDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmlnaHQ6ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLXRvcDogJGhlaWdodCBzb2xpZCAkZm9yZWdyb3VuZC1jb2xvcjtcclxuXHJcbiAgICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gbGVmdCB7XHJcbiAgICAgIGJvcmRlci10b3A6ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmlnaHQ6ICRoZWlnaHQgc29saWQgJGZvcmVncm91bmQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSB1cC1yaWdodCkgb3IgKCRkaXJlY3Rpb24gPT0gdXAtbGVmdCkge1xyXG4gICAgYm9yZGVyLXRvcDogJGhlaWdodCBzb2xpZCAkZm9yZWdyb3VuZC1jb2xvcjtcclxuXHJcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSB1cC1yaWdodCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAgJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSB1cC1sZWZ0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSBkb3duLXJpZ2h0KSBvciAoJGRpcmVjdGlvbiA9PSBkb3duLWxlZnQpIHtcclxuICAgIGJvcmRlci1ib3R0b206ICRoZWlnaHQgc29saWQgJGZvcmVncm91bmQtY29sb3I7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24gPT0gZG93bi1yaWdodCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAgJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBkb3duLWxlZnQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGluc2V0LXVwKSB7XHJcbiAgICBib3JkZXItd2lkdGg6ICRoZWlnaHQgJHdpZHRoO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGJhY2tncm91bmQtY29sb3IgJGJhY2tncm91bmQtY29sb3IgJGZvcmVncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSBpbnNldC1kb3duKSB7XHJcbiAgICBib3JkZXItd2lkdGg6ICRoZWlnaHQgJHdpZHRoO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGZvcmVncm91bmQtY29sb3IgJGJhY2tncm91bmQtY29sb3IgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSBpbnNldC1yaWdodCkge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkd2lkdGggJGhlaWdodDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yICRiYWNrZ3JvdW5kLWNvbG9yICRiYWNrZ3JvdW5kLWNvbG9yICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgQGVsc2UgaWYgKCRkaXJlY3Rpb24gPT0gaW5zZXQtbGVmdCkge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkd2lkdGggJGhlaWdodDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yICRmb3JlZ3JvdW5kLWNvbG9yICRiYWNrZ3JvdW5kLWNvbG9yICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmliYm9uLTFcclxuLnJpYmJvbi0xIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZTU4M2E7XHJcbiAgdG9wOiAtNnB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgQGluY2x1ZGUgdHJpYW5nbGUoNnB4LCBkYXJrZW4oI2VlNTgzYSwgMTUlKSwgZG93bi1sZWZ0KTtcclxuICAgIHJpZ2h0OiAtNnB4O1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIEBpbmNsdWRlIHRyaWFuZ2xlKDYwcHggMzBweCwgdHJhbnNwYXJlbnQgI2VlNTgzYSwgdXApO1xyXG4gICAgYm90dG9tOiAtMzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBSaWJib24tMlxyXG4ucmliYm9uLTIge1xyXG4gICAgd2lkdGg6IDE2NnB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIxNzQ5YTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJpYW5nbGUoMjVweCAxNXB4LCAjMjE3NDlhLCByaWdodCk7XHJcbiAgICByaWdodDogLTE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gUmliYm9uLTNcclxuLnJpYmJvbi0zIHtcclxuICB3aWR0aDogNDAwcHggKyAyMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZWZiMjNiO1xyXG4gICY6YmVmb3JlIHtcclxuICAgIEBpbmNsdWRlIHRyaWFuZ2xlKDEwcHgsIGRhcmtlbigjZWZiMjNiLDE1JSksIHVwLXJpZ2h0KTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJpYW5nbGUoMTBweCwgZGFya2VuKCNlZmIyM2IsMTUlKSwgdXAtbGVmdCk7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSaWJib24tNFxyXG4ucmliYm9uLTQge1xyXG4gIEBleHRlbmQgLnJpYmJvbi0zO1xyXG4gICY6YmVmb3JlIHtcclxuICAgIEBpbmNsdWRlIHRyaWFuZ2xlKDIwcHgsIHRyYW5zcGFyZW50IGRhcmtlbigjMzdiN2M3LCA1JSksIGluc2V0LXJpZ2h0KTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IC0zMHB4O1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIEBpbmNsdWRlIHRyaWFuZ2xlKDIwcHgsIHRyYW5zcGFyZW50IGRhcmtlbigjMzdiN2M3LCA1JSksIGluc2V0LWxlZnQpO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IC0zMHB4O1xyXG4gIH1cclxufVxyXG4ucmliYm9uLWNvbnRlbnQge1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tYm90dG9tOiAwOyAvLyByZXNldCB0aGUgdmFsdWUgaW4gW2NsYXNzXj1cInJpYmJvbi1cIl1cclxuXHJcbiAgYmFja2dyb3VuZDogIzM3YjdjNztcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgQGluY2x1ZGUgdHJpYW5nbGUoMTBweCwgZGFya2VuKCMzN2I3YzcsIDE1JSksIHVwLXJpZ2h0KTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJpYW5nbGUoMTBweCwgZGFya2VuKCMzN2I3YzcsIDE1JSksIHVwLWxlZnQpO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gIH1cclxufVxyXG5cclxuIiwiQGltcG9ydCBcInJpYmJvbnNcIjtcclxuLnNlYXJjaC1wYWdle1xyXG4gIC50cmVuZGluZ3tcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICBpe1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudHJlbmRpbmctbGlzdHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgICAudHJlbmR7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1827:
/*!*********************************************************************!*\
  !*** ./src/app/features/content/pages/sign-in/sign-in.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



class SignInComponent {}
SignInComponent.ɵfac = function SignInComponent_Factory(t) {
  return new (t || SignInComponent)();
};
SignInComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SignInComponent,
  selectors: [["app-sign-in"]],
  decls: 35,
  vars: 1,
  consts: [[1, "auth-page"], [1, "area"], ["src", "assets/dog.jpg", "alt", ""], [1, "main"], [1, "content"], [1, "buttons"], [1, "row"], ["src", "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png", "alt", "", 1, "icon"], [1, "divider"], ["action", ""], ["for", "email"], ["name", "email", "type", "text"], ["for", "password"], ["name", "password", "type", "text"], [3, "disabled"], ["routerLink", "/signup"]],
  template: function SignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign in for full-access");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign in to BingeWorthy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign in with Google ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "or sign in with email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 9)(17, "div", 6)(18, "fieldset")(19, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Username or Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6)(23, "fieldset")(24, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6)(28, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6)(31, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Don't have an account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["@keyframes _ngcontent-%COMP%_scrollUp {\n  15%, 25% {\n    transform: translateY(-20%);\n  }\n  40%, 50% {\n    transform: translateY(-40%);\n  }\n  65%, 75% {\n    transform: translateY(-60%);\n  }\n  90%, 100% {\n    transform: translateY(-80%);\n  }\n}\n@keyframes _ngcontent-%COMP%_jump {\n  0% {\n    margin-top: 0;\n  }\n  35% {\n    margin-top: -75px;\n  }\n  70% {\n    margin-top: 0px;\n  }\n}\n@keyframes _ngcontent-%COMP%_stretch {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.05);\n  }\n}\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F5F5F5;\n}\n.auth-page[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  height: 100%;\n  width: 400px;\n  background-color: #5E35B1;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n@media (max-width: 767px) {\n  .auth-page[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-page[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  animation-name: _ngcontent-%COMP%_stretch;\n  animation-duration: 2s;\n  animation-timing-function: ease-out;\n  animation-direction: alternate;\n  animation-iteration-count: infinite;\n  animation-play-state: running;\n}\n.auth-page[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  font-size: large;\n  font-family: monospace;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  min-width: 400px;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 0px 10px;\n  background-color: white;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 56px;\n  overflow: hidden;\n  font-family: inherit;\n  line-height: 1;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  border-radius: 20px;\n  border: 0px;\n  padding: 6px 11px;\n  width: 48px;\n  height: 48px;\n  background: white;\n  color: black;\n  border: 1px solid #E0E0E0;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  color: white;\n}\n@media (max-width: 767px) {\n  .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  margin-bottom: 24px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%] {\n  display: flex;\n  color: red;\n  flex-direction: column;\n  list-style: square;\n  margin-bottom: 20px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font: -webkit-control;\n  margin-bottom: 6px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 12px 0px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 56px;\n  overflow: hidden;\n  font-family: inherit;\n  line-height: 1;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  border-radius: 20px;\n  border: 0px;\n  padding: 12px 24px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(1) button {\n  background-color: white;\n  color: #0d0c22;\n  border: 1px solid gray;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(1) button:hover {\n  background-color: white;\n  color: #0d0c22;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  margin: 10px 0;\n  color: #6e6d7a;\n  font-family: auto;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 40%;\n  height: 1px;\n  background-color: gainsboro;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  right: 100%;\n  margin-right: 10px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::after {\n  left: 100%;\n  margin-left: 10px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 12px 0px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d0c22;\n  text-decoration: underline;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #18193f;\n  background-color: white;\n  left: 10px;\n  position: absolute;\n  top: -8px;\n  padding: 0px 4px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 14px;\n  padding: 18px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 1px solid #18193F;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  border: 0px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus {\n  outline: 0px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: red;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 1px solid red;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 56px;\n  overflow: hidden;\n  font-family: inherit;\n  line-height: 1;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  border-radius: 20px;\n  border: 0px;\n  padding: 12px 24px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19hbmltYXRpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2ZlYXR1cmVzL2NvbnRlbnQvcGFnZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX21lZGlhLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUk7SUFDSSwyQkFBQTtFQ0hOO0VERUU7SUFDSSwyQkFBQTtFQ0FOO0VEREU7SUFDSSwyQkFBQTtFQ0dOO0VESkU7SUFDSSwyQkFBQTtFQ01OO0FBQ0Y7QURIQTtFQUNFO0lBQ0UsYUFBQTtFQ0tGO0VESEE7SUFDRSxpQkFBQTtFQ0tGO0VESEE7SUFDRSxlQUFBO0VDS0Y7QUFDRjtBREhBO0VBQ0k7SUFDWSxzQkFBQTtFQ0tkO0VERlU7SUFDSSxtQkFBQTtFQ0lkO0VERlU7SUFDSSxzQkFBQTtFQ0lkO0FBQ0Y7QUE5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZ0NGO0FBL0JFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQWlDSjtBQy9DRTtFRE1BO0lBV0ksYUFBQTtFQWtDSjtBQUNGO0FBaENJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtBQWtDTjtBQS9CSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBaUNOO0FBN0JFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBK0JKO0FBOUJJO0VFbERGLGFBQUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBRUYsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFSSxpQkFBQTtFQW9CRixXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FGK0RKO0FFakZFO0VBQ0UscUNBQUE7QUZtRko7QUVqRkU7RUFDRSxxQ0FBQTtBRm1GSjtBRWpGQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRm1GRjtBRXpFSTtFQUNBLHVCQUFBO0VBQ0MsWUFBQTtBRjJFTDtBQ3JIRTtFRCtDRTtJQUlJLGFBQUE7RUFzRU47QUFDRjtBQW5FSTtFQUVFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW9FTjtBQWxFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBb0VSO0FBakVNO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFtRVI7QUFqRVE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBbUVWO0FBaEVNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNELHNCQUFBO0FBa0VQO0FBakVRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFtRVY7QUFsRVU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUVqR1YsYUFBQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFFRixzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQU1FLGtCQUFBO0FGaUtKO0FFL0pFO0VBQ0UscUNBQUE7QUZpS0o7QUUvSkU7RUFDRSxxQ0FBQTtBRmlLSjtBRS9KQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRmlLRjtBQTdGWTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBK0ZkO0FBOUZjO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBZ0doQjtBQXpGTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBMkZSO0FBMUZRO0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUEyRlo7QUF4RlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUEwRlo7QUF2RlE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUF5Rlo7QUFwRk07RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFzRlI7QUFyRlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQXVGVjtBQXJGVTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQXVGWjtBQXBGVTtFRzFKTixrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUhpUEo7QUdoUEk7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUhrUE47QUcvT0k7OztFQUdFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FIaVBOO0FHaFBNOzs7RUFDRSwwQkFBQTtBSG9QUjtBR2pQRTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUhrUEo7QUdqUEk7RUFDRSxZQUFBO0FIbVBOO0FHL09LO0VBQ0MsVUFBQTtBSGlQTjtBRy9PSzs7O0VBR0MscUJBQUE7QUhpUE47QUdoUE87OztFQUNDLHNCQUFBO0FIb1BSO0FBcElVO0VFL0pSLGFBQUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBRUYsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFNRSxrQkFBQTtBRmlTSjtBRS9SRTtFQUNFLHFDQUFBO0FGaVNKO0FFL1JFO0VBQ0UscUNBQUE7QUZpU0o7QUUvUkM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUZpU0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpYWJsZXNcclxuJGl0ZW0tY291bnQ6IDU7XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbFVwIHtcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICgkaXRlbS1jb3VudCAtIDEpIHtcclxuICAgICN7KCRpICogMjUpIC0gMTAlfSwgI3skaSAqIDI1JX0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgoLTEwMCUgLyAkaXRlbS1jb3VudCkgKiAkaSk7XHJcbiAgICAgfVxyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGp1bXAge1xyXG4gIDAlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzdHJldGNoIHtcclxuICAgIDAlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSIsIkBpbXBvcnQgXCJmb3JtXCI7XHJcbkBpbXBvcnQgXCJidXR0b25cIjtcclxuQGltcG9ydCBcImFuaW1hdGlvbnNcIjtcclxuQGltcG9ydCBcIm1lZGlhXCI7XHJcblxyXG4uYXV0aC1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAuYXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RTM1QjE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogc3RyZXRjaDtcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjBzO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbiB7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYnV0dG9uLmJhY2tCdG4ge1xyXG4gICAgICBAaW5jbHVkZSBpY29uQnV0dG9uKCdzbWFsbCcpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVycm9ycyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbGlzdC1zdHlsZTogc3F1YXJlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICBmb250OiAtd2Via2l0LWNvbnRyb2w7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5idXR0b25ze1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4IDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCdsYXJnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBjb2xvcjogIzBkMGMyMjtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMGQwYzIyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgLmRpdmlkZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgY29sb3I6ICM2ZTZkN2E7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGF1dG87XHJcbiAgICAgICAgJjo6YmVmb3JlLFxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzBkMGMyMjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZmllbGRzZXQge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBpbnB1dEZpZWxkc2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbignbGFyZ2UnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIkdGFibGV0LXdpZHRoOiA3NjhweDtcclxuJGRlc2t0b3Atd2lkdGg6IDEwMjRweDtcclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyR0YWJsZXQtd2lkdGggLSAxcHh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSBhbmQgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aCAtIDFweH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBidXR0b24oJHNpemUpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDo1NnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gICBAaWYgJHNpemUgPT0gc21hbGwge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTFweDtcclxuICB9IEBlbHNlIGlmICRzaXplID09IG1lZGl1bSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYXJnZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA3NSUpO1xyXG4gIH1cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDU1JSk7XHJcbiAgfVxyXG4gLmljb257XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gfVxyXG59XHJcbkBtaXhpbiBpY29uQnV0dG9uKCRzaXplKXtcclxuICAgQGluY2x1ZGUgYnV0dG9uKCRzaXplKTtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5AbWl4aW4gaW5wdXRGaWVsZHNldCgpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjMTgxOTNmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC04cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0LFxyXG4gICAgdGV4dGFyZWEsXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE4cHggMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgJjpmb2N1c3tcclxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgJHZpb2xldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdXHJcbiAge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6Zm9jdXN7XHJcbiAgICAgIG91dGxpbmU6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgJi5oYXNFcnJvcntcclxuICAgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgICAgaW5wdXQsXHJcbiAgICB0ZXh0YXJlYSxcclxuICAgIHNlbGVjdCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 1232:
/*!*********************************************************************!*\
  !*** ./src/app/features/content/pages/sign-up/sign-up.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




function SignUpComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign up with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10)(6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_div_11_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.isGoogleLogin = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Continue with email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function SignUpComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 13)(1, "div", 10)(2, "fieldset", 14)(3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fieldset")(7, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "fieldset")(12, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "fieldset")(17, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10)(21, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " I agree with BingeWorthy's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10)(31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Already have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
  }
}
class SignUpComponent {
  constructor() {
    this.isGoogleLogin = true;
  }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)();
};
SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["app-sign-up"]],
  decls: 13,
  vars: 4,
  consts: [[1, "auth-page"], [1, "area"], ["src", "assets/login2.svg", "alt", ""], [1, "main"], [1, "backBtn", 3, "click"], [1, "fa-solid", "fa-chevron-left"], [1, "content"], ["class", "buttons", 4, "ngIf"], ["action", "", 4, "ngIf"], [1, "buttons"], [1, "row"], ["src", "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png", "alt", "", 1, "icon"], [3, "click"], ["action", ""], [1, "hasError"], ["for", "name"], ["name", "name", "type", "text"], ["for", "username"], ["name", "username", "type", "text"], ["for", "email"], ["name", "email", "type", "text"], ["for", "password"], ["placeholder", "6+ characters", "name", "password", "type", "text"], ["type", "checkbox", "name", "tndc"], ["routerLink", "/"], [3, "disabled"], ["routerLink", "/signin"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "your'e are just one step away");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_6_listener() {
        return ctx.isGoogleLogin = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign up to BingeWorthy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignUpComponent_div_11_Template, 8, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignUpComponent_form_12_Template, 35, 1, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", ctx.isGoogleLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGoogleLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isGoogleLogin);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["@keyframes _ngcontent-%COMP%_scrollUp {\n  15%, 25% {\n    transform: translateY(-20%);\n  }\n  40%, 50% {\n    transform: translateY(-40%);\n  }\n  65%, 75% {\n    transform: translateY(-60%);\n  }\n  90%, 100% {\n    transform: translateY(-80%);\n  }\n}\n@keyframes _ngcontent-%COMP%_jump {\n  0% {\n    margin-top: 0;\n  }\n  35% {\n    margin-top: -75px;\n  }\n  70% {\n    margin-top: 0px;\n  }\n}\n@keyframes _ngcontent-%COMP%_stretch {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.05);\n  }\n}\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F5F5F5;\n}\n.auth-page[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  height: 100%;\n  width: 400px;\n  background-color: #5E35B1;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n@media (max-width: 767px) {\n  .auth-page[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-page[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  animation-name: _ngcontent-%COMP%_stretch;\n  animation-duration: 2s;\n  animation-timing-function: ease-out;\n  animation-direction: alternate;\n  animation-iteration-count: infinite;\n  animation-play-state: running;\n}\n.auth-page[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  font-size: large;\n  font-family: monospace;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  min-width: 400px;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 0px 10px;\n  background-color: white;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 56px;\n  overflow: hidden;\n  font-family: inherit;\n  line-height: 1;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  border-radius: 20px;\n  border: 0px;\n  padding: 6px 11px;\n  width: 48px;\n  height: 48px;\n  background: white;\n  color: black;\n  border: 1px solid #E0E0E0;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  color: white;\n}\n@media (max-width: 767px) {\n  .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button.backBtn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  margin-bottom: 24px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%] {\n  display: flex;\n  color: red;\n  flex-direction: column;\n  list-style: square;\n  margin-bottom: 20px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font: -webkit-control;\n  margin-bottom: 6px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 12px 0px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 56px;\n  overflow: hidden;\n  font-family: inherit;\n  line-height: 1;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  border-radius: 20px;\n  border: 0px;\n  padding: 12px 24px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(1) button {\n  background-color: white;\n  color: #0d0c22;\n  border: 1px solid gray;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(1) button:hover {\n  background-color: white;\n  color: #0d0c22;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 12px 0px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d0c22;\n  text-decoration: underline;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #18193f;\n  background-color: white;\n  left: 10px;\n  position: absolute;\n  top: -8px;\n  padding: 0px 4px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 14px;\n  padding: 18px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 1px solid #18193F;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  border: 0px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus {\n  outline: 0px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: red;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   fieldset.hasError[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 1px solid red;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 56px;\n  overflow: hidden;\n  font-family: inherit;\n  line-height: 1;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  border-radius: 20px;\n  border: 0px;\n  padding: 12px 24px;\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.auth-page[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19hbmltYXRpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2ZlYXR1cmVzL2NvbnRlbnQvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX21lZGlhLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUk7SUFDSSwyQkFBQTtFQ0hOO0VERUU7SUFDSSwyQkFBQTtFQ0FOO0VEREU7SUFDSSwyQkFBQTtFQ0dOO0VESkU7SUFDSSwyQkFBQTtFQ01OO0FBQ0Y7QURIQTtFQUNFO0lBQ0UsYUFBQTtFQ0tGO0VESEE7SUFDRSxpQkFBQTtFQ0tGO0VESEE7SUFDRSxlQUFBO0VDS0Y7QUFDRjtBREhBO0VBQ0k7SUFDWSxzQkFBQTtFQ0tkO0VERlU7SUFDSSxtQkFBQTtFQ0lkO0VERlU7SUFDSSxzQkFBQTtFQ0lkO0FBQ0Y7QUE5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZ0NGO0FBL0JFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQWlDSjtBQy9DRTtFRE1BO0lBV0ksYUFBQTtFQWtDSjtBQUNGO0FBaENJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtBQWtDTjtBQS9CSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBaUNOO0FBN0JFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBK0JKO0FBOUJJO0VFbERGLGFBQUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBRUYsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFSSxpQkFBQTtFQW9CRixXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FGK0RKO0FFakZFO0VBQ0UscUNBQUE7QUZtRko7QUVqRkU7RUFDRSxxQ0FBQTtBRm1GSjtBRWpGQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRm1GRjtBRXpFSTtFQUNBLHVCQUFBO0VBQ0MsWUFBQTtBRjJFTDtBQ3JIRTtFRCtDRTtJQUlJLGFBQUE7RUFzRU47QUFDRjtBQW5FSTtFQUVFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW9FTjtBQWxFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBb0VSO0FBakVNO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFtRVI7QUFqRVE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBbUVWO0FBaEVNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Qsc0JBQUE7QUFrRVA7QUFqRVE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQW1FVjtBQWxFVTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFRWhHVixhQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUVGLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBTUUsa0JBQUE7QUZnS0o7QUU5SkU7RUFDRSxxQ0FBQTtBRmdLSjtBRTlKRTtFQUNFLHFDQUFBO0FGZ0tKO0FFOUpDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FGZ0tGO0FBN0ZZO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUErRmQ7QUE5RmM7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFnR2hCO0FBekZNO0VBQ0UsZ0JBQUE7QUEyRlI7QUF6RlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQTJGVjtBQXpGVTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQTJGWjtBQXhGVTtFRzdITixrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUh3Tko7QUd2Tkk7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUh5Tk47QUd0Tkk7OztFQUdFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FId05OO0FHdk5NOzs7RUFDRSwwQkFBQTtBSDJOUjtBR3hORTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUh5Tko7QUd4Tkk7RUFDRSxZQUFBO0FIME5OO0FHdE5LO0VBQ0MsVUFBQTtBSHdOTjtBR3ROSzs7O0VBR0MscUJBQUE7QUh3Tk47QUd2Tk87OztFQUNDLHNCQUFBO0FIMk5SO0FBeElVO0VFbElSLGFBQUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBRUYsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFNRSxrQkFBQTtBRndRSjtBRXRRRTtFQUNFLHFDQUFBO0FGd1FKO0FFdFFFO0VBQ0UscUNBQUE7QUZ3UUo7QUV0UUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUZ3UUYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpYWJsZXNcclxuJGl0ZW0tY291bnQ6IDU7XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbFVwIHtcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICgkaXRlbS1jb3VudCAtIDEpIHtcclxuICAgICN7KCRpICogMjUpIC0gMTAlfSwgI3skaSAqIDI1JX0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgoLTEwMCUgLyAkaXRlbS1jb3VudCkgKiAkaSk7XHJcbiAgICAgfVxyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGp1bXAge1xyXG4gIDAlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzdHJldGNoIHtcclxuICAgIDAlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSIsIkBpbXBvcnQgXCJmb3JtXCI7XHJcbkBpbXBvcnQgXCJidXR0b25cIjtcclxuQGltcG9ydCBcImFuaW1hdGlvbnNcIjtcclxuQGltcG9ydCBcIm1lZGlhXCI7XHJcblxyXG4uYXV0aC1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAuYXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RTM1QjE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogc3RyZXRjaDtcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjBzO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbiB7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYnV0dG9uLmJhY2tCdG4ge1xyXG4gICAgICBAaW5jbHVkZSBpY29uQnV0dG9uKCdzbWFsbCcpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVycm9ycyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbGlzdC1zdHlsZTogc3F1YXJlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICBmb250OiAtd2Via2l0LWNvbnRyb2w7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5idXR0b25ze1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4IDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCdsYXJnZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBjb2xvcjogIzBkMGMyMjtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMGQwYzIyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwZDBjMjI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZpZWxkc2V0IHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgaW5wdXRGaWVsZHNldDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBidXR0b24oJ2xhcmdlJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMDI0cHg7XHJcblxyXG5AbWl4aW4gbW9iaWxlIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogI3skdGFibGV0LXdpZHRoIC0gMXB4fSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGggLSAxcHh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYnV0dG9uKCRzaXplKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6NTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDBweDtcclxuICAgQGlmICRzaXplID09IHNtYWxsIHtcclxuICAgICAgcGFkZGluZzogNnB4IDExcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBtZWRpdW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFyZ2Uge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIH1cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNzUlKTtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA1NSUpO1xyXG4gIH1cclxuIC5pY29ue1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBtYXJnaW46IDVweDtcclxuIH1cclxufVxyXG5AbWl4aW4gaWNvbkJ1dHRvbigkc2l6ZSl7XHJcbiAgIEBpbmNsdWRlIGJ1dHRvbigkc2l6ZSk7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuQG1peGluIGlucHV0RmllbGRzZXQoKSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogIzE4MTkzZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dCxcclxuICAgIHRleHRhcmVhLFxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBwYWRkaW5nOiAxOHB4IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICR2aW9sZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBpbnB1dFt0eXBlPWNoZWNrYm94XVxyXG4gIHtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICBvdXRsaW5lOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuaGFzRXJyb3J7XHJcbiAgICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgIGlucHV0LFxyXG4gICAgdGV4dGFyZWEsXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 4761:
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.development */ 1261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class ApiService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api`; // Replace with your API endpoint
  }

  createContent(content) {
    return this.http.post(`${this.apiUrl}/contents`, content);
  }
  getContent(params) {
    const queryParams = {
      params: {
        perPage: params.perPage,
        page: params.page
      }
    };
    return this.http.get(`${this.apiUrl}/contents`, queryParams);
  }
  getContentById(id) {
    return this.http.get(`${this.apiUrl}/contents/${id}`);
  }
  updateContent(id, content) {
    return this.http.put(`${this.apiUrl}/contents/${id}`, content);
  }
  deleteContent(id) {
    return this.http.delete(`${this.apiUrl}/contents/${id}`);
  }
  createActor(actor) {
    return this.http.post(`${this.apiUrl}/actors`, actor);
  }
  getActorById(id) {
    return this.http.get(`${this.apiUrl}/actors/${id}`);
  }
  updateActor(id, actor) {
    return this.http.put(`${this.apiUrl}/actors/${id}`, actor);
  }
  deleteActor(id) {
    return this.http.delete(`${this.apiUrl}/actors/${id}`);
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-splide */ 4352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);




class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, ngx_splide__WEBPACK_IMPORTED_MODULE_3__.NgxSplideModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule]
  });
})();

/***/ }),

/***/ 1261:
/*!*****************************************************!*\
  !*** ./src/environments/environment.development.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  // apiUrl : 'http://localhost:3000',
  apiUrl: 'https://bingeworthyapi.onrender.com'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map