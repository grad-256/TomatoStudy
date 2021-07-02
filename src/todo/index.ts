/* eslint-disable @typescript-eslint/no-explicit-any */
import 'tslib'
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
  const token = document.querySelector('.c-form').dataset.token

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('test')

    fetch('?action=add', {
      method: 'POST',
      body: new URLSearchParams({
        title: document.querySelector('[name="title"]').value,
        token: token,
      }),
    })
  })

  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      fetch('?action=toggle', {
        method: 'POST',
        body: new URLSearchParams({
          id: checkbox.parentNode.dataset.id,
          token: token,
        }),
      })
    })
  })

  const deletes = document.querySelectorAll('.delete')
  deletes.forEach((span) => {
    span.addEventListener('click', () => {
      if (!confirm('Are you sure?')) {
        return
      }

      fetch('?action=delete', {
        method: 'POST',
        body: new URLSearchParams({
          id: span.parentNode.dataset.id,
          token: token,
        }),
      })

      span.parentNode.remove()
    })
  })

  const purge = document.querySelector('.purge')
  purge.addEventListener('click', () => {
    if (!confirm('Are you sure?')) {
      return
    }

    fetch('?action=purge', {
      method: 'POST',
      body: new URLSearchParams({
        token: token,
      }),
    })

    const lis = document.querySelectorAll('li')
    lis.forEach((li) => {
      if (li.children[0].checked) {
        li.remove()
      }
    })
  })
}
