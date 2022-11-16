/*
Agora trabalhamos com arrays que representa listas de dados (notas de alunos
    em uma escola).Mas o que acontece se declaramos um array sem nenhum valor na lista?

*/

// const arrayVazia = [ ];

// console.log(arrayVazia)
// console.log(arrayVazia.length)

/*No ex acima, podemos ver que o JavaScript criou o array e a gaurdou
na variável arrayVazia, mas seu length é 0

Vamos então ver o que acontence se usarmos a notação de colchetes para tentar acessar o índeic 0
do array (lembrando que o índice zer se frefe à primeira posição)
*/

// const arrayVazia = [ ];

// console.log(arrayVazia [0])

//Resultado será undefined

// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// console.log(arrayVazia[0])
// console.log(arrayVazia[1])
// console.log(arrayVazia[2])

/* Criamos um array com 3 posições, porém em nehuma dessa posições existe um valor. 
De certa forma, odemos pensar que este array foi criado como um gaveteiro  com três gavetas e 
todas elas estão "vazias", sem nehum valor de dado guardado.


para finalziar, vamos fazer último teste. Vamos usar o método Push()
 */

const arrayVazia = [,,,];

console.log(arrayVazia.length)

arrayVazia.push(50)

console.log(arrayVazia)

console.log(arrayVazia.length)

/*
 O js manteve as posicções vazias e adicionou o 50 ao final do array.Apóes
 a execução, ele passou a ter 4 posições, mas somente um elemento(o número 50
    ).Chamos este tipo de estrutura de array esparso e pe impornta lembar deste
    comportamento dos arrays em Js enqunato trabalhamos
*/
