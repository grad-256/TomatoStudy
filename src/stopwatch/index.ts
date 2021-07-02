/* eslint-disable @typescript-eslint/no-explicit-any */
import 'tslib'
import Vue from 'vue'

type TDATA = {
  times: any[]
  animateFrame: number
  nowTime: number
  diffTime: number
  startTime: number
  isRunning: boolean
  selected: number
}

const root = new Vue({
  data(): TDATA {
    return {
      times: [],
      animateFrame: 0,
      nowTime: 0,
      diffTime: 0,
      startTime: 0,
      isRunning: false,
      selected: 0,
    }
  },
  methods: {
    sound(type: any, sec: number) {
      const ctx = new AudioContext()
      const osc = ctx.createOscillator()
      osc.type = type
      osc.connect(ctx.destination)
      osc.start()
      osc.stop(sec)
    },

    // 現在時刻から引数に渡した数値を startTime に代入
    setSubtractStartTime: function (time: number): void {
      const istime = typeof time !== 'undefined' ? time : 0

      this.startTime = Math.floor(performance.now() - istime)
    },
    // タイマーをスタートさせる
    startTimer: function (): void {
      // loop()内で this の値が変更されるので退避
      this.setSubtractStartTime(this.diffTime)
      // ループ処理
      this.loop()

      this.isRunning = true
    },

    loop(): void {
      this.nowTime = Math.floor(performance.now())
      this.diffTime = this.nowTime - this.startTime
      // eslint-disable-next-line @typescript-eslint/unbound-method
      this.animateFrame = requestAnimationFrame(this.loop)
    },
    // タイマーを停止させる
    stopTimer: function (): void {
      this.isRunning = false
      cancelAnimationFrame(this.animateFrame)
    },
    // 計測中の時間を配列に追加
    pushTime: function (): void {
      const pushObj = {
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
        milliSeconds: this.milliSeconds,
      } as any

      this.times.push(pushObj)
    },
    // 初期化
    clearAll: function (): void {
      this.startTime = 0
      this.nowTime = 0
      this.diffTime = 0
      this.times = []
      this.stopTimer()
      this.animateFrame = 0
    },
  },
  computed: {
    // 時間を計算
    hours: function (): number {
      return Math.floor(this.diffTime / 1000 / 60 / 60)
    },
    // 分数を計算 (60分になったら0分に戻る)
    minutes: function (): number {
      return Math.floor(this.diffTime / 1000 / 60) % 60
    },
    // 秒数を計算 (60秒になったら0秒に戻る)
    seconds: function (): number {
      return Math.floor(this.diffTime / 1000) % 60
    },
    // ミリ数を計算 (1000ミリ秒になったら0ミリ秒に戻る)
    milliSeconds: function (): number {
      return Math.floor(this.diffTime % 1000)
    },
  },
  watch: {
    minutes: function (e) {
      if (e === Number(this.selected)) {
        this.sound('triangle', 0.3)
        this.stopTimer()
      }
    },
  },
  filters: {
    // ゼロ埋めフィルタ 引数に桁数を入力する
    // ※ String.prototype.padStart() は IEじゃ使えない
    zeroPad: function (value: string, num: number) {
      const isnum = typeof num !== 'undefined' ? num : 2
      return value.toString().padStart(isnum, '0')
    },
  },
})

root.$mount('#app')
