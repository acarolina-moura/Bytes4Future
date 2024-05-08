/*Cria uma função que recebe um array e um número como argumentos e retorna um array com os elementos que são menores que n.*/

function filtraMenoresQueN(array, n) {
    return array.filter((element) => element < n);
  }
  

const array = [5, 6, 12, 20, 4, 3, 15]

console.log(filtraMenoresQueN(array,7))