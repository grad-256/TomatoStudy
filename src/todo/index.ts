/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'tslib'

{
  // @ts-ignore
  const token = document.querySelector('#app')?.dataset.token
  const input = document.querySelector('[name="title"]')
  const ul = document.querySelector('ul')
  // @ts-ignore
  input.focus()
  // @ts-ignore
  ul.addEventListener('click', (e) => {
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
          ticket: token,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('This todo has been deleted!')
          }

          return response.json()
        })
        .then((json) => {
          // @ts-ignore

          if (json.is_done !== e.target.checked) {
            alert('This Todo has been updated. UI is being updated.')
            // @ts-ignore
            e.target.checked = json.is_done
          }
        })
        .catch((err) => {
          alert(err.message)
          location.reload()
        })
    }
    // @ts-ignore

    if (e.target.classList.contains('delete')) {
      if (!confirm('Are you sure?')) {
        return
      }

      fetch('?action=delete', {
        method: 'POST',
        body: new URLSearchParams({
          // @ts-ignore

          id: e.target.parentNode.dataset.id,
          ticket: token,
        }),
      })
      // @ts-ignore

      e.target.parentNode.remove()
    }
  })

  // @ts-ignore
  function addTodo(id, titleValue) {
    const li = document.createElement('li')
    li.dataset.id = id
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    const title = document.createElement('span')
    title.textContent = titleValue
    const deleteSpan = document.createElement('span')
    deleteSpan.textContent = 'delete'
    deleteSpan.classList.add('delete')
    // c-task_text
    li.classList.add('c-task_text')
    li.appendChild(checkbox)
    li.appendChild(title)
    li.appendChild(deleteSpan)
    // @ts-ignore

    ul.insertBefore(li, ul.firstChild)
  }
  // @ts-ignore

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    // @ts-ignore

    const title = input.value

    fetch('?action=add', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        title: title,
        ticket: token,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        addTodo(json.id, title)
      })
    // @ts-ignore

    input.value = ''
    // @ts-ignore

    input.focus()
  })

  const purge = document.querySelector('.purge')
  // @ts-ignore

  purge.addEventListener('click', () => {
    if (!confirm('Are you sure?')) {
      return
    }

    fetch('?action=purge', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        ticket: token,
      }),
    })

    const lis = document.querySelectorAll('li')
    lis.forEach((li) => {
      // @ts-ignore

      if (li.children[0].checked) {
        li.remove()
      }
    })
  })
}
