const divstart = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const question = [
    "Qual é o maior deserto do mundo",
    "Qual a pessoa mais rica do mundo",  
]

let indexperguntas = 0
const botaodepergunta = document.createElement("button")
function começarjames(){
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio(){
      divstart.innerHTML = ""
}

function abrirareajogo(){
    divareajogo.classList.add("active")

    
    botaodepergunta.textContent = question[indexperguntas]
    botaodepergunta.classList.add("answer-btn")
    areapergunta.appendChild(botaodepergunta)

}
function prosscimaperguta(){
    indexperguntas++
    abrirareajogo()
    

}