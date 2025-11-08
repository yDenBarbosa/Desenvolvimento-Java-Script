let titulo1 = document.getElementById('titulo1')
let titulo2 = document.getElementById('titulo2')
let titulo3 = document.getElementById('titulo3')
let titulo4 = document.getElementById('titulo4')
let titulo5 = document.getElementById('titulo5')
let titulo6 = document.getElementById('titulo6')

// console.log(document.getElementById('titulo1')) //document para acessar o html, no caso, as tags com ID
// console.log(document.getElementById('titulo2'))
// console.log(document.getElementById('titulo3'))
// console.log(document.getElementById('titulo4'))
// console.log(document.getElementById('titulo5'))
// console.log(document.getElementById('titulo6'))

console.log(titulo1)
console.log(titulo2)
console.log(titulo3)
console.log(titulo4)
console.log(titulo5)
console.log(titulo6)

let paragrafo = document.getElementsByClassName('paragrafo') // para manipular classes

console.log(paragrafo[0])
console.log(paragrafo[1])

titulo1.innerText = "Troquei 1"
titulo2.innerText = "Troquei 2"
titulo3.innerText = "Troquei 3"
titulo4.innerText = "Troquei 4"
titulo5.innerText = "Troquei 5"
titulo6.innerText = "Troquei 6"