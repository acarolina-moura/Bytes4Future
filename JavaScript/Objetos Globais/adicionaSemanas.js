/*Cria uma função que recebe uma data e um número de semanas como argumentos e retorna uma nova data resultante da soma. Utiliza o que aprendeste sobre Date para resolver este exercício.*/

function adicionaSemanas(data, semanas) {
    const dataOriginal = new Date (data);
    const milisegundosPorSemana = 7 * 24 * 60 * 60 * 1000;
    const dataComSemanasAdicionadas = dataOriginal.getTime() + (semanas * milisegundosPorSemana);
    const novaData = new Date (dataComSemanasAdicionadas);
    return novaData
}


// Uso

const dataInicial = new Date(2024, 4, 13); // 13 de maio de 2024
const numeroSemanas = 4;

const novaData = adicionarSemanas(dataInicial, numeroSemanas);

console.log(novaData); // Imprime: Sat Jun 10 2024 00:00:00 GMT-0700 (Horário de Verão do Pacífico)