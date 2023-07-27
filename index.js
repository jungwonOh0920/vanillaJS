const introElement = document.getElementsByClassName('intro')[0]
introElement.classList.add('active')

const show = (category, fileName) => {
    const contentElement = document.getElementsByClassName('content')[0]
    const introElement = document.getElementsByClassName('intro')[0].classList.remove('active')
    contentElement.innerHTML = `<iframe height="100%" width="100%" src="./${category}/${fileName}/index.html"></iframe>`
    contentElement.classList.toggle('active')
}

const goHome = () => {
    const introElement = document.getElementsByClassName('intro')[0].classList.add('active')
    const contentElement = document.getElementsByClassName('content')[0]
    contentElement.innerHTML = ''
}

const displayItems = (e) => {
    const menuItemContainerEl = e.target.nextElementSibling
    menuItemContainerEl.classList.toggle('active')

    if (menuItemContainerEl.classList.contains('active')) {
        e.target.getElementsByTagName('span')[0].innerHTML = '&uarr;'
    } else {
        e.target.getElementsByTagName('span')[0].innerHTML = '&darr;'
    }

}