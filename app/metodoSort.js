//Exemplo metodo .sort 

/* let precos = [29.98, 11, 1, 101, 110]

let precosOrdenados = precos.sort(function(a, b) {
    return a - b //PARA COLOCAR DO MENOR PARA O MAIOR >> return b - a
})

console.log(precosOrdenados) */

let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let lirvosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(lirvosOrdenados)
}