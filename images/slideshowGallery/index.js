const IMAGES = ['/assets/images/lights_wide.jpg', '/assets/images/mountains.jpg', '/assets/images/nature.jpg', '/assets/images/snow.jpg', '/assets/images/terre_wide.jpeg', '/assets/images/woods_wide.jpeg']

let SLIDE_IMG_IDX = 0
const slideImg = document.getElementsByClassName('slide-img')[0]

const goLeft = () => {
    SLIDE_IMG_IDX--

    if (SLIDE_IMG_IDX < 0) {
        SLIDE_IMG_IDX = IMAGES.length - 1
    }

    slideImg.src = IMAGES[SLIDE_IMG_IDX]
    handelNavNum()
}

const goRight = () => {
    SLIDE_IMG_IDX++

    if (SLIDE_IMG_IDX > IMAGES.length - 1) {
        SLIDE_IMG_IDX = 0
    }

    slideImg.src = IMAGES[SLIDE_IMG_IDX]
    handelNavNum()
}

const handelNavNum = () => {
    const navNumEl = document.getElementsByClassName('nav-num')[0]
    navNumEl.innerHTML = SLIDE_IMG_IDX + 1 + '/' + IMAGES.length
}