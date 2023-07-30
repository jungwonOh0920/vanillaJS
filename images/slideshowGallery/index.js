const IMAGES = ['/assets/images/lights_wide.jpg', '/assets/images/mountains.jpg', '/assets/images/nature.jpg', '/assets/images/snow.jpg', '/assets/images/terre_wide.jpeg', '/assets/images/woods_wide.jpeg']

let SLIDE_IMG_IDX = 0

const rotateSlide = (num) => {
    SLIDE_IMG_IDX += num
    if (SLIDE_IMG_IDX > IMAGES.length - 1) {
        SLIDE_IMG_IDX = 0
    }
    if (SLIDE_IMG_IDX < 0) {
        SLIDE_IMG_IDX = IMAGES.length - 1
    }
    activeSlide(SLIDE_IMG_IDX)
    handelNavNum()
}

const handelNavNum = () => {
    const navNumEl = document.getElementsByClassName('nav-num')[0]
    navNumEl.innerHTML = SLIDE_IMG_IDX + 1 + '/' + IMAGES.length
}

const activeSlide = (idx) => {
    const SLIDES = document.getElementsByClassName('slide')

    for (let i = 0; i < SLIDES.length; i++) {
        SLIDES[i].classList.remove('active')
    }

    SLIDES[idx].classList.add('active')
}

activeSlide(0)