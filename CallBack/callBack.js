const nomes = ["Evaldo","Mari","Camis"];


//Primeira e forma de usar

nomes.forEach(function (nome){

    console.log(nome);
});


//Segunda forma 

nomes.forEach ((nome)=>{

    console.log(nome)
});
 

//Terceira forma de usar 

function imprimeNome(nome){

    console.log(nome);
}

nomes.forEach(imprimeNome);
