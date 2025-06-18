    const divstart = document.getElementById("diviniciar")
    const divareajogo = document.getElementById("areajogo")
    const titulo = document.getElementById("titulupergunta")
    const questions = [
        {question: "Qual é o maior deserto do mundo",optiones:["Saara","Antardida","Atacama","Andes"], correto:"Antardida"},
        {question: "Qual a pessoa mais rica do mundo",optiones:["Bolsonaro", "Elon Musk","Mark Zuckerberg","Bill Gates"], correto:"Elon Musk"}, 
        {question: "    Como comentar em C# (csharp)",optiones:["#","!","/","//"], correto:"//"},
        {question: "Qual o nome mais rapido",optiones:["Koenigsegg Jesko Absolut", "Hennessey Venom F5v"], correto:"Koenigsegg Jesko Absolut"},
    ]



    let indexperguntas = 0

    function começarjames(){
        fecharbotaoinicio()
        abrirareajogo()
    }

    function fecharbotaoinicio(){
        divstart.innerHTML = ""
    }

    function abrirareajogo(){
        divareajogo.classList.add("active")
        titulo.textContent = questions[indexperguntas].question
        areapergunta.innerHTML = "" 
        questions[indexperguntas].optiones.forEach(opcao =>{
        let botaodepergunta = document.createElement("button")

        botaodepergunta.textContent = opcao 
        botaodepergunta.classList.add("answer-btn")
        botaodepergunta.addEventListener("click", () => validarrespostacorrecta())
        areapergunta.appendChild(botaodepergunta)})
        

    }
    function validarrespostacorrecta(btnselecionar){
        const botoesdatela = document.querySelectorAll(".answer-btn")
        const respostacorreta = questions[indexperguntas].correto
    
        botoesdatela.forEach(botao => {
            if(botao.textContent == respostacorreta)
                botao.classList.add("correct")
    
            if(botao.textContent === btnselecionar && botao.textContent != respostacorreta)
                botao.classList.add("incorrect")
        })
    }
    
     function prosscimaperguta(){
        indexperguntas++
        if(indexperguntas < questions.length){
            abrirareajogo()
        
        }else{
            alert("caboo as perguntas")

        }
        
        

    }