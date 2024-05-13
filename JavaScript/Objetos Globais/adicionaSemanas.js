/*Cria uma função que recebe uma data e um número de semanas como argumentos e retorna uma nova data resultante da soma. Utiliza o que aprendeste sobre Date para resolver este exercício.*/

function adicionaSemanas(data, semanas) {
    const dataOriginal = new Date (data);
    const milisegundosPorSemana = 7 * 24 * 60 * 60 * 1000;
    const dataComSemanasAdicionadas = dataOriginal.getTime() + (semanas * milisegundosPorSemana);
    const novaData = new Date (dataComSemanasAdicionadas);
    return novaData
}