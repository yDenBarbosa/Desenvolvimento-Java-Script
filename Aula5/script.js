// // setTimeout(()=>{
// //     console.log("1. Iniciando o servidor");
// // }, 20000) 

// // console.log("2. Executando o servidor");
// // console.log("3. Encerrando o servidor");

// function assarPizza(params) {
//     setTimeout(()=>{
//         console.log("🍕 Pizza pronta");
//     }, 2000)
// }


// console.log("Preparando a Pizza");
// assarPizza()
// console.log("Comendo a Pizza 🤪");

// function fazerSuco(sabor) {
    
// }

// function callback() {
    
// }

// fazerSuco("Uva")


// function verificarResultado(callbackSuccess, callbackError){
//     let result = 1 + 1

//     if(result == 2){
//         callbackSuccess()
//     } else{
//         callbackError()
//     }
// }

// function sucesso(){
//     console.log("Uhuuuuul! Número 2")
// }

// function erro(){
//     console.log("Xiiiiii, número não é 2")
// }

// verificarResultado(sucesso, erro)


function baixarArquivo(callback) {
    console.log("Baixando arquivo...");
    
    setTimeout(() => {
        console.log("Download concluido!");
        callback()
    }, 4000)
}

function abrirArquivo() {
    console.log("Abrindo arquivo...");
}

baixarArquivo(abrirArquivo)

let pizzaChegou = true

const pedido = new Promise((resolve, reject)=>{
    if(pizzaChegou == true){
        resolve("A pizza chegou")
    } else {
        reject("Pedido cancelado")
    }
})

pedido
    .then(()=>{
        console.log("Deu bom")
    })
    .catch(()=>{
        console.log("Deu ruim")
    })


const verificarResultado = new Promise((resolve, reject)=>{
    let result = 1 + 1

    if (result == 2 ) {
        resolve("Uhuuuuul! Número 2")
    }else {
        reject("XIII, não é 2")
    }
})

verificarResultado
    .then(()=>{

    })
    .catch(()=>{
        
    })