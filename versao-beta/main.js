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
    

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    lista.appendChild(numeroItem)
    
    const novoItem = document.createElement('span')
    novoItem.innerHTML += nome
    lista.appendChild(novoItem)
    
    novoItem.classList.add('item')
    
    const itemAtual = {
        'nome': nome,
        'quantidade': quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem('item', JSON.stringify(itens))
}
