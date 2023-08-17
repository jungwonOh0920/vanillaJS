const innerContainerEle = document.getElementsByClassName('inner-container')[0]
const goLeft = () => {
    innerContainerEle.scrollLeft -= 1000;
    handleArrows()
}

const goRight = () => {
    innerContainerEle.scrollLeft += 1000;
    handleArrows()
}

const handleArrows = () => {
    const innerContainerEle = document.getElementsByClassName('inner-container')[0]
    console.log(innerContainerEle.scrollLeft)

    if (innerContainerEle.scrollLeft >= 1000 && innerContainerEle.scrollLeft < 2000) {
        document.getElementsByClassName('left-arrow')[0].classList.remove('hidden')
    } else if (innerContainerEle.scrollLeft === 0) {
        document.getElementsByClassName('left-arrow')[0].classList.add('hidden')
    } else if (innerContainerEle.scrollLeft >= 2995) {
        document.getElementsByClassName('right-arrow')[0].classList.add('hidden')
    } else if (innerContainerEle.scrollLeft < 2995 && innerContainerEle.scrollLeft >= 0) {
        document.getElementsByClassName('right-arrow')[0].classList.remove('hidden')
    }
}