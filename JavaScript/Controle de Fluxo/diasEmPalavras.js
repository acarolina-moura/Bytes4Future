function diaEmPalavras(dia, mes, ano) {
    if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
    if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
    if (dia < 1 || dia > 30 && (mes === 4 || mes === 6 || mes === 9 || mes === 11))
        return "Por favor introduza um dia entre 1 e 30.";
    let anoBiss = ano % 4 === 0 && ano % 100 === !0
    if (dia > 28 && mes === 2 && !anoBiss)
        return "Por favor introduza um dia entre 1 e 28.";
    if (dia > 29 && mes === 2 && anoBiss)
        return "Por favor introduza um dia entre 1 e 29.";
    if (ano < 2000 || ano > 2030)
        return "Por favor introduza um ano entre 2000 e 2030.";
    let diaMap = new Map([
        [0, " "],
        [1, "um"],
        [2, "dois"],
        [3, "três"],
        [4, "quatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "sete"],
        [8, "oito"],
        [9, "nove"],
        [10, "dez"],
        [11, "onze"],
        [12, "doze"],
        [13, "treze"],
        [14, "catorze"],
        [15, "quinze"],
        [16, "dezasseis"],
        [17, "dezassete"],
        [18, "dezoito"],
        [19, "dezanove"],
        [20, "vinte"],
        [21, "vinte e um"],
        [22, "vinte e dois"],
        [23, "vinte e três"],
        [24, "vinte e quatro"],
        [25, "vinte e cinco"],
        [26, "vinte e seis"],
        [27, "vinte e sete"],
        [28, "vinte e oito"],
        [29, "vinte e nove"],
        [30, "trinta"],
        [31, "trinta e um"],
    ]);
    let mesMap = new Map([
        [0, " "],
        [1, "janeiro"],
        [2, "fevereiro"],
        [3, "março"],
        [4, "abril"],
        [5, "maio"],
        [6, "junho"],
        [7, "julho"],
        [8, "agosto"],
        [9, "setembro"],
        [10, "outubro"],
        [11, "novembro"],
        [12, "dezembro"],
    ]);
    if (ano === 2000) return diaMap.get(dia) + " de " + mesMap.get(mes) + " de dois mil"
    else return diaMap.get(dia) + " de " + mesMap.get(mes) + " de dois mil e " + diaMap.get(ano - 2000);
}