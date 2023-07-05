const toggleModal = () => {
    const modalEle = document.getElementsByClassName('modal-container')[0]
    modalEle.classList.toggle('active')
}

const outer = (e) => {
    e.stopPropagation()
    console.log('outer clicked')
    toggleModal()
}

const inner = (e) => {
    e.stopPropagation()
    console.log('inner clicked');
}