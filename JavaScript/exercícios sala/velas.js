<<<<<<< HEAD
/* Considere um array que representa o estado das velas em um bolo de aniversário, onde true indica que a vela  está acessa e false indica que  a vela está apagada.
Escreva uma função chamada contarVelasAcessas que recebe um array de velas e retorna o número total de velas acessas.

Exemplo: 

const velas = [true, true, false, true, false, true];

velas = [ false, true, false, true, false, true, true];

velas = [false, false, true, false, false];

console.log(contarVelasAcessas(velas));

Implemente a função contarVelasAcessas e teste-a com diferentes conjuntos de dados para garantir que ela funcione corretamente em todos os casos. */

// true = ACESSA
// false = APAGADA

function contarVelasAcessas(velas) {
  for (let i = 0; i < velas.length; i++) {
    if (velas[i] === true) {
      i++;
      return false;
    }
  }
}

const velas = [true, true, false, true, false, true];
const velas1 = [false, true, false, true, false, true, true];
const velas2 = [false, false, true, false, false];

console.log(contarVelasAcessas(velas));
console.log(contarVelasAcessas(velas1));
console.log(contarVelasAcessas(velas2));
=======
/* Considere um array que representa o estado das velas em um bolo de aniversário, onde true indica que a vela  está acessa e false indica que  a vela está apagada.
Escreva uma função chamada contarVelasAcessas que recebe um array de velas e retorna o número total de velas acessas.

Exemplo: 

const velas = [true, true, false, true, false, true];

velas = [ false, true, false, true, false, true, true];

velas = [false, false, true, false, false];

console.log(contarVelasAcessas(velas));

Implemente a função contarVelasAcessas e teste-a com diferentes conjuntos de dados para garantir que ela funcione corretamente em todos os casos. */

// true = ACESSA
// false = APAGADA

function contarVelasAcessas(velas) {
  for (let i = 0; i < velas.length; i++) {
    if (velas[i] === true) {
      i++;
      return false;
    }
  }
}

const velas = [true, true, false, true, false, true];
const velas1 = [false, true, false, true, false, true, true];
const velas2 = [false, false, true, false, false];

console.log(contarVelasAcessas(velas));
console.log(contarVelasAcessas(velas1));
console.log(contarVelasAcessas(velas2));
>>>>>>> 5854148777fbadb7784df6b30a87540962774cf4
