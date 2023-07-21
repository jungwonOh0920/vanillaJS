const handleImgClick = (idx) => {
    document.getElementsByClassName('modal-container')[0].classList.add('active')
    showSlide(idx)
}

const handleExit = () => {
    document.getElementsByClassName('modal-container')[0].classList.remove('active')
}

const moveLeft = () => {
    currSlideIdx--
    if (currSlideIdx < 0) {
        currSlideIdx = document.getElementsByClassName('slide').length - 1
    }
    showSlide(currSlideIdx)
}

const moveRight = () => {
    currSlideIdx++
    if (currSlideIdx > document.getElementsByClassName('slide').length - 1) {
        currSlideIdx = 0
    }
    showSlide(currSlideIdx)
}

// handle slides
let currSlideIdx = 0
const showSlide = (idx) => {
    // display none for all slides
    const slides = document.getElementsByClassName('slide')

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    // display block for the current slide idx
    slides[idx].style.display = 'block'

    // handle description
    const description = document.getElementsByClassName('img-desc')[0]
    description.innerHTML = slides[idx].children.item(1).alt
}
