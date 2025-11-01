// let numeros = [10, 20, 30, 40, 50]
// // console.table(numeros)
// console.log(numeros[1])
// // numeros.unshift(100) //adiciona um item no começo de um array
// numeros.push(200) //adiciona um item no começo de um array
// console.log(numeros)

let frutas = ["Laranja", "Maça", "Uva"]
// frutas.splice(posição; quantosDeleta, valor)
// frutas.splice(2, 0, "Abacaxi") // adiciona um item no meio de um array
// frutas.pop() //remove o ultimo item
// frutas.splice(1, 1)
console.log(frutas.length)
console.log(frutas) 

// let carrinhoCompras = ["Meia", "Camisa", "Blusa"]
// carrinhoCompras.splice(2, 0, "Calça")
// console.log(carrinhoCompras)


frutas.forEach(function(elemento){
    console.log(`Olá ${elemento}`)
})

let numeros = [2, 4, 6]

numeros.forEach(function(element){
    console.log(element * 2)
})

// let nomes = ["Matheus", "João", "Maria"]

// nomes.forEach(function(element){
//     console.log(`Olá ${element}`)
// })

let nomes = ["matheus", "isabella", "julio"]

const nomesMaiusculo = nomes.map(function(element){
    return element.toUpperCase()
})

console.log(nomesMaiusculo)

let numero = [2, 5, 8, 10]
const dobrados = numeros.map(element => element * 2)

console.log(dobrados)