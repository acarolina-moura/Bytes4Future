/*Cria uma função que recebe uma data como argumento e a retorna o dia da semana por extenso.*/
// Output : diaDaSemanaPorExtenso(new Date(2022,03,04)) // segunda-feira

function diaDaSemanaPorExtenso(data){
    let dia = data.getDate();
   // let mes = data.getMonth();
    //let ano = data.getFullYear();
    let diaDaSemana = data.getDay();

    let mapaDaSemana = new Map ([
        [0, "domingo"],
        [1, "segunda-feira"],
        [2, "terça-feira"],
        [3, "quarta-feira"],
        [4, "quinta-feira"],
        [5, "sexta-feira"],
        [6, "sábado"]
    ]);
    return `${mapaDaSemana.get(diaDaSemana)}`
}


console.log(diaDaSemanaPorExtenso(new Date(2022, 3, 4)));

//console.log(diaDaSemanaPorExtenso(new Date(2022,03,04)))