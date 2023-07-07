const subjectObject = {
    'front-end': ['html', 'css', 'javascript'],
    'back-end': ['php', 'sql']
}

// add options in subject select element
const init = () => {
    const subjectSelectEle = document.getElementById('subjectSelect')

    // loop thru the subjectObj then get the keys
    let idx = 1
    for (let key in subjectObject) {
        // add an option with text and value
        subjectSelectEle.options[idx] = new Option(key, key)
        idx++
    }
}

init()

const handleChange = (e) => {
    const topicSelectEle = document.getElementById('topicSelect')
    topicSelectEle.length = 1

    //loop thru the value for the given key(e.target.value)
    const key = e.target.value
    for (let i in subjectObject[key]) {
        topicSelectEle.options[+i + 1] = new Option(subjectObject[key][i])
    }
}