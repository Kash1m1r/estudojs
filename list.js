const frutas = require("./frutas")

function listaFruta (lista) {
    for(atual = 0; atual < lista.length; atual ++){
        let analisar = atual;
        while(analisar > 0 && lista[analisar].preco < lista[analisar - 1].preco){
            let posicaoInicial = lista[analisar];
            let posicaoAnterior = lista[analisar - 1];

            lista[analisar] = posicaoAnterior;
            lista[analisar - 1] = posicaoInicial;

            analisar --;
        }
    }
    console.log(lista);
}

listaFruta(frutas);