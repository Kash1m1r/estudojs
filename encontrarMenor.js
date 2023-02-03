const listaPrincipal = require("./listaseries");

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
/*
function trocaLugar(array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}
*/


console.log(listaPrincipal);
console.log(encontraMenores(listaPrincipal[1], listaPrincipal));

