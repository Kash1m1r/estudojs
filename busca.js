const listaSeries = require("./listaseries");
const buscaSerie = require("./listaseries");

function busca (array, de, ate, valorBuscado) {
    console.log('de', 'ate', de, ate);
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (de > ate) {
        return - 1;
    }

    if(valorBuscado === atual.preco){
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(listaSeries, 0, listaSeries.length - 1, 32));