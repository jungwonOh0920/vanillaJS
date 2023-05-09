const showContent = (e, content_id) => {
    // Handle contents
    // Remove classname 'selected'. Let css handle the rest
    const contents = document.getElementsByClassName('content')

    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('selected')
    }

    document.getElementById(content_id).classList.add('selected')

    // Handle Tab
    // Remove classname 'active'. Let css handle the rest
    const current_tab = e.target
    const tabs = document.getElementsByClassName('tab-button')

    for (let i = 0; i < contents.length; i++) {
        tabs[i].classList.remove('active')
    }
    current_tab.classList.add('active')
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('defaultOpen').click()
})