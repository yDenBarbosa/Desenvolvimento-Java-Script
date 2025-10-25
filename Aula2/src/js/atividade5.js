// Mostrar em qual faixa etária a pessoa está.  

// Regras:
// Menor que 12 → "Criança"
// De 12 a 17 → "Adolescente"
// De 18 a 59 → "Adulto"
// 60 ou mais → "Idoso"

let idade = 34

if(idade < 12){
    console.log("Criança")
} else if(idade <= 17) {
    console.log("Adolescente")
} else if(idade <= 59){
    console.log("Adulto")
} else {
    console.log("Idoso")
}