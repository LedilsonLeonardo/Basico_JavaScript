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


const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
console.error("erro. É necessario ter um endereço cadastrado")
}