const fetchAPI = async () => {
    try {
        const res = await fetch('https://randomuser.me/api')
        const jsonData = await res.json()
        const data = jsonData.results[0]

        return data
    } catch (error) {
        console.log('error!!: ', error);
    }
}
const handleClick = async () => {
    const data = await fetchAPI()

    console.log('new data: ', data);
    const node = document.createElement("div")
    const name = document.createElement("p")

    // TODO: find a better way (like loop)
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

window.onload = async function () {
    const data = await fetchAPI()
    console.log(data)
    document.getElementById('title').innerHTML = data.name.title

    document.getElementById('profile').src = data.picture.thumbnail
}