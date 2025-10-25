let sinal = "verde"
if (sinal == "verde") {
    console.log("pode ir")
} else {
    console.log("Não pode ir")
}


let idade = 12
if (idade >= 18) {
    console.log("Pode entrar")
} else {
    console.log("Não pode entrar")
}

let idade1 = 35
if (idade1 < 16) {
    console.log("Não pode votar")
} else {
    console.log("Pode votar")
}

let temperatura = 43
if (temperatura < 15) {
    console.log("Está frio!")
} else {
    console.log("Está quente!")
}

let nota = 7
// nota maior que 7 -> Aprovado
// nota entre que 5, 6 e 7 -> Recuperação
// nota menor que 5 -> Reprovado

if(nota > 7){
    console.log("Aprovado")
} else if(nota >= 5){
    console.log("Recuperação")
} else{
    console.log("Reprovado")
}

