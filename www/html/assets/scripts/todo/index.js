(self["webpackChunkstudyapp"] = self["webpackChunkstudyapp"] || []).push([["todo/index"],{

/***/ "./src/todo/index.ts":
/*!***************************!*\
  !*** ./src/todo/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable @typescript-eslint/no-explicit-any */

// import Vue from 'vue'
// const root = new Vue({
//   data() {
//     return {
//       times: [],
//       animateFrame: 0,
//       nowTime: 0,
//       diffTime: 0,
//       startTime: 0,
//       isRunning: false,
//       selected: 0,
//     }
//   },
//   methods: {},
// })
// root.$mount('#app')
{
    var token_1 = document.querySelector('.c-form').dataset.token;
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('test');
        fetch('?action=add', {
            method: 'POST',
            body: new URLSearchParams({
                title: document.querySelector('[name="title"]').value,
                token: token_1,
            }),
        });
    });
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            fetch('?action=toggle', {
                method: 'POST',
                body: new URLSearchParams({
                    id: checkbox.parentNode.dataset.id,
                    token: token_1,
                }),
            });
        });
    });
    var deletes = document.querySelectorAll('.delete');
    deletes.forEach(function (span) {
        span.addEventListener('click', function () {
            if (!confirm('Are you sure?')) {
                return;
            }
            fetch('?action=delete', {
                method: 'POST',
                body: new URLSearchParams({
                    id: span.parentNode.dataset.id,
                    token: token_1,
                }),
            });
            span.parentNode.remove();
        });
    });
    var purge = document.querySelector('.purge');
    purge.addEventListener('click', function () {
        if (!confirm('Are you sure?')) {
            return;
        }
        fetch('?action=purge', {
            method: 'POST',
            body: new URLSearchParams({
                token: token_1,
            }),
        });
        var lis = document.querySelectorAll('li');
        lis.forEach(function (li) {
            if (li.children[0].checked) {
                li.remove();
            }
        });
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo/index.ts"));
/******/ }
]);
//# sourceMappingURL=index.js.map