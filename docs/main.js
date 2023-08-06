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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/search/search.component */ 1164);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/signup/signup.component */ 8406);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/profile/profile.component */ 8220);
/* harmony import */ var _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gaurds/auth.guard */ 8545);
/* harmony import */ var _pages_content_form_content_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/content-form/content-form.component */ 6271);
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/content/content.component */ 8912);
/* harmony import */ var _pages_contents_contents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contents/contents.component */ 5789);
/* harmony import */ var _pages_season_form_season_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/season-form/season-form.component */ 235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6839);













const routes = [{
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  path: ''
}, {
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
  path: 'login'
}, {
  component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
  path: 'signup'
}, {
  component: _pages_contents_contents_component__WEBPACK_IMPORTED_MODULE_8__.ContentsComponent,
  path: 'explore'
}, {
  component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent,
  path: 'filter'
}, {
  component: _pages_content_content_component__WEBPACK_IMPORTED_MODULE_7__.ContentComponent,
  path: 'content/:id'
}, {
  component: _pages_content_form_content_form_component__WEBPACK_IMPORTED_MODULE_6__.ContentFormComponent,
  path: 'edit-content/:id'
}, {
  component: _pages_season_form_season_form_component__WEBPACK_IMPORTED_MODULE_9__.SeasonFormComponent,
  path: 'edit-season/:id'
}, {
  component: _pages_content_form_content_form_component__WEBPACK_IMPORTED_MODULE_6__.ContentFormComponent,
  path: 'add-content'
}, {
  path: 'profile',
  component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent,
  canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);





const _c0 = function () {
  return {
    exact: true
  };
};
function AppComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
function AppComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
function AppComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
function AppComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
class AppComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.showToolbar = true;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        this.showToolbar = event.url != '/login';
      }
    });
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 16,
  vars: 8,
  consts: [[1, "nav-brand"], ["href", "/", 1, "link"], [1, "nav-links"], ["routerLinkActive", "active", "routerLink", "/search", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fa", "fa-search"], ["routerLinkActive", "active", "routerLink", "/explore", 1, "nav-link", 3, "routerLinkActiveOptions"], ["class", "nav-link", "routerLinkActive", "active", "routerLink", "/profile", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["class", "nav-link", "routerLinkActive", "active", "routerLink", "/login", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-link", "routerLinkActive", "active", "routerLink", "/signup", 3, "routerLinkActiveOptions", 4, "ngIf"], [1, "container"], ["routerLinkActive", "active", "routerLink", "/profile", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], ["routerLinkActive", "active", "routerLink", "/login", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/signup", 1, "nav-link", 3, "routerLinkActiveOptions"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "a", 1)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bingeworthy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Explore");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppComponent_a_10_Template, 2, 2, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_a_11_Template, 2, 2, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_a_12_Template, 2, 2, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_a_13_Template, 2, 2, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  styles: ["header[_ngcontent-%COMP%] {\n  font-family: \"Belanosima\";\n  height: 48px;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n}\nheader[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  margin-left: 12px;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\nheader[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  color: #4A418F;\n  font-size: 25px;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 6px 11px;\n  background-color: transparent;\n  color: #4A418F;\n}\nheader[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\nheader[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, header[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 6px 11px;\n}\nheader[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbG9ycy5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQUFGO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQUFOO0FBQ007RUFDRSxvQkFBQTtFQUNBLGNDcEJFO0VEcUJGLGVBQUE7RUFDQSxrQkFBQTtBQUNSO0FBS0k7RUV5QkYseUJEakRtQjtFQ2tEbkIsV0RwRFE7RUNxRFIsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFSSxpQkFBQTtFRmhDQSw2QkMzQmU7RUQ0QmYsY0MvQkk7QURvQ1Y7QUVnQ0U7RUFDRSxnRERoRWlCO0FEa0NyQjtBQVBNO0VBQ0UseUJDN0JhO0VEOEJiLFdDaENFO0FEeUNWO0FBTkk7RUVnQkYseUJEakRtQjtFQ2tEbkIsV0RwRFE7RUNxRFIsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFSSxpQkFBQTtBRlJOO0FFY0U7RUFDRSxnRERoRWlCO0FEb0RyQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcbmhlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmVsYW5vc2ltYVwiO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcblxyXG4gIC5uYXYtYnJhbmQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcl8xO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXYtbGlua3Mge1xyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgQGluY2x1ZGUgIGJ1dHRvbihzbWFsbCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzE7XHJcbiAgICAgIGNvbG9yOiAkY29sb3JfMTtcclxuICAgICAgJjpob3ZlciwmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXYtYnV0dG9uIHtcclxuICAgICAgIEBpbmNsdWRlICBidXR0b24oc21hbGwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIiRjb2xvcl8xOiAjNEE0MThGO1xyXG4kY29sb3JfMjojNDc0MDhhZGM7XHJcbiRjb2xvcl8zOiAjZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8xOiB0cmFuc3BhcmVudDtcclxuJGJhY2tncm91bmQtY29sb3JfMjogIzQ4NDA4QTtcclxuJGJhY2tncm91bmQtY29sb3JfMzogIzQ3NDA4YWRjO1xyXG4iLCJAaW1wb3J0IFwiY29sb3JzXCI7XHJcbkBtaXhpbiBpbnB1dENvbnRhaW5lcigkaW5uZXJCdG4pIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCx0ZXh0YXJlYSxzZWxlY3R7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggIDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsdGV4dGFyZWE6Zm9jdXMsc2VsZWN0OmZvY3Vze1xyXG4gICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICRjb2xvcl8yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYoJGlubmVyQnRuKXtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfMTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfMztcclxuICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246ZGlzYWJsZWR7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl8zO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24oJHNpemUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8yO1xyXG4gIGNvbG9yOiAkY29sb3JfMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMHB4IDRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIEBpZiAkc2l6ZSA9PSBzbWFsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMXB4O1xyXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbWVkaXVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9IEBlbHNlIGlmICRzaXplID09IGxhcmdlIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8zO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNlbnRlckZsZXhib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-splide */ 4352);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ 1164);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _components_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/breadcrumb.component */ 1447);
/* harmony import */ var _components_chip_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chip-input.component */ 8174);
/* harmony import */ var _components_input_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/input-upload.component */ 5551);
/* harmony import */ var _components_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal.component */ 8158);
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/signup/signup.component */ 8406);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/profile/profile.component */ 8220);
/* harmony import */ var _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gaurds/auth.guard */ 8545);
/* harmony import */ var _pages_content_form_content_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/content-form/content-form.component */ 6271);
/* harmony import */ var _pages_contents_contents_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contents/contents.component */ 5789);
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/content/content.component */ 8912);
/* harmony import */ var _components_counter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/counter.component */ 3286);
/* harmony import */ var _pages_season_form_season_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/season-form/season-form.component */ 235);
/* harmony import */ var _components_collapsible_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/collapsible.component */ 3670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 6839);
























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  providers: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, ngx_splide__WEBPACK_IMPORTED_MODULE_22__.NgxSplideModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _components_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _components_chip_input_component__WEBPACK_IMPORTED_MODULE_6__.chipInputComponent, _components_input_upload_component__WEBPACK_IMPORTED_MODULE_7__.InputUploadComponent, _components_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent, _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__.SignupComponent, _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__.ProfileComponent, _pages_content_form_content_form_component__WEBPACK_IMPORTED_MODULE_12__.ContentFormComponent, _pages_contents_contents_component__WEBPACK_IMPORTED_MODULE_13__.ContentsComponent, _pages_content_content_component__WEBPACK_IMPORTED_MODULE_14__.ContentComponent, _components_counter_component__WEBPACK_IMPORTED_MODULE_15__.CounterComponent, _components_collapsible_component__WEBPACK_IMPORTED_MODULE_17__.CollapsiblePanelComponent, _pages_season_form_season_form_component__WEBPACK_IMPORTED_MODULE_16__.SeasonFormComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, ngx_splide__WEBPACK_IMPORTED_MODULE_22__.NgxSplideModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 1447:
/*!****************************************************!*\
  !*** ./src/app/components/breadcrumb.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class BreadcrumbComponent {}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)();
};
BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["app-breadcrumb"]],
  decls: 8,
  vars: 0,
  consts: [[1, "breadcrumb"], ["routerLink", ""], [1, "fa-solid", "fa-angle-right"], ["routerLink", "movies"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Movies");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".breadcrumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n}\n.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 90vw;\n  margin: 5px 12px;\n  background-color: #f8f8f8;\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n}\n.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n  color: rgba(71, 64, 138, 0.862745098);\n  cursor: pointer;\n}\n.breadcrumb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3a3a3a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRFI7QUFFUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUFWO0FBQ1U7RUFDRSxlQUFBO0VBQ0EscUNDYkg7RURjRyxlQUFBO0FBQ1o7QUFBWTtFQUNFLGNBQUE7QUFFZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgQGltcG9ydCAnbWl4aW5zJztcbiAgICAgIC5icmVhZGNydW1iIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDlweDtcbiAgICAgICAgdWwge1xuICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yXzI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMzYTNhM2E7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgIiwiJGNvbG9yXzE6ICM0QTQxOEY7XHJcbiRjb2xvcl8yOiM0NzQwOGFkYztcclxuJGNvbG9yXzM6ICNmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yXzE6IHRyYW5zcGFyZW50O1xyXG4kYmFja2dyb3VuZC1jb2xvcl8yOiAjNDg0MDhBO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8zOiAjNDc0MDhhZGM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 8174:
/*!****************************************************!*\
  !*** ./src/app/components/chip-input.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chipInputComponent": () => (/* binding */ chipInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);




function chipInputComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function chipInputComponent_span_4_Template_i_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.removeInput(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chipInput_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chipInput_r2, " ");
  }
}
function chipInputComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function chipInputComponent_div_11_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const suggestion_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.addInput(suggestion_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestion_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", suggestion_r7, " ");
  }
}
function chipInputComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, chipInputComponent_div_11_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredSuggestions);
  }
}
class chipInputComponent {
  constructor() {
    this.suggestions = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Superhero', 'Thriller', 'War', 'Western'];
    this.input = '';
    this.filteredSuggestions = [];
    this.showSuggestions = false;
    this.itemFor = "";
    this.chipInputs = [];
    this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  removeInput(index) {
    this.chipInputs.splice(index, 1);
    this.inputChange.emit(this.chipInputs);
  }
  onEnter() {
    this.addInput();
  }
  addInput(input) {
    if (!this.input) {
      return;
    }
    if (input && !this.chipInputs.includes(input)) {
      this.chipInputs.push(input);
      this.input = '';
      this.showSuggestions = false;
      return;
    } else if (input && this.chipInputs.includes(input)) {
      return;
    } else {
      this.chipInputs.push(this.input);
      this.input = '';
      this.inputChange.emit(this.chipInputs);
    }
  }
  onKeyUp(event) {
    if (this.itemFor == 'Tag') {
      return;
    }
    this.filteredSuggestions = this.suggestions.filter(suggestion => suggestion.toLowerCase().includes(this.input.toLowerCase()));
    this.showSuggestions = this.input.trim().length >= 1;
  }
  onClickOutside(event) {
    const target = event.target;
    const container = document.querySelector('.chip-input-container');
    if (!container.contains(target)) {
      this.showSuggestions = false;
    }
  }
}
chipInputComponent.ɵfac = function chipInputComponent_Factory(t) {
  return new (t || chipInputComponent)();
};
chipInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: chipInputComponent,
  selectors: [["chip-input"]],
  hostBindings: function chipInputComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function chipInputComponent_click_HostBindingHandler($event) {
        return ctx.onClickOutside($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    itemFor: "itemFor",
    chipInputs: "chipInputs"
  },
  outputs: {
    inputChange: "inputChange"
  },
  decls: 12,
  vars: 6,
  consts: [[1, "chip-input-container"], [1, "title"], [1, "chip-container"], [4, "ngFor", "ngForOf"], [1, "input-container"], ["type", "text", "value", "", 3, "ngModel", "keyup", "keyup.enter", "ngModelChange"], [3, "disabled"], [1, "fa", "fa-plus", 3, "click"], ["class", "suggestions", 4, "ngIf"], [1, "fa-solid", "fa-circle-minus", 3, "click"], [1, "suggestions"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
  template: function chipInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, chipInputComponent_span_4_Template, 3, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function chipInputComponent_Template_input_keyup_8_listener($event) {
        return ctx.onKeyUp($event);
      })("keyup.enter", function chipInputComponent_Template_input_keyup_enter_8_listener() {
        return ctx.onEnter();
      })("ngModelChange", function chipInputComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.input = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6)(10, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function chipInputComponent_Template_i_click_10_listener() {
        return ctx.addInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, chipInputComponent_div_11_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.itemFor, "s");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chipInputs);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Add ", ctx.itemFor, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.input);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.input);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSuggestions && ctx.filteredSuggestions.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".chip-input-container[_ngcontent-%COMP%] {\n  width: 230px;\n  position: relative;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  padding: 30px 20px 5px 10px;\n  margin: 5px;\n}\n.chip-input-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  color: gray;\n  left: 20px;\n  top: 14px;\n}\n.chip-input-container[_ngcontent-%COMP%]   .chip-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.chip-input-container[_ngcontent-%COMP%]   .chip-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 10px;\n  background-color: #3949ab;\n  color: white;\n  margin: 4px;\n}\n.chip-input-container[_ngcontent-%COMP%]   .chip-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  width: 100%;\n  width: 200px;\n  margin: 10px;\n}\n.chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #888;\n  left: 10px;\n  position: absolute;\n  top: 10px;\n}\n.chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 18px;\n  min-height: 40px;\n  padding: 20px 0px 0px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 30px;\n}\n.chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(71, 64, 138, 0.862745098);\n}\n.chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #4A418F;\n  color: #fff;\n  border: 0px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  right: 10px;\n  position: absolute;\n  top: 40%;\n  cursor: pointer;\n}\n.chip-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: gray;\n  color: #fff;\n}\n.chip-input-container[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  bottom: 80px;\n  padding: 0px 12px;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  max-height: 150px;\n  overflow-y: auto;\n  width: 185px;\n}\n.chip-input-container[_ngcontent-%COMP%]   .suggestions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 8px 0px;\n  cursor: pointer;\n  border-bottom: 1px solid gray;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGlwLWlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFEUjtBQUVRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBVjtBQUVRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBVjtBQUNVO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNaO0FBQVk7RUFDRSxlQUFBO0FBRWQ7QUFFUTtFQzdCQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFRDZCRSxZQUFBO0VBQ0EsWUFBQTtBQUVWO0FDL0JRO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QURpQ1Y7QUM5QlE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEZ0NWO0FDOUJRO0VBQ0UsYUFBQTtFQUNELGlCQUFBO0FEZ0NUO0FDOUJRO0VBQ0UsaUJBQUE7QURnQ1Y7QUM5QlE7RUFDRSxpREFBQTtBRGdDVjtBQzdCUTtFQUNFLHlCQ2xDQTtFRG1DQSxXQ2pDQTtFRGtDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FEK0JWO0FDN0JRO0VBQ0Usc0JBQUE7RUFDQSxXQzdDQTtBRjRFVjtBQTFDUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTRDVjtBQTNDVTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBNkNaIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBAaW1wb3J0ICdtaXhpbnMnO1xuICAgICAgLmNoaXAtaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweCA1cHggMTBweDtcbiAgICAgICAgbWFyZ2luIDogNXB4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgIHRvcDogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hpcC1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTQ5YWI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgIEBpbmNsdWRlIGlucHV0Q29udGFpbmVyKHRydWUpO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Z2dlc3Rpb25zIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICBib3R0b206IDgwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDE4NXB4O1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgIiwiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5AbWl4aW4gaW5wdXRDb250YWluZXIoJGlubmVyQnRuKSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsdGV4dGFyZWEsc2VsZWN0e1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMHB4ICAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzLHRleHRhcmVhOmZvY3VzLHNlbGVjdDpmb2N1c3tcclxuICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkY29sb3JfMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmKCRpbm5lckJ0bil7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yXzE7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmRpc2FibGVke1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfMztcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uKCRzaXplKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMjtcclxuICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweCA0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBAaWYgJHNpemUgPT0gc21hbGwge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTFweDtcclxuICB9IEBlbHNlIGlmICRzaXplID09IG1lZGl1bSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYXJnZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMztcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4Ym94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiJGNvbG9yXzE6ICM0QTQxOEY7XHJcbiRjb2xvcl8yOiM0NzQwOGFkYztcclxuJGNvbG9yXzM6ICNmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yXzE6IHRyYW5zcGFyZW50O1xyXG4kYmFja2dyb3VuZC1jb2xvcl8yOiAjNDg0MDhBO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8zOiAjNDc0MDhhZGM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 3670:
/*!*****************************************************!*\
  !*** ./src/app/components/collapsible.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapsiblePanelComponent": () => (/* binding */ CollapsiblePanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


const _c0 = ["*"];
class CollapsiblePanelComponent {
  constructor() {
    this.myCustomClass = true;
    this.title = '';
    this.isExpanded = false;
  }
}
CollapsiblePanelComponent.ɵfac = function CollapsiblePanelComponent_Factory(t) {
  return new (t || CollapsiblePanelComponent)();
};
CollapsiblePanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CollapsiblePanelComponent,
  selectors: [["app-collapsible-panel"]],
  hostVars: 2,
  hostBindings: function CollapsiblePanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("wid90", ctx.myCustomClass);
    }
  },
  inputs: {
    title: "title",
    isExpanded: "isExpanded"
  },
  ngContentSelectors: _c0,
  decls: 6,
  vars: 3,
  consts: [[1, "collapsible-panel"], [1, "panel-header", 3, "click"], [1, "panel-ico", "fa", 3, "ngClass"], [1, "panel-content", 3, "ngClass"]],
  template: function CollapsiblePanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapsiblePanelComponent_Template_div_click_1_listener() {
        return ctx.isExpanded = !ctx.isExpanded;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isExpanded ? "fa-chevron-up" : "fa-chevron-down");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isExpanded ? "expanded" : "collapsed");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  styles: [".collapsible-panel[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  margin-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.panel-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  transition: transform 0.3s;\n}\n\n.panel-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s;\n}\n\n.expanded[_ngcontent-%COMP%] {\n  max-height: 1000px; \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2xsYXBzaWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQSxFQUFBLHlEQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAuY29sbGFwc2libGUtcGFuZWwge1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBhbmVsLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG4ucGFuZWwtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcbn1cblxuLmV4cGFuZGVkIHtcbiAgbWF4LWhlaWdodDogMTAwMHB4OyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSB0byBhIGhlaWdodCB0aGF0IGZpdHMgeW91ciBjb250ZW50ICovXG59XG5cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3286:
/*!*************************************************!*\
  !*** ./src/app/components/counter.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": () => (/* binding */ CounterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);


class CounterComponent {
  constructor() {
    this.count = 1;
    this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  increment() {
    this.count++;
    this.inputChange.emit(this.count);
  }
  decrement() {
    this.count--;
    this.inputChange.emit(this.count);
  }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) {
  return new (t || CounterComponent)();
};
CounterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CounterComponent,
  selectors: [["app-counter"]],
  inputs: {
    count: "count"
  },
  outputs: {
    inputChange: "inputChange"
  },
  decls: 9,
  vars: 2,
  consts: [[1, "counter"], [3, "click"], [1, "fa", "fa-plus"], [3, "disabled", "click"], [1, "fa", "fa-minus"]],
  template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Season Count");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_3_listener() {
        return ctx.increment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_7_listener() {
        return ctx.decrement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.count == 1);
    }
  },
  styles: [".counter[_ngcontent-%COMP%] {\n  width: 230px;\n  position: relative;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  padding: 30px 8px 8px 8px;\n  margin: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.counter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 6px 11px;\n}\n.counter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\n.counter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: gray;\n}\n.counter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.counter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: gray;\n  position: absolute;\n  left: 10px;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURSO0FBRVE7RUN5Q04seUJDakRtQjtFRGtEbkIsV0NwRFE7RURxRFIsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFSSxpQkFBQTtBRHpDTjtBQytDRTtFQUNFLGdEQ2hFaUI7QUZtQnJCO0FBVlU7RUFDQyxzQkFBQTtBQVlYO0FBVFE7RUFDRSxlQUFBO0FBV1Y7QUFUUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBV1YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIEBpbXBvcnQgJ21peGlucyc7XG4gICAgICAuY291bnRlciB7XG4gICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDhweCA4cHggOHB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICBAaW5jbHVkZSBidXR0b24oc21hbGwpO1xuICAgICAgICAgICY6ZGlzYWJsZWR7XG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVse1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDoxMHB4O1xuICAgICAgICAgIHRvcDoxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgIiwiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5AbWl4aW4gaW5wdXRDb250YWluZXIoJGlubmVyQnRuKSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsdGV4dGFyZWEsc2VsZWN0e1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMHB4ICAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzLHRleHRhcmVhOmZvY3VzLHNlbGVjdDpmb2N1c3tcclxuICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkY29sb3JfMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmKCRpbm5lckJ0bil7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yXzE7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmRpc2FibGVke1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfMztcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uKCRzaXplKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMjtcclxuICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweCA0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBAaWYgJHNpemUgPT0gc21hbGwge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTFweDtcclxuICB9IEBlbHNlIGlmICRzaXplID09IG1lZGl1bSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYXJnZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMztcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4Ym94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiJGNvbG9yXzE6ICM0QTQxOEY7XHJcbiRjb2xvcl8yOiM0NzQwOGFkYztcclxuJGNvbG9yXzM6ICNmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yXzE6IHRyYW5zcGFyZW50O1xyXG4kYmFja2dyb3VuZC1jb2xvcl8yOiAjNDg0MDhBO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8zOiAjNDc0MDhhZGM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 5551:
/*!******************************************************!*\
  !*** ./src/app/components/input-upload.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputUploadComponent": () => (/* binding */ InputUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class InputUploadComponent {}
InputUploadComponent.ɵfac = function InputUploadComponent_Factory(t) {
  return new (t || InputUploadComponent)();
};
InputUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InputUploadComponent,
  selectors: [["input-upload"]],
  decls: 11,
  vars: 0,
  consts: [[1, "input-upload-container"], [1, "dragdrop"], [1, "fa-solid", "fa-file-circle-plus"], [1, "input-container"], ["type", "url", "value", ""]],
  template: function InputUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select Poster File to Upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "or drag and drop it here");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Poster URL ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".input-upload-container[_ngcontent-%COMP%]   .dragdrop[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  margin: 5px;\n  border: 2px dashed gainsboro;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.input-upload-container[_ngcontent-%COMP%]   .dragdrop[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 900;\n}\n.input-upload-container[_ngcontent-%COMP%]   .dragdrop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: gainsboro;\n}\n.input-upload-container[_ngcontent-%COMP%]   .dragdrop[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(176, 172, 172);\n}\n.input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  width: 100%;\n  width: 250px;\n  margin: 10px;\n}\n.input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #888;\n  left: 10px;\n  position: absolute;\n  top: 10px;\n}\n.input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 18px;\n  min-height: 40px;\n  padding: 20px 0px 0px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 30px;\n}\n.input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(71, 64, 138, 0.862745098);\n}\n.input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #4A418F;\n  color: #fff;\n  border: 0px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  right: 10px;\n  position: absolute;\n  top: 40%;\n  cursor: pointer;\n}\n.input-upload-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: gray;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dC11cGxvYWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUhWO0FBSVU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGWjtBQUlVO0VBQ0UsZ0JBQUE7QUFGWjtBQUlVO0VBQ0UseUJBQUE7QUFGWjtBQU1RO0VDekJBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VEeUJFLFlBQUE7RUFDQSxZQUFBO0FBRlY7QUN2QlE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBRHlCVjtBQ3RCUTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUR3QlY7QUN0QlE7RUFDRSxhQUFBO0VBQ0QsaUJBQUE7QUR3QlQ7QUN0QlE7RUFDRSxpQkFBQTtBRHdCVjtBQ3RCUTtFQUNFLGlEQUFBO0FEd0JWO0FDckJRO0VBQ0UseUJDbENBO0VEbUNBLFdDakNBO0VEa0NBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUR1QlY7QUNyQlE7RUFDRSxzQkFBQTtFQUNBLFdDN0NBO0FGb0VWIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBAaW1wb3J0ICdtaXhpbnMnO1xuXG4gICAgICAuaW5wdXQtdXBsb2FkLWNvbnRhaW5lciB7XG4gICAgICAgIC5kcmFnZHJvcCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgZ2FpbnNib3JvO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGNvbG9yOiBnYWluc2Jvcm87XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzYsIDE3MiwgMTcyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICBAaW5jbHVkZSBpbnB1dENvbnRhaW5lcih0cnVlKTtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgIiwiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5AbWl4aW4gaW5wdXRDb250YWluZXIoJGlubmVyQnRuKSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsdGV4dGFyZWEsc2VsZWN0e1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMHB4ICAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzLHRleHRhcmVhOmZvY3VzLHNlbGVjdDpmb2N1c3tcclxuICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkY29sb3JfMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmKCRpbm5lckJ0bil7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yXzE7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmRpc2FibGVke1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfMztcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uKCRzaXplKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMjtcclxuICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweCA0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBAaWYgJHNpemUgPT0gc21hbGwge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTFweDtcclxuICB9IEBlbHNlIGlmICRzaXplID09IG1lZGl1bSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYXJnZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMztcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4Ym94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiJGNvbG9yXzE6ICM0QTQxOEY7XHJcbiRjb2xvcl8yOiM0NzQwOGFkYztcclxuJGNvbG9yXzM6ICNmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yXzE6IHRyYW5zcGFyZW50O1xyXG4kYmFja2dyb3VuZC1jb2xvcl8yOiAjNDg0MDhBO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8zOiAjNDc0MDhhZGM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 8158:
/*!***********************************************!*\
  !*** ./src/app/components/modal.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);


const _c0 = ["*"];
class ModalComponent {
  constructor() {
    this.closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  closeModal() {
    this.closeModalEvent.emit();
  }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || ModalComponent)();
};
ModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalComponent,
  selectors: [["modal"]],
  inputs: {
    title: "title"
  },
  outputs: {
    closeModalEvent: "closeModalEvent"
  },
  ngContentSelectors: _c0,
  decls: 9,
  vars: 1,
  consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container"], [1, "modal-header"], [1, "close-button", 3, "click"], [1, "modal-content"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_0_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_5_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  styles: [".modal-overlay[_ngcontent-%COMP%] {\n  \n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  \n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  \n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  border-bottom: 1px solid #ccc;\n}\n\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  \n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 24px;\n  color: #999;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  \n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxrREFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUdJO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUFOOztBQUdJO0VBQ0UsU0FBQTtBQUFOOztBQUdJO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtBQUFOIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm1vZGFsLW92ZXJsYXkge1xuICAgICAgLyogU3R5bGVzIGZvciB0aGUgbW9kYWwgb3ZlcmxheSAoZS5nLiwgYmFja2Ryb3ApICovXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuXG4gICAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgICAvKiBTdHlsZXMgZm9yIHRoZSBtb2RhbCBjb250YWluZXIgKi9cbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgLyogU3R5bGVzIGZvciB0aGUgbW9kYWwgaGVhZGVyICovXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICB9XG5cbiAgICAubW9kYWwtaGVhZGVyIGgyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgIC8qIFN0eWxlcyBmb3IgdGhlIGNsb3NlIGJ1dHRvbiAqL1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cblxuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgIC8qIFN0eWxlcyBmb3IgdGhlIG1vZGFsIGNvbnRlbnQgKi9cbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8545:
/*!**************************************!*\
  !*** ./src/app/gaurds/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    var isAuthenticated = this.authService.isLoggedIn();
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac
});


/***/ }),

/***/ 6271:
/*!**************************************************************!*\
  !*** ./src/app/pages/content-form/content-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentFormComponent": () => (/* binding */ ContentFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _components_chip_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/chip-input.component */ 8174);
/* harmony import */ var _components_collapsible_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/collapsible.component */ 3670);






class ContentFormComponent {
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
    this.seasonCount = 0;
    this.isEdit = false;
    this.activeForm = 0;
  }
  ngOnInit() {
    this.setForm();
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      if (this.movieId) {
        this.getMovieDetails(this.movieId);
        this.isEdit = true;
      }
    });
  }
  typeChange() {
    // if(this.contributeForm.type!="MOVIE" &&  !this.contributeForm.seasons.length){
    //     this.contributeForm.seasons.push(this.createSeason(1))
    // }
  }
  setForm() {
    this.contributeForm = {
      title: "",
      poster: "",
      tags: [],
      releaseDate: null,
      genres: [],
      type: "MOVIE",
      seasons: [],
      actors: []
    };
    // this.contributeForm = {...avengersMovies[3]}
  }

  onSubmit() {
    if (this.isEdit) {
      this.apiService.updateContent(this.movieId, this.contributeForm).subscribe(data => {
        console.log(data);
      });
    } else {
      this.apiService.createContent(this.contributeForm).subscribe(data => {
        console.log(data);
        this.setForm();
      });
    }
  }
  updateGenres(genres) {
    this.contributeForm.genres = genres;
  }
  updateTags(tags) {
    this.contributeForm.tags = tags;
  }
  getMovieDetails(id) {
    this.apiService.getContentById(id).subscribe(data => {
      this.contributeForm = {
        ...data
      };
    });
  }
  // Add the isSeasonExpanded function
  isSeasonExpanded(index) {
    return this.contributeForm.seasons[index].expanded;
  }
  // Add the toggleSeason function
  toggleSeason(index) {
    this.contributeForm.seasons[index].expanded = !this.contributeForm.seasons[index].expanded;
  }
  createSeason(num) {
    return {
      number: num,
      description: '',
      poster: ''
    };
  }
  updateSeasonCount(count) {
    if (this.seasonCount < count) {
      const currentSeasonCount = this.seasonCount;
      for (let i = currentSeasonCount + 1; i <= count; i++) {
        const season = this.createSeason(i);
        this.contributeForm.seasons.push(season);
      }
    } else if (this.seasonCount > count) {
      this.contributeForm.seasons = this.contributeForm.seasons.slice(0, count);
    }
    this.seasonCount = count;
  }
}
ContentFormComponent.ɵfac = function ContentFormComponent_Factory(t) {
  return new (t || ContentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
ContentFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ContentFormComponent,
  selectors: [["app-content-form"]],
  decls: 42,
  vars: 15,
  consts: [[1, "form-page"], [3, "title"], [1, "inputs"], [1, "input-container"], ["name", "type", "required", "", 3, "ngModel", "ngModelChange"], ["value", "WSERIES"], ["value", "SHOW"], ["value", "MOVIE"], ["type", "text", "name", "title", "required", "", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "releaseDate", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "poster", 3, "ngModel", "ngModelChange"], ["rows", "8", "type", "text", "name", "plot", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "director", "required", "", 3, "ngModel", "ngModelChange"], [3, "chipInputs", "itemFor", "inputChange"], ["type", "submit", 3, "disabled", "click"]],
  template: function ContentFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form")(2, "app-collapsible-panel", 1)(3, "div", 2)(4, "div", 3)(5, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Content Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContentFormComponent_Template_select_ngModelChange_7_listener() {
        return ctx.typeChange();
      })("ngModelChange", function ContentFormComponent_Template_select_ngModelChange_7_listener($event) {
        return ctx.contributeForm.type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Web Series");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "TV Show");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Movie");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContentFormComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.contributeForm.title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 3)(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Release Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContentFormComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.contributeForm.releaseDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 3)(23, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Poster URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContentFormComponent_Template_input_ngModelChange_25_listener($event) {
        return ctx.contributeForm.poster = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 3)(27, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Plot");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "textarea", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContentFormComponent_Template_textarea_ngModelChange_29_listener($event) {
        return ctx.contributeForm.plot = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "app-collapsible-panel", 1)(31, "div", 2)(32, "div", 3)(33, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContentFormComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.contributeForm.director = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "app-collapsible-panel", 1)(37, "div", 2)(38, "chip-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("inputChange", function ContentFormComponent_Template_chip_input_inputChange_38_listener($event) {
        return ctx.updateGenres($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "chip-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("inputChange", function ContentFormComponent_Template_chip_input_inputChange_39_listener($event) {
        return ctx.updateTags($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContentFormComponent_Template_button_click_40_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Content Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contributeForm.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contributeForm.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contributeForm.releaseDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contributeForm.poster);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contributeForm.plot);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Content Cast");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contributeForm.director);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Content Genres & Tags");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chipInputs", ctx.contributeForm.genres)("itemFor", "Genre");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chipInputs", ctx.contributeForm.tags)("itemFor", "Tag");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.contributeForm.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.movieId ? "Update" : "Add", " Content");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _components_chip_input_component__WEBPACK_IMPORTED_MODULE_1__.chipInputComponent, _components_collapsible_component__WEBPACK_IMPORTED_MODULE_2__.CollapsiblePanelComponent],
  styles: [".form-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 65px);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 20px;\n  width: 100%;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  width: 100%;\n  width: 100%;\n  max-width: 250px;\n  margin: 10px;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #888;\n  left: 10px;\n  position: absolute;\n  top: 10px;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 18px;\n  min-height: 40px;\n  padding: 20px 0px 0px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 30px;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(71, 64, 138, 0.862745098);\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 1 1 32%;\n  margin: 10px;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 12px 24px;\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\n.form-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: aliceblue;\n  color: rgb(5, 49, 88);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGVudC1mb3JtL2NvbnRlbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBQ0k7RUNkSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFRGNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFHUjtBQ2xCUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FEb0JWO0FDakJRO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRG1CVjtBQ2pCUTtFQUNFLGFBQUE7RUFDRCxpQkFBQTtBRG1CVDtBQ2pCUTtFQUNFLGlCQUFBO0FEbUJWO0FDakJRO0VBQ0UsaURBQUE7QURtQlY7QUEzQkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBNkJOO0FBNUJNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQThCUjtBQTVCUTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBOEJWO0FBekJJO0VDV0YseUJDakRtQjtFRGtEbkIsV0NwRFE7RURxRFIsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFNRSxrQkFBQTtBRFlKO0FDVkU7RUFDRSxnRENoRWlCO0FGNEVyQjtBQXJDTTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXVDUiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uZm9ybS1wYWdlIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvcm0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dENvbnRhaW5lcihmYWxzZSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIC5pbnB1dHMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIC5jb2wge1xyXG4gICAgICAgICAgZmxleDogMSAxIDMyJTtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBAaW5jbHVkZSBidXR0b24obGFyZ2UpO1xyXG4gICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgICBjb2xvcjogcmdiKDUsIDQ5LCA4OCk7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC8vIC5jYXJkIHtcclxuICAvLyAgIHdpZHRoOiA5MCU7XHJcbiAgLy8gICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gICBwYWRkaW5nOiAxMHB4IDI3cHg7XHJcbiAgLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC8vICAgICAuY2FyZC10aXRsZXtcclxuICAvLyAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vICAgICAgIGgyIHtcclxuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLy8gICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgLy8gICAgICAgQGluY2x1ZGUgaW5wdXRDb250YWluZXIoZmFsc2UpO1xyXG4gIC8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgLy8gICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIC5lcnJvcnMge1xyXG4gIC8vICAgICAgIG1hcmdpbjogNXB4O1xyXG4gIC8vICAgICAgIGNvbG9yOiByZ2IoMjMxLCAxNCwgMTQpO1xyXG4gIC8vICAgICB9XHJcblxyXG5cclxuICAvLyAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5AbWl4aW4gaW5wdXRDb250YWluZXIoJGlubmVyQnRuKSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsdGV4dGFyZWEsc2VsZWN0e1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMHB4ICAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzLHRleHRhcmVhOmZvY3VzLHNlbGVjdDpmb2N1c3tcclxuICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkY29sb3JfMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmKCRpbm5lckJ0bil7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yXzE7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmRpc2FibGVke1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfMztcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uKCRzaXplKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMjtcclxuICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDBweCA0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBAaWYgJHNpemUgPT0gc21hbGwge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTFweDtcclxuICB9IEBlbHNlIGlmICRzaXplID09IG1lZGl1bSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBsYXJnZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMztcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4Ym94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiJGNvbG9yXzE6ICM0QTQxOEY7XHJcbiRjb2xvcl8yOiM0NzQwOGFkYztcclxuJGNvbG9yXzM6ICNmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yXzE6IHRyYW5zcGFyZW50O1xyXG4kYmFja2dyb3VuZC1jb2xvcl8yOiAjNDg0MDhBO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8zOiAjNDc0MDhhZGM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 8912:
/*!****************************************************!*\
  !*** ./src/app/pages/content/content.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const episode_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" S", ctx_r16.activeSeason.number, "E", i_r18 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentComponent_div_0_div_18_li_4_Template, 7, 4, "li", 29);
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
  return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContentComponent,
  selectors: [["app-content"]],
  decls: 1,
  vars: 1,
  consts: [["class", "movie-page", 4, "ngIf"], [1, "movie-page"], ["alt", "", 1, "poster", 3, "src"], [1, "movie-details"], [1, "breadcrumb"], [1, "title"], [1, "genres"], ["class", "genre", 4, "ngFor", "ngForOf"], [1, "plot"], [1, "details"], ["class", "details-item", 4, "ngIf"], [1, "actors"], ["class", "actor-item", 4, "ngFor", "ngForOf"], [1, "seasons-tabs"], [1, "season-btns"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "season-tab", 4, "ngIf"], [1, "genre"], [1, "details-item"], [1, "label"], [1, "value"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "actor-item"], ["alt", "", 3, "src"], [3, "click"], [1, "season-tab"], ["class", "description", 4, "ngIf"], [1, "episodes-list"], [4, "ngFor", "ngForOf"], [1, "description"]],
  template: function ContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContentComponent_div_0_Template, 19, 9, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movieId && ctx.movie);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: [".movie-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.movie-page[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 100%;\n  border-right: 1px solid rgb(242, 242, 242);\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%] {\n  position: sticky;\n  align-self: flex-start;\n  padding-top: 2rem;\n  padding-left: 2rem;\n  \n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  margin: 0;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]   .genre[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin: 2px;\n  padding: 2px 4px 1px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 14px;\n  color: rgb(38, 50, 56);\n  background-color: rgb(245, 245, 245);\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .plot[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .details-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: flex;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .details-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 8px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%]   .actor-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n  margin-bottom: 12px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%]   .actor-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 8px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .actors[_ngcontent-%COMP%]   .actor-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border-radius: 13px;\n  background-color: #F5F5F5;\n  color: #4527A0;\n  font-size: 14px;\n  font-weight: 600;\n  border: 0px;\n  margin: 5px;\n  cursor: pointer;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-btns[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: #4527A0;\n  color: #F5F5F5;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border: 2px dotted #5C6BC0;\n  padding: 14px;\n  border-radius: 10px;\n  background: rgba(179, 157, 219, 0.7607843137);\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 2px solid #EEEEEE;\n  border-radius: 10px;\n  padding: 12px;\n  margin-top: 8px;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  font-weight: 900;\n}\n.movie-page[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%]   .seasons-tabs[_ngcontent-%COMP%]   .season-tab[_ngcontent-%COMP%]   ul.episodes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #9C27B0;\n  border-radius: 10px;\n  padding: 5px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFvRUEsaUJBQUE7QUFuRUo7QUFDSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQ047QUFFSTtFQUNFLG1CQUFBO0FBQU47QUFFTTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFBUjtBQUlJO0VBQ0UsbUJBQUE7QUFGTjtBQUtJO0VBQ0UsbUJBQUE7QUFITjtBQUtNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBSFI7QUFLUTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFIVjtBQVFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFOTjtBQVFNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5SO0FBUVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQU5WO0FBU1E7RUFDRSxlQUFBO0FBUFY7QUFhSTtFQUNFLGdCQUFBO0FBWE47QUFZTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVlI7QUFXUTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFUVjtBQVVVO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBUlo7QUFhTTtFQUNFLG1CQUFBO0FBWFI7QUFZUTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBVlY7QUFhUTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFYVjtBQWFVO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBWFo7QUFZWTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFWZDtBQVlZO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVmQiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHJcbiAgLnBvc3RlciB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjQyLCAyNDIsIDI0Mik7XHJcbiAgfVxyXG5cclxuICAubW92aWUtZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2VucmVzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgIC5nZW5yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggNHB4IDFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigzOCwgNTAsIDU2KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGxvdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgLmRldGFpbHMtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3RvcnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAuYWN0b3ItaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBTZWFzb25zIFRhYnMgKi9cclxuICAgIC5zZWFzb25zLXRhYnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAuc2Vhc29uLWJ0bnN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgICAgICAgY29sb3I6ICM0NTI3QTA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1MjdBMDtcclxuICAgICAgICAgICAgY29sb3I6ICNGNUY1RjU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2Vhc29uLXRhYiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IGRvdHRlZCAjNUM2QkMwO1xyXG4gICAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjM5ZGRiYzI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bC5lcGlzb2Rlcy1saXN0IHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0VFRUVFRTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOUMyN0IwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5789:
/*!******************************************************!*\
  !*** ./src/app/pages/contents/contents.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentsComponent": () => (/* binding */ ContentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/breadcrumb.component */ 1447);






function ContentsComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 9)(2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11)(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const movie_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/content/", movie_r6._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", movie_r6.poster || "assets/images/no-poster-bl.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](movie_r6.title);
  }
}
function ContentsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContentsComponent_div_0_div_2_div_1_Template, 6, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.movies);
  }
}
function ContentsComponent_div_0_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 15)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [1, 2, 3, 4];
};
function ContentsComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContentsComponent_div_0_div_3_div_1_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function ContentsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContentsComponent_div_0_div_5_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const page_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.goToPage(page_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r4.currentPage === page_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r9);
  }
}
function ContentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContentsComponent_div_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ContentsComponent_div_0_div_3_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ContentsComponent_div_0_div_5_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.movies.length && !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.totalPagesArray);
  }
}
function ContentsComponent_div_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td")(9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContentsComponent_div_1_tr_14_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const movie_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.deleteMovie(movie_r14._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const movie_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](movie_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](movie_r14.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 4, movie_r14.releaseDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/edit-movie/", movie_r14._id, "");
  }
}
function ContentsComponent_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContentsComponent_div_1_div_16_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const page_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.goToPage(page_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r17 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r13.currentPage === page_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r17);
  }
}
function ContentsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "table", 17)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Genres");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Release Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ContentsComponent_div_1_tr_14_Template, 13, 7, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ContentsComponent_div_1_div_16_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.movies);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.totalPagesArray);
  }
}
class ContentsComponent {
  constructor(apiService, authService) {
    this.apiService = apiService;
    this.authService = authService;
    this.movies = [];
    this.currentPage = 1;
    this.totalPages = 1;
    this.totalPagesArray = [];
    this.userRole = 'GUEST';
    this.loading = true;
    this.userRole = this.authService.getUserRole();
    this.perPage = this.userRole == "ADMIN" ? 10 : 4;
    this.fetchMovies();
  }
  fetchMovies() {
    this.loading = true;
    this.apiService.getContent({
      perPage: this.perPage,
      page: this.currentPage
    }).subscribe(data => {
      this.movies = data.contents;
      this.currentPage = data.currentPage;
      this.totalPages = data.totalPages;
      this.totalPagesArray = Array.from({
        length: this.totalPages
      }, (_, i) => i + 1);
      this.loading = false;
    });
  }
  goToPage(page) {
    this.currentPage = page;
    this.fetchMovies();
  }
  deleteMovie(id) {
    this.apiService.deleteContent(id).subscribe(data => {
      this.fetchMovies();
    });
  }
}
ContentsComponent.ɵfac = function ContentsComponent_Factory(t) {
  return new (t || ContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
ContentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ContentsComponent,
  selectors: [["app-contents"]],
  decls: 2,
  vars: 2,
  consts: [["class", "movies-page", 4, "ngIf"], [1, "movies-page"], ["class", "movies", 4, "ngIf"], ["class", "movies-skeleton", 4, "ngIf"], [1, "pagination"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "movies"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], ["alt", "", 3, "src"], [1, "add-watchlist", "fa-solid", "fa-bookmark"], [1, "info"], [1, "movies-skeleton"], ["class", "skeleton", 4, "ngFor", "ngForOf"], [1, "skeleton"], [1, "card-skeleton"], [3, "click"], [1, "movies-table"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "fa-solid", "fa-pen-to-square"], [1, "red", 3, "click"], [1, "fa-solid", "fa-trash"]],
  template: function ContentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ContentsComponent_div_0_Template, 6, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContentsComponent_div_1_Template, 17, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userRole != "ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userRole == "ADMIN");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _components_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".movies-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 65px);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.movies-page[_ngcontent-%COMP%]   .movies-table[_ngcontent-%COMP%] {\n  width: 90vw;\n  border-collapse: collapse;\n}\n.movies-page[_ngcontent-%COMP%]   .movies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ddd;\n}\n.movies-page[_ngcontent-%COMP%]   .movies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #4A418F;\n  color: white;\n  font-weight: bold;\n}\n.movies-page[_ngcontent-%COMP%]   .movies-table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 70px;\n}\n.movies-page[_ngcontent-%COMP%]   .movies-table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 6px 11px;\n  margin-right: 5px;\n}\n.movies-page[_ngcontent-%COMP%]   .movies-table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\n.movies-page[_ngcontent-%COMP%]   .movies-table[_ngcontent-%COMP%]   button.red[_ngcontent-%COMP%] {\n  background-color: rgb(248, 27, 15);\n}\n.movies-page[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.movies-page[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]   .card-skeleton[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-skeleton[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]   .card-skeleton[_ngcontent-%COMP%] {\n  width: 180px;\n  border-radius: 10px;\n  margin: 5px;\n  cursor: pointer;\n  position: relative;\n  background-color: #E0E0E0;\n  height: 270px;\n}\n.movies-page[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-skeleton[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 20px;\n  border-radius: 10px;\n  background-color: #E0E0E0;\n  margin: 5px;\n}\n.movies-page[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-skeleton[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 180px;\n  border-radius: 10px;\n  margin: 5px;\n  cursor: pointer;\n  position: relative;\n}\n.movies-page[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .add-watchlist[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-skeleton[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .add-watchlist[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #ffffff;\n  color: #4B408F;\n  position: absolute;\n  border-radius: 50%;\n  top: 10px;\n  right: 10px;\n}\n.movies-page[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-skeleton[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n.movies-page[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-skeleton[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #283593;\n  padding: 10px 0px;\n  font-weight: 900;\n}\n.movies-page[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .movies-skeleton[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: gray;\n  padding: 10px 0px;\n}\n.movies-page[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.movies-page[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background-color: white;\n  color: rgba(71, 64, 138, 0.862745098);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5px;\n  font-size: 18px;\n  cursor: pointer;\n  border: 2px solid rgba(71, 64, 138, 0.862745098);\n}\n.movies-page[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%], .movies-page[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGVudHMvY29udGVudHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fY29sb3JzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBREY7QUFFRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUFKO0FBQ0k7O0VBRUUsWUFBQTtFQUNBLHNCQUFBO0FBQ047QUFFSTtFQUNFLHlCQ25CSTtFRG9CSixZQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFETjtBQUlJO0VFd0JGLHlCRGpEbUI7RUNrRG5CLFdEcERRO0VDcURSLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBRUksaUJBQUE7RUYvQkEsaUJBQUE7QUFNTjtBRStCRTtFQUNFLGdERGhFaUI7QURtQ3JCO0FBUk07RUFDRSxrQ0FBQTtBQVVSO0FBTkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFRSjtBQU5NO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQVFSO0FBTk07RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBUVI7QUFKSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFNTjtBQUxNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDRyxTQUFBO0VBQ0EsV0FBQTtBQU9YO0FBTE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBT1I7QUFKUztFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTVY7QUFKUztFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQU1YO0FBQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQ3ZHRztFRHdHSCxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7QUFHTjtBQUZNO0VBQ0UsZ0RDakhDO0VEa0hELFlBQUE7QUFJUiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4ubW92aWVzLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLm1vdmllcy10YWJsZSB7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yXzE7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBAaW5jbHVkZSBidXR0b24oc21hbGwpO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgJi5yZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjcsIDE1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubW92aWVzLC5tb3ZpZXMtc2tlbGV0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5za2VsZXRvbntcclxuICAgICAgLmNhcmQtc2tlbGV0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICNFMEUwRTA7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5mb3tcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAuYWRkLXdhdGNobGlzdHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICM0QjQwOEY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICB0b3A6MTBweDtcclxuICAgICAgICAgICByaWdodDoxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmZve1xyXG4gICAgICAgICBoNXtcclxuICAgICAgICAgIGNvbG9yOiAjMjgzNTkzO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgY29sb3I6Z3JheTtcclxuICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAucGFnaW5hdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpdntcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xyXG4gICAgICBjb2xvcjogJGNvbG9yXzI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICAkY29sb3JfMjtcclxuICAgICAgJi5hY3RpdmUsJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfMjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGNvbG9yXzE6ICM0QTQxOEY7XHJcbiRjb2xvcl8yOiM0NzQwOGFkYztcclxuJGNvbG9yXzM6ICNmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yXzE6IHRyYW5zcGFyZW50O1xyXG4kYmFja2dyb3VuZC1jb2xvcl8yOiAjNDg0MDhBO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8zOiAjNDc0MDhhZGM7XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuQG1peGluIGlucHV0Q29udGFpbmVyKCRpbm5lckJ0bikge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LHRleHRhcmVhLHNlbGVjdHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweCAgMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1cyx0ZXh0YXJlYTpmb2N1cyxzZWxlY3Q6Zm9jdXN7XHJcbiAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgJGNvbG9yXzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZigkaW5uZXJCdG4pe1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl8xO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl8zO1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuQG1peGluIGJ1dHRvbigkc2l6ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzI7XHJcbiAgY29sb3I6ICRjb2xvcl8zO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgQGlmICRzaXplID09IHNtYWxsIHtcclxuICAgICAgcGFkZGluZzogNnB4IDExcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBtZWRpdW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFyZ2Uge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleGJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var ngx_splide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-splide */ 4352);



function HomeComponent_splide_slide_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "splide-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", movie_r1.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class HomeComponent {
  constructor() {
    this.movies = [{
      poster: 'https://www.themoviedb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg',
      name: 'RRR',
      id: 2341
    }, {
      poster: 'https://rukminim2.flixcart.com/image/850/1000/j6xxgnk0/poster/q/u/a/small-baahubali-1-poster-paper-print-18-inch-x-12-inch-rolled-original-imaexagrmsrmpgyy.jpeg?q=20',
      name: 'RRR',
      id: 2344
    }, {
      poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDT8DLq-8swTp99tkIg7WkHlQEChWGAl71dJClxCLnR4y5-zwd',
      name: '24',
      id: 2334
    }];
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 9,
  vars: 1,
  consts: [[1, "home-page"], [1, "slider-container"], [4, "ngFor", "ngForOf"], [1, "main-container"], ["alt", "", 1, "slider-image", 3, "src"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "splide");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_splide_slide_3_Template, 2, 1, "splide-slide", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Find Your Next Addictive Series");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filtered For You: Unearth Binge-Worthy Movies and Series Tailored to Your Tastes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_splide__WEBPACK_IMPORTED_MODULE_2__.NgxSplideComponent, ngx_splide__WEBPACK_IMPORTED_MODULE_2__.NgxSplideSlideComponent],
  styles: [".home-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 65px);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.home-page[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%] {\n  height: 380px;\n  width: 300px;\n}\n.home-page[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%]   .slider-image[_ngcontent-%COMP%] {\n  height: 380px;\n  width: 100%;\n}\n.home-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 400px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 25px 5px;\n}\n.home-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #4A418F;\n  font-size: 45px;\n  margin-bottom: 20px;\n}\n.home-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 25px;\n  margin-bottom: 10px;\n}\n.home-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 6px 11px;\n}\n.home-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbG9ycy5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ047QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUVJO0VBQ0UsY0MzQkk7RUQ0QkosZUFBQTtFQUNBLG1CQUFBO0FBQU47QUFFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQU47QUFFSTtFRWlCRix5QkRqRG1CO0VDa0RuQixXRHBEUTtFQ3FEUixZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUVJLGlCQUFBO0FGakJOO0FFdUJFO0VBQ0UsZ0REaEVpQjtBRDJDckIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xyXG4uaG9tZS1wYWdlIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIC5zbGlkZXItaW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAyNXB4IDVweDtcclxuICAgIGgxIHtcclxuICAgICAgY29sb3I6ICRjb2xvcl8xO1xyXG4gICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgQGluY2x1ZGUgYnV0dG9uKHNtYWxsKTs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRjb2xvcl8xOiAjNEE0MThGO1xyXG4kY29sb3JfMjojNDc0MDhhZGM7XHJcbiRjb2xvcl8zOiAjZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8xOiB0cmFuc3BhcmVudDtcclxuJGJhY2tncm91bmQtY29sb3JfMjogIzQ4NDA4QTtcclxuJGJhY2tncm91bmQtY29sb3JfMzogIzQ3NDA4YWRjO1xyXG4iLCJAaW1wb3J0IFwiY29sb3JzXCI7XHJcbkBtaXhpbiBpbnB1dENvbnRhaW5lcigkaW5uZXJCdG4pIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCx0ZXh0YXJlYSxzZWxlY3R7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggIDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsdGV4dGFyZWE6Zm9jdXMsc2VsZWN0OmZvY3Vze1xyXG4gICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICRjb2xvcl8yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYoJGlubmVyQnRuKXtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfMTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfMztcclxuICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246ZGlzYWJsZWR7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl8zO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24oJHNpemUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8yO1xyXG4gIGNvbG9yOiAkY29sb3JfMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMHB4IDRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIEBpZiAkc2l6ZSA9PSBzbWFsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMXB4O1xyXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbWVkaXVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9IEBlbHNlIGlmICRzaXplID09IGxhcmdlIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8zO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNlbnRlckZsZXhib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);





function LoginComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function LoginComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_12_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.errors["email"]);
  }
}
function LoginComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_18_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.errors["required"]);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
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
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 21,
  vars: 11,
  consts: [[1, "login-page"], [1, "card"], [3, "ngSubmit"], ["ngForm", "ngForm"], ["class", "networkError", 4, "ngIf"], [1, "input-container"], ["for", "email"], ["type", "email", "name", "email", "required", "", 3, "ngModel", "ngClass", "ngModelChange"], ["email", "ngModel"], ["class", "errors", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", 3, "ngModel", "ngClass", "ngModelChange"], ["password", "ngModel"], ["type", "submit"], [1, "networkError"], [1, "errors"], [4, "ngIf"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.form.valid && ctx.login());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Log In");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.loginData.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 3, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.loginData.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Log In");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginData.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, _r0.submitted && _r2.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.submitted && _r2.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginData.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, _r0.submitted && _r4.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.submitted && _r4.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: [".login-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 65px);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 10px 27px;\n  border-radius: 10px;\n  border: 1px solid lightgrey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .networkError[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  background: #EF5350;\n  color: white;\n  margin-bottom: 5px;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 20px;\n  width: 100%;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%] {\n  margin: 5px;\n  color: rgb(231, 14, 14);\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  line-height: 32px;\n  margin-bottom: 30px;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #888;\n  left: 10px;\n  position: absolute;\n  top: 10px;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 18px;\n  min-height: 40px;\n  padding: 20px 0px 0px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 30px;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(71, 64, 138, 0.862745098);\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 12px 24px;\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\n.login-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #f0f0f0;\n  color: black;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWl4aW5zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFERjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQU47QUFFSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBTjtBQUVNO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FBQVI7QUFHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlNO0VDM0NFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEMENSO0FDekNRO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUQyQ1Y7QUN4Q1E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEMENWO0FDeENRO0VBQ0UsYUFBQTtFQUNELGlCQUFBO0FEMENUO0FDeENRO0VBQ0UsaUJBQUE7QUQwQ1Y7QUN4Q1E7RUFDRSxpREFBQTtBRDBDVjtBQXhCTTtFQ0tKLHlCQ2pEbUI7RURrRG5CLFdDcERRO0VEcURSLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBTUUsa0JBQUE7QURpQko7QUNmRTtFQUNFLGdEQ2hFaUI7QUZpRnJCO0FBcENRO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFzQ1YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAuY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5uZXR3b3JrRXJyb3J7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNFRjUzNTA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5lcnJvcnMge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjMxLCAxNCwgMTQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXRDb250YWluZXIoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBAaW5jbHVkZSBidXR0b24obGFyZ2UpO1xyXG4gICAgICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuQG1peGluIGlucHV0Q29udGFpbmVyKCRpbm5lckJ0bikge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LHRleHRhcmVhLHNlbGVjdHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweCAgMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1cyx0ZXh0YXJlYTpmb2N1cyxzZWxlY3Q6Zm9jdXN7XHJcbiAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgJGNvbG9yXzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZigkaW5uZXJCdG4pe1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl8xO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl8zO1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuQG1peGluIGJ1dHRvbigkc2l6ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzI7XHJcbiAgY29sb3I6ICRjb2xvcl8zO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgQGlmICRzaXplID09IHNtYWxsIHtcclxuICAgICAgcGFkZGluZzogNnB4IDExcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBtZWRpdW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFyZ2Uge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleGJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiIsIiRjb2xvcl8xOiAjNEE0MThGO1xyXG4kY29sb3JfMjojNDc0MDhhZGM7XHJcbiRjb2xvcl8zOiAjZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8xOiB0cmFuc3BhcmVudDtcclxuJGJhY2tncm91bmQtY29sb3JfMjogIzQ4NDA4QTtcclxuJGJhY2tncm91bmQtY29sb3JfMzogIzQ3NDA4YWRjO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8220:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



function ProfileComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6)(7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 6)(10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Skeleton Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function ProfileComponent_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 4)(2, "div", 5)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "First Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Last Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5)(13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_ng_template_4_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.deleteAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Delete My Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.user.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.user.email);
  }
}
function ProfileComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProfileComponent_ng_template_4_div_0_Template, 20, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.user);
  }
}
class ProfileComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.authService.getUserDetails().subscribe(response => {
      this.user = response; // Assign the received user details to the 'user' variable
    }, error => {
      console.error(error);
    });
  }
  deleteAccount() {}
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 6,
  vars: 2,
  consts: [[1, "profile-page"], ["class", "profile-card skeleton", 4, "ngIf", "ngIfElse"], ["profileDetails", ""], [1, "profile-card", "skeleton"], [1, "profile-details"], [1, "detail"], [1, "label", "skeleton-line"], [1, "value", "skeleton-line"], [1, "actions"], ["disabled", "", 1, "skeleton-btn"], ["class", "profile-card", 4, "ngIf"], [1, "profile-card"], [1, "label"], [1, "value"], [1, "delete-account", 3, "click"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 14, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".profile-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n.profile-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  width: 400px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 20px;\n  background-color: #f9f9f9;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card.skeleton[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s linear infinite;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 120px;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .label.skeleton-line[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 14px;\n  border-radius: 4px;\n  background-color: #ddd;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .value.skeleton-line[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n  width: 160px;\n  height: 14px;\n  border-radius: 4px;\n  background-color: #ddd;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .delete-account[_ngcontent-%COMP%], .profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .skeleton-btn[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #ddd;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n}\n.profile-page[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .delete-account[_ngcontent-%COMP%] {\n  background-color: #E53935;\n  color: #fff;\n}\n\n@keyframes _ngcontent-%COMP%_skeleton-loading {\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFFSTtFQUNFLGdEQUFBO0FBQU47QUFJTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZSO0FBSVE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFGVjtBQUdVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRFo7QUFLUTtFQUNFLFlBQUE7QUFIVjtBQUlVO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFGWjtBQVFJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFOTjtBQVFNO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFOUjtBQVFNO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBTlI7O0FBWUE7RUFDRTtJQUNFLDZCQUFBO0VBVEY7RUFXQTtJQUNFLHlDQUFBO0VBVEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG5cclxuICAgICYuc2tlbGV0b24ge1xyXG4gICAgICBhbmltYXRpb246IHNrZWxldG9uLWxvYWRpbmcgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtZGV0YWlscyB7XHJcbiAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgJi5za2VsZXRvbi1saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICYuc2tlbGV0b24tbGluZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5kZWxldGUtYWNjb3VudCwuc2tlbGV0b24tYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIC5kZWxldGUtYWNjb3VudHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTUzOTM1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNrZWxldG9uLWxvYWRpbmcge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDBweCAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMjAwcHggKyAxMDAlKSAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1164:
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function SearchComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
class SearchComponent {}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)();
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 11,
  vars: 2,
  consts: [[1, "search-container"], [1, "searchBox"], [1, "input-container"], ["type", "text", "value", ""], [1, "search-result"], [1, "title"], [1, "movies"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["src", "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", "alt", ""]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search for movie/series");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Search Result for \"RRR\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%] {\n  margin: 5px 5%;\n}\n.search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #888;\n  left: 10px;\n  position: absolute;\n  top: 10px;\n}\n.search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 18px;\n  min-height: 40px;\n  padding: 20px 0px 0px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 30px;\n}\n.search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .search-container[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(71, 64, 138, 0.862745098);\n}\n.search-container[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: rgb(45, 4, 4);\n  margin-bottom: 10px;\n}\n.search-container[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.search-container[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 4px solid #4c514b;\n  height: 280px;\n  width: 190px;\n  border-radius: 4px;\n  margin: 5px;\n  cursor: pointer;\n}\n.search-container[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.search-container[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  border: 4px solid #1a98ff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUNBO0VBQ0UsY0FBQTtBQUNGO0FBQUU7RUNOTSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBRFNSO0FDUlE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBRFVWO0FDUFE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEU1Y7QUNQUTtFQUNFLGFBQUE7RUFDRCxpQkFBQTtBRFNUO0FDUFE7RUFDRSxpQkFBQTtBRFNWO0FDUFE7RUFDRSxpREFBQTtBRFNWO0FBekJJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUEyQk47QUF6Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUEyQk47QUExQk07RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQTRCUjtBQTNCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBNkJWO0FBM0JRO0VBQ0UseUJBQUE7QUE2QlYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xyXG4uc2VhcmNoLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLnNlYXJjaEJveHtcclxuICBtYXJnaW46IDVweCA1JTtcclxuICAuaW5wdXQtY29udGFpbmVye1xyXG4gICAgQGluY2x1ZGUgaW5wdXRDb250YWluZXIoZmFsc2UpO1xyXG4gIH1cclxufVxyXG5cclxuICAuc2VhcmNoLXJlc3VsdHtcclxuICAgIC50aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjb2xvcjogcmdiKDQ1LCA0LCA0KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5tb3ZpZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzRjNTE0YjtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMxYTk4ZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuQG1peGluIGlucHV0Q29udGFpbmVyKCRpbm5lckJ0bikge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LHRleHRhcmVhLHNlbGVjdHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweCAgMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1cyx0ZXh0YXJlYTpmb2N1cyxzZWxlY3Q6Zm9jdXN7XHJcbiAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgJGNvbG9yXzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZigkaW5uZXJCdG4pe1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl8xO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl8zO1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuQG1peGluIGJ1dHRvbigkc2l6ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzI7XHJcbiAgY29sb3I6ICRjb2xvcl8zO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgQGlmICRzaXplID09IHNtYWxsIHtcclxuICAgICAgcGFkZGluZzogNnB4IDExcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBtZWRpdW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFyZ2Uge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleGJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 235:
/*!************************************************************!*\
  !*** ./src/app/pages/season-form/season-form.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeasonFormComponent": () => (/* binding */ SeasonFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);





function SeasonFormComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeasonFormComponent_span_2_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const i_r4 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.changeForm(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.activeFormIndex == i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r4 + 1);
  }
}
function SeasonFormComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SeasonFormComponent_div_6_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.contributeForm.seasons[ctx_r7.activeFormIndex].description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SeasonFormComponent_div_6_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.contributeForm.seasons[ctx_r9.activeFormIndex].poster = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeasonFormComponent_div_6_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.updateEpisodeCount(ctx_r10.contributeForm.seasons[ctx_r10.activeFormIndex].episodes.length + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Season ", ctx_r1.activeFormIndex + 1, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.contributeForm.seasons[ctx_r1.activeFormIndex].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Season ", ctx_r1.activeFormIndex + 1, " Poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.contributeForm.seasons[ctx_r1.activeFormIndex].poster);
  }
}
function SeasonFormComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SeasonFormComponent_div_7_div_1_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const episode_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](episode_r12.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SeasonFormComponent_div_7_div_1_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const episode_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](episode_r12.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SeasonFormComponent_div_7_div_1_Template_input_ngModelChange_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const episode_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](episode_r12.duration = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const episode_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Episode ", i_r13 + 1, " Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", episode_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Episode ", i_r13 + 1, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", episode_r12.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Episode ", i_r13 + 1, " Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", episode_r12.duration);
  }
}
function SeasonFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SeasonFormComponent_div_7_div_1_Template, 13, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.contributeForm.seasons[ctx_r2.activeFormIndex].episodes);
  }
}
class SeasonFormComponent {
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
    this.seasonCount = 0;
    this.activeFormIndex = 0;
    this.episodeCount = [0];
  }
  ngOnInit() {
    this.setForm();
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      if (this.movieId) {
        this.getMovieDetails(this.movieId);
        // this.isEdit = true
      }
    });
  }

  changeForm(i) {
    this.activeFormIndex = i;
  }
  setForm() {
    this.contributeForm = {
      title: "",
      poster: "",
      tags: [],
      releaseDate: null,
      genres: [],
      type: "MOVIE",
      seasons: [],
      actors: []
    };
    // this.contributeForm = {...avengersMovies[3]}
  }

  getMovieDetails(id) {
    this.apiService.getContentById(id).subscribe(data => {
      this.contributeForm = {
        ...data
      };
      //  this.contributeForm.seasons = seasons;
      //  console.error(seasons)
      this.seasonCount = this.contributeForm.seasons.length;
    });
  }
  createSeason(num) {
    return {
      number: num,
      description: '',
      poster: '',
      episodes: []
    };
  }
  updateSeasonCount(count) {
    if (this.seasonCount < count) {
      const currentSeasonCount = this.seasonCount;
      for (let i = currentSeasonCount + 1; i <= count; i++) {
        const season = this.createSeason(i);
        this.episodeCount[i] = 0;
        this.contributeForm.seasons.push(season);
      }
    } else if (this.seasonCount > count) {
      this.contributeForm.seasons = this.contributeForm.seasons.slice(0, count);
    }
    this.seasonCount = count;
  }
  updateEpisodeCount(count) {
    if (!this.episodeCount[this.activeFormIndex]) {
      this.episodeCount[this.activeFormIndex] = 0;
    }
    if (this.episodeCount[this.activeFormIndex] < count) {
      const currentepisodeCount = this.episodeCount[this.activeFormIndex];
      for (let i = currentepisodeCount + 1; i <= count; i++) {
        const episode = {
          number: count,
          title: '',
          description: ''
        };
        this.contributeForm.seasons[this.activeFormIndex].episodes.push(episode);
      }
    } else if (this.episodeCount[this.activeFormIndex] > count) {
      this.contributeForm.seasons[this.activeFormIndex].episodes = this.contributeForm.seasons[this.activeFormIndex].episodes.slice(0, count);
    }
    this.episodeCount[this.activeFormIndex] = count;
  }
  onSubmit() {
    this.apiService.updateContent(this.movieId, this.contributeForm).subscribe(data => {
      console.log(data);
    });
  }
}
SeasonFormComponent.ɵfac = function SeasonFormComponent_Factory(t) {
  return new (t || SeasonFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
SeasonFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SeasonFormComponent,
  selectors: [["app-season-form"]],
  decls: 11,
  vars: 5,
  consts: [[1, "form-page"], [1, "tab-options"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "btn", 3, "click"], [1, "fa", "fa-plus"], ["class", "inputs", 4, "ngIf"], [4, "ngIf"], [1, "btn-container"], ["type", "submit", 3, "disabled", "click"], [3, "click"], [1, "inputs"], [1, "input-container"], ["type", "text", "name", "poster", 3, "ngModel", "ngModelChange"], ["class", "inputs", 4, "ngFor", "ngForOf"], ["type", "number", "name", "poster", 3, "ngModel", "ngModelChange"]],
  template: function SeasonFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SeasonFormComponent_span_2_Template, 2, 3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeasonFormComponent_Template_span_click_3_listener() {
        return ctx.updateSeasonCount(ctx.contributeForm.seasons.length + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add Season");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SeasonFormComponent_div_6_Template, 12, 4, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SeasonFormComponent_div_7_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeasonFormComponent_Template_button_click_9_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.contributeForm.seasons);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contributeForm.seasons.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contributeForm.seasons.length && ctx.contributeForm.seasons[ctx.activeFormIndex]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.contributeForm.seasons.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.movieId ? "Update" : "Add", " Content");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: [".form-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-page[_ngcontent-%COMP%]   .tab-options[_ngcontent-%COMP%] {\n  height: 65px;\n  display: flex;\n  color: white;\n  background-color: #26A69A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n.form-page[_ngcontent-%COMP%]   .tab-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  font-size: 14px;\n  border-radius: 10px;\n  background-color: #151137;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.form-page[_ngcontent-%COMP%]   .tab-options[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #151137;\n  border: 4px solid white;\n}\n.form-page[_ngcontent-%COMP%]   .tab-options[_ngcontent-%COMP%]   span.btn[_ngcontent-%COMP%] {\n  min-width: 130px;\n  display: flex;\n  justify-content: space-around;\n}\n.form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   span.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 35px;\n  font-size: 14px;\n  border-radius: 10px;\n  background-color: #151137;\n  color: white;\n  min-width: 130px;\n  display: flex;\n  justify-content: space-around;\n  cursor: pointer;\n}\n.form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  width: 100%;\n  width: 100%;\n  max-width: 250px;\n  margin: 10px;\n}\n.form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #888;\n  left: 10px;\n  position: absolute;\n  top: 10px;\n}\n.form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 18px;\n  min-height: 40px;\n  padding: 20px 0px 0px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 30px;\n}\n.form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-page[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(71, 64, 138, 0.862745098);\n}\n.form-page[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-page[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 12px 24px;\n}\n.form-page[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\n.form-page[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: aliceblue;\n  color: rgb(5, 49, 88);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2Vhc29uLWZvcm0vc2Vhc29uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWl4aW5zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVOO0FBRE07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQUdSO0FBRE07RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUdSO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VDckRJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VEcURGLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFHTjtBQ3pEUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FEMkRWO0FDeERRO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRDBEVjtBQ3hEUTtFQUNFLGFBQUE7RUFDRCxpQkFBQTtBRDBEVDtBQ3hEUTtFQUNFLGlCQUFBO0FEMERWO0FDeERRO0VBQ0UsaURBQUE7QUQwRFY7QUExQkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE0Qko7QUEzQkk7RUFDRSxZQUFBO0VDZkoseUJDakRtQjtFRGtEbkIsV0NwRFE7RURxRFIsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFNRSxrQkFBQTtBRHdDSjtBQ3RDRTtFQUNFLGdEQ2hFaUI7QUZ3R3JCO0FBdkNNO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBeUNSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcclxuLmZvcm0tcGFnZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLnRhYi1vcHRpb25ze1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNkE2OUE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBzcGFue1xyXG4gICAgICB3aWR0aCA6MzVweDtcclxuICAgICAgaGVpZ2h0OjM1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzE1MTEzNztcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudCA6Y2VudGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAmLmFjdGl2ZXtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTEzNztcclxuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAmLmJ0bntcclxuICAgICAgICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnB1dHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgc3Bhbi5idG57XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6MzVweDtcclxuICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTEzNztcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXRDb250YWluZXIoZmFsc2UpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgQGluY2x1ZGUgYnV0dG9uKGxhcmdlKTtcclxuICAgICAgJjpkaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgICAgY29sb3I6IHJnYig1LCA0OSwgODgpO1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuQG1peGluIGlucHV0Q29udGFpbmVyKCRpbm5lckJ0bikge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LHRleHRhcmVhLHNlbGVjdHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweCAgMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1cyx0ZXh0YXJlYTpmb2N1cyxzZWxlY3Q6Zm9jdXN7XHJcbiAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgJGNvbG9yXzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZigkaW5uZXJCdG4pe1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl8xO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl8zO1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yXzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuQG1peGluIGJ1dHRvbigkc2l6ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzI7XHJcbiAgY29sb3I6ICRjb2xvcl8zO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgQGlmICRzaXplID09IHNtYWxsIHtcclxuICAgICAgcGFkZGluZzogNnB4IDExcHg7XHJcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSBtZWRpdW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbGFyZ2Uge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleGJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiIsIiRjb2xvcl8xOiAjNEE0MThGO1xyXG4kY29sb3JfMjojNDc0MDhhZGM7XHJcbiRjb2xvcl8zOiAjZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvcl8xOiB0cmFuc3BhcmVudDtcclxuJGJhY2tncm91bmQtY29sb3JfMjogIzQ4NDA4QTtcclxuJGJhY2tncm91bmQtY29sb3JfMzogIzQ3NDA4YWRjO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8406:
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);






function SignupComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function SignupComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_10_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.formControls["firstName"].errors == null ? null : ctx_r1.formControls["firstName"].errors["required"]);
  }
}
function SignupComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_15_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formControls["lastName"].errors == null ? null : ctx_r2.formControls["lastName"].errors["required"]);
  }
}
function SignupComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Valid Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_20_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_div_20_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formControls["email"].errors == null ? null : ctx_r3.formControls["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formControls["email"].errors == null ? null : ctx_r3.formControls["email"].errors["email"]);
  }
}
function SignupComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be atleast of length 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_25_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_div_25_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formControls["password"].errors == null ? null : ctx_r4.formControls["password"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formControls["password"].errors == null ? null : ctx_r4.formControls["password"].errors["minlength"]);
  }
}
class SignupComponent {
  constructor(formBuilder, authService, router) {
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.router = router;
    this.errorMessage = '';
    this.signUpForm = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]]
    });
  }
  get formControls() {
    return this.signUpForm['controls'];
    ;
  }
  signUp() {
    if (this.signUpForm.invalid) {
      return;
    }
    const firstName = this.signUpForm.value.firstName;
    const lastName = this.signUpForm.value.lastName;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.authService.signUp(firstName, lastName, email, password).subscribe(response => {
      // Handle successful sign-up
      const token = response.token; // Assuming the token is returned in the response
      this.authService.storeToken(token);
      this.router.navigate(['profile']);
    }, error => {
      // Handle sign-up error
      this.errorMessage = error.error;
      console.error('Sign-up failed', error);
    });
  }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) {
  return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignupComponent,
  selectors: [["app-signup"]],
  decls: 28,
  vars: 7,
  consts: [[1, "signup-page"], [1, "card"], [3, "formGroup", "ngSubmit"], ["class", "networkError", 4, "ngIf"], [1, "input-container"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName"], ["class", "errors", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password"], ["type", "submit", 3, "disabled"], [1, "networkError"], [1, "errors"], [4, "ngIf"]],
  template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_2_listener() {
        return ctx.signUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignupComponent_div_5_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SignupComponent_div_10_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4)(17, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SignupComponent_div_20_Template, 3, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4)(22, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignupComponent_div_25_Template, 3, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUpForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls["firstName"].dirty || ctx.formControls["firstName"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls["lastName"].dirty || ctx.formControls["lastName"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls["email"].dirty || ctx.formControls["email"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls["password"].dirty || ctx.formControls["password"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.signUpForm.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".signup-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 65px);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 10px 27px;\n  border-radius: 10px;\n  border: 1px solid lightgrey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .networkError[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  background: #EF5350;\n  color: white;\n  margin-bottom: 5px;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 20px;\n  width: 100%;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%] {\n  margin: 5px;\n  color: rgb(231, 14, 14);\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  line-height: 32px;\n  margin-bottom: 30px;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #888;\n  left: 10px;\n  position: absolute;\n  top: 10px;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  font-size: 18px;\n  min-height: 40px;\n  padding: 20px 0px 0px 10px;\n  width: 100%;\n  margin-right: 10px;\n  display: flex;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 30px;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(71, 64, 138, 0.862745098);\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #48408A;\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0px 4px;\n  text-decoration: none;\n  padding: 12px 24px;\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 64, 138, 0.862745098);\n}\n.signup-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #f0f0f0;\n  color: black;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUVJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFOO0FBRU07RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBSU07RUMzQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUQwQ1I7QUN6Q1E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBRDJDVjtBQ3hDUTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUQwQ1Y7QUN4Q1E7RUFDRSxhQUFBO0VBQ0QsaUJBQUE7QUQwQ1Q7QUN4Q1E7RUFDRSxpQkFBQTtBRDBDVjtBQ3hDUTtFQUNFLGlEQUFBO0FEMENWO0FBeEJNO0VDS0oseUJDakRtQjtFRGtEbkIsV0NwRFE7RURxRFIsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFNRSxrQkFBQTtBRGlCSjtBQ2ZFO0VBQ0UsZ0RDaEVpQjtBRmlGckI7QUFwQ1E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXNDViIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uc2lnbnVwLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAuY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5uZXR3b3JrRXJyb3J7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNFRjUzNTA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5lcnJvcnMge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjMxLCAxNCwgMTQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXRDb250YWluZXIoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBAaW5jbHVkZSBidXR0b24obGFyZ2UpO1xyXG4gICAgICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiY29sb3JzXCI7XHJcbkBtaXhpbiBpbnB1dENvbnRhaW5lcigkaW5uZXJCdG4pIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCx0ZXh0YXJlYSxzZWxlY3R7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggIDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsdGV4dGFyZWE6Zm9jdXMsc2VsZWN0OmZvY3Vze1xyXG4gICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICRjb2xvcl8yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYoJGlubmVyQnRuKXtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfMTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfMztcclxuICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246ZGlzYWJsZWR7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl8zO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24oJHNpemUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8yO1xyXG4gIGNvbG9yOiAkY29sb3JfMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMHB4IDRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIEBpZiAkc2l6ZSA9PSBzbWFsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMXB4O1xyXG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gbWVkaXVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9IEBlbHNlIGlmICRzaXplID09IGxhcmdlIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8zO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNlbnRlckZsZXhib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iLCIkY29sb3JfMTogIzRBNDE4RjtcclxuJGNvbG9yXzI6IzQ3NDA4YWRjO1xyXG4kY29sb3JfMzogI2ZmZjtcclxuJGJhY2tncm91bmQtY29sb3JfMTogdHJhbnNwYXJlbnQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yXzI6ICM0ODQwOEE7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yXzM6ICM0NzQwOGFkYztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
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

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
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