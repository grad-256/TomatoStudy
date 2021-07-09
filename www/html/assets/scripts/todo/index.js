(self["webpackChunkstudyapp"] = self["webpackChunkstudyapp"] || []).push([["todo/index"],{

/***/ "./src/todo/index.ts":
/*!***************************!*\
  !*** ./src/todo/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _a;
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */

{
    // @ts-ignore
    var token_1 = (_a = document.querySelector('#app')) === null || _a === void 0 ? void 0 : _a.dataset.token;
    var input_1 = document.querySelector('[name="title"]');
    var ul_1 = document.querySelector('ul');
    // @ts-ignore
    input_1.focus();
    // @ts-ignore
    ul_1.addEventListener('click', function (e) {
        // @ts-ignore
        if (e.target.type === 'checkbox') {
            fetch('?action=toggle', {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    // @ts-ignore
                    id: e.target.parentNode.dataset.id,
                    ticket: token_1,
                }),
            })
                .then(function (response) {
                if (!response.ok) {
                    throw new Error('This todo has been deleted!');
                }
                return response.json();
            })
                .then(function (json) {
                // @ts-ignore
                if (json.is_done !== e.target.checked) {
                    alert('This Todo has been updated. UI is being updated.');
                    // @ts-ignore
                    e.target.checked = json.is_done;
                }
            })
                .catch(function (err) {
                alert(err.message);
                location.reload();
            });
        }
        // @ts-ignore
        if (e.target.classList.contains('delete')) {
            if (!confirm('Are you sure?')) {
                return;
            }
            fetch('?action=delete', {
                method: 'POST',
                body: new URLSearchParams({
                    // @ts-ignore
                    id: e.target.parentNode.dataset.id,
                    ticket: token_1,
                }),
            });
            // @ts-ignore
            e.target.parentNode.remove();
        }
    });
    // @ts-ignore
    function addTodo(id, titleValue) {
        var li = document.createElement('li');
        li.dataset.id = id;
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        var title = document.createElement('span');
        title.textContent = titleValue;
        var deleteSpan = document.createElement('span');
        deleteSpan.textContent = 'x';
        deleteSpan.classList.add('delete');
        li.appendChild(checkbox);
        li.appendChild(title);
        li.appendChild(deleteSpan);
        // @ts-ignore
        ul_1.insertBefore(li, ul_1.firstChild);
    }
    // @ts-ignore
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        // @ts-ignore
        var title = input_1.value;
        fetch('?action=add', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                title: title,
                ticket: token_1,
            }),
        })
            .then(function (response) { return response.json(); })
            .then(function (json) {
            addTodo(json.id, title);
        });
        // @ts-ignore
        input_1.value = '';
        // @ts-ignore
        input_1.focus();
        console.log('Finish!');
    });
    var purge = document.querySelector('.purge');
    // @ts-ignore
    purge.addEventListener('click', function () {
        if (!confirm('Are you sure?')) {
            return;
        }
        fetch('?action=purge', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                ticket: token_1,
            }),
        });
        var lis = document.querySelectorAll('li');
        lis.forEach(function (li) {
            // @ts-ignore
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