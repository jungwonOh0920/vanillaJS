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
    console.log('showSlide called: ', idx);
    const slides = document.getElementsByClassName('slide')
    // display none for all
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    // display block for the current slide idx
    slides[idx].style.display = 'block'
}
