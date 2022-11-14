/*
O código abaixo mostra duas funções para imprimir 
uma mensagem no console depois do término da iteração 
do array. Esta iteração representa o período que o
 sistema levaria para autenticar que 
os usuários Luke e Leia foram logados com sucesso:*/

// const lukeLogin = () => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//       array.push(i)
//     }
//     return "Luke logado com sucesso!"
//   }
  
//   const leiaLogin = () => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//       array.push(i)
//     }
//     return "Leia logada com sucesso!"
//   }
  
//   lukeLogin()
//   leiaLogin()

  //temos duas funções realizando uma mesma tarefa, que é fazer o login
  // pensando em como podemos melhorar esse código, logo vem à mente o conceito
  // DRY, don't repeat yourself ou Não se repita em tradução livre

  const usuarioLogin =  (pessoa) => {
    let array = []
    for (i = 0; i < 90000; i++){
      array.push(i)

    }
    return `${pessoa} logou com sucesso no sistema!`
  }
usuarioLogin("Luke")

// executando a função teremos 
//"Luke logou com sucesso no sistema!"