const nomes = ["ana julia","Caio vinicius","BIA silva"];

const nomePadronizados = nomes.map((nome)=>{

    return nome.toLocaleUpperCase();
})

console.log(nomePadronizados);