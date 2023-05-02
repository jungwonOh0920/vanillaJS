const handleSubmit = () => {
    const input = document.getElementById("input").value
    // document.body.style.backgroundColor = input

    const rx = /^#[0-9a-f]{3,6}$/i

    if (input.match(rx)) {
        console.log('valid')
        document.body.style.backgroundColor = input
    } else {
        alert('it should be hex color format ex) #aa33bb')
        console.log('not valid')
    }

}

