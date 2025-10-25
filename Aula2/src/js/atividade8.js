let usuario = "admin"

switch (usuario){
    case "admin":
        console.log("acesso total")
        break
    case "editor":
        console.log("acesso limitado")
        break
    case "visitante":
        console.log("acesso somente leitura")
        break
    default:
        console.log("Usário inválido")
}