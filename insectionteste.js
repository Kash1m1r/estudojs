const livrosLista = require("./livros");

function insertion(lista){
    for(atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise -1].preco) {
            let listaAnalise = lista[analise];
            let listaAnterior = lista[analise - 1];

            lista[analise] = listaAnterior;
            lista[analise - 1] = listaAnalise;

            analise --;
        }
    }
    console.log(lista);
}
insertion(livrosLista);