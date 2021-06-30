import 'tslib'

import { Application } from 'stimulus'

import TodayController from '@Core/controllers/_today_controller'

const application = Application.start()

application.register('todayController', TodayController)
