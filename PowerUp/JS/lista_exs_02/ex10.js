/* 10- Cria uma variável do tipo number com o nome maxIndex. Guarda nessa variável o índice da primeira ocorrência do maior valor presente no array. array = [4, 6, 4, 5, 3, 6] // maxIndex = 1 */
/*
function maiorValorArrayIndex(array){
    let maiorValor = array[i];
}*/

const array = [10, 2, 9, 8, 3, 6];

let maxIndex = Math.max(...array);

console.log(array.indexOf(maxIndex));
