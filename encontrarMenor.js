const listaSeries = require("./listaseries");

function encontraMenores(pivo, array) {
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if(produtoAtual.preco < pivo.preco) {
            menores++; 
        }
    }

    return menores;

}

console.log(listaSeries);

console.log(encontraMenores(listaSeries[2], listaSeries));