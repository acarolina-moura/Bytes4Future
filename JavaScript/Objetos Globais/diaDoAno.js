// Cria uma função que recebe uma data como argumento e retorna o dia do ano entre 1 e 366.

// Utiliza o que aprendeste sobre Date para resolver este exercício.

// Exemplo de Output: diaDaSemanaPorExtenso(new Date(2021, 04, 21)) // 141


function diaDoAno(data) {

    const dataObj = new Date(data);
    const dataReferencia = new Date(data.getFullYear(), 0, 1);
    const diferencaMilisegundos = dataObj.getTime() - dataReferencia.getTime();
    const diaDoAno = Math.floor(diferencaMilisegundos / (1000 * 60 * 60 * 24)) + 1;

    return diaDoAno;
} 