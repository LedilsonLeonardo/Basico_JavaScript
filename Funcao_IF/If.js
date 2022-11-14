const num = 10;
if (num === null) {
    console.log('número não fornecido');
}
/**
 No exemplo acima, a instrução console.log(‘número não fornecido’);
 não será executada, pois como a variável num foi definida com um valor de 10,
  o resultado da comparação num === null retornará false. 
 Ou seja, o interpretador não vai, como dizemos, “entrar no if” e executar o código.
 */