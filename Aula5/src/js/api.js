// const id = document.getElementById("id")
// const nome = document.getElementById("nome")
// const username = document.getElementById("username")
// const telefone = document.getElementById("telefone")
// const rua = document.getElementById("rua")
// const cidade = document.getElementById("cidade")

// // const paragrafo = document.getElementById("paragrafo")

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         console.log(data[0].id);
//         console.log(data[0].name);
//         console.log(data[0].username);
//         console.log(data[0].phone);
//         // paragrafo.innerText = data[0].name
//         id.innerText = data[0].id
//         nome.innerText = data[0].name
//         username.innerText = data[0].username
//         telefone.innerText = data[0].phone
//         rua.innerText = data[0].address.street
//         cidade.innerText = data[0].address.city
//     })

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results[0])
    })
