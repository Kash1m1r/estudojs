const listaLivros = require("./listaseries");
const trocaLugar = require("./encontrarMenor");

function quicksort(array, esquerda, direita) {
    if(array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual - 1) {
            quicksort(array, esquerda, indiceAtual - 1);
        }
        if(indiceAtual < direita) {
            quicksort(array, indiceAtual, direita);
        }
    }   
    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {
        while(array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }
        while(array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if(atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}



console.log(quicksort(listaLivros, 0, listaLivros.length - 1));