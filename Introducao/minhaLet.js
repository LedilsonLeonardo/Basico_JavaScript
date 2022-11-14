let minhaLet;
console.log(minhaLet); //underfined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

/*
Ao declararmos uma variável como const ela deve obrigatoriamente receber um valor: const taxaComissao = 0.25;

Ao declararmos let, ao contrário, podemos apenas declarar a variável, sem atribuir nenhum valor. Além disso, o valor inicial pode ser modificado depois:

let minhaLet;

Pode parecer estranho quando utilizamos a palavra variável
 (ou variable, em inglês) mas ao mesmo tempo o JavaScript moderno tem uma opção, a chamada const, que justamente não pode ser variável — não podemos alterar o valor dela.

Ou seja, a declaração const numero = 1; não pode receber 
nenhum outro valor, e aparentemente esse é um comportamento esperado, e também uma boa prática. Afinal de contas, qual é o ideal? Mudar o valor de uma variável ou não mudar nunca? Como saber? Entender quando é preciso reatribuir (ou seja, alterar/substituir) o valor de uma variável vem com a prática. */