function cartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let card = document.createElement('section')
    card.className = 'card'

    card.innerHTML = `
        <div class="conteudo">
            <div class="botao-categoria">
                <h1>${categoria}</h1>
            </div>
    
            <p class="pergunta"><b>${pergunta}</b></p>
            <p class="resposta">${resposta}</p>
        </div>
    `


    let respostaVisivel = false

    function virar () {
        respostaVisivel = !respostaVisivel
        card.classList.toggle('active', respostaVisivel)
    }
    card.addEventListener('click', virar)


    container.appendChild(card)
}