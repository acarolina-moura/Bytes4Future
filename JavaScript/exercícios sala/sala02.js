/* Escreva uma função chamada cacularMedia que recebe um array de números como parâmetro e retorna a média desses números.
 */

const notas = [4, 7, 8, 5, 2];
let somaDasNotas = 0;

function cacularMedia(array) {
  for (let i = 0; i < array.length; i++) {
    somaDasNotas += array[i];
  }
  let media = somaDasNotas / array.length;
  return media;
}

console.log(cacularMedia(notas));
