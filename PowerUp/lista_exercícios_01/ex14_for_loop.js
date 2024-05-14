/*Escrever um ciclo for para imprimir números pares de 2 a 20.*/

let numeros = 20;
let i;

for (let i = 2; i <= numeros; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
