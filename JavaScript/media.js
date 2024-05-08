function media(array) {

   let soma = array.reduce((acumulador, valor) => acumulador + valor, 0) // reduce faz op soma, sub 
    console.log(soma); // acumulador guarda 
    return Math.round(soma / array.length)
}

let array = [5,8,7,4,9];

console.log(media(array))
