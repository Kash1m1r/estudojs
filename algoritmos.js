const livros = require("./livros");

const precosLivros = [10,25,30,45,33];

let maisBarato = 0;

for(let i = 0; i < livros.length; i++){
    if(livros[i] < livros[maisBarato]) {
        maisBarato = i;
    }
}

console.log(`Livro mais barato é ${livros[maisBarato].preco} e o seu título é
${livros[maisBarato].titulo}`);