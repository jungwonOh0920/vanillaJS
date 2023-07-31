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
    activateSlide(SLIDE_IMG_IDX)
    handelNavNum()
}

const handelNavNum = () => {
    const navNumEl = document.getElementsByClassName('nav-num')[0]
    navNumEl.innerHTML = SLIDE_IMG_IDX + 1 + '/' + IMAGES.length
}

const activateSlide = (idx) => {
    const slidesEle = document.getElementById('slides-container').getElementsByClassName('slide')
    const descEle = document.getElementsByClassName('desc')[0]
    const gallerySlidesEle = document.getElementsByClassName('gallery')[0].children

    for (let i = 0; i < slidesEle.length; i++) {
        slidesEle[i].classList.remove('active')
        gallerySlidesEle[i].classList.remove('active')
    }

    slidesEle[idx].classList.add('active')
    descEle.innerHTML = slidesEle[idx].children[0].alt
    gallerySlidesEle[idx].classList.add('active')
}

activateSlide(0)