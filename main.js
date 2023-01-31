const {listaLivro, listaFrutas} = require("./listaDupla");

function juntaListas(lista1,lista2) {
    let listaFinal = [];
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;
    let atual = 0;

    while(posicaoAtual1 < lista1.length && posicaoAtual2 <lista2.length) {
        let produtoLista1 = lista1[posicaoAtual1];
        let produtoLista2 = lista2[posicaoAtual2];

        if (produtoLista1.preco < produtoLista2.preco){
            listaFinal[atual] = produtoLista1;
            posicaoAtual1++;
        } else {
            listaFinal[atual] = produtoLista2;
            posicaoAtual2++;
        }
        atual++;
    }

    return listaFinal;
}

console.log(juntaListas(listaLivro, listaFrutas));