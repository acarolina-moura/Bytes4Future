<<<<<<< HEAD
/* Escreva uma função chamada calcularMediana que recebe um array de números como parametro e retorna a mediana desses números
array = [4,7,8,5,2]; */

// const valores = [4, 7, 8, 5, 2];

// function calcularMediana(array) {
// valores.sort(function (a, b){
//    return a - b;
// });
// }

// const tamanho = array.length;
// const meio = Math.floor(tamanho / 2);

// if (tamanho % 2 === 0) {
//     return (valores[meio -1] + valores[meio]) / 2 ;
// } else{
//     return valores[meio];
// }

// console.log(valores);

function verificarMediana(array) {
  let mediana = 0;

  array = array.sort();

  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 === 1) {
      mediana = array[array.length / 2 - 0.5];
      return mediana;
    }

    if (array.length % 2 === 0) {
      mediana = [array[array.length / 2], array[array.length / 2 - 1]];
      return mediana;
    }
  }

  return mediana;
}

let arrayTest = [4, 7, 8, 5, 2];
let teste = verificarMediana(arrayTest);
console.log(teste);
=======
/* Escreva uma função chamada calcularMediana que recebe um array de números como parametro e retorna a mediana desses números
array = [4,7,8,5,2]; */

// const valores = [4, 7, 8, 5, 2];

// function calcularMediana(array) {
// valores.sort(function (a, b){
//    return a - b;
// });
// }

// const tamanho = array.length;
// const meio = Math.floor(tamanho / 2);

// if (tamanho % 2 === 0) {
//     return (valores[meio -1] + valores[meio]) / 2 ;
// } else{
//     return valores[meio];
// }

// console.log(valores);

function verificarMediana(array) {
  let mediana = 0;

  array = array.sort();

  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 === 1) {
      mediana = array[array.length / 2 - 0.5];
      return mediana;
    }

    if (array.length % 2 === 0) {
      mediana = [array[array.length / 2], array[array.length / 2 - 1]];
      return mediana;
    }
  }

  return mediana;
}

let arrayTest = [4, 7, 8, 5, 2];
let teste = verificarMediana(arrayTest);
console.log(teste);
>>>>>>> 5854148777fbadb7784df6b30a87540962774cf4
