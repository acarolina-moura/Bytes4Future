/**************************************************************************************************************************
 * map()
 ****************************************************************************************************************************/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubleNumbers = numbers.map(function (elmento); {
//     return elmento * 2
// }

// console.log(doubleNumbers);


/*Cria uma função que recebe um número como argumento e retorna o mês do ano correspondente.

Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número entre 1 e 12."

Utiliza o que aprendeste sobre Map() para resolver este exercício.*/

function mesesDoAno(numero) {
    const mesesA = new Map([
      [1, "Janeiro"],
      [2, "Fevereiro"],
      [3, "Março"],
      [4, "Abril"],
      [5, "Maio"],
      [6, "Junho"],
      [7, "Julho"],
      [8, "Agosto"],
      [9, "Setembro"],
      [10, "Outubro"],
      [11, "Novembro"],
      [12, "Dezembro"],
    ]);
  
    if (numero < 0 || numero > 11) {
      return "Por favor insira um número entre 1 e 12.";
    }
  
    const data = new Date(numero, 0); 
    const mesIndex = data.getMonth(); 
  
    return meses.get(mesIndex); 
  }
  

console.log(mesesDoAno(1)); // Retorna "Janeiro"
console.log(mesesDoAno(4)); // Retorna "Abril"
console.log(mesesDoAno(10)); // Retorna "Outubro"
console.log(mesesDoAno(-1)); // Retorna "Por favor insira um número entre 1 e 12."
console.log(mesesDoAno(13)); // Retorna "Por favor insira um número entre 1 e 12."











// function mesesDoAno(numero) {
//     if (numero > 0 && numero < 12) {
//         return [
//             "Janeiro",
//             "Fevereiro",
//             "Março",
//             "Abril",
//             "Maio",
//             "Junho",
//             "Julho",
//             "Agosto",
//             "Setembro",
//             "Outubro",
//             "Novembro",
//             "Dezembro",
//         ][numero - 1];
//     } else {
//         return "Por favor insira um número entre 1 e 12.";
//     }
// }

// function mesesDoAno(mes) {

//     const meses = new mes = [0, "Janeiro", 1, "Fevereiro", 2, "Março", 3, "Abril", 4, "Maio", 5, "Junho", 6, "Julho", 7, "Agosto", 8, "Setembro", 9, "Outubro", 10 "Novembro", 11, "Dezembro"];
//     const mesCorrespondente = meses[numero - 1];

//     if (numero < 0 && numero > 11) {
//         return "Por favor insira um número entre 1 e 12."
//     }

//     return mesCorrespondente
// }

// //cosnt meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// console.log(mesesDoAno(12))