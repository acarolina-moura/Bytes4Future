/*Cria uma função que recebe uma data e um número de horas como argumentos e retorna uma nova data resultante da subtração.*/

function subtraiHoras(data, horas) {

    let milihoras = 60 * 60 * 1000;
    let hora = horas * milihoras
    let diferenca = data - hora
    return new Date(diferenca)
}