const cliente = {
    nome: "Gabriel",
    sobrenome: "Pereira",
    idade: 24,
    cpf: "12312312",
    telefone: ["123123123", "1212123123"],
    saldo: 500,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("SALDO INSUFICIENTE");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso. Novo saldo: ${this.saldo}`);
        }
    },
};
cliente.efetuaPagamento(131);
