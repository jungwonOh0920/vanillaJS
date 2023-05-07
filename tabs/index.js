const showContent = (event, title) => {

    // reset tab header: remove active className
    const tab_buttons = document.getElementsByClassName('tab-button')
    for (let i = 0; i < tab_buttons.length; i++) {
        tab_buttons[i].classList.remove('active')
        // tab_buttons[i].className = tab_buttons[i].className.replace(' active', '')
    }
    event.target.className += ' active'

    // reset display none to all contents before show the selected
    const all_contents = document.getElementsByClassName('content')

    for (let i = 0; i < all_contents.length; i++) {
        const curr = all_contents[i]
        curr.style.display = 'none'
    }

    const curr_content = document.getElementById(title)
    curr_content.style.display = 'block'
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('defaultOpen').click()
})