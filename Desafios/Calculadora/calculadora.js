let calculadora = {
    historico: [],
    ultimoResultado: 0
}

function somar(a, b) {
    if (b === undefined) {
        BigInt (b) = BigInt (a)
        a = calculadora.ultimoResultado;
    }
    let resultado = a + b;
    calculadora.historico.push(`${a} + ${b} = ${resultado}`);
    calculadora.ultimoResultado = resultado;
    return calculadora;
}

function subtrair(a, b) {
    if (b === undefined) {
       BigInt (b) = BigInt (a)
        a = calculadora.ultimoResultado;
    }
    let resultado = a - b;
    calculadora.historico.push(`${a} - ${b} = ${resultado}`);
    calculadora.ultimoResultado = resultado;
    return calculadora;
}

function multiplicar(a, b) {
    if (b === undefined) {
       BigInt (b) = BigInt (a)
        a = calculadora.ultimoResultado;
    }
    let resultado = a * b;
    calculadora.historico.push(`${a} * ${b} = ${resultado}`);
    calculadora.ultimoResultado = resultado;
    return calculadora;

}

function dividir(a, b) {
    if (b === undefined) {
        BigInt (b) = BigInt (a)
        a = calculadora.ultimoResultado;
    }
    let resultado = a / b;
    calculadora.historico.push(`${a} / ${b} = ${resultado}`);
    calculadora.ultimoResultado = resultado;
    return calculadora;
}

function limparHistorico() {
    calculadora.historico = [],
    calculadora.ultimoResultado = 0;
    return calculadora;

}

function obterResultado() {
    return BigInt(calculadora.ultimoResultado);
}

function toJSON() {
    calculadora.ultimoResultado = calculadora.ultimoResultado.toString();
    let newJson = JSON.stringify(calculadora);
    return newJson;
  }

  function toString() {
    if (calculadora.historico.length === 0) {
        return "Calculadora Limpa";
    } else {
        let historicoString = "=== Histórico da Calculadora ===\n";
        for (let i = 0; i < calculadora.historico.length; i++) {
            historicoString += `${i + 1} - ${calculadora.historico[i]}`;
        }
        historicoString += `=== Fim do Histórico ===\n`;
        historicoString += `Foram realizadas ${calculadora.historico.length} operações\n`;
        historicoString += `Último Resultado: ${calculadora.ultimoResultado}`;
        return historicoString;
    }
}

console.log(somar(5, 10))
console.log(subtrair(10, 5))
console.log(multiplicar(5, 10))
console.log(dividir(10, 5))
console.log(limparHistorico(calculadora))
console.log(obterResultado(calculadora))
console.log(toJSON());
console.log(toString(calculadora))


let arrOi = [
    [1, 2, 3, 5],
    [1, 2, 3, 5],
    [1, 2, 3, 5],
    [1, 2, 3, 5],
]