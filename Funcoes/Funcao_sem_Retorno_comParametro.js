/* Função sem retorno, com parâmetro: similar à anterior, porém agora a funcção
recever, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é
possível reaproveitar a função para que funcione de maneira parecida com o nome de qual
pessoa(desde que esteja no formato de dado string).
*/

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
}
cumprimentaPessoa ('Helena')