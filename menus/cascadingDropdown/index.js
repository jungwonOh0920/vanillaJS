const subjectObject = {
    'front-end': ['html', 'css', 'javascript'],
    'back-end': ['php', 'sql']
}

const init = () => {
    const subjectSelectEle = document.getElementById('subjectSelect')

    for (let x in subjectObject) {
        subjectSelectEle.options[subjectSelectEle.options.length] = new Option(x, x)
    }
}

init()

