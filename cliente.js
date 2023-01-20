const dados = require ("./data.json");

console.log(dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

//código omitido

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
