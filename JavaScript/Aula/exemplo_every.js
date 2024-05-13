function todasPossuemLetra(array, letra){
    return array.filter (array => array === letra())
}


let array = ["hoJe", "Amanhã", "TErça"];

console.log(todasPossuemLetra(array))