alert('Hello Javascript')

const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = []

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ''
    quantidade.value = ''
})

function criaElemento(nome, quantidade){

    lista.innerHTML = ` <p class='item' >  <strong>${quantidade} </strong> -  ${nome}</p>  `

    /*** Salvar no navegador */
    const itemAtual = {
        'nome': nome,
        'quantidade': quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem('item', JSON.stringify(itens))
}
