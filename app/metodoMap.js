function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
         //Os '...' faz uma cópia de tudo que tem em 'livro' e pede para alterar tudo que tem em 'preço'
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}