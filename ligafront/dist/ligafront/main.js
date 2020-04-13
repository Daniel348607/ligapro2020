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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#columna1 { background: white; width:20%; vertical-align: top;}\r\n#columna2 { background: white; width:60%; vertical-align: top;}\r\n#columna3 { background: white; width:20%; vertical-align: top;}\r\n#columna1, #columna2, #columna3 { display: inline-block; color: black; }*/\r\n\r\n\r\n/**********************************************************************************/\r\n\r\n\r\n/*CABECERA Y PIE DE PAGINA*/\r\n\r\n\r\n#main-header {\r\n\tbackground: #333;\r\n\tcolor: white;\r\n    height: auto;\r\n    width: 100%; \r\n}\r\n\r\n\r\n/**********************************************************************************/\r\n\r\n\r\n/*MENU HORIZONTAL TOP*/\r\n\r\n\r\n.third-level-menu\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    right: -165px;\r\n    list-style: none;\r\n    padding: 0px, 0px, -10px, 0px;\r\n    margin: 0;\r\n    display: none;\r\n}\r\n\r\n\r\n.third-level-menu > li\r\n{\r\n    background: #FFFFFF;/* #999999;*/\r\n    display: block;\r\n    line-height:5px;\r\n   \r\n}\r\n\r\n\r\n.third-level-menu > li:hover { background:#01DFA5; }\r\n\r\n\r\n.second-level-menu\r\n{\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 0;\r\n    width: 120%;\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: none;\r\n}\r\n\r\n\r\n.second-level-menu > li\r\n{\r\n    position: relative;\r\n    height: 30px;\r\n    background: #FFFFFF;/* #999999;*/\r\n}\r\n\r\n\r\n.second-level-menu > li:hover { background:#01DFA5; }\r\n\r\n\r\n.top-level-menu\r\n{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n  }\r\n\r\n\r\n.top-level-menu > li\r\n{\r\n    position: relative;\r\n    float:left;\r\n    height: 30px;\r\n    width: 12.5%;\r\n    background: #FFFFFF;/* #999999;*/\r\n}\r\n\r\n\r\n.top-level-menu > li:hover { background: #01DFA5;}\r\n\r\n\r\n/* #CCCCCC; }*/\r\n\r\n\r\n.top-level-menu li:hover > ul\r\n{\r\n    /* On hover, display the next level's menu */\r\n    display: inline;\r\n}\r\n\r\n\r\n/* Menu Link Styles */\r\n\r\n\r\n.top-level-menu a /* Apply to all links inside the multi-level menu */\r\n{\r\n    font: 14px Arial, Helvetica, sans-serif;\r\n    color: #000000;/* #FFFFFF;*/\r\n    text-decoration: none;\r\n    padding: 0 0 0 10px;\r\n\r\n    /* Make the link cover the entire list item-container */\r\n    display: inline-block;\r\n    line-height: 30px;\r\n}\r\n\r\n\r\n.top-level-menu a:hover { color: #000000; }\r\n\r\n\r\n/**********************************************************************************/\r\n\r\n\r\n/*LINEA VERTICAL*/\r\n\r\n\r\nhr.v{\r\nwidth: 1px;\r\nheight: 500px;\r\n}\r\n\r\n\r\nli {\r\ntext-align: left;\r\n}\r\n\r\n\r\n/**********************************************************************************/\r\n\r\n\r\n/*MENU VERTICAL*/\r\n\r\n\r\n.vertical-menu {\r\n  width: 150px; \r\n  height: 150px;\r\n  overflow-y: auto;\r\n border-right: 1px solid #bbb;\r\n}\r\n\r\n\r\n.vertical-menu a {\r\n  background-color: #eee;\r\n  color: black; \r\n  display: block; \r\n  padding: 10px;\r\n  text-decoration: none;\r\n  border-right: 1px solid #bbb;\r\n}\r\n\r\n\r\n.vertical-menu a:hover {\r\n  background-color: #ccc; \r\n}\r\n\r\n\r\n.vertical-menu a:active {\r\n  background-color: #060a09; \r\n  color: white;\r\n}\r\n\r\n\r\n/**********************************************************************************/\r\n\r\n\r\n/*Text de noticias*/\r\n\r\n\r\n.cortar{\r\n  width:700px;\r\n  height:150px;\r\n  text-overflow:ellipsis;\r\n  white-space:nowrap; \r\n  overflow:hidden; \r\n  grid-auto-rows: 3;\r\n}\r\n\r\n\r\n.cortarCel{\r\n  width:300px;\r\n  height:100px;\r\n  text-overflow:ellipsis;\r\n  white-space:nowrap; \r\n  overflow:hidden; \r\n}\r\n\r\n\r\ntextarea { \r\n  height: auto; \r\n  overflow:hidden;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #appForm=\"ngForm\" > \n\n<!------------------------------------------------------------------------------>\n<!--CABECERA-->\n<div id='main-header'>\n    <img src=\"assets/Franja01.jpg\" alt=\"Liga Total\" style=\"max-width:100%;width:auto;height:auto;\"/>\n</div>\n\n\n<!------------------------------------------------------------------------------>\n<!--MENU HORIZONTAL TOP - ADMINISTRADOR-->\n<div >\n<ul class=\"top-level-menu\">\n    <li *ngIf = \"pantalla === 640\"><a href=\"#\" (click)='ShowNews(1)'>Home</a></li>\n    <li *ngIf = \"pantalla === 360\"><a href=\"#\" (click)='ShowNews(1)'><font size=\"1\">Home</font></a></li>\n\n    <li *ngIf = \"pantalla === 640\"><a href=\"#\" [routerLink]=\"['viewequipos']\" (click)='ShowNews(0)'>Equipos</a></li>\n    <li *ngIf = \"pantalla === 360\"><a href=\"#\" [routerLink]=\"['viewequipos']\" (click)='ShowNews(0)'><font size=\"1\">Equipos</font></a></li>\n    \n    <li *ngIf = \"pantalla === 640\"><a href=\"#\" [routerLink]=\"['torneosopc']\" (click)='ShowNews(0)'>Torneos </a></li>\n    <li *ngIf = \"pantalla === 360\"><a href=\"#\" [routerLink]=\"['torneosopc']\" (click)='ShowNews(0)'><font size=\"1\">Torneos</font></a></li>\n\n    <li *ngIf = \"pantalla === 640\"><a href=\"#\" [routerLink]=\"['clasificacionopc']\" (click)='ShowNews(0)'>Clasificación</a></li>\n    <li *ngIf = \"pantalla === 360\"><a href=\"#\" [routerLink]=\"['clasificacionopc']\" (click)='ShowNews(0)'><font size=\"1\">Clasific.</font></a></li>  \n\n    <li *ngIf = \"pantalla === 640\"><a href=\"#\" [routerLink]=\"['goleadoresopc']\" (click)='ShowNews(0)'>Goleadores</a></li>\n    <li *ngIf = \"pantalla === 360\"><a href=\"#\" [routerLink]=\"['goleadoresopc']\" (click)='ShowNews(0)'><font size=\"1\">Golead.</font></a></li>\n<!--\n    <li *ngIf = \"pantalla === 640\"><a href=\"#\" [routerLink]=\"['clasificatorioopc']\" (click)='ShowNews(0)'>Clasificatorio</a></li>\n    <li *ngIf = \"pantalla === 360\"><a href=\"#\" [routerLink]=\"['clasificatorioopc']\" (click)='ShowNews(0)'><font size=\"1\">Clas.</font></a></li>\n-->\n    <div *ngIf = \"!userLoginService.isUserLoggedIn\">\n    <li></li>\n    <li></li>\n    </div>\n\n    <li style=\"float:right;\" *ngIf = \"!userLoginService.isUserLoggedIn\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <div *ngIf = \"!userLoginService.isUserLoggedIn\">\n            <div *ngIf = \"pantalla === 640\">\n              <a (click)='openModal(\"custom-modal-1\")' style=\"cursor:pointer;\">LogIn</a>\n            </div>\n            <div *ngIf = \"pantalla === 360\">\n              <a (click)='openModal(\"custom-modal-1\")' style=\"cursor:pointer;\"><font size=\"1\">LogIn</font></a>\n            </div>\n          </div>\n        </div>\n    </li>\n\n    <!--Menu Administracion solo si esta logeado-->\n    <li *ngIf = \"userLoginService.isUserLoggedIn\">\n      <div *ngIf = \"pantalla === 640\">\n      <a style=\"cursor:pointer;\" (click)='ShowNews(0)'>Administración</a>\n      </div>\n      <div *ngIf = \"pantalla === 360\">\n        <a style=\"cursor:pointer;\" (click)='ShowNews(0)'><font size=\"1\">Admin.</font></a>\n      </div>\n      <!--Menu Administrador-->\n      <ul class=\"second-level-menu\" *ngIf = \"userrol == 1\">\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['usuarios']\">Usuarios</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['zonas']\">Zonas</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['modalidades']\">Modalidades</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['divisionales']\">Divisionales</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['equipos']\">Equipos</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['jugadores']\">Jugadores</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['campeonatos']\">Campeonatos</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['viewpagoequipos']\">Pagos de equipos</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['noticias']\">Noticias</a></li>\n      </ul>\n      <!--Menu Encargado-->\n      <ul class=\"second-level-menu\" *ngIf = \"userrol == 2\">\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['jugadores']\">Jugadores</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['partidosequipo', equipo]\">Partidos y jugadores</a></li>\n        <li><a href=\"#\" (click)='ShowNews(0)' [routerLink]=\"['pagoequipos']\">Ingreso de pago</a></li>\n      </ul>\n    </li>\n\n    <!--<li *ngIf = \"userLoginService.isUserLoggedIn\"></li>-->\n\n    <li style=\"float:right;\" *ngIf = \"userLoginService.isUserLoggedIn\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <div *ngIf = \"userLoginService.isUserLoggedIn\">\n            <div *ngIf = \"pantalla === 640\">\n              <a (click)='LogOut(appForm)' style=\"cursor:pointer;\">LogOut - </a>\n              {{userlog}}\n            </div>\n            <div *ngIf = \"pantalla === 360\">\n              <a (click)='LogOut(appForm)' style=\"cursor:pointer;\"><font size=\"1\">LogOut</font></a>\n            </div>\n          </div>\n        </div>\n    </li>\n    <!--Fin Menu Administracion solo si esta logeado-->\n</ul>\n</div>\n\n<!------------------------------------------------------------------------------>\n<!--Imagen post menu-->\n<img src=\"assets/Franja02.jpg\" style=\"background-color:#222222;max-width:100%;width:auto;height:auto;\"/>\n\n\n<!------------------------------------------------------------------------------>\n<!--POPUP LOGIN-->\n<jw-modal id=\"custom-modal-1\">\n    <ul style=\"margin-left: 10px;margin-right: 10px;\">\n    <li style=\"color:red;font-size:30px;\">LogIn</li>\n    <hr style=\"height: 1px;border-color: red;\"/>\n    <li>Usuario: <input type=\"text\" id = \"username\" value = '' #name=\"ngModel\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Usuario\"/></li>\n    <li>Password: <input type=\"password\" id = \"password\" value = '' #name=\"ngModel\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"/></li>\n    <li><button (click)=\"logIn(appForm)\">LogIn</button>\n    &nbsp;&nbsp;&nbsp;\n    <button (click)=\"closeModal('custom-modal-1');\">Cerrar</button></li>\n    </ul>\n</jw-modal>\n\n\n<!------------------------------------------------------------------------------>\n<!--Tabla contenedora-->\n<table style=\"width:100%\">\n\n<tr>\n  <!------------------------------------------------------------------------------>\n  <!--Panel Noticias-->\n  <td width = \"100%\" style=\"vertical-align:top; text-align: left\" *ngIf = \"noticias!=0\">\n    <img src=\"assets/CabNoticias.jpg\" alt=\"Noticias\" style=\"max-width:100%;width:auto;height:auto;align-content:left;\"/>\n    <br>\n    <br>\n    <table>\n      <tr *ngFor=\"let noticia of noticiasService.noticias\">\n        <td width=\"30%\">\n          <a href=\"#\"  (click)='ShowNews(0)' [routerLink]=\"['../../viewnoticia', noticia.noticiasid]\">  \n          <img *ngIf = \"pantalla === 640\" width=\"100%\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + noticia.noticiasfot)\">\n          <img *ngIf = \"pantalla === 360\" width=\"100%\" height=\"15%\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + noticia.noticiasfot)\">\n         </a>\n        </td>\n        <td style=\"vertical-align:top;\">\n          <a href=\"#\"  (click)='ShowNews(0)' [routerLink]=\"['../../viewnoticia', noticia.noticiasid]\">  \n            {{noticia.noticiascab}}\n          </a>\n          <br>\n          <hr/>\n          <br>\n            {{noticia.noticiasdet}}\n        </td>\n      </tr>\n    </table>\n  </td>\n\n\n  <!------------------------------------------------------------------------------>\n  <!--CENTRO-->\n  <td width = \"70%\" *ngIf = \"noticias===0\">\n    <router-outlet></router-outlet>\n  </td>  \n\n</tr>\n\n</table>\n\n<ul>\n  <li> <font color=\"white\" size=\"0,5\">Created by D.A.S.F.76</font></li>\n</ul>\n\n<!------------------------------------------------------------------------------>\n<!--PIE DE PAGINA-->\n<table>\n  <div id='main-header'>\n      <img src=\"assets/Footer01.jpg\" alt=\"Liga Total\" style=\"max-width:100%;width:auto;height:auto;\" usemap=\"#contacto\"/>\n\n      <!--Maps segun tamaño de imagen-->\n      <map name=\"contacto\" id=\"1900\">\n        <area alt=\"eMail\" shape=\"rect\" coords=\"660,30,690,55\" href=\"mailto:info@ligatotal.com.uy?Subject=Consulta\" target=\"_top\">\n        <area alt=\"face\" shape=\"rect\" coords=\"570,30,600,55\" href=\"https://www.facebook.com/LALIGATOTALURU\" target=\"_blank\">\n      </map>\n      <!-- <map name=\"contacto\" id=\"1900\">\n        <area alt=\"eMail\" shape=\"rect\" coords=\"589,120,616,150\" href=\"mailto:info@ligatotal.com.uy?Subject=Consulta\" target=\"_top\">\n        <area alt=\"face\" shape=\"rect\" coords=\"618,120,645,150\" href=\"https://www.facebook.com/LALIGATOTALURU\" target=\"_blank\">\n      </map>\n      <map name=\"contacto\" id=\"1900\">\n        <area alt=\"eMail\" shape=\"rect\" coords=\"589,120,616,150\" href=\"mailto:info@ligatotal.com.uy?Subject=Consulta\" target=\"_top\">\n        <area alt=\"face\" shape=\"rect\" coords=\"618,120,645,150\" href=\"https://www.facebook.com/LALIGATOTALURU\" target=\"_blank\">\n      </map> -->\n\n  </div>\n</table>\n</form>\n\n\n<!--\n  <img src=\"assets/Img1.jpg\" alt=\"AlqOpi\" \nsizes=\"(min-width: 640px) 40vw, 50vw\" \nsrcset=\"assets/Img1.jpg 200w, assets/Img1.jpg 400w,  \nassets/Img1.jpg 800w, assets/Img1.jpg 1200w\" /> -->\n\n\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _popup_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup/modal.service */ "./src/app/popup/modal.service.ts");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/noticias.service */ "./src/app/services/noticias.service.ts");
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
    function AppComponent(modalService, userLoginService, router, appService, domSanitizer, noticiasService) {
        this.modalService = modalService;
        this.userLoginService = userLoginService;
        this.router = router;
        this.appService = appService;
        this.domSanitizer = domSanitizer;
        this.noticiasService = noticiasService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.GetUsr();
        this.getNoticia();
        this.noticias = 0; //parseInt(sessionStorage.getItem('noticias'), 10);
        //Tamaño img noticias segun la pantalla
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    AppComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    AppComponent.prototype.closeModal = function (id) {
        this.username = '';
        this.password = '';
        this.modalService.close(id);
    };
    AppComponent.prototype.logIn = function (form) {
        var _this = this;
        var usr = { username: this.username, password: this.password, rol: this.rol, id: this.id, equipo: this.equipo }; //se cargan valores en arrray
        this.noticias = 1;
        this.appService.getUsuarioLogin(usr).subscribe(function (res) {
            _this.userLoginService.usuarioLogeado = res;
            _this.usraux = _this.userLoginService.usuarioLogeado;
            if (typeof Object.keys(_this.usraux)[0] === 'undefined') {
                _this.username = '';
                _this.password = '';
                _this.rol = 0;
                _this.id = 0;
                _this.equipo = 0;
                M.toast({ html: 'Usuario/Password incorrectos' });
            }
            else {
                usr = { username: _this.usraux[0].UsuariosAli, password: _this.usraux[0].UsuariosPas, rol: _this.usraux[0].UsuariosPer, id: _this.usraux[0].UsuariosId, equipo: _this.usraux[0].equipoid };
                _this.userLoginService.setUserLoggedIn(usr);
                _this.username = '';
                _this.password = '';
                _this.rol = 0;
                _this.id = 0;
                _this.equipo = 0;
                _this.ShowNews(1);
                _this.closeModal('custom-modal-1');
                form.reset();
                _this.GetUsr();
                M.toast({ html: 'Bienvenido/a' });
                _this.router.navigateByUrl('/');
            }
            ;
        });
    };
    AppComponent.prototype.LogOut = function (form) {
        this.userLoginService.setUserLoggedOut();
        form.reset();
        this.noticias = 1;
        this.router.navigateByUrl('/');
    };
    AppComponent.prototype.GetUsr = function () {
        var usrlog = this.userLoginService.getUserLoggedIn();
        if (usrlog) {
            this.userrol = usrlog.rol;
            this.userlog = usrlog.username;
            this.equipo = usrlog.equipo;
        }
        ;
    };
    AppComponent.prototype.ShowNews = function (mostrar) {
        if (mostrar === 1) {
            sessionStorage.setItem('noticias', '1');
            this.noticias = 1;
        }
        else {
            sessionStorage.setItem('noticias', '0');
            this.noticias = 0;
        }
    };
    AppComponent.prototype.getNoticia = function () {
        var _this = this;
        this.noticiasService.getNoticia()
            .subscribe(function (res) {
            _this.noticiasService.noticias = res;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./popup/modal.less */ "./src/app/popup/modal.less")],
        }),
        __metadata("design:paramtypes", [_popup_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _services_noticias_service__WEBPACK_IMPORTED_MODULE_6__["NoticiasService"]])
    ], AppComponent);
    return AppComponent;
}()); //AppComponent



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "../node_modules/angularfire2/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_zonas_zonas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/zonas/zonas.component */ "./src/app/components/zonas/zonas.component.ts");
/* harmony import */ var _components_modalidades_modalidad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modalidades/modalidad.component */ "./src/app/components/modalidades/modalidad.component.ts");
/* harmony import */ var _components_imgppal_imgppal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/imgppal/imgppal.component */ "./src/app/components/imgppal/imgppal.component.ts");
/* harmony import */ var _popup_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popup/modal.component */ "./src/app/popup/modal.component.ts");
/* harmony import */ var _popup_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popup/modal.service */ "./src/app/popup/modal.service.ts");
/* harmony import */ var _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/usuarios/usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var _components_divisionales_divisionales_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/divisionales/divisionales.component */ "./src/app/components/divisionales/divisionales.component.ts");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
/* harmony import */ var _components_equipos_equipos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/equipos/equipos.component */ "./src/app/components/equipos/equipos.component.ts");
/* harmony import */ var _components_viewequipos_viewequipos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/viewequipos/viewequipos.component */ "./src/app/components/viewequipos/viewequipos.component.ts");
/* harmony import */ var _components_campeonatos_campeonatos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/campeonatos/campeonatos.component */ "./src/app/components/campeonatos/campeonatos.component.ts");
/* harmony import */ var _components_jugadores_jugadores_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/jugadores/jugadores.component */ "./src/app/components/jugadores/jugadores.component.ts");
/* harmony import */ var _components_camequipos_camequipos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/camequipos/camequipos.component */ "./src/app/components/camequipos/camequipos.component.ts");
/* harmony import */ var _components_partidos_partidos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/partidos/partidos.component */ "./src/app/components/partidos/partidos.component.ts");
/* harmony import */ var _components_jugpars_jugpars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/jugpars/jugpars.component */ "./src/app/components/jugpars/jugpars.component.ts");
/* harmony import */ var _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/noticias/noticias.component */ "./src/app/components/noticias/noticias.component.ts");
/* harmony import */ var _components_pagoequipos_pagoequipos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pagoequipos/pagoequipos.component */ "./src/app/components/pagoequipos/pagoequipos.component.ts");
/* harmony import */ var _components_partidosequipo_partidosequipo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/partidosequipo/partidosequipo.component */ "./src/app/components/partidosequipo/partidosequipo.component.ts");
/* harmony import */ var _components_viewjugadores_viewjugadores_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/viewjugadores/viewjugadores.component */ "./src/app/components/viewjugadores/viewjugadores.component.ts");
/* harmony import */ var _components_equipodatos_equipodatos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/equipodatos/equipodatos.component */ "./src/app/components/equipodatos/equipodatos.component.ts");
/* harmony import */ var _components_jugadordatos_jugadordatos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/jugadordatos/jugadordatos.component */ "./src/app/components/jugadordatos/jugadordatos.component.ts");
/* harmony import */ var _components_jugcarnet_jugcarnet_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/jugcarnet/jugcarnet.component */ "./src/app/components/jugcarnet/jugcarnet.component.ts");
/* harmony import */ var _components_viewpagoequipos_viewpagoequipos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/viewpagoequipos/viewpagoequipos.component */ "./src/app/components/viewpagoequipos/viewpagoequipos.component.ts");
/* harmony import */ var _components_fixture_fixture_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/fixture/fixture.component */ "./src/app/components/fixture/fixture.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_fixtureopci_fixtureopci_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/fixtureopci/fixtureopci.component */ "./src/app/components/fixtureopci/fixtureopci.component.ts");
/* harmony import */ var _components_viewnoticia_viewnoticia_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/viewnoticia/viewnoticia.component */ "./src/app/components/viewnoticia/viewnoticia.component.ts");
/* harmony import */ var _components_clasificacionopc_clasificacionopc_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/clasificacionopc/clasificacionopc.component */ "./src/app/components/clasificacionopc/clasificacionopc.component.ts");
/* harmony import */ var _components_goleadoresopc_goleadoresopc_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/goleadoresopc/goleadoresopc.component */ "./src/app/components/goleadoresopc/goleadoresopc.component.ts");
/* harmony import */ var _components_galeriafotcam_galeriafotcam_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/galeriafotcam/galeriafotcam.component */ "./src/app/components/galeriafotcam/galeriafotcam.component.ts");
/* harmony import */ var _components_partidosfot_partidosfot_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/partidosfot/partidosfot.component */ "./src/app/components/partidosfot/partidosfot.component.ts");
/* harmony import */ var _components_viewpartido_viewpartido_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/viewpartido/viewpartido.component */ "./src/app/components/viewpartido/viewpartido.component.ts");
/* harmony import */ var _components_clasificatorioopc_clasificatorioopc_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/clasificatorioopc/clasificatorioopc.component */ "./src/app/components/clasificatorioopc/clasificatorioopc.component.ts");
/* harmony import */ var _components_torneosopc_torneosopc_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/torneosopc/torneosopc.component */ "./src/app/components/torneosopc/torneosopc.component.ts");
/* harmony import */ var _components_clasificatoriogru_clasificatoriogru_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/clasificatoriogru/clasificatoriogru.component */ "./src/app/components/clasificatoriogru/clasificatoriogru.component.ts");
/* harmony import */ var _components_clasificatoriopar_clasificatoriopar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/clasificatoriopar/clasificatoriopar.component */ "./src/app/components/clasificatoriopar/clasificatoriopar.component.ts");
/* harmony import */ var _components_llaveoct_llaveoct_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/llaveoct/llaveoct.component */ "./src/app/components/llaveoct/llaveoct.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components
//import { EmployeesComponent } from './components/employees/employees.component';







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_zonas_zonas_component__WEBPACK_IMPORTED_MODULE_7__["ZonasComponent"],
                _components_modalidades_modalidad_component__WEBPACK_IMPORTED_MODULE_8__["ModalidadComponent"],
                _components_imgppal_imgppal_component__WEBPACK_IMPORTED_MODULE_9__["ImgppalComponent"],
                _popup_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["UsuariosComponent"],
                _components_divisionales_divisionales_component__WEBPACK_IMPORTED_MODULE_13__["DivisionalesComponent"],
                _components_equipos_equipos_component__WEBPACK_IMPORTED_MODULE_15__["EquipoComponent"],
                _components_viewequipos_viewequipos_component__WEBPACK_IMPORTED_MODULE_16__["ViewEquipoComponent"],
                _components_campeonatos_campeonatos_component__WEBPACK_IMPORTED_MODULE_17__["CampeonatosComponent"],
                _components_jugadores_jugadores_component__WEBPACK_IMPORTED_MODULE_18__["JugadoresComponent"],
                _components_camequipos_camequipos_component__WEBPACK_IMPORTED_MODULE_19__["CamequiposComponent"],
                _components_partidos_partidos_component__WEBPACK_IMPORTED_MODULE_20__["PartidosComponent"],
                _components_jugpars_jugpars_component__WEBPACK_IMPORTED_MODULE_21__["JugparsComponent"],
                _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_22__["NoticiasComponent"],
                _components_pagoequipos_pagoequipos_component__WEBPACK_IMPORTED_MODULE_23__["PagoequiposComponent"],
                _components_partidosequipo_partidosequipo_component__WEBPACK_IMPORTED_MODULE_24__["PartidosequipoComponent"],
                _components_viewjugadores_viewjugadores_component__WEBPACK_IMPORTED_MODULE_25__["ViewJugadoresComponent"],
                _components_equipodatos_equipodatos_component__WEBPACK_IMPORTED_MODULE_26__["EquipodatosComponent"],
                _components_jugadordatos_jugadordatos_component__WEBPACK_IMPORTED_MODULE_27__["JugadordatosComponent"],
                _components_jugcarnet_jugcarnet_component__WEBPACK_IMPORTED_MODULE_28__["JugcarnetComponent"],
                _components_viewpagoequipos_viewpagoequipos_component__WEBPACK_IMPORTED_MODULE_29__["ViewpagoequiposComponent"],
                _components_fixture_fixture_component__WEBPACK_IMPORTED_MODULE_30__["FixtureComponent"],
                _components_fixtureopci_fixtureopci_component__WEBPACK_IMPORTED_MODULE_32__["FixtureopciComponent"],
                _components_viewnoticia_viewnoticia_component__WEBPACK_IMPORTED_MODULE_33__["ViewnoticiaComponent"],
                _components_clasificacionopc_clasificacionopc_component__WEBPACK_IMPORTED_MODULE_34__["ClasificacionopcComponent"],
                _components_goleadoresopc_goleadoresopc_component__WEBPACK_IMPORTED_MODULE_35__["GoleadoresopcComponent"],
                _components_galeriafotcam_galeriafotcam_component__WEBPACK_IMPORTED_MODULE_36__["GaleriafotcamComponent"],
                _components_partidosfot_partidosfot_component__WEBPACK_IMPORTED_MODULE_37__["PartidosfotComponent"],
                _components_viewpartido_viewpartido_component__WEBPACK_IMPORTED_MODULE_38__["ViewpartidoComponent"],
                _components_clasificatorioopc_clasificatorioopc_component__WEBPACK_IMPORTED_MODULE_39__["ClasificatorioopcComponent"],
                _components_torneosopc_torneosopc_component__WEBPACK_IMPORTED_MODULE_40__["TorneosopcComponent"],
                _components_clasificatoriogru_clasificatoriogru_component__WEBPACK_IMPORTED_MODULE_41__["ClasificatoriogruComponent"],
                _components_clasificatoriopar_clasificatoriopar_component__WEBPACK_IMPORTED_MODULE_42__["ClasificatorioparComponent"],
                _components_llaveoct_llaveoct_component__WEBPACK_IMPORTED_MODULE_43__["LlaveoctComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTING"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["BrowserAnimationsModule"]
            ],
            providers: [_popup_modal_service__WEBPACK_IMPORTED_MODULE_11__["ModalService"], _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_14__["UserLoginService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_zonas_zonas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/zonas/zonas.component */ "./src/app/components/zonas/zonas.component.ts");
/* harmony import */ var _components_modalidades_modalidad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modalidades/modalidad.component */ "./src/app/components/modalidades/modalidad.component.ts");
/* harmony import */ var _components_imgppal_imgppal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/imgppal/imgppal.component */ "./src/app/components/imgppal/imgppal.component.ts");
/* harmony import */ var _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/usuarios/usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var _components_divisionales_divisionales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/divisionales/divisionales.component */ "./src/app/components/divisionales/divisionales.component.ts");
/* harmony import */ var _components_equipos_equipos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/equipos/equipos.component */ "./src/app/components/equipos/equipos.component.ts");
/* harmony import */ var _components_viewequipos_viewequipos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/viewequipos/viewequipos.component */ "./src/app/components/viewequipos/viewequipos.component.ts");
/* harmony import */ var _components_campeonatos_campeonatos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/campeonatos/campeonatos.component */ "./src/app/components/campeonatos/campeonatos.component.ts");
/* harmony import */ var _components_jugadores_jugadores_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/jugadores/jugadores.component */ "./src/app/components/jugadores/jugadores.component.ts");
/* harmony import */ var _components_partidos_partidos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/partidos/partidos.component */ "./src/app/components/partidos/partidos.component.ts");
/* harmony import */ var _components_camequipos_camequipos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/camequipos/camequipos.component */ "./src/app/components/camequipos/camequipos.component.ts");
/* harmony import */ var _components_jugpars_jugpars_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/jugpars/jugpars.component */ "./src/app/components/jugpars/jugpars.component.ts");
/* harmony import */ var _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/noticias/noticias.component */ "./src/app/components/noticias/noticias.component.ts");
/* harmony import */ var _components_pagoequipos_pagoequipos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pagoequipos/pagoequipos.component */ "./src/app/components/pagoequipos/pagoequipos.component.ts");
/* harmony import */ var _components_partidosequipo_partidosequipo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/partidosequipo/partidosequipo.component */ "./src/app/components/partidosequipo/partidosequipo.component.ts");
/* harmony import */ var _components_viewjugadores_viewjugadores_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/viewjugadores/viewjugadores.component */ "./src/app/components/viewjugadores/viewjugadores.component.ts");
/* harmony import */ var _components_equipodatos_equipodatos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/equipodatos/equipodatos.component */ "./src/app/components/equipodatos/equipodatos.component.ts");
/* harmony import */ var _components_jugadordatos_jugadordatos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/jugadordatos/jugadordatos.component */ "./src/app/components/jugadordatos/jugadordatos.component.ts");
/* harmony import */ var _components_fixture_fixture_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/fixture/fixture.component */ "./src/app/components/fixture/fixture.component.ts");
/* harmony import */ var _components_fixtureopci_fixtureopci_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/fixtureopci/fixtureopci.component */ "./src/app/components/fixtureopci/fixtureopci.component.ts");
/* harmony import */ var _components_viewnoticia_viewnoticia_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/viewnoticia/viewnoticia.component */ "./src/app/components/viewnoticia/viewnoticia.component.ts");
/* harmony import */ var _components_clasificacionopc_clasificacionopc_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/clasificacionopc/clasificacionopc.component */ "./src/app/components/clasificacionopc/clasificacionopc.component.ts");
/* harmony import */ var _components_goleadoresopc_goleadoresopc_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/goleadoresopc/goleadoresopc.component */ "./src/app/components/goleadoresopc/goleadoresopc.component.ts");
/* harmony import */ var _components_partidosfot_partidosfot_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/partidosfot/partidosfot.component */ "./src/app/components/partidosfot/partidosfot.component.ts");
/* harmony import */ var _components_galeriafotcam_galeriafotcam_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/galeriafotcam/galeriafotcam.component */ "./src/app/components/galeriafotcam/galeriafotcam.component.ts");
/* harmony import */ var _components_viewpartido_viewpartido_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/viewpartido/viewpartido.component */ "./src/app/components/viewpartido/viewpartido.component.ts");
/* harmony import */ var _components_jugcarnet_jugcarnet_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/jugcarnet/jugcarnet.component */ "./src/app/components/jugcarnet/jugcarnet.component.ts");
/* harmony import */ var _components_viewpagoequipos_viewpagoequipos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/viewpagoequipos/viewpagoequipos.component */ "./src/app/components/viewpagoequipos/viewpagoequipos.component.ts");
/* harmony import */ var _components_clasificatorioopc_clasificatorioopc_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/clasificatorioopc/clasificatorioopc.component */ "./src/app/components/clasificatorioopc/clasificatorioopc.component.ts");
/* harmony import */ var _components_torneosopc_torneosopc_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/torneosopc/torneosopc.component */ "./src/app/components/torneosopc/torneosopc.component.ts");
/* harmony import */ var _components_clasificatoriogru_clasificatoriogru_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/clasificatoriogru/clasificatoriogru.component */ "./src/app/components/clasificatoriogru/clasificatoriogru.component.ts");
/* harmony import */ var _components_clasificatoriopar_clasificatoriopar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/clasificatoriopar/clasificatoriopar.component */ "./src/app/components/clasificatoriopar/clasificatoriopar.component.ts");
/* harmony import */ var _components_llaveoct_llaveoct_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/llaveoct/llaveoct.component */ "./src/app/components/llaveoct/llaveoct.component.ts");


































var ROUTES = [
    { path: 'zonas', component: _components_zonas_zonas_component__WEBPACK_IMPORTED_MODULE_1__["ZonasComponent"] },
    { path: 'modalidades', component: _components_modalidades_modalidad_component__WEBPACK_IMPORTED_MODULE_2__["ModalidadComponent"] },
    { path: 'usuarios', component: _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_4__["UsuariosComponent"] },
    { path: 'divisionales', component: _components_divisionales_divisionales_component__WEBPACK_IMPORTED_MODULE_5__["DivisionalesComponent"] },
    { path: 'equipos', component: _components_equipos_equipos_component__WEBPACK_IMPORTED_MODULE_6__["EquipoComponent"] },
    { path: 'viewequipos', component: _components_viewequipos_viewequipos_component__WEBPACK_IMPORTED_MODULE_7__["ViewEquipoComponent"] },
    { path: 'campeonatos', component: _components_campeonatos_campeonatos_component__WEBPACK_IMPORTED_MODULE_8__["CampeonatosComponent"] },
    { path: 'jugadores', component: _components_jugadores_jugadores_component__WEBPACK_IMPORTED_MODULE_9__["JugadoresComponent"] },
    { path: 'camequipos/:id', component: _components_camequipos_camequipos_component__WEBPACK_IMPORTED_MODULE_11__["CamequiposComponent"] },
    { path: 'partidos/:id', component: _components_partidos_partidos_component__WEBPACK_IMPORTED_MODULE_10__["PartidosComponent"] },
    { path: 'jugpar/:par/:eq', component: _components_jugpars_jugpars_component__WEBPACK_IMPORTED_MODULE_12__["JugparsComponent"] },
    { path: 'noticias', component: _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_13__["NoticiasComponent"] },
    { path: 'pagoequipos', component: _components_pagoequipos_pagoequipos_component__WEBPACK_IMPORTED_MODULE_14__["PagoequiposComponent"] },
    { path: 'partidosequipo/:eq', component: _components_partidosequipo_partidosequipo_component__WEBPACK_IMPORTED_MODULE_15__["PartidosequipoComponent"] },
    { path: 'viewjugadores/:eq/:par', component: _components_viewjugadores_viewjugadores_component__WEBPACK_IMPORTED_MODULE_16__["ViewJugadoresComponent"] },
    { path: 'equipodatos/:eq', component: _components_equipodatos_equipodatos_component__WEBPACK_IMPORTED_MODULE_17__["EquipodatosComponent"] },
    { path: 'jugadordatos/:ju', component: _components_jugadordatos_jugadordatos_component__WEBPACK_IMPORTED_MODULE_18__["JugadordatosComponent"] },
    { path: 'fixture/:cam/:fec/:nom', component: _components_fixture_fixture_component__WEBPACK_IMPORTED_MODULE_19__["FixtureComponent"] },
    { path: 'fixtureopci', component: _components_fixtureopci_fixtureopci_component__WEBPACK_IMPORTED_MODULE_20__["FixtureopciComponent"] },
    { path: 'viewnoticia/:not', component: _components_viewnoticia_viewnoticia_component__WEBPACK_IMPORTED_MODULE_21__["ViewnoticiaComponent"] },
    { path: 'clasificacionopc', component: _components_clasificacionopc_clasificacionopc_component__WEBPACK_IMPORTED_MODULE_22__["ClasificacionopcComponent"] },
    { path: 'goleadoresopc', component: _components_goleadoresopc_goleadoresopc_component__WEBPACK_IMPORTED_MODULE_23__["GoleadoresopcComponent"] },
    { path: 'partidosfot/:cam/:par', component: _components_partidosfot_partidosfot_component__WEBPACK_IMPORTED_MODULE_24__["PartidosfotComponent"] },
    { path: 'galeriafotcam/:cam', component: _components_galeriafotcam_galeriafotcam_component__WEBPACK_IMPORTED_MODULE_25__["GaleriafotcamComponent"] },
    { path: 'viewpartido/:par', component: _components_viewpartido_viewpartido_component__WEBPACK_IMPORTED_MODULE_26__["ViewpartidoComponent"] },
    { path: 'viewpagoequipos', component: _components_viewpagoequipos_viewpagoequipos_component__WEBPACK_IMPORTED_MODULE_28__["ViewpagoequiposComponent"] },
    { path: 'jugcarnet/:jug', component: _components_jugcarnet_jugcarnet_component__WEBPACK_IMPORTED_MODULE_27__["JugcarnetComponent"] },
    { path: 'clasificatorioopc', component: _components_clasificatorioopc_clasificatorioopc_component__WEBPACK_IMPORTED_MODULE_29__["ClasificatorioopcComponent"] },
    { path: 'torneosopc', component: _components_torneosopc_torneosopc_component__WEBPACK_IMPORTED_MODULE_30__["TorneosopcComponent"] },
    { path: 'clasificatoriogru', component: _components_clasificatoriogru_clasificatoriogru_component__WEBPACK_IMPORTED_MODULE_31__["ClasificatoriogruComponent"] },
    { path: 'clasificatoriopar/:fec', component: _components_clasificatoriopar_clasificatoriopar_component__WEBPACK_IMPORTED_MODULE_32__["ClasificatorioparComponent"] },
    { path: 'llaveoct', component: _components_llaveoct_llaveoct_component__WEBPACK_IMPORTED_MODULE_33__["LlaveoctComponent"] },
    { path: 'imgppal', component: _components_imgppal_imgppal_component__WEBPACK_IMPORTED_MODULE_3__["ImgppalComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'imgppal' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_usuariologin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/usuariologin */ "./src/app/models/usuariologin.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/usuariologin';
        this.selectedUser = new _models_usuariologin__WEBPACK_IMPORTED_MODULE_2__["UserLogin"]();
    }
    AppService.prototype.getUsuarioLogin = function (user) {
        return this.http.post(this.URL_API, user);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/camequipos/camequipos.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/camequipos/camequipos.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/camequipos/camequipos.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/camequipos/camequipos.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n    <b>ADMINISTRACIÓN EQUIPOS EN UN CAMPEONATO</b>\n  </div>\n  <form #camequipoForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n    <tr  colspan=\"2\">\n      <td width = \"10%\">Campeonato:</td>\n        <td>\n          <input type=\"text\" readonly id=\"campeonatonom\" name=\"campeonatonom\" [(ngModel)]='campeonatosService.selectedCampeonato.campeonatonom' placeholder=\"Campeonatos\"/>\n        </td>\n    </tr>    \n    <tr  colspan=\"2\">\n      <td width = \"30%\"><font color=\"red\">*</font>Equipo:</td>\n      <td>\n       <div class=\"typeHead\">\n        <input type=\"text\" list=\"equipos\" name=\"equiponom\" [(ngModel)]='camequiposService.selectedCamEquipo.equiponom' placeholder=\"Equipos\"/>\n        <datalist id=\"equipos\">\n            <select>\n              <option *ngFor=\"let equipo of equiposService.equipo\" id={{equipo.equipoid}} value={{equipo.equiponom}}></option>\n            </select>\n        </datalist>\n       </div>\n      </td>\n    </tr>\n    <tr  colspan=\"2\" *ngIf=\"EqEdi===1\">\n      <td width = \"30%\">Equipo suspendido:</td>\n      <div class=\"typeHead\">\n      <input list=\"sus\" id=\"equiposus\" name=\"equiposus\" #name=\"ngModel\" [(ngModel)]=\"EqSus\" placeholder=\"Suspendido\" /> \n        <datalist id=\"sus\" >\n            <select id =\"esel\" >\n              <option id=0 value=NO></option>\n              <option id=1 value=SI></option>\n            </select>\n        </datalist>\n      </div>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Observaciones:</td>\n      <td>\n        <input type=\"hidden\" name=\"camequid\" #_id=\"ngModel\" [(ngModel)]=\"camequiposService.selectedCamEquipo.camequid\"> \n        <input type=\"hidden\" name=\"equsus\" > \n        <input type=\"text\" name=\"camequobs\" #name=\"ngModel\" [(ngModel)]=\"camequiposService.selectedCamEquipo.camequobs\" placeholder=\"Observaciones\">\n      </td>\n    </tr>\n    <tr >\n      <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(camequipoForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addCamequipo(camequipoForm)\">Guardar</button>\n      </td>\n    </tr>\n    <tr>\n        <td colspan=\"2\">\n        <font  size=\"1\" color=\"red\">* Campos obligatorios</font>\n      </td>\n    </tr>\n  </table>\n</form>\n<table style=\"width:100%\"> \n  <tr>\n    <th colspan=\"5\">Listado equipos del campeonato</th>\n  </tr>\n  <tr>\n    <td width = \"25%\"><i>Nombre</i></td>\n    <td width = \"25%\"><i>Fecha inscripción</i></td>\n    <td width = \"25%\" colspan=\"5\"><i>Suspendido</i></td>\n  </tr>\n  <tr *ngFor=\"let camequipo of camequiposService.camequipos\">\n    <td >{{ camequipo.equiponom}}</td>\n    <td >{{ camequipo.equipofecins }}</td>\n    <div *ngIf = \"camequipo.equsus > 0; else sus\"> \n      <td >SI</td>\n    </div>\n    <ng-template #sus>\n      <td >NO</td>\n    </ng-template>\n\n    <td width = \"15%\"> \n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"editCamequipo(camequipo)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/> \n      </a>\n      <span class=\"tooltiptext\">Editar/Suspender equipo de campeonato</span>\n      </div>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"deleteCamequipo(camequipo.camequid, camequipoForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Borrar equipo de campeonato</span>\n      </div>\n    </td>\n  </tr>\n</table>\n</div>  \n\n\n"

/***/ }),

/***/ "./src/app/components/camequipos/camequipos.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/camequipos/camequipos.component.ts ***!
  \***************************************************************/
/*! exports provided: CamequiposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamequiposComponent", function() { return CamequiposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Campeonatos.service */ "./src/app/services/Campeonatos.service.ts");
/* harmony import */ var src_app_services_Camequipos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Camequipos.service */ "./src/app/services/Camequipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CamequiposComponent = /** @class */ (function () {
    function CamequiposComponent(campeonatosService, equiposService, camequiposService, route, router) {
        this.campeonatosService = campeonatosService;
        this.equiposService = equiposService;
        this.camequiposService = camequiposService;
        this.route = route;
        this.router = router;
    }
    CamequiposComponent.prototype.ngOnInit = function () {
        this.CamId = this.route.snapshot.params.id;
        this.getCampeonato();
        this.getEquipo();
        this.getCamequipo();
        this.EqEdi = 0;
    };
    CamequiposComponent.prototype.addCamequipo = function (form) {
        var _this = this;
        if (document.querySelector("#equipos option[value='" + form.value.equiponom + "']") == null) {
            alert('Debe ingresar un Equipo valido');
        }
        else {
            var equipoid = document.querySelector("#equipos option[value='" + form.value.equiponom + "']").id;
            form.value.equipoid = equipoid;
            form.value.campeonatoid = this.CamId;
            form.value.equpag = 0;
            form.value.equcancuo = 0;
            form.value.equmetpag = '';
            form.value.equdeuda = 0;
            form.value.equvendeu = '';
            form.value.equsus = 0;
            if (parseInt(form.value.equipoid, 10) > 0) {
                if (form.value.camequid) {
                    var sus = document.querySelector("#sus option[value='" + form.value.equiposus + "']").id;
                    form.value.equsus = sus;
                    this.camequiposService.putCamequipo(form.value)
                        .subscribe(function (res) {
                        _this.resetForm(form);
                        M.toast({ html: 'Datos del equipo en el campeonato editados' });
                    });
                }
                else {
                    this.camequiposService.postCamequipo(form.value)
                        .subscribe(function (res) {
                        _this.resetForm(form);
                        M.toast({ html: 'Equipo agregado al campeonato' });
                    });
                }
                ;
            }
            else {
                alert('Debe ingresar un Equipo');
            }
        }
        ;
    };
    CamequiposComponent.prototype.getCampeonato = function () {
        var _this = this;
        this.campeonatosService.getCampeonato()
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
            _this.campeonatosService.getCampeonatonom(_this.CamId)
                .subscribe(function (res) {
                var camnom = res;
                _this.campeonatosService.selectedCampeonato.campeonatonom = camnom[0].campeonatonom;
            });
        });
    };
    CamequiposComponent.prototype.getEquipo = function () {
        var _this = this;
        this.equiposService.getEquipoPpal()
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
    };
    CamequiposComponent.prototype.getCamequipo = function () {
        var _this = this;
        this.camequiposService.getCamequipo(this.CamId)
            .subscribe(function (res) {
            _this.camequiposService.camequipos = res;
        });
    };
    CamequiposComponent.prototype.editCamequipo = function (camequipo) {
        this.EqEdi = 1;
        this.camequiposService.selectedCamEquipo = camequipo;
        if (this.camequiposService.selectedCamEquipo.equsus === 0) {
            this.EqSus = 'NO';
        }
        else {
            this.EqSus = 'SI';
        }
    };
    CamequiposComponent.prototype.deleteCamequipo = function (camequid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar el equipo del campeonato?')) {
            this.camequiposService.deleteCamequipo(camequid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Equipo borrado del campeonato' });
            });
        }
    };
    CamequiposComponent.prototype.resetForm = function (form) {
        if (form) {
            this.EqEdi = 0;
            form.reset();
            this.getEquipo();
            this.getCampeonato();
            this.getCamequipo();
        }
    };
    CamequiposComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-camequipo',
            template: __webpack_require__(/*! ./camequipos.component.html */ "./src/app/components/camequipos/camequipos.component.html"),
            styles: [__webpack_require__(/*! ./camequipos.component.css */ "./src/app/components/camequipos/camequipos.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"], src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_3__["CampeonatosService"], src_app_services_Camequipos_service__WEBPACK_IMPORTED_MODULE_4__["CamequiposService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_3__["CampeonatosService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"],
            src_app_services_Camequipos_service__WEBPACK_IMPORTED_MODULE_4__["CamequiposService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CamequiposComponent);
    return CamequiposComponent;
}()); //CamequiposComponent



/***/ }),

/***/ "./src/app/components/campeonatos/campeonatos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/campeonatos/campeonatos.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/campeonatos/campeonatos.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/campeonatos/campeonatos.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n    <b>INGRESO CAMPEONATO</b>\n  </div>\n  <form #campeonatoForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n    <tr  colspan=\"2\">\n      <td width = \"30%\"><font color=\"red\">*</font>Zona:</td>\n      <td>\n        <div class=\"typeHead\">\n          <input type=\"text\" list=\"zonas\" name=\"zonanom\" [(ngModel)]='campeonatosService.selectedCampeonato.zonanom' placeholder=\"Zonas\"/>\n          <datalist id=\"zonas\">\n              <select>\n                <option *ngFor=\"let zona of zonasService.zonas\" id={{zona.zonaid}} value={{zona.zonanom}}></option>\n              </select>\n          </datalist>\n        </div>\n      </td>\n    </tr>    \n    <tr  colspan=\"2\">\n      <td width = \"30%\"><font color=\"red\">*</font>Modalidad:</td>\n      <td>\n       <div class=\"typeHead\">\n        <input type=\"text\" list=\"modalidades\" name=\"modalidadnom\" [(ngModel)]='campeonatosService.selectedCampeonato.modalidadnom' placeholder=\"Modalidades\"/>\n        <datalist id=\"modalidades\">\n            <select>\n              <option *ngFor=\"let modalidad of modalidadesService.modalidad\" id={{modalidad.modalidadid}} value={{modalidad.modalidadnom}}></option>\n            </select>\n        </datalist>\n       </div>\n      </td>\n    </tr>\n    <tr  colspan=\"2\">\n      <td width = \"30%\"><font color=\"red\">*</font>Divisional:</td>\n      <td>\n       <div class=\"typeHead\">\n        <input type=\"text\" list=\"divisionales\" name=\"divisionalnom\" [(ngModel)]='campeonatosService.selectedCampeonato.divisionalnom' placeholder=\"Divisionales\"/>\n        <datalist id=\"divisionales\">\n            <select>\n              <option *ngFor=\"let divisional of divisionalesService.divisional\" id={{divisional.divisionalid}} value={{divisional.divisionalnom}}></option>\n            </select>\n        </datalist>\n       </div>\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\"><font color=\"red\">*</font>Nombre:</td>\n      <td>\n        <input type=\"hidden\" name=\"campeonatoid\" #_id=\"ngModel\" [(ngModel)]=\"campeonatosService.selectedCampeonato.campeonatoid\"> \n        <input type=\"text\" name=\"campeonatonom\" #name=\"ngModel\" [(ngModel)]=\"campeonatosService.selectedCampeonato.campeonatonom\" placeholder=\"Campeonato\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Precio:</td>\n      <td>\n        <input type=\"text\" name=\"campeonatoprecio\" #name=\"ngModel\" [(ngModel)]=\"campeonatosService.selectedCampeonato.campeonatoprecio\" placeholder=\"Precio\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Premio:</td>\n      <td>\n        <input type=\"text\" name=\"campeonatopremio\" #name=\"ngModel\" [(ngModel)]=\"campeonatosService.selectedCampeonato.campeonatopremio\" placeholder=\"Premio\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Cantidad de equipos:</td>\n      <td>\n        <input type=\"text\" readonly name=\"campeonatoequipos\" #name=\"ngModel\" [(ngModel)]=\"CanEq\" placeholder=\"Equipos\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Estado:</td>\n      <td>\n          <input type=\"text\" list=\"estados\" name=\"campeonatoestado\" value=\"Activo\" #name=\"ngModel\" [(ngModel)]=\"campeonatosService.selectedCampeonato.campeonatoestado\" placeholder=\"Estado\">\n          <datalist id=\"estados\">\n            <option value=\"Activo\"> \n            <option value=\"Terminado\">\n            <option value=\"Suspendido\">\n          </datalist> \n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Fecha de inicio:</td>\n      <td>\n        <input type=\"date\" name=\"campeonatofecini\" #name=\"ngModel\" [(ngModel)]=\"campeonatosService.selectedCampeonato.campeonatofecini\" placeholder=\"Fecha de inicio\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Fecha de fin:</td>\n      <td>\n        <input type=\"date\" name=\"campeonatofecfin\" #name=\"ngModel\" [(ngModel)]=\"campeonatosService.selectedCampeonato.campeonatofecfin\" placeholder=\"Fecha de fin\">\n      </td>\n    </tr>\n    <tr >\n      <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(campeonatoForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addCampeonato(campeonatoForm)\">Guardar</button>\n      </td>\n    </tr>\n    <tr>\n        <td colspan=\"2\">\n        <font  size=\"1\" color=\"red\">* Campos obligatorios</font>\n      </td>\n    </tr>\n  </table>\n</form>\n<table style=\"width:100%\"> \n  <tr>\n    <th colspan=\"6\">Listado Campeonatos</th>\n  </tr>\n  <tr>\n    <td><i>Nombre</i></td>\n    <td><i>Divisional</i></td>\n    <td><i>Fecha inicio</i></td>\n    <td colspan=\"6\"><i>Estado</i></td>\n  </tr>\n  <tr *ngFor=\"let campeonato of campeonatosService.campeonatos\">\n    <td >{{ campeonato.campeonatonom }}</td>\n    <td >{{ campeonato.divisionalnom }}</td>\n    <td >{{ campeonato.campeonatofecini }}</td>\n    <td >{{ campeonato.campeonatoestado }}</td>\n    <td>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"editCampeonato(campeonato)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/> \n      </a>\n      <span class=\"tooltiptext\">Editar campeonato</span>\n      </div>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"deleteCampeonato(campeonato.campeonatoid, campeonatoForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Borrar campeonato</span>\n      </div>\n      <div class=\"tooltip\" *ngIf = \"campeonato.campeonatoestado === 'Activo'\"> \n      <a href=\"#\"  [routerLink]=\"['../camequipos', campeonato.campeonatoid]\">\n        <img width=\"25\" tooltip=\"Top tooltip\" src=\"assets/JUGADORES.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Administrar equipos del campeonato</span>\n      </div>\n      <div class=\"tooltip\" *ngIf = \"campeonato.campeonatoestado === 'Activo'\">\n      <a href=\"#\"  [routerLink]=\"['../partidos', campeonato.campeonatoid]\">\n        <img width=\"30\" tooltip=\"Top tooltip\" src=\"assets/partidos.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Administrar partidos del campeonato</span>\n      </div>\n    </td>\n  </tr>\n</table>\n</div>  \n\n"

/***/ }),

/***/ "./src/app/components/campeonatos/campeonatos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/campeonatos/campeonatos.component.ts ***!
  \*****************************************************************/
/*! exports provided: CampeonatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampeonatosComponent", function() { return CampeonatosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_divisionales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/divisionales.service */ "./src/app/services/divisionales.service.ts");
/* harmony import */ var _services_modalidad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modalidad.service */ "./src/app/services/modalidad.service.ts");
/* harmony import */ var _services_zonas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/zonas.service */ "./src/app/services/zonas.service.ts");
/* harmony import */ var src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Campeonatos.service */ "./src/app/services/Campeonatos.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CampeonatosComponent = /** @class */ (function () {
    function CampeonatosComponent(campeonatosService, divisionalesService, modalidadesService, zonasService, equiposService, router) {
        this.campeonatosService = campeonatosService;
        this.divisionalesService = divisionalesService;
        this.modalidadesService = modalidadesService;
        this.zonasService = zonasService;
        this.equiposService = equiposService;
        this.router = router;
    }
    CampeonatosComponent.prototype.ngOnInit = function () {
        this.getDivisional();
        this.getModalidad();
        this.getZona();
        this.getCampeonato();
        this.campeonatosService.selectedCampeonato.campeonatoestado = "Activo";
    };
    CampeonatosComponent.prototype.addCampeonato = function (form) {
        var _this = this;
        var zonaid = document.querySelector("#zonas option[value='" + form.value.zonanom + "']").id;
        form.value.zonaid = zonaid;
        var modalidadid = document.querySelector("#modalidades option[value='" + form.value.modalidadnom + "']").id;
        form.value.modalidadid = modalidadid;
        var divisionalid = document.querySelector("#divisionales option[value='" + form.value.divisionalnom + "']").id;
        form.value.divisionalid = divisionalid;
        form.value.campeonatoequipos = 0;
        if (parseInt(form.value.zonaid, 10) > 0 && parseInt(form.value.modalidadid, 10) > 0 && parseInt(form.value.divisionalid, 10) > 0 && form.value.campeonatonom) {
            if (form.value.campeonatoid) {
                this.campeonatosService.putCampeonato(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Campeonato Editado' });
                });
            }
            else {
                form.value.campeonatoequipos = 0;
                this.campeonatosService.postCampeonato(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Campeonato Ingresado' });
                });
            }
            ;
        }
        else {
            alert('Debe ingresar Zona, Modalidad, Divisional y Nombre de Campeonato');
        }
    };
    CampeonatosComponent.prototype.getModalidad = function () {
        var _this = this;
        this.modalidadesService.getModalidad()
            .subscribe(function (res) {
            _this.modalidadesService.modalidad = res;
        });
    };
    CampeonatosComponent.prototype.getZona = function () {
        var _this = this;
        this.zonasService.getZona()
            .subscribe(function (res) {
            _this.zonasService.zonas = res;
        });
    };
    CampeonatosComponent.prototype.getDivisional = function () {
        var _this = this;
        this.divisionalesService.getDivisionalCam()
            .subscribe(function (res) {
            _this.divisionalesService.divisional = res;
        });
    };
    CampeonatosComponent.prototype.getCampeonato = function () {
        var _this = this;
        this.campeonatosService.getCampeonato()
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
        });
    };
    CampeonatosComponent.prototype.getCanEqu = function (campeonatoid) {
        var _this = this;
        this.equiposService.getCanEquipo(campeonatoid)
            .subscribe(function (res) {
            _this.CanEq = res[0].can;
        });
    };
    ;
    CampeonatosComponent.prototype.editCampeonato = function (campeonato) {
        this.getCanEqu(campeonato.campeonatoid);
        this.campeonatosService.selectedCampeonato = campeonato;
    };
    CampeonatosComponent.prototype.deleteCampeonato = function (campeonatoid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar el campeonato?')) {
            this.campeonatosService.deleteCampeonato(campeonatoid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Campeonato Borrado' });
            });
        }
    };
    CampeonatosComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getDivisional();
            this.getModalidad();
            this.getZona();
            this.getCampeonato();
        }
    };
    CampeonatosComponent.prototype.ShowNews = function (mostrar) {
        if (mostrar === 1) {
            sessionStorage.setItem('noticias', '1');
        }
        else {
            sessionStorage.setItem('noticias', '0');
        }
    };
    CampeonatosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-campeonato',
            template: __webpack_require__(/*! ./campeonatos.component.html */ "./src/app/components/campeonatos/campeonatos.component.html"),
            styles: [__webpack_require__(/*! ./campeonatos.component.css */ "./src/app/components/campeonatos/campeonatos.component.css")],
            providers: [_services_divisionales_service__WEBPACK_IMPORTED_MODULE_2__["DivisionalesService"], _services_modalidad_service__WEBPACK_IMPORTED_MODULE_3__["ModalidadesService"], _services_zonas_service__WEBPACK_IMPORTED_MODULE_4__["ZonasService"], src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_5__["CampeonatosService"], _services_equipos_service__WEBPACK_IMPORTED_MODULE_6__["EquiposService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_5__["CampeonatosService"],
            _services_divisionales_service__WEBPACK_IMPORTED_MODULE_2__["DivisionalesService"],
            _services_modalidad_service__WEBPACK_IMPORTED_MODULE_3__["ModalidadesService"],
            _services_zonas_service__WEBPACK_IMPORTED_MODULE_4__["ZonasService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_6__["EquiposService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CampeonatosComponent);
    return CampeonatosComponent;
}()); //CampeonatosComponent



/***/ }),

/***/ "./src/app/components/clasificacionopc/clasificacionopc.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/clasificacionopc/clasificacionopc.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* TABS VERTICALES ***********************************++++++++++++++++++++++++*****/\r\n* {box-sizing: border-box}\r\nbody {font-family: \"Lato\", sans-serif;}\r\n.tab {\r\n  float: left;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n  width: 30%;\r\n  height: 100%px;\r\n  scroll-behavior: auto;\r\n}\r\n.tabCel {\r\n  float: left;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n  width: 25%;\r\n  height: 100%px;\r\n  scroll-behavior: auto;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  display: block;\r\n  background-color: inherit;\r\n  color: black;\r\n  padding: 22px 16px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tabCel button {\r\n  display: block;\r\n  background-color: inherit;\r\n  color: black;\r\n  padding: 22px 16px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color:  #01DFA5; /*  #CEF6EC;*/\r\n}\r\n/* Create an active/current \"tab button\" class */\r\n.tab button.active {\r\n  background-color:#01DFA5;\r\n}\r\n/* Style the tab content */\r\n.tabcontent {\r\n  float: left;\r\n  padding: 0px 12px;\r\n  /*border: 1px solid #ccc;*/\r\n  width: 65%;\r\n  border-left: none;\r\n  /*height: 300px;*/\r\n}\r\n/**** TAB HORIZONTAL*************************************************************/\r\n/* Style the tab */\r\n.tabh {\r\n  overflow: hidden;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tabh button {\r\n  background-color: inherit;\r\n  float: left;\r\n  /*border: 1px solid #2EFEC8;*/\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n  color: black;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tabh button:hover {\r\n  background-color: #01DFA5\r\n}\r\n/* Create an active/current tablink class */\r\n.tabh button.active {\r\n  background-color:#01DFA5;\r\n}\r\n/* Style the tab content */\r\n.tabcontenth {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  /*border: 1px solid #ccc;*/\r\n  border-top: none;\r\n}\r\n/*----------- SCROLL TABLA -----------*/\r\n.scrolltable{\r\n /* display: block;\r\n  overflow:auto;*/\r\n  height:230px;\r\n}\r\n/*----------- Centrar en pantalla -----------*/\r\n.centrar{\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/clasificacionopc/clasificacionopc.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clasificacionopc/clasificacionopc.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b>Clasificación</b>\n<br>\n<br>\n<!--PARA PC\n<div *ngIf = \"pantalla === 640\">\n  <button class=\"tablinks\" (click)=\"campeonatosDivisionales($event, div.divisionalid)\" id=div.divisionalid>{{div.divisionalnom}}</button>\n</div>-->\n<div class=\"tab\" *ngIf = \"pantalla === 640\">\n  <div *ngFor=\"let div of divisionalesService.divisional; let ind=index\">\n    <button class=\"tablinks\" (click)=\"campeonatosDivisionales($event, div.divisionalid)\" id=div.divisionalid>\n        {{div.divisionalnom}}\n    </button>\n    <hr>\n  </div>\n</div>\n\n<div class=\"tabCel\" *ngIf = \"pantalla === 360\">\n  <div *ngFor=\"let div of divisionalesService.divisional; let ind=index\">\n    <button class=\"tablinks\" (click)=\"campeonatosDivisionales($event, div.divisionalid)\" id=div.divisionalid>\n        <font size =1>{{div.divisionalnom}}</font>\n    </button>\n    <hr>\n  </div>\n</div>\n\n<div id=\"DivCon\" class=\"tabcontent\">\n  <div class=\"tabh\">\n    <div *ngFor=\"let cam of campeonatosService.campeonatos; let ind=index\">\n      <!--PARA PC-->\n      <div *ngIf = \"pantalla === 640\">\n        <button class=\"tablinksh\" (click)=\"getCanEquipocam($event, cam.campeonatoid)\" id=cam.campeonatoid>{{cam.campeonatonom}}</button>\n      </div>\n      <!--PARA CEL-->\n      <div *ngIf = \"pantalla === 360\">\n        <button class=\"tablinksh\" (click)=\"getCanEquipocam($event, cam.campeonatoid)\" id=cam.campeonatoid>\n            <font size =1>{{cam.campeonatonom}}</font>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"CamClasificacion\" class=\"tabcontenth\">\n\n    <table >\n      <tr *ngIf=\"CanEq > 0\">\n        <td style=\"width:5%\"></td>\n        <td style=\"width:25%\" *ngIf = \"pantalla === 640\"><b>Equipo</b></td>\n        <td style=\"width:25%\" *ngIf = \"pantalla === 360\"><b><font size =1>Equipo</font></b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 640\"><b>PJ</b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>PJ</font></b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 640\"><b>PG</b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>PG</font></b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 640\"><b>PE</b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>PE</font></b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 640\"><b>PP</b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>PP</font></b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 640\"><b>GF</b></td>\n        <td style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>GF</font></b></td>\n        <td style=\"width:10%;text-align: left\" *ngIf = \"pantalla === 640\"><b>GC</b></td>\n        <td style=\"width:10%;text-align: left\" *ngIf = \"pantalla === 360\"><b><font size =1>GC</font></b></td>\n        <td style=\"width:15%\" *ngIf = \"pantalla === 640\"><b>PTOS</b></td>\n        <td style=\"width:15%\" *ngIf = \"pantalla === 360\"><b><font size =1>PTS</font></b></td>\n      </tr>\n\n      <tr class=\"odd\" *ngFor=\"let equipo of eqclas ; let ind=index\">      \n        \n        <td width=\"5%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">\n          <img style=\"vertical-align:middle\" width=\"25\" height=\"25\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + equipo.equipoesc)\">\n        </td>\n        <td width=\"5%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">\n          <img style=\"vertical-align:middle\" width=\"25\" height=\"25\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + equipo.equipoesc)\">\n        </td>\n\n\n        <td width=\"30%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">\n          <a href=\"#\" [routerLink]=\"['../equipodatos', equipo.eid]\">\n          {{ equipo.enom}}\n          </a>\n        </td>\n        <td width=\"30%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">\n          <a  href=\"#\" [routerLink]=\"['../equipodatos', equipo.eid]\">\n          {{ equipo.enom}}\n          </a>\n        </td>\n\n        <td width=\"10%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">{{ equipo.pj}}</td>\n        <td width=\"10%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">{{ equipo.pj}}</td>\n\n        <td width=\"10%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">{{ equipo.pg}}</td>\n        <td width=\"10%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">{{ equipo.pg}}</td>\n\n        <td width=\"10%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">{{ equipo.pe}}</td>\n        <td width=\"10%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">{{ equipo.pe}}</td>\n\n        <td width=\"10%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">{{ equipo.pp}}</td>\n        <td width=\"10%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">{{ equipo.pp}}</td>\n\n        <td width=\"10%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">{{ equipo.gf}}</td>\n        <td width=\"10%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">{{ equipo.gf}}</td>\n\n        <td width=\"10%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">{{ equipo.gc}}</td>\n        <td width=\"10%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">{{ equipo.gc}}</td>\n\n        <td width=\"10%\" style=\"background-color:#CEF6D8\" *ngIf=\"ind < 3\">{{ equipo.ptos}}</td>\n        <td width=\"10%\" style=\"background-color:white\" *ngIf=\"ind >= 3\">{{ equipo.ptos}}</td>\n\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/clasificacionopc/clasificacionopc.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/clasificacionopc/clasificacionopc.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClasificacionopcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasificacionopcComponent", function() { return ClasificacionopcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_divisionales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/divisionales.service */ "./src/app/services/divisionales.service.ts");
/* harmony import */ var _services_campeonatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/campeonatos.service */ "./src/app/services/campeonatos.service.ts");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClasificacionopcComponent = /** @class */ (function () {
    function ClasificacionopcComponent(divisionalesService, campeonatosService, partidosService, equiposService, domSanitizer) {
        this.divisionalesService = divisionalesService;
        this.campeonatosService = campeonatosService;
        this.partidosService = partidosService;
        this.equiposService = equiposService;
        this.domSanitizer = domSanitizer;
    }
    ClasificacionopcComponent.prototype.ngOnInit = function () {
        //oculto label cargando...
        //document.getElementById("cargando").style.visibility = "hidden"
        var _this = this;
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.campeonatosService.getCampeonatoDiv(0)
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
        });
        this.getDivisional();
    };
    ClasificacionopcComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    ClasificacionopcComponent.prototype.campeonatosDivisionales = function (evt, divId) {
        var _this = this;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById("DivCon").style.display = "block";
        evt.currentTarget.className += " active";
        this.equiposService.getCanEquipocam(0)
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
        this.CanEq = 0;
        this.equiposService.getCanEquipocamTotal(0)
            .subscribe(function (res) {
            _this.eqclas = res;
            _this.CanEq = _this.eqclas.length;
        });
        this.campeonatosService.getCampeonatoDiv(divId)
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
        });
    };
    ClasificacionopcComponent.prototype.getCanEquipocam = function (evt, camId) {
        //document.getElementById("cargando").style.visibility = "visible"
        var _this = this;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontenth");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinksh");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        this.CamN = camId;
        document.getElementById("CamClasificacion").style.display = "block";
        evt.currentTarget.className += " active";
        this.equiposService.getCanEquipocamTotal(camId)
            .subscribe(function (res) {
            _this.eqclas = res;
            _this.CanEq = _this.eqclas.length;
        });
    };
    // this.CanEq = this.equiposService.equipo.length;
    // this.eqclas.length = 0;
    // //sacamos los datos de los equipos, PJ, PG, etc. Se cargan en un array que se muestra
    // for (let i = 0; i < this.equiposService.equipo.length; i++) {
    //   //TOTALIDAD DE PARTIDOS JUGADOS POR EQUIPO
    //   this.partidosService.getpartidosjugados(camId,this.equiposService.equipo[i].equipoid)
    //   .subscribe(res => {
    //     if(res){
    //       var totpar = parseInt(res[0].totpar);
    //     }else{
    //       var totpar = 0
    //     }
    //     //PARTIDOS GANADOS POR EQUIPO
    //     this.partidosService.getpartidosganados(camId,this.equiposService.equipo[i].equipoid)
    //     .subscribe(res => {
    //       if(res){
    //         var totgan = parseInt(res[0].totgan);
    //       }else{
    //         var totgan = 0
    //       }
    //       //PARTIDOS PERDIDOS POR EQUIPO
    //       this.partidosService.getpartidosperdidos(camId,this.equiposService.equipo[i].equipoid)
    //       .subscribe(res => {
    //         if(res){
    //           var totper = parseInt(res[0].totper);
    //         }else{
    //           var totper = 0
    //         }
    //         //PARTIDOS EMPATADOS POR EQUIPO
    //         this.partidosService.getpartidosempatados(camId,this.equiposService.equipo[i].equipoid)
    //         .subscribe(res => {
    //           if(isNaN(parseInt(res[0].totemp))){
    //               var totemp = 0;
    //           }else{
    //               var totemp = parseInt(res[0].totemp); 
    //           }
    //           //GOLES A FAVOR POR EQUIPO
    //           this.partidosService.getpartidosgolesf(camId,this.equiposService.equipo[i].equipoid)
    //           .subscribe(res => {
    //             var golf1 = parseInt(res[0].golf1);
    //             if(isNaN(parseInt(res[0].golf2))){
    //                 var golf2 = 0;
    //             }else{
    //                 var golf2 = parseInt(res[0].golf2); 
    //             }
    //             var golf = golf1 + golf2;
    //             //GOLES EN CONTRA POR EQUIPO
    //             this.partidosService.getpartidosgolesc(camId,this.equiposService.equipo[i].equipoid)
    //             .subscribe(res => {
    //               var golc1 = parseInt(res[0].golc1);
    //               if(isNaN(parseInt(res[0].golc2))){
    //                   var golc2 = 0;
    //               }else{
    //                   var golc2 = parseInt(res[0].golc2); 
    //               }
    //               var golc = golc1 + golc2;
    //               var dg = golf - golc;
    //               //CARGO Y ORDENO ARRAY PARA MOSTRAR  - eqclas  
    //               var equipoid= this.equiposService.equipo[i].equipoid; 
    //               var equiponom = this.equiposService.equipo[i].equiponom;
    //               var pj = totpar;
    //               var pg = totgan;
    //               var pe = totemp;
    //               var pp = totper;
    //               var gf = golf;
    //               var gc = golc;
    //               var ptos = this.equiposService.equipo[i].camequpto;
    //               var difgol = dg;
    //               var equipoesc = this.equiposService.equipo[i].equipoesc;
    //               this.eqcla = {equipoid,equiponom,pj,pg,pe,pp,gf,gc,ptos,difgol, equipoesc};
    //               this.eqclas.push(this.eqcla);
    //               //se ordena el array por los campos necesarios
    //               this.eqclas.sort((a, b) => {
    //                 if(a.ptos > b.ptos) return -1;
    //                 if(a.ptos < b.ptos) return 1;
    //                 if(a.difgol > b.difgol) return -1;
    //                 if(a.difgol < b.difgol) return 1;
    //                 if(a.gf > b.gf) return -1;
    //                 if(a.gf < b.gf) return 1;
    //                 if(a.gc > b.gc) return -1;
    //                 if(a.gc < b.gc) return 1;
    //               });
    //             });
    //           });
    //         });
    //       });
    //     });
    //   });  
    //  }//for equipo//////////////////////////
    //document.getElementById("cargando").style.visibility = "hidden"
    ClasificacionopcComponent.prototype.getDivisional = function () {
        var _this = this;
        this.divisionalesService.getDivisional()
            .subscribe(function (res) {
            _this.divisionalesService.divisional = res;
        });
    };
    ClasificacionopcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clasificacionopc',
            template: __webpack_require__(/*! ./clasificacionopc.component.html */ "./src/app/components/clasificacionopc/clasificacionopc.component.html"),
            styles: [__webpack_require__(/*! ./clasificacionopc.component.css */ "./src/app/components/clasificacionopc/clasificacionopc.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisionales_service__WEBPACK_IMPORTED_MODULE_2__["DivisionalesService"],
            _services_campeonatos_service__WEBPACK_IMPORTED_MODULE_3__["CampeonatosService"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__["PartidosService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__["EquiposService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ClasificacionopcComponent);
    return ClasificacionopcComponent;
}());



/***/ }),

/***/ "./src/app/components/clasificatoriogru/clasificatoriogru.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/clasificatoriogru/clasificatoriogru.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tooltip text +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n/* Tooltip arrow */\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n/* Tooltip text +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n/* Ancho titulo tabla grupos +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n.tdtit2 {\r\n    overflow:hidden;\r\n    height:10px;\r\n    max-height:10px;\r\n    margin: 0; padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/clasificatoriogru/clasificatoriogru.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clasificatoriogru/clasificatoriogru.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form #partidoForm=\"ngForm\" style=\"text-align: center\">  \n<div>\n  <table style=\"width: 80%;\" align=\"center\"  *ngFor=\"let grupos of fechas; let ind=index\"> \n    <tr>\n      <div align=\"left\">\n        <h4>{{grupos.Partidos}}</h4>\n      </div>\n    </tr>\n    <tr style=\"background-color: rgb(199, 199, 199);\">\n      <th class = \"tdtit2\" *ngIf = \"pantalla === 640\"><b></b></th>\n      <th style=\"width:25%\" *ngIf = \"pantalla === 360\"><b><font size =1></font></b></th>\n\n      <th class = \"tdtit2\"  *ngIf = \"pantalla === 640\"><b><font size =2>PJ</font></b></th>\n      <th style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>PJ</font></b></th>\n\n      <th class = \"tdtit2\" *ngIf = \"pantalla === 640\"><b><font size =2>PG</font></b></th>\n      <th style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>PG</font></b></th>\n\n      <th class = \"tdtit2\" *ngIf = \"pantalla === 640\"><b><font size =2>PE</font></b></th>\n      <th style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>PE</font></b></th>\n\n      <th class = \"tdtit2\" *ngIf = \"pantalla === 640\"><b><font size =2>PP</font></b></th>\n      <th style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>PP</font></b></th>\n\n      <th class = \"tdtit2\" *ngIf = \"pantalla === 640\"><b><font size =2>GF</font></b></th>\n      <th style=\"width:10%\" *ngIf = \"pantalla === 360\"><b><font size =1>GF</font></b></th>\n\n      <th class = \"tdtit2\" *ngIf = \"pantalla === 640\"><b><font size =2>GC</font></b></th>\n      <th style=\"width:10%;text-align: left\" *ngIf = \"pantalla === 360\"><b><font size =1>GC</font></b></th>\n\n      <th class = \"tdtit2\" *ngIf = \"pantalla === 640\"><b><font size =2>PTOS</font></b></th>\n      <th style=\"width:15%\" *ngIf = \"pantalla === 360\"><b><font size =1>PTS</font></b></th>\n    </tr>\n\n    <tr class=\"odd\" *ngFor=\"let equipo of eqclas ; let ind=index\">      \n\n      <td width=\"25%\" style=\"background-color:white; \" *ngIf = \"equipo.Fecha === grupos.Partidos\">\n        <a href=\"#\" [routerLink]=\"['../equipodatos', equipo.eid]\">\n        {{ equipo.enom}}\n        </a>\n      </td>\n\n      <td width=\"10%\" style=\"background-color:white; \" *ngIf = \"equipo.Fecha === grupos.Partidos\">{{ equipo.pj}}</td>\n\n      <td width=\"10%\" style=\"background-color:white; \" *ngIf = \"equipo.Fecha === grupos.Partidos\">{{ equipo.pg}}</td>\n\n      <td width=\"10%\" style=\"background-color:white; \" *ngIf = \"equipo.Fecha === grupos.Partidos\">{{ equipo.pe}}</td>\n\n      <td width=\"10%\" style=\"background-color:white; \" *ngIf = \"equipo.Fecha === grupos.Partidos\">{{ equipo.pp}}</td>\n\n      <td width=\"10%\" style=\"background-color:white; \" *ngIf = \"equipo.Fecha === grupos.Partidos\">{{ equipo.gf}}</td>\n\n      <td width=\"10%\" style=\"background-color:white; \" *ngIf = \"equipo.Fecha === grupos.Partidos\">{{ equipo.gc}}</td>\n\n      <td width=\"15%\" style=\"background-color:white; height: 3;\" *ngIf = \"equipo.Fecha === grupos.Partidos\">{{ equipo.ptos}}</td>\n\n    </tr>\n\n  </table>\n\n</div>\n</form>\n\n<a href=\"#\" [routerLink]=\"['../clasificatorioopc']\">\n  <img  width=\"30px\" height=\"20px\" src=\"assets/volver.png\" alt='Volver'>\n</a>\n"

/***/ }),

/***/ "./src/app/components/clasificatoriogru/clasificatoriogru.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clasificatoriogru/clasificatoriogru.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClasificatoriogruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasificatoriogruComponent", function() { return ClasificatoriogruComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClasificatoriogruComponent = /** @class */ (function () {
    function ClasificatoriogruComponent(partidosService, equiposService, route, userLoginService, domSanitizer, partidosservice, router) {
        this.partidosService = partidosService;
        this.equiposService = equiposService;
        this.route = route;
        this.userLoginService = userLoginService;
        this.domSanitizer = domSanitizer;
        this.partidosservice = partidosservice;
        this.router = router;
    }
    ClasificatoriogruComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.partidosservice.getpartidosNomFec('GRUPO')
            .subscribe(function (res) {
            _this.fechas = JSON.parse(JSON.stringify(res));
            _this.equiposService.getCanEquipocamTotalCla(_this.fechas[0].campeonatoid)
                .subscribe(function (res) {
                _this.eqclas = res;
                if (_this.eqclas) {
                    _this.CanEq = _this.eqclas.length;
                }
                else {
                    _this.CanEq = 0;
                }
            });
        });
        ;
    };
    ClasificatoriogruComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    ClasificatoriogruComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clasificatoriogru',
            template: __webpack_require__(/*! ./clasificatoriogru.component.html */ "./src/app/components/clasificatoriogru/clasificatoriogru.component.html"),
            styles: [__webpack_require__(/*! ./clasificatoriogru.component.css */ "./src/app/components/clasificatoriogru/clasificatoriogru.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__["EquiposService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClasificatoriogruComponent);
    return ClasificatoriogruComponent;
}()); //ClasificatoriogruComponent



/***/ }),

/***/ "./src/app/components/clasificatorioopc/clasificatorioopc.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/clasificatorioopc/clasificatorioopc.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* TABS VERTICALES ***********************************++++++++++++++++++++++++*****/\r\n* {box-sizing: border-box}\r\nbody {font-family: \"Lato\", sans-serif;}\r\n.tab {\r\n  float: left;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n  width: 30%;\r\n  height: 100%px;\r\n  scroll-behavior: auto;\r\n}\r\n.tabCel {\r\n  float: left;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n  width: 25%;\r\n  height: 100%px;\r\n  scroll-behavior: auto;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  display: block;\r\n  background-color: inherit;\r\n  color: black;\r\n  padding: 22px 16px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tabCel button {\r\n  display: block;\r\n  background-color: inherit;\r\n  color: black;\r\n  padding: 22px 16px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color:  #01DFA5; /*  #CEF6EC;*/\r\n}\r\n/* Create an active/current \"tab button\" class */\r\n.tab button.active {\r\n  background-color:#01DFA5;\r\n}\r\n/* Style the tab content */\r\n.tabcontent {\r\n  float: left;\r\n  padding: 0px 12px;\r\n  /*border: 1px solid #ccc;*/\r\n  width: 65%;\r\n  border-left: none;\r\n  /*height: 300px;*/\r\n}\r\n/**** TAB HORIZONTAL*************************************************************/\r\n/* Style the tab */\r\n.tabh {\r\n  overflow: hidden;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tabh button {\r\n  background-color: inherit;\r\n  float: left;\r\n  /*border: 1px solid #2EFEC8;*/\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n  color: black;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tabh button:hover {\r\n  background-color: #01DFA5\r\n}\r\n/* Create an active/current tablink class */\r\n.tabh button.active {\r\n  background-color:#01DFA5;\r\n}\r\n/* Style the tab content */\r\n.tabcontenth {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  /*border: 1px solid #ccc;*/\r\n  border-top: none;\r\n}\r\n/*----------- SCROLL TABLA -----------*/\r\n.scrolltable{\r\n /* display: block;\r\n  overflow:auto;*/\r\n  height:230px;\r\n}\r\n/*----------- Centrar en pantalla -----------*/\r\n.centrar{\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/clasificatorioopc/clasificatorioopc.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clasificatorioopc/clasificatorioopc.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b>Torneo Clasificatorio</b>\n<br>\n<br>\n<div class=\"tab\">\n  <!--PARA PC-->\n  <div *ngIf = \"pantalla === 640\">\n    <a href=\"#\" [routerLink]=\"['../clasificatoriogru']\">\n      <button class=\"tablinks\">\n        Grupos\n      </button></a>\n    <hr>\n    <a href=\"#\" [routerLink]=\"['../clasificatoriopar/0']\">\n      <button class=\"tablinks\">\n        Partidos\n      </button></a>\n    <hr>\n    \n      <button class=\"tablinks\" (click)=\"fechasCampeonatosLlave($event, 1)\">\n        Copa Revancha\n      </button>\n    <hr>\n    \n      <button class=\"tablinks\" (click)=\"fechasCampeonatosLlave($event, 2)\">\n        Copa de Campeones\n      </button>\n  </div>\n  <!--PARA CEL-->\n  <div *ngIf = \"pantalla === 360\">\n    <a href=\"#\" [routerLink]=\"['../clasificatoriogru']\">\n      <button class=\"tablinks\">\n        Grupos\n      </button>\n    </a>\n    <hr>\n    <a href=\"#\" [routerLink]=\"['../clasificatoriopar/0']\">\n      <button class=\"tablinks\">\n        Partidos\n      </button>\n    </a>\n    <hr>\n      <button class=\"tablinks\" (click)=\"fechasCampeonatosLlave($event, 1)\">\n        Copa Revancha\n      </button>\n    <hr>\n    \n      <button class=\"tablinks\" (click)=\"fechasCampeonatosLlave($event, 2)\">\n        Copa de Campeones\n      </button>\n  </div>\n</div>\n\n\n<!-- <div id=\"DivCon\" class=\"tabcontent\">\n  <div class=\"tabh\">\n    <div *ngFor=\"let cam of campeonatosService.campeonatos; let ind=index\">\n \n      <div *ngIf = \"pantalla === 640\">\n          <button class=\"tablinksh\" (click)=\"fechasCampeonatos($event, cam.campeonatoid, cam.campeonatonom)\" id=cam.campeonatoid>\n            {{cam.campeonatonom}}\n          </button>\n      </div>\n\n      <div *ngIf = \"pantalla === 360\"> \n          <button class=\"tablinksh\" (click)=\"fechasCampeonatos($event, cam.campeonatoid, cam.campeonatonom)\" id=cam.campeonatoid>\n              <font size =1>{{cam.campeonatonom}}</font>\n          </button>\n      </div>\n    </div>\n  </div> -->\n\n    \n  <div id=\"CamCon\" class=\"tabcontenth\">\n    <tr *ngFor=\"let fe of par; let ind=index\" style=\"display:inline-block;\">\n      <img width=\"20\" src=\"assets/cale.jpg\"/>\n      <a href=\"#\" [routerLink]=\"['../fixture', fe.campeonatoid, 0,fe.PartidosNomJug]\">\n        <td style=\"background-color:white\" *ngIf=\"fe.PartidosIng != 1\">{{fe.PartidosNomJug}}</td>\n        <td style=\"background-color:rgb(218, 216, 216)\" *ngIf=\"fe.PartidosIng === 1\">{{fe.PartidosNomJug}}</td>\n      </a>\n      &nbsp;&nbsp;&nbsp;\n    </tr>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/clasificatorioopc/clasificatorioopc.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clasificatorioopc/clasificatorioopc.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClasificatorioopcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasificatorioopcComponent", function() { return ClasificatorioopcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClasificatorioopcComponent = /** @class */ (function () {
    function ClasificatorioopcComponent(domSanitizer, partidosService) {
        this.domSanitizer = domSanitizer;
        this.partidosService = partidosService;
    }
    ClasificatorioopcComponent.prototype.ngOnInit = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    ClasificatorioopcComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    ClasificatorioopcComponent.prototype.fechasCampeonatosLlave = function (evt, copa) {
        var _this = this;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontenth");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById("CamCon").style.display = "block";
        evt.currentTarget.className += " active";
        if (copa === 1) {
            this.CamNom = 'Copa Revancha';
        }
        if (copa === 2) {
            this.CamNom = 'Copa de Campeones';
        }
        this.CamPpal = 'GRUPOS';
        this.partidosService.getpartidosNomFecCla(this.CamPpal, this.CamNom)
            .subscribe(function (res2) {
            _this.par = res2;
        });
    };
    ClasificatorioopcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clasificatorioopc',
            template: __webpack_require__(/*! ./clasificatorioopc.component.html */ "./src/app/components/clasificatorioopc/clasificatorioopc.component.html"),
            styles: [__webpack_require__(/*! ./clasificatorioopc.component.css */ "./src/app/components/clasificatorioopc/clasificatorioopc.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_2__["PartidosService"]])
    ], ClasificatorioopcComponent);
    return ClasificatorioopcComponent;
}());



/***/ }),

/***/ "./src/app/components/clasificatoriopar/clasificatoriopar.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/clasificatoriopar/clasificatoriopar.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tooltip text +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n/* Tooltip arrow */\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n/* Tooltip text +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n/* Alinear equipos +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n.izq{\r\n    text-align:left;\r\n}\r\n.der{\r\n    text-align:right;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/clasificatoriopar/clasificatoriopar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clasificatoriopar/clasificatoriopar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"left\">\n    <h4 *ngIf = \"Fec == 0\">Partidos Clasificatorio</h4><p id=\"cargando\"><b>Cargando...</b></p>\n    <h4 *ngIf = \"Fec == 1\">Partidos Clasificatorio Copa de Plata</h4>\n    <h4 *ngIf = \"Fec == 2\">Partidos Clasificatorio Copa de Oro</h4>\n</div>\n<form #partidoForm=\"ngForm\"> \n<div>\n  <table class=\"table\">\n      <tr >\n          <th width=\"14%\"><b>Fecha</b></th>\n          <th width=\"6%\"><b>Hora</b></th>\n          <th width=\"14%\" *ngIf = \"pantalla === 640\"><b>Complejo</b></th>\n          <th width=\"10%\" *ngIf = \"pantalla === 640\"><b>Cancha</b></th>\n          <th width=\"18%\" class=\"center\"><b>Local</b></th>\n          <th style=\"text-align: left\" width=\"4%\" class=\"center\"><b>Res.1</b></th>\n          <th style=\"text-align: left\" width=\"4%\" class=\"center\"><b>Res.2</b></th>\n          <th width=\"18%\" class=\"center\"><b>Visitante</b></th>\n      </tr>\n\n      <tr *ngFor=\"let partido of par; let ind=index\">\n        <input type=\"hidden\" name=\"PartidosId-{{ind}}\" #_id=\"ngModel\" [(ngModel)]=\"partido.PartidosId\">\n        <input type=\"hidden\" name=\"equipoid1-{{ind}}\" #_id=\"ngModel\" [(ngModel)]=\"partido.equipoid1\">\n        <input type=\"hidden\" name=\"equipoid2-{{ind}}\" #_id=\"ngModel\" [(ngModel)]=\"partido.equipoid2\">\n        <td width=\"14%\"><b>{{partido.PartidosNomCla}}</b>-{{partido.PartidosFec}}</td>\n        <td width=\"6%\">{{ partido.PartidosHor}}</td>\n        <td width=\"14%\" *ngIf = \"pantalla === 640\">{{ partido.PartidosComplejo}}</td>\n        <td width=\"10%\" *ngIf = \"pantalla === 640\">{{ partido.PartidosCan}}</td>\n\n        <td class=\"der\" width=\"18%\">\n          <a href=\"#\" [routerLink]=\"['../equipodatos', partido.equipoid1]\">\n          {{ partido.equiponom1}}\n          &nbsp;\n          <img style=\"vertical-align:middle\" width=\"40\" height=\"40\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + partido.equipoesc1)\">\n          </a>\n        </td>\n\n        <td *ngIf = \"userrol == 1; else ver1\" width=\"4%\"><input type=\"number\" name=\"Res1-{{ind}}\" #name=\"ngModel\" [(ngModel)]=\"partido.Equipo1Res\" placeholder=\"Res. 1\"></td>\n        <td *ngIf = \"userrol == 1; else ver2\" width=\"4%\"><input type=\"number\" name=\"Res2-{{ind}}\" #name=\"ngModel\" [(ngModel)]=\"partido.Equipo2Res\" placeholder=\"Res. 2\"></td>\n\n        <ng-template #ver1>\n          <td class=\"center\" width=\"4%\">{{ partido.Equipo1Res}}</td>\n        </ng-template>\n        <ng-template #ver2>\n          <td class=\"center\" width=\"4%\">{{ partido.Equipo2Res}}</td>\n        </ng-template>\n\n        <td colspan=\"4\" class=\"izq\" width=\"18%\">\n          <a href=\"#\" [routerLink]=\"['../equipodatos', partido.equipoid2]\">\n            <img style=\"vertical-align:middle\" width=\"40\" height=\"40\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + partido.equipoesc2)\">\n            &nbsp; \n            {{ partido.equiponom2}}\n          </a>\n        </td>\n\n        <div class=\"tooltip\" *ngIf = \"userrol == 1\">\n          <td width=\"2%\">\n            <a style=\"cursor:pointer;\" (click)=\"addResPartido(partido, partidoForm)\"><img width=\"25\" alt=\"Editar\" src=\"assets/Agregar.png\"/></a>\n          </td>\n          <span class=\"tooltiptext\">Guardar resultado</span>\n        </div>\n        <div class=\"tooltip\">\n          <td width=\"2%\">\n              <a href=\"#\" [routerLink]=\"['../viewpartido', partido.PartidosId]\"><img width=\"25\" alt=\"Editar\" src=\"assets/DatPar.png\"/></a>\n          </td>\n          <span class=\"tooltiptext\">Datos del partido</span>\n        </div>\n        <div class=\"tooltip\" *ngIf = \"userrol == 1\">\n          <td width=\"2%\">\n              <a href=\"#\" [routerLink]=\"['../partidosfot', partido.campeonatoid, partido.PartidosId]\"><img width=\"45\" alt=\"Editar\" src=\"assets/fotos.jpg\"/></a>\n          </td>\n          <span class=\"tooltiptext\">Subir fotos del partido</span>\n        </div>\n      </tr>\n  </table>\n</div>\n</form>\n\n<br>\n<a href=\"#\" [routerLink]=\"['../../clasificatorioopc']\">\n  <img  width=\"30px\" height=\"20px\" src=\"assets/volver.png\" alt='Volver'>\n</a>"

/***/ }),

/***/ "./src/app/components/clasificatoriopar/clasificatoriopar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clasificatoriopar/clasificatoriopar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClasificatorioparComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasificatorioparComponent", function() { return ClasificatorioparComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClasificatorioparComponent = /** @class */ (function () {
    function ClasificatorioparComponent(partidosService, equiposService, route, userLoginService, domSanitizer, router) {
        this.partidosService = partidosService;
        this.equiposService = equiposService;
        this.route = route;
        this.userLoginService = userLoginService;
        this.domSanitizer = domSanitizer;
        this.router = router;
    }
    ClasificatorioparComponent.prototype.ngOnInit = function () {
        //oculto label cargando...
        //document.getElementById("cargando").style.visibility = "hidden"
        var _this = this;
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.Fec = this.route.snapshot.params.fec;
        this.partidosService.getpartidosNomFec('GRUPO')
            .subscribe(function (res) {
            _this.fechas = JSON.parse(JSON.stringify(res));
            _this.CamId = _this.fechas[0].campeonatoid;
            _this.getpartidosFecCla(_this.CamId, 'GRUPO');
        });
        this.GetUsr();
    };
    ClasificatorioparComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    ClasificatorioparComponent.prototype.getpartidosFecCla = function (Cam, fec) {
        var _this = this;
        document.getElementById("cargando").style.visibility = "visible";
        this.partidosService.getpartidosFecCla(Cam, fec)
            .subscribe(function (res) {
            _this.par = res;
        });
        document.getElementById("cargando").style.visibility = "hidden";
    };
    ClasificatorioparComponent.prototype.addResPartido = function (partido, form) {
        var _this = this;
        //if(confirm('Confirma el ingreso del resultado ' + partido.Equipo1Res + ' a ' + partido.Equipo2Res + ' ?')) {
        partido.equipoesc1 = '';
        partido.equipoesc2 = '';
        this.partidosService.putPartidoRes(partido)
            .subscribe(function (res) {
            _this.resetForm(form);
            M.toast({ html: 'Resultado Ingresado' });
        });
        //}
    };
    ClasificatorioparComponent.prototype.resetForm = function (form) {
        var _this = this;
        if (form) {
            form.reset();
            this.partidosService.getpartidosNomFec('GRUPO')
                .subscribe(function (res) {
                _this.fechas = JSON.parse(JSON.stringify(res));
                _this.CamId = _this.fechas[0].campeonatoid;
                _this.getpartidosFecCla(_this.CamId, 'GRUPO');
            });
            this.GetUsr();
        }
    };
    ClasificatorioparComponent.prototype.GetUsr = function () {
        var usrlog = this.userLoginService.getUserLoggedIn();
        if (usrlog) {
            this.userrol = usrlog.rol;
        }
        ;
    };
    ClasificatorioparComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clasificatoriopar',
            template: __webpack_require__(/*! ./clasificatoriopar.component.html */ "./src/app/components/clasificatoriopar/clasificatoriopar.component.html"),
            styles: [__webpack_require__(/*! ./clasificatoriopar.component.css */ "./src/app/components/clasificatoriopar/clasificatoriopar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__["EquiposService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClasificatorioparComponent);
    return ClasificatorioparComponent;
}()); //ClasificatorioparComponent



/***/ }),

/***/ "./src/app/components/divisionales/divisionales.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/divisionales/divisionales.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/divisionales/divisionales.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/divisionales/divisionales.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n    <b>INGRESO DIVISIONAL</b>\n  </div>\n  <form #divisionalForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n    <tr  colspan=\"2\">\n      <td width = \"10%\">Zona:</td>\n      <td>\n        <div class=\"typeHead\">\n          <input type=\"text\" list=\"zonas\" id=\"zonanom\" name=\"zonanom\" #_id=\"ngModel\" [(ngModel)]='divisionalesService.selectedDivisional.zonanom' placeholder=\"Zonas\"/>\n          <datalist id=\"zonas\">\n              <select>\n                <option *ngFor='let zona of zonasService.zonas' id={{zona.zonaid}} value={{zona.zonanom}}></option>\n              </select>\n          </datalist>\n        </div>\n      </td>\n    </tr>    \n    <tr  colspan=\"2\">\n      <td width = \"10%\">Modalidad:</td>\n      <td>\n       <div class=\"typeHead\">\n        <input type=\"text\" list=\"modalidades\" id=\"modalidadnom\" name=\"modalidadnom\" [(ngModel)]='divisionalesService.selectedDivisional.modalidadnom' placeholder=\"Modalidades\"/>\n        <datalist id=\"modalidades\">\n            <select>\n              <option *ngFor=\"let modalidad of modalidadesService.modalidad\" id={{modalidad.modalidadid}} value={{modalidad.modalidadnom}}></option>\n            </select>\n        </datalist>\n       </div>\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"10%\">Nombre:</td>\n      <td>\n        <input type=\"hidden\" name=\"divisionalid\" #_id=\"ngModel\" [(ngModel)]=\"divisionalesService.selectedDivisional.divisionalid\"> \n        <input type=\"text\" name=\"divisionalnom\" #name=\"ngModel\" [(ngModel)]=\"divisionalesService.selectedDivisional.divisionalnom\" placeholder=\"Divisional\">\n      </td>\n    </tr>\n    <tr >\n      <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(divisionalForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addDivisional(divisionalForm)\">Guardar</button>\n      </td>\n    </tr>\n  </table>\n</form>\n<table style=\"width:100%\"> \n  <tr>\n    <th colspan=\"3\">Listado Divisionales</th>\n  </tr>\n  <tr>\n    <td colspan=\"3\"><i>Nombre</i></td>\n  </tr>\n  <tr *ngFor=\"let divisional of divisionalesService.divisional\">\n    <td colspan=\"2\">{{ divisional.divisionalnom }}</td>\n    <td>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"editDivisional(divisional)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/> \n      </a>\n      <span class=\"tooltiptext\">Editar divisional</span>\n      </div>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"deleteDivisional(divisional.divisionalid, divisionalForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Borrar divisional</span>\n      </div>\n    </td>\n  </tr>\n</table>\n</div>  \n"

/***/ }),

/***/ "./src/app/components/divisionales/divisionales.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/divisionales/divisionales.component.ts ***!
  \*******************************************************************/
/*! exports provided: DivisionalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionalesComponent", function() { return DivisionalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_divisionales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/divisionales.service */ "./src/app/services/divisionales.service.ts");
/* harmony import */ var _services_modalidad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modalidad.service */ "./src/app/services/modalidad.service.ts");
/* harmony import */ var _services_zonas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/zonas.service */ "./src/app/services/zonas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DivisionalesComponent = /** @class */ (function () {
    function DivisionalesComponent(divisionalesService, modalidadesService, zonasService) {
        this.divisionalesService = divisionalesService;
        this.modalidadesService = modalidadesService;
        this.zonasService = zonasService;
    }
    DivisionalesComponent.prototype.ngOnInit = function () {
        this.getDivisional();
        this.getModalidad();
        this.getZona();
    };
    DivisionalesComponent.prototype.addDivisional = function (form) {
        var _this = this;
        var zonaid = document.querySelector("#zonas option[value='" + form.value.zonanom + "']").id;
        form.value.zonaid = zonaid;
        var modalidadid = document.querySelector("#modalidades option[value='" + form.value.modalidadnom + "']").id;
        form.value.modalidadid = modalidadid;
        if (form.value.divisionalid) {
            this.divisionalesService.putDivisional(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Divisional Editada' });
            });
        }
        else {
            this.divisionalesService.postDivisional(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Divisional Ingresada' });
            });
        }
        ;
    };
    DivisionalesComponent.prototype.getModalidad = function () {
        var _this = this;
        this.modalidadesService.getModalidad()
            .subscribe(function (res) {
            _this.modalidadesService.modalidad = res;
        });
    };
    DivisionalesComponent.prototype.getZona = function () {
        var _this = this;
        this.zonasService.getZona()
            .subscribe(function (res) {
            _this.zonasService.zonas = res;
        });
    };
    DivisionalesComponent.prototype.getDivisional = function () {
        var _this = this;
        this.divisionalesService.getDivisional()
            .subscribe(function (res) {
            _this.divisionalesService.divisional = res;
        });
    };
    DivisionalesComponent.prototype.editDivisional = function (divisional) {
        this.divisionalesService.selectedDivisional = divisional;
    };
    DivisionalesComponent.prototype.deleteDivisional = function (divisionalid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar la Divisional?')) {
            this.divisionalesService.deleteDivisional(divisionalid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Divisional Borrada' });
            });
        }
    };
    DivisionalesComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getDivisional();
            this.getModalidad();
            this.getZona();
        }
    };
    DivisionalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-divisional',
            template: __webpack_require__(/*! ./divisionales.component.html */ "./src/app/components/divisionales/divisionales.component.html"),
            styles: [__webpack_require__(/*! ./divisionales.component.css */ "./src/app/components/divisionales/divisionales.component.css")],
            providers: [_services_divisionales_service__WEBPACK_IMPORTED_MODULE_1__["DivisionalesService"], _services_modalidad_service__WEBPACK_IMPORTED_MODULE_2__["ModalidadesService"], _services_zonas_service__WEBPACK_IMPORTED_MODULE_3__["ZonasService"]]
        }),
        __metadata("design:paramtypes", [_services_divisionales_service__WEBPACK_IMPORTED_MODULE_1__["DivisionalesService"],
            _services_modalidad_service__WEBPACK_IMPORTED_MODULE_2__["ModalidadesService"],
            _services_zonas_service__WEBPACK_IMPORTED_MODULE_3__["ZonasService"]])
    ], DivisionalesComponent);
    return DivisionalesComponent;
}());



/***/ }),

/***/ "./src/app/components/equipodatos/equipodatos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/equipodatos/equipodatos.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*TEXTO DEBAJO DE IMAGEN*/\r\np.blocktext {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 80%;\r\n  text-align:center;\r\n}\r\np.blocktextsus {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 80%;\r\n  text-align:center;\r\n  color: red;\r\n}\r\n.aligncenter {\r\n  text-align: center;\r\n}\r\n/*TABS DE DATOS Y JUGADORES*/\r\n*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}\r\nhtml,\r\nbody{height:100vh;}\r\nbody{display:flex;align-items:center;\r\n  justify-content:center;padding:40px;font:14px/1.5 'Open Sans',\r\n  sans-serif;color:#345;background:#f0f2f4;}\r\np:not(:last-child) {\r\n  margin: 0 0 20px;\r\n}\r\nmain {\r\n  max-width: 800px;\r\n  padding: 40px;\r\n  border: 1px solid rgba(0,0,0,.2);\r\n  background: #fff;\r\n  box-shadow: 0 1px 3px rgba(0,0,0,.1);\r\n  color: white;\r\n}\r\nsection {\r\n  display: none;\r\n  padding: 20px 0 0;\r\n  /*border-top: 1px solid #abc;*/\r\n}\r\ninput {\r\n  display: none;\r\n}\r\nlabel {\r\n  display: inline-block;\r\n  margin: 0 0 -1px;\r\n  padding: 15px 25px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  color: black;\r\n  border: 1px solid transparent;\r\n  background-color:white;\r\n}\r\nlabel:before {\r\n  font-family: fontawesome;\r\n  font-weight: normal;\r\n  margin-right: 10px;\r\n}\r\nlabel:hover {\r\n  color:black;\r\n  cursor: pointer;\r\n  background-color:#01DFA5;\r\n}\r\ninput:checked + label {\r\n  color:black;\r\n  border: 1px solid #abc;\r\n  border-top: 2px solid #64FE2E;\r\n  border-bottom: 1px solid #fff;\r\n  font-size: 16px;\r\n}\r\n#tab1:checked ~ #content1,\r\n#tab2:checked ~ #content2,\r\n#tab3:checked ~ #content3,\r\n#tab4:checked ~ #content4 {\r\n  display: block;\r\n}\r\n@media screen and (max-width: 800px) {\r\n  label {\r\n    font-size: 8px;\r\n  }\r\n  label:before {\r\n    margin: 0;\r\n    font-size: 18px;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  label {\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/equipodatos/equipodatos.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/equipodatos/equipodatos.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Nombre y foto del equipo-->\n<table>\n  <tr>\n    <td bgcolor=\"white\" width=\"20%\" >\n      <p class=\"aligncenter\">\n      <img style=\"vertical-align:middle\" width=\"180\" height=\"190\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + EqEsc)\">\n      </p>\n    </td>\n    <td bgcolor=\"white\" width=\"40%\" >\n      <b><font color=\"black\" size=10>{{EqNom}}</font></b>\n    </td>\n    <td width=\"40%\" *ngIf = \"pantalla === 640\"> \n      <img style=\"display: block\" width=\"100%\" vspace=\"0\" height=\"350\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + EqFot)\">\n    </td>\n  </tr>\n</table>\n\n<!--Datos generales y jugadores, tabs-->\n<input id=\"tab1\" type=\"radio\" name=\"tabs\" checked>\n<label for=\"tab1\">General</label>\n&nbsp;\n<input id=\"tab2\" type=\"radio\" name=\"tabs\">\n<label for=\"tab2\">Jugadores</label>\n&nbsp;\n<input id=\"tab3\" type=\"radio\" name=\"tabs\">\n<label for=\"tab3\">Suspeciones</label>\n\n<section id=\"content1\">\n  <ul>\n    <tr>\n      <td>Fecha de inscripción:</td><td>&nbsp; &nbsp; {{EqFecIns}}</td>\n    </tr>  \n    <br>\n    <tr>\n      <td>Jugadores inscriptos:</td><td>&nbsp; &nbsp; {{CanJug}}</td>\n    </tr>\n    <br>\n    <tr>\n      <td>Partidos jugados:</td><td>&nbsp; &nbsp; {{CanPar2}}</td>\n    </tr>\n    <br>\n    <tr>\n      <td>Amarillas:</td><td>&nbsp; &nbsp; {{CanAma}}</td>\n    </tr>\n    <br>\n    <tr>\n      <td>Rojas:</td><td>&nbsp; &nbsp; {{CanRoj}}</td>\n    </tr>\n    <!-- <br>\n    <tr>\n      <td>Detalles:</td><td>&nbsp; &nbsp; {{EqObs}}</td>\n    </tr> -->\n  </ul>\n</section>\n\n<section id=\"content2\">\n  <div style=\"display: inline;\" class=\"container\" *ngFor=\"let jug of jugadoresService.jugador; let ind=index\" >\n    <td >\n      <a href=\"#\" [routerLink]=\"['../../jugadordatos', jug.jugadorid]\">\n        <img width=\"250\" height=\"250\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + jug.jugadorfot)\">\n      </a>\n      <br>\n      <a href=\"#\" [routerLink]=\"['../../jugadordatos', jug.jugadorid]\">\n        <p class=\"blocktext\" *ngIf = \"jug.jugadorestado === 'Activo'\">{{jug.jugadornom}}</p>\n        <p class=\"blocktextsus\" *ngIf = \"jug.jugadorestado === 'Suspendido'\">{{jug.jugadornom}}</p>\n      </a>\n    </td> &nbsp;\n  </div>\n  <br><br>\n  <p style=\"font-size: 12px;color: red\">* Jugadores suspendidos</p>\n</section>\n\n<section id=\"content3\">\n  <div style=\"display: inline;\" class=\"container\">\n    <br>\n    <textarea rows=\"15\" readonly style=\"border: 0cm\">\n      {{EqObs}}\n    </textarea>\n    <br>\n  </div>\n</section>\n\n\n\n\n\n<!--Noticias-->\n<br><br>\n\n<table  style=\"max-width:100%;width:auto;height:auto;\">\n<td width = \"20%\" style=\"vertical-align:top; text-align: center;\">\n\n  <div align=\"left\">\n  <img src=\"../../../assets/CabNoticiasEq.jpg\" alt=\"Noticias\" style=\"max-width:30%;width:auto;height:auto;\"/>\n  </div>\n  <br>\n  <div style=\"height:300px; overflow:auto; max-width:100%;width:auto;height:auto;\">\n  <li *ngFor=\"let noticia of noticiasService.noticias\">\n    <a href=\"#\"  [routerLink]=\"['../../viewnoticia', noticia.noticiasid]\">\n      {{ noticia.noticiascab }}\n    </a>\n    <br>\n    <hr/>\n    <br>\n  </li>\n  </div>\n</td>\n</table>\n<br>\n<a href=\"#\" [routerLink]=\"['../../viewequipos']\">\n  <img  width=\"30px\" height=\"20px\" src=\"assets/volver.png\" alt='Volver'>\n</a>\n\n"

/***/ }),

/***/ "./src/app/components/equipodatos/equipodatos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/equipodatos/equipodatos.component.ts ***!
  \*****************************************************************/
/*! exports provided: EquipodatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipodatosComponent", function() { return EquipodatosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_jugadores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jugadores.service */ "./src/app/services/jugadores.service.ts");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/noticias.service */ "./src/app/services/noticias.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/jupars.service */ "./src/app/services/jupars.service.ts");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EquipodatosComponent = /** @class */ (function () {
    function EquipodatosComponent(equiposService, noticiasService, jugadoresService, juparsService, partidosService, domSanitizer, route, router) {
        this.equiposService = equiposService;
        this.noticiasService = noticiasService;
        this.jugadoresService = jugadoresService;
        this.juparsService = juparsService;
        this.partidosService = partidosService;
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.router = router;
    }
    EquipodatosComponent.prototype.ngOnInit = function () {
        this.EqId = this.route.snapshot.params.eq;
        this.getEquipo();
        this.getJugador();
        this.getNoticia();
        this.getCanJug(this.EqId);
        this.getRojAma(this.EqId);
        //Tamaño texto tabs segun la pantalla
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    EquipodatosComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    EquipodatosComponent.prototype.getEquipo = function () {
        var _this = this;
        if (isNaN(this.EqId)) {
            var error = 1;
        }
        else {
            this.equiposService.getEquipoid(this.EqId)
                .subscribe(function (res) {
                _this.equiposService.equipo = res;
                _this.EqNom = _this.equiposService.equipo[0].equiponom;
                _this.EqFot = _this.equiposService.equipo[0].equipofot;
                _this.EqEsc = _this.equiposService.equipo[0].equipoesc;
                _this.EqCanJug = _this.equiposService.equipo[0].equipocanjug;
                _this.EqFecIns = _this.equiposService.equipo[0].equipofecins;
                _this.EqObs = _this.equiposService.equipo[0].equipoobs;
                _this.partidosService.getpartidosequipo(_this.EqId)
                    .subscribe(function (resp) {
                    _this.CanPar = resp;
                    if (_this.CanPar != null) {
                        _this.CanPar2 = _this.CanPar.length;
                    }
                });
            });
        }
    };
    EquipodatosComponent.prototype.getJugador = function () {
        var _this = this;
        this.jugadoresService.getJugadorEncargado(this.EqId) //consulto solo los jugadores de ese equipo
            .subscribe(function (res) {
            _this.jugadoresService.jugador = res;
        });
    };
    EquipodatosComponent.prototype.getCanJug = function (equipoid) {
        var _this = this;
        this.jugadoresService.getJugadorEncargado(equipoid)
            .subscribe(function (res) {
            _this.jugadoresService.jugador = res;
            _this.CanJug = 0;
            for (var jug in _this.jugadoresService.jugador)
                _this.CanJug = _this.CanJug + 1;
        });
    };
    ;
    EquipodatosComponent.prototype.getRojAma = function (eq) {
        var _this = this;
        this.juparsService.getJugAmaRoj(eq)
            .subscribe(function (res) {
            _this.CanAma = res[0].jugadorama;
            if (isNaN(parseInt(res[0].jugadorroj))) {
                _this.CanRoj = 0;
            }
            else {
                _this.CanRoj = res[0].jugadorroj;
            }
        });
    };
    EquipodatosComponent.prototype.getNoticia = function () {
        var _this = this;
        this.noticiasService.getNoticiaEq(this.EqId)
            .subscribe(function (res) {
            _this.noticiasService.noticias = res;
        });
    };
    EquipodatosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipodatos',
            template: __webpack_require__(/*! ./equipodatos.component.html */ "./src/app/components/equipodatos/equipodatos.component.html"),
            styles: [__webpack_require__(/*! ./equipodatos.component.css */ "./src/app/components/equipodatos/equipodatos.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_5__["EquiposService"], _services_noticias_service__WEBPACK_IMPORTED_MODULE_4__["NoticiasService"], _services_jugadores_service__WEBPACK_IMPORTED_MODULE_3__["JugadoresService"], src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_6__["JuparsService"], src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_7__["PartidosService"]]
        }),
        __metadata("design:paramtypes", [_services_equipos_service__WEBPACK_IMPORTED_MODULE_5__["EquiposService"],
            _services_noticias_service__WEBPACK_IMPORTED_MODULE_4__["NoticiasService"],
            _services_jugadores_service__WEBPACK_IMPORTED_MODULE_3__["JugadoresService"],
            src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_6__["JuparsService"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_7__["PartidosService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EquipodatosComponent);
    return EquipodatosComponent;
}());

;


/***/ }),

/***/ "./src/app/components/equipos/equipos.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/equipos/equipos.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tooltip text +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n/* Tooltip arrow */\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n/* Tooltip text +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/"

/***/ }),

/***/ "./src/app/components/equipos/equipos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/equipos/equipos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n    <b>INGRESO EQUIPO</b>\n  </div>\n  <form #equipoForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n    <tr  colspan=\"5\" >\n      <td width = \"30%\"><font color=\"red\">*</font> Nombre:</td>\n      <td>\n        <input type=\"hidden\" name=\"equipoid\" #_id=\"ngModel\" [(ngModel)]=\"equiposService.selectedEquipo.equipoid\"> \n        <input type=\"text\" name=\"equiponom\" #name=\"ngModel\" [(ngModel)]=\"equiposService.selectedEquipo.equiponom\" placeholder=\"Nombre\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Estado:</td>\n      <td>\n          <input type=\"text\" list=\"estados\" name=\"equipoest\" id = \"equipoest\" readonly value=\"Activo\" #name=\"ngModel\" [(ngModel)]=\"equiposService.selectedEquipo.equipoest\" placeholder=\"Estado\">\n          <datalist id=\"estados\">\n            <option id=\"Activo\" value=\"Activo\"> \n            <option id=\"Inactivo\" value=\"Inactivo\">\n          </datalist> \n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Observaciones:</td>\n      <td>\n         <input type=\"text\" name=\"equipoobs\" #name=\"ngModel\" [(ngModel)]=\"equiposService.selectedEquipo.equipoobs\" placeholder=\"Observaciónes\">\n      </td>\n    </tr> \n    <tr  colspan=\"2\" > \n      <td width = \"30%\">Foto:</td>\n      <td>\n        <input type=\"file\" id=\"equipofot\" name=\"equipofot\" placeholder=\"Foto\" (change)=\"FotoEq($event)\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" > \n      <td width = \"30%\">Escudo:</td>\n      <td>\n        <input type=\"file\" id=\"equipoesc\" name=\"equipoesc\" placeholder=\"Escudo\" (change)=\"EscudoEq($event)\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Cantidad de jugadores:</td>\n     <td>\n        <input type=\"text\" readonly name=\"equipocanjug\" #name=\"ngModel\" [(ngModel)]=\"CanJug\" placeholder=\"Jugadores\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Telefono de contácto:</td>\n      <td>\n        <input type=\"text\" name=\"equipotelcon\" #name=\"ngModel\" [(ngModel)]=\"equiposService.selectedEquipo.equipotelcon\" placeholder=\"Teléfono\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\"><font color=\"red\">*</font>eMail de contacto:</td>\n      <td>\n        <input type=\"text\" name=\"equipomailcon\" #name=\"ngModel\" [(ngModel)]=\"equiposService.selectedEquipo.equipomailcon\" placeholder=\"eMail\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Fecha de inscripción:</td>\n      <td>\n        <input type=\"date\" name=\"equipofecins\" #name=\"ngModel\" [(ngModel)]=\"equiposService.selectedEquipo.equipofecins\" placeholder=\"Inscripción\">\n      </td>\n    </tr>\n    <tr>\n      <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(equipoForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addEquipo(equipoForm)\">Guardar</button>\n      </td>\n    </tr>\n  </table>\n</form>\n<table style=\"width:100%\" id=\"TEqu\"> \n  <tr>\n    <th colspan=\"5\">Listado Equipos</th>\n  </tr>\n\n  <tr>\n    <th colspan=\"1\">Filtro por Nombre</th>\n    <th colspan=\"3\"><input type=\"text\" id=\"BEqu\" (keyup)=\"Buscar()\" placeholder=\"Nombre\"></th>\n  </tr>\n\n  <tr>\n    <th><i>Nombre</i></th>\n    <th><i>eMail</i></th>\n    <th colspan=\"5\"><i>Estado</i></th>\n  </tr>\n  <tr *ngFor=\"let equipo of equiposService.equipo\">\n    <td >{{ equipo.equiponom }}</td>\n    <td >{{ equipo.equipomailcon }}</td>\n    <td>{{ equipo.equipoest }}</td>\n    <td>\n      <a style=\"cursor:pointer;\" (click)=\"editEquipo(equipo)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/>\n      </a>\n      <a style=\"cursor:pointer;\" (click)=\"deleteEquipo(equipo.equipoid, equipoForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n    </td>\n  </tr>\n</table>\n</div> \n\n"

/***/ }),

/***/ "./src/app/components/equipos/equipos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/equipos/equipos.component.ts ***!
  \*********************************************************/
/*! exports provided: EquipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoComponent", function() { return EquipoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var _services_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jugadores.service */ "./src/app/services/jugadores.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipoComponent = /** @class */ (function () {
    function EquipoComponent(equiposService, jugadoresService) {
        this.equiposService = equiposService;
        this.jugadoresService = jugadoresService;
    }
    EquipoComponent.prototype.ngOnInit = function () {
        this.fecins();
        this.getEquipo();
        this.equiposService.selectedEquipo.equipoest = "Activo";
    };
    EquipoComponent.prototype.ngAfterViewChecked = function () {
        //this.equiposService.selectedEquipo.equipoest = "Activo";
    };
    //Cargo fecha de hoy al ingresar a la pagina en fecha de inscripcion
    EquipoComponent.prototype.fecins = function () {
        var d = new Date().toISOString().split('T')[0];
        this.equiposService.selectedEquipo.equipofecins = d;
    };
    EquipoComponent.prototype.getEquipo = function () {
        var _this = this;
        this.equiposService.getEquipoPpal()
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
    };
    //Guardo o edito datos del equipo
    EquipoComponent.prototype.addEquipo = function (form) {
        var _this = this;
        var est = document.querySelector("#estados option[value='" + form.value.equipoest + "']").id;
        form.value.equipoest = est;
        if (form.value.equiponom && form.value.equipomailcon && form.value.equipoest) {
            form.value.equipocanjug = 0;
            if (form.value.equipoid) {
                form.value.equipofot = this.fotoeq;
                form.value.equipoesc = this.escudoeq;
                this.equiposService.putEquipo(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Equipo Editado' });
                });
            }
            else {
                form.value.equipofot = this.fotoeq;
                form.value.equipoesc = this.escudoeq;
                this.equiposService.postEquipo(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Equipo Ingresado' });
                });
            }
            ;
            document.getElementById("equipoest").removeAttribute("readonly");
            this.equiposService.selectedEquipo.equipoest = "Activo";
            document.getElementById("equipoest").setAttribute("readonly", "TRUE");
        }
        else {
            alert('Debe ingresar Nombre, estado y eMail de contacto');
        }
        ;
    };
    //Guardo la imagen seleccionada
    EquipoComponent.prototype.FotoEq = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
            _this.fotoeq = reader.result;
            _this.fotoeq = _this.fotoeq.split(',')[1];
        };
    };
    //Guardo la imagen seleccionada
    EquipoComponent.prototype.EscudoEq = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
            _this.escudoeq = reader.result;
            _this.escudoeq = _this.escudoeq.split(',')[1];
        };
    };
    EquipoComponent.prototype.getCanJug = function (equipoid) {
        var _this = this;
        this.jugadoresService.getJugadorEncargado(equipoid)
            .subscribe(function (res) {
            _this.jugadoresService.jugador = res;
            _this.CanJug = 0;
            for (var jug in _this.jugadoresService.jugador)
                _this.CanJug = _this.CanJug + 1;
        });
    };
    ;
    EquipoComponent.prototype.Buscar = function () {
        // Declare variables 
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("BEqu");
        filter = input.value.toUpperCase();
        table = document.getElementById("TEqu");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query #F5A9A9
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    EquipoComponent.prototype.editEquipo = function (equipo) {
        this.getCanJug(equipo.equipoid);
        this.equiposService.selectedEquipo = equipo;
        document.getElementById("equipoest").removeAttribute("readonly");
    };
    EquipoComponent.prototype.deleteEquipo = function (equipoid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar la Equipo?')) {
            this.equiposService.deleteEquipo(equipoid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Equipo Borrado' });
            });
            this.equiposService.selectedEquipo.equipoest = "Activo";
        }
    };
    EquipoComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            //document.getElementById("equipoest").setAttribute("readonly", "false");
            this.equiposService.selectedEquipo.equipoest = "Activo";
            this.getEquipo();
        }
    };
    EquipoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipo',
            template: __webpack_require__(/*! ./equipos.component.html */ "./src/app/components/equipos/equipos.component.html"),
            styles: [__webpack_require__(/*! ./equipos.component.css */ "./src/app/components/equipos/equipos.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_1__["EquiposService"], _services_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"]]
        }),
        __metadata("design:paramtypes", [_services_equipos_service__WEBPACK_IMPORTED_MODULE_1__["EquiposService"],
            _services_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"]])
    ], EquipoComponent);
    return EquipoComponent;
}());



/***/ }),

/***/ "./src/app/components/fixture/fixture.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/fixture/fixture.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Tooltip text +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n/* Tooltip arrow */\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n/* Tooltip text +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n/* Alinear equipos +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\r\n.izq{\r\n    text-align:left;\r\n}\r\n.der{\r\n    text-align:right;\r\n}"

/***/ }),

/***/ "./src/app/components/fixture/fixture.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/fixture/fixture.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"pantalla === 640\" align=\"left\">\n    <h4>Fixture - {{DivNombre}} - {{CamNombre}} - Fecha {{Fec}}</h4>\n</div>\n<div *ngIf = \"pantalla === 360\" align=\"left\">\n  <h4><font size=\"1\">Fixture - {{DivNombre}} - {{CamNombre}} - Fecha {{Fec}}</font></h4>\n</div>\n<form #partidoForm=\"ngForm\"> \n<div>\n  <table class=\"table\">\n      <tr >\n          <td width=\"8%\"><b>Fecha</b></td>\n          <td width=\"6%\"><b>Hora</b></td>\n          <td width=\"14%\" *ngIf = \"pantalla === 640\"><b>Complejo</b></td>\n          <td width=\"16%\" *ngIf = \"pantalla === 640\"><b>Cancha</b></td>\n          <td width=\"18%\" class=\"center\"><b>Local</b></td>\n          <td style=\"text-align: left\" width=\"4%\" class=\"center\"><b>Res.1</b></td>\n          <td style=\"text-align: left\" width=\"4%\" class=\"center\"><b>Res.2</b></td>\n          <td width=\"18%\" class=\"center\"><b>Visitante</b></td>\n      </tr>\n\n      <tr *ngFor=\"let partido of par; let ind=index\">\n        <input type=\"hidden\" name=\"PartidosId-{{ind}}\" #_id=\"ngModel\" [(ngModel)]=\"partido.PartidosId\">\n        <input type=\"hidden\" name=\"equipoid1-{{ind}}\" #_id=\"ngModel\" [(ngModel)]=\"partido.equipoid1\">\n        <input type=\"hidden\" name=\"equipoid2-{{ind}}\" #_id=\"ngModel\" [(ngModel)]=\"partido.equipoid2\">\n        <td width=\"8%\">{{ partido.PartidosFec}}</td>\n        <td width=\"6%\">{{ partido.PartidosHor}}</td>\n        <td width=\"14%\" *ngIf = \"pantalla === 640\">{{ partido.PartidosComplejo}}</td>\n        <td width=\"16%\" *ngIf = \"pantalla === 640\">{{ partido.PartidosCan}}</td>\n\n        <td class=\"der\" width=\"18%\">\n          <a href=\"#\" [routerLink]=\"['../../../../equipodatos', partido.equipoid1]\">\n          {{ partido.equiponom1}}\n          &nbsp;\n          <img style=\"vertical-align:middle\" width=\"40\" height=\"40\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + partido.equipoesc1)\">\n          </a>\n        </td>\n\n        <td *ngIf = \"userrol == 1; else ver1\" width=\"4%\"><input type=\"number\" name=\"Res1-{{ind}}\" #name=\"ngModel\" [(ngModel)]=\"partido.Equipo1Res\" placeholder=\"Res. 1\"></td>\n        <td *ngIf = \"userrol == 1; else ver2\" width=\"4%\"><input type=\"number\" name=\"Res2-{{ind}}\" #name=\"ngModel\" [(ngModel)]=\"partido.Equipo2Res\" placeholder=\"Res. 2\"></td>\n\n        <ng-template #ver1>\n          <td class=\"center\" width=\"4%\">{{ partido.Equipo1Res}}</td>\n        </ng-template>\n        <ng-template #ver2>\n          <td class=\"center\" width=\"4%\">{{ partido.Equipo2Res}}</td>\n        </ng-template>\n\n        <td colspan=\"4\" class=\"izq\" width=\"18%\">\n          <a href=\"#\" [routerLink]=\"['../../../../equipodatos', partido.equipoid2]\">\n          <img style=\"vertical-align:middle\" width=\"40\" height=\"40\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + partido.equipoesc2)\">\n          &nbsp;\n          {{ partido.equiponom2}}\n          </a>\n        </td>\n\n        <div class=\"tooltip\" *ngIf = \"userrol == 1\">\n          <td width=\"2%\">\n            <a style=\"cursor:pointer;\" (click)=\"addResPartido(partido, partidoForm)\"><img width=\"25\" alt=\"Editar\" src=\"assets/Agregar.png\"/></a>\n          </td>\n          <span class=\"tooltiptext\">Guardar resultado</span>\n        </div>\n        <div class=\"tooltip\">\n          <td width=\"2%\">\n              <a href=\"#\" [routerLink]=\"['../../../../viewpartido', partido.PartidosId]\"><img width=\"25\" alt=\"Editar\" src=\"assets/DatPar.png\"/></a>\n          </td>\n          <span class=\"tooltiptext\">Datos del partido</span>\n        </div>\n        <div class=\"tooltip\" *ngIf = \"userrol == 1\">\n          <td width=\"2%\">\n              <a href=\"#\" [routerLink]=\"['../../../../partidosfot', partido.campeonatoid, partido.PartidosId]\"><img width=\"45\" alt=\"Editar\" src=\"assets/fotos.jpg\"/></a>\n          </td>\n          <span class=\"tooltiptext\">Subir fotos del partido</span>\n        </div>\n      </tr>\n  </table>\n</div>\n</form>\n\n<br>\n<a href=\"#\" [routerLink]=\"['../../../../galeriafotcam', CamId]\"><font size=\"6\">Galeria de fotos</font>&nbsp;<img width=\"50\" alt=\"Galeria\" src=\"assets/GalFot.png\"/></a>\n<br><br>\n<a href=\"#\" [routerLink]=\"['../../../../fixtureopci']\">\n  <img  width=\"30px\" height=\"20px\" src=\"assets/volver.png\" alt='Volver'>\n</a>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/fixture/fixture.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/fixture/fixture.component.ts ***!
  \*********************************************************/
/*! exports provided: FixtureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixtureComponent", function() { return FixtureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/Campeonatos.service */ "./src/app/services/Campeonatos.service.ts");
/* harmony import */ var _services_divisionales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/divisionales.service */ "./src/app/services/divisionales.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FixtureComponent = /** @class */ (function () {
    function FixtureComponent(partidosService, campeonatosService, divisionalesService, equiposService, route, userLoginService, domSanitizer, router) {
        this.partidosService = partidosService;
        this.campeonatosService = campeonatosService;
        this.divisionalesService = divisionalesService;
        this.equiposService = equiposService;
        this.route = route;
        this.userLoginService = userLoginService;
        this.domSanitizer = domSanitizer;
        this.router = router;
    }
    FixtureComponent.prototype.ngOnInit = function () {
        //oculto label cargando...
        //document.getElementById("cargando").style.visibility = "hidden"
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.CamId = this.route.snapshot.params.cam;
        this.Fec = this.route.snapshot.params.fec;
        this.Nom = this.route.snapshot.params.nom;
        this.getpartidosCamFec();
        this.getCampeonato();
        this.GetUsr();
    };
    FixtureComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    FixtureComponent.prototype.getpartidosCamFec = function () {
        var _this = this;
        //document.getElementById("cargando").style.visibility = "visible"
        if (this.Fec == 0) {
            this.partidosService.getpartidosFecCla(this.CamId, this.Nom)
                .subscribe(function (res) {
                _this.par = res;
            });
        }
        else {
            this.partidosService.getpartidosFec(this.CamId, this.Fec)
                .subscribe(function (res) {
                _this.par = res;
            });
        }
        //document.getElementById("cargando").style.visibility = "hidden"
    };
    FixtureComponent.prototype.getCampeonato = function () {
        var _this = this;
        this.campeonatosService.getCampeonatonom(this.CamId)
            .subscribe(function (res) {
            var camnom = res;
            _this.CamNombre = camnom[0].campeonatonom;
            _this.divisionalesService.getDivisional()
                .subscribe(function (res) {
                var divi = res;
                _this.DivNombre = divi[0].divisionalnom;
            });
        });
    };
    ;
    FixtureComponent.prototype.addResPartido = function (partido, form) {
        var _this = this;
        //if(confirm('Confirma el ingreso del resultado ' + partido.Equipo1Res + ' a ' + partido.Equipo2Res + ' ?')) {
        partido.equipoesc1 = '';
        partido.equipoesc2 = '';
        this.partidosService.putPartidoRes(partido)
            .subscribe(function (res) {
            _this.resetForm(form);
            M.toast({ html: 'Resultado Ingresado' });
        });
        //}
    };
    FixtureComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getpartidosCamFec();
            this.GetUsr();
        }
    };
    FixtureComponent.prototype.GetUsr = function () {
        var usrlog = this.userLoginService.getUserLoggedIn();
        if (usrlog) {
            this.userrol = usrlog.rol;
        }
        ;
    };
    FixtureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-fixture',
            template: __webpack_require__(/*! ./fixture.component.html */ "./src/app/components/fixture/fixture.component.html"),
            styles: [__webpack_require__(/*! ./fixture.component.css */ "./src/app/components/fixture/fixture.component.css")],
            providers: [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"], src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_6__["CampeonatosService"], _services_divisionales_service__WEBPACK_IMPORTED_MODULE_7__["DivisionalesService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"],
            src_app_services_Campeonatos_service__WEBPACK_IMPORTED_MODULE_6__["CampeonatosService"],
            _services_divisionales_service__WEBPACK_IMPORTED_MODULE_7__["DivisionalesService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__["EquiposService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FixtureComponent);
    return FixtureComponent;
}()); //FixtureComponent



/***/ }),

/***/ "./src/app/components/fixtureopci/fixtureopci.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/fixtureopci/fixtureopci.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* TABS VERTICALES ***********************************++++++++++++++++++++++++*****/\r\n* {box-sizing: border-box}\r\nbody {font-family: \"Lato\", sans-serif;}\r\n.tab {\r\n  float: left;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n  width: 30%;\r\n  height: 100%;\r\n  scroll-behavior: auto;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  display: block;\r\n  background-color: inherit;\r\n  color: black;\r\n  padding: 22px 16px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color:  #01DFA5; /*  #CEF6EC;*/\r\n}\r\n/* Create an active/current \"tab button\" class */\r\n.tab button.active {\r\n  background-color:#01DFA5;\r\n}\r\n/* Style the tab content */\r\n.tabcontent {\r\n  float: left;\r\n  padding: 0px 12px;\r\n  /*border: 1px solid #ccc;*/\r\n  width: 70%;\r\n  border-left: none;\r\n  /*height: 300px;*/\r\n}\r\n/**** TAB HORIZONTAL*************************************************************/\r\n/* Style the tab */\r\n.tabh {\r\n  overflow: hidden;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tabh button {\r\n  background-color: inherit;\r\n  float: left;\r\n  /*border: 1px solid #2EFEC8;*/\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n  color: black;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tabh button:hover {\r\n  background-color: #01DFA5\r\n}\r\n/* Create an active/current tablink class */\r\n.tabh button.active {\r\n  background-color:#01DFA5;\r\n}\r\n/* Style the tab content */\r\n.tabcontenth {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  /*border: 1px solid #ccc;*/\r\n  border-top: none;\r\n}\r\n/*----------- CAJA ----------- */\r\n.caja { \r\n  color: #2EFEC8; \r\n  font-size: 28px; \r\n  text-align: center; \r\n  background: black; \r\n  margin: 0 0 25px; \r\n  overflow: hidden; \r\n  border-radius: 0px 25px 0px 25px; \r\n  -moz-border-radius: 10px 10px 10px 10px; \r\n  -webkit-border-radius: 10px 10px 10px 10px; \r\n}"

/***/ }),

/***/ "./src/app/components/fixtureopci/fixtureopci.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/fixtureopci/fixtureopci.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b>Fixture</b>\n<br>\n<br>\n<div class=\"tab\">\n  <div *ngFor=\"let div of divisionalesService.divisional; let ind=index\">\n    <!--PARA PC-->\n    <div *ngIf = \"pantalla === 640\">\n      <button class=\"tablinks\" (click)=\"campeonatosDivisionales($event, div.divisionalid)\" id=div.divisionalid>{{div.divisionalnom}}</button>\n    </div>\n    <!--PARA CEL-->\n    <div *ngIf = \"pantalla === 360\">\n      <button class=\"tablinks\" (click)=\"campeonatosDivisionales($event, div.divisionalid)\" id=div.divisionalid>\n          <font size =1>{{div.divisionalnom}}</font>\n      </button>\n    </div>\n  <hr>\n  </div>\n</div>\n\n<div id=\"DivCon\" class=\"tabcontent\">\n  <div class=\"tabh\">\n    <div *ngFor=\"let cam of campeonatosService.campeonatos; let ind=index\">\n      <!--PARA PC-->\n      <div *ngIf = \"pantalla === 640\">\n          <button class=\"tablinksh\" (click)=\"fechasCampeonatos($event, cam.campeonatoid, cam.campeonatonom)\" id=cam.campeonatoid>\n            {{cam.campeonatonom}}\n          </button>\n      </div>\n      <!--PARA CEL-->\n      <div *ngIf = \"pantalla === 360\"> \n          <button class=\"tablinksh\" (click)=\"fechasCampeonatos($event, cam.campeonatoid, cam.campeonatonom)\" id=cam.campeonatoid>\n              <font size =1>{{cam.campeonatonom}}</font>\n          </button>\n      </div>\n    </div>\n  </div>\n    \n  <div id=\"CamCon\" class=\"tabcontenth\">\n    <tr *ngFor=\"let fe of par; let ind=index\" style=\"display:inline-block;\">\n      <img width=\"20\" src=\"assets/cale.jpg\"/>\n        <a href=\"#\" [routerLink]=\"['../fixture', CamN, fe.PartidosFecJug,'0']\" *ngIf=\"fe.PartidosFecJug != 0\">\n          <td style=\"background-color:white\" *ngIf=\"fe.PartidosIng != 1 \">Fecha Nro. {{fe.PartidosFecJug}}</td>\n          <td style=\"background-color:rgb(218, 216, 216)\" *ngIf=\"fe.PartidosIng === 1 \">Fecha Nro. {{fe.PartidosFecJug}}</td>\n        </a>\n        <a href=\"#\" [routerLink]=\"['../fixture', CamN, fe.PartidosFecJug,fe.PartidosNomJug ]\" *ngIf=\"fe.PartidosFecJug === 0\">\n          <td style=\"background-color:white\" *ngIf=\"fe.PartidosIng != 1 && fe.PartidosFecJug === 0\">{{fe.PartidosNomJug}}</td>\n          <td style=\"background-color:rgb(218, 216, 216)\" *ngIf=\"fe.PartidosIng === 1 && fe.PartidosFecJug === 0\">{{fe.PartidosNomJug}}</td>\n        </a>\n      &nbsp;&nbsp;&nbsp;\n    </tr>\n  </div>\n</div>\n\n  \n\n"

/***/ }),

/***/ "./src/app/components/fixtureopci/fixtureopci.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/fixtureopci/fixtureopci.component.ts ***!
  \*****************************************************************/
/*! exports provided: FixtureopciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixtureopciComponent", function() { return FixtureopciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_divisionales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/divisionales.service */ "./src/app/services/divisionales.service.ts");
/* harmony import */ var _services_campeonatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/campeonatos.service */ "./src/app/services/campeonatos.service.ts");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FixtureopciComponent = /** @class */ (function () {
    function FixtureopciComponent(divisionalesService, campeonatosService, partidosService) {
        this.divisionalesService = divisionalesService;
        this.campeonatosService = campeonatosService;
        this.partidosService = partidosService;
    }
    FixtureopciComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.campeonatosService.getCampeonatoDiv(0)
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
        });
        this.getDivisional();
    };
    FixtureopciComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    FixtureopciComponent.prototype.campeonatosDivisionales = function (evt, divId) {
        var _this = this;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById("DivCon").style.display = "block";
        evt.currentTarget.className += " active";
        this.partidosService.getpartidosFecCam(0, '0')
            .subscribe(function (res) {
            _this.par = res;
        });
        this.campeonatosService.getCampeonatoDiv(divId)
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
        });
    };
    FixtureopciComponent.prototype.fechasCampeonatos = function (evt, camId, camnom) {
        var _this = this;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontenth");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinksh");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        this.CamN = camId;
        document.getElementById("CamCon").style.display = "block";
        evt.currentTarget.className += " active";
        if (camnom === 'Clasificatorio') {
            window.location.href = '../clasificatorioopc';
        }
        else {
            this.partidosService.getpartidosFecCam(camId, camnom)
                .subscribe(function (res) {
                _this.par = res;
            });
        }
    };
    FixtureopciComponent.prototype.fechasCampeonatosLlave = function (evt, camId) {
    };
    FixtureopciComponent.prototype.getDivisional = function () {
        var _this = this;
        this.divisionalesService.getDivisional()
            .subscribe(function (res) {
            _this.divisionalesService.divisional = res;
        });
    };
    FixtureopciComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixtureopci',
            template: __webpack_require__(/*! ./fixtureopci.component.html */ "./src/app/components/fixtureopci/fixtureopci.component.html"),
            styles: [__webpack_require__(/*! ./fixtureopci.component.css */ "./src/app/components/fixtureopci/fixtureopci.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisionales_service__WEBPACK_IMPORTED_MODULE_1__["DivisionalesService"],
            _services_campeonatos_service__WEBPACK_IMPORTED_MODULE_2__["CampeonatosService"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"]])
    ], FixtureopciComponent);
    return FixtureopciComponent;
}());



/***/ }),

/***/ "./src/app/components/galeriafotcam/galeriafotcam.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/galeriafotcam/galeriafotcam.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/galeriafotcam/galeriafotcam.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/galeriafotcam/galeriafotcam.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5><i>Galeria de fotos - Campeonato {{CamNom}}</i></h5>\n<br>\n<div style=\"display: inline;\" class=\"container\" *ngFor=\"let ima of camFot; let ind=index\" >\n    <td>\n      <img width=\"300\" height=\"200\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + ima.CamFecFotosFot)\">\n    </td>\n</div>\n"

/***/ }),

/***/ "./src/app/components/galeriafotcam/galeriafotcam.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/galeriafotcam/galeriafotcam.component.ts ***!
  \*********************************************************************/
/*! exports provided: GaleriafotcamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriafotcamComponent", function() { return GaleriafotcamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GaleriafotcamComponent = /** @class */ (function () {
    function GaleriafotcamComponent(partidosService, route, domSanitizer) {
        this.partidosService = partidosService;
        this.route = route;
        this.domSanitizer = domSanitizer;
    }
    GaleriafotcamComponent.prototype.ngOnInit = function () {
        this.CamId = this.route.snapshot.params.cam;
        this.getFotos(this.CamId);
    };
    GaleriafotcamComponent.prototype.getFotos = function (camid) {
        var _this = this;
        this.partidosService.getPartidoFotCam(camid)
            .subscribe(function (res) {
            _this.camFot = res;
            _this.CamNom = res[0].campeonatonom;
        });
    };
    GaleriafotcamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-galeriafotcam',
            template: __webpack_require__(/*! ./galeriafotcam.component.html */ "./src/app/components/galeriafotcam/galeriafotcam.component.html"),
            styles: [__webpack_require__(/*! ./galeriafotcam.component.css */ "./src/app/components/galeriafotcam/galeriafotcam.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], GaleriafotcamComponent);
    return GaleriafotcamComponent;
}());



/***/ }),

/***/ "./src/app/components/goleadoresopc/goleadoresopc.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/goleadoresopc/goleadoresopc.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* TABS VERTICALES ***********************************++++++++++++++++++++++++*****/\r\n* {box-sizing: border-box}\r\nbody {font-family: \"Lato\", sans-serif;}\r\n.tab {\r\n  float: left;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n  width: 30%;\r\n  height: 100%;\r\n  scroll-behavior: auto;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  display: block;\r\n  background-color: inherit;\r\n  color: black;\r\n  padding: 22px 16px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color:  #01DFA5; /*  #CEF6EC;*/\r\n}\r\n/* Create an active/current \"tab button\" class */\r\n.tab button.active {\r\n  background-color:#01DFA5;\r\n}\r\n/* Style the tab content */\r\n.tabcontent {\r\n  float: left;\r\n  padding: 0px 12px;\r\n  /*border: 1px solid #ccc;*/\r\n  width: 70%;\r\n  border-left: none;\r\n  /*height: 300px;*/\r\n}\r\n/**** TAB HORIZONTAL*************************************************************/\r\n/* Style the tab */\r\n.tabh {\r\n  overflow: hidden;\r\n  /*border: 1px solid #ccc;*/\r\n  background-color: white;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tabh button {\r\n  background-color: inherit;\r\n  float: left;\r\n  /*border: 1px solid #2EFEC8;*/\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n  color: black;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tabh button:hover {\r\n  background-color: #01DFA5\r\n}\r\n/* Create an active/current tablink class */\r\n.tabh button.active {\r\n  background-color:#01DFA5;\r\n}\r\n/* Style the tab content */\r\n.tabcontenth {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  /*border: 1px solid #ccc;*/\r\n  border-top: none;\r\n}\r\n/*----------- CAJA ----------- */\r\n.caja { \r\n  color: #2EFEC8; \r\n  font-size: 28px; \r\n  text-align: center; \r\n  background: black; \r\n  margin: 0 0 25px; \r\n  overflow: hidden; \r\n  border-radius: 0px 25px 0px 25px; \r\n  -moz-border-radius: 10px 10px 10px 10px; \r\n  -webkit-border-radius: 10px 10px 10px 10px; \r\n}\r\n/*----------- Centrar en pantalla -----------*/\r\n.centrar{\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/goleadoresopc/goleadoresopc.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/goleadoresopc/goleadoresopc.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b>Goleadores</b>\n<br>\n<br>\n<div class=\"tab\">\n  <div *ngFor=\"let div of divisionalesService.divisional; let ind=index\">\n    <!--PARA PC-->\n    <div *ngIf = \"pantalla === 640\">\n      <button class=\"tablinks\" (click)=\"campeonatosDivisionales($event, div.divisionalid)\" id=div.divisionalid>{{div.divisionalnom}}</button>\n    </div>\n    <!--PARA CEL-->\n    <div *ngIf = \"pantalla === 360\">\n      <button class=\"tablinks\" (click)=\"campeonatosDivisionales($event, div.divisionalid)\" id=div.divisionalid>\n        <font size =1>{{div.divisionalnom}}</font>\n      </button>\n    </div>\n  <hr>\n  </div>\n</div>\n\n<div id=\"DivCon\" class=\"tabcontent\">\n  \n  <div class=\"tabh\">\n    <div *ngFor=\"let cam of campeonatosService.campeonatos; let ind=index\">\n      <!--PARA PC-->\n      <div *ngIf = \"pantalla === 640\">\n          <button class=\"tablinksh\" (click)=\"getGolesJug($event, cam.campeonatoid)\" id=cam.campeonatoid>{{cam.campeonatonom}}</button>\n      </div>\n      <!--PARA CEL-->\n      <div *ngIf = \"pantalla === 360\">\n          <button class=\"tablinksh\" (click)=\"getGolesJug($event, cam.campeonatoid)\" id=cam.campeonatoid>\n              <font size =1>{{cam.campeonatonom}}</font>\n          </button>\n      </div>\n    </div>\n  </div>\n    \n  <div id=\"GolJug\" class=\"tabcontenth\">\n\n    <table class=\"scrolltable\" >\n      <tr *ngIf=\"CanJug > 0\">\n        <td style=\"height:40%\" *ngIf = \"pantalla === 640\"><b>Nombre</b></td>\n        <td style=\"height:40%\" *ngIf = \"pantalla === 360\"><b><font size =1>Nom.</font></b></td>\n        <td style=\"height:40%\" *ngIf = \"pantalla === 640\"><b>Equipo</b></td>\n        <td style=\"height:40%\" *ngIf = \"pantalla === 360\"><b><font size =1>Equi.</font></b></td>\n        <td style=\"height:20%\" *ngIf = \"pantalla === 640\"><b>Goles</b></td>\n        <td style=\"height:20%\" *ngIf = \"pantalla === 360\"><b><font size =1>Gol.</font></b></td>\n      </tr>\n\n      <tr class=\"odd\" *ngFor=\"let jug of juparsService.jugpar\">\n        <td width=\"40%\">{{ jug.jugadornom}}</td>\n        <td width=\"40%\">{{ jug.equiponom}}</td>\n        <td width=\"20%\">{{ jug.jugadorgol}}</td>\n      </tr>\n    </table>\n    \n  </div>\n\n</div>\n\n  \n\n\n"

/***/ }),

/***/ "./src/app/components/goleadoresopc/goleadoresopc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/goleadoresopc/goleadoresopc.component.ts ***!
  \*********************************************************************/
/*! exports provided: GoleadoresopcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoleadoresopcComponent", function() { return GoleadoresopcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_divisionales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/divisionales.service */ "./src/app/services/divisionales.service.ts");
/* harmony import */ var _services_campeonatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/campeonatos.service */ "./src/app/services/campeonatos.service.ts");
/* harmony import */ var src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/jupars.service */ "./src/app/services/jupars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoleadoresopcComponent = /** @class */ (function () {
    function GoleadoresopcComponent(divisionalesService, campeonatosService, juparsService) {
        this.divisionalesService = divisionalesService;
        this.campeonatosService = campeonatosService;
        this.juparsService = juparsService;
    }
    GoleadoresopcComponent.prototype.ngOnInit = function () {
        //oculto label cargando...
        //document.getElementById("cargando").style.visibility = "hidden"
        var _this = this;
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.campeonatosService.getCampeonatoDiv(0)
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
        });
        this.juparsService.getJugGol(0)
            .subscribe(function (res) {
            _this.juparsService.jugpar = res;
        });
        this.getDivisional();
    };
    GoleadoresopcComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    GoleadoresopcComponent.prototype.campeonatosDivisionales = function (evt, divId) {
        var _this = this;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById("DivCon").style.display = "block";
        evt.currentTarget.className += " active";
        this.juparsService.getJugGol(0)
            .subscribe(function (res) {
            _this.juparsService.jugpar = res;
        });
        this.CanJug = 0;
        this.campeonatosService.getCampeonatoDiv(divId)
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
        });
    };
    GoleadoresopcComponent.prototype.getGolesJug = function (evt, camId) {
        //document.getElementById("cargando").style.visibility = "visible"
        var _this = this;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontenth");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinksh");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        this.CamN = camId;
        document.getElementById("GolJug").style.display = "block";
        evt.currentTarget.className += " active";
        this.juparsService.getJugGol(camId)
            .subscribe(function (res) {
            _this.juparsService.jugpar = res;
            _this.CanJug = _this.juparsService.jugpar.length;
        });
        //document.getElementById("cargando").style.visibility = "hidden"
    };
    GoleadoresopcComponent.prototype.getDivisional = function () {
        var _this = this;
        this.divisionalesService.getDivisional()
            .subscribe(function (res) {
            _this.divisionalesService.divisional = res;
        });
    };
    GoleadoresopcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goleadoresopc',
            template: __webpack_require__(/*! ./goleadoresopc.component.html */ "./src/app/components/goleadoresopc/goleadoresopc.component.html"),
            styles: [__webpack_require__(/*! ./goleadoresopc.component.css */ "./src/app/components/goleadoresopc/goleadoresopc.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisionales_service__WEBPACK_IMPORTED_MODULE_1__["DivisionalesService"],
            _services_campeonatos_service__WEBPACK_IMPORTED_MODULE_2__["CampeonatosService"],
            src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_3__["JuparsService"]])
    ], GoleadoresopcComponent);
    return GoleadoresopcComponent;
}());



/***/ }),

/***/ "./src/app/components/imgppal/imgppal.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/imgppal/imgppal.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/imgppal/imgppal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/imgppal/imgppal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<td width = \"100%\" style=\"vertical-align:top; text-align: left\" >\n<img src=\"assets/CabNoticias.jpg\" alt=\"Noticias\" style=\"max-width:100%;width:auto;height:auto;align-content:left;\"/>\n<br>\n<br>\n<table>\n    <tr *ngFor=\"let noticia of noticiasService.noticias\">\n      <td width=\"30%\">\n        <a href=\"#\"  (click)='ShowNews(0)' [routerLink]=\"['../viewnoticia', noticia.noticiasid]\">  \n        <img *ngIf = \"pantalla === 640\" width=\"100%\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + noticia.noticiasfot)\">\n        <img *ngIf = \"pantalla === 360\" width=\"100%\" height=\"15%\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + noticia.noticiasfot)\">\n       </a>\n      </td>\n      <td style=\"vertical-align:top;\">\n        <a href=\"#\"  (click)='ShowNews(0)' [routerLink]=\"['../viewnoticia', noticia.noticiasid]\">  \n          {{noticia.noticiascab}}\n        </a>\n        <br>\n        <hr/>\n        <br>\n          {{noticia.noticiasdet}}\n      </td>\n    </tr>\n  </table>\n</td>\n\n"

/***/ }),

/***/ "./src/app/components/imgppal/imgppal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/imgppal/imgppal.component.ts ***!
  \*********************************************************/
/*! exports provided: ImgppalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgppalComponent", function() { return ImgppalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/noticias.service */ "./src/app/services/noticias.service.ts");
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




var ImgppalComponent = /** @class */ (function () {
    function ImgppalComponent(router, noticiasService, domSanitizer) {
        this.router = router;
        this.noticiasService = noticiasService;
        this.domSanitizer = domSanitizer;
    }
    ImgppalComponent.prototype.ngOnInit = function () {
        this.getNoticia();
        this.noticias = parseInt(sessionStorage.getItem('noticias'), 10);
        //Tamaño img noticias segun la pantalla
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    ImgppalComponent.prototype.getNoticia = function () {
        var _this = this;
        this.noticiasService.getNoticia()
            .subscribe(function (res) {
            _this.noticiasService.noticias = res;
        });
    };
    ImgppalComponent.prototype.ShowNews = function (mostrar) {
        if (mostrar === 1) {
            sessionStorage.setItem('noticias', '1');
            this.noticias = 1;
        }
        else {
            sessionStorage.setItem('noticias', '0');
            this.noticias = 0;
        }
    };
    ImgppalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imgppal',
            template: __webpack_require__(/*! ./imgppal.component.html */ "./src/app/components/imgppal/imgppal.component.html"),
            styles: [__webpack_require__(/*! ./imgppal.component.css */ "./src/app/components/imgppal/imgppal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ImgppalComponent);
    return ImgppalComponent;
}());



/***/ }),

/***/ "./src/app/components/jugadordatos/jugadordatos.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/jugadordatos/jugadordatos.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aligncenter {\r\n    text-align: center;\r\n}\r\n\r\n.alignleft {\r\n    text-align: left;\r\n}\r\n\r\n.valigntop{\r\n    vertical-align: top;\r\n}\r\n\r\n.tdvacio{\r\n    height: 52px;\r\n}"

/***/ }),

/***/ "./src/app/components/jugadordatos/jugadordatos.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/jugadordatos/jugadordatos.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n  \n  <!--VISTA PARA PC-->\n  <td class=\"valigntop\" *ngIf = \"pantalla === 640\">\n      <img style=\"vertical-align:middle\" width=\"150\" height=\"150\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + JuFot)\">\n  </td>\n\n  <td class=\"valigntop\">\n    <table width=\"40%\">\n    <tr>\n      <td colspan = \"2\" class=\"alignleft\">\n      <font size =6>\n        <b>Datos generales</b>\n      </font>\n      </td>\n    </tr>\n    <tr>\n      <td width=\"40%\">Nombre:</td>\n      <td width=\"60%\" align=\"left\">{{JuNom}}</td>\n    </tr>\n    <tr>\n      <td>Estado:</td>\n      <td width=\"60%\" align=\"left\">{{JuEst}}</td>\n    </tr>\n    <tr>\n      <td>Edad:</td>\n      <td width=\"60%\" align=\"left\">{{JuEda}}</td>\n    </tr>\n    <tr>\n      <td>Fecha inscripción:</td>\n      <td width=\"60%\" align=\"left\">{{JuFin}}</td>\n    </tr>\n    <tr>\n      <td>Número:</td>\n      <td width=\"60%\" align=\"left\">{{JuNum}}</td>\n    </tr>\n    <tr>\n      <td>Posición:</td>\n      <td width=\"60%\" align=\"left\">{{JuPos}}</td>\n    </tr>\n    <tr>\n      <td class=\"tdvacio\"></td>\n      <td class=\"tdvacio\"></td>\n    </tr>\n    </table>\n\n    <!--VISTA PARA CELULAR-->\n    <div *ngIf = \"pantalla === 360\">\n      <table width=\"40%\">\n      <tr>\n        <td colspan = \"2\">\n          <font size =6>\n            <b>Estadísticas</b>\n          </font>\n        </td>\n      </tr> \n      <tr>\n        <td width=\"40%\">Partidos jugados:</td>\n        <td width=\"60%\" class=\"alignleft\">{{JuPar}}</td>\n      </tr>\n      <tr>\n        <td>Goles totales:</td>\n        <td width=\"60%\" align=\"left\">{{JuGol}}</td>\n      </tr>\n      <tr>\n        <td>Goles x partido:</td>\n        <td width=\"60%\" align=\"left\">{{JuGolPar}}</td>\n      </tr>\n      <tr>\n        <td>Amarillas:</td>\n        <td width=\"60%\" align=\"left\">{{JuAma}}</td>\n      </tr>\n      <tr>\n        <td>Rojas:</td>\n        <td width=\"60%\" align=\"left\">{{JuRoj}}</td>\n      </tr>\n      <tr>\n        <td>Suspenciónes:</td>\n        <td width=\"60%\" align=\"left\">{{JuSus}}</td>\n      </tr>\n      </table>\n    </div>\n  </td>\n\n  <!--VISTA PARA PC-->\n  <td class=\"valigntop\" *ngIf = \"pantalla === 640\">\n    <table width=\"40%\">\n      <tr>\n        <td colspan = \"2\">\n          <font size =6>\n            <b>Estadísticas</b>\n          </font>\n        </td>\n      </tr> \n      <tr>\n        <td width=\"40%\">Partidos jugados:</td>\n        <td width=\"60%\" class=\"alignleft\">{{JuPar}}</td>\n      </tr>\n      <tr>\n        <td>Goles totales:</td>\n        <td width=\"60%\" align=\"left\">{{JuGol}}</td>\n      </tr>\n      <tr>\n        <td>Goles x partido:</td>\n        <td width=\"60%\" align=\"left\">{{JuGolPar}}</td>\n      </tr>\n      <tr>\n        <td>Amarillas:</td>\n        <td width=\"60%\" align=\"left\">{{JuAma}}</td>\n      </tr>\n      <tr>\n        <td>Rojas:</td>\n        <td width=\"60%\" align=\"left\">{{JuRoj}}</td>\n      </tr>\n      <tr>\n        <td>Suspenciónes:</td>\n        <td width=\"60%\" align=\"left\">{{JuSus}}</td>\n      </tr>\n    </table>\n  </td>\n\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/components/jugadordatos/jugadordatos.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/jugadordatos/jugadordatos.component.ts ***!
  \*******************************************************************/
/*! exports provided: JugadordatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadordatosComponent", function() { return JugadordatosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_jugadores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jugadores.service */ "./src/app/services/jugadores.service.ts");
/* harmony import */ var src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/jupars.service */ "./src/app/services/jupars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JugadordatosComponent = /** @class */ (function () {
    function JugadordatosComponent(jugadoresService, juparsService, domSanitizer, route, router) {
        this.jugadoresService = jugadoresService;
        this.juparsService = juparsService;
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.router = router;
    }
    JugadordatosComponent.prototype.ngOnInit = function () {
        this.JuId = this.route.snapshot.params.ju;
        //Tamaño texto tabs segun la pantalla
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.getJugadorId();
    };
    JugadordatosComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    JugadordatosComponent.prototype.getJugadorId = function () {
        var _this = this;
        this.jugadoresService.getJugadorId(this.JuId)
            .subscribe(function (res) {
            _this.jugadoresService.jugador = res;
            var d = new Date(); //.toISOString().split('T')[0];
            var d2 = new Date(_this.jugadoresService.jugador[0].jugadorfecnac);
            _this.edad = Math.abs(d2.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
            _this.edad = Math.round(_this.edad / 365);
            _this.JuNom = _this.jugadoresService.jugador[0].jugadornom;
            _this.JuFot = _this.jugadoresService.jugador[0].jugadorfot;
            _this.JuEst = _this.jugadoresService.jugador[0].jugadorestado;
            _this.JuEda = _this.edad;
            _this.JuFin = _this.jugadoresService.jugador[0].jugadorfecins;
            _this.JuNum = _this.jugadoresService.jugador[0].jugadornro;
            _this.JuPos = _this.jugadoresService.jugador[0].jugadorpos;
            _this.juparsService.getJugparEstadistica(_this.JuId)
                .subscribe(function (res) {
                _this.JuPar = res[0].jugadorpar;
                _this.JuMin = res[0].jugadormin;
                _this.JuGol = res[0].jugadorgol;
                _this.JuGolPar = res[0].jugadorgol / _this.JuPar;
                _this.JuAma = res[0].jugadorama;
                _this.JuRoj = res[0].jugadorroj;
                _this.JuSus = res[0].jugadorsus;
            });
        });
    };
    ;
    JugadordatosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jugadordatos',
            template: __webpack_require__(/*! ./jugadordatos.component.html */ "./src/app/components/jugadordatos/jugadordatos.component.html"),
            styles: [__webpack_require__(/*! ./jugadordatos.component.css */ "./src/app/components/jugadordatos/jugadordatos.component.css")],
            providers: [_services_jugadores_service__WEBPACK_IMPORTED_MODULE_3__["JugadoresService"]]
        }),
        __metadata("design:paramtypes", [_services_jugadores_service__WEBPACK_IMPORTED_MODULE_3__["JugadoresService"],
            src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_4__["JuparsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JugadordatosComponent);
    return JugadordatosComponent;
}());



/***/ }),

/***/ "./src/app/components/jugadores/jugadores.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/jugadores/jugadores.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/jugadores/jugadores.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/jugadores/jugadores.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n    <b>INGRESO JUGADOR</b>\n  </div>\n  <form #jugadorForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n\n    <tr  colspan=\"2\" *ngIf=\"userrol != 2\">\n      <td width = \"30%\"><font color=\"red\">*</font>Equipo:</td>\n      <td>\n        <div class=\"typeHead\">\n         <input type=\"hidden\" name=\"equipoidid\" id=\"equipoid\">\n         <input list=\"equipos\" id=\"equiponom\" name=\"equiponom\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.equiponom\" placeholder=\"Equipos\" /> \n          <datalist id=\"equipos\" >\n              <select id =\"esel\" >\n                <option *ngFor=\"let equipo of equiposService.equipo\" id={{equipo.equipoid}} value={{equipo.equiponom}}></option>\n              </select>\n          </datalist>\n        </div>\n      </td>\n    </tr>\n    <tr  colspan=\"2\" *ngIf=\"userrol == 2\">\n        <td width = \"30%\">Equipo:</td>\n        <td>\n          <input type=\"hidden\" name=\"equipoidid\" id=\"equipoid\">  \n          <input readonly id=\"equiponom\" name=\"equiponom\" #name=\"ngModel\"  [(ngModel)]=\"jugadoresService.selectedJugador.equiponom\" placeholder=\"Equipos\" /> \n        </td>\n      </tr>\n    <tr >\n    <tr  colspan=\"2\" >\n      <td width = \"30%\"><font color=\"red\">*</font>Nombre:</td>\n      <td>\n        <input type=\"hidden\" name=\"jugadorid\" #_id=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadorid\"> \n        <input type=\"text\" name=\"jugadornom\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadornom\" placeholder=\"Jugador\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\"><font color=\"red\">*</font>CI:</td>\n      <td>\n        <input type=\"text\" name=\"jugadorci\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadorci\" placeholder=\"CI\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">eMail:</td>\n      <td>\n        <input type=\"text\" name=\"jugadoremail\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadoremail\" placeholder=\"eMail\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n        <td width = \"30%\">Teléfono:</td>\n        <td>\n          <input type=\"text\" name=\"jugadortel\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadortel\" placeholder=\"Teléfono\">\n        </td>\n      </tr>\n    <tr >\n    <tr  colspan=\"2\" >\n        <td width = \"30%\">Dirección:</td>\n        <td>\n          <input type=\"text\" name=\"jugadordir\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadordir\" placeholder=\"Dirección\">\n        </td>\n      </tr>\n    <tr >\n    <tr  colspan=\"2\" >\n        <td width = \"30%\">Fecha de nacimiento:</td>\n        <td>\n          <input type=\"date\" name=\"jugadorfecnac\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadorfecnac\" placeholder=\"Fecha de nacimiento\">\n        </td>\n      </tr>\n    <tr >\n    <tr  colspan=\"2\" >\n        <td width = \"30%\">Fecha de inscripción:</td>\n        <td>\n          <input type=\"date\" name=\"jugadorfecins\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadorfecins\" placeholder=\"Fecha de inscripción\">\n        </td>\n      </tr>\n    <tr >\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Número asignado:</td>\n      <td>\n        <input type=\"text\" name=\"jugadornro\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadornro\" placeholder=\"Número asignado\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"30%\">Posición:</td>\n      <td>\n        <input type=\"text\" name=\"jugadorpos\" #name=\"ngModel\" [(ngModel)]=\"jugadoresService.selectedJugador.jugadorpos\" placeholder=\"Posición\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" > \n      <td width = \"30%\">Foto:</td>\n      <td>\n        <input type=\"file\" id=\"jugadorfot\" name=\"jugadorfot\" placeholder=\"Foto\" (change)=\"onFileChanged($event)\">\n      </td>\n    </tr>\n    <tr >\n    <tr >\n      <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(jugadorForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addJugador(jugadorForm)\">Guardar</button>\n      </td>\n    </tr>\n    <tr>\n        <td colspan=\"2\">\n        <font  size=\"1\" color=\"red\">* Campos obligatorios</font>\n      </td>\n    </tr>\n  </table>\n</form>\n<table style=\"width:100%\" id=\"TJug\"> \n  <tr>\n    <th colspan=\"6\">Listado Jugadores</th>\n  </tr>\n\n  <tr>\n    <th colspan=\"1\">Filtro por Nombre</th>\n    <th colspan=\"5\"><input type=\"text\" id=\"BJug\" (keyup)=\"Buscar()\" placeholder=\"Nombre\"></th>\n  </tr>\n\n  <tr>\n    <th ><i>Nombre</i></th>\n    <th ><i>Dorsal</i></th>\n    <th ><i>Estado</i></th>\n    <th colspan=\"6\"><i>Equipo</i></th>\n  </tr>\n  <tr *ngFor=\"let jugador of jugadoresService.jugador\">\n    <td colspan=\"1\">{{ jugador.jugadornom }}</td>\n    <td colspan=\"1\">{{ jugador.jugadornro }}</td>\n    <td colspan=\"1\">{{ jugador.jugadorestado }}</td>\n    <td colspan=\"3\">{{ jugador.equiponom }}</td>\n    <td>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"editJugador(jugador)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Editar jugador</span>\n      </div>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"deleteJugador(jugador.jugadorid, jugadorForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Borrar jugador</span>\n      </div>\n      <div class=\"tooltip\" *ngIf = \"userrol == 1\">\n        <a style=\"cursor:pointer;\" (click)=\"suspenderJugador(jugador, jugadorForm)\">\n          <img width=\"20\" alt=\"Suspender\" src=\"assets/susjug.jpg\"/>\n        </a>\n        <span class=\"tooltiptext\">Suspender jugador</span>\n      </div>\n      <div class=\"tooltip\" *ngIf = \"userrol == 1\">\n        <a style=\"cursor:pointer;\" (click)=\"habilitarJugador(jugador, jugadorForm)\">\n          <img width=\"20\" alt=\"Habilitar\" src=\"assets/habjug.png\"/>\n        </a>\n        <span class=\"tooltiptext\">Habilitar jugador</span>\n      </div>\n    </td>\n  </tr>\n</table>\n</div> \n\n"

/***/ }),

/***/ "./src/app/components/jugadores/jugadores.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/jugadores/jugadores.component.ts ***!
  \*************************************************************/
/*! exports provided: JugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresComponent", function() { return JugadoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var _services_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jugadores.service */ "./src/app/services/jugadores.service.ts");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JugadoresComponent = /** @class */ (function () {
    function JugadoresComponent(equiposService, jugadoresService, userLoginService, usuariosService) {
        this.equiposService = equiposService;
        this.jugadoresService = jugadoresService;
        this.userLoginService = userLoginService;
        this.usuariosService = usuariosService;
    }
    JugadoresComponent.prototype.ngOnInit = function () {
        this.getEquipo();
        this.getJugador();
        this.GetUsr();
    };
    JugadoresComponent.prototype.addJugador = function (form) {
        var _this = this;
        if (document.querySelector("#equipos option[value='" + form.value.equiponom + "']") == null && this.userrol != 2) {
            alert('Debe ingresar un Equipo valido');
        }
        else {
            if (this.userrol != 2) {
                var equipoid = document.querySelector("#equipos option[value='" + form.value.equiponom + "']").id;
                form.value.equipoid = equipoid;
            }
            else {
                form.value.equipoid = this.jugadoresService.selectedJugador.equipoid;
            }
            if (parseInt(form.value.equipoid, 10) > 0 && form.value.jugadornom && form.value.jugadorci) {
                if (form.value.jugadorid) {
                    form.value.jugadorfot = this.f2;
                    this.jugadoresService.putJugador(form.value)
                        .subscribe(function (res) {
                        _this.resetForm(form);
                        M.toast({ html: 'Jugador Editado' });
                    });
                }
                else {
                    form.value.jugadorfot = this.f2;
                    this.jugadoresService.postJugador(form.value)
                        .subscribe(function (res) {
                        _this.resetForm(form);
                        M.toast({ html: 'Jugador Ingresado' });
                    });
                }
                ;
            }
            else {
                alert('Debe ingresar Equipo, Nombre y CI del jugador');
            }
        }
    };
    //Guardo la imagen seleccionada
    JugadoresComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
            _this.f2 = reader.result;
            _this.f2 = _this.f2.split(',')[1];
        };
    };
    JugadoresComponent.prototype.getEquipo = function () {
        var _this = this;
        this.equiposService.getEquipo()
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
            var usrlog = _this.userLoginService.getUserLoggedIn(); //Si el usuario logeado es Encargado
            if (usrlog) {
                _this.userrol = usrlog.rol;
                if (usrlog.rol == 2) {
                    if (isNaN(usrlog.equipo)) {
                        var error = 1;
                    }
                    else {
                        _this.equiposService.getEquipoid(usrlog.equipo)
                            .subscribe(function (res) {
                            var equipojug = res;
                            _this.jugadoresService.selectedJugador.equiponom = equipojug[0].equiponom;
                            _this.jugadoresService.selectedJugador.equipoid = equipojug[0].equipoid;
                            _this.eq = equipojug[0].equiponom;
                        });
                    }
                }
                ;
            }
            ;
        });
    };
    JugadoresComponent.prototype.getJugador = function () {
        var _this = this;
        var usrlog = this.userLoginService.getUserLoggedIn(); //Agarro usuario logeado
        this.userrol = usrlog.rol;
        if (usrlog) {
            this.userrol = usrlog.rol;
            if (this.userrol == 2) {
                this.jugadoresService.getJugadorEncargado(usrlog.equipo) //consulto solo los jugadores de ese equipo
                    .subscribe(function (res) {
                    _this.jugadoresService.jugador = res;
                });
            }
            else {
                this.jugadoresService.getJugador()
                    .subscribe(function (res) {
                    _this.jugadoresService.jugador = res;
                });
            }
            ;
        }
        else {
            this.jugadoresService.getJugador()
                .subscribe(function (res) {
                _this.jugadoresService.jugador = res;
            });
        }
    };
    ;
    JugadoresComponent.prototype.Buscar = function () {
        // Declare variables 
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("BJug");
        filter = input.value.toUpperCase();
        table = document.getElementById("TJug");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query #F5A9A9
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    JugadoresComponent.prototype.editJugador = function (jugador) {
        this.jugadoresService.selectedJugador = jugador;
    };
    JugadoresComponent.prototype.deleteJugador = function (jugadorid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar el Jugador?')) {
            this.jugadoresService.deleteJugador(jugadorid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Jugador Borrado' });
            });
        }
    };
    JugadoresComponent.prototype.suspenderJugador = function (jugador, form) {
        var _this = this;
        if (confirm('Confirma que desea suspender al Jugador?')) {
            this.jugadoresService.suspenderJugador(jugador)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Jugador Suspendido' });
            });
        }
    };
    JugadoresComponent.prototype.habilitarJugador = function (jugador, form) {
        var _this = this;
        if (confirm('Confirma que desea habilitar al Jugador?')) {
            this.jugadoresService.habilitarJugador(jugador)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Jugador Habilitado' });
            });
        }
    };
    JugadoresComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getEquipo();
            this.getJugador();
        }
    };
    JugadoresComponent.prototype.GetUsr = function () {
        var usrlog = this.userLoginService.getUserLoggedIn();
        if (usrlog) {
            this.userrol = usrlog.rol;
            this.userlog = usrlog.username;
        }
        ;
    };
    JugadoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jugador',
            template: __webpack_require__(/*! ./jugadores.component.html */ "./src/app/components/jugadores/jugadores.component.html"),
            styles: [__webpack_require__(/*! ./jugadores.component.css */ "./src/app/components/jugadores/jugadores.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_1__["EquiposService"], _services_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"], _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]]
        }),
        __metadata("design:paramtypes", [_services_equipos_service__WEBPACK_IMPORTED_MODULE_1__["EquiposService"],
            _services_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"],
            _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"],
            _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]])
    ], JugadoresComponent);
    return JugadoresComponent;
}());



/***/ }),

/***/ "./src/app/components/jugcarnet/jugcarnet.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/jugcarnet/jugcarnet.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\r\nborder: 1px solid black;\r\nheight: 6cm;\r\nwidth: 10cm;\r\n}"

/***/ }),

/***/ "./src/app/components/jugcarnet/jugcarnet.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/jugcarnet/jugcarnet.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carnet\">\n  <table style=\"width: 10cm\" id=\"ee\">\n    <tr>\n      <td>CARNET {{JuId}}</td>\n    </tr>\n  </table>\n</div>\n<br>\n<button class=\"btn left\" value=\"Imprimir\" (click)=\"imprimir()\">Imprimir</button>"

/***/ }),

/***/ "./src/app/components/jugcarnet/jugcarnet.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/jugcarnet/jugcarnet.component.ts ***!
  \*************************************************************/
/*! exports provided: JugcarnetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugcarnetComponent", function() { return JugcarnetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JugcarnetComponent = /** @class */ (function () {
    function JugcarnetComponent(domSanitizer, route, router) {
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.router = router;
    }
    JugcarnetComponent.prototype.ngOnInit = function () {
        this.JuId = this.route.snapshot.params.jug;
    };
    JugcarnetComponent.prototype.imprimir = function () {
        var ficha = document.getElementById('ee');
        window.document.write(ficha.innerText);
        window.print();
    };
    JugcarnetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jugcarnet',
            template: __webpack_require__(/*! ./jugcarnet.component.html */ "./src/app/components/jugcarnet/jugcarnet.component.html"),
            styles: [__webpack_require__(/*! ./jugcarnet.component.css */ "./src/app/components/jugcarnet/jugcarnet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JugcarnetComponent);
    return JugcarnetComponent;
}());



/***/ }),

/***/ "./src/app/components/jugpars/jugpars.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/jugpars/jugpars.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/jugpars/jugpars.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/jugpars/jugpars.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n      <b>INGRESO JUGADOR A PARTIDO</b>\n  </div>\n  <form #jugparForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n      <tr  colspan=\"2\">\n      <td width = \"10%\">Campeonato:</td>\n          <td>\n          <input type=\"text\" readonly id=\"campeonatonom\" name=\"campeonatonom\" [(ngModel)]='campeonatosService.selectedCampeonato.campeonatonom' placeholder=\"Campeonato\"/>\n          </td>\n      </tr>    \n      <tr  colspan=\"2\">\n      <td width = \"10%\">Fecha del partido:</td>\n          <td>\n          <input type=\"text\" readonly id=\"PartidosFec\" name=\"PartidosFec\" [(ngModel)]='partidosService.selectedPartido.PartidosFec' placeholder=\"Fecha\"/>\n          </td>\n      </tr>    \n      <tr  colspan=\"2\">\n        <td width = \"10%\">Equipo:</td>\n        <td>\n        <input type=\"text\" readonly id=\"equiponom\" name=\"equiponom\" [(ngModel)]='jugparsService.selectedJugpar.equiponom' placeholder=\"Equipo\"/>\n        </td>\n      </tr>    \n      <tr  colspan=\"2\">\n        <td width = \"30%\"><font color=\"red\">*</font>Jugador:</td>\n        <td>\n            <div class=\"typeHead\">\n            <input type=\"text\" list=\"jugadores\" id=\"jugadornom\" name=\"jugadornom\" [(ngModel)]='jugparsService.selectedJugpar.jugadornom' placeholder=\"Jugador\"/>\n            <datalist id=\"jugadores\">\n                <select>\n                <option *ngFor=\"let jugador of jugadoresService.jugador\" id={{jugador.jugadorid}} value={{jugador.jugadornom}}></option>\n                </select>\n            </datalist>\n            </div>\n        </td>\n        </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Minutos jugados:</td>\n      <td>\n        <input type=\"hidden\" name=\"jugparid\" #_id=\"ngModel\" [(ngModel)]=\"jugparsService.selectedJugpar.jugparid\"> \n        <input type=\"text\" name=\"jugadormin\" #name=\"ngModel\" [(ngModel)]=\"jugparsService.selectedJugpar.jugadormin\" placeholder=\"Minutos\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Tarjetas amarillas:</td>\n      <td>\n          <input type=\"text\" name=\"jugadorama\" #name=\"ngModel\" [(ngModel)]=\"jugparsService.selectedJugpar.jugadorama\" placeholder=\"Amarillas\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Tarjeta roja:</td>\n      <td>\n          <input type=\"text\" name=\"jugadorroj\" #name=\"ngModel\" [(ngModel)]=\"jugparsService.selectedJugpar.jugadorroj\" placeholder=\"Roja\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Goles:</td>\n      <td>\n          <input type=\"text\" name=\"jugadorgol\" #name=\"ngModel\" [(ngModel)]=\"jugparsService.selectedJugpar.jugadorgol\" placeholder=\"Goles\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Observaciones:</td>\n      <td>\n          <input type=\"text\" name=\"jugadorobs\" #name=\"ngModel\" [(ngModel)]=\"jugparsService.selectedJugpar.jugadorobs\" placeholder=\"Observaciónes\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\">\n      <td colspan=\"2\">\n          <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(jugparForm)\">Borrar</button>\n          <button class=\"btn left\" (click)=\"addJugpar(jugparForm)\">Guardar</button>\n      </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n        <font  size=\"1\" color=\"red\">* Campos obligatorios</font>\n        </td>\n      </tr>\n  </table>\n  </form>\n  \n  <table style=\"width:100%\" id=\"TJPa\"> \n  <tr>\n      <th colspan=\"5\">Listado de jugadores</th>\n  </tr>\n\n  <tr>\n    <th colspan=\"1\">Filtro por Jugador</th>\n    <th colspan=\"3\"><input type=\"text\" id=\"BJPa\" (keyup)=\"Buscar()\" placeholder=\"Jugador\"></th>\n  </tr>\n\n  <tr>\n      <th><i>Equipo</i></th>\n      <th><i>jugador</i></th>\n      <th><i>Fecha partido</i></th>\n  </tr>\n  <tr *ngFor=\"let jugpar of jugparsService.jugpar\">\n      <td >{{ jugpar.equiponom }}</td>\n      <td >{{ jugpar.jugadornom }}</td>\n      <td >{{ jugpar.PartidosFec}}</td>\n      <td>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"editJugpar(jugpar)\">\n          <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/> \n      </a>\n      <span class=\"tooltiptext\">Editar datos jugador en partido</span>\n      </div>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"deleteJugpar(jugpar.jugparid, jugparForm)\">\n          <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Borrar jugador de partido</span>\n      </div>\n      </td>\n  </tr>\n  </table>\n  </div>  \n  \n"

/***/ }),

/***/ "./src/app/components/jugpars/jugpars.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/jugpars/jugpars.component.ts ***!
  \*********************************************************/
/*! exports provided: JugparsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugparsComponent", function() { return JugparsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_campeonatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/campeonatos.service */ "./src/app/services/campeonatos.service.ts");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
/* harmony import */ var src_app_services_jugadores_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/jugadores.service */ "./src/app/services/jugadores.service.ts");
/* harmony import */ var src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/jupars.service */ "./src/app/services/jupars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JugparsComponent = /** @class */ (function () {
    function JugparsComponent(campeonatosService, partidosService, jugadoresService, jugparsService, equiposService, route, router) {
        this.campeonatosService = campeonatosService;
        this.partidosService = partidosService;
        this.jugadoresService = jugadoresService;
        this.jugparsService = jugparsService;
        this.equiposService = equiposService;
        this.route = route;
        this.router = router;
    }
    JugparsComponent.prototype.ngOnInit = function () {
        this.ParId = this.route.snapshot.params.par;
        this.EqId = this.route.snapshot.params.eq;
        this.getJugador();
        this.getEquipo();
        this.getCampeonato();
        this.getPartido();
        this.getJugpar();
    };
    JugparsComponent.prototype.getJugador = function () {
        var _this = this;
        this.jugadoresService.getJugadorEncargado(this.EqId)
            .subscribe(function (res) {
            _this.jugadoresService.jugador = res;
        });
    };
    JugparsComponent.prototype.getEquipo = function () {
        var _this = this;
        if (isNaN(this.EqId)) {
            var error = 1;
        }
        else {
            this.equiposService.getEquipoid(this.EqId)
                .subscribe(function (res) {
                _this.jugparsService.selectedJugpar.equiponom = res[0].equiponom;
            });
        }
    };
    JugparsComponent.prototype.getCampeonato = function () {
        var _this = this;
        this.campeonatosService.getCampeonato()
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
            _this.campeonatosService.getCampeonatonompar(_this.ParId)
                .subscribe(function (res) {
                var camnom = res;
                _this.campeonatosService.selectedCampeonato.campeonatonom = camnom[0].campeonatonom;
            });
        });
    };
    JugparsComponent.prototype.getPartido = function () {
        var _this = this;
        this.partidosService.getPartidoJug(this.ParId)
            .subscribe(function (res) {
            _this.partidosService.partidos = res;
            _this.partidosService.selectedPartido.PartidosFec = _this.partidosService.partidos[0].PartidosFec;
        });
    };
    JugparsComponent.prototype.getJugpar = function () {
        var _this = this;
        this.jugparsService.getJugpar(this.ParId, this.EqId) //
            .subscribe(function (res) {
            _this.jugparsService.jugpar = res;
        });
    };
    JugparsComponent.prototype.addJugpar = function (form) {
        var _this = this;
        if (document.querySelector("#jugadores option[value='" + form.value.jugadornom + "']") == null) {
            alert('Debe ingresar un Jugador válido');
        }
        else {
            var jugadorid = document.querySelector("#jugadores option[value='" + form.value.jugadornom + "']").id;
            form.value.jugadorid = jugadorid;
            console.log(form.value.jugadorid);
            form.value.PartidosId = this.ParId;
            if (form.value.jugparid) {
                this.jugparsService.putJugpar(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Datos de Jugador Editados' });
                });
            }
            else {
                this.jugparsService.postJugpar(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Datos de Jugador Agregados al Partido' });
                });
            }
            ;
        }
    };
    JugparsComponent.prototype.editJugpar = function (jugpar) {
        this.jugparsService.selectedJugpar = jugpar;
    };
    JugparsComponent.prototype.deleteJugpar = function (jugparid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar el jugador del partido?')) {
            this.jugparsService.deleteJugpar(jugparid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Jugador Borrado del Partido' });
            });
        }
    };
    JugparsComponent.prototype.Buscar = function () {
        // Declare variables 
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("BJPa");
        filter = input.value.toUpperCase();
        table = document.getElementById("TJPa");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query #F5A9A9
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    JugparsComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getJugador();
            this.getEquipo();
            this.getCampeonato();
            this.getPartido();
            this.getJugpar();
        }
    };
    JugparsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-jugpar',
            template: __webpack_require__(/*! ./jugpars.component.html */ "./src/app/components/jugpars/jugpars.component.html"),
            styles: [__webpack_require__(/*! ./jugpars.component.css */ "./src/app/components/jugpars/jugpars.component.css")],
            providers: [src_app_services_campeonatos_service__WEBPACK_IMPORTED_MODULE_3__["CampeonatosService"], src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__["PartidosService"], src_app_services_jugadores_service__WEBPACK_IMPORTED_MODULE_5__["JugadoresService"], src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_6__["JuparsService"], _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_campeonatos_service__WEBPACK_IMPORTED_MODULE_3__["CampeonatosService"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__["PartidosService"],
            src_app_services_jugadores_service__WEBPACK_IMPORTED_MODULE_5__["JugadoresService"],
            src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_6__["JuparsService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JugparsComponent);
    return JugparsComponent;
}()); //JugparComponent



/***/ }),

/***/ "./src/app/components/llaveoct/llaveoct.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/llaveoct/llaveoct.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#col01 { background: white; width:10%; vertical-align: top;}\r\n#col02 { background: white; width:3%; vertical-align: top;}\r\n#col03 { background: white; width:27%; vertical-align: top;}\r\n#col04 { background: white; width:60%; vertical-align: top;}\r\n#col01, #col02, #col03, #col04 { display: inline-block; color: black; }\r\n/*----------- CAJA ----------- */\r\n.caja { \r\n    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; \r\n    color: white; \r\n    text-align: center; \r\n    height: 50px;\r\n    width: 100px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    background: black; \r\n    margin: 0px 0 25px;\r\n    overflow: hidden; \r\n    border-radius: 25px 25px 25px 25px; \r\n    -moz-border-radius: 25px 25px 25px 25px; \r\n    -webkit-border-radius: 25px 25px 25px 25px; \r\n}\r\n.texto {\r\n    font-size: 8px; \r\n}\r\n.linea{\r\n    display:inline;\r\n    vertical-align: center;\r\n}\r\n.lineaimg{\r\n    display:block;\r\n    margin-top: 20px;\r\n    text-align: left; \r\n}"

/***/ }),

/***/ "./src/app/components/llaveoct/llaveoct.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/llaveoct/llaveoct.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td id=\"col01\" style=\"text-align: right\">\n  <div class=\"linea\" ><div class=\"caja\"><div class=\"texto\">\n    Equipo 01 Vs Equipo 02\n  </div></div></div>\n  <br>\n  <br>\n  <div class=\"linea\"><div class=\"caja\"><div class=\"texto\">\n    Equipo 03 Vs Equipo 04\n  </div></div></div>\n  <br>\n  <br>\n  <div class=\"linea\"><div class=\"caja\"><div class=\"texto\">\n    Equipo 05 Vs Equipo 06\n  </div></div></div>\n  <br>\n  <br>\n  <div class=\"linea\"><div class=\"caja\"><div class=\"texto\">\n    Equipo 07 Vs Equipo 08\n  </div></div></div>\n</td>\n\n<!-- <div class=\"lineaimg\"><img  width=\"15px\" height=\"30px\" src=\"assets/llave01.jpg\"></div> -->\n\n<td id=\"col02\" style=\"text-align: left\">\n  <div class=\"lineaimg\"><img  width=\"15px\" height=\"30px\" src=\"assets/llave01.jpg\"></div>\n</td>\n\n<div id=\"col03\">\n\n</div>\n\n<div id=\"col04\">\n<div align=\"right\"><div class=\"caja\"><div class=\"texto\">Equipo 01 Vs Equipo 02</div></div></div>\n<br>\n<div align=\"right\"><div class=\"caja\"><div class=\"texto\">Equipo 03 Vs Equipo 04</div></div></div>\n<br>\n<div align=\"right\"><div class=\"caja\"><div class=\"texto\">Equipo 05 Vs Equipo 06</div></div></div>\n<br>\n<div align=\"right\"><div class=\"caja\"><div class=\"texto\">Equipo 07 Vs Equipo 08</div></div></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/llaveoct/llaveoct.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/llaveoct/llaveoct.component.ts ***!
  \***********************************************************/
/*! exports provided: LlaveoctComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LlaveoctComponent", function() { return LlaveoctComponent; });
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

var LlaveoctComponent = /** @class */ (function () {
    function LlaveoctComponent() {
    }
    LlaveoctComponent.prototype.ngOnInit = function () {
    };
    LlaveoctComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-llaveoct',
            template: __webpack_require__(/*! ./llaveoct.component.html */ "./src/app/components/llaveoct/llaveoct.component.html"),
            styles: [__webpack_require__(/*! ./llaveoct.component.css */ "./src/app/components/llaveoct/llaveoct.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LlaveoctComponent);
    return LlaveoctComponent;
}());



/***/ }),

/***/ "./src/app/components/modalidades/modalidad.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/modalidades/modalidad.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "datalist { \r\n    display: \"0\";\r\n  }\r\n\r\n  .tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n  /* Tooltip text */\r\n\r\n  .tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n  /* Tooltip arrow */\r\n\r\n  .tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n  /* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n  .tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/modalidades/modalidad.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/modalidades/modalidad.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n    <b>INGRESO MODALIDAD</b>\n  </div>\n  <form #modalidadForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n    <tr  colspan=\"2\">\n      <td width = \"10%\"><font color=\"red\">*</font>Zona:</td>\n      <td>\n        <div class=\"typeHead\">\n          <input type=\"text\" list=\"zonas\" id=\"zonanom\" name=\"zonanom\" #name=\"ngModel\"  [(ngModel)]=\"modalidadesService.selectedModalidad.zonanom\" placeholder=\"Zonas\"/> \n          <datalist id=\"zonas\" >\n              <select id =\"zsel\" >\n                <option *ngFor=\"let zona of zonasService.zonas\" id={{zona.zonaid}} value={{zona.zonanom}}></option>\n              </select>\n          </datalist>\n        </div>\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"10%\"><font color=\"red\">*</font>Nombre:</td>\n      <td>\n        <input type=\"hidden\" name=\"modalidadid\" #_id=\"ngModel\" [(ngModel)]=\"modalidadesService.selectedModalidad.modalidadid\"> \n        <input type=\"text\" name=\"modalidadnom\" #name=\"ngModel\" [(ngModel)]=\"modalidadesService.selectedModalidad.modalidadnom\" placeholder=\"Modalidad\">\n      </td>\n    </tr>\n    <tr >\n      <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(modalidadForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addModalidad(modalidadForm)\">Guardar</button>\n      </td>\n    </tr>\n    <tr>\n        <td colspan=\"2\">\n        <font  size=\"1\" color=\"red\">* Campos obligatorios</font>\n      </td>\n    </tr>\n  </table>\n</form>\n<table style=\"width:100%\"> \n  <tr>\n    <th colspan=\"4\">Listado Modalidades</th>\n  </tr>\n  <tr>\n    <td><i>Nombre</i></td>\n    <td colspan=\"4\"><i>Zona</i></td>\n  </tr>\n  <tr *ngFor=\"let modalidad of modalidadesService.modalidad\">\n    <td colspan=\"2\">{{ modalidad.modalidadnom }}</td>\n    <td colspan=\"2\">{{ modalidad.zonanom }}</td>\n    <td>\n      <a style=\"cursor:pointer;\" (click)=\"editModalidad(modalidad)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/>\n      </a>\n      <a style=\"cursor:pointer;\" (click)=\"deleteModalidad(modalidad.modalidadid, modalidadForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n    </td>\n  </tr>\n</table>\n</div> \n"

/***/ }),

/***/ "./src/app/components/modalidades/modalidad.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/modalidades/modalidad.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalidadComponent", function() { return ModalidadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modalidad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/modalidad.service */ "./src/app/services/modalidad.service.ts");
/* harmony import */ var _services_zonas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/zonas.service */ "./src/app/services/zonas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalidadComponent = /** @class */ (function () {
    function ModalidadComponent(modalidadesService, zonasService) {
        this.modalidadesService = modalidadesService;
        this.zonasService = zonasService;
    }
    ModalidadComponent.prototype.ngOnInit = function () {
        this.getModalidad();
        this.getZona();
    };
    ModalidadComponent.prototype.addModalidad = function (form) {
        var _this = this;
        var zonaid = document.querySelector("#zonas option[value='" + form.value.zonanom + "']").id;
        form.value.zonaid = zonaid;
        if (parseInt(form.value.zonaid, 10) > 0 && form.value.modalidadnom) {
            if (form.value.modalidadid) {
                this.modalidadesService.putModalidad(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Modalidad Editada' });
                });
            }
            else {
                this.modalidadesService.postModalidad(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Modalidad Ingresada' });
                });
            }
            ;
        }
        else {
            alert('Debe ingresar Zona y Modalidad');
        }
    };
    ModalidadComponent.prototype.getModalidad = function () {
        var _this = this;
        this.modalidadesService.getModalidad()
            .subscribe(function (res) {
            _this.modalidadesService.modalidad = res;
        });
    };
    ModalidadComponent.prototype.getZona = function () {
        var _this = this;
        this.zonasService.getZona()
            .subscribe(function (res) {
            _this.zonasService.zonas = res;
        });
    };
    ModalidadComponent.prototype.editModalidad = function (modalidad) {
        this.modalidadesService.selectedModalidad = modalidad;
    };
    ModalidadComponent.prototype.deleteModalidad = function (modalidadid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar la Modalidad?')) {
            this.modalidadesService.deleteModalidad(modalidadid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Modalidad Borrada' });
            });
        }
    };
    ModalidadComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getModalidad();
            this.getZona();
        }
    };
    ModalidadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modalidad',
            template: __webpack_require__(/*! ./modalidad.component.html */ "./src/app/components/modalidades/modalidad.component.html"),
            styles: [__webpack_require__(/*! ./modalidad.component.css */ "./src/app/components/modalidades/modalidad.component.css")],
            providers: [_services_modalidad_service__WEBPACK_IMPORTED_MODULE_1__["ModalidadesService"], _services_zonas_service__WEBPACK_IMPORTED_MODULE_2__["ZonasService"]]
        }),
        __metadata("design:paramtypes", [_services_modalidad_service__WEBPACK_IMPORTED_MODULE_1__["ModalidadesService"],
            _services_zonas_service__WEBPACK_IMPORTED_MODULE_2__["ZonasService"]])
    ], ModalidadComponent);
    return ModalidadComponent;
}());



/***/ }),

/***/ "./src/app/components/noticias/noticias.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\ntextarea { \r\n    height: 200px; \r\n}"

/***/ }),

/***/ "./src/app/components/noticias/noticias.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n    <b>INGRESO NOTICIA</b>\n  </div>\n  <form #noticiaForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n    <tr  colspan=\"2\">\n      <td width = \"10%\">Equipo:</td>\n      <td>\n        <div class=\"typeHead\">\n          <input list=\"equipos\" id=\"equiponom\" name=\"equiponom\" #name=\"ngModel\"  [(ngModel)]=\"equiposService.selectedEquipo.equiponom\" placeholder=\"Equipos\" /> \n          <datalist id=\"equipos\" >\n              <select id =\"esel\" >\n                <option *ngFor=\"let equipo of equiposService.equipo\" id={{equipo.equipoid}} value={{equipo.equiponom}}></option>\n              </select>\n          </datalist>\n        </div>\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"10%\">Fecha:</td>\n      <td>\n        <input type=\"hidden\" name=\"noticiasid\" #_id=\"ngModel\" [(ngModel)]=\"noticiasService.selectedNoticia.noticiasid\"> \n        <input type=\"hidden\" name=\"UsuariosAli\" #_id=\"ngModel\" [(ngModel)]=\"noticiasService.selectedNoticia.UsuariosAli\"> \n        <input type=\"date\" name=\"noticiasfec\" #name=\"ngModel\" [(ngModel)]=\"noticiasService.selectedNoticia.noticiasfec\" placeholder=\"Fecha\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"10%\">Titulo:</td>\n      <td>\n        <input type=\"text\" name=\"noticiascab\" #name=\"ngModel\" [(ngModel)]=\"noticiasService.selectedNoticia.noticiascab\" placeholder=\"Titulo\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"10%\">Cabezal:</td>\n      <td>\n        <input type=\"text\" name=\"noticiasdet\" #name=\"ngModel\" [(ngModel)]=\"noticiasService.selectedNoticia.noticiasdet\" placeholder=\"Cabezal\">\n      </td>\n    </tr>\n    <tr  colspan=\"2\" >\n      <td width = \"10%\">Detalle:</td>\n      <td>\n        <textarea type=\"text\" name=\"noticiastex\" #name=\"ngModel\" [(ngModel)]=\"noticiasService.selectedNoticia.noticiastex\" placeholder=\"Detalle\">\n        </textarea>\n      </td>\n    </tr>\n    <tr  colspan=\"2\" > \n      <td width = \"10%\">Foto:</td>\n      <td>\n        <input type=\"file\" id=\"noticiasfot\" name=\"noticiasfot\" placeholder=\"Foto\" (change)=\"onFileChanged($event)\">\n      </td>\n    </tr>\n    <tr >\n      <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(noticiaForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addNoticia(noticiaForm)\">Guardar</button>\n      </td>\n    </tr>\n  </table>\n</form>\n<table style=\"width:100%\" id=\"TNot\"> \n  <tr>\n    <th colspan=\"4\">Listado Noticias</th>\n  </tr>\n\n  <tr>\n    <th colspan=\"1\">Filtro por Cabezal</th>\n    <th colspan=\"4\"><input type=\"text\" id=\"BNot\" (keyup)=\"Buscar()\" placeholder=\"Nombre\"></th>\n  </tr>\n\n  <tr>\n    <td ><i>Titulo</i></td>\n    <td colspan=\"4\"><i>Fecha</i></td>\n  </tr>\n  <tr *ngFor=\"let noticia of noticiasService.noticias\">\n    <td colspan=\"2\">{{ noticia.noticiascab }}</td>\n    <td colspan=\"2\">{{ noticia.noticiasfec }}</td>\n    <td>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"editNoticia(noticia)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Editar noticia</span>\n      </div>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"deleteNoticia(noticia.noticiasid, noticiaForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Borrar noticia</span>\n      </div>\n    </td>\n  </tr>\n</table>\n</div> \n"

/***/ }),

/***/ "./src/app/components/noticias/noticias.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.ts ***!
  \***********************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/noticias.service */ "./src/app/services/noticias.service.ts");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(equiposService, noticiasService, userLoginService) {
        this.equiposService = equiposService;
        this.noticiasService = noticiasService;
        this.userLoginService = userLoginService;
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        this.getEquipo();
        this.getNoticia();
    };
    NoticiasComponent.prototype.addNoticia = function (form) {
        var _this = this;
        if (document.querySelector("#equipos option[value='" + form.value.equiponom + "']") == null) {
            form.value.equipoid = 0;
        }
        else {
            var equipoid = document.querySelector("#equipos option[value='" + form.value.equiponom + "']").id;
            form.value.equipoid = equipoid;
        }
        console.log(form.value);
        if (form.value.noticiasid) {
            form.value.noticiasfot = this.f2;
            this.noticiasService.putNoticia(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Noticia Editada' });
            });
        }
        else {
            form.value.noticiasfot = this.f2;
            this.GetUsr();
            form.value.UsuariosAli = this.userlog;
            this.noticiasService.postNoticia(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Noticia Ingresada' });
            });
        }
        ;
    };
    //Guardo la imagen seleccionada
    NoticiasComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
            _this.f2 = reader.result;
            _this.f2 = _this.f2.split(',')[1];
        };
    };
    NoticiasComponent.prototype.getEquipo = function () {
        var _this = this;
        this.equiposService.getEquipo()
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
    };
    NoticiasComponent.prototype.getNoticia = function () {
        var _this = this;
        this.noticiasService.getNoticia()
            .subscribe(function (res) {
            _this.noticiasService.noticias = res;
        });
    };
    ;
    NoticiasComponent.prototype.Buscar = function () {
        // Declare variables 
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("BNot");
        filter = input.value.toUpperCase();
        table = document.getElementById("TNot");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query #F5A9A9
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    NoticiasComponent.prototype.editNoticia = function (noticia) {
        this.noticiasService.selectedNoticia = noticia;
        this.equiposService.selectedEquipo.equiponom = this.noticiasService.selectedNoticia.equiponom;
    };
    NoticiasComponent.prototype.deleteNoticia = function (noticiaid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar la Noticia?')) {
            this.noticiasService.deleteNoticia(noticiaid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Noticia Borrada' });
            });
        }
    };
    NoticiasComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getEquipo();
            this.getNoticia();
        }
    };
    NoticiasComponent.prototype.GetUsr = function () {
        var usrlog = this.userLoginService.getUserLoggedIn();
        if (usrlog) {
            this.userlog = usrlog.username;
        }
        ;
    };
    NoticiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noticia',
            template: __webpack_require__(/*! ./noticias.component.html */ "./src/app/components/noticias/noticias.component.html"),
            styles: [__webpack_require__(/*! ./noticias.component.css */ "./src/app/components/noticias/noticias.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_1__["EquiposService"], _services_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]]
        }),
        __metadata("design:paramtypes", [_services_equipos_service__WEBPACK_IMPORTED_MODULE_1__["EquiposService"],
            _services_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"],
            _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/components/pagoequipos/pagoequipos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/pagoequipos/pagoequipos.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "datalist { \r\n    display: \"0\";\r\n  }\r\n\r\n  .tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n  /* Tooltip text */\r\n\r\n  .tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n  /* Tooltip arrow */\r\n\r\n  .tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n  /* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n  .tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/pagoequipos/pagoequipos.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagoequipos/pagoequipos.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n      <b>INGRESO DE PAGO</b>\n  </div>\n  <form #pagoequipoForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Equipo:</td>\n      <td>\n          <input type=\"text\" readonly name=\"equiponom\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.equiponom\" placeholder=\"Equipo\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Fecha:</td>\n      <td>\n          <input type=\"hidden\" name=\"UsuariosId\" #_id=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.UsuariosId\"> \n          <input type=\"hidden\" name=\"pagoequipoid\" #_id=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipoid\"> \n          <input type=\"date\" name=\"pagoequipofec\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipofec\" placeholder=\"Fecha pago\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Medio de pago:</td>\n      <td>\n          <input type=\"text\" name=\"pagoequipomedio\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipomedio\" placeholder=\"Medio de pago\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Monto ($U):</td>\n      <td>\n          <input type=\"text\" name=\"pagoequipototal\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipototal\" placeholder=\"Total pago\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n        <td width = \"30%\">Referencia:</td>\n        <td>\n            <input type=\"text\" name=\"pagoequiporef\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequiporef\" placeholder=\"Referencia\">\n        </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Observaciones:</td>\n      <td>\n          <input type=\"text\" name=\"pagoequipoobs\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipoobs\" placeholder=\"Observaciones\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\" >\n      <td width = \"30%\">Factura:</td>\n      <td>\n          <input type=\"file\" id=\"pagoequipofactura\" name=\"pagoequipofactura\" placeholder=\"Foto\" (change)=\"onFileChanged($event)\">\n      </td>\n      </tr>\n      <tr  colspan=\"2\">\n      <td colspan=\"2\">\n          <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(pagoequipoForm)\">Borrar</button>\n          <button class=\"btn left\" (click)=\"addPagoequipo(pagoequipoForm)\">Guardar</button>\n      </td>\n      </tr>\n  </table>\n  </form>\n  <table style=\"width:100%\"> \n  <tr>\n      <th colspan=\"5\">Listado de pagos</th>\n  </tr>\n  <tr>\n      <td width = \"25%\"><i>Equipo </i></td>\n      <td width = \"25%\"><i>Fecha de pago </i></td>\n      <td width = \"25%\" colspan=\"5\"><i>Total $U</i></td>\n  </tr>\n  <tr *ngFor=\"let pagoequipo of pagoequiposService.pagoequipos\">\n      <td >{{ pagoequipo.equiponom}}</td>\n      <td >{{ pagoequipo.pagoequipofec }}</td>\n      <td >{{ pagoequipo.pagoequipototal }}</td>\n      \n      <td width = \"15%\">\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"editPagoequipo(pagoequipo)\">\n          <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/> \n      </a>\n      <span class=\"tooltiptext\">Editar pago de equipo</span>\n      </div>\n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"deletePagoequipo(pagoequipo.pagoequipoid, pagoequipoForm)\">\n          <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Borrar pago de equipo</span>\n      </div>\n      </td>\n  </tr>\n  </table>\n  </div>  "

/***/ }),

/***/ "./src/app/components/pagoequipos/pagoequipos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagoequipos/pagoequipos.component.ts ***!
  \*****************************************************************/
/*! exports provided: PagoequiposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoequiposComponent", function() { return PagoequiposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var src_app_services_pagoequipos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pagoequipos.service */ "./src/app/services/pagoequipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagoequiposComponent = /** @class */ (function () {
    function PagoequiposComponent(usuariosService, equiposService, pagoequiposService, userLoginService) {
        this.usuariosService = usuariosService;
        this.equiposService = equiposService;
        this.pagoequiposService = pagoequiposService;
        this.userLoginService = userLoginService;
    }
    PagoequiposComponent.prototype.ngOnInit = function () {
        this.getUsuarioLogeado();
        this.getEquipo();
        this.fecins();
    };
    //Cargo fecha de hoy al ingresar a la pagina en fecha de pago
    PagoequiposComponent.prototype.fecins = function () {
        var d = new Date().toISOString().split('T')[0];
        this.pagoequiposService.selectedPagoequipo.pagoequipofec = d;
    };
    PagoequiposComponent.prototype.addPagoequipo = function (form) {
        var _this = this;
        form.value.equipoid = this.pagoequiposService.selectedPagoequipo.equipoid;
        form.value.UsuariosId = this.userid;
        form.value.pagoequipofactura = this.f2;
        if (form.value.pagoequipoid) {
            this.pagoequiposService.putPagoequipo(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Pago del equipo Editado' });
            });
        }
        else {
            this.pagoequiposService.postPagoequipo(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Pago del equipo Ingresado' });
            });
        }
        ;
    };
    //Guardo la imagen seleccionada
    PagoequiposComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
            _this.f2 = reader.result;
            _this.f2 = _this.f2.split(',')[1];
        };
    };
    PagoequiposComponent.prototype.getUsuarioLogeado = function () {
        var _this = this;
        var usrlog = this.userLoginService.getUserLoggedIn();
        if (usrlog) {
            this.userrol = usrlog.rol;
            this.userid = usrlog.id;
            if (isNaN(usrlog.equipo)) {
                var error = 1;
            }
            else {
                this.equiposService.getEquipoid(usrlog.equipo)
                    .subscribe(function (res) {
                    var equipojug = res;
                    _this.pagoequiposService.selectedPagoequipo.equiponom = equipojug[0].equiponom;
                    _this.pagoequiposService.selectedPagoequipo.equipoid = equipojug[0].equipoid;
                    _this.pagoequiposService.getPagoequipo(_this.pagoequiposService.selectedPagoequipo.equipoid)
                        .subscribe(function (res) {
                        _this.pagoequiposService.pagoequipos = res;
                    });
                });
            }
        }
    };
    PagoequiposComponent.prototype.getEquipo = function () {
        var _this = this;
        this.equiposService.getEquipo()
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
    };
    PagoequiposComponent.prototype.editPagoequipo = function (pagoequipo) {
        this.pagoequiposService.selectedPagoequipo = pagoequipo;
        this.getUsuarioLogeado();
    };
    PagoequiposComponent.prototype.deletePagoequipo = function (Pagoequiposid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar el pago del equipo?')) {
            this.pagoequiposService.deletePagoequipo(Pagoequiposid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Pago del equipo Borrado' });
            });
        }
    };
    PagoequiposComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getUsuarioLogeado();
            this.getEquipo();
        }
    };
    PagoequiposComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-pagoequipo',
            template: __webpack_require__(/*! ./pagoequipos.component.html */ "./src/app/components/pagoequipos/pagoequipos.component.html"),
            styles: [__webpack_require__(/*! ./pagoequipos.component.css */ "./src/app/components/pagoequipos/pagoequipos.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"], src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"], src_app_services_pagoequipos_service__WEBPACK_IMPORTED_MODULE_4__["PagoequiposService"], _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"],
            src_app_services_pagoequipos_service__WEBPACK_IMPORTED_MODULE_4__["PagoequiposService"],
            _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]])
    ], PagoequiposComponent);
    return PagoequiposComponent;
}()); //PagoequiposComponent



/***/ }),

/***/ "./src/app/components/partidos/partidos.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/partidos/partidos.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/partidos/partidos.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/partidos/partidos.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n<div align=\"left\">\n    <b>INGRESO PARTIDOS</b>\n</div>\n<form #partidoForm=\"ngForm\"> \n<table style=\"width:100%\" style=\"border: 2px solid black;\">\n    <tr  colspan=\"2\">\n    <td width = \"10%\">Campeonato:</td>\n        <td>\n        <input type=\"text\" readonly id=\"campeonatonom\" name=\"campeonatonom\" [(ngModel)]='campeonatosService.selectedCampeonato.campeonatonom' placeholder=\"Campeonatos\"/>\n        </td>\n    </tr>    \n    <tr  colspan=\"2\">\n    <td width = \"30%\"><font color=\"red\">*</font>Equipo 1:</td>\n    <td>\n        <div class=\"typeHead\">\n        <input type=\"text\" list=\"equipos1\" id=\"equiponom1\" name=\"equiponom1\" [(ngModel)]='partidosService.selectedPartido.equiponom1' placeholder=\"Equipos\"/>\n        <datalist id=\"equipos1\">\n            <select>\n            <option *ngFor=\"let equipo of equiposService.equipo\" id={{equipo.equipoid}} value={{equipo.equiponom}}></option>\n            </select>\n        </datalist>\n        </div>\n    </td>\n    </tr>\n    <tr  colspan=\"2\">\n    <td width = \"30%\"><font color=\"red\">*</font>Equipo 2:</td>\n    <td>\n        <div class=\"typeHead\">\n        <input type=\"text\" list=\"equipos2\" id=\"equiponom2\" name=\"equiponom2\" [(ngModel)]='partidosService.selectedPartido.equiponom2' placeholder=\"Equipos\"/>\n        <datalist id=\"equipos2\">\n            <select>\n            <option *ngFor=\"let equipo of equiposService.equipo\" id={{equipo.equipoid}} value={{equipo.equiponom}}></option>\n            </select>\n        </datalist>\n        </div>\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\"><font color=\"red\">*</font>Nro. de fecha:</td>\n    <td>\n        <input type=\"text\" name=\"PartidosFecJug\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosFecJug\" placeholder=\"Nro. de fecha\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\"><font color=\"red\">*</font>Nom. de fecha:</td>\n    <td>\n        <input type=\"text\" name=\"PartidosNomJug\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosNomJug\" placeholder=\"Nombre de fecha\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\">Fecha CLASIFICATORIO:</td>\n    <td>\n        <input type=\"text\" list=\"fechas\" name=\"PartidosNomCla\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosNomCla\" placeholder=\"Nombre de fecha CLASIFICATORIO\">\n        <datalist id=\"fechas\">\n            <option value=\"\"> \n            <option value=\"FEC 1\">\n            <option value=\"FEC 2\">\n            <option value=\"FEC 3\">\n            <option value=\"FEC 4\">\n            <option value=\"FEC 5\">\n            <option value=\"FEC 6\">\n            <option value=\"FEC 7\">\n            <option value=\"FEC 8\">\n            <option value=\"FEC 9\">\n            <option value=\"FEC 10\">\n            <option value=\"FEC 11\">\n            <option value=\"FEC 12\">\n            <option value=\"FEC 13\">\n            <option value=\"FEC 14\">\n            <option value=\"FEC 15\">\n            <option value=\"FEC 16\">\n            <option value=\"FEC 17\">\n            <option value=\"FEC 18\">\n            <option value=\"FEC 19\">\n            <option value=\"FEC 20\">\n        </datalist> \n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\">Fecha del partido:</td>\n    <td>\n        <input type=\"hidden\" name=\"PartidosId\" #_id=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosId\"> \n        <input type=\"date\" name=\"PartidosFec\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosFec\" placeholder=\"Fecha partido\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\">Hora:</td>\n    <td>\n        <input type=\"text\" name=\"PartidosHor\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosHor\" placeholder=\"Hora partido\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\">Complejo:</td>\n    <td>\n        <input type=\"text\" name=\"PartidosComplejo\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosComplejo\" placeholder=\"Complejo\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\">Cancha:</td>\n    <td>\n        <input type=\"text\" name=\"PartidosCan\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosCan\" placeholder=\"Cancha\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\">Resultado equipo 1:</td>\n    <td>\n        <input type=\"text\" readonly name=\"Equipo1Res\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.Equipo1Res\" placeholder=\"Resultado 1\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\">Resultado equipo 2:</td>\n    <td>\n        <input type=\"text\" readonly name=\"Equipo2Res\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.Equipo2Res\" placeholder=\"Resultado 2\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\" >\n    <td width = \"30%\">Observaciónes:</td>\n    <td>\n        <input type=\"text\" name=\"PartidosObs\" #name=\"ngModel\" [(ngModel)]=\"partidosService.selectedPartido.PartidosObs\" placeholder=\"Observaciónes\">\n    </td>\n    </tr>\n    <tr  colspan=\"2\">\n    <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(partidoForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addPartido(partidoForm)\">Guardar</button>\n    </td>\n    </tr>\n    <tr>\n        <td colspan=\"2\">\n        <font  size=\"1\" color=\"red\">* Campos obligatorios</font>\n        </td>\n    </tr>\n</table>\n</form>\n<table style=\"width:100%\" id=\"TPar\"> \n<tr>\n    <th colspan=\"8\">Listado de partidos</th>\n</tr>\n\n<tr>\n    <th colspan=\"2\">Filtro por Numero de fecha</th>\n    <th colspan=\"5\"><input type=\"number\" id=\"BPar\" (keyup)=\"Buscar()\" placeholder=\"Nro. Fecha\"></th>\n</tr>\n\n<tr>\n    <th style=\"width: 12%\"><i>Nro fecha</i></th>\n    <th style=\"width: 30%\"><i>Equipo 1</i></th>\n    <th style=\"width: 30%\"><i>Equipo 2</i></th>\n    <th style=\"width: 13%\"><i>Fecha</i></th>\n</tr>\n<tr *ngFor=\"let partido of partidosService.partidos\">\n    <td style=\"width: 12%\">{{ partido.PartidosFecJug }}</td>\n    <td style=\"width: 30%\">{{ partido.equiponom1}}</td>\n    <td style=\"width: 30%\">{{ partido.equiponom2 }}</td>\n    <td style=\"width: 13%\">{{ partido.PartidosFec }}</td>\n    <td>\n    <div class=\"tooltip\">\n    <a style=\"cursor:pointer;\" (click)=\"editPartido(partido)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/> \n    </a>\n    <span class=\"tooltiptext\">Editar partido</span>\n    </div>\n    <div class=\"tooltip\">\n    <a style=\"cursor:pointer;\" (click)=\"deletePartido(partido.PartidosId, partidoForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n    </a>\n    <span class=\"tooltiptext\">Borrar partido</span>\n    </div>\n    <div class=\"tooltip\">\n    <a href=\"#\"  [routerLink]=\"['../../jugpar', partido.PartidosId, partido.equipoid1]\">\n        <img width=\"20\" tooltip=\"Top tooltip\" src=\"assets/jugador.png\"/>\n    </a>\n    <span class=\"tooltiptext\">Administrar jugadores de equipo 1</span>\n    </div>\n    <div class=\"tooltip\">\n    <a href=\"#\"  [routerLink]=\"['../../jugpar', partido.PartidosId, partido.equipoid2]\">\n        <img width=\"20\" tooltip=\"Top tooltip\" src=\"assets/jugador.png\"/>\n    </a>\n    <span class=\"tooltiptext\">Administrar jugadores de equipo 2</span>\n    </div>\n    </td>\n</tr>\n</table>\n</div>  \n"

/***/ }),

/***/ "./src/app/components/partidos/partidos.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/partidos/partidos.component.ts ***!
  \***********************************************************/
/*! exports provided: PartidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosComponent", function() { return PartidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_campeonatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/campeonatos.service */ "./src/app/services/campeonatos.service.ts");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
/* harmony import */ var src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/jupars.service */ "./src/app/services/jupars.service.ts");
/* harmony import */ var _services_jugadores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/jugadores.service */ "./src/app/services/jugadores.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PartidosComponent = /** @class */ (function () {
    function PartidosComponent(campeonatosService, equiposService, partidosService, jugadoresService, jugparsService, route, router) {
        this.campeonatosService = campeonatosService;
        this.equiposService = equiposService;
        this.partidosService = partidosService;
        this.jugadoresService = jugadoresService;
        this.jugparsService = jugparsService;
        this.route = route;
        this.router = router;
    }
    PartidosComponent.prototype.ngOnInit = function () {
        this.CamId = this.route.snapshot.params.id;
        this.getCanEquipocam();
        this.getCampeonato();
        this.getPartido();
    };
    PartidosComponent.prototype.addPartido = function (form) {
        var _this = this;
        //Validaciones
        if (document.querySelector("#equipos1 option[value='" + form.value.equiponom1 + "']") == null) {
            alert('Debe ingresar un Equipo valido');
        }
        else {
            if (document.querySelector("#equipos2 option[value='" + form.value.equiponom2 + "']") == null) {
                alert('Debe ingresar un Equipo valido');
            }
            else {
                var equipoid1 = document.querySelector("#equipos1 option[value='" + form.value.equiponom1 + "']").id;
                form.value.equipoid1 = equipoid1;
                var equipoid2 = document.querySelector("#equipos2 option[value='" + form.value.equiponom2 + "']").id;
                form.value.equipoid2 = equipoid2;
                if (equipoid1 === equipoid2) {
                    alert('Los equipos del partido deben ser diferentes');
                }
                else {
                    form.value.campeonatoid = this.CamId;
                    if (form.value.PartidosFecJug) {
                    }
                    else {
                        form.value.PartidosFecJug = 0;
                    }
                    if (form.value.PartidosFecJug || form.value.PartidosNomJug) {
                        /////////////////////////////////////////////// 
                        if (form.value.PartidosId) {
                            this.partidosService.putPartido(form.value)
                                .subscribe(function (res) {
                                _this.resetForm(form);
                                M.toast({ html: 'Partido Editado' });
                            });
                        }
                        else {
                            this.partidosService.postPartido(form.value)
                                .subscribe(function (res) {
                                //Obtengo el id que se le ingreso al partido
                                var obj = JSON.parse(JSON.stringify(res));
                                var ParId = obj['id'];
                                //Se cargan por defecto todos los jugadores habilitados
                                //Equipo 1
                                _this.jugadoresService.getJugadorEncargado(form.value.equipoid1)
                                    .subscribe(function (res) {
                                    _this.jugadoresService.jugador = res;
                                    for (var i = 0; i < _this.jugadoresService.jugador.length; i++) {
                                        //Ingreso jugadores del equipo 1
                                        var JugPar;
                                        form.value.PartidosId = ParId;
                                        form.value.jugadorid = _this.jugadoresService.jugador[i].jugadorid;
                                        _this.jugparsService.postJugparTot(form.value)
                                            .subscribe(function (res) {
                                            if (util__WEBPACK_IMPORTED_MODULE_7__["error"]) {
                                                M.toast({ html: 'Error en ingreso de jugadores' });
                                            }
                                        });
                                    }
                                });
                                //Equipo 2
                                _this.jugadoresService.getJugadorEncargado(form.value.equipoid2)
                                    .subscribe(function (res) {
                                    _this.jugadoresService.jugador = res;
                                    for (var i = 0; i < _this.jugadoresService.jugador.length; i++) {
                                        //Ingreso jugadores del equipo 2
                                        var JugPar;
                                        form.value.PartidosId = ParId;
                                        form.value.jugadorid = _this.jugadoresService.jugador[i].jugadorid;
                                        _this.jugparsService.postJugparTot(form.value)
                                            .subscribe(function (res) {
                                            if (util__WEBPACK_IMPORTED_MODULE_7__["error"]) {
                                                M.toast({ html: 'Error en ingreso de jugadores' });
                                            }
                                        });
                                    }
                                });
                                _this.resetForm(form);
                                M.toast({ html: 'Partido Ingresado' });
                            });
                        }
                        ;
                    }
                    else {
                        alert('Debe ingresar Nro de Fecha o Nombre de Fecha');
                    } //If
                }
            }
        } //IFs
    };
    PartidosComponent.prototype.getCanEquipocam = function () {
        var _this = this;
        this.equiposService.getCanEquipocam(this.CamId)
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
    };
    PartidosComponent.prototype.getCampeonato = function () {
        var _this = this;
        this.campeonatosService.getCampeonato()
            .subscribe(function (res) {
            _this.campeonatosService.campeonatos = res;
            _this.campeonatosService.getCampeonatonom(_this.CamId)
                .subscribe(function (res) {
                var camnom = res;
                _this.campeonatosService.selectedCampeonato.campeonatonom = camnom[0].campeonatonom;
            });
        });
    };
    PartidosComponent.prototype.getPartido = function () {
        var _this = this;
        this.partidosService.getPartido(this.CamId)
            .subscribe(function (res) {
            _this.partidosService.partidos = res;
            // this.j = 0;
            // for(var i=0; i<this.partidosService.partidos.length; i++){
            //   //Nombre del equipo 1
            //   this.equiposService.getEquipoid(this.partidosService.partidos[i].equipoid1)
            //   .subscribe(res => {
            //     var eqnom1 = res as Equipo; 
            //     this.enom1 = eqnom1[0].equiponom;
            //     console.log(i);
            //   })
            //   //Nombre del equipo 2
            //   this.equiposService.getEquipoid(this.partidosService.partidos[i].equipoid2)
            //   .subscribe(res => {
            //     var eqnom2 = res as Equipo; 
            //     this.enom2 = eqnom2[0].equiponom;
            //     console.log(i);
            //   }) 
            //   this.partidosService.partidos[this.j].equiponom1 = this.enom1;
            //   this.partidosService.partidos[this.j].equiponom2 = this.enom2;
            //   this.j += 1;
            // }
        });
    };
    PartidosComponent.prototype.editPartido = function (partido) {
        this.partidosService.selectedPartido = partido;
    };
    PartidosComponent.prototype.deletePartido = function (Partidosid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar el partido?')) {
            this.partidosService.deletePartido(Partidosid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Partido Borrado' });
            });
        }
    };
    PartidosComponent.prototype.Buscar = function () {
        // Declare variables 
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("BPar");
        filter = input.value.toUpperCase();
        table = document.getElementById("TPar");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query #F5A9A9
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    PartidosComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getCanEquipocam();
            this.getCampeonato();
            this.getPartido();
        }
    };
    PartidosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-partido',
            template: __webpack_require__(/*! ./partidos.component.html */ "./src/app/components/partidos/partidos.component.html"),
            styles: [__webpack_require__(/*! ./partidos.component.css */ "./src/app/components/partidos/partidos.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"], src_app_services_campeonatos_service__WEBPACK_IMPORTED_MODULE_3__["CampeonatosService"], _services_jugadores_service__WEBPACK_IMPORTED_MODULE_6__["JugadoresService"], src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__["PartidosService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_campeonatos_service__WEBPACK_IMPORTED_MODULE_3__["CampeonatosService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__["PartidosService"],
            _services_jugadores_service__WEBPACK_IMPORTED_MODULE_6__["JugadoresService"],
            src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_5__["JuparsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PartidosComponent);
    return PartidosComponent;
}()); //PartidosComponent



/***/ }),

/***/ "./src/app/components/partidosequipo/partidosequipo.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/partidosequipo/partidosequipo.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n   overflow-x: auto;\r\n}\r\n\r\n.right{\r\n   text-align: right;\r\n}\r\n\r\n.center{\r\n   text-align: center;\r\n}\r\n\r\n.odd tr, .odd td {\r\n   background: #d6d6d6;\r\n}\r\n\r\n.even tr, .even td {\r\n   background: #a6a6a6;\r\n}\r\n\r\n.tooltip {\r\n   position: relative;\r\n   display: inline-block;\r\n   border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n   visibility: hidden;\r\n   width: 120px;\r\n   background-color: #555;\r\n   color: #fff;\r\n   text-align: center;\r\n   padding: 5px 0;\r\n   border-radius: 6px;\r\n\r\n   /* Position the tooltip text */\r\n   position: absolute;\r\n   z-index: 1;\r\n   bottom: 125%;\r\n   left: 50%;\r\n   margin-left: -60px;\r\n\r\n   /* Fade in tooltip */\r\n   opacity: 0;\r\n   transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n   content: \"\";\r\n   position: absolute;\r\n   top: 100%;\r\n   left: 50%;\r\n   margin-left: -5px;\r\n   border-width: 5px;\r\n   border-style: solid;\r\n   border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n   visibility: visible;\r\n   opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/partidosequipo/partidosequipo.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/partidosequipo/partidosequipo.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"left\">\n    <b>FIXTURE DEL EQUIPO</b>\n</div>\n<div>\n    <table class=\"table\">\n        <tr >\n            <td><b>Fecha</b></td><td><b>Hora</b></td><td><b>Cancha</b></td><td class=\"center\"><b>Local</b></td><td><b>Res. 1</b></td><td><b>Res. 2</b></td><td class=\"center\"><b>Visitante</b></td>\n        </tr>\n\n        <tr class=\"odd\" *ngFor=\"let partido of partidosService.partidos; let ind=index\">\n          <td width=\"10%\">{{ partido.PartidosFec}}</td><td width=\"10%\">{{ partido.PartidosHor}}</td><td width=\"30%\">{{ partido.PartidosCan}}</td><td class=\"center\" width=\"17%\">{{ partido.equiponom1}}</td><td class = \"center\" width=\"5%\">{{ partido.Equipo1Res}}</td><td class = \"center\" width=\"5%\">{{ partido.Equipo2Res}}</td><td class=\"center\" width=\"17%\">{{ partido.equiponom2}}</td>\n          <td class=\"center\" width=\"6%\">\n            <div class=\"tooltip\">\n            <a href=\"#\"  [routerLink]=\"['../../viewjugadores', EqId, partido.PartidosId]\" >\n                <img width=\"20\" tooltip=\"Top tooltip\" src=\"assets/JUGADORES.png\"/>\n            </a>\n            <span class=\"tooltiptext\">Jugadores</span>\n            </div>\n          </td>\n        </tr>\n\n        <!--*ngIf=\"(ind + 1) % 2 != 0; else nuevafila\"\n          <ng-template #nuevafila>    \n        <tr class=\"even\">\n          <td>{{ partido.PartidosFec}}</td><td>{{ partido.PartidosHor}}</td><td>{{ partido.PartidosCan}}</td><td>{{ partido.equiponom1}}</td><td>{{ partido.Equipo1Res}}</td><td>{{ partido.Equipo2Res}}</td><td>{{ partido.equiponom2}}</td>\n        </tr>\n        </ng-template> \n      </div>   -->\n\n    </table>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/partidosequipo/partidosequipo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/partidosequipo/partidosequipo.component.ts ***!
  \***********************************************************************/
/*! exports provided: PartidosequipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosequipoComponent", function() { return PartidosequipoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartidosequipoComponent = /** @class */ (function () {
    function PartidosequipoComponent(partidosService, route, router) {
        this.partidosService = partidosService;
        this.route = route;
        this.router = router;
    }
    PartidosequipoComponent.prototype.ngOnInit = function () {
        this.EqId = this.route.snapshot.params.eq;
        this.getpartidosequipo();
    };
    PartidosequipoComponent.prototype.getpartidosequipo = function () {
        var _this = this;
        this.partidosService.getpartidosequipo(this.EqId)
            .subscribe(function (res) {
            _this.partidosService.partidos = res;
        });
    };
    PartidosequipoComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getpartidosequipo();
        }
    };
    PartidosequipoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-partidosequipo',
            template: __webpack_require__(/*! ./partidosequipo.component.html */ "./src/app/components/partidosequipo/partidosequipo.component.html"),
            styles: [__webpack_require__(/*! ./partidosequipo.component.css */ "./src/app/components/partidosequipo/partidosequipo.component.css")],
            providers: [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_2__["PartidosService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_2__["PartidosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PartidosequipoComponent);
    return PartidosequipoComponent;
}()); //PartidosComponent



/***/ }),

/***/ "./src/app/components/partidosfot/partidosfot.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/partidosfot/partidosfot.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/partidosfot/partidosfot.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/partidosfot/partidosfot.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n  <div align=\"left\">\n    <b>INGRESO DE FOTOS</b>\n  </div>\n  <form #partidosFotosForm=\"ngForm\"> \n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n    <tr  colspan=\"2\">\n      <td width = \"10%\">Campeonato:</td>\n        <td>\n          <input type=\"text\" readonly id=\"campeonatoid\" name=\"campeonatoid\" [(ngModel)]='camnom' placeholder=\"Campeonato\"/>\n        </td>\n    </tr>  \n    <tr  colspan=\"2\">\n      <td width = \"10%\">Fecha partido:</td>\n        <td>\n          <input type=\"text\" readonly id=\"PartidosId\" name=\"PartidosId\" [(ngModel)]='parfec' placeholder=\"Fecha partido\"/>\n        </td>\n    </tr>   \n    <tr  colspan=\"2\" > \n      <td width = \"30%\">Foto:</td>\n      <td>\n        <input type=\"file\" id=\"CamFecFotosFot\" name=\"CamFecFotosFot\" placeholder=\"Foto\" multiple (change)=\"onFileChanged($event)\">\n      </td>\n    </tr> \n\n    <tr >\n      <td colspan=\"2\">\n        <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(partidosFotosForm)\">Borrar</button>\n        <button class=\"btn left\" (click)=\"addCamFot(partidosFotosForm)\">Guardar</button>\n      </td>\n    </tr>\n  </table>\n</form>\n<table style=\"width:100%\"> \n  <tr>\n    <th colspan=\"5\">Listado de fotos del campeonato/partido</th>\n  </tr>\n  <tr>\n    <td width = \"25%\"><i>Campeonato</i></td>\n    <td width = \"25%\"><i>Fecha partido</i></td>\n    <td width = \"25%\" colspan=\"5\"><i>Foto</i></td>\n  </tr>\n  <tr *ngFor=\"let fotos of camFot\">\n    <td >{{ fotos.campeonatonom}}</td>\n    <td >{{ fotos.PartidosFec }}</td>\n    <td >\n      <img width=\"100\" height=\"70\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + fotos.CamFecFotosFot)\">\n    </td>\n\n    <td width = \"15%\"> \n      <div class=\"tooltip\">\n      <a style=\"cursor:pointer;\" (click)=\"deleteCamequipo(fotos.CamFecFotosId, partidosFotosForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n      <span class=\"tooltiptext\">Borrar foto</span>\n      </div>\n    </td>\n  </tr>\n</table>\n</div>  "

/***/ }),

/***/ "./src/app/components/partidosfot/partidosfot.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/partidosfot/partidosfot.component.ts ***!
  \*****************************************************************/
/*! exports provided: PartidosfotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosfotComponent", function() { return PartidosfotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartidosfotComponent = /** @class */ (function () {
    function PartidosfotComponent(partidosService, route, domSanitizer) {
        this.partidosService = partidosService;
        this.route = route;
        this.domSanitizer = domSanitizer;
    }
    PartidosfotComponent.prototype.ngOnInit = function () {
        this.CamId = this.route.snapshot.params.cam;
        this.ParId = this.route.snapshot.params.par;
        this.getPartido(this.ParId);
        this.getFotos(this.ParId);
    };
    PartidosfotComponent.prototype.addCamFot = function (form) {
        var _this = this;
        form.value.CamFecFotosFot = this.f2;
        form.value.campeonatoid = this.CamId;
        form.value.PartidosId = this.ParId;
        this.partidosService.postPartidoFot(form.value)
            .subscribe(function (res) {
            _this.resetForm(form);
            M.toast({ html: 'Fotos cargadas' });
        });
    };
    //Guardo la imagen seleccionada
    PartidosfotComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
            _this.f2 = reader.result;
            _this.f2 = _this.f2.split(',')[1];
        };
    };
    PartidosfotComponent.prototype.deleteCamequipo = function (CamFecFotosId, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar la foto?')) {
            this.partidosService.deletePartidoFot(CamFecFotosId)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Foto Borrada' });
            });
        }
    };
    PartidosfotComponent.prototype.getPartido = function (parid) {
        var _this = this;
        this.partidosService.getPartidoJug(parid)
            .subscribe(function (res) {
            _this.camnom = res[0].campeonatonom;
            _this.parfec = res[0].PartidosFec;
        });
    };
    PartidosfotComponent.prototype.getFotos = function (parid) {
        var _this = this;
        this.partidosService.getPartidoFot(parid)
            .subscribe(function (res) {
            _this.camFot = res;
        });
    };
    PartidosfotComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getPartido(this.ParId);
            this.getFotos(this.ParId);
        }
    };
    PartidosfotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partidosfot',
            template: __webpack_require__(/*! ./partidosfot.component.html */ "./src/app/components/partidosfot/partidosfot.component.html"),
            styles: [__webpack_require__(/*! ./partidosfot.component.css */ "./src/app/components/partidosfot/partidosfot.component.css")],
            providers: [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_3__["PartidosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], PartidosfotComponent);
    return PartidosfotComponent;
}());



/***/ }),

/***/ "./src/app/components/torneosopc/torneosopc.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/torneosopc/torneosopc.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/torneosopc/torneosopc.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/torneosopc/torneosopc.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<table align=\"center\" style=\"width:85%\" *ngIf = \"pantalla === 640\">\n  <tr style=\"background-color: #01DFA5;\">\n    <td style=\"text-align: center;\">\n      <a href=\"#\" [routerLink]=\"['../fixtureopci']\">\n        <font size=\"6\" color=\"black\">TEMPORADA 2019</font>\n      </a>\n    </td>\n    <td style=\"text-align: center;\">\n      <a href=\"#\" [routerLink]=\"['../clasificatorioopc']\">\n        <font size=\"6\" color=\"black\">CLASIFICATORIO 2019</font>\n      </a>\n    </td>\n  </tr>  \n</table>\n\n<table align=\"center\" style=\"width:60%\" *ngIf = \"pantalla === 360\">\n  <tr style=\"background-color: #01DFA5;\">\n    <td style=\"text-align: center;\">\n      <a href=\"#\" [routerLink]=\"['../fixtureopci']\">\n        <font size=\"2\" color=\"black\">TEMPORADA 2019</font>\n      </a>\n    </td>\n    <td style=\"text-align: center;\">\n      <a href=\"#\" [routerLink]=\"['../clasificatorioopc']\">\n        <font size=\"2\" color=\"black\">CLASIFICATORIO 2019</font>\n      </a>\n    </td>\n  </tr>  \n</table>\n<br><br><br>"

/***/ }),

/***/ "./src/app/components/torneosopc/torneosopc.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/torneosopc/torneosopc.component.ts ***!
  \***************************************************************/
/*! exports provided: TorneosopcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneosopcComponent", function() { return TorneosopcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/parametros.service */ "./src/app/services/parametros.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TorneosopcComponent = /** @class */ (function () {
    function TorneosopcComponent(parametrosService, router) {
        this.parametrosService = parametrosService;
        this.router = router;
    }
    TorneosopcComponent.prototype.ngOnInit = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.getParametroCla();
    };
    TorneosopcComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    TorneosopcComponent.prototype.getParametroCla = function () {
        var _this = this;
        this.parametrosService.getParametro('HayClasificatorio')
            .subscribe(function (res) {
            //Obtengo el id que se le ingreso al partido
            var par = JSON.parse(JSON.stringify(res));
            _this.HayCla = par[0].ParametrosValInt;
            if (_this.HayCla == 0) {
                _this.router.navigateByUrl('/fixtureopci');
            }
        });
    };
    ;
    TorneosopcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-torneosopc',
            template: __webpack_require__(/*! ./torneosopc.component.html */ "./src/app/components/torneosopc/torneosopc.component.html"),
            styles: [__webpack_require__(/*! ./torneosopc.component.css */ "./src/app/components/torneosopc/torneosopc.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_1__["ParametrosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TorneosopcComponent);
    return TorneosopcComponent;
}());



/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"width: 70%;margin-left: 10px;\">\n  <form #usuarioForm=\"ngForm\"> \n    <div align=\"left\">\n      <b>INGRESO USUARIOS</b>\n    </div>\n    <table style=\"width:100%\" style=\"border: 2px solid black;\">\n        <tr  colspan=\"2\" >\n          <td width = \"20%\"><font color=\"red\">*</font>Nombre:</td>\n          <td>\n            <input type=\"hidden\" name=\"usuarioid\" #_id=\"ngModel\" [(ngModel)]= \"this.usuariosService.selectedUsuario.UsuariosId\"> \n            <input type=\"text\" name=\"usuarionom\" #name=\"ngModel\" [(ngModel)]= \"this.usuariosService.selectedUsuario.UsuariosNom\" placeholder=\"Nombre\" required=true>\n          </td>\n        </tr>\n        <tr  colspan=\"2\" >\n          <td width = \"20%\">Teléfono:</td>\n          <td>\n            <input type=\"text\" name=\"usuariotel\" #name=\"ngModel\" [(ngModel)]=\"this.usuariosService.selectedUsuario.UsuariosTel\" placeholder=\"Teléfono\">\n          </td>\n        </tr>\n        <tr  colspan=\"2\" >\n          <td width = \"20%\"><font color=\"red\">*</font>eMail:</td>\n          <td>\n            <input type=\"text\" name=\"usuariomai\" #name=\"ngModel\" [(ngModel)]=\"usuariosService.selectedUsuario.UsuariosMai\" placeholder=\"eMail\">\n          </td>\n        </tr>\n        <tr  colspan=\"2\" >\n          <td width = \"20%\"><font color=\"red\">*</font>Permisos:</td>\n          <td>\n            <input type=\"text\" list=\"permisos\" name=\"usuarioper\" id=\"usuarioper\" (change)='ShowEquipo($event.target.value)' #name=\"ngModel\" [(ngModel)]=\"usuariosService.selectedUsuario.UsuariosPer\" placeholder=\"Permisos\">\n            <datalist id=\"permisos\">\n                <option value=\"Administrador\" id=\"1\"> \n                <option value=\"Encargado\" id=\"2\">\n            </datalist> \n          </td>\n        </tr>\n        <tr colspan=\"2\" *ngIf= \"MuestroEquipo == 1\">\n          <td width = \"20%\">Equipo asociado:</td>\n          <td>\n            <div class=\"typeHead\">\n              <input type=\"hidden\" name=\"equipoidid\" id=\"equipoid\">\n              <input list=\"equipos\" id=\"equiponom\" name=\"equiponom\" #name=\"ngModel\"  [(ngModel)]=\"usuariosService.selectedUsuario.equiponom\" placeholder=\"Equipos\" /> \n              <datalist id=\"equipos\" >\n                  <select id =\"esel\" >\n                    <option *ngFor=\"let equipo of equiposService.equipo\" id={{equipo.equipoid}} value={{equipo.equiponom}}></option>\n                  </select>\n              </datalist>\n            </div>\n          </td>\n        </tr>\n        <tr  colspan=\"2\" >\n          <td width = \"20%\"><font color=\"red\">*</font>Alias:</td>\n          <td>\n            <input type=\"text\" name=\"usuarioali\" #name=\"ngModel\" [(ngModel)]=\"this.usuariosService.selectedUsuario.UsuariosAli\" placeholder=\"Alias\">\n          </td>\n        </tr>\n        <tr  colspan=\"2\" >\n          <td width = \"20%\"><font color=\"red\">*</font>Password:</td>\n          <td>\n            <input type=\"password\" name=\"usuariopas\" #name=\"ngModel\" [(ngModel)]=\"this.usuariosService.selectedUsuario.UsuariosPas\" placeholder=\"Password\">\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(usuarioForm)\">Borrar</button>\n            <button class=\"btn left\" (click)=\"addUsuario(usuarioForm)\">Guardar</button>\n          </td>\n        </tr>\n        <tr>\n            <td colspan=\"2\">\n            <font  size=\"1\" color=\"red\">* Campos obligatorios</font>\n          </td>\n        </tr>\n    </table>\n  </form>\n  <table style=\"width:100%\" id=\"TUsu\">  \n    <tr>\n      <th colspan=\"4\">Listado Usuarios</th>\n    </tr>\n\n    <tr>\n      <th colspan=\"1\">Filtro por Nombre</th>\n      <th colspan=\"3\"><input type=\"text\" id=\"BUsu\" (keyup)=\"Buscar()\" placeholder=\"Nombre\"></th>\n    </tr>\n\n    <tr>\n      <th style=\"width: 40%\"><i>Nombre</i></th>\n      <th style=\"width: 40%\" colspan=\"4\"><i>Alias</i></th>\n    </tr>\n    <tr *ngFor=\"let usuario of usuariosService.usuarios\">\n      <td style=\"width: 40%\" colspan=\"2\">{{ usuario.UsuariosNom }}</td>\n      <td style=\"width: 40%\" colspan=\"2\">{{ usuario.UsuariosAli }}</td>\n      <td>\n        <a style=\"cursor:pointer;\" (click)=\"editUsuario(usuario)\">\n          <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/>\n        </a>\n        <a style=\"cursor:pointer;\" (click)=\"deleteUsuario(usuario.UsuariosId, usuarioForm)\">\n          <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n        </a>\n      </td>\n    </tr>\n  </table>  \n</div>\n"

/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.ts ***!
  \***********************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_usuarios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(usuariosService, equiposService) {
        this.usuariosService = usuariosService;
        this.equiposService = equiposService;
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        this.getUsuario();
        this.getEquipo();
    };
    UsuariosComponent.prototype.addUsuario = function (form) {
        var _this = this;
        var permiso = document.querySelector("#permisos option[value='" + form.value.usuarioper + "']").id;
        form.value.usuarioper = permiso;
        var equipoid = document.querySelector("#equipos option[value='" + form.value.equiponom + "']").id;
        form.value.equipoid = equipoid;
        if (form.value.usuarionom && form.value.usuariomai && form.value.usuarioper && form.value.usuarioali && form.value.usuariopas) {
            if (form.value.usuarioid) {
                this.usuariosService.putUsuario(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    _this.getUsuario();
                    M.toast({ html: 'Usuario Editado' });
                });
            }
            else {
                this.usuariosService.postUsuario(form.value)
                    .subscribe(function (res) {
                    _this.getUsuario();
                    _this.resetForm(form);
                    M.toast({ html: 'Usuario Ingresado' });
                });
            }
            ;
        }
        else {
            alert('Debe ingresar Nombre, eMail, Permisos, Alias y Password');
        }
    };
    UsuariosComponent.prototype.getUsuario = function () {
        var _this = this;
        this.usuariosService.getUsuario()
            .subscribe(function (res) {
            _this.usuariosService.usuarios = res;
        });
    };
    UsuariosComponent.prototype.getEquipo = function () {
        var _this = this;
        this.equiposService.getEquipo()
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
    };
    UsuariosComponent.prototype.editUsuario = function (usuario) {
        this.usuariosService.selectedUsuario = usuario;
    };
    UsuariosComponent.prototype.deleteUsuario = function (usuarioid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar el Usuario?')) {
            this.usuariosService.deleteUsuario(usuarioid)
                .subscribe(function (res) {
                _this.getUsuario();
                _this.resetForm(form);
                M.toast({ html: 'Usuario Borrado' });
            });
        }
    };
    UsuariosComponent.prototype.Buscar = function () {
        // Declare variables 
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("BUsu");
        filter = input.value.toUpperCase();
        table = document.getElementById("TUsu");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    UsuariosComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.usuariosService.selectedUsuario = new _models_usuarios__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        }
    };
    UsuariosComponent.prototype.ShowEquipo = function (per) {
        if (per == "Encargado") {
            this.MuestroEquipo = 1;
        }
        else {
            this.MuestroEquipo = 0;
        }
    };
    UsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/components/usuarios/usuarios.component.html"),
            styles: [__webpack_require__(/*! ./usuarios.component.css */ "./src/app/components/usuarios/usuarios.component.css")],
            providers: [_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _services_equipos_service__WEBPACK_IMPORTED_MODULE_3__["EquiposService"]]
        }),
        __metadata("design:paramtypes", [_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _services_equipos_service__WEBPACK_IMPORTED_MODULE_3__["EquiposService"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ }),

/***/ "./src/app/components/viewequipos/viewequipos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/viewequipos/viewequipos.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.blocktext {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    font-size: 14pt;\r\n    color: black;\r\n}\r\n\r\n.textcenter {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    border: 1px solid black;\r\n}\r\n\r\n.tableh{\r\n    height: 30px;\r\n}\r\n\r\n/*----------- TOOL TIP----------- */\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n/*----------- CAJA ----------- */\r\n\r\n.caja { \r\n    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; \r\n    color: white; \r\n    font-size: 14px; \r\n    /*font-weight: 100;*/ \r\n    text-align: center; \r\n    background: black; \r\n    margin: 0 0 25px;\r\n    overflow: hidden; \r\n    /*padding: 20px; */\r\n    border-radius: 25px 0px 25px 0px; \r\n    -moz-border-radius: 25px 0px 25px 0px; \r\n    -webkit-border-radius: 25px 0px 25px 0px; \r\n    /*border: 1px solid #5878ca;*/\r\n}\r\n\r\n/*----------- Centrar en pantalla -----------*/\r\n\r\n.centrar{\r\n    text-align: center;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/viewequipos/viewequipos.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/viewequipos/viewequipos.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Galeria de IMAGENES-->\n<div class = \"centrar\" id=\"cargando\"><b>Cargando...</b></div>\n<table>\n<div style=\"display: inline;\" class=\"container\" *ngFor=\"let ima of equiposService.equipo; let ind=index\" >\n    <td >\n        <div >\n            <a href=\"#\" [routerLink]=\"['../equipodatos', ima.equipoid]\">\n                <img  width=\"300px\" height=\"200px\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + ima.equipofot)\">\n            </a>\n            \n            <!--(mouseenter) =\"mouseEnter('div a')\" (mouseleave) =\"mouseLeave('div A')\"\n                <a href=\"#\" [routerLink]=\"['../equipodatos', ima.equipoid]\">\n                <img  style=\"position:relative;top:40px;left:-200px;z-index: 1;height:100px;width:100px;\"\n                    [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + ima.equipoesc)\">\n            </a>-->\n        </div>\n        <a href=\"#\" [routerLink]=\"['../equipodatos', ima.equipoid]\">\n            <p class=\"blocktext\">\n                <img  width=\"30px\" height=\"30px\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + ima.equipoesc)\">\n                &nbsp;\n                <b>{{ima.equiponom}}</b>\n            </p>\n        </a>\n\n        <div class=\"caja\">{{ima.zonanom}}&nbsp;-&nbsp;{{ima.divisionalnom}}\n        </div>\n    </td>\n   \n\n    <!--EN CASO QUE SE QUIERA OTRO COMPORTAMIENTO DE ALGUNAS FILAS \n        *ngIf=\"(ind + 1) % 4 != 0; else nuevafila\" \n        <ng-template #nuevafila>   \n        <td>\n            <a href=\"#\" [routerLink]=\"['../usuarios']\">\n            <img width=\"300\" height=\"150\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + ima.equipofot)\">\n            </a>\n            <br><a href=\"#\" [routerLink]=\"['../usuarios']\"><p class=\"blocktext\">{{ima.equiponom}}</p></a>\n        </td>\n        <br>\n    </ng-template>--> \n</div> \n</table>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/viewequipos/viewequipos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/viewequipos/viewequipos.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewEquipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEquipoComponent", function() { return ViewEquipoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_viewequipos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/viewequipos.service */ "./src/app/services/viewequipos.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewEquipoComponent = /** @class */ (function () {
    function ViewEquipoComponent(viewequiposService, equiposService, domSanitizer) {
        this.viewequiposService = viewequiposService;
        this.equiposService = equiposService;
        this.domSanitizer = domSanitizer;
    }
    ViewEquipoComponent.prototype.ngOnInit = function () {
        //oculto label cargando...
        document.getElementById("cargando").style.visibility = "visible";
        this.getViewEquipo();
    };
    ViewEquipoComponent.prototype.ngAfterViewChecked = function () {
        //oculto label cargando...
        document.getElementById("cargando").style.visibility = "hidden";
    };
    ViewEquipoComponent.prototype.getViewEquipo = function () {
        var _this = this;
        this.equiposService.getEquipo()
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
    };
    // mouseEnter(a:string){
    //   this.count = 8;
    // }
    // mouseLeave(a:string){
    //   this.count = null;
    // }
    ViewEquipoComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getViewEquipo();
        }
    };
    ViewEquipoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewequipo',
            template: __webpack_require__(/*! ./viewequipos.component.html */ "./src/app/components/viewequipos/viewequipos.component.html"),
            styles: [__webpack_require__(/*! ./viewequipos.component.css */ "./src/app/components/viewequipos/viewequipos.component.css")],
            providers: [_services_viewequipos_service__WEBPACK_IMPORTED_MODULE_2__["ViewEquiposService"]]
        }),
        __metadata("design:paramtypes", [_services_viewequipos_service__WEBPACK_IMPORTED_MODULE_2__["ViewEquiposService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_3__["EquiposService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ViewEquipoComponent);
    return ViewEquipoComponent;
}());



/***/ }),

/***/ "./src/app/components/viewjugadores/viewjugadores.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/viewjugadores/viewjugadores.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\r\n   border: 1px solid black;\r\n }\r\n\r\n thead {\r\n   height: 100px;\r\n }\r\n\r\n .tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n }\r\n\r\n /* Tooltip text */\r\n\r\n .tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n \r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n \r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n }\r\n\r\n /* Tooltip arrow */\r\n\r\n .tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n }\r\n\r\n /* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n .tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n }"

/***/ }),

/***/ "./src/app/components/viewjugadores/viewjugadores.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/viewjugadores/viewjugadores.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" #content>\n\n<div align=\"left\">\n  <font SIZE=5>\n  <b>CAMPEONATO - {{CamNom}}</b><br>\n  <b>PARTIDO DE FECHA: {{ParFec}}</b><br>\n  <b>LISTADO DE JUGADORES - EQUIPO:  {{EqNom}}</b>\n  </font>\n</div>\n<br>\n<div>\n  <font SIZE=3>\n  <table>\n    <tr>\n        <td ><b>Nombre</b></td>\n        <td ><b>CI</b></td>\n        <td ><b>Jugó</b></td>\n        <td ><b>Min</b></td>\n        <td ><b>Ama</b></td>\n        <td ><b>Roj</b></td>\n    </tr>\n    <tr *ngFor=\"let jugador of jugadoresService.jugador; let ind=index\">\n      <td width=\"52%\">{{ jugador.jugadornom }}</td>\n      <td width=\"12%\">{{ jugador.jugadorci }}</td>\n      <td width=\"9%\"> </td>\n      <td width=\"9%\"> </td>\n      <td width=\"9%\"> </td>\n      <td width=\"9%\"> </td>\n    </tr>\n  </table>\n  </font>\n</div>\n</div>\n\n<br>\n<button class=\"btn left\" (click)=\"imprimir(viewjugadoresForm)\">Imprimir</button>\n\n"

/***/ }),

/***/ "./src/app/components/viewjugadores/viewjugadores.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/viewjugadores/viewjugadores.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewJugadoresComponent", function() { return ViewJugadoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "../node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var _services_jugadores_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/jugadores.service */ "./src/app/services/jugadores.service.ts");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewJugadoresComponent = /** @class */ (function () {
    function ViewJugadoresComponent(equiposService, partidosService, jugadoresService, domSanitizer, route, router) {
        this.equiposService = equiposService;
        this.partidosService = partidosService;
        this.jugadoresService = jugadoresService;
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.router = router;
    }
    ViewJugadoresComponent.prototype.ngOnInit = function () {
        this.EqId = this.route.snapshot.params.eq;
        this.ParId = this.route.snapshot.params.par;
        this.getEquipo();
        this.getPartido();
        this.getJugador();
    };
    ViewJugadoresComponent.prototype.getEquipo = function () {
        var _this = this;
        if (isNaN(this.EqId)) {
            var error = 1;
        }
        else {
            this.equiposService.getEquipoid(this.EqId)
                .subscribe(function (res) {
                _this.equiposService.equipo = res;
                _this.EqNom = _this.equiposService.equipo[0].equiponom;
            });
        }
    };
    ViewJugadoresComponent.prototype.getPartido = function () {
        var _this = this;
        this.partidosService.getPartidoJug(this.ParId)
            .subscribe(function (res) {
            _this.partidosService.partidos = res;
            _this.CamNom = _this.partidosService.partidos[0].campeonatonom;
            _this.ParFec = _this.partidosService.partidos[0].PartidosFec;
        });
    };
    ViewJugadoresComponent.prototype.getJugador = function () {
        var _this = this;
        this.jugadoresService.getJugadorEncargado(this.EqId)
            .subscribe(function (res) {
            _this.jugadoresService.jugador = res;
        });
    };
    ViewJugadoresComponent.prototype.imprimir = function (form) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__('l', 'pt', 'a4');
        var specialElementH = {
            '#editor': function (element, render) {
                return true;
            }
        };
        var content2 = this.content.nativeElement;
        doc.fromHTML(content2, 10, 1, {
            'width': 520,
            'elementHandlers': specialElementH
        });
        doc.setFontSize(2);
        doc.save('PlanillaJugadores.pdf');
    };
    ViewJugadoresComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getEquipo();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewJugadoresComponent.prototype, "content", void 0);
    ViewJugadoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewjugadores',
            template: __webpack_require__(/*! ./viewjugadores.component.html */ "./src/app/components/viewjugadores/viewjugadores.component.html"),
            styles: [__webpack_require__(/*! ./viewjugadores.component.css */ "./src/app/components/viewjugadores/viewjugadores.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_4__["EquiposService"], _services_jugadores_service__WEBPACK_IMPORTED_MODULE_5__["JugadoresService"], src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_6__["PartidosService"]]
        }),
        __metadata("design:paramtypes", [_services_equipos_service__WEBPACK_IMPORTED_MODULE_4__["EquiposService"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_6__["PartidosService"],
            _services_jugadores_service__WEBPACK_IMPORTED_MODULE_5__["JugadoresService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewJugadoresComponent);
    return ViewJugadoresComponent;
}());



/***/ }),

/***/ "./src/app/components/viewnoticia/viewnoticia.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/viewnoticia/viewnoticia.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea { height: auto; }"

/***/ }),

/***/ "./src/app/components/viewnoticia/viewnoticia.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/viewnoticia/viewnoticia.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div *ngFor=\"let noti of Not\">\n    <h4>{{noti.noticiascab}}</h4>\n    <br>\n    <img style=\"max-width:100%;width:auto;height:auto;\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + noti.noticiasfot)\">\n    <br>\n    <b>{{noti.noticiasdet}}</b>\n    <br>\n    <textarea rows=\"15\" readonly style=\"border: 0cm\">\n            {{noti.noticiastex}}\n    </textarea>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/viewnoticia/viewnoticia.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/viewnoticia/viewnoticia.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewnoticiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewnoticiaComponent", function() { return ViewnoticiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/noticias.service */ "./src/app/services/noticias.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewnoticiaComponent = /** @class */ (function () {
    function ViewnoticiaComponent(router, domSanitizer, noticiasService, route) {
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.noticiasService = noticiasService;
        this.route = route;
    }
    ViewnoticiaComponent.prototype.ngOnInit = function () {
        this.NotId = this.route.snapshot.params.not;
        this.getNoticia(this.NotId);
    };
    ViewnoticiaComponent.prototype.getNoticia = function (not) {
        var _this = this;
        this.noticiasService.getNoticiaId(this.NotId)
            .subscribe(function (resn) {
            _this.Not = resn;
        });
    };
    ViewnoticiaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewnoticia',
            template: __webpack_require__(/*! ./viewnoticia.component.html */ "./src/app/components/viewnoticia/viewnoticia.component.html"),
            styles: [__webpack_require__(/*! ./viewnoticia.component.css */ "./src/app/components/viewnoticia/viewnoticia.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _services_noticias_service__WEBPACK_IMPORTED_MODULE_3__["NoticiasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewnoticiaComponent);
    return ViewnoticiaComponent;
}());



/***/ }),

/***/ "./src/app/components/viewpagoequipos/viewpagoequipos.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/viewpagoequipos/viewpagoequipos.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/viewpagoequipos/viewpagoequipos.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/viewpagoequipos/viewpagoequipos.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n    <div align=\"left\">\n        <b>INGRESO DE PAGO</b>\n    </div>\n    <form #pagoequipoForm=\"ngForm\"> \n    <table style=\"width:100%\" style=\"border: 2px solid black;\">\n        <tr  colspan=\"2\">\n          <td width = \"30%\">Equipo:</td>\n          <td>\n              <div class=\"typeHead\">\n              <input type=\"text\" list=\"equipos\" id=\"equiponom\" name=\"equiponom\" [(ngModel)]='pagoequiposService.selectedPagoequipo.equiponom' placeholder=\"Equipos\"/>\n              <datalist id=\"equipos\">\n                  <select>\n                  <option *ngFor=\"let equipo of equiposService.equipo\" id={{equipo.equipoid}} value={{equipo.equiponom}}></option>\n                  </select>\n              </datalist>\n              </div>\n          </td>\n        </tr>\n        <tr  colspan=\"2\" >\n        <td width = \"30%\">Fecha:</td>\n        <td>\n            <input type=\"hidden\" name=\"UsuariosId\" #_id=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.UsuariosId\"> \n            <input type=\"hidden\" name=\"pagoequipoid\" #_id=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipoid\"> \n            <input type=\"date\" name=\"pagoequipofec\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipofec\" placeholder=\"Fecha pago\">\n        </td>\n        </tr>\n        <tr  colspan=\"2\" >\n        <td width = \"30%\">Medio de pago:</td>\n        <td>\n            <input type=\"text\" name=\"pagoequipomedio\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipomedio\" placeholder=\"Medio de pago\">\n        </td>\n        </tr>\n        <tr  colspan=\"2\" >\n        <td width = \"30%\">Monto ($U):</td>\n        <td>\n            <input type=\"text\" name=\"pagoequipototal\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipototal\" placeholder=\"Total pago\">\n        </td>\n        </tr>\n        <tr  colspan=\"2\" >\n          <td width = \"30%\">Referencia:</td>\n          <td>\n              <input type=\"text\" name=\"pagoequiporef\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequiporef\" placeholder=\"Referencia\">\n          </td>\n        </tr>\n        <tr  colspan=\"2\" >\n        <td width = \"30%\">Observaciones:</td>\n        <td>\n            <input type=\"text\" name=\"pagoequipoobs\" #name=\"ngModel\" [(ngModel)]=\"pagoequiposService.selectedPagoequipo.pagoequipoobs\" placeholder=\"Observaciones\">\n        </td>\n        </tr>\n        <!--<tr  colspan=\"2\" >\n        <td width = \"30%\">Factura:</td>\n        <td>\n            <input type=\"file\" id=\"pagoequipofactura\" name=\"pagoequipofactura\" placeholder=\"Foto\" (change)=\"onFileChanged($event)\">\n        </td>\n        </tr>-->\n        <tr  colspan=\"2\">\n        <td colspan=\"2\">\n            <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(pagoequipoForm)\">Borrar</button>\n            <button class=\"btn left\" (click)=\"addPagoequipo(pagoequipoForm)\">Guardar</button>\n        </td>\n        </tr>\n    </table>\n    </form>\n\n    <table style=\"width:100%\" id=\"TPag\" > \n    <tr>\n        <th colspan=\"5\">Listado de pagos</th>\n    </tr>\n\n    <tr>\n        <th colspan=\"1\">Filtro por Equipo</th>\n        <th colspan=\"3\"><input type=\"text\" id=\"BPag\" (keyup)=\"Buscar()\" placeholder=\"Equipo\"></th>\n    </tr>\n\n    <tr>\n        <th width = \"25%\"><i>Equipo </i></th>\n        <th width = \"25%\"><i>Fecha de pago </i></th>\n        <th width = \"25%\" colspan=\"5\"><i>Total $U</i></th>\n    </tr>\n    <tr *ngFor=\"let pagoequipo of pagoequiposService.pagoequipos\">\n        <td >{{ pagoequipo.equiponom}}</td>\n        <td >{{ pagoequipo.pagoequipofec }}</td>\n        <td >{{ pagoequipo.pagoequipototal }}</td>\n        \n        <td width = \"15%\">\n        <div class=\"tooltip\">\n        <a style=\"cursor:pointer;\" (click)=\"editPagoequipo(pagoequipo)\">\n            <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/> \n        </a>\n        <span class=\"tooltiptext\">Editar pago de equipo</span>\n        </div>\n        <div class=\"tooltip\">\n        <a style=\"cursor:pointer;\" (click)=\"deletePagoequipo(pagoequipo.pagoequipoid, pagoequipoForm)\">\n            <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n        </a>\n        <span class=\"tooltiptext\">Borrar pago de equipo</span>\n        </div>\n        </td>\n    </tr>\n    </table>\n    </div>  \n"

/***/ }),

/***/ "./src/app/components/viewpagoequipos/viewpagoequipos.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/viewpagoequipos/viewpagoequipos.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewpagoequiposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpagoequiposComponent", function() { return ViewpagoequiposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/usuariologin.service */ "./src/app/services/usuariologin.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var src_app_services_pagoequipos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pagoequipos.service */ "./src/app/services/pagoequipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewpagoequiposComponent = /** @class */ (function () {
    function ViewpagoequiposComponent(usuariosService, equiposService, pagoequiposService, userLoginService) {
        this.usuariosService = usuariosService;
        this.equiposService = equiposService;
        this.pagoequiposService = pagoequiposService;
        this.userLoginService = userLoginService;
    }
    ViewpagoequiposComponent.prototype.ngOnInit = function () {
        this.getUsuarioLogeado();
        this.getEquipo();
        this.getPagoEquipos();
        this.fecins();
    };
    //Cargo fecha de hoy al ingresar a la pagina en fecha de pago
    ViewpagoequiposComponent.prototype.fecins = function () {
        var d = new Date().toISOString().split('T')[0];
        this.pagoequiposService.selectedPagoequipo.pagoequipofec = d;
    };
    ViewpagoequiposComponent.prototype.addPagoequipo = function (form) {
        var _this = this;
        form.value.equipoid = this.pagoequiposService.selectedPagoequipo.equipoid;
        if (document.querySelector("#equipos option[value='" + form.value.equiponom + "']") == null) {
            alert('Debe ingresar un Equipo valido');
        }
        else {
            var equipoid = document.querySelector("#equipos option[value='" + form.value.equiponom + "']").id;
            form.value.equipoid = equipoid;
            form.value.UsuariosId = this.userid;
            form.value.pagoequipofactura = this.f2;
            if (form.value.pagoequipoid) {
                this.pagoequiposService.putPagoequipo(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Pago del equipo Editado' });
                });
            }
            else {
                this.pagoequiposService.postPagoequipo(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    M.toast({ html: 'Pago del equipo Ingresado' });
                });
            }
            ; //If
        }
        ; //If
    }; //Add
    //Guardo la imagen seleccionada
    ViewpagoequiposComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = function () {
            _this.f2 = reader.result;
            _this.f2 = _this.f2.split(',')[1];
        };
    };
    ViewpagoequiposComponent.prototype.getUsuarioLogeado = function () {
        var usrlog = this.userLoginService.getUserLoggedIn();
        if (usrlog) {
            this.userrol = usrlog.rol;
            this.userid = usrlog.id;
        }
    };
    ViewpagoequiposComponent.prototype.getPagoEquipos = function () {
        var _this = this;
        this.pagoequiposService.getPagoequipos()
            .subscribe(function (res) {
            _this.pagoequiposService.pagoequipos = res;
        });
    };
    ViewpagoequiposComponent.prototype.getEquipo = function () {
        var _this = this;
        this.equiposService.getEquipo()
            .subscribe(function (res) {
            _this.equiposService.equipo = res;
        });
    };
    ViewpagoequiposComponent.prototype.editPagoequipo = function (pagoequipo) {
        this.pagoequiposService.selectedPagoequipo = pagoequipo;
        this.getUsuarioLogeado();
    };
    ViewpagoequiposComponent.prototype.deletePagoequipo = function (Pagoequiposid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar el pago del equipo?')) {
            this.pagoequiposService.deletePagoequipo(Pagoequiposid)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Pago del equipo Borrado' });
            });
        }
    };
    ViewpagoequiposComponent.prototype.Buscar = function () {
        // Declare variables 
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("BPag");
        filter = input.value.toUpperCase();
        table = document.getElementById("TPag");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query #F5A9A9
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    ViewpagoequiposComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getUsuarioLogeado();
            this.getEquipo();
        }
    };
    ViewpagoequiposComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-viewpagoequipo',
            template: __webpack_require__(/*! ./viewpagoequipos.component.html */ "./src/app/components/viewpagoequipos/viewpagoequipos.component.html"),
            styles: [__webpack_require__(/*! ./viewpagoequipos.component.css */ "./src/app/components/viewpagoequipos/viewpagoequipos.component.css")],
            providers: [_services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"], src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"], src_app_services_pagoequipos_service__WEBPACK_IMPORTED_MODULE_4__["PagoequiposService"], _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"],
            src_app_services_pagoequipos_service__WEBPACK_IMPORTED_MODULE_4__["PagoequiposService"],
            _services_usuariologin_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]])
    ], ViewpagoequiposComponent);
    return ViewpagoequiposComponent;
}()); //PagoequiposComponent



/***/ }),

/***/ "./src/app/components/viewpartido/viewpartido.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/viewpartido/viewpartido.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/viewpartido/viewpartido.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/viewpartido/viewpartido.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Titulo-->\n<div style=\"text-align:center\"><b>Partido del {{ParFec | date:'dd/MM/yyyy'}} </b></div>\n<br>\n<!--Resultado-->\n<table align=\"center\" style=\"width: 80%; \">\n<tr>\n  <td *ngIf = \"pantalla === 640\" width=\"15%\" style=\"text-align:right\"><img style=\"vertical-align:middle\" width=\"150\" height=\"150\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + Esc1)\"></td>\n  <td width=\"25%\" style=\"text-align:center; font-size:26px\"><b>{{EqNom1}}</b></td>\n  <td width=\"7%\" style=\"text-align:left; font-size:26px\">{{Res1}}</td>\n  <td width=\"6%\" style=\"text-align:center;font-size:26px\"><b>-</b></td>\n  <td width=\"7%\" style=\"text-align:right; font-size:26px\">{{Res2}}</td>\n  <td width=\"25%\" style=\"text-align:center; font-size:26px\"><b>{{EqNom2}}</b></td>\n  <td *ngIf = \"pantalla === 640\" width=\"15%\" style=\"text-align:left\"><img style=\"vertical-align:middle\" width=\"150\" height=\"150\" [src]=\"this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + Esc2)\"></td>\n</tr>\n</table>\n<br>\n\n<!--Datos del partido-->\n<table align=\"center\" style=\"width: 80%; border: 1px solid black;\">\n\n  <tr>\n\n    <td style=\"vertical-align: top;width: 70%;\">\n     <table>\n\n      <tr >\n        <td bgcolor=\"#BDC3D6\" style=\"width: 13%;height: 1px;\">Goles</td><td></td>\n      </tr>\n      <tr *ngFor=\"let Gol of ResGol\">\n        <td></td><td>{{Gol.jugadornom}}&nbsp;({{Gol.jugadorgol}})</td>\n      </tr>\n\n      <tr >\n        <td bgcolor=\"#E9F571\">Amarillas</td><td></td>\n      </tr>\n      <tr *ngFor=\"let Ama of ResAma\">\n          <td></td><td>{{Ama.jugadornom}}&nbsp;({{Ama.jugadorama}})</td>\n      </tr>\n\n      <tr >\n        <td bgcolor=\"#FB4D3F\">Rojas</td><td></td>\n      </tr>\n      <tr *ngFor=\"let Roj of ResRoj\">\n          <td></td><td>{{Roj.jugadornom}}&nbsp;({{Roj.jugadorroj}})</td>\n      </tr>\n\n     </table>  \n    </td>\n\n    <td style=\"vertical-align: top;width: 30%;\">\n     <table > \n\n      <tr>\n        <td bgcolor=\"#BDC3D6\" style=\"width: 30%;\">Goles</td><td></td>\n      </tr>\n      <tr *ngFor=\"let Gol of ResGol2\">\n        <td></td><td>{{Gol.jugadornom}}&nbsp;({{Gol.jugadorgol}})</td>\n      </tr>\n\n      <tr >\n        <td bgcolor=\"#E9F571\">Amarillas</td><td></td>\n      </tr>\n      <tr *ngFor=\"let Ama of ResAma2\">\n          <td></td><td>{{Ama.jugadornom}}&nbsp;({{Ama.jugadorama}})</td>\n      </tr>\n\n      <tr >\n        <td bgcolor=\"#FB4D3F\">Rojas</td><td></td>\n      </tr>\n      <tr *ngFor=\"let Roj of ResRoj2\">\n          <td></td><td>{{Roj.jugadornom}}&nbsp;({{Roj.jugadorroj}})</td>\n      </tr>\n\n     </table>  \n    </td>\n\n  </tr>\n</table>\n<table *ngIf=\"Obs != 'null'\" align=\"center\" style=\"width: 80%; border: 1px solid black;\">\n<tr >\n  <td colspan=\"4\"> Observaciones</td>\n</tr>\n<tr >\n  <td colspan=\"4\">{{Obs}}</td>\n</tr>\n</table>\n\n<br>\n\n<!--Lugar-->\n<table align=\"center\" style=\"border: 1px solid black; width: 80%; \">\n<tr>\n  <th>Complejo</th>\n  <th>Cancha</th>\n  <th>Fecha</th>\n  <th>Hora</th>\n</tr>\n\n<tr>\n  <td>{{Com}}</td>\n  <td>{{Can}}</td>\n  <td>{{Fec}}</td>\n  <td>{{Hor}}</td>\n</tr>\n</table>"

/***/ }),

/***/ "./src/app/components/viewpartido/viewpartido.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/viewpartido/viewpartido.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewpartidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpartidoComponent", function() { return ViewpartidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/jupars.service */ "./src/app/services/jupars.service.ts");
/* harmony import */ var src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/partidos.service */ "./src/app/services/partidos.service.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/equipos.service */ "./src/app/services/equipos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewpartidoComponent = /** @class */ (function () {
    function ViewpartidoComponent(domSanitizer, juparsService, partidosService, equiposService, route, router) {
        this.domSanitizer = domSanitizer;
        this.juparsService = juparsService;
        this.partidosService = partidosService;
        this.equiposService = equiposService;
        this.route = route;
        this.router = router;
    }
    ViewpartidoComponent.prototype.ngOnInit = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
        this.ParId = this.route.snapshot.params.par;
        this.getPartido();
    };
    ViewpartidoComponent.prototype.ngAfterViewChecked = function () {
        if (window.screen.width >= 640) {
            this.pantalla = 640;
        }
        if (window.screen.width < 640) {
            this.pantalla = 360;
        }
    };
    ViewpartidoComponent.prototype.getPartido = function () {
        var _this = this;
        this.partidosService.getPartidoJug(this.ParId)
            .subscribe(function (res) {
            _this.partidosService.partidos = res;
            _this.ParFec = res[0].PartidosFec;
            _this.Res1 = res[0].Equipo1Res;
            _this.Res2 = res[0].Equipo2Res;
            _this.Com = res[0].PartidosComplejo;
            _this.Can = res[0].PartidosCan;
            _this.Fec = res[0].PartidosFec;
            _this.Hor = res[0].PartidosHor;
            _this.Obs = res[0].PartidosObs;
            //DATOS GRALES EQUIPO 1  
            if (isNaN(res[0].equipoid1)) {
                var e1;
                e1 = 0;
            }
            else {
                var e1;
                e1 = res[0].equipoid1;
            }
            _this.equiposService.getEquipoid(e1)
                .subscribe(function (rese1) {
                _this.EqNom1 = rese1[0].equiponom;
                _this.EqId1 = rese1[0].equipoid;
                _this.Esc1 = rese1[0].equipoesc;
                //DATOS GRALES EQUIPO 2
                if (isNaN(res[0].equipoid2)) {
                    var e2;
                    e2 = 0;
                }
                else {
                    var e2;
                    e2 = res[0].equipoid2;
                }
                _this.equiposService.getEquipoid(e2)
                    .subscribe(function (rese2) {
                    _this.EqNom2 = rese2[0].equiponom;
                    _this.EqId2 = rese2[0].equipoid;
                    _this.Esc2 = rese2[0].equipoesc;
                    //GOLES EQUIPO 1  
                    _this.juparsService.getJugparGolPar(_this.ParId, _this.EqId1, 1)
                        .subscribe(function (resg) {
                        _this.ResGol = resg;
                        if (_this.ResGol != null) {
                            _this.CanGol = _this.ResGol.length;
                        }
                        //GOLES EQUIPO 2 
                        _this.juparsService.getJugparGolPar(_this.ParId, _this.EqId2, 2)
                            .subscribe(function (resg2) {
                            _this.ResGol2 = resg2;
                            if (_this.ResGol2 != null) {
                                _this.CanGol = _this.CanGol + _this.ResGol2.length;
                            }
                            //AMARILLAS EQUIPO 1    
                            _this.juparsService.getJugparAmaPar(_this.ParId, _this.EqId1, 1)
                                .subscribe(function (resa) {
                                _this.ResAma = resa;
                                if (_this.ResAma != null) {
                                    _this.CanAma = _this.ResAma.length;
                                }
                                //AMARILLAS EQUIPO 2 
                                _this.juparsService.getJugparAmaPar(_this.ParId, _this.EqId2, 2)
                                    .subscribe(function (resa2) {
                                    _this.ResAma2 = resa2;
                                    if (_this.ResAma2 != null) {
                                        _this.CanAma = _this.CanAma + _this.ResAma2.length;
                                    }
                                    //ROJAS EQUIPO 1    
                                    _this.juparsService.getJugparRojPar(_this.ParId, _this.EqId1, 1)
                                        .subscribe(function (resr) {
                                        _this.ResRoj = resr;
                                        if (_this.ResRoj != null) {
                                            _this.CanRoj = _this.ResRoj.length;
                                        }
                                        //ROJAS EQUIPO 2 
                                        _this.juparsService.getJugparRojPar(_this.ParId, _this.EqId2, 2)
                                            .subscribe(function (resr2) {
                                            _this.ResRoj2 = resr2;
                                            if (_this.ResRoj2 != null) {
                                                _this.CanAma = _this.CanRoj + _this.ResRoj2.length;
                                            }
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    ViewpartidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewpartido',
            template: __webpack_require__(/*! ./viewpartido.component.html */ "./src/app/components/viewpartido/viewpartido.component.html"),
            styles: [__webpack_require__(/*! ./viewpartido.component.css */ "./src/app/components/viewpartido/viewpartido.component.css")],
            providers: [src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_3__["JuparsService"], src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__["PartidosService"]]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            src_app_services_jupars_service__WEBPACK_IMPORTED_MODULE_3__["JuparsService"],
            src_app_services_partidos_service__WEBPACK_IMPORTED_MODULE_4__["PartidosService"],
            _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__["EquiposService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewpartidoComponent);
    return ViewpartidoComponent;
}());

; //class ViewpartidoComponent


/***/ }),

/***/ "./src/app/components/zonas/zonas.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/zonas/zonas.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n\r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/zonas/zonas.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/zonas/zonas.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%;margin-left: 10px;\">\n<form #zonaForm=\"ngForm\"> \n  <div align=\"left\">\n    <b>INGRESO ZONAS</b>\n  </div>\n  <table style=\"width:100%\" style=\"border: 2px solid black;\">\n      <tr  colspan=\"2\" >\n        <td width = \"10%\"><font color=\"red\">*</font>Nombre:</td>\n        <td>\n          <input type=\"hidden\" name=\"zonaid\" #_id=\"ngModel\" [(ngModel)]=\"zonasService.selectedZona.zonaid\"> \n          <input type=\"text\" name=\"zonanom\" #name=\"ngModel\" [(ngModel)]=\"zonasService.selectedZona.zonanom\" placeholder=\"Zona\">\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <button style=\"margin-right: 3px;\" class=\"btn left\" (click)=\"resetForm(zonaForm)\">Borrar</button>\n          <button class=\"btn left\" (click)=\"addZona(zonaForm)\">Guardar</button>\n        </td>\n      </tr>\n      <tr>\n          <td colspan=\"2\">\n          <font  size=\"1\" color=\"red\">* Campos obligatorios</font>\n        </td>\n      </tr>\n  </table>\n</form>\n<table style=\"width:100%\"> \n  <tr>\n    <th colspan=\"3\">Listado Zonas</th>\n  </tr>\n  <tr>\n    <td colspan=\"3\"><i>Nombre</i></td>\n  </tr>\n  <tr *ngFor=\"let zona of zonasService.zonas\">\n    <td colspan=\"2\">{{ zona.zonanom }}</td>\n    <td>\n      <a style=\"cursor:pointer;\" (click)=\"editZona(zona)\">\n        <img width=\"20\" alt=\"Editar\" src=\"assets/editar.png\"/>\n        <!--<i class=\"material-icons\">edit</i>-->\n      </a>\n      <a style=\"cursor:pointer;\" (click)=\"deleteZona(zona.zonaid, zonaForm)\">\n        <img width=\"20\" alt=\"Borrar\" src=\"assets/borrar2.png\"/>\n      </a>\n    </td>\n  </tr>\n</table>  \n</div>"

/***/ }),

/***/ "./src/app/components/zonas/zonas.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/zonas/zonas.component.ts ***!
  \*****************************************************/
/*! exports provided: ZonasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonasComponent", function() { return ZonasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_zonas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/zonas.service */ "./src/app/services/zonas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZonasComponent = /** @class */ (function () {
    function ZonasComponent(zonasService) {
        this.zonasService = zonasService;
    }
    ZonasComponent.prototype.ngOnInit = function () {
        this.getZona();
    };
    ZonasComponent.prototype.addZona = function (form) {
        var _this = this;
        if (form.value.zonanom) {
            if (form.value.zonaid) {
                this.zonasService.putZona(form.value)
                    .subscribe(function (res) {
                    _this.resetForm(form);
                    _this.getZona();
                    M.toast({ html: 'Zona Editada' });
                });
            }
            else {
                this.zonasService.postZona(form.value)
                    .subscribe(function (res) {
                    _this.getZona();
                    _this.resetForm(form);
                    M.toast({ html: 'Zona Ingresada' });
                });
            }
            ;
        }
        else {
            alert('Debe ingresar el Nombre de la Zona');
        }
    };
    ZonasComponent.prototype.getZona = function () {
        var _this = this;
        this.zonasService.getZona()
            .subscribe(function (res) {
            _this.zonasService.zonas = res;
        });
    };
    ZonasComponent.prototype.editZona = function (zona) {
        this.zonasService.selectedZona = zona;
    };
    ZonasComponent.prototype.deleteZona = function (zonaid, form) {
        var _this = this;
        if (confirm('Confirma que desea borrar la Zona?')) {
            this.zonasService.deleteZona(zonaid)
                .subscribe(function (res) {
                _this.getZona();
                _this.resetForm(form);
                M.toast({ html: 'Zona Borrada' });
            });
        }
    };
    ZonasComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.getZona();
        }
    };
    ZonasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zonas',
            template: __webpack_require__(/*! ./zonas.component.html */ "./src/app/components/zonas/zonas.component.html"),
            styles: [__webpack_require__(/*! ./zonas.component.css */ "./src/app/components/zonas/zonas.component.css")],
            providers: [_services_zonas_service__WEBPACK_IMPORTED_MODULE_1__["ZonasService"]]
        }),
        __metadata("design:paramtypes", [_services_zonas_service__WEBPACK_IMPORTED_MODULE_1__["ZonasService"]])
    ], ZonasComponent);
    return ZonasComponent;
}());



/***/ }),

/***/ "./src/app/models/camequipos.ts":
/*!**************************************!*\
  !*** ./src/app/models/camequipos.ts ***!
  \**************************************/
/*! exports provided: CamEquipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamEquipo", function() { return CamEquipo; });
var CamEquipo = /** @class */ (function () {
    function CamEquipo(camequid, compeonatoId, equipoid, equiponom, equipofecins, equsus, equpag, camequobs, equdeuda, equvendeu, equmetpag, equcancuo, camequpto) {
        if (camequid === void 0) { camequid = 0; }
        if (compeonatoId === void 0) { compeonatoId = 0; }
        if (equipoid === void 0) { equipoid = 0; }
        if (equiponom === void 0) { equiponom = ''; }
        if (equipofecins === void 0) { equipofecins = ''; }
        if (equsus === void 0) { equsus = 0; }
        if (equpag === void 0) { equpag = 0; }
        if (camequobs === void 0) { camequobs = ''; }
        if (equdeuda === void 0) { equdeuda = 0; }
        if (equvendeu === void 0) { equvendeu = ''; }
        if (equmetpag === void 0) { equmetpag = ''; }
        if (equcancuo === void 0) { equcancuo = 0; }
        if (camequpto === void 0) { camequpto = 0; }
        this.camequid = camequid;
        this.compeonatoId = compeonatoId;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.equipofecins = equipofecins;
        this.equpag = equpag;
        this.equcancuo = equcancuo;
        this.equmetpag = equmetpag;
        this.equdeuda = equdeuda;
        this.equvendeu = equvendeu;
        this.equsus = equsus;
        this.camequobs = camequobs;
        this.camequpto = camequpto;
    }
    return CamEquipo;
}());



/***/ }),

/***/ "./src/app/models/campeonatos.ts":
/*!***************************************!*\
  !*** ./src/app/models/campeonatos.ts ***!
  \***************************************/
/*! exports provided: Campeonato */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Campeonato", function() { return Campeonato; });
var Campeonato = /** @class */ (function () {
    function Campeonato(campeonatoid, campeonatonom, modalidadid, modalidadnom, zonaid, zonanom, divisionalid, divisionalnom, campeonatoprecio, campeonatopremio, campeonatoequipos, campeonatoestado, campeonatofecini, campeonatofecfin) {
        if (campeonatoid === void 0) { campeonatoid = 0; }
        if (campeonatonom === void 0) { campeonatonom = ''; }
        if (modalidadid === void 0) { modalidadid = 0; }
        if (modalidadnom === void 0) { modalidadnom = ''; }
        if (zonaid === void 0) { zonaid = 0; }
        if (zonanom === void 0) { zonanom = ''; }
        if (divisionalid === void 0) { divisionalid = 0; }
        if (divisionalnom === void 0) { divisionalnom = ''; }
        if (campeonatoprecio === void 0) { campeonatoprecio = 0; }
        if (campeonatopremio === void 0) { campeonatopremio = ''; }
        if (campeonatoequipos === void 0) { campeonatoequipos = 0; }
        if (campeonatoestado === void 0) { campeonatoestado = ''; }
        if (campeonatofecini === void 0) { campeonatofecini = ''; }
        if (campeonatofecfin === void 0) { campeonatofecfin = ''; }
        this.campeonatoid = campeonatoid;
        this.campeonatonom = campeonatonom;
        this.modalidadid = modalidadid;
        this.modalidadnom = modalidadnom;
        this.zonaid = zonaid;
        this.zonanom = zonanom;
        this.divisionalid = divisionalid;
        this.divisionalnom = divisionalnom;
        this.campeonatoprecio = campeonatoprecio;
        this.campeonatopremio = campeonatopremio;
        this.campeonatoequipos = campeonatoequipos;
        this.campeonatoestado = campeonatoestado;
        this.campeonatofecini = campeonatofecini;
        this.campeonatofecfin = campeonatofecfin;
    }
    return Campeonato;
}());



/***/ }),

/***/ "./src/app/models/divisionales.ts":
/*!****************************************!*\
  !*** ./src/app/models/divisionales.ts ***!
  \****************************************/
/*! exports provided: Divisional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divisional", function() { return Divisional; });
var Divisional = /** @class */ (function () {
    function Divisional(modalidadid, modalidadnom, zonaid, zonanom, divisionalid, divisionalnom, divisionalimp) {
        if (modalidadid === void 0) { modalidadid = 0; }
        if (modalidadnom === void 0) { modalidadnom = ''; }
        if (zonaid === void 0) { zonaid = 0; }
        if (zonanom === void 0) { zonanom = ''; }
        if (divisionalid === void 0) { divisionalid = 0; }
        if (divisionalnom === void 0) { divisionalnom = ''; }
        if (divisionalimp === void 0) { divisionalimp = 0; }
        this.modalidadid = modalidadid;
        this.modalidadnom = modalidadnom;
        this.zonaid = zonaid;
        this.zonanom = zonanom;
        this.divisionalid = divisionalid;
        this.divisionalnom = divisionalnom;
        this.divisionalimp = divisionalimp;
    }
    return Divisional;
}());



/***/ }),

/***/ "./src/app/models/equipos.ts":
/*!***********************************!*\
  !*** ./src/app/models/equipos.ts ***!
  \***********************************/
/*! exports provided: Equipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipo", function() { return Equipo; });
var Equipo = /** @class */ (function () {
    function Equipo(equipoid, equiponom, equipoobs, equipofot, equipocanjug, equipotelcon, equipomailcon, equipofecins, equipoest, equipoesc, zonanom, divisionalnom, camequpto) {
        if (equipoid === void 0) { equipoid = 0; }
        if (equiponom === void 0) { equiponom = ''; }
        if (equipoobs === void 0) { equipoobs = ''; }
        if (equipofot === void 0) { equipofot = ''; }
        if (equipocanjug === void 0) { equipocanjug = 0; }
        if (equipotelcon === void 0) { equipotelcon = ''; }
        if (equipomailcon === void 0) { equipomailcon = ''; }
        if (equipofecins === void 0) { equipofecins = ''; }
        if (equipoest === void 0) { equipoest = ''; }
        if (equipoesc === void 0) { equipoesc = ''; }
        if (zonanom === void 0) { zonanom = ''; }
        if (divisionalnom === void 0) { divisionalnom = ''; }
        if (camequpto === void 0) { camequpto = 0; }
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.equipoobs = equipoobs;
        this.equipofot = equipofot;
        this.equipocanjug = equipocanjug;
        this.equipotelcon = equipotelcon;
        this.equipomailcon = equipomailcon;
        this.equipofecins = equipofecins;
        this.equipoest = equipoest;
        this.equipoesc = equipoesc;
        this.zonanom = zonanom;
        this.divisionalnom = divisionalnom;
        this.camequpto = camequpto;
    }
    return Equipo;
}());



/***/ }),

/***/ "./src/app/models/jugadores.ts":
/*!*************************************!*\
  !*** ./src/app/models/jugadores.ts ***!
  \*************************************/
/*! exports provided: Jugador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jugador", function() { return Jugador; });
var Jugador = /** @class */ (function () {
    function Jugador(jugadorid, equipoid, jugadornom, jugadorci, equiponom, jugadoremail, jugadortel, jugadordir, jugadorfecnac, jugadorfecins, jugadornro, jugadorpos, jugadorestado, jugadorfot) {
        if (jugadorid === void 0) { jugadorid = 0; }
        if (equipoid === void 0) { equipoid = 0; }
        if (jugadornom === void 0) { jugadornom = ''; }
        if (jugadorci === void 0) { jugadorci = ''; }
        if (equiponom === void 0) { equiponom = ''; }
        if (jugadoremail === void 0) { jugadoremail = ''; }
        if (jugadortel === void 0) { jugadortel = ''; }
        if (jugadordir === void 0) { jugadordir = ''; }
        if (jugadorfecnac === void 0) { jugadorfecnac = ''; }
        if (jugadorfecins === void 0) { jugadorfecins = ''; }
        if (jugadornro === void 0) { jugadornro = 0; }
        if (jugadorpos === void 0) { jugadorpos = ''; }
        if (jugadorestado === void 0) { jugadorestado = ''; }
        if (jugadorfot === void 0) { jugadorfot = ''; }
        this.jugadorid = jugadorid;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.jugadornom = jugadornom;
        this.jugadorci = jugadorci;
        this.jugadoremail = jugadoremail;
        this.jugadortel = jugadortel;
        this.jugadordir = jugadordir;
        this.jugadorfecnac = jugadorfecnac;
        this.jugadorfecins = jugadorfecins;
        this.jugadornro = jugadornro;
        this.jugadorpos = jugadorpos,
            this.jugadorestado = jugadorestado;
        this.jugadorfot = jugadorfot;
    }
    return Jugador;
}());



/***/ }),

/***/ "./src/app/models/jugpar.ts":
/*!**********************************!*\
  !*** ./src/app/models/jugpar.ts ***!
  \**********************************/
/*! exports provided: Jugpar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jugpar", function() { return Jugpar; });
var Jugpar = /** @class */ (function () {
    function Jugpar(jugparid, PartidosId, equipoid, equiponom, jugadorid, jugadornom, jugadormin, jugadorama, jugadorroj, jugadorgol, jugadorobs, campeonatonom, PartidosFec, campeonatoid) {
        if (jugparid === void 0) { jugparid = 0; }
        if (PartidosId === void 0) { PartidosId = 0; }
        if (equipoid === void 0) { equipoid = 0; }
        if (equiponom === void 0) { equiponom = ''; }
        if (jugadorid === void 0) { jugadorid = 0; }
        if (jugadornom === void 0) { jugadornom = ''; }
        if (jugadormin === void 0) { jugadormin = 0; }
        if (jugadorama === void 0) { jugadorama = 0; }
        if (jugadorroj === void 0) { jugadorroj = 0; }
        if (jugadorgol === void 0) { jugadorgol = 0; }
        if (jugadorobs === void 0) { jugadorobs = ''; }
        if (campeonatonom === void 0) { campeonatonom = ''; }
        if (PartidosFec === void 0) { PartidosFec = ''; }
        if (campeonatoid === void 0) { campeonatoid = 0; }
        this.jugparid = jugparid;
        this.PartidosId = PartidosId;
        this.campeonatoid = campeonatoid;
        this.campeonatonom = campeonatonom;
        this.PartidosFec = PartidosFec;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.jugadorid = jugadorid;
        this.jugadornom = jugadornom;
        this.jugadormin = jugadormin;
        this.jugadorama = jugadorama;
        this.jugadorroj = jugadorroj;
        this.jugadorgol = jugadorgol;
        this.jugadorobs = jugadorobs;
    }
    return Jugpar;
}());



/***/ }),

/***/ "./src/app/models/modalidades.ts":
/*!***************************************!*\
  !*** ./src/app/models/modalidades.ts ***!
  \***************************************/
/*! exports provided: Modalidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modalidad", function() { return Modalidad; });
var Modalidad = /** @class */ (function () {
    function Modalidad(modalidadid, zonaid, modalidadnom, zonanom) {
        if (modalidadid === void 0) { modalidadid = 0; }
        if (zonaid === void 0) { zonaid = 0; }
        if (modalidadnom === void 0) { modalidadnom = ''; }
        if (zonanom === void 0) { zonanom = ''; }
        this.modalidadid = modalidadid;
        this.zonaid = zonaid;
        this.zonanom = zonanom;
        this.modalidadnom = modalidadnom;
    }
    return Modalidad;
}());



/***/ }),

/***/ "./src/app/models/noticias.ts":
/*!************************************!*\
  !*** ./src/app/models/noticias.ts ***!
  \************************************/
/*! exports provided: Noticia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noticia", function() { return Noticia; });
var Noticia = /** @class */ (function () {
    function Noticia(noticiasid, noticiasfec, UsuariosAli, equipoid, equiponom, noticiasdet, noticiascab, noticiasfot, noticiastex) {
        if (noticiasid === void 0) { noticiasid = 0; }
        if (noticiasfec === void 0) { noticiasfec = ''; }
        if (UsuariosAli === void 0) { UsuariosAli = ''; }
        if (equipoid === void 0) { equipoid = 0; }
        if (equiponom === void 0) { equiponom = ''; }
        if (noticiasdet === void 0) { noticiasdet = ''; }
        if (noticiascab === void 0) { noticiascab = ''; }
        if (noticiasfot === void 0) { noticiasfot = ''; }
        if (noticiastex === void 0) { noticiastex = ''; }
        this.noticiasid = noticiasid;
        this.noticiasfec = noticiasfec;
        this.UsuariosAli = UsuariosAli;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.noticiasdet = noticiasdet;
        this.noticiascab = noticiascab;
        this.noticiasfot = noticiasfot;
        this.noticiastex = noticiastex;
    }
    return Noticia;
}());



/***/ }),

/***/ "./src/app/models/pagoequipos.ts":
/*!***************************************!*\
  !*** ./src/app/models/pagoequipos.ts ***!
  \***************************************/
/*! exports provided: Pagoequipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagoequipo", function() { return Pagoequipo; });
var Pagoequipo = /** @class */ (function () {
    function Pagoequipo(pagoequipoid, equipoid, pagoequipofactura, pagoequipofec, pagoequipomedio, pagoequipototal, pagoequipoobs, equiponom, UsuariosAli, pagoequiporef) {
        if (pagoequipoid === void 0) { pagoequipoid = 0; }
        if (equipoid === void 0) { equipoid = 0; }
        if (pagoequipofactura === void 0) { pagoequipofactura = ''; }
        if (pagoequipofec === void 0) { pagoequipofec = ''; }
        if (pagoequipomedio === void 0) { pagoequipomedio = ''; }
        if (pagoequipototal === void 0) { pagoequipototal = 0; }
        if (pagoequipoobs === void 0) { pagoequipoobs = ''; }
        if (equiponom === void 0) { equiponom = ''; }
        if (UsuariosAli === void 0) { UsuariosAli = ''; }
        if (pagoequiporef === void 0) { pagoequiporef = ''; }
        this.pagoequipoid = pagoequipoid;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.pagoequipofactura = pagoequipofactura;
        this.pagoequipofec = pagoequipofec;
        this.pagoequipomedio = pagoequipomedio;
        this.pagoequipototal = pagoequipototal;
        this.pagoequipoobs = pagoequipoobs;
        this.UsuariosAli = UsuariosAli;
        this.pagoequiporef = pagoequiporef;
    }
    return Pagoequipo;
}());



/***/ }),

/***/ "./src/app/models/partidos.ts":
/*!************************************!*\
  !*** ./src/app/models/partidos.ts ***!
  \************************************/
/*! exports provided: Partido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partido", function() { return Partido; });
var Partido = /** @class */ (function () {
    function Partido(Partidosid, campeonatoid, campeonatonom, equipoid1, equiponom1, equipoid2, equiponom2, PartidosFec, PartidosHor, PartidosCan, Equipo1Res, Equipo2Res, PartidosObs, PartidosComplejo, PartidosFecJug, Equipo1Pun, Equipo2Pun, equipoesc1, equipoesc2, PartidosNomJug, PartidosNomCla) {
        if (Partidosid === void 0) { Partidosid = 0; }
        if (campeonatoid === void 0) { campeonatoid = 0; }
        if (campeonatonom === void 0) { campeonatonom = ''; }
        if (equipoid1 === void 0) { equipoid1 = 0; }
        if (equiponom1 === void 0) { equiponom1 = ''; }
        if (equipoid2 === void 0) { equipoid2 = 0; }
        if (equiponom2 === void 0) { equiponom2 = ''; }
        if (PartidosFec === void 0) { PartidosFec = ''; }
        if (PartidosHor === void 0) { PartidosHor = ''; }
        if (PartidosCan === void 0) { PartidosCan = ''; }
        if (Equipo1Res === void 0) { Equipo1Res = 0; }
        if (Equipo2Res === void 0) { Equipo2Res = 0; }
        if (PartidosObs === void 0) { PartidosObs = ''; }
        if (PartidosComplejo === void 0) { PartidosComplejo = ''; }
        if (PartidosFecJug === void 0) { PartidosFecJug = 0; }
        if (Equipo1Pun === void 0) { Equipo1Pun = 0; }
        if (Equipo2Pun === void 0) { Equipo2Pun = 0; }
        if (equipoesc1 === void 0) { equipoesc1 = ''; }
        if (equipoesc2 === void 0) { equipoesc2 = ''; }
        if (PartidosNomJug === void 0) { PartidosNomJug = ''; }
        if (PartidosNomCla === void 0) { PartidosNomCla = ''; }
        this.Partidosid = Partidosid;
        this.campeonatoid = campeonatoid;
        this.campeonatonom = campeonatonom;
        this.equipoid1 = equipoid1;
        this.equiponom1 = equiponom1;
        this.equipoid2 = equipoid2;
        this.equiponom2 = equiponom2;
        this.PartidosFec = PartidosFec;
        this.PartidosHor = PartidosHor;
        this.PartidosCan = PartidosCan;
        this.Equipo1Res = Equipo1Res;
        this.Equipo2Res = Equipo2Res;
        this.PartidosObs = PartidosObs;
        this.PartidosComplejo = PartidosComplejo;
        this.PartidosFecJug = PartidosFecJug;
        this.PartidosNomJug = PartidosNomJug;
        this.PartidosNomCla = PartidosNomCla;
        this.Equipo1Pun = Equipo1Pun;
        this.Equipo2Pun = Equipo2Pun;
        this.equipoesc1 = equipoesc1;
        this.equipoesc2 = equipoesc2;
    }
    return Partido;
}());



/***/ }),

/***/ "./src/app/models/usuariologin.ts":
/*!****************************************!*\
  !*** ./src/app/models/usuariologin.ts ***!
  \****************************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
var UserLogin = /** @class */ (function () {
    function UserLogin() {
    }
    return UserLogin;
}());



/***/ }),

/***/ "./src/app/models/usuarios.ts":
/*!************************************!*\
  !*** ./src/app/models/usuarios.ts ***!
  \************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(usuariosid, usuariosnom, usuariospas, usuariosper, usuariosmai, usuariosali, usuariostel, equipoid) {
        if (usuariosid === void 0) { usuariosid = 0; }
        if (usuariosnom === void 0) { usuariosnom = ''; }
        if (usuariospas === void 0) { usuariospas = ''; }
        if (usuariosper === void 0) { usuariosper = 0; }
        if (usuariosmai === void 0) { usuariosmai = ''; }
        if (usuariosali === void 0) { usuariosali = ''; }
        if (usuariostel === void 0) { usuariostel = 0; }
        if (equipoid === void 0) { equipoid = 0; }
        this.usuariosid = usuariosid;
        this.usuariosnom = usuariosnom;
        this.usuariospas = usuariospas;
        this.usuariosper = usuariosper;
        this.usuariosmai = usuariosmai;
        this.usuariosali = usuariosali;
        this.usuariostel = usuariostel;
        this.equipoid = equipoid;
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/models/zonas.ts":
/*!*********************************!*\
  !*** ./src/app/models/zonas.ts ***!
  \*********************************/
/*! exports provided: Zona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zona", function() { return Zona; });
var Zona = /** @class */ (function () {
    function Zona(zonaid, zonanom) {
        if (zonaid === void 0) { zonaid = 0; }
        if (zonanom === void 0) { zonanom = ''; }
        this.zonaid = zonaid;
        this.zonanom = zonanom;
    }
    return Zona;
}());



/***/ }),

/***/ "./src/app/popup/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "./src/app/popup/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>"
        }),
        __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/popup/modal.less":
/*!**********************************!*\
  !*** ./src/app/popup/modal.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: absolute;\n  top: 10%;\n  right: 35%;\n  bottom: 10%;\n  left: 35%;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  background: #fff;\n  position: absolute;\n  max-width: 100%;\n  width: auto;\n  height: auto;\n  /* margin exposes part of the modal background \n            margin: 50px;*/\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0%;\n  right: 0%;\n  bottom: 0%;\n  left: 0%;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/app/popup/modal.service.ts":
/*!****************************************!*\
  !*** ./src/app/popup/modal.service.ts ***!
  \****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/Camequipos.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/Camequipos.service.ts ***!
  \************************************************/
/*! exports provided: CamequiposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamequiposService", function() { return CamequiposService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_camequipos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/camequipos */ "./src/app/models/camequipos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CamequiposService = /** @class */ (function () {
    function CamequiposService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/camequipo';
        this.selectedCamEquipo = new _models_camequipos__WEBPACK_IMPORTED_MODULE_2__["CamEquipo"]();
    }
    CamequiposService.prototype.postCamequipo = function (CamEquipo) {
        return this.http.post(this.URL_API, CamEquipo);
    };
    CamequiposService.prototype.getCamequipo = function (cam) {
        return this.http.get(this.URL_API + "/" + cam);
    };
    CamequiposService.prototype.putCamequipo = function (CamEquipo) {
        return this.http.put(this.URL_API + ("/" + CamEquipo.camequid), CamEquipo);
    };
    CamequiposService.prototype.deleteCamequipo = function (camequid) {
        return this.http.delete(this.URL_API + "/" + camequid);
    };
    CamequiposService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CamequiposService);
    return CamequiposService;
}());



/***/ }),

/***/ "./src/app/services/Campeonatos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/Campeonatos.service.ts ***!
  \*************************************************/
/*! exports provided: CampeonatosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampeonatosService", function() { return CampeonatosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_campeonatos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/campeonatos */ "./src/app/models/campeonatos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CampeonatosService = /** @class */ (function () {
    function CampeonatosService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/campeonato';
        this.selectedCampeonato = new _models_campeonatos__WEBPACK_IMPORTED_MODULE_2__["Campeonato"]();
    }
    CampeonatosService.prototype.postCampeonato = function (campeonato) {
        return this.http.post(this.URL_API, campeonato);
    };
    CampeonatosService.prototype.getCampeonato = function () {
        return this.http.get(this.URL_API);
    };
    CampeonatosService.prototype.getCampeonatonom = function (campeonatoid) {
        return this.http.get(this.URL_API + "/" + campeonatoid);
    };
    CampeonatosService.prototype.getCampeonatonompar = function (partidoid) {
        return this.http.get(this.URL_Base + 'liga/campeonatonom' + "/" + partidoid);
    };
    CampeonatosService.prototype.getCampeonatoDiv = function (div) {
        return this.http.get(this.URL_Base + 'liga/campeonatodiv' + "/" + div);
    };
    CampeonatosService.prototype.putCampeonato = function (campeonato) {
        return this.http.put(this.URL_API + ("/" + campeonato.campeonatoid), campeonato);
    };
    CampeonatosService.prototype.deleteCampeonato = function (campeonatoid) {
        return this.http.delete(this.URL_API + "/" + campeonatoid);
    };
    CampeonatosService.prototype.getFechasCam = function (campeonatoid) {
        return this.http.get(this.URL_Base + 'liga/campeonatofec' + "/" + campeonatoid);
    };
    CampeonatosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CampeonatosService);
    return CampeonatosService;
}());



/***/ }),

/***/ "./src/app/services/campeonatos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/campeonatos.service.ts ***!
  \*************************************************/
/*! exports provided: CampeonatosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampeonatosService", function() { return CampeonatosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_campeonatos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/campeonatos */ "./src/app/models/campeonatos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CampeonatosService = /** @class */ (function () {
    function CampeonatosService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/campeonato';
        this.selectedCampeonato = new _models_campeonatos__WEBPACK_IMPORTED_MODULE_2__["Campeonato"]();
    }
    CampeonatosService.prototype.postCampeonato = function (campeonato) {
        return this.http.post(this.URL_API, campeonato);
    };
    CampeonatosService.prototype.getCampeonato = function () {
        return this.http.get(this.URL_API);
    };
    CampeonatosService.prototype.getCampeonatonom = function (campeonatoid) {
        return this.http.get(this.URL_API + "/" + campeonatoid);
    };
    CampeonatosService.prototype.getCampeonatonompar = function (partidoid) {
        return this.http.get(this.URL_Base + 'liga/campeonatonom' + "/" + partidoid);
    };
    CampeonatosService.prototype.getCampeonatoDiv = function (div) {
        return this.http.get(this.URL_Base + 'liga/campeonatodiv' + "/" + div);
    };
    CampeonatosService.prototype.putCampeonato = function (campeonato) {
        return this.http.put(this.URL_API + ("/" + campeonato.campeonatoid), campeonato);
    };
    CampeonatosService.prototype.deleteCampeonato = function (campeonatoid) {
        return this.http.delete(this.URL_API + "/" + campeonatoid);
    };
    CampeonatosService.prototype.getFechasCam = function (campeonatoid) {
        return this.http.get(this.URL_Base + 'liga/campeonatofec' + "/" + campeonatoid);
    };
    CampeonatosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CampeonatosService);
    return CampeonatosService;
}());



/***/ }),

/***/ "./src/app/services/divisionales.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/divisionales.service.ts ***!
  \**************************************************/
/*! exports provided: DivisionalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionalesService", function() { return DivisionalesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_divisionales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/divisionales */ "./src/app/models/divisionales.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DivisionalesService = /** @class */ (function () {
    function DivisionalesService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/divisional';
        this.selectedDivisional = new _models_divisionales__WEBPACK_IMPORTED_MODULE_2__["Divisional"]();
    }
    DivisionalesService.prototype.postDivisional = function (divisional) {
        return this.http.post(this.URL_API, divisional);
    };
    DivisionalesService.prototype.getDivisional = function () {
        return this.http.get(this.URL_API);
    };
    DivisionalesService.prototype.getDivisionalCam = function () {
        return this.http.get(this.URL_Base + 'liga/divisionalcam');
    };
    DivisionalesService.prototype.putDivisional = function (divisional) {
        return this.http.put(this.URL_API + ("/" + divisional.divisionalid), divisional);
    };
    DivisionalesService.prototype.deleteDivisional = function (divisionalid) {
        return this.http.delete(this.URL_API + "/" + divisionalid);
    };
    DivisionalesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DivisionalesService);
    return DivisionalesService;
}());



/***/ }),

/***/ "./src/app/services/equipos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/equipos.service.ts ***!
  \*********************************************/
/*! exports provided: EquiposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquiposService", function() { return EquiposService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_equipos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/equipos */ "./src/app/models/equipos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquiposService = /** @class */ (function () {
    function EquiposService(http) {
        this.http = http;
        this.basepath = '../assets';
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/equipo';
        this.selectedEquipo = new _models_equipos__WEBPACK_IMPORTED_MODULE_2__["Equipo"]();
    }
    EquiposService.prototype.postEquipo = function (equipo) {
        return this.http.post(this.URL_API, equipo);
    };
    EquiposService.prototype.postEquipoImg = function (eqimg) {
        return this.http.post(this.URL_Base + 'liga/equipoimg', eqimg);
    };
    EquiposService.prototype.getEquipo = function () {
        return this.http.get(this.URL_API);
    };
    EquiposService.prototype.getEquipoPpal = function () {
        return this.http.get(this.URL_Base + 'liga/equipoppal');
    };
    EquiposService.prototype.getEquipoid = function (equipoid) {
        if (isNaN(equipoid)) {
            console.log('Error en equipoid');
        }
        else {
            return this.http.get(this.URL_API + "/" + equipoid);
        }
    };
    EquiposService.prototype.getEquiponom = function (nom) {
        return this.http.get(this.URL_Base + 'liga/equiponom' + "/" + nom);
    };
    EquiposService.prototype.getCanEquipo = function (cam) {
        return this.http.get(this.URL_Base + 'liga/equipocan' + "/" + cam);
    };
    EquiposService.prototype.getCanEquipocam = function (cam) {
        return this.http.get(this.URL_Base + 'liga/equipocancam' + "/" + cam);
    };
    EquiposService.prototype.getCanEquipocamTotal = function (cam) {
        return this.http.get(this.URL_Base + 'liga/equipocancamtotal' + "/" + cam);
    };
    EquiposService.prototype.getCanEquipocamTotalCla = function (cam) {
        return this.http.get(this.URL_Base + 'liga/equipocancamtotalcla' + "/" + cam);
    };
    EquiposService.prototype.putEquipo = function (equipo) {
        console.log(equipo);
        return this.http.put(this.URL_API + ("/" + equipo.equipoid), equipo);
    };
    EquiposService.prototype.deleteEquipo = function (equipoid) {
        return this.http.delete(this.URL_API + "/" + equipoid);
    };
    EquiposService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EquiposService);
    return EquiposService;
}());



/***/ }),

/***/ "./src/app/services/jugadores.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/jugadores.service.ts ***!
  \***********************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_jugadores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/jugadores */ "./src/app/models/jugadores.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JugadoresService = /** @class */ (function () {
    function JugadoresService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/Jugador';
        this.selectedJugador = new _models_jugadores__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
    }
    JugadoresService.prototype.postJugador = function (jugador) {
        return this.http.post(this.URL_API, jugador);
    };
    JugadoresService.prototype.getJugador = function () {
        return this.http.get(this.URL_API);
    };
    JugadoresService.prototype.getJugadorId = function (ju) {
        return this.http.get(this.URL_API + "/" + ju);
    };
    JugadoresService.prototype.getJugadoresEq = function (eq) {
        return this.http.get(this.URL_API + "/" + eq);
    };
    JugadoresService.prototype.getJugadorEncargado = function (eq) {
        if (isNaN(eq)) {
            console.log('Error en equipoid');
        }
        else {
            return this.http.get(this.URL_Base + 'liga/jugadoreq' + "/" + eq);
        }
    };
    JugadoresService.prototype.suspenderJugador = function (jugador) {
        return this.http.put(this.URL_Base + 'liga/jugadorsus' + ("/" + jugador.jugadorid), jugador);
    };
    JugadoresService.prototype.habilitarJugador = function (jugador) {
        return this.http.put(this.URL_Base + 'liga/jugadorhab' + ("/" + jugador.jugadorid), jugador);
    };
    JugadoresService.prototype.putJugador = function (jugador) {
        return this.http.put(this.URL_API + ("/" + jugador.jugadorid), jugador);
    };
    JugadoresService.prototype.deleteJugador = function (jugadorid) {
        return this.http.delete(this.URL_API + "/" + jugadorid);
    };
    JugadoresService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JugadoresService);
    return JugadoresService;
}());



/***/ }),

/***/ "./src/app/services/jupars.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/jupars.service.ts ***!
  \********************************************/
/*! exports provided: JuparsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuparsService", function() { return JuparsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_jugpar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/jugpar */ "./src/app/models/jugpar.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JuparsService = /** @class */ (function () {
    function JuparsService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/jugpar';
        this.selectedJugpar = new _models_jugpar__WEBPACK_IMPORTED_MODULE_2__["Jugpar"]();
    }
    //Inserto por defectos todos los jugadores de los equipos al partido
    JuparsService.prototype.postJugparTot = function (jugpar) {
        return this.http.post(this.URL_Base + 'liga/jugpartot', jugpar);
    };
    //Inserto un jugador a un partido
    JuparsService.prototype.postJugpar = function (jugpar) {
        return this.http.post(this.URL_API, jugpar);
    };
    JuparsService.prototype.getJugpar = function (Parid, eq) {
        return this.http.get(this.URL_API + "/" + Parid + "/" + eq);
    };
    JuparsService.prototype.getJugparEstadistica = function (jugid) {
        return this.http.get(this.URL_Base + 'liga/jugparestadistica' + "/" + jugid);
    };
    JuparsService.prototype.getJugparGolPar = function (Parid, eq, nro) {
        return this.http.get(this.URL_Base + 'liga/jugpargolpar' + "/" + Parid + "/" + eq + "/" + nro);
    };
    JuparsService.prototype.getJugparAmaPar = function (Parid, eq, nro) {
        return this.http.get(this.URL_Base + 'liga/jugparamapar' + "/" + Parid + "/" + eq + "/" + nro);
    };
    JuparsService.prototype.getJugparRojPar = function (Parid, eq, nro) {
        return this.http.get(this.URL_Base + 'liga/jugparrojpar' + "/" + Parid + "/" + eq + "/" + nro);
    };
    JuparsService.prototype.getJugGol = function (cam) {
        return this.http.get(this.URL_Base + 'liga/jugpargol' + "/" + cam);
    };
    JuparsService.prototype.getJugAmaRoj = function (eq) {
        return this.http.get(this.URL_Base + 'liga/jugparamaroj' + "/" + eq);
    };
    JuparsService.prototype.putJugpar = function (jugpar) {
        return this.http.put(this.URL_API + ("/" + jugpar.jugparid), jugpar);
    };
    JuparsService.prototype.deleteJugpar = function (jugparid) {
        return this.http.delete(this.URL_API + "/" + jugparid);
    };
    JuparsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JuparsService);
    return JuparsService;
}());



/***/ }),

/***/ "./src/app/services/modalidad.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/modalidad.service.ts ***!
  \***********************************************/
/*! exports provided: ModalidadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalidadesService", function() { return ModalidadesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_modalidades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/modalidades */ "./src/app/models/modalidades.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalidadesService = /** @class */ (function () {
    function ModalidadesService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/modalidad';
        this.selectedModalidad = new _models_modalidades__WEBPACK_IMPORTED_MODULE_2__["Modalidad"]();
    }
    ModalidadesService.prototype.postModalidad = function (modalidad) {
        return this.http.post(this.URL_API, modalidad);
    };
    ModalidadesService.prototype.getModalidad = function () {
        return this.http.get(this.URL_API);
    };
    ModalidadesService.prototype.putModalidad = function (modalidad) {
        return this.http.put(this.URL_API + ("/" + modalidad.modalidadid), modalidad);
    };
    ModalidadesService.prototype.deleteModalidad = function (modalidadid) {
        return this.http.delete(this.URL_API + "/" + modalidadid);
    };
    ModalidadesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModalidadesService);
    return ModalidadesService;
}());



/***/ }),

/***/ "./src/app/services/noticias.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/noticias.service.ts ***!
  \**********************************************/
/*! exports provided: NoticiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasService", function() { return NoticiasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_noticias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/noticias */ "./src/app/models/noticias.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticiasService = /** @class */ (function () {
    function NoticiasService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/noticias';
        this.selectedNoticia = new _models_noticias__WEBPACK_IMPORTED_MODULE_2__["Noticia"]();
    }
    NoticiasService.prototype.postNoticia = function (noticia) {
        return this.http.post(this.URL_API, noticia);
    };
    NoticiasService.prototype.getNoticia = function () {
        return this.http.get(this.URL_API);
    };
    NoticiasService.prototype.getNoticiaId = function (not) {
        return this.http.get(this.URL_Base + 'liga/noticiaid' + "/" + not);
    };
    NoticiasService.prototype.getNoticiaEq = function (Eq) {
        return this.http.get(this.URL_API + "/" + Eq);
    };
    NoticiasService.prototype.putNoticia = function (noticia) {
        return this.http.put(this.URL_API + ("/" + noticia.noticiasid), noticia);
    };
    NoticiasService.prototype.deleteNoticia = function (noticiasid) {
        return this.http.delete(this.URL_API + "/" + noticiasid);
    };
    NoticiasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NoticiasService);
    return NoticiasService;
}());



/***/ }),

/***/ "./src/app/services/pagoequipos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/pagoequipos.service.ts ***!
  \*************************************************/
/*! exports provided: PagoequiposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoequiposService", function() { return PagoequiposService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_pagoequipos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pagoequipos */ "./src/app/models/pagoequipos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagoequiposService = /** @class */ (function () {
    function PagoequiposService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/pagoequipo';
        this.selectedPagoequipo = new _models_pagoequipos__WEBPACK_IMPORTED_MODULE_2__["Pagoequipo"]();
    }
    PagoequiposService.prototype.postPagoequipo = function (pagoequipo) {
        return this.http.post(this.URL_API, pagoequipo);
    };
    PagoequiposService.prototype.getPagoequipo = function (eq) {
        return this.http.get(this.URL_API + "/" + eq);
    };
    PagoequiposService.prototype.getPagoequipos = function () {
        return this.http.get(this.URL_API);
    };
    PagoequiposService.prototype.putPagoequipo = function (pagoequipo) {
        return this.http.put(this.URL_API + ("/" + pagoequipo.pagoequipoid), pagoequipo);
    };
    PagoequiposService.prototype.deletePagoequipo = function (pagoequipoid) {
        return this.http.delete(this.URL_API + "/" + pagoequipoid);
    };
    PagoequiposService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PagoequiposService);
    return PagoequiposService;
}());



/***/ }),

/***/ "./src/app/services/parametros.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/parametros.service.ts ***!
  \************************************************/
/*! exports provided: ParametrosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametrosService", function() { return ParametrosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParametrosService = /** @class */ (function () {
    function ParametrosService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/parametro';
    }
    ParametrosService.prototype.getParametro = function (par) {
        return this.http.get(this.URL_API + "/" + par);
    };
    ParametrosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ParametrosService);
    return ParametrosService;
}());



/***/ }),

/***/ "./src/app/services/partidos.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/partidos.service.ts ***!
  \**********************************************/
/*! exports provided: PartidosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosService", function() { return PartidosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_partidos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/partidos */ "./src/app/models/partidos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartidosService = /** @class */ (function () {
    function PartidosService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/partidos';
        this.selectedPartido = new _models_partidos__WEBPACK_IMPORTED_MODULE_2__["Partido"]();
    }
    //Ingreso partido
    PartidosService.prototype.postPartido = function (partido) {
        return this.http.post(this.URL_API, partido);
    };
    //Ingreso fotos de un partido
    PartidosService.prototype.postPartidoFot = function (camfec) {
        return this.http.post(this.URL_Base + 'liga/partidosfot', camfec);
    };
    //Consulta partidos de un campeonato
    PartidosService.prototype.getPartido = function (CamId) {
        return this.http.get(this.URL_API + "/" + CamId);
    };
    //Consulta partido
    PartidosService.prototype.getPartidoJug = function (ParId) {
        return this.http.get(this.URL_Base + 'liga/partidosjug' + ("/" + ParId));
    };
    //Consulta fotos de un partido
    PartidosService.prototype.getPartidoFot = function (ParId) {
        return this.http.get(this.URL_Base + 'liga/partidosfot' + ("/" + ParId));
    };
    //Consulta fotos de un campeonato
    PartidosService.prototype.getPartidoFotCam = function (CamId) {
        return this.http.get(this.URL_Base + 'liga/partidosfotcam' + ("/" + CamId));
    };
    //Consulta partidos de equipo
    PartidosService.prototype.getpartidosequipo = function (eqid) {
        return this.http.get(this.URL_Base + 'liga/partidosequipo' + ("/" + eqid));
    };
    //Consulta partidos de un campeonato por fechas
    PartidosService.prototype.getpartidosFecCam = function (camid, camnom) {
        return this.http.get(this.URL_Base + 'liga/partidosfeccam' + ("/" + camid) + ("/" + camnom));
    };
    //Consulta partidos de un Campeonato y una fecha dada
    PartidosService.prototype.getpartidosFec = function (camid, fec) {
        return this.http.get(this.URL_Base + 'liga/partidosfec' + ("/" + camid) + ("/" + fec));
    };
    //Consulta cantidad de partidos de un Campeonato y un equipo
    PartidosService.prototype.getpartidosjugados = function (camid, equ) {
        return this.http.get(this.URL_Base + 'liga/partidosjugados' + ("/" + camid) + ("/" + equ));
    };
    //Consulta cantidad de partidos ganados de un Campeonato y un equipo
    PartidosService.prototype.getpartidosganados = function (camid, equ) {
        return this.http.get(this.URL_Base + 'liga/partidosganados' + ("/" + camid) + ("/" + equ));
    };
    //Consulta cantidad de partidos perdidos de un Campeonato y un equipo
    PartidosService.prototype.getpartidosperdidos = function (camid, equ) {
        return this.http.get(this.URL_Base + 'liga/partidosperdidos' + ("/" + camid) + ("/" + equ));
    };
    //Consulta cantidad de partidos empatados de un Campeonato y un equipo
    PartidosService.prototype.getpartidosempatados = function (camid, equ) {
        return this.http.get(this.URL_Base + 'liga/partidosempatados' + ("/" + camid) + ("/" + equ));
    };
    //Consulta la cantidad de goles a favor por equipo
    PartidosService.prototype.getpartidosgolesf = function (camid, equ) {
        return this.http.get(this.URL_Base + 'liga/partidosgolesf' + ("/" + camid) + ("/" + equ));
    };
    //Consulta la cantidad de goles en contra por equipo
    PartidosService.prototype.getpartidosgolesc = function (camid, equ) {
        return this.http.get(this.URL_Base + 'liga/partidosgolesc' + ("/" + camid) + ("/" + equ));
    };
    //Consulta datos de partidos de los campeonatos CLASIFICATORIOS
    PartidosService.prototype.getpartidosNomFec = function (nom) {
        return this.http.get(this.URL_Base + 'liga/partidosnomfec' + ("/" + nom));
    };
    //Consulta nombre de las fechas de los campeonatos CLASIFICATORIOS
    PartidosService.prototype.getpartidosNomFecCla = function (camppal, cam) {
        return this.http.get(this.URL_Base + 'liga/partidosnomfeccla' + ("/" + camppal) + ("/" + cam));
    };
    //Consulta la cantidad de goles en contra por equipo
    PartidosService.prototype.getpartidosFecCla = function (camid, fec) {
        return this.http.get(this.URL_Base + 'liga/partidosfeccla' + ("/" + camid) + ("/" + fec));
    };
    //Guardo partido
    PartidosService.prototype.putPartido = function (partido) {
        return this.http.put(this.URL_API + ("/" + partido.Partidosid), partido);
    };
    PartidosService.prototype.putPartidoRes = function (partido) {
        return this.http.put(this.URL_Base + 'liga/partidosres' + ("/" + partido.Partidosid), partido);
    };
    //Borro partido 
    PartidosService.prototype.deletePartido = function (PartidosId) {
        return this.http.delete(this.URL_API + "/" + PartidosId);
    };
    //Borrar fotos del partido
    PartidosService.prototype.deletePartidoFot = function (CamFecFotosId) {
        return this.http.delete(this.URL_Base + 'liga/partidosfot' + "/" + CamFecFotosId);
    };
    PartidosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PartidosService);
    return PartidosService;
}());



/***/ }),

/***/ "./src/app/services/usuariologin.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/usuariologin.service.ts ***!
  \**************************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
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

var UserLoginService = /** @class */ (function () {
    function UserLoginService() {
        this.isUserLoggedIn = false;
    }
    UserLoginService.prototype.setUserLoggedIn = function (user) {
        this.isUserLoggedIn = true;
        this.userLogged = user;
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    };
    UserLoginService.prototype.getUserLoggedIn = function () {
        var user;
        var usr = sessionStorage.getItem('currentUser');
        if (usr != null) {
            this.isUserLoggedIn = true;
            return JSON.parse(sessionStorage.getItem('currentUser'));
        }
    };
    UserLoginService.prototype.setUserLoggedOut = function () {
        this.isUserLoggedIn = false;
        sessionStorage.removeItem('currentUser');
    };
    UserLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserLoginService);
    return UserLoginService;
}());



/***/ }),

/***/ "./src/app/services/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_usuarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/usuarios */ "./src/app/models/usuarios.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuariosService = /** @class */ (function () {
    function UsuariosService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/usuario';
        this.selectedUsuario = new _models_usuarios__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
    }
    UsuariosService.prototype.postUsuario = function (usuario) {
        return this.http.post(this.URL_API, usuario);
    };
    UsuariosService.prototype.getUsuario = function () {
        return this.http.get(this.URL_API);
    };
    UsuariosService.prototype.putUsuario = function (usuario) {
        return this.http.put(this.URL_API + ("/" + usuario.usuariosid), usuario);
    };
    UsuariosService.prototype.deleteUsuario = function (usuarioid) {
        return this.http.delete(this.URL_API + "/" + usuarioid);
    };
    UsuariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "./src/app/services/viewequipos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/viewequipos.service.ts ***!
  \*************************************************/
/*! exports provided: ViewEquiposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEquiposService", function() { return ViewEquiposService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_equipos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/equipos */ "./src/app/models/equipos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewEquiposService = /** @class */ (function () {
    function ViewEquiposService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/viewequipo';
        this.selectedEquipo = new _models_equipos__WEBPACK_IMPORTED_MODULE_2__["Equipo"]();
    }
    ViewEquiposService.prototype.getViewEquipoImg = function () {
        return this.http.get(this.URL_API);
    };
    ViewEquiposService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ViewEquiposService);
    return ViewEquiposService;
}());

;


/***/ }),

/***/ "./src/app/services/zonas.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/zonas.service.ts ***!
  \*******************************************/
/*! exports provided: ZonasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonasService", function() { return ZonasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_zonas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/zonas */ "./src/app/models/zonas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZonasService = /** @class */ (function () {
    function ZonasService(http) {
        this.http = http;
        this.URL_Base = 'http://18.188.46.253:8089/';
        this.URL_API = this.URL_Base + 'liga/zona';
        this.selectedZona = new _models_zonas__WEBPACK_IMPORTED_MODULE_2__["Zona"]();
    }
    ZonasService.prototype.postZona = function (zona) {
        return this.http.post(this.URL_API, zona);
    };
    ZonasService.prototype.getZona = function () {
        return this.http.get(this.URL_API);
    };
    ZonasService.prototype.putZona = function (zona) {
        return this.http.put(this.URL_API + ("/" + zona.zonaid), zona);
    };
    ZonasService.prototype.deleteZona = function (zonaid) {
        return this.http.delete(this.URL_API + "/" + zonaid);
    };
    ZonasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ZonasService);
    return ZonasService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Ds\Proyectos\Node\LigaTotal_Web\ligafront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map