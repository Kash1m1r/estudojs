const menorValor = require("./algoritmos");
const menor = require("./algoritmos");
const livros = require("./livros");

for(let i = 0; i < livros.length; i++){
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    console.log("livro atual", livros[i]);
    let livroMenorPreco = livros[menor]
    console.log("livro menor preço", livros[menor]);

    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);