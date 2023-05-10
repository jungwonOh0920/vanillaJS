const handleClick = (e) => {
    const panel = e.target.nextElementSibling
    panel.classList.toggle('active')
}