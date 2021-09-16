var cor = document.getElementById("cor")
var botao = document.getElementById("botao")
var alfabeto = "0123456789ABCDEF"
var cores = ""

botao.addEventListener('click',()=>{
    for(let i=0; i<6;i++){
        cores += alfabeto[Math.floor(Math.random()*16)]
    }

    cor.innerHTML = "#" + cores
    document.body.style.backgroundColor = "#" + cores
    cores = ""
})