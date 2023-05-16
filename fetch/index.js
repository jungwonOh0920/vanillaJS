const handleClear = () => {
    document.getElementById('content').innerHTML = ''
}

const fetchAPI = async () => {
    let data = null

    try {
        const res = await fetch('https://randomuser.me/api')
        const jsonData = await res.json()
        data = jsonData.results[0]

        return data

    } catch (error) {
        console.log('error!!: ', error);
    }
}

const handleClick = async () => {
    loading()
    const data = await fetchAPI()
    if (data) showPage()

    const node = document.createElement("div")
    const name = document.createElement("p")

    // handle the name
    const title = document.createElement('span')
    const firstname = document.createElement('span')
    const lastname = document.createElement('span')

    title.innerHTML = data.name.title + '. '
    firstname.innerHTML = data.name.first + ' '
    lastname.innerHTML = data.name.last

    name.appendChild(title)
    name.appendChild(firstname)
    name.appendChild(lastname)

    node.appendChild(name)

    // handle image
    const image = document.createElement('img')
    image.src = data.picture.thumbnail

    node.appendChild(image)

    document.getElementById('content').appendChild(node)
}

const showPage = () => {
    document.getElementById("loader").style.display = 'none'
    document.getElementById("content").style.display = 'block'
}

const loading = () => {
    document.getElementById("loader").style.display = 'flex'
    document.getElementById("content").style.display = 'none'
}

window.onload = async function () {
    loading()
    const data = await fetchAPI()
    if (data) showPage()

    document.getElementById('title').innerHTML = data.name.title

    document.getElementById('profile').src = data.picture.thumbnail
}