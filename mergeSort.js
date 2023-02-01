const listaTotal = require("./listaseries");

function mergesort(array) {
    if(array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergesort(array.slice(0, meio));
        const parte2 = mergesort(array.slice(meio, array.length));

        array = ordena(parte1, parte2);
    }

    return array;
}
function ordena(parte1, parte2) {
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;
    const resultado = [];

    while(posicaoAtual1 < parte1.length && posicaoAtual2 < parte2.length) {
        let produtoLista1 = parte1[posicaoAtual1];
        let produtoLista2 = parte2[posicaoAtual2];

        if(produtoLista1.preco < produtoLista2.preco) {
            resultado.push(produtoLista1);
            posicaoAtual1++;
        }else{
            resultado.push(produtoLista2);
            posicaoAtual2++
        }
    }
    return resultado.concat(posicaoAtual1 < parte1.length 
        ? parte1.slice(posicaoAtual1)
        : parte2.slice(posicaoAtual2))
}

console.log(mergesort(listaTotal));