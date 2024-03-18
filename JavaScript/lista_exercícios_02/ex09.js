/*9 - Cria uma variável do tipo number com o nome min. Guarda nessa variável o menor valor positivo presente no array. array = [4, 1, 4, 5] // min = 1 */

const array = [4, 1, 4, 5];

let minValor = Math.min(...array);
console.log(array.indexOf(minValor));
