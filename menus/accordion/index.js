const handleClick = (contentId) => {

    const contents = document.getElementsByClassName('content')

    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active')
    }

    const targetContent = document.getElementById(contentId)
    targetContent.classList.toggle('active')
}