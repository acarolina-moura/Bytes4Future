/*Cria uma função que recebe uma data e uma língua como argumentos e a retorna o mês por extenso.

As línguas suportadas são português (pt) e inglês (en)

Meses em português - inglês:

Janeiro — January
Fevereiro — February
Março — March
Abril — April
Maio — May
Junho — June
Julho — July
Agosto — August
Setembro — September
Outubro — October
Novembro — November
Dezembro — December

Utiliza o que aprendeste sobre  para resolver este exercício.*/

function mesPorExtensoBilingue(data, lingua) {

    let meses = data.getMonth()

    let mapaPortugues = new Map([
        [0, "Janeiro"],
        [1, "Fevereiro"],
        [2, "Março"],
        [3, "Abril"],
        [4, "Maio"],
        [5, "Junho"],
        [6, "Julho"],
        [7, "Agosto"],
        [8, "Setembro"],
        [9, "Outubro"],
        [10, "Novembro"],
        [11, "Dezembro"]
    ]);

    let mapaIngles = new Map([
        [0, "January"],
        [1, "February"],
        [2, "March"],
        [3, "April"],
        [4, "May"],
        [5, "June"],
        [6, "July"],
        [7, "August"],
        [8, "September"],
        [9, "October"],
        [10, "November"],
        [11, "December"]
    ])
if (lingua === "pt"){
    return mapaPortugues.get(meses)
} else if (lingua === "en"){
    return mapaIngles.get(meses)
}

} 