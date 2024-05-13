// Cria uma função que recebe uma data e uma língua como argumentos e a retorna o dia da semana por extenso.
// As línguas suportadas são português (pt) e inglês (en)
// Dias da semana em português: segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado e domingo.
// Dias da semana em inglês: monday, tuesday, wednesday, thursday, friday, saturday, sunday.
// Utiliza o que aprendeste sobre  para resolver este exercício.

function diaDaSemanaPorExtensoBilingue(data, lingua) {

    let semana = data.getDay();

    let semanaPortugues = new Map([

        [0, "domingo"],
        [1, "segunda-feira"],
        [2, "terça-feira"],
        [3, "quarta-feira"],
        [4, "quinta-feira"],
        [5, "sexta-feira"], 
        [6, "sábado"], 
        
    ])

 let semanaIngles = new Map([
        [0, "sunday"],
        [1, "monday"],
        [2, "tuesday"],
        [3, "wednesday"],
        [4, "thursday"],
        [5, "friday"], 
        [6, "saturday"],
    ])

    if (lingua === "pt"){
        return `${semanaPortugues.get(semana)}`
    } else if (lingua === "en") {
        return `${semanaIngles.get(semana)}`
    }
} 