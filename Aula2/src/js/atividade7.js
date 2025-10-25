let operador = "*"
let num1 = 3
let num2 = 7

switch (operador){
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    case "/":
        console.log(num1 / num2)
        break
    case "**":
        console.log(num1 ** num2)
        break
    default:
        console.log("Operador invalido")
}