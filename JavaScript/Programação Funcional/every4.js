/*Cria uma função que recebe um array como argumento e verifica se todos os elementos são números.*/

function todosSaoNumeros(array){
    const tudoNumero = array.every ((elemento) => elemento === Number);
    return tudoNumero
}