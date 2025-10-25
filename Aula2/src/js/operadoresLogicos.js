// ------------------ && (AND) ------------------

const pipoca = true
const chocolate = false

console.log(pipoca == true && chocolate == true)

// ------------------ || (OR) --------------------

const lapis = true
const caneta = false

console.log(lapis == true || caneta == true)

// ----------------- NOT (!) --------------------

const logado = false

console.log(`Valor original: ${logado}`)
console.log(`Valor original: ${!logado}`)

let valorCompra = 34
let clienteFrequente = true
console.log(`Promoção aplicada: ${valorCompra > 100 && clienteFrequente == true}\nvalor da compra: ${valorCompra}`)

let temConvite = false
let estaNaLista = true
let entrada = temConvite == true || estaNaLista == true
console.log(`Entrada permitida: ${entrada}`)

let vip = true
let compra1 = 347
let desc = vip == true || compra1 > 500
console.log(`Desconto aplicado: ${desc}`)

