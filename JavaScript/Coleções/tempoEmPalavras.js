function tempoEmPalavras(horas, minutos) {
    if (horas < 0 || horas > 23)
      return "Por favor introduza uma hora entre 0 e 23.";
    if (minutos < 0 || minutos > 59)
      return "Por favor introduza minutos entre 0 e 59.";
    let horaExtenso = new Map([
      [0, "meia noite"],
      [1, "uma"],
      [2, "duas"],
      [3, "três"],
      [4, "quatro"],
      [5, "cinco"],
      [6, "seis"],
      [7, "sete"],
      [8, "oito"],
      [9, "nove"],
      [10, "dez"],
      [11, "onze"],
      [12, "meio dia"],
    ]);
    let minutoExtenso = new Map([
      [0, ""],
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
      [15, "um quarto"],
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
      [30, "meia"],
    ]);
    if (minutos === 0) return ` ${horaExtenso.get(horas)} em ponto`;
    if (horas > 12) {
      if (horas === 23 && minutos > 30)
        return `${minutoExtenso.get(60 - minutos)} para a ${horaExtenso.get(0)}`; //zero pq é meia noite - primeira hora do map
      horas -= 12; //calculo para saber as horas da tarde de 1 a 11
    }
    if (horas === 0 && minutos > 30)
      return `${minutoExtenso.get(60 - minutos)} para a ${horaExtenso.get(
        horas + 1
      )}`;
    if (horas === 11 && minutos > 30)
      return `${minutoExtenso.get(60 - minutos)} para o ${horaExtenso.get(
        horas + 1
      )}`;
    if (minutos <= 30)
      return `${horaExtenso.get(horas)} e ${minutoExtenso.get(minutos)}`;
    if (minutos > 30)
      return `${minutoExtenso.get(60 - minutos)} para as ${horaExtenso.get(
        horas + 1
      )}`;
  }
  