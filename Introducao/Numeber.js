// Vamos calcular a área de um retângulo
//let largura = "10";
//let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de 
//String para números, possibilitando a realização da da multiplicação

//Podemos usar o operador de soma + para fazer
// a conversão de textos para números, colocando-os antes das variáveis:

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a
// conversão de String para números realizado usando o + antes das variáveis

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana 
//para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;

console.log(Number(usuarioConectado)); // agora teremos a conversão de true 
//(verdadeiro) para o número 1.


/*Dica de boas práticas: Apesar do JavaScript fazer a maioria das 
conversões de forma correta, problemas podem aparecer, então é sempre
 bom fazer as conversões de forma explícita. Não é comum usar o operador
  de soma para fazer a conversão para números, mas este uso é possível. 
Conversões de booleanos não costumam ser muito usados, mas são possíveis.*/