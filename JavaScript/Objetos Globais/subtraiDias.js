/*Cria uma função que recebe uma data e um número de dias como argumentos e retorna uma nova data resultante da subtração.*/

function subtraiDias(data, dias) {

    let milidias = 24 * 60 * 60 * 1000;
    let dia = dias * milidias
    let diferenca = data - dia
    return new Date(diferenca)
 }