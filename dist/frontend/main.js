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

/***/ "./src/app/actions/movies.action.ts":
/*!******************************************!*\
  !*** ./src/app/actions/movies.action.ts ***!
  \******************************************/
/*! exports provided: MovieAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieAction", function() { return MovieAction; });
var MovieAction = /** @class */ (function () {
    function MovieAction() {
    }
    MovieAction.prototype.setMoviesAction = function (movies) {
        return {
            type: MovieAction.SET_MOVIES,
            payload: movies
        };
    };
    MovieAction.prototype.addMovieAction = function (movie) {
        return {
            type: MovieAction.ADD_MOVIE,
            payload: movie
        };
    };
    MovieAction.prototype.removeMovieAction = function (movieId) {
        return {
            type: MovieAction.REMOVE_MOVIE,
            payload: movieId
        };
    };
    MovieAction.prototype.editMovieAction = function (movie) {
        return {
            type: MovieAction.EDIT_MOVIE,
            payload: movie
        };
    };
    MovieAction.prototype.selectMovieAction = function (movie) {
        return {
            type: MovieAction.SELECT_MOVE,
            payload: movie
        };
    };
    MovieAction.ADD_MOVIE = "ADD_MOVIE";
    MovieAction.SET_MOVIES = "SET_MOVIES";
    MovieAction.SELECT_MOVE = "SELECT_MOVE";
    MovieAction.REMOVE_MOVIE = "REMOVE_MOVIE";
    MovieAction.EDIT_MOVIE = "EDIT_MOVIE";
    return MovieAction;
}());



/***/ }),

/***/ "./src/app/apis/ombapi.ts":
/*!********************************!*\
  !*** ./src/app/apis/ombapi.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: 'https://www.omdbapi.com/?i=tt3896198&apikey=61c5fbb7&t=',
}));


/***/ }),

/***/ "./src/app/apis/youtubeApi.ts":
/*!************************************!*\
  !*** ./src/app/apis/youtubeApi.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var API_KEY = "AIzaSyBSG5PLBrmFjpV9RYv0CFN-1s47Fb_-K_Q";
/* harmony default export */ __webpack_exports__["default"] = (function (title) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
        baseURL: "https://content.googleapis.com/youtube/v3/search",
        params: {
            part: 'snippet',
            maxResults: 1,
            q: title + "trailer",
            key: API_KEY,
        }
    });
});


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movies></app-movies>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/youtube.service */ "./src/app/services/youtube.service.ts");
/* harmony import */ var _components_movies_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movies/movie-item/movie-item.component */ "./src/app/components/movies/movie-item/movie-item.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/movies/movie-details/movie-details.component */ "./src/app/components/movies/movie-details/movie-details.component.ts");
/* harmony import */ var _components_movieTrailer_movieTrailer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movieTrailer/movieTrailer.component */ "./src/app/components/movieTrailer/movieTrailer.component.ts");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");
/* harmony import */ var _pipes_rating_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/rating.pipe */ "./src/app/pipes/rating.pipe.ts");
/* harmony import */ var _pipes_genre_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/genre.pipe */ "./src/app/pipes/genre.pipe.ts");
/* harmony import */ var _pipes_year_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/year.pipe */ "./src/app/pipes/year.pipe.ts");
/* harmony import */ var _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/movie-form/movie-form.component */ "./src/app/components/movie-form/movie-form.component.ts");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/validation-message/validation-message.component */ "./src/app/components/validation-message/validation-message.component.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _pipes_title_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/title.pipe */ "./src/app/pipes/title.pipe.ts");
/* harmony import */ var _actions_movies_action__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./actions/movies.action */ "./src/app/actions/movies.action.ts");
/* harmony import */ var _directives_scroll_top_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/scroll-top.directive */ "./src/app/directives/scroll-top.directive.ts");
























var AppModule = /** @class */ (function () {
    function AppModule(ngRedux) {
        ngRedux.provideStore(_store__WEBPACK_IMPORTED_MODULE_6__["store"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
                _components_movies_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_10__["MovieItemComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_12__["MovieDetailsComponent"],
                _components_movieTrailer_movieTrailer_component__WEBPACK_IMPORTED_MODULE_13__["MovieTrailer"],
                _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_14__["SafePipe"],
                _pipes_rating_pipe__WEBPACK_IMPORTED_MODULE_15__["RatingPipe"],
                _pipes_genre_pipe__WEBPACK_IMPORTED_MODULE_16__["GenrePipe"],
                _pipes_year_pipe__WEBPACK_IMPORTED_MODULE_17__["YearPipe"],
                _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_18__["MovieFormComponent"],
                _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_19__["ValidationMessageComponent"],
                _pipes_title_pipe__WEBPACK_IMPORTED_MODULE_21__["TitlePipe"],
                _directives_scroll_top_directive__WEBPACK_IMPORTED_MODULE_23__["ScrollTopDirective"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgReduxModule"]
            ],
            providers: [_services_movies_service__WEBPACK_IMPORTED_MODULE_8__["MoviesService"], _services_youtube_service__WEBPACK_IMPORTED_MODULE_9__["YoutubeService"], _services_validation_service__WEBPACK_IMPORTED_MODULE_20__["ValidationService"], _actions_movies_action__WEBPACK_IMPORTED_MODULE_22__["MovieAction"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/movie.ts":
/*!**********************************!*\
  !*** ./src/app/classes/movie.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Movie = /** @class */ (function () {
    function Movie(id, title, year, runtime, genre, director, poster, plot, rating) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
        this.poster = poster;
        this.plot = plot;
        this.rating = rating;
    }
    return Movie;
}());
/* harmony default export */ __webpack_exports__["default"] = (Movie);


/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-header {\n  display: flex;\n  justify-content: space-between;\n  margin:20px 0;\n}\n\n.main-header button {\n  color: whitesmoke;\n  border: whitesmoke 1px solid;\n}\n\n.main-header i {\n  opacity: 0.7;\n\n}\n\n.main-header button {\n  opacity: 0.7;\n}\n\n.main-header > button:hover {\n  opacity: 1;\n}\n\n.main-header > i:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxhQUFhOztDQUVkOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46MjBweCAwO1xufVxuXG4ubWFpbi1oZWFkZXIgYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlcjogd2hpdGVzbW9rZSAxcHggc29saWQ7XG59XG5cbi5tYWluLWhlYWRlciBpIHtcbiAgb3BhY2l0eTogMC43O1xuXG59XG5cbi5tYWluLWhlYWRlciBidXR0b24ge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5tYWluLWhlYWRlciA+IGJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tYWluLWhlYWRlciA+IGk6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header-container\">\n  <div class=\"main-header\">\n    <i class=\"material-icons\">search</i>\n    <button (click)=\"onOpenModal()\" class=\"btn-flat\">Add</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/modal.service */ "./src/app/services/modal.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService) {
        this.modalService = modalService;
        this.searchMode = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onOpenModal = function () {
        this.modalService.setModalState("form");
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/movie-form/movie-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/movie-form/movie-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-container {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.modal-background {\n  background-image: radial-gradient(#a09e9e, black);\n  width: 100%;\n  height: 100%;\n  opacity: 0.7;  \n  position: absolute;\n}\n\n.form-main-container {\n  width: 33%;\n  height: 600px;\n  position: relative;\n  left: 33%;\n  top: 10%;\n  background: #222; \n  box-shadow: 4px 4px 4px black;\n  -webkit-animation-name: animatetop;\n          animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n}\n\n.delete-modal-container {\n  width: 33%;\n  height: 300px;\n  position: relative;\n  left: 33%;\n  top: 10%;\n  background: #222; \n  box-shadow: 4px 4px 4px black;\n  -webkit-animation-name: animatetop;\n          animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n}\n\n.delete-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 20px;\n}\n\n@-webkit-keyframes animatetop {\n  from {top: -300px; opacity: 0}\n  to {top: 10%; opacity: 1;}\n}\n\n@keyframes animatetop {\n  from {top: -300px; opacity: 0}\n  to {top: 10%; opacity: 1;}\n}\n\n@media (max-width:1100px) {\n  .form-main-container {\n    width: 40%;\n    left: 30%;\n  }\n\n}\n\n@media (max-width:850px) {\n  .form-main-container {\n    width: 60%;\n    left: 20%;\n  }\n}\n\n@media (max-width:650px) {\n  .form-main-container {\n    width: 80%;\n    left: 10%;\n  }\n}\n\n@media (max-width:450px) {\n  .form-main-container {\n    width: 90%;\n    left: 5%;\n  }\n}\n\n.custom-modal {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.form-container {\n  margin: 20px 0;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.form-group input {\n  background: black !important;\n  border-radius: 10px ;\n  width: 100% ;\n  padding: 10px ;\n  color: whitesmoke;\n  border-bottom: none !important;\n  height: 2rem;\n  margin-bottom: 5px;\n}\n\n.form-group input:focus{\n  box-shadow: 0 0 ;\n}\n\n.form-group input::-webkit-input-placeholder {\n  color: rgb(189, 185, 185); \n  opacity: 0.7;\n}\n\n.form-group input::-ms-input-placeholder {\n  color: rgb(189, 185, 185); \n  opacity: 0.7;\n}\n\n.form-group input::placeholder {\n  color: rgb(189, 185, 185); \n  opacity: 0.7;\n}\n\n.form-group input:after {\n  border-bottom: none ;\n}\n\n.form-actions {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0;\n}\n\n.submit {\n  color: whitesmoke;\n  border: 1px solid whitesmoke;\n  opacity: 0.7;\n}\n\n.submit:hover {\n  opacity: 1;\n}\n\n.cancel {\n  opacity: 0.7;\n}\n\n.cancel:hover {\n  opacity: 1;\n}\n\n.sub-details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.sub-details > .form-group {\n  width: 25%\n}\n\n.genre-container {\n  margin-top: 10px;\n  color: whitesmoke;\n}\n\n.genre {\n  margin-top: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  \n}\n\n.genre > p{\n   margin: 0 10px ; \n   width: 25%;\n}\n\n[type=\"checkbox\"]+span:not(.lever) {\n  padding-left: 22px;\n}\n\n.custom-modal-actions {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1mb3JtL21vdmllLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGtEQUFrRDtFQUNsRCxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixpQ0FBeUI7VUFBekIseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLGFBQWE7Q0FDZDs7QUFJRDtFQUNFLE1BQU0sWUFBWSxDQUFDLFVBQVUsQ0FBQztFQUM5QixJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUM7Q0FDM0I7O0FBSEQ7RUFDRSxNQUFNLFlBQVksQ0FBQyxVQUFVLENBQUM7RUFDOUIsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDO0NBQzNCOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztDQUVGOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtHQUNYO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVO0dBQ1g7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsV0FBVztJQUNYLFNBQVM7R0FDVjtDQUNGOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0NBQ2Q7O0FBSEQ7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtDQUNkOztBQUhEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7O0NBRWpCOztBQUVEO0dBQ0csZ0JBQWdCO0dBQ2hCLFdBQVc7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFHRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWZvcm0vbW92aWUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9kYWwtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjYTA5ZTllLCBibGFjayk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNzsgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5mb3JtLW1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzMyU7XG4gIHRvcDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjMjIyOyBcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5kZWxldGUtbW9kYWwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzMyU7XG4gIHRvcDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjMjIyOyBcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5kZWxldGUtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMjBweDtcbn1cblxuXG5cbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XG4gIGZyb20ge3RvcDogLTMwMHB4OyBvcGFjaXR5OiAwfVxuICB0byB7dG9wOiAxMCU7IG9wYWNpdHk6IDE7fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxMTAwcHgpIHtcbiAgLmZvcm0tbWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbGVmdDogMzAlO1xuICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ODUwcHgpIHtcbiAgLmZvcm0tbWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbGVmdDogMjAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjY1MHB4KSB7XG4gIC5mb3JtLW1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo0NTBweCkge1xuICAuZm9ybS1tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiA1JTtcbiAgfVxufVxuXG4uY3VzdG9tLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDtcbiAgd2lkdGg6IDEwMCUgO1xuICBwYWRkaW5nOiAxMHB4IDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3Vze1xuICBib3gtc2hhZG93OiAwIDAgO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiKDE4OSwgMTg1LCAxODUpOyBcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dDphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgO1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5zdWJtaXQge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uc3VibWl0OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhbmNlbCB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmNhbmNlbDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zdWItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnN1Yi1kZXRhaWxzID4gLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMjUlXG59XG5cbi5nZW5yZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmdlbnJlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIFxufVxuXG4uZ2VucmUgPiBwe1xuICAgbWFyZ2luOiAwIDEwcHggOyBcbiAgIHdpZHRoOiAyNSU7XG59XG5cblt0eXBlPVwiY2hlY2tib3hcIl0rc3Bhbjpub3QoLmxldmVyKSB7XG4gIHBhZGRpbmctbGVmdDogMjJweDtcbn1cblxuXG4uY3VzdG9tLW1vZGFsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/movie-form/movie-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-form/movie-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"modalService.modalState ? {} : {display: 'none'}\" class=\"modal-container\">\n  <div class=\"modal-background\">\n  </div>\n  <div *ngIf=\"modalService.deleteMode\" class=\"delete-modal-container\">\n    <div class=\"custom-modal\">\n      <div class=\"delete-modal\">\n        <div class=\"custom-modal-header\">\n          <h4>Are You Sure ?</h4>\n        </div>\n        <div class=\"custom-modal-actions\">\n          <button class=\"btn-flat submit\" type=\"submit\" (click)=\"deleteMovie()\">submit</button>\n          <button class=\"btn cancel red\" (click)=\"onClose(delete)\">cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"modalService.formMode\" class=\"form-main-container\">\n    <div class=\"custom-modal\">\n      <form [formGroup]=\"movieForm\" class=\"form-container\">\n        <div class=\"form-group\">\n          <validation-message [control]=\"movieForm.controls.title\"></validation-message>\n          <input formControlName=\"title\" type=\"text\" name=\"title\" placeholder=\"Title\">\n        </div>\n        <div class=\"form-group\">\n          <validation-message [control]=\"movieForm.controls.director\"></validation-message>\n          <input formControlName=\"director\" type=\"text\" name=\"director\" placeholder=\"director\">\n        </div>\n        <div class=\"form-group\">\n          <validation-message [control]=\"movieForm.controls.poster\"></validation-message>\n          <input formControlName=\"poster\" type=\"text\" name=\"poster\" placeholder=\"Poster-URL\">\n        </div>\n        <div class=\"sub-details\">\n          <div class=\"form-group\">\n            <validation-message [control]=\"movieForm.controls.year\"></validation-message>\n            <input formControlName=\"year\" type=\"text\" name=\"year\" placeholder=\"Year\">\n          </div>\n          <div class=\"form-group\">\n            <validation-message [control]=\"movieForm.controls.rating\"></validation-message>\n            <input formControlName=\"rating\" type=\"text\" name=\"rating\" placeholder=\"rating\">\n          </div>\n          <div class=\"form-group\">\n            <validation-message [control]=\"movieForm.controls.runtime\"></validation-message>\n            <input formControlName=\"runtime\" type=\"text\" name=\"runtime\" placeholder=\"runtime(min)\">\n          </div>\n        </div>\n        <div class=\"genre-container\">\n          <span>Genre:</span>\n          <div class=\"genre\">\n            <p *ngFor=\"let genreControl of movieForm.controls.genres.controls; let i = index\">\n              <label formArrayName=\"genres\">\n                <input [formControlName]=\"i\" class=\"red\" type=\"checkbox\" />\n                <span>{{genres[i]}}</span>\n              </label>\n            </p>\n          </div>\n        </div>\n        <div class=\"form-actions\">\n          <button class=\"btn-flat submit\" type=\"submit\" (click)=\"onSubmit()\">submit</button>\n          <button class=\"btn cancel red\" (click)=\"onClose(form)\">cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/movie-form/movie-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-form/movie-form.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormComponent", function() { return MovieFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var src_app_classes_movie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/classes/movie */ "./src/app/classes/movie.ts");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");









var MovieFormComponent = /** @class */ (function () {
    function MovieFormComponent(fb, modalService, moviesService) {
        this.fb = fb;
        this.modalService = modalService;
        this.moviesService = moviesService;
        this.movieTitles = [];
        this.editMode = false;
        this.genres = ["Action", "Drama", "Comedy", "Adventure", "Crime", "SciFi", "Mystery", "Thriller", "Fantasy"];
        this.movie = new src_app_classes_movie__WEBPACK_IMPORTED_MODULE_7__["default"]("", "", new Date().getFullYear(), "", [], "", "", "", 0);
    }
    ;
    MovieFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialze movie titles 
        this.movies$.subscribe(function (movies) { return _this.movieTitles = movies.map(function (movie) { return movie.title.toLowerCase(); }); });
        // on edit mode set selected movie for movie form
        this.modalService.editMovie$.subscribe(function (movie) { return _this.initEditMode(movie); });
        // initialize genre controls 
        this.genreControls = this.genres.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false); });
        this.setForm();
    };
    MovieFormComponent.prototype.initEditMode = function (movie) {
        var _this = this;
        this.movie = movie;
        // set edit mode
        this.editMode = true;
        // get selected movie genres controls array
        this.genreControls = this.genres.map(function (genre) { return _this.movie.genre.includes(genre) ? new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true) : new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false); });
        this.setForm();
    };
    MovieFormComponent.prototype.setForm = function () {
        var _this = this;
        // initialize movie form
        this.movieForm = this.fb.group({
            "title": [this.movie.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\s]+$/), function (control) { return _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].titleValidator(control, _this.movieTitles); }]],
            "year": [this.movie.year, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].yearValidator]],
            "runtime": [this.movie.runtime, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            "genres": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](this.genreControls),
            "director": [this.movie.director, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            "poster": [this.movie.poster, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/(https?:\/\/.*\.(?:img|png|jpg|jpeg))/i)]],
            "rating": [this.movie.rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(10)]],
        });
    };
    MovieFormComponent.prototype.onSubmit = function () {
        this.markAsTouched();
        // check if form valid 
        if (this.movieForm.status == "INVALID") {
            return;
        }
        // create new Movie Object
        var value = this.movieForm.value;
        // get all checked genres from movie  form
        var genre = this.getGenres(value.genres);
        // add min to run time if needed
        var runtime = value.runtime.indexOf("min") > -1 ? value.runtime : value.runtime += "min";
        // check if already movie has id else create a new id
        var id = this.movie.id == "" ? new Date().getTime().toString() : this.movie.id;
        // (temp hard descripiton as plot)
        var plot = "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.";
        // create new Movie 
        var movie = new src_app_classes_movie__WEBPACK_IMPORTED_MODULE_7__["default"](id, value.title, value.year, runtime, genre, value.director, value.poster, plot, value.rating);
        // check if edit mode else add movie
        this.editMode ? this.moviesService.editMovie(movie) : this.moviesService.addMovie(movie);
        this.onClose();
    };
    MovieFormComponent.prototype.markAsTouched = function () {
        var _this = this;
        // mark all from controls as touched
        Object.keys(this.movieForm.controls).forEach(function (control) { return _this.movieForm.controls[control].markAsTouched(); });
    };
    // parse genre from from value
    MovieFormComponent.prototype.getGenres = function (genres) {
        var _this = this;
        var genre = [];
        genres.forEach(function (val, index) {
            if (val) {
                genre.push(_this.genres[index]);
            }
            ;
        });
        return genre;
    };
    MovieFormComponent.prototype.onClose = function () {
        // turn off modal
        this.modalService.modalState = false;
        // turn of edit mode if needed
        if (this.editMode) {
            this.editMode = false;
        }
        ;
        // initialze form values 
        this.movie = new src_app_classes_movie__WEBPACK_IMPORTED_MODULE_7__["default"]("", "", new Date().getFullYear(), "", [], "", "", "", 0);
        this.genreControls = this.genres.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false); });
        this.setForm();
    };
    MovieFormComponent.prototype.deleteMovie = function () {
        this.moviesService.deleteMovie();
        this.onClose();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["select"])('movies'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], MovieFormComponent.prototype, "movies$", void 0);
    MovieFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-form',
            template: __webpack_require__(/*! ./movie-form.component.html */ "./src/app/components/movie-form/movie-form.component.html"),
            styles: [__webpack_require__(/*! ./movie-form.component.css */ "./src/app/components/movie-form/movie-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"], src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_8__["MoviesService"]])
    ], MovieFormComponent);
    return MovieFormComponent;
}());



/***/ }),

/***/ "./src/app/components/movieTrailer/movieTrailer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/movieTrailer/movieTrailer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iframe-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.preloader-wrapper {\n  -webkit-transform: translate(-25px);\n          transform: translate(-25px)\n}\n\niframe {\n  width: 100%;\n  height: 300px;\n}\n\n@media (max-width: 400px) {\n  iframe {\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZVRyYWlsZXIvbW92aWVUcmFpbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0NBQTJCO1VBQTNCLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLFlBQVk7RUFDWixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZVRyYWlsZXIvbW92aWVUcmFpbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWZyYW1lLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJlbG9hZGVyLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjVweClcbn1cblxuaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICBpZnJhbWUge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/movieTrailer/movieTrailer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/movieTrailer/movieTrailer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"iframe-container\">\n  <iframe *ngIf=\"videoId\" allowfullscreen [src]=\"'https://www.youtube.com/embed/' + videoId | safe\" frameborder=\"0\">\n  </iframe>\n  <div *ngIf=\"!videoId\" class=\"preloader-wrapper active\">\n    <div class=\"spinner-layer spinner-red-only\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"gap-patch\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/movieTrailer/movieTrailer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/movieTrailer/movieTrailer.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieTrailer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTrailer", function() { return MovieTrailer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/youtube.service */ "./src/app/services/youtube.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MovieTrailer = /** @class */ (function () {
    function MovieTrailer(youtubeService) {
        this.youtubeService = youtubeService;
    }
    MovieTrailer.prototype.ngOnInit = function () {
        var _this = this;
        // on movie select set movie id
        this.selectedMovie$.subscribe(function (movie) { return _this.setTailer(movie.title); });
    };
    MovieTrailer.prototype.setTailer = function (title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.videoId = "";
                        _a = this;
                        return [4 /*yield*/, this.youtubeService.fetchTrailer(title)];
                    case 1:
                        _a.videoId = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])('selectedMovie'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MovieTrailer.prototype, "selectedMovie$", void 0);
    MovieTrailer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie-trailer',
            template: __webpack_require__(/*! ./movieTrailer.component.html */ "./src/app/components/movieTrailer/movieTrailer.component.html"),
            styles: [__webpack_require__(/*! ./movieTrailer.component.css */ "./src/app/components/movieTrailer/movieTrailer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeService"]])
    ], MovieTrailer);
    return MovieTrailer;
}());



/***/ }),

/***/ "./src/app/components/movies/movie-details/movie-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/movies/movie-details/movie-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.movie-details {\n  min-height: 305px;\n  margin-bottom: 20px;\n  display: flex;\n  height: 100%;\n}\n\n.details-container {\n  flex: 1;\n  display: flex;\n}\n\n.details {\n  width: 85%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 98.2%;\n}\n\n.header {\n  font-size: 4.0rem\n}\n\n.sub-details {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.rating {\n  color: red;\n}\n\n.details-actions {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.details-actions button {\n  opacity: 0.7;\n  color: whitesmoke;\n}\n\n.details-actions button:hover {\n  opacity: 1;\n}\n\n.details-actions .edit {\n  border: 1px solid whitesmoke;\n}\n\n.movie-trailer-container {\n  flex: 1;\n  position: relative;\n}\n\n@media (max-width: 700px) {\n  .movie-details {\n    flex-direction: column-reverse;\n  }\n\n  .sub-details {\n    display: block;\n  }\n\n  .details {\n    margin-bottom: 20px;\n    width: 100%;\n  }\n}\n\n.bold{\n  font-weight: bold;\n}\n\n.genre {\n  display: flex;\n  margin: 0 10px 10px -10px;\n}\n\n.modal {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsYUFBYTtDQUNkOztBQUVEO0VBQ0UsUUFBUTtFQUNSLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLFFBQVE7RUFDUixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRTtJQUNFLCtCQUErQjtHQUNoQzs7RUFFRDtJQUNFLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxvQkFBb0I7SUFDcEIsWUFBWTtHQUNiO0NBQ0Y7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1vdmllLWRldGFpbHMge1xuICBtaW4taGVpZ2h0OiAzMDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGV0YWlscy1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGV0YWlscyB7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA5OC4yJTtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogNC4wcmVtXG59XG5cbi5zdWItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmF0aW5nIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRldGFpbHMtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWxzLWFjdGlvbnMgYnV0dG9uIHtcbiAgb3BhY2l0eTogMC43O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmRldGFpbHMtYWN0aW9ucyBidXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZGV0YWlscy1hY3Rpb25zIC5lZGl0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuLm1vdmllLXRyYWlsZXItY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm1vdmllLWRldGFpbHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuXG4gIC5zdWItZGV0YWlscyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZGV0YWlscyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYm9sZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5nZW5yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAxMHB4IDEwcHggLTEwcHg7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/movies/movie-details/movie-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/movies/movie-details/movie-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-details\" *ngIf=\"movie\">\n  <div class=\"details-container\">\n    <div class=\"details\">\n      <div class=\"header\">\n        <span>{{movie.title}}</span>\n      </div>\n      <div class=\"genre\" [innerHTML]=\"movie.genre | genre\"></div>\n      <div class=\"sub-details\">\n        <div class=\"rating\" [innerHTML]=\"movie.rating | rating\">\n        </div>\n        <div class=\"year\">\n          <span> <span class=\"bold\">Year:</span> {{movie.year | year}}</span>\n        </div>\n        <div class=\"runtime\">\n          <span> <span class=\"bold\">Duration:</span> {{movie.runtime}}</span>\n        </div>\n      </div>\n      <div class=\"description\">\n        <p>{{movie.plot}}</p>\n      </div>\n      <div class=\"details-actions\">\n        <button class=\"btn-flat edit \" (click)=\"onEdit()\">Edit</button>\n        <button class=\"btn-flat red delete \" (click)=\"onDelete()\">Delete</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"movie-trailer-container\">\n    <movie-trailer [title]=\"movie.title\"></movie-trailer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/movies/movie-details/movie-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/movies/movie-details/movie-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/modal.service */ "./src/app/services/modal.service.ts");






var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(moviesService, modalService) {
        this.moviesService = moviesService;
        this.modalService = modalService;
        this.deleteModal = false;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movie$.subscribe(function (movie) { return _this.movie = movie; });
    };
    MovieDetailsComponent.prototype.onDelete = function () {
        this.modalService.setModalState('delete');
    };
    MovieDetailsComponent.prototype.onEdit = function () {
        this.modalService.editMovie(this.movie);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])('selectedMovie'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"])
    ], MovieDetailsComponent.prototype, "movie$", void 0);
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/components/movies/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.css */ "./src/app/components/movies/movie-details/movie-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"], src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/movies/movie-item/movie-item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/movies/movie-item/movie-item.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-card {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.movie-poster {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.movie-poster:hover {\n  opacity: 0.7;\n}\n\n.movie-details-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.movie-header {\n  position: absolute;\n  top: 0;\n  height: 20%;\n  width: 100%;\n  text-align: center;\n  background-image: linear-gradient(black, transparent);\n  display: none;\n  color: whitesmoke;\n}\n\n.movie-card:hover .movie-header{\n  display: block\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtaXRlbS9tb3ZpZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0RBQXNEO0VBQ3RELGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZS1pdGVtL21vdmllLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb3ZpZS1wb3N0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb3ZpZS1wb3N0ZXI6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5tb3ZpZS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW92aWUtaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmxhY2ssIHRyYW5zcGFyZW50KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5tb3ZpZS1jYXJkOmhvdmVyIC5tb3ZpZS1oZWFkZXJ7XG4gIGRpc3BsYXk6IGJsb2NrXG59Il19 */"

/***/ }),

/***/ "./src/app/components/movies/movie-item/movie-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/movies/movie-item/movie-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onSelectMovie()\" class=\"movie-card\">\n  <img class=\"movie-poster\" [src]=\"movie.poster\">\n  <div class=\"movie-details-container\">\n    <div class=\"movie-header\">\n      <h6>{{movie.title | title}}</h6>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/movies/movie-item/movie-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/movies/movie-item/movie-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");



var MovieItemComponent = /** @class */ (function () {
    function MovieItemComponent(moviesService) {
        this.moviesService = moviesService;
    }
    ;
    MovieItemComponent.prototype.ngOnInit = function () { };
    MovieItemComponent.prototype.onSelectMovie = function () {
        this.moviesService.selectMovie(this.movie);
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieItemComponent.prototype, "movie", void 0);
    MovieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-item',
            template: __webpack_require__(/*! ./movie-item.component.html */ "./src/app/components/movies/movie-item/movie-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-item.component.css */ "./src/app/components/movies/movie-item/movie-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], MovieItemComponent);
    return MovieItemComponent;
}());



/***/ }),

/***/ "./src/app/components/movies/movies.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/movies/movies.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-items-container { \n  display: grid;\n  grid-column-gap: 20px;\n  grid-template-columns: auto auto auto auto auto;\n}\n\n.movie-item {\n  height: 300px;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 1000px) {\n  .movie-items-container {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n\n@media (max-width: 750px) {\n  .movie-items-container {\n    grid-template-columns: auto auto auto;\n  }\n}\n\n@media (max-width: 400px) {\n  .movie-items-container {\n    grid-template-columns: auto auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdEQUFnRDtDQUNqRDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBR0Q7RUFDRTtJQUNFLDJDQUEyQztHQUM1QztDQUNGOztBQUVEO0VBQ0U7SUFDRSxzQ0FBc0M7R0FDdkM7Q0FDRjs7QUFFRDtFQUNFO0lBQ0UsaUNBQWlDO0dBQ2xDO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1pdGVtcy1jb250YWluZXIgeyBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbn1cblxuLm1vdmllLWl0ZW0ge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSBcblxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5tb3ZpZS1pdGVtcy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLm1vdmllLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLm1vdmllLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/movies/movies.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/movies/movies.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div scrollTop class=\"main wrapper container\">\n  <app-header></app-header>\n  <div class=\"movie-details-container\">\n    <app-movie-details></app-movie-details>\n  </div>\n  <div class=\"movie-items\">\n    <div class=\"movie-items-container \">\n      <div class=\"movie-item\" *ngFor=\"let movie of (movies$ | async)\">\n        <app-movie-item [movie]=\"movie\"></app-movie-item>\n      </div>\n    </div>\n  </div>\n</div>\n<app-movie-form></app-movie-form>"

/***/ }),

/***/ "./src/app/components/movies/movies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(moviesService) {
        this.moviesService = moviesService;
        this.titles = [
            "DeadPool",
            "Iron Man",
            "BlackList",
            "Red",
            "Spider Man",
            "Ant Man",
            "The Avengers",
            "jump street",
            "fire",
            "star wars"
        ];
    }
    MoviesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.moviesService.fetchMovies(this.titles)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])('movies'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MoviesComponent.prototype, "movies$", void 0);
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/components/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/components/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/components/validation-message/validation-message.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/validation-message/validation-message.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: red;\n}\n\n.validation {\n  min-height: 30px;\n  margin-top: 10px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWxpZGF0aW9uLW1lc3NhZ2UvdmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92YWxpZGF0aW9uLW1lc3NhZ2UvdmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnZhbGlkYXRpb24ge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4OyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/validation-message/validation-message.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/validation-message/validation-message.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"validation\">\n  <span *ngIf=\"errorMessage !== null\">{{errorMessage}}</span>\n</div>"

/***/ }),

/***/ "./src/app/components/validation-message/validation-message.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/validation-message/validation-message.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ValidationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessageComponent", function() { return ValidationMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");




var ValidationMessageComponent = /** @class */ (function () {
    function ValidationMessageComponent() {
    }
    ValidationMessageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ValidationMessageComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('control'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ValidationMessageComponent.prototype, "control", void 0);
    ValidationMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'validation-message',
            template: __webpack_require__(/*! ./validation-message.component.html */ "./src/app/components/validation-message/validation-message.component.html"),
            styles: [__webpack_require__(/*! ./validation-message.component.css */ "./src/app/components/validation-message/validation-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationMessageComponent);
    return ValidationMessageComponent;
}());



/***/ }),

/***/ "./src/app/directives/scroll-top.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/scroll-top.directive.ts ***!
  \****************************************************/
/*! exports provided: ScrollTopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopDirective", function() { return ScrollTopDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ScrollTopDirective = /** @class */ (function () {
    function ScrollTopDirective(el, ngRedux) {
        var _this = this;
        this.el = el;
        this.ngRedux = ngRedux;
        this.selectedMovie$.subscribe(function () { return _this.el.nativeElement.scrollIntoView(); });
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])('selectedMovie'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ScrollTopDirective.prototype, "selectedMovie$", void 0);
    ScrollTopDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[scrollTop]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], ScrollTopDirective);
    return ScrollTopDirective;
}());



/***/ }),

/***/ "./src/app/pipes/genre.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/genre.pipe.ts ***!
  \*************************************/
/*! exports provided: GenrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenrePipe", function() { return GenrePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var color = {
    Action: "red",
    Drama: "blue",
    Comedy: "Yellow",
    Adventure: "green",
    Crime: "indigo",
    SciFi: "pink",
    Mystery: "orange",
    Thriller: "brown",
    Fantasy: "cyan"
};
var GenrePipe = /** @class */ (function () {
    function GenrePipe() {
        this.html = "";
    }
    GenrePipe.prototype.transform = function (genres) {
        var _this = this;
        this.html = "";
        genres.forEach(function (genre) {
            genre = genre.replace(/[^a-zA-Z]/g, "");
            _this.html += "<span class=\"new badge " + color[genre] + "\">" + genre + "</span>";
        });
        return this.html;
    };
    GenrePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'genre'
        })
    ], GenrePipe);
    return GenrePipe;
}());



/***/ }),

/***/ "./src/app/pipes/rating.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/rating.pipe.ts ***!
  \**************************************/
/*! exports provided: RatingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPipe", function() { return RatingPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingPipe = /** @class */ (function () {
    function RatingPipe() {
    }
    RatingPipe.prototype.transform = function (rating) {
        this.html = "";
        for (var i = 1; i < rating; i++) {
            this.html += '<i class="material-icons">star<i>';
        }
        ;
        return this.html;
    };
    RatingPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'rating'
        })
    ], RatingPipe);
    return RatingPipe;
}());



/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/pipes/title.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/title.pipe.ts ***!
  \*************************************/
/*! exports provided: TitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePipe", function() { return TitlePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TitlePipe = /** @class */ (function () {
    function TitlePipe() {
    }
    TitlePipe.prototype.transform = function (title) {
        return title.toLowerCase().replace(/(?<=(\s|^))[a-z]/g, function (c) { return c.toUpperCase(); });
    };
    TitlePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'title'
        })
    ], TitlePipe);
    return TitlePipe;
}());



/***/ }),

/***/ "./src/app/pipes/year.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/year.pipe.ts ***!
  \************************************/
/*! exports provided: YearPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearPipe", function() { return YearPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var YearPipe = /** @class */ (function () {
    function YearPipe() {
    }
    YearPipe.prototype.transform = function (value) {
        value = value.replace(/[^\d.-]/g, '');
        return new Date(value).getFullYear();
    };
    YearPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'year'
        })
    ], YearPipe);
    return YearPipe;
}());



/***/ }),

/***/ "./src/app/reducers/moviesReducer.ts":
/*!*******************************************!*\
  !*** ./src/app/reducers/moviesReducer.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return moviesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_movies_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/movies.action */ "./src/app/actions/movies.action.ts");


var ADD_MOVIE = _actions_movies_action__WEBPACK_IMPORTED_MODULE_1__["MovieAction"].ADD_MOVIE, SET_MOVIES = _actions_movies_action__WEBPACK_IMPORTED_MODULE_1__["MovieAction"].SET_MOVIES, REMOVE_MOVIE = _actions_movies_action__WEBPACK_IMPORTED_MODULE_1__["MovieAction"].REMOVE_MOVIE, EDIT_MOVIE = _actions_movies_action__WEBPACK_IMPORTED_MODULE_1__["MovieAction"].EDIT_MOVIE;
function moviesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case SET_MOVIES:
            return action.payload;
        case ADD_MOVIE:
            return state.concat([action.payload]);
        case REMOVE_MOVIE:
            return state.filter(function (movie) { return movie.id != action.payload; });
        case EDIT_MOVIE:
            var updatedMovies = state.map(function (movie) {
                if (movie.id === action.payload.id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, movie, action.payload);
                }
                return movie;
            });
            return updatedMovies;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/selectedReducer.ts":
/*!*********************************************!*\
  !*** ./src/app/reducers/selectedReducer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectedReducer; });
/* harmony import */ var _actions_movies_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/movies.action */ "./src/app/actions/movies.action.ts");

var SELECT_MOVE = _actions_movies_action__WEBPACK_IMPORTED_MODULE_0__["MovieAction"].SELECT_MOVE;
function selectedReducer(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case SELECT_MOVE:
            if (!action.payload) {
                return null;
            }
            ;
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modalState = false;
        this.deleteMode = false;
        this.formMode = false;
        this.editMovie$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ModalService.prototype.setModalState = function (modalState) {
        this.modalState = true;
        this.toggleModalMode(modalState);
    };
    ModalService.prototype.toggleModalMode = function (modalMode) {
        this.deleteMode = false;
        this.formMode = false;
        switch (modalMode) {
            case "delete":
                this.deleteMode = true;
                break;
            case "form":
                this.formMode = true;
                break;
            default:
                this.deleteMode = false;
                this.formMode = false;
        }
    };
    ModalService.prototype.editMovie = function (movie) {
        this.setModalState("form");
        this.editMovie$.next(movie);
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_ombapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/ombapi */ "./src/app/apis/ombapi.ts");
/* harmony import */ var _classes_movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/movie */ "./src/app/classes/movie.ts");
/* harmony import */ var _actions_movies_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/movies.action */ "./src/app/actions/movies.action.ts");






var MoviesService = /** @class */ (function () {
    function MoviesService(ngRedux, movieAction) {
        this.ngRedux = ngRedux;
        this.movieAction = movieAction;
    }
    MoviesService.prototype.fetchMovies = function (titles) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requests, movies;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requests = titles.map(function (title) { return _this.fetchMovie(title); });
                        return [4 /*yield*/, Promise.all(requests)];
                    case 1:
                        movies = _a.sent();
                        this.ngRedux.dispatch(this.movieAction.setMoviesAction(movies));
                        this.ngRedux.dispatch(this.movieAction.selectMovieAction(movies[0]));
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    MoviesService.prototype.fetchMovie = function (title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, genre, paresdTitle, movie, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, _apis_ombapi__WEBPACK_IMPORTED_MODULE_3__["default"].get(title)];
                    case 1:
                        data = (_a.sent()).data;
                        genre = data.Genre.split(",").map(function (gen) { return gen.replace(/[^a-zA-Z0-9]/g, ""); });
                        paresdTitle = data.Title.replace(/[^a-zA-Z0-9]/g, " ");
                        movie = new _classes_movie__WEBPACK_IMPORTED_MODULE_4__["default"](data.imdbID, paresdTitle, data.Year, data.Runtime, genre, data.Director, data.Poster, data.Plot, data.imdbRating);
                        return [2 /*return*/, movie];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MoviesService.prototype.addMovie = function (movie) {
        this.ngRedux.dispatch(this.movieAction.addMovieAction(movie));
    };
    ;
    MoviesService.prototype.editMovie = function (movie) {
        this.ngRedux.dispatch(this.movieAction.editMovieAction(movie));
        this.ngRedux.dispatch(this.movieAction.selectMovieAction(movie));
    };
    MoviesService.prototype.deleteMovie = function () {
        var _a = this.ngRedux.getState(), selectedMovie = _a.selectedMovie, movies = _a.movies;
        var index = movies.findIndex(function (movie) { return movie.id === selectedMovie.id; });
        this.ngRedux.dispatch(this.movieAction.removeMovieAction(selectedMovie.id));
        this.ngRedux.dispatch(this.movieAction.selectMovieAction(movies[index + 1]));
    };
    MoviesService.prototype.selectMovie = function (movie) {
        this.ngRedux.dispatch(this.movieAction.selectMovieAction(movie));
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"], _actions_movies_action__WEBPACK_IMPORTED_MODULE_5__["MovieAction"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var currentTitle = "";
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'title': "This title already exists",
            'minlength': "Min length " + validatorValue.requiredLength,
            'maxlength': "Max length " + validatorValue.requiredLength,
            'year': "Invalid Year",
            'max': "Max value " + validatorValue.max,
            'pattern': "Invalid pattern"
        };
        return config[validatorName];
    };
    ValidationService.yearValidator = function (control) {
        var year = new Date(control.value.toString()).getFullYear();
        if (year <= new Date().getFullYear()) {
            return null;
        }
        else {
            return { 'year': true };
        }
    };
    ValidationService.titleValidator = function (control, titles) {
        var title = control.value.toLowerCase();
        if (!control.dirty && control.value != "") {
            currentTitle = title;
        }
        if (currentTitle == title) {
            return null;
        }
        if (!titles.includes(title)) {
            return null;
        }
        else {
            return { 'title': true };
        }
        ;
    };
    ;
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/services/youtube.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/youtube.service.ts ***!
  \*********************************************/
/*! exports provided: YoutubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeService", function() { return YoutubeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apis_youtubeApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/youtubeApi */ "./src/app/apis/youtubeApi.ts");



var YoutubeService = /** @class */ (function () {
    function YoutubeService() {
    }
    YoutubeService.prototype.fetchTrailer = function (title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, videoId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_apis_youtubeApi__WEBPACK_IMPORTED_MODULE_2__["default"])(title).get("")];
                    case 1:
                        data = (_a.sent()).data;
                        videoId = data.items[0].id.videoId;
                        return [2 /*return*/, videoId];
                }
            });
        });
    };
    YoutubeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YoutubeService);
    return YoutubeService;
}());



/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_moviesReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/moviesReducer */ "./src/app/reducers/moviesReducer.ts");
/* harmony import */ var _reducers_selectedReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/selectedReducer */ "./src/app/reducers/selectedReducer.ts");




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    movies: _reducers_moviesReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectedMovie: _reducers_selectedReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));


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

module.exports = __webpack_require__(/*! /Users/artiom2006/Desktop/Web/Angular/Project Herolo/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map