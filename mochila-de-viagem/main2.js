const form = document.getElementById('novoItem')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    nome = evento.target.elements['nome'].value
    quantidade = evento.target.elements['quantidade'].value

    criaElemento(nome, quantidade)
})

function criaElemento(nome, quantidade) {
    console.log(nome, quantidade)
}