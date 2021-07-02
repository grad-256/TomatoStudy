(self["webpackChunkstudyapp"] = self["webpackChunkstudyapp"] || []).push([["stopwatch/index"],{

/***/ "./src/stopwatch/index.ts":
/*!********************************!*\
  !*** ./src/stopwatch/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* eslint-disable @typescript-eslint/no-explicit-any */


var root = new vue__WEBPACK_IMPORTED_MODULE_0__.default({
    data: function () {
        return {
            times: [],
            animateFrame: 0,
            nowTime: 0,
            diffTime: 0,
            startTime: 0,
            isRunning: false,
            selected: 0,
        };
    },
    methods: {
        sound: function (type, sec) {
            var ctx = new AudioContext();
            var osc = ctx.createOscillator();
            osc.type = type;
            osc.connect(ctx.destination);
            osc.start();
            osc.stop(sec);
        },
        // 現在時刻から引数に渡した数値を startTime に代入
        setSubtractStartTime: function (time) {
            var istime = typeof time !== 'undefined' ? time : 0;
            this.startTime = Math.floor(performance.now() - istime);
        },
        // タイマーをスタートさせる
        startTimer: function () {
            // loop()内で this の値が変更されるので退避
            this.setSubtractStartTime(this.diffTime);
            // ループ処理
            this.loop();
            this.isRunning = true;
        },
        loop: function () {
            this.nowTime = Math.floor(performance.now());
            this.diffTime = this.nowTime - this.startTime;
            // eslint-disable-next-line @typescript-eslint/unbound-method
            this.animateFrame = requestAnimationFrame(this.loop);
        },
        // タイマーを停止させる
        stopTimer: function () {
            this.isRunning = false;
            cancelAnimationFrame(this.animateFrame);
        },
        // 計測中の時間を配列に追加
        pushTime: function () {
            var pushObj = {
                hours: this.hours,
                minutes: this.minutes,
                seconds: this.seconds,
                milliSeconds: this.milliSeconds,
            };
            this.times.push(pushObj);
        },
        // 初期化
        clearAll: function () {
            this.startTime = 0;
            this.nowTime = 0;
            this.diffTime = 0;
            this.times = [];
            this.stopTimer();
            this.animateFrame = 0;
        },
    },
    computed: {
        // 時間を計算
        hours: function () {
            return Math.floor(this.diffTime / 1000 / 60 / 60);
        },
        // 分数を計算 (60分になったら0分に戻る)
        minutes: function () {
            return Math.floor(this.diffTime / 1000 / 60) % 60;
        },
        // 秒数を計算 (60秒になったら0秒に戻る)
        seconds: function () {
            return Math.floor(this.diffTime / 1000) % 60;
        },
        // ミリ数を計算 (1000ミリ秒になったら0ミリ秒に戻る)
        milliSeconds: function () {
            return Math.floor(this.diffTime % 1000);
        },
    },
    watch: {
        minutes: function (e) {
            if (e === Number(this.selected)) {
                this.sound('triangle', 0.3);
                this.stopTimer();
            }
        },
    },
    filters: {
        // ゼロ埋めフィルタ 引数に桁数を入力する
        // ※ String.prototype.padStart() は IEじゃ使えない
        zeroPad: function (value, num) {
            var isnum = typeof num !== 'undefined' ? num : 2;
            return value.toString().padStart(isnum, '0');
        },
    },
});
root.$mount('#app');


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__("./src/stopwatch/index.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map