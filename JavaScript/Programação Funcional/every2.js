/*Cria uma função que recebe um array e um número como argumentos e verifica se todos os elementos são iguais a n.*/

function todosIguaisAN(array, n){
    const numerosIguais = array.every((elemento) => elemento === n);
    return numerosIguais
}