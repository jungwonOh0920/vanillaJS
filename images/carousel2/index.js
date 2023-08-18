const handleScroll = () => {
    const innerContainerEl = document.getElementsByClassName('inner-container')[0]
    const leftBtnEl = document.getElementsByClassName('left-btn')[0]
    const rightBtnEl = document.getElementsByClassName('right-btn')[0]
    console.log('scrollLeft', innerContainerEl.scrollLeft);
    console.log('scrollWidth: ', innerContainerEl.scrollWidth);
    console.log('clientWidth: ', innerContainerEl.clientWidth);

    // Left Btn
    if (innerContainerEl.scrollLeft > 0) {
        leftBtnEl.classList.add('active')
    } else if (innerContainerEl.scrollLeft === 0) {
        leftBtnEl.classList.remove('active')
    }

    // Right Btn
    // far right
    if (innerContainerEl.scrollLeft === innerContainerEl.scrollWidth - innerContainerEl.clientWidth) {
        rightBtnEl.classList.remove('active')
    } else {
        rightBtnEl.classList.add('active')
    }
}

const handleLeft = () => {
    const innerContainerEl = document.getElementsByClassName('inner-container')[0]
    innerContainerEl.scrollLeft -= 1000
}

const handleRight = () => {
    const innerContainerEl = document.getElementsByClassName('inner-container')[0]

    innerContainerEl.scrollLeft += 1000
}