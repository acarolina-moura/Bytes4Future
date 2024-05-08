function todasPossuemLetra(array, letra){
    return Array.filter (array => array === letra())
}


let array = ["hoJe", "Amanhã", "TErça"];

console.log(todasPossuemLetra(array))