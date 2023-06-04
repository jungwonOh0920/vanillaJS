let slideIdx = 0
const slides = document.getElementsByClassName('slide-container')
const dots = document.getElementsByClassName('dot')
const SLIDES_NUM = slides.length

const showSlide = (idx) => {
    for (let i = 0; i < SLIDES_NUM; i++) {
        const slide = slides[i]
        const dot = dots[i]
        slide.classList.remove('active')
        dot.classList.remove('active')
    }

    slides[idx].classList.add('active')
    dots[idx].classList.add('active')
}


const decreaseSlideIdx = () => {
    slideIdx--
    if (slideIdx < 0) slideIdx = SLIDES_NUM - 1
    showSlide(slideIdx)
}

const increaseSlideIdx = () => {
    slideIdx++
    if (slideIdx >= SLIDES_NUM) slideIdx = 0
    showSlide(slideIdx)
}

showSlide(0)