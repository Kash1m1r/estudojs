const cliente = require("./data.json");

function encontra(lista,chave,valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontra(cliente, "nome", "Kirby");
const encontrado2 = encontra(cliente, "nome","Cecelia");
console.log(encontrado2);