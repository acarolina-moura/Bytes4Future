<<<<<<< HEAD
/*6- Cria a função FizzBuzz, que tem o argumento n, que é um número inteiro, e que retorna um array com n elementos em que os índices múltiplos de 3 possuem o valor de "Fizz", os múltiplos de 5 possuem o valor de "Buzz" e os múltiplos de 15 possuem o valor de "FizzBuzz", todos os outros elementos do array devem possuir o valor de " ", os índices devem começar em 1. */

function fizzBuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0 ) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        } 
    }
    return arr;
}
fizzBuzz(15);
=======
/*6- Cria a função FizzBuzz, que tem o argumento n, que é um número inteiro, e que retorna um array com n elementos em que os índices múltiplos de 3 possuem o valor de "Fizz", os múltiplos de 5 possuem o valor de "Buzz" e os múltiplos de 15 possuem o valor de "FizzBuzz", todos os outros elementos do array devem possuir o valor de " ", os índices devem começar em 1. */

function fizzBuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0 ) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        } 
    }
    return arr;
}
fizzBuzz(15);
>>>>>>> 5854148777fbadb7784df6b30a87540962774cf4
