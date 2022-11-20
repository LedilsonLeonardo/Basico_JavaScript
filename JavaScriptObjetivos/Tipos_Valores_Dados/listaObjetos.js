const cliente = {

    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550005", "24678744357"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
},
];

cliente.enderecos.push({
    rua:"R. jose",
    numere: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco)=> endereco.apartamento === true
);

console.log(listaApenasApartamentos)