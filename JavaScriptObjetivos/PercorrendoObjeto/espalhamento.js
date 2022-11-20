const cliente = {

    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["111111", "44444"]
};
cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartameto: true,
        complemento: "ap 934",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};
console.log(encomenda)
