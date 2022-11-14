const num1 = 5 ;

const num2 = 5 ;

const resultado = num1 + num2;

/**
 O código acima pode ser refatorado como função, recebendo
  os números como argumentos para que a função possa ser
   executada com qualquer valor: 
 */

   function soma(num1, num2) {
    return num1 + num2;
   }
   
   console.log(soma(5, 5))
   