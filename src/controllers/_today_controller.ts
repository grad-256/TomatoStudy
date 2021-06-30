/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import 'tslib'

import { Controller } from 'stimulus'

export default class extends Controller {
  a: any
  token: any

  static get targets() {
    return ['name', 'disable']
  }

  initialize() {
    this.a = {}
  }

  connect() {
    this.updateDisabledElements()

    if (this.token) {
      this.a = this.token
    }
  }

  updateDisabledElements() {
    this.token = JSON.parse(localStorage.getItem('grstatus'))

    Object.keys(this.token).forEach((key) => {
      // console.log(key)

      if (this.token[key]) {
        document.getElementById(`${key}`)?.classList.add('ischecked')

        return
      }

      document.getElementById(`${key}`)?.classList.remove('ischecked')
    })
  }

  test(event: { currentTarget: any }) {
    this.nameTargets.forEach((box) => {
      this.a[box.getAttribute('id')] = box.checked
      localStorage.setItem('grstatus', JSON.stringify(this.a))
      // box.checked = this.nameTarget.checked
    })

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

    this.updateDisabledElements()

    // console.log(this.a)
  }
}
