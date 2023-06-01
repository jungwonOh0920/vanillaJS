let slideIdx = 0

const showSlide = () => {
    const slides = document.getElementsByClassName('slide-container')
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[slideIdx].style.display = 'block'
}

const decreaseSlideIdx = () => {
    slideIdx--
    if (slideIdx < 0) slideIdx = 2
    showSlide()
}

const increaseSlideIdx = () => {
    slideIdx++
    if (slideIdx > 2) slideIdx = 0
    showSlide()
}

showSlide()