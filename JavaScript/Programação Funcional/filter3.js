/*Cria uma função que recebe um array e um número como argumentos e retorna um array com os elementos que são maiores que n.*/

function filtraMaioresQueN(array, n){
    return array.filter ((element) => element > n )
}

const array = [5, 6, 1, 2, 10, 15, 9]

console.log(filtraMaioresQueN(array, 7))