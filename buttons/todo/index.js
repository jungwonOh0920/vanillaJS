const handleClick = () => {
    const input = document.getElementById('input')
    const ul = document.getElementById('ul')

    // create list
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    // handle checkbox click
    checkbox.onclick = () => {
        handleCheckbox(checkbox)
    }

    // append
    li.appendChild(document.createTextNode(input.value))
    li.appendChild(checkbox)
    ul.appendChild(li)

    // clean input & re-focus
    input.value = ''
    input.focus()
}

const handleCheckbox = (checkbox) => {
    if (checkbox.checked) {
        checkbox.parentElement.style.textDecoration = 'line-through'
    } else {
        checkbox.parentElement.style.textDecoration = 'none'
    }
}

const handleCleanup = () => {
    const ul = document.getElementById('ul')
    while (ul.hasChildNodes()) {
        ul.firstChild.remove()
    }
}