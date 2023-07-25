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
    e.target.getElementsByTagName('span')[0].innerHTML = '&uarr;'
    e.target.nextElementSibling.classList.toggle('active')
}