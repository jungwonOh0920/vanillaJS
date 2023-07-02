const handleClick = (e) => {
    const contentEle = e.target.parentElement.nextElementSibling
    contentEle.classList.toggle('active')

    if (contentEle.classList.contains('active')) {
        e.target.innerHTML = '&or;'
    } else {
        e.target.innerHTML = '&and;'
    }
}