// let num1 = 10;

// let num2 = num1;

// num2 += 5;

// num1 += 1;

// console.log(`Num1 é ${num1}. Num2 é ${num2}`);

// let numeroOriginal = 10;

// function alteraNumero(numero) {
//     numero = 50;

//     console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
// }

// alteraNumero(numeroOriginal);
/*
Executando o código, teremos a frase “numero do parâmetro é 50. 
numeroOriginal é 10”. 
Ao chamar a função passando numeroOriginal como parâmetro,
 foi feita uma cópia de seu valor para ser utilizada como o 
 parâmetro numero dentro da função. Dessa forma, mesmo alterando
  numero dentro da função, numeroOriginal permanece inalterado.

Mas como você viu, com arrays não funciona bem dessa forma, afinal,
 eles não são um tipo primitivo. Considere o exemplo utilizado 
 no vídeo passado: */

//  const notas = [7, 7, 8, 9];

// const novasNotas = notas;

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);


/*
A partir do código const novasNotas = notas, o JavaScript entende que 
novasNotas
e notas passam a ser o mesmo array, e agora eles apontam para o 
mesmo espaço na memória. Como estamos lidando com dados mais 
complexos, o JavaScript faz isso por padrão para otimizar
 memória e performance, em vez de realizar uma cópia do 
 array em toda nova atribuição.

Uma atribuição de um array é chamada de atribuição por
 referência, pois nela é passada a referência do array
  em si, e não uma cópia de seu valor.
*/

const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array){

    array.push(10);

    console.log(`Array do parâmetro é ${array}`);
    console.log(`ArrayOriginal é ${arrayOriginal}`);
}

alteraArray (arrayOriginal);

/*
Após passar arrayOriginal como parâmetro de alteraArray, 
o utilizamos como o parâmetro array. O código array.push(10) 
alterou ambos os 
arrays, assim como o que houve no exemplo que fizemos a atribuição.
 Ou seja, novamente, foi passada a referência do array em si, e não 
 uma cópia dele.

De forma análoga à solução do vídeo, caso queiramos passar
 uma cópia do array e não sua referência, trocamos o código
  alteraArray(arrayOriginal) por alteraArray([...arrayOriginal]).
   Assim, a saída será:
*/