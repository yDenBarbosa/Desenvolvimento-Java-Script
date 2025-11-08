let btn = document.getElementById('btn')
let titulo = document.getElementById('titulo')
let contador = 0

btn.addEventListener('click', function(){
    contador += 1
    titulo.innerText = `Você clicou ${contador} vezes`
})
