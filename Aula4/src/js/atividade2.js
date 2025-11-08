let btn = document.getElementById('btn')
let btnz = document.getElementById('btnz')
let titulo = document.getElementById('titulo')
let contador = 0

btn.addEventListener('click', function(){
    contador += 1
    titulo.innerText = `Você clicou ${contador} vezes`
})

btnz.addEventListener('click', function(){
    contador = 0
    titulo.innerText = `Você clicou ${contador} vezes`
})
