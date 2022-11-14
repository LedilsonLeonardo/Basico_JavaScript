// //delcaração de função

//A nossa expressão de função nãote nome da função

// function minhaFuncao(param){
//     //bloco de código
// }

// minhaFuncao ("param")

//expressão de função
//As funções não tem nome, o que nome é a const

// const soma = function(num1, num2){return num1 + num2}
// console.log(soma(1,1))

//diferença a principal: HOISTING???
//funções e var são "listadas" no topo do arquivo 

console.log(apresentar())

function apresentar(){
    return "olá";
}

console.log(soma(1,1))
const soma = function(num1, num2){return num1 + num2}

