const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550005", "24678744357"],
    saldo: 200,
    efetuapagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
        else{

            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`);
        }
    },

};

cliente.efetuapagamento(25);
