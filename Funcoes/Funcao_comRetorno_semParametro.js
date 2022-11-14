/*
Função com retorno, sem parâmetro: É possível combinar funções 
para que cada uma controle apenas uma parte do código e elas 
trabalhem juntas.

No caso abaixo, a função cumprimentar() não precisa receber
 nenhum parâmetro. Mas logo abaixo vemos que ela está sendo
  utilizada para montar uma string na função cumprimentaPessoa
  (nomePessoa). Isso significa que a string ”Oi gente!” deve 
  estar disponível para outras partes do programa - ou seja,
  deve ser retornada com o uso da palavra-chave return.
 */
function cumprimentar( ){
    return 'oi gente!'
}
    function cumprimentaPessoa(nomePessoa){
        console.log(`${cumprimentar( )} Meu nome é ${nomePessoa}`)
    
}
cumprimentaPessoa('Paula')// "oi gente! meu nome é Paula"