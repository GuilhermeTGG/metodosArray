//Exemplo do metodo .reduce
/* const precos = [10, 20, 70]
const precoTotal = precos.reduce((acc, atual) => acc + atual)

console.log (precoTotal) */

function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}