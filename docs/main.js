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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Login ");
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
        this.showNavBar = event.url != '/login';
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
  consts: [[3, "searchbar", 4, "ngIf"], ["routerLink", "/", 1, "brand", "m-l-16"], ["routerLink", "/search", "class", "search-container", 4, "ngIf"], ["class", "search-inputcontainer", 4, "ngIf"], ["class", "navbar", 4, "ngIf"], ["routerLink", "/search", 1, "search-container"], [1, "suggestions"], [1, "suggestion"], [1, "fa", "fa-search"], [1, "search-inputcontainer"], ["placeholder", "search for binge content", "type", "text"], [1, "navbar"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/explore", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"]],
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
  styles: [".m-2[_ngcontent-%COMP%] {\n  margin: 2px !important;\n}\n\n.p-2[_ngcontent-%COMP%] {\n  padding: 2px !important;\n}\n\n.m-t-2[_ngcontent-%COMP%] {\n  margin-top: 2px !important;\n}\n\n.p-t-2[_ngcontent-%COMP%] {\n  padding-top: 2px !important;\n}\n\n.m-b-2[_ngcontent-%COMP%] {\n  margin-bottom: 2px !important;\n}\n\n.p-b-2[_ngcontent-%COMP%] {\n  padding-bottom: 2px !important;\n}\n\n.m-l-2[_ngcontent-%COMP%] {\n  margin-left: 2px !important;\n}\n\n.p-l-2[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n\n.m-r-2[_ngcontent-%COMP%] {\n  margin-right: 2px !important;\n}\n\n.p-r-2[_ngcontent-%COMP%] {\n  padding-right: 2px !important;\n}\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px !important;\n}\n\n.m-t-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.p-t-4[_ngcontent-%COMP%] {\n  padding-top: 4px !important;\n}\n\n.m-b-4[_ngcontent-%COMP%] {\n  margin-bottom: 4px !important;\n}\n\n.p-b-4[_ngcontent-%COMP%] {\n  padding-bottom: 4px !important;\n}\n\n.m-l-4[_ngcontent-%COMP%] {\n  margin-left: 4px !important;\n}\n\n.p-l-4[_ngcontent-%COMP%] {\n  padding-left: 4px !important;\n}\n\n.m-r-4[_ngcontent-%COMP%] {\n  margin-right: 4px !important;\n}\n\n.p-r-4[_ngcontent-%COMP%] {\n  padding-right: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n\n.m-t-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.p-t-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.m-b-8[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n\n.p-b-8[_ngcontent-%COMP%] {\n  padding-bottom: 8px !important;\n}\n\n.m-l-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n}\n\n.p-l-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n}\n\n.m-r-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.p-r-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.m-10[_ngcontent-%COMP%] {\n  margin: 10px !important;\n}\n\n.p-10[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n.m-t-10[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n\n.p-t-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.m-b-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\n\n.p-b-10[_ngcontent-%COMP%] {\n  padding-bottom: 10px !important;\n}\n\n.m-l-10[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\n\n.p-l-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n}\n\n.m-r-10[_ngcontent-%COMP%] {\n  margin-right: 10px !important;\n}\n\n.p-r-10[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n}\n\n.m-12[_ngcontent-%COMP%] {\n  margin: 12px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.m-t-12[_ngcontent-%COMP%] {\n  margin-top: 12px !important;\n}\n\n.p-t-12[_ngcontent-%COMP%] {\n  padding-top: 12px !important;\n}\n\n.m-b-12[_ngcontent-%COMP%] {\n  margin-bottom: 12px !important;\n}\n\n.p-b-12[_ngcontent-%COMP%] {\n  padding-bottom: 12px !important;\n}\n\n.m-l-12[_ngcontent-%COMP%] {\n  margin-left: 12px !important;\n}\n\n.p-l-12[_ngcontent-%COMP%] {\n  padding-left: 12px !important;\n}\n\n.m-r-12[_ngcontent-%COMP%] {\n  margin-right: 12px !important;\n}\n\n.p-r-12[_ngcontent-%COMP%] {\n  padding-right: 12px !important;\n}\n\n.m-14[_ngcontent-%COMP%] {\n  margin: 14px !important;\n}\n\n.p-14[_ngcontent-%COMP%] {\n  padding: 14px !important;\n}\n\n.m-t-14[_ngcontent-%COMP%] {\n  margin-top: 14px !important;\n}\n\n.p-t-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.m-b-14[_ngcontent-%COMP%] {\n  margin-bottom: 14px !important;\n}\n\n.p-b-14[_ngcontent-%COMP%] {\n  padding-bottom: 14px !important;\n}\n\n.m-l-14[_ngcontent-%COMP%] {\n  margin-left: 14px !important;\n}\n\n.p-l-14[_ngcontent-%COMP%] {\n  padding-left: 14px !important;\n}\n\n.m-r-14[_ngcontent-%COMP%] {\n  margin-right: 14px !important;\n}\n\n.p-r-14[_ngcontent-%COMP%] {\n  padding-right: 14px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.m-t-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.p-t-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.m-b-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px !important;\n}\n\n.p-b-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.m-l-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n}\n\n.p-l-16[_ngcontent-%COMP%] {\n  padding-left: 16px !important;\n}\n\n.m-r-16[_ngcontent-%COMP%] {\n  margin-right: 16px !important;\n}\n\n.p-r-16[_ngcontent-%COMP%] {\n  padding-right: 16px !important;\n}\n\n.m-18[_ngcontent-%COMP%] {\n  margin: 18px !important;\n}\n\n.p-18[_ngcontent-%COMP%] {\n  padding: 18px !important;\n}\n\n.m-t-18[_ngcontent-%COMP%] {\n  margin-top: 18px !important;\n}\n\n.p-t-18[_ngcontent-%COMP%] {\n  padding-top: 18px !important;\n}\n\n.m-b-18[_ngcontent-%COMP%] {\n  margin-bottom: 18px !important;\n}\n\n.p-b-18[_ngcontent-%COMP%] {\n  padding-bottom: 18px !important;\n}\n\n.m-l-18[_ngcontent-%COMP%] {\n  margin-left: 18px !important;\n}\n\n.p-l-18[_ngcontent-%COMP%] {\n  padding-left: 18px !important;\n}\n\n.m-r-18[_ngcontent-%COMP%] {\n  margin-right: 18px !important;\n}\n\n.p-r-18[_ngcontent-%COMP%] {\n  padding-right: 18px !important;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px !important;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.m-t-20[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\n\n.p-t-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.m-b-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\n\n.p-b-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px !important;\n}\n\n.m-l-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.p-l-20[_ngcontent-%COMP%] {\n  padding-left: 20px !important;\n}\n\n.m-r-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.p-r-20[_ngcontent-%COMP%] {\n  padding-right: 20px !important;\n}\n\n.m-22[_ngcontent-%COMP%] {\n  margin: 22px !important;\n}\n\n.p-22[_ngcontent-%COMP%] {\n  padding: 22px !important;\n}\n\n.m-t-22[_ngcontent-%COMP%] {\n  margin-top: 22px !important;\n}\n\n.p-t-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.m-b-22[_ngcontent-%COMP%] {\n  margin-bottom: 22px !important;\n}\n\n.p-b-22[_ngcontent-%COMP%] {\n  padding-bottom: 22px !important;\n}\n\n.m-l-22[_ngcontent-%COMP%] {\n  margin-left: 22px !important;\n}\n\n.p-l-22[_ngcontent-%COMP%] {\n  padding-left: 22px !important;\n}\n\n.m-r-22[_ngcontent-%COMP%] {\n  margin-right: 22px !important;\n}\n\n.p-r-22[_ngcontent-%COMP%] {\n  padding-right: 22px !important;\n}\n\n.m-24[_ngcontent-%COMP%] {\n  margin: 24px !important;\n}\n\n.p-24[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n\n.m-t-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.p-t-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.m-b-24[_ngcontent-%COMP%] {\n  margin-bottom: 24px !important;\n}\n\n.p-b-24[_ngcontent-%COMP%] {\n  padding-bottom: 24px !important;\n}\n\n.m-l-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.p-l-24[_ngcontent-%COMP%] {\n  padding-left: 24px !important;\n}\n\n.m-r-24[_ngcontent-%COMP%] {\n  margin-right: 24px !important;\n}\n\n.p-r-24[_ngcontent-%COMP%] {\n  padding-right: 24px !important;\n}\n\n@keyframes _ngcontent-%COMP%_scrollUp {\n  15%, 25% {\n    transform: translateY(-20%);\n  }\n  40%, 50% {\n    transform: translateY(-40%);\n  }\n  65%, 75% {\n    transform: translateY(-60%);\n  }\n  90%, 100% {\n    transform: translateY(-80%);\n  }\n}\n@keyframes _ngcontent-%COMP%_jump {\n  0% {\n    margin-top: 0;\n  }\n  35% {\n    margin-top: -75px;\n  }\n  70% {\n    margin-top: 0px;\n  }\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: calc(12vh - 1px);\n  border: 1px solid #E0E0E0;\n}\n@media (max-width: 767px) {\n  nav[_ngcontent-%COMP%] {\n    height: calc(10vh - 2px);\n  }\n  nav.searchbar[_ngcontent-%COMP%] {\n    height: 125px;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n}\nnav[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  text-align: center;\n  color: #18193F;\n}\nnav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% - 350px);\n}\n@media (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\nnav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 90%;\n  background: rgb(255, 255, 255);\n  border: 1px solid rgb(221, 221, 221);\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;\n  padding-left: 35px;\n}\nnav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: 0px;\n}\nnav[_ngcontent-%COMP%]   .search-inputcontainer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 12px;\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  border: 0px;\n  border-radius: 5px;\n  height: 40px;\n  width: 300px;\n  background-color: #F8F8F8;\n  cursor: pointer;\n  margin: auto;\n  overflow: hidden;\n  position: relative;\n}\n@media (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%] {\n  margin: 0 0.625rem;\n  padding: 0;\n  animation: _ngcontent-%COMP%_scrollUp 4s infinite;\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 40px;\n  list-style: none;\n  color: #e0dddd;\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8e8c8c;\n}\nnav[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 15px;\n}\nnav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #000000;\n  margin-right: 10px;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  color: #0D60C8;\n}\nnav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background-color: #18193F;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX2FuaW1hdGlvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19tZWRpYS5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0Usc0JBQUE7QUNISjs7QURLRTtFQUNFLHVCQUFBO0FDRko7O0FES0k7RUFDRSwwQkFBQTtBQ0ZOOztBRElJO0VBQ0UsMkJBQUE7QUNETjs7QURISTtFQUNFLDZCQUFBO0FDTU47O0FESkk7RUFDRSw4QkFBQTtBQ09OOztBRFhJO0VBQ0UsMkJBQUE7QUNjTjs7QURaSTtFQUNFLDRCQUFBO0FDZU47O0FEbkJJO0VBQ0UsNEJBQUE7QUNzQk47O0FEcEJJO0VBQ0UsNkJBQUE7QUN1Qk47O0FEbENFO0VBQ0Usc0JBQUE7QUNxQ0o7O0FEbkNFO0VBQ0UsdUJBQUE7QUNzQ0o7O0FEbkNJO0VBQ0UsMEJBQUE7QUNzQ047O0FEcENJO0VBQ0UsMkJBQUE7QUN1Q047O0FEM0NJO0VBQ0UsNkJBQUE7QUM4Q047O0FENUNJO0VBQ0UsOEJBQUE7QUMrQ047O0FEbkRJO0VBQ0UsMkJBQUE7QUNzRE47O0FEcERJO0VBQ0UsNEJBQUE7QUN1RE47O0FEM0RJO0VBQ0UsNEJBQUE7QUM4RE47O0FENURJO0VBQ0UsNkJBQUE7QUMrRE47O0FEMUVFO0VBQ0Usc0JBQUE7QUM2RUo7O0FEM0VFO0VBQ0UsdUJBQUE7QUM4RUo7O0FEM0VJO0VBQ0UsMEJBQUE7QUM4RU47O0FENUVJO0VBQ0UsMkJBQUE7QUMrRU47O0FEbkZJO0VBQ0UsNkJBQUE7QUNzRk47O0FEcEZJO0VBQ0UsOEJBQUE7QUN1Rk47O0FEM0ZJO0VBQ0UsMkJBQUE7QUM4Rk47O0FENUZJO0VBQ0UsNEJBQUE7QUMrRk47O0FEbkdJO0VBQ0UsNEJBQUE7QUNzR047O0FEcEdJO0VBQ0UsNkJBQUE7QUN1R047O0FEbEhFO0VBQ0UsdUJBQUE7QUNxSEo7O0FEbkhFO0VBQ0Usd0JBQUE7QUNzSEo7O0FEbkhJO0VBQ0UsMkJBQUE7QUNzSE47O0FEcEhJO0VBQ0UsNEJBQUE7QUN1SE47O0FEM0hJO0VBQ0UsOEJBQUE7QUM4SE47O0FENUhJO0VBQ0UsK0JBQUE7QUMrSE47O0FEbklJO0VBQ0UsNEJBQUE7QUNzSU47O0FEcElJO0VBQ0UsNkJBQUE7QUN1SU47O0FEM0lJO0VBQ0UsNkJBQUE7QUM4SU47O0FENUlJO0VBQ0UsOEJBQUE7QUMrSU47O0FEMUpFO0VBQ0UsdUJBQUE7QUM2Sko7O0FEM0pFO0VBQ0Usd0JBQUE7QUM4Sko7O0FEM0pJO0VBQ0UsMkJBQUE7QUM4Sk47O0FENUpJO0VBQ0UsNEJBQUE7QUMrSk47O0FEbktJO0VBQ0UsOEJBQUE7QUNzS047O0FEcEtJO0VBQ0UsK0JBQUE7QUN1S047O0FEM0tJO0VBQ0UsNEJBQUE7QUM4S047O0FENUtJO0VBQ0UsNkJBQUE7QUMrS047O0FEbkxJO0VBQ0UsNkJBQUE7QUNzTE47O0FEcExJO0VBQ0UsOEJBQUE7QUN1TE47O0FEbE1FO0VBQ0UsdUJBQUE7QUNxTUo7O0FEbk1FO0VBQ0Usd0JBQUE7QUNzTUo7O0FEbk1JO0VBQ0UsMkJBQUE7QUNzTU47O0FEcE1JO0VBQ0UsNEJBQUE7QUN1TU47O0FEM01JO0VBQ0UsOEJBQUE7QUM4TU47O0FENU1JO0VBQ0UsK0JBQUE7QUMrTU47O0FEbk5JO0VBQ0UsNEJBQUE7QUNzTk47O0FEcE5JO0VBQ0UsNkJBQUE7QUN1Tk47O0FEM05JO0VBQ0UsNkJBQUE7QUM4Tk47O0FENU5JO0VBQ0UsOEJBQUE7QUMrTk47O0FEMU9FO0VBQ0UsdUJBQUE7QUM2T0o7O0FEM09FO0VBQ0Usd0JBQUE7QUM4T0o7O0FEM09JO0VBQ0UsMkJBQUE7QUM4T047O0FENU9JO0VBQ0UsNEJBQUE7QUMrT047O0FEblBJO0VBQ0UsOEJBQUE7QUNzUE47O0FEcFBJO0VBQ0UsK0JBQUE7QUN1UE47O0FEM1BJO0VBQ0UsNEJBQUE7QUM4UE47O0FENVBJO0VBQ0UsNkJBQUE7QUMrUE47O0FEblFJO0VBQ0UsNkJBQUE7QUNzUU47O0FEcFFJO0VBQ0UsOEJBQUE7QUN1UU47O0FEbFJFO0VBQ0UsdUJBQUE7QUNxUko7O0FEblJFO0VBQ0Usd0JBQUE7QUNzUko7O0FEblJJO0VBQ0UsMkJBQUE7QUNzUk47O0FEcFJJO0VBQ0UsNEJBQUE7QUN1Uk47O0FEM1JJO0VBQ0UsOEJBQUE7QUM4Uk47O0FENVJJO0VBQ0UsK0JBQUE7QUMrUk47O0FEblNJO0VBQ0UsNEJBQUE7QUNzU047O0FEcFNJO0VBQ0UsNkJBQUE7QUN1U047O0FEM1NJO0VBQ0UsNkJBQUE7QUM4U047O0FENVNJO0VBQ0UsOEJBQUE7QUMrU047O0FEMVRFO0VBQ0UsdUJBQUE7QUM2VEo7O0FEM1RFO0VBQ0Usd0JBQUE7QUM4VEo7O0FEM1RJO0VBQ0UsMkJBQUE7QUM4VE47O0FENVRJO0VBQ0UsNEJBQUE7QUMrVE47O0FEblVJO0VBQ0UsOEJBQUE7QUNzVU47O0FEcFVJO0VBQ0UsK0JBQUE7QUN1VU47O0FEM1VJO0VBQ0UsNEJBQUE7QUM4VU47O0FENVVJO0VBQ0UsNkJBQUE7QUMrVU47O0FEblZJO0VBQ0UsNkJBQUE7QUNzVk47O0FEcFZJO0VBQ0UsOEJBQUE7QUN1Vk47O0FEbFdFO0VBQ0UsdUJBQUE7QUNxV0o7O0FEbldFO0VBQ0Usd0JBQUE7QUNzV0o7O0FEbldJO0VBQ0UsMkJBQUE7QUNzV047O0FEcFdJO0VBQ0UsNEJBQUE7QUN1V047O0FEM1dJO0VBQ0UsOEJBQUE7QUM4V047O0FENVdJO0VBQ0UsK0JBQUE7QUMrV047O0FEblhJO0VBQ0UsNEJBQUE7QUNzWE47O0FEcFhJO0VBQ0UsNkJBQUE7QUN1WE47O0FEM1hJO0VBQ0UsNkJBQUE7QUM4WE47O0FENVhJO0VBQ0UsOEJBQUE7QUMrWE47O0FEMVlFO0VBQ0UsdUJBQUE7QUM2WUo7O0FEM1lFO0VBQ0Usd0JBQUE7QUM4WUo7O0FEM1lJO0VBQ0UsMkJBQUE7QUM4WU47O0FENVlJO0VBQ0UsNEJBQUE7QUMrWU47O0FEblpJO0VBQ0UsOEJBQUE7QUNzWk47O0FEcFpJO0VBQ0UsK0JBQUE7QUN1Wk47O0FEM1pJO0VBQ0UsNEJBQUE7QUM4Wk47O0FENVpJO0VBQ0UsNkJBQUE7QUMrWk47O0FEbmFJO0VBQ0UsNkJBQUE7QUNzYU47O0FEcGFJO0VBQ0UsOEJBQUE7QUN1YU47O0FDbmJBO0VBRUk7SUFDSSwyQkFBQTtFRHFiTjtFQ3RiRTtJQUNJLDJCQUFBO0VEd2JOO0VDemJFO0lBQ0ksMkJBQUE7RUQyYk47RUM1YkU7SUFDSSwyQkFBQTtFRDhiTjtBQUNGO0FDM2JBO0VBQ0U7SUFDRSxhQUFBO0VENmJGO0VDM2JBO0lBQ0UsaUJBQUE7RUQ2YkY7RUMzYkE7SUFDRSxlQUFBO0VENmJGO0FBQ0Y7QUE1Y0E7RURrQkUsYUFBQTtFQUNBLG1CQ2pCbUI7RURrQm5CLDhCQ2xCMEI7RUFDeEIsd0JBQUE7RUFDQSx5QkFBQTtBQStjSjtBRW5kRTtFRkFGO0lBTU0sd0JBQUE7RUFpZEo7RUFoZEk7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtFQWtkTjtBQUNGO0FBL2NJO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNFLGNHcEJHO0FIcWVUO0FBL2NHO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtBQWlkSjtBRXRlRTtFRm1CQztJQUlHLFVBQUE7RUFtZEo7QUFDRjtBQWxkTTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQW9kUjtBQW5kUTtFQUNFLFlBQUE7QUFxZFY7QUFsZE07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBb2RSO0FBamRJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW1kTjtBRXZnQkU7RUYyQ0U7SUFXSSxhQUFBO0VBcWROO0FBQ0Y7QUFwZE07RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQXNkVjtBQXJkVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXVkWjtBQXRkWTtFQUNDLGNBQUE7QUF3ZGI7QUFwZE07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBc2RSO0FBL2NJO0VEaEVGLGFBQUE7RUFDQSxtQkNnRXNCO0VEL0R0Qiw4QkMrRDZCO0FBbWQvQjtBQWxkTztFQUNDLGlCQUFBO0VBQ0EsY0dqRkE7RUhrRkEsa0JBQUE7RUFDQSxlQUFBO0FBb2RSO0FFNWlCRTtFRnlGTTtJQUVJLGFBQUE7RUFxZFY7QUFDRjtBQW5kUTtFQUNFLGNHakdIO0FIc2pCUDtBQW5kUTtFQUNFLHlCQUFBO0VBQ0EsWUc3Rkg7RUg4RkcsaUJBQUE7RUFDQSxrQkFBQTtBQXFkViIsInNvdXJjZXNDb250ZW50IjpbIiRzcGFjZWFtb3VudHM6ICgyLDQsOCwxMCwxMiwxNCwxNiwxOCwyMCwyMiwyNCk7IC8vIEFkanVzdCB0aGlzIHRvIGluY2x1ZGUgdGhlIHBpeGVsIGFtb3VudHMgeW91IG5lZWQuXHJcbiRzaWRlczogKHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCk7IC8vIExlYXZlIHRoaXMgdmFyaWFibGUgYWxvbmVcclxuXHJcbkBlYWNoICRzcGFjZSBpbiAkc3BhY2VhbW91bnRzIHtcclxuICAubS0jeyRzcGFjZX0ge1xyXG4gICAgbWFyZ2luOiAjeyRzcGFjZX1weCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucC0jeyRzcGFjZX0ge1xyXG4gICAgcGFkZGluZzogI3skc3BhY2V9cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgQGVhY2ggJHNpZGUgaW4gJHNpZGVzIHtcclxuICAgIC5tLSN7c3RyLXNsaWNlKCRzaWRlLCAwLCAxKX0tI3skc3BhY2V9IHtcclxuICAgICAgbWFyZ2luLSN7JHNpZGV9OiAjeyRzcGFjZX1weCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnAtI3tzdHItc2xpY2UoJHNpZGUsIDAsIDEpfS0jeyRzcGFjZX0ge1xyXG4gICAgICBwYWRkaW5nLSN7JHNpZGV9OiAjeyRzcGFjZX1weCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PSBbSVMtRkxFWF1cclxuQG1peGluIGlzLWZsZXgoJGFsaWduLCAkanVzdGlmeSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG59XHJcbi8vID09PT09PT09PT0gW0lTLUZMRVgtQ09MT1VNTl1cclxuQG1peGluIGlzLWZsZXgtY29sdW1uKCRhbGlnbiwgJGp1c3RpZnkpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcImNvbG9yc1wiO1xyXG5AaW1wb3J0IFwiYW5pbWF0aW9uc1wiO1xyXG5AaW1wb3J0IFwibWVkaWFcIjtcclxubmF2e1xyXG5cclxuICAgIEBpbmNsdWRlIGlzLWZsZXgoY2VudGVyLHNwYWNlLWJldHdlZW4pO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEydmggLSAxcHgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMHZoIC0gMnB4KTtcclxuICAgICAgJi5zZWFyY2hiYXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJyYW5ke1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgfVxyXG4gICAuc2VhcmNoLWlucHV0Y29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1MHB4KTtcclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAgIGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCA4cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICBvdXRsaW5lOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGl7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLnN1Z2dlc3Rpb25zIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwLjYyNXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNjcm9sbFVwIDRzIGluZmluaXRlO1xyXG4gICAgICAgICAgLnN1Z2dlc3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRkZGQ7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICBjb2xvcjogIzhlOGM4YztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAubmF2YmFye1xyXG4gICAgICAgQGluY2x1ZGUgaXMtZmxleChjZW50ZXIsc3BhY2UtYmV0d2Vlbik7XHJcbiAgICAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxOTNGO1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8gVmFyaWFibGVzXHJcbiRpdGVtLWNvdW50OiA1O1xyXG5cclxuQGtleWZyYW1lcyBzY3JvbGxVcCB7XHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAoJGl0ZW0tY291bnQgLSAxKSB7XHJcbiAgICAjeygkaSAqIDI1KSAtIDEwJX0sICN7JGkgKiAyNSV9IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoKC0xMDAlIC8gJGl0ZW0tY291bnQpICogJGkpO1xyXG4gICAgIH1cclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBqdW1wIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICAzNSUge1xyXG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xyXG4kZGVza3RvcC13aWR0aDogMTAyNHB4O1xyXG5cclxuQG1peGluIG1vYmlsZSB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHRhYmxldC13aWR0aCAtIDFweH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIGFuZCAobWF4LXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRoIC0gMXB4fSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3Atd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiLy8gX2NvbG9ycy5zY3NzXHJcbiR2aW9sZXQ6ICMxODE5M0Y7XHJcbiRibHVlOiAjMEQ2MEM4O1xyXG4kcGluazogI0IxNUNDMjtcclxuJG9yYW5nZTogI0ZDNjJBMDtcclxuJHBlYWNoOiAjRkY4OTc4O1xyXG4keWVsbG93OiAjRkZDMTVFO1xyXG4kZ3JlZW46ICNGOUY4NzE7XHJcbiRncmF5OiAjZDJkMmQyO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiR3aGl0ZTojZmZmZjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 337);
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/content/content.component */ 3081);
/* harmony import */ var _pages_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/content-slider/content-slider.component */ 9541);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 6432);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/search/search.component */ 5880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








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
  component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent,
  path: 'search'
}, {
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
  path: 'login'
}];
class ContentRoutingModule {}
ContentRoutingModule.ɵfac = function ContentRoutingModule_Factory(t) {
  return new (t || ContentRoutingModule)();
};
ContentRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ContentRoutingModule
});
ContentRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContentRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 337);
/* harmony import */ var _pages_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/content-slider/content-slider.component */ 9541);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 6432);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ 5880);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/image-slider/image-slider.component */ 7369);
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/content/content.component */ 3081);
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-routing.module */ 9782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);










class ContentModule {}
ContentModule.ɵfac = function ContentModule_Factory(t) {
  return new (t || ContentModule)();
};
ContentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: ContentModule
});
ContentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _content_routing_module__WEBPACK_IMPORTED_MODULE_7__.ContentRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ContentModule, {
    declarations: [_components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_5__.ImageSliderComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, _pages_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_1__.ContentSliderComponent, _pages_content_content_component__WEBPACK_IMPORTED_MODULE_6__.ContentComponent],
    imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _content_routing_module__WEBPACK_IMPORTED_MODULE_7__.ContentRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule]
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
  styles: ["@keyframes _ngcontent-%COMP%_scrollUp {\n  15%, 25% {\n    transform: translateY(-20%);\n  }\n  40%, 50% {\n    transform: translateY(-40%);\n  }\n  65%, 75% {\n    transform: translateY(-60%);\n  }\n  90%, 100% {\n    transform: translateY(-80%);\n  }\n}\n@keyframes _ngcontent-%COMP%_jump {\n  0% {\n    margin-top: 0;\n  }\n  35% {\n    margin-top: -75px;\n  }\n  70% {\n    margin-top: 0px;\n  }\n}\n.login-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  height: 88vh;\n  width: 100%;\n  background-color: #18193F;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n    height: 90vh;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background: white;\n  border-radius: 2px;\n  margin: 0 10px;\n  animation: _ngcontent-%COMP%_jump 1s linear infinite;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle#a[_ngcontent-%COMP%] {\n  background-color: #f4aa0b;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle#b[_ngcontent-%COMP%] {\n  background-color: #eb0d78;\n  animation-delay: 0.2s;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle#c[_ngcontent-%COMP%] {\n  background-color: #079891;\n  animation-delay: 0.4s;\n}\n.login-page[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circle#d[_ngcontent-%COMP%] {\n  background-color: #9c04b3;\n  animation-delay: 0.6s;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%] {\n  background-color: #0D60C8;\n  display: flex;\n  overflow: auto;\n  gap: 12vh;\n  flex-direction: column;\n  scroll-snap-type: y mandatory;\n  width: 100%;\n  align-items: flex-start;\n  height: 88vh;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%] {\n    height: 90vh;\n    gap: 15vh;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%] {\n  height: 88vh;\n  scroll-snap-align: start;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%] {\n    height: 90vh;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  position: relative;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  border-radius: 10px;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  color: #f8f8f8;\n  width: 280px;\n  padding: 10px;\n  background: rgba(13, 13, 13, 0.7803921569);\n  border: 10px;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 50px;\n  position: absolute;\n  right: -60px;\n  top: 100px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    right: 0px;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin: 5px 0px;\n  font-size: 18px;\n  padding: 5px;\n  background-color: #f8f8f8;\n  color: #000000;\n  border-radius: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: #c7c8cd;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: #f8f8f8;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 400;\n  color: #f8f8f8;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 115px);\n  position: absolute;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin: 5px 0px;\n  font-size: 18px;\n  padding: 5px;\n  background-color: #f8f8f8;\n  color: #000000;\n  border-radius: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]   .reel[_ngcontent-%COMP%]   .nav-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: #cdc7c7;\n}\n.login-page[_ngcontent-%COMP%]   .reelsContainer[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19hbmltYXRpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2ZlYXR1cmVzL2NvbnRlbnQvcGFnZXMvY29udGVudC1zbGlkZXIvY29udGVudC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJO0lBQ0ksMkJBQUE7RUNITjtFREVFO0lBQ0ksMkJBQUE7RUNBTjtFRERFO0lBQ0ksMkJBQUE7RUNHTjtFREpFO0lBQ0ksMkJBQUE7RUNNTjtBQUNGO0FESEE7RUFDRTtJQUNFLGFBQUE7RUNLRjtFREhBO0lBQ0UsaUJBQUE7RUNLRjtFREhBO0lBQ0UsZUFBQTtFQ0tGO0FBQ0Y7QUF0QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUF3QkY7QUF2QkU7RUFDRSxZQUFBO0VBSUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFzQko7QUNoQ0U7RURDQTtJQUdJLFlBQUE7RUFnQ0o7QUFDRjtBQTFCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQTRCTjtBQTNCTTtFQUNFLHlCQUFBO0FBNkJSO0FBM0JNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQTZCUjtBQTNCTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUE2QlI7QUEzQk07RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBNkJSO0FBekJFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQTJCSjtBQ3ZFRTtFRG1DQTtJQVdJLFlBQUE7SUFDQSxTQUFBO0VBNkJKO0FBQ0Y7QUE1Qkk7RUFDRSxZQUFBO0VBSUEsd0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUEyQk47QUNyRkU7RURpREU7SUFHSSxZQUFBO0VBcUNOO0FBQ0Y7QUEvQk07RUFDRSxrQkFBQTtBQWlDUjtBQWhDUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWtDVjtBQS9CUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFpQ1Y7QUE5QlE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWdDVjtBQ25IRTtFRDZFTTtJQVFJLFVBQUE7RUFrQ1Y7QUFDRjtBQWpDVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBbUNaO0FBakNZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQW1DZDtBQWpDYztFQUNFLHlCQUFBO0FBbUNoQjtBQTlCYztFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQWdDaEI7QUE1Qlk7RUFDRSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBOEJkO0FBdkJNO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQXlCUjtBQ2hLRTtFRGlJSTtJQVFFLGFBQUE7RUEyQk47QUFDRjtBQTFCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUE0QlY7QUExQlU7RUFDRSx5QkFBQTtBQTRCWjtBQXJCRTtFQUNFLGFBQUE7QUF1QkoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpYWJsZXNcclxuJGl0ZW0tY291bnQ6IDU7XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbFVwIHtcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICgkaXRlbS1jb3VudCAtIDEpIHtcclxuICAgICN7KCRpICogMjUpIC0gMTAlfSwgI3skaSAqIDI1JX0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgoLTEwMCUgLyAkaXRlbS1jb3VudCkgKiAkaSk7XHJcbiAgICAgfVxyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGp1bXAge1xyXG4gIDAlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcImFuaW1hdGlvbnNcIjtcclxuQGltcG9ydCBcIm1lZGlhXCI7XHJcbi5sb2dpbi1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5sb2FkZXJ7XHJcbiAgICBoZWlnaHQ6IDg4dmg7XHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBoZWlnaHQgOiA5MHZoO1xyXG4gICAgfVxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxOTNGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5jaXJjbGUge1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgYW5pbWF0aW9uOiBqdW1wIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgJiNhe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGFhMGI7XHJcbiAgICAgIH1cclxuICAgICAgJiNiIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIwZDc4O1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICAgICAgfVxyXG4gICAgICAmI2Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzk4OTE7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICB9XHJcbiAgICAgICYjZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzljMDRiMztcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJlZWxzQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDYwQzg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBnYXA6IDEydmg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiA4OHZoO1xyXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgaGVpZ2h0IDogOTB2aDtcclxuICAgICAgZ2FwOiAxNXZoO1xyXG4gICAgfVxyXG4gICAgLnJlZWwge1xyXG4gICAgICBoZWlnaHQ6IDg4dmg7XHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgaGVpZ2h0IDogOTB2aDtcclxuICAgICAgfVxyXG4gICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAuZGV0YWlsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZjhmOGY4O1xyXG4gICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwZDBkMGRjNztcclxuICAgICAgICAgIGJvcmRlcjogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IC02MHB4O1xyXG4gICAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M4Y2Q7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZjhmOGY4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgICAgLm5hdi1idXR0b25zIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTE1cHgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjN2M3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlZWxzQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMDI0cHg7XHJcblxyXG5AbWl4aW4gbW9iaWxlIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogI3skdGFibGV0LXdpZHRoIC0gMXB4fSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkgYW5kIChtYXgtd2lkdGg6ICN7JGRlc2t0b3Atd2lkdGggLSAxcHh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 6432:
/*!*****************************************************************!*\
  !*** ./src/app/features/content/pages/login/login.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 8915);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.loginData = {
      email: '',
      password: ''
    };
    this.errorMessage = '';
  }
  login() {
    this.authService.login(this.loginData).subscribe(response => {
      // Handle successful login
      console.log('Login successful');
      const token = response.token; // Assuming the token is returned in the response
      this.authService.storeToken(token);
      this.router.navigate(['profile']);
      // Redirect or perform any additional actions
    }, error => {
      // Handle login error
      this.errorMessage = error.error;
      console.error('Login failed', error);
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 16,
  vars: 0,
  consts: [[1, "login-page"], [1, "animation"], ["data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]`assets/svg/tv2.svg`, "type", ""], [1, "login"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "li")(4, "li")(5, "li")(6, "li")(7, "li")(8, "li")(9, "li")(10, "li")(11, "li")(12, "li")(13, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "object", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: [".login-page[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  width: 400px;\n  background-color: #EEEEEE;\n  height: 100vh;\n  position: relative;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 400px;\n  height: 40px;\n  background-color: rgb(255, 213, 0);\n  margin-bottom: 10px;\n  animation: _ngcontent-%COMP%_moveTopToBottom 10s infinite linear;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0px;\n  animation-delay: 0s;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  top: 50px;\n  animation-delay: 2s;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  top: 100px;\n  animation-delay: 4s;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  top: 150px;\n  animation-delay: 6s;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  top: 200px;\n  animation-delay: 8s;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  top: 250px;\n  animation-delay: 10s;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  top: 300px;\n  animation-delay: 12s;\n}\n.login-page[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]   object[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n}\n.login-page[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  height: 100vh;\n  min-width: calc(100% - 400px);\n  background-color: rgb(255, 255, 255);\n}\n\n@keyframes _ngcontent-%COMP%_moveTopToBottom {\n  0% {\n    top: calc(100vh - 50px);\n  }\n  100% {\n    top: 0; \n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGVudC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFHTjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUlSO0FBSFE7RUFDRSxRQUFBO0VBQ0EsbUJBQUE7QUFLVjtBQUhRO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FBS1Y7QUFIUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUtWO0FBSFE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFLVjtBQUZRO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBSVY7QUFGUTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUlWO0FBRlE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUFJVjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBQ047QUFJRTtFQUNFLGFBQUE7RUFDQyw2QkFBQTtFQUNBLG9DQUFBO0FBRkw7O0FBTUE7RUFDRTtJQUNFLHVCQUFBO0VBSEY7RUFLQTtJQUNFLE1BQUEsRUFBQSxvRUFBQTtFQUhGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5hbmltYXRpb257XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHVse1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGxpe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxMywgMCk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBhbmltYXRpb246IG1vdmVUb3BUb0JvdHRvbSAxMHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDZzO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgICAgdG9wOiAyMDBweDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogOHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICAgIHRvcDogMjUwcHg7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNykge1xyXG4gICAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMTJzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDIwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAubG9naW57XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgIG1pbi13aWR0aCA6IGNhbGMoMTAwJSAtIDQwMHB4KTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVUb3BUb0JvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAwOyAgLyogQWRqdXN0IHRoZSB2YWx1ZSB0byBhY2NvdW50IGZvciB0aGUgZWxlbWVudCdzIGhlaWdodCBhbmQgbWFyZ2luICovXHJcbiAgfVxyXG59XHJcbi8vIEBpbXBvcnQgJ2lucHV0JztcclxuLy8gQGltcG9ydCAnYnV0dG9uJztcclxuLy8gLmxvZ2luLXBhZ2Uge1xyXG4vLyAgIGhlaWdodDogMTAwdmg7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4vLyAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbi8vICAgLmNhcmQge1xyXG4vLyAgICAgcGFkZGluZzogMTBweCAyN3B4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAubmV0d29ya0Vycm9ye1xyXG4vLyAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjRUY1MzUwO1xyXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gICAgIH1cclxuLy8gICAgIGZvcm0ge1xyXG4vLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4vLyAgICAgICAuZXJyb3JzIHtcclxuLy8gICAgICAgICBtYXJnaW46IDVweDtcclxuLy8gICAgICAgICBjb2xvcjogcmdiKDIzMSwgMTQsIDE0KTtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgaDIge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4vLyAgICAgICAgIEBpbmNsdWRlIGlucHV0Q29udGFpbmVyKGZhbHNlKVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGJ1dHRvbiB7XHJcbi8vICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKGxhcmdlKTtcclxuLy8gICAgICAgICAmOmRpc2FibGVke1xyXG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuLy8gICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuLy8gICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
  decls: 2,
  vars: 0,
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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

/***/ 8915:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.development */ 1261);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);





class AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth`;
  }
  signUp(firstName, lastName, email, password) {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  getUserDetails() {
    const token = localStorage.getItem('token');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/user-details`, {
      headers
    });
  }
  getUserRole() {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        let user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
        return user.userId == "64a2d72df4d3459907e02e14" ? "ADMIN" : "USER";
      }
      return "GUEST";
    } catch (Error) {
      return "GUEST";
    }
  }
  storeToken(token) {
    localStorage.setItem('token', token);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
  }
  deleteUser() {
    const token = localStorage.getItem('token');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.delete(`${this.apiUrl}/delete-user/`, {
      headers
    });
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
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