(self["webpackChunkstudyapp"] = self["webpackChunkstudyapp"] || []).push([["today/index"],{

/***/ "./src/controllers/_today_controller.ts":
/*!**********************************************!*\
  !*** ./src/controllers/_today_controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */


var default_1 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(default_1, "targets", {
        get: function () {
            return ['name', 'disable'];
        },
        enumerable: false,
        configurable: true
    });
    default_1.prototype.initialize = function () {
        this.a = {};
    };
    default_1.prototype.connect = function () {
        this.updateDisabledElements();
        if (this.token) {
            this.a = this.token;
        }
    };
    default_1.prototype.updateDisabledElements = function () {
        var _this = this;
        this.token = JSON.parse(localStorage.getItem('grstatus'));
        Object.keys(this.token).forEach(function (key) {
            // console.log(key)
            var _a, _b;
            if (_this.token[key]) {
                (_a = document.getElementById("" + key)) === null || _a === void 0 ? void 0 : _a.classList.add('ischecked');
                return;
            }
            (_b = document.getElementById("" + key)) === null || _b === void 0 ? void 0 : _b.classList.remove('ischecked');
        });
    };
    default_1.prototype.test = function (event) {
        var _this = this;
        this.nameTargets.forEach(function (box) {
            _this.a[box.getAttribute('id')] = box.checked;
            localStorage.setItem('grstatus', JSON.stringify(_this.a));
            // box.checked = this.nameTarget.checked
        });
        // this.nameTargets.forEach((box) => {
        //   this.a[box.getAttribute('id')] = box.checked
        //   localStorage.setItem('grstatus', JSON.stringify(this.a))
        //   // box.checked = this.nameTarget.checked
        // })
        // if (event.currentTarget.checked === true) {
        //   this.a[event.currentTarget.getAttribute('id')] =
        //     event.currentTarget.checked
        //   localStorage.setItem('grstatus', JSON.stringify(this.a))
        // } else {
        //   this.a[event.currentTarget.getAttribute('id')] = false
        //   localStorage.setItem('grstatus', JSON.stringify(this.a))
        // }
        this.updateDisabledElements();
        // console.log(this.a)
    };
    return default_1;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller));
/* harmony default export */ __webpack_exports__["default"] = (default_1);


/***/ }),

/***/ "./src/today/index.ts":
/*!****************************!*\
  !*** ./src/today/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _Core_controllers_today_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Core/controllers/_today_controller */ "./src/controllers/_today_controller.ts");



var application = stimulus__WEBPACK_IMPORTED_MODULE_0__.Application.start();
application.register('todayController', _Core_controllers_today_controller__WEBPACK_IMPORTED_MODULE_1__.default);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__("./src/today/index.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map