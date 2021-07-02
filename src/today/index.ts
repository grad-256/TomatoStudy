import 'tslib'
import Vue from 'vue'

// import { Application } from 'stimulus'

// import TodayController from '@Core/controllers/_today_controller'

// const application = Application.start()

// application.register('todayController', TodayController)

const root = new Vue({
  data() {
    return {
      variables: 'variables',
    }
  },
})

root.$mount('#app')
