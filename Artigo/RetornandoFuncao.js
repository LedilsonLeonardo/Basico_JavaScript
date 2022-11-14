//Ao refatorar o primeiro código, ainda misturamos duas responsabilidades diferentes no mesmo código,
//Por meio do conceito de higher order function, podemos compor funções para separar tarefas diferentes.

// const acesso = (nome) => {

//     return `${nome} logou com sucesso no sistema!`
// }

// const usuarioLogin = (nome) =>{

//     let array = []
//     for (i = 0; i < 90000; i++){
//         array.push(i)
//     }
//     return acesso (nome)
// }
// usuarioLogin("Luke")

// //Recebendo uma função e retornando uma função

// const acesso = (nome) =>{
//     return `${nome}logou com sucesso no sistema!`
// }
// const autentica = (cargo) =>{

//     let array = []
//     for (i = 0; i < cargo; i++){
//         array.push(i)
//     }
//     return true;
// }
// const login = (pessoa, autentica) => {
//     if(pessoa.cargo === `funcionario`) {
//        autentica(90000)
//     } else if(pessoa.cargo === `diretoria`) {
//        autentica(900000)
//     }
//    return acesso(pessoa.nome)
//   }