function apresentar(nome) {
    return `meu nome é ${nome}`;
}

//Arrow function 

const apresentarArrow = nome => `meu nome é ${nome}`;

//Arrow function coom + de 1 linha 
const soma = (num1, num2) => num1 + num2;

//Arrow funciona com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2 ) => { //função pode ter mais de um retorno 
    if (num1 > 10 || num2 > 10) {

        return " somente número de 1 a 9 "
    } else {
        return num1 + num2;
    }

}
//HOISITING: Arrow function se comporta como expressão
//operador maior ou igual que
//>=