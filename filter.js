const clientes = require("./data.json");

function filtraAp(clientes){
    return clientes.filter((cliente) => {
        return( 
        cliente.endereco.apartamento && 
        cliente.endereco.hasOwnProperty("complemento")
        );
    });       
}

const filtrados = filtraAp(clientes);
console.log(filtrados);