const personagens_container = document.getElementById("personagens-container")

fetch("https://dragonball-api.com/api/characters?page=1&limit=58")
    .then((res)=>res.json)
    .then((data) => {
        console.log(data.items)

        data.items.forEach((elemento) => {

            const card = document.createElement("div")
            card.className = 'card'
            card.innerHTML = `
                <img src=${elemento.image}>
                <h2>${elemento.name}</h2>
                <p>${elemento.race}</p>
            `
            personagens_container.appendChild(card)

        })
    })