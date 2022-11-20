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
for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function")

    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}
