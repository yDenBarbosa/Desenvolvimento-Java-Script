
// setTimeout(() => {
//     console.log("1. Iniciando o servidor")
// }, 2000)

// console.log("2. Executando o servidor")

// console.log("3. Encerrando o servidor")


// function assarPizza(){
//     setTimeout(() => {
//         console.log("🍕 Pizza pronta")
//     }, 2000)
// }

// console.log("Preparando a pizza")
// assarPizza()
// console.log("Comendo a pizza 🤪")


// function fazerSuco(sabor){

// }

// function callback(){

// }

// fazerSuco(callback)


// function assarPizza(callback) {
//     setTimeout(() => {
//         console.log("🍕 Pizza pronta")
//         callback()
//     }, 2000)
// }

// function comerPizza(){
//     console.log("Comendo a pizza 🤪")
// }

// console.log("Preparando a pizza")
// assarPizza(comerPizza)


// let nome

// function darNome(callback){
//     setTimeout(() => {
//         nome = "Alvarez"
//         callback()
//     }, 2000)
// }

// function mostrarNome(){
//     console.log(nome)
// }

// darNome(mostrarNome)



// let usuario

// function criarUsuario(callback){
//     setTimeout(() => {
//         usuario = {
//             nome: "Matheus",
//             idade: 45,
//             email: "mth@gmail.com"
//         }
//         callback()
//     }, 2000)
// }

// function mostrarUsuario(){
//     console.log(usuario)
// }
// criarUsuario(mostrarUsuario)



// verificarResultado(sucesso, erro)


// function baixarArquivo(callback) {
//     console.log("Baixando arquivo... 📂");

//     setTimeout(() => {
//         console.log("Download concluído! ✅");
//         callback()
//     }, 4000);
// }

// function abrirArquivo(){
//     console.log("Abrindo arquivo... 📂");
// }

// baixarArquivo(abrirArquivo)





// function verificarResultado(callbackSuccess, callbackError){
//     let result = 1 + 1

//     if(result == 2){
//         callbackSuccess()
//     } else{
//         callbackError()
//     }
// }

// function sucesso(){
//     console.log("Uhuuuul! Número 2")
// }

// function erro(){
//     console.log("Xiiiiii, número não é 2")
// }

// verificarResultado(sucesso, erro)

// let pizzaChegou = false

// const pedido = new Promise((resolve, reject) => {
//     if(pizzaChegou == true){
//         resolve("A pizza chegou")
//     } else{
//         reject("Pedido cancelado")
//     }
// })

// pedido
//     .then(() => {
//         console.log("DEU BOM")
//     })
//     .catch(() => {
//         console.log("DEU RUIM")
//     })



// const verificarResultado = new Promise((resolve, reject) => {

//     let result = 1 + 1

//     if(result == 2){
//         resolve("Uhuuuul! Número 2")
//     } else{
//         reject("XIIII, não é 2")
//     }

// })

// verificarResultado
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


const buscarUsuario = new Promise((resolve, reject) => {
    console.log("Buscando usuário no banco de dados... ⏳")

    setTimeout(() => {

        let encontrado = true

        if(encontrado == true){
            resolve({nome: "Matheus", idade: 20, profissao: "Programador"})
        } else{
            reject("Usuário não encontrado")
        }

    }, 2000)

})

buscarUsuario
    .then((res) => {
        console.log(`Nome do usuário: ${res.nome}`)
        console.log(`Idade do usuário: ${res.idade}`)
        console.log(`Profissão: ${res.profissao}`)        
    })
    .catch((err) => {
        console.log(err)
    })
