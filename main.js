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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hot Weather Widget powered by Angular + Store</h1>\n<div class=\"container\">\n    <ng-container *ngIf=\"(selectedItem$ | async) as selectedItem\">\n        <div class=\"main-wrapper\">\n            <course-image\n                [url]=\"selectedItem.url\">\n            </course-image>\n            <course-nav\n                [items]=\"navItems\"\n                (selected)=\"handleFilterSelection($event)\">\n            </course-nav>\n            <course-items\n                [selectedItem]=\"selectedItem\"\n                [items]=\"filteredItems$ | async\"\n                (itemSelected)=\"handleItemSelection($event)\">\n            </course-items>\n        </div>\n        <div class=\"widgets-wrapper\">\n            <course-weather-info\n                [weather]=\"selectedItem.weather\">\n            </course-weather-info>\n            <course-social-info\n                [social]=\"selectedItem.social\">\n            </course-social-info>\n        </div>\n    </ng-container>\n</div>\n<div class=\"copy-right\">\n    <p>© 2015 Hot Weather Widget. All rights reserved | Design by <a href=\"http://w3layouts.com/\" target=\"_blank\">\n            W3layouts </a></p>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: row;\n  max-width: 700px;\n  margin: 3em auto; }\n\n.main-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 0.6;\n  margin-right: 2em; }\n\n.widgets-wrapper {\n  flex: 0.4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmF0b2xpL0RldmVsb3BtZW50L2phdmFzY3JpcHQtYW5ndWxhci1jb3Vyc2UvbmctaG9tZXdvcmstMjAxODExMTUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLFVBQVM7RUFDVCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxVQUFTLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IDNlbSBhdXRvO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMC42O1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4ud2lkZ2V0cy13cmFwcGVyIHtcbiAgICBmbGV4OiAwLjQ7XG59Il19 */"

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_db_db_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/db/db-data */ "./src/app/shared/db/db-data.ts");
/* harmony import */ var _store_actions_items_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions/items.action */ "./src/app/store/actions/items.action.ts");
/* harmony import */ var _store_actions_selected_item_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/actions/selected-item.action */ "./src/app/store/actions/selected-item.action.ts");
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
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        // By default all items should be shown.
        // We dispatch LoadItemsPending action which retrieves
        // all items for filter criteria 'all'.
        this.store.dispatch(new _store_actions_items_action__WEBPACK_IMPORTED_MODULE_4__["LoadItemsPending"]('all'));
        // Store contains already filtered items as the key 'items'
        this.filteredItems$ = this.store.select('items');
        // Store contains currently selected item as the key 'selectedItem'
        this.selectedItem$ = this.store.select('selectedItem');
        this.navItems = this.getDistinctFilterItems();
    };
    AppComponent.prototype.handleFilterSelection = function (itemType) {
        // If filter criteria has been changed we dispatch the LoadItemsPending action
        this.store.dispatch(new _store_actions_items_action__WEBPACK_IMPORTED_MODULE_4__["LoadItemsPending"](itemType));
    };
    AppComponent.prototype.handleItemSelection = function (selectedItem) {
        // If selected item has been changed we dispatch the SelectItem action
        this.store.dispatch(new _store_actions_selected_item_action__WEBPACK_IMPORTED_MODULE_5__["SelectItem"](selectedItem));
    };
    AppComponent.prototype.getDistinctFilterItems = function () {
        var _this = this;
        var filterItems;
        var sub = _shared_db_db_data__WEBPACK_IMPORTED_MODULE_3__["allItems$"]
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return _this.mapToItemTypes(items); }))
            .subscribe(function (items) { return filterItems = items; });
        sub.unsubscribe();
        var filterItemsSet = new Set(filterItems);
        // Spreading does NOT function filterItems = [...filterItemsSet]
        // I get a typescript error --downlevelIteration compiler option must be set!
        // So I'm gonna use Array.from method instead.
        var distinctFilterItems = Array.from(filterItemsSet);
        // Add filter item 'all' to the first position
        distinctFilterItems.unshift('all');
        return distinctFilterItems;
    };
    AppComponent.prototype.mapToItemTypes = function (items) {
        return items.map(function (item) { return item.type; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'course-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _store_effects_items_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects/items.effects */ "./src/app/store/effects/items.effects.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _social_info_social_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./social-info/social-info.component */ "./src/app/social-info/social-info.component.ts");
/* harmony import */ var _weather_info_weather_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weather-info/weather-info.component */ "./src/app/weather-info/weather-info.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _items_item_phone_number_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./items/item/phone-number.pipe */ "./src/app/items/item/phone-number.pipe.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image/image.component */ "./src/app/image/image.component.ts");
/* harmony import */ var _items_item_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./items/item/item.component */ "./src/app/items/item/item.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _social_info_social_info_component__WEBPACK_IMPORTED_MODULE_8__["SocialInfoComponent"],
                _weather_info_weather_info_component__WEBPACK_IMPORTED_MODULE_9__["WeatherInfoComponent"],
                _items_items_component__WEBPACK_IMPORTED_MODULE_10__["ItemsComponent"],
                _items_item_phone_number_pipe__WEBPACK_IMPORTED_MODULE_11__["PhoneNumberPipe"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                _image_image_component__WEBPACK_IMPORTED_MODULE_13__["ImageComponent"],
                _items_item_item_component__WEBPACK_IMPORTED_MODULE_14__["ItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([_store_effects_items_effects__WEBPACK_IMPORTED_MODULE_6__["ItemsEffects"]]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument() : []
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/image/image.component.html":
/*!********************************************!*\
  !*** ./src/app/image/image.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-bg-img\"><img [src]=\"url\" alt=\"\" class=\"img-responsive\"></div>"

/***/ }),

/***/ "./src/app/image/image.component.scss":
/*!********************************************!*\
  !*** ./src/app/image/image.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/image/image.component.ts":
/*!******************************************!*\
  !*** ./src/app/image/image.component.ts ***!
  \******************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
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

var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageComponent.prototype, "url", void 0);
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'course-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.scss */ "./src/app/image/image.component.scss")]
        })
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/items/item/item.component.html":
/*!************************************************!*\
  !*** ./src/app/items/item/item.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"handleSelection()\" class=\"activity-row\">\n  <div class=\"activity-desc\">\n    <h5>{{item.name}}</h5>\n    <p>{{item.address.street}}</p>\n    <h6>{{item.phone | phoneNumber}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <img src='{{item.url}}' />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/items/item/item.component.scss":
/*!************************************************!*\
  !*** ./src/app/items/item/item.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/items/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/items/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
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

var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemComponent.prototype.handleSelection = function () {
        this.selected.emit(this.item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemComponent.prototype, "selected", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'course-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/items/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/items/item/item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/items/item/phone-number.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/items/item/phone-number.pipe.ts ***!
  \*************************************************/
/*! exports provided: PhoneNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberPipe", function() { return PhoneNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhoneNumberPipe = /** @class */ (function () {
    function PhoneNumberPipe() {
    }
    PhoneNumberPipe.prototype.transform = function (value, args) {
        if (value === void 0) { value = ''; }
        var partOne = value.slice(0, 2);
        var partTwo = value.slice(2, 5);
        var partThree = value.slice(5, 8);
        var partFour = value.slice(8, 11);
        return "Tel: +" + partOne + " " + partTwo + " " + partThree + " " + partFour;
    };
    PhoneNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'phoneNumber'
        })
    ], PhoneNumberPipe);
    return PhoneNumberPipe;
}());



/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"village\">\n  <h3>{{selectedItem.name}}</h3>\n  <span class=\"line\"> </span>\n  <div class=\"activity_box\">\n    <div class=\"scrollbar\" id=\"style-1\">\n      <course-item \n        [class.active-item]=\"isSelected(item)\"\n        [item]=\"item\" \n        (selected)=\"selectItem($event)\" \n        *ngFor=\"let item of items\">\n      </course-item>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/items/items.component.scss":
/*!********************************************!*\
  !*** ./src/app/items/items.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
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

var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemsComponent.prototype.selectItem = function (item) {
        this.itemSelected.emit(item);
    };
    ItemsComponent.prototype.isSelected = function (item) {
        return item === this.selectedItem;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ItemsComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemsComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemsComponent.prototype, "itemSelected", void 0);
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'course-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.scss */ "./src/app/items/items.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let item of items\">\n      <a href=\"#\" (click)=\"handleFilterSelection(item)\">{{item | titlecase}}</a>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  text-align: center; }\n\nul li {\n  display: inline-block;\n  padding: 0em 0.5em;\n  border-right: 1px solid #fff; }\n\nul li:last-child {\n    border-right-color: transparent; }\n\nul li a {\n  font-size: 1em;\n  color: #fff; }\n\n:host {\n  background: #fda660;\n  padding: 1em 1em;\n  margin: -3px 0px 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmF0b2xpL0RldmVsb3BtZW50L2phdmFzY3JpcHQtYW5ndWxhci1jb3Vyc2UvbmctaG9tZXdvcmstMjAxODExMTUvc3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQiw2QkFBNEIsRUFLL0I7O0FBUkQ7SUFNUSxnQ0FBK0IsRUFDbEM7O0FBR0w7RUFDSSxlQUFhO0VBQ2IsWUFBVyxFQUNkOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQix5QkFBd0IsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwZW0gMC41ZW07XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG51bCBsaSBhIHtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG46aG9zdCB7XG4gICAgYmFja2dyb3VuZDogI2ZkYTY2MDtcbiAgICBwYWRkaW5nOiAxZW0gMWVtO1xuICAgIG1hcmdpbjogLTNweCAwcHggMHB4IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavComponent.prototype.handleFilterSelection = function (filterCriteria) {
        this.selected.emit(filterCriteria);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NavComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavComponent.prototype, "selected", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'course-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/db/db-data.ts":
/*!**************************************!*\
  !*** ./src/app/shared/db/db-data.ts ***!
  \**************************************/
/*! exports provided: allItems$, allItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allItems$", function() { return allItems$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allItems", function() { return allItems; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var items = [
    {
        name: 'Jumeirah Emirates Towers',
        type: 'hotel',
        phone: '128596832',
        url: 'assets/img/Jumeirah_Emirates_Towers.jpg',
        address: {
            street: 'Sheikh Zayed Road',
            houseNumber: '',
            city: 'Dubai'
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 7850,
            following: 1675,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 25,
            temperature: 39,
            url: ''
        }
    },
    {
        name: 'Park Hotel',
        type: 'hotel',
        phone: '49859680',
        url: 'assets/img/park-hotel.jpg',
        address: {
            street: 'Richard-Wagner-Straße',
            houseNumber: '',
            city: 'Leipzig'
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 1850,
            following: 575,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 12,
            temperature: 21,
            url: ''
        }
    },
    {
        name: 'Black Marlin',
        type: 'fishing',
        phone: '12859686',
        url: 'assets/img/lizard-island.jpg',
        address: {
            street: 'Lizard Island Australia',
            houseNumber: '',
            city: ''
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 2851,
            following: 676,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 16,
            temperature: 27,
            url: ''
        }
    },
    {
        name: 'Lake Alan Henry',
        type: 'fishing',
        phone: '188594869',
        url: 'assets/img/lake-alan-henry.jpg',
        address: {
            street: 'Lake Alan Road',
            houseNumber: '',
            city: 'Texas'
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 4252,
            following: 927,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 19,
            temperature: 27,
            url: ''
        }
    },
    {
        name: 'Haggis Adventures',
        type: 'tours',
        phone: '16859686',
        url: 'assets/img/Haggis_Adventures.jpg',
        address: {
            street: 'Adventures Road',
            houseNumber: '',
            city: 'Scotland'
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 1853,
            following: 878,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 14,
            temperature: 20,
            url: ''
        }
    },
    {
        name: 'Busabout',
        type: 'tours',
        phone: '11554686',
        url: 'assets/img/Busabout.jpg',
        address: {
            street: 'Busabout Street',
            houseNumber: '',
            city: 'Guernsey'
        },
        social: {
            name: 'Nam libero voluptatem',
            followers: 7853,
            following: 1278,
            url: 'assets/img/b1.jpg'
        },
        weather: {
            name: 'Et harum quidem',
            waterTemperature: 20,
            temperature: 28,
            url: ''
        }
    }
];
var allItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(items);
// .pipe(delay(500));
var allItems = items;


/***/ }),

/***/ "./src/app/social-info/social-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/social-info/social-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{social.name}}</h4>\n    <span class=\"w-line\"> </span>\n    <img [src]=\"social.url\" alt=\"\" class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\">\n        <h3>{{social.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li>\n        <h3>{{social.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/social-info/social-info.component.scss":
/*!********************************************************!*\
  !*** ./src/app/social-info/social-info.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1pbmZvL3NvY2lhbC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/social-info/social-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/social-info/social-info.component.ts ***!
  \******************************************************/
/*! exports provided: SocialInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialInfoComponent", function() { return SocialInfoComponent; });
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

var SocialInfoComponent = /** @class */ (function () {
    function SocialInfoComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SocialInfoComponent.prototype, "social", void 0);
    SocialInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'course-social-info',
            template: __webpack_require__(/*! ./social-info.component.html */ "./src/app/social-info/social-info.component.html"),
            styles: [__webpack_require__(/*! ./social-info.component.scss */ "./src/app/social-info/social-info.component.scss")]
        })
    ], SocialInfoComponent);
    return SocialInfoComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/items.action.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/items.action.ts ***!
  \***********************************************/
/*! exports provided: LOAD_ITEMS_PENDING, LOAD_ITEMS_SUCCESS, LoadItemsSuccess, LoadItemsPending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEMS_PENDING", function() { return LOAD_ITEMS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEMS_SUCCESS", function() { return LOAD_ITEMS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadItemsSuccess", function() { return LoadItemsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadItemsPending", function() { return LoadItemsPending; });
var LOAD_ITEMS_PENDING = 'LOAD_ITEMS_PENDING';
var LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS';
var LoadItemsSuccess = /** @class */ (function () {
    function LoadItemsSuccess(items) {
        this.items = items;
        this.type = LOAD_ITEMS_SUCCESS;
    }
    return LoadItemsSuccess;
}());

var LoadItemsPending = /** @class */ (function () {
    function LoadItemsPending(itemType) {
        this.itemType = itemType;
        this.type = LOAD_ITEMS_PENDING;
    }
    return LoadItemsPending;
}());



/***/ }),

/***/ "./src/app/store/actions/selected-item.action.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/actions/selected-item.action.ts ***!
  \*******************************************************/
/*! exports provided: SELECT_ITEM, SelectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM", function() { return SELECT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItem", function() { return SelectItem; });
var SELECT_ITEM = 'SELECT_ITEM';
var SelectItem = /** @class */ (function () {
    function SelectItem(item) {
        this.item = item;
        this.type = SELECT_ITEM;
    }
    return SelectItem;
}());



/***/ }),

/***/ "./src/app/store/effects/items.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/effects/items.effects.ts ***!
  \************************************************/
/*! exports provided: ItemsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsEffects", function() { return ItemsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_db_db_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/db/db-data */ "./src/app/shared/db/db-data.ts");
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/items.action */ "./src/app/store/actions/items.action.ts");
/* harmony import */ var _actions_selected_item_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/selected-item.action */ "./src/app/store/actions/selected-item.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ItemsEffects = /** @class */ (function () {
    function ItemsEffects(actions$) {
        this.actions$ = actions$;
        this.initialize();
    }
    ItemsEffects.prototype.initialize = function () {
        var _this = this;
        var filteredItems$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_items_action__WEBPACK_IMPORTED_MODULE_5__["LOAD_ITEMS_PENDING"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('itemType'), 
        // ignore if itemType has the same value (multiple clicks to the same filter)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (itemType) { return _this.loadAndFilterItems(itemType); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (filteredItems) { return console.log('filtered items emitted new value: ', filteredItems); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this.loadItemsSuccess$ = filteredItems$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (filteredItems) { return _this.mapToLoadItemsSuccess(filteredItems); }));
        this.selectItem$ = filteredItems$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) { return _this.findItem(0, items); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (firstItem) { return console.log('first item emitted new value: ', firstItem); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (firstItem) { return _this.mapToSelectItem(firstItem); }));
    };
    ItemsEffects.prototype.mapToLoadItemsSuccess = function (items) {
        return new _actions_items_action__WEBPACK_IMPORTED_MODULE_5__["LoadItemsSuccess"](items);
    };
    ItemsEffects.prototype.mapToSelectItem = function (item) {
        return new _actions_selected_item_action__WEBPACK_IMPORTED_MODULE_6__["SelectItem"](item);
    };
    ItemsEffects.prototype.loadAndFilterItems = function (itemType) {
        var filteredItems = _shared_db_db_data__WEBPACK_IMPORTED_MODULE_4__["allItems"].filter(function (item) { return [item.type, 'all'].includes(itemType); });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(filteredItems);
    };
    ItemsEffects.prototype.findItem = function (itemIndex, items) {
        return items[itemIndex];
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ItemsEffects.prototype, "loadItemsSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ItemsEffects.prototype, "selectItem$", void 0);
    ItemsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], ItemsEffects);
    return ItemsEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _reducers_items_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/items.reducer */ "./src/app/store/reducers/items.reducer.ts");
/* harmony import */ var _reducers_selected_item_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/selected-item.reducer */ "./src/app/store/reducers/selected-item.reducer.ts");


var reducers = {
    items: _reducers_items_reducer__WEBPACK_IMPORTED_MODULE_0__["itemsReducer"],
    selectedItem: _reducers_selected_item_reducer__WEBPACK_IMPORTED_MODULE_1__["selectedItemReducer"]
};


/***/ }),

/***/ "./src/app/store/reducers/items.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/items.reducer.ts ***!
  \*************************************************/
/*! exports provided: itemsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsReducer", function() { return itemsReducer; });
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/items.action */ "./src/app/store/actions/items.action.ts");

var initialState = [];
function itemsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_items_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_ITEMS_SUCCESS"]:
            return action.items;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/reducers/selected-item.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/reducers/selected-item.reducer.ts ***!
  \*********************************************************/
/*! exports provided: selectedItemReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedItemReducer", function() { return selectedItemReducer; });
/* harmony import */ var _actions_selected_item_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/selected-item.action */ "./src/app/store/actions/selected-item.action.ts");

function selectedItemReducer(state, action) {
    switch (action.type) {
        case _actions_selected_item_action__WEBPACK_IMPORTED_MODULE_0__["SELECT_ITEM"]:
            return action.item;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/weather-info/weather-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/weather-info/weather-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{weather.name}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2>{{weather.temperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{weather.waterTemperature}}<sup class=\"degree\">°</sup></h6>\n</div>"

/***/ }),

/***/ "./src/app/weather-info/weather-info.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/weather-info/weather-info.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItaW5mby93ZWF0aGVyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/weather-info/weather-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/weather-info/weather-info.component.ts ***!
  \********************************************************/
/*! exports provided: WeatherInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherInfoComponent", function() { return WeatherInfoComponent; });
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

var WeatherInfoComponent = /** @class */ (function () {
    function WeatherInfoComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WeatherInfoComponent.prototype, "weather", void 0);
    WeatherInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'course-weather-info',
            template: __webpack_require__(/*! ./weather-info.component.html */ "./src/app/weather-info/weather-info.component.html"),
            styles: [__webpack_require__(/*! ./weather-info.component.scss */ "./src/app/weather-info/weather-info.component.scss")]
        })
    ], WeatherInfoComponent);
    return WeatherInfoComponent;
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

module.exports = __webpack_require__(/*! /Users/anatoli/Development/javascript-angular-course/ng-homework-20181115/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map