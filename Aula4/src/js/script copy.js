let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn-voltar')
let titulo = document.getElementById('titulo')

// btn.addEventListener("click", function(){
//     alert("Você clicou")
// })

btn.addEventListener("click", function(){
    titulo.innerText = "RECEBA!"
    titulo.style.color = "red"
    titulo.style.backgroundColor = "yellow"
})

btn2.addEventListener("click", function(){
    titulo.innerText = "DEVOLVA!"
    titulo.style.color = "green"
    titulo.style.backgroundColor = "gold"
})

