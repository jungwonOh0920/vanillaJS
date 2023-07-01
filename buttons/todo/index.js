const handleSubmit = () => {
    const input = document.getElementById('todo')

    if (!input) {
        alert('cannot take an empty string')
        return
    }

    const listContainer = document.getElementById('to-do-list')

    const list = document.createElement('li')
    const checkbox = document.createElement('input')

    checkbox.type = 'checkbox'

    // add event listener for check and uncheck
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            list.classList.add('done')
        } else {
            list.classList.remove('done')
        }
    })

    list.appendChild(document.createTextNode(input.value))
    list.appendChild(checkbox)

    listContainer.appendChild(list)

    // clear the input
    input.value = ''
    input.focus()
}