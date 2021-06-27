(self["webpackChunkcota_hairmake"] = self["webpackChunkcota_hairmake"] || []).push([["common/viewport"],{

/***/ "./src/common/viewport.ts":
/*!********************************!*\
  !*** ./src/common/viewport.ts ***!
  \********************************/
/***/ (function() {

"use strict";

{
    var ViewportEl_1 = document.querySelector('meta[name="viewport"]');
    var MediaQueryList_1 = window.matchMedia('(min-device-width: 375px)');
    var OnChangeQuery = function () {
        var ViewportContent = MediaQueryList_1.matches
            ? 'width=device-width, initial-scale=1'
            : 'width=375';
        ViewportEl_1 === null || ViewportEl_1 === void 0 ? void 0 : ViewportEl_1.setAttribute('content', ViewportContent);
    };
    MediaQueryList_1.addListener(OnChangeQuery);
    OnChangeQuery();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/common/viewport.ts"));
/******/ }
]);
//# sourceMappingURL=viewport.js.map