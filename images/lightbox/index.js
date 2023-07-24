const IMG_SOURCES = ['./images/img_lights_wide.jpg', './images/img_mountains.jpg', './images/img_nature.jpg', './images/img_snow.jpg']
const images = document.getElementsByClassName('img')

let imageIdx = 0

const changeImg = () => {
    const SlideImg = document.getElementsByClassName('slide-img')[0]
    SlideImg.src = IMG_SOURCES[imageIdx]
    SlideImg.alt = images[imageIdx].alt

    document.getElementsByClassName('slider-desc')[0].innerHTML = SlideImg.alt

    document.getElementsByClassName('current-num')[0].innerHTML = imageIdx + 1 + '/' + IMG_SOURCES.length
}

const openModal = (idx) => {
    document.getElementsByClassName('modal-container')[0].classList.add('active')
    imageIdx = idx
    changeImg()
}

const closeModal = () => {
    document.getElementsByClassName('modal-container')[0].classList.remove('active')
}

const moveLeft = () => {
    imageIdx -= 1
    if (imageIdx < 0) imageIdx = IMG_SOURCES.length - 1
    changeImg()
}

const moveRight = () => {
    imageIdx += 1
    if (imageIdx > IMG_SOURCES.length - 1) imageIdx = 0
    changeImg()
}