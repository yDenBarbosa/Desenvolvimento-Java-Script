let idade = 22
let temCateira = true
let nota = 7
let dia = 7

if (idade >= 18 && temCateira == true) {
    console.log("Você pode dirigir")
} else {
    console.log("Nâo pode dirigir")
}


if (nota >= 7) {
    console.log("Passou")
} else if (nota >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}


switch (dia){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sabadp")
        break
    default:
        console.log("Dia inválido")
}