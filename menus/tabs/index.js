const handleClick = (e, contentId) => {
    const contents = document.getElementsByClassName('content')
    const tabButtons = document.getElementsByClassName('tab')

    for (let i = 0; i < contents.length; i++) {
        // remove all contents first
        contents[i].classList.remove('active')

        // reset all tab
        tabButtons[i].classList.remove('active')
    }

    // change bg color for the target button
    e.target.classList.add('active')

    // display by adding a classname
    const targetContent = document.getElementById(contentId)
    targetContent.classList.add('active')
}