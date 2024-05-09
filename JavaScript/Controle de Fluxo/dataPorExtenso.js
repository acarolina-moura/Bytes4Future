function dataPorExtenso(data){

    let dia = data.getDate();;
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let diaDaSemana = data.getDay();


    let mapaDoMes = new Map ([
        [0, "janeiro"],
        [1, "fevereiro"],
        [2, "março"],
        [3, "abril"],
        [4, "maio"],
        [5, "junho"],
        [6, "julho"],
        [7, "agosto"],
        [8, "setembro"],
        [9, "outubro"],
        [10, "novembro"],
        [11, "dezembro"]
    ]);

    let mapaDaSemana = new Map ([
        [0, "domingo"],
        [1, "segunda-feira"],
        [2, "terça-feira"],
        [3, "quarta-feira"],
        [4, "quinta-feira"],
        [5, "sexta-feira"],
        [6, "sábado"]
    ]);
    return `${mapaDaSemana.get(diaDaSemana)}, ${dia} de ${mapaDoMes.get(mes)} de ${ano}`
}