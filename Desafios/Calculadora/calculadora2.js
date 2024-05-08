let calculadora = {
    historico: [],
    ultimoResultado: 0n // Inicializado como BigInt
};

function somar(a, b) {
    if (b === undefined) {
        b = a;
        a = BigInt(calculadora.ultimoResultado);
    }
    let resultado = a + BigInt(b);
    calculadora.historico.push(`${a} + ${b} = ${resultado}`);
    calculadora.ultimoResultado = resultado;
    return calculadora;
}

function subtrair(a, b) {
    if (b === undefined) {
        b = a;
        a = BigInt(calculadora.ultimoResultado);
    }
    let resultado = a - BigInt(b);
    calculadora.historico.push(`${a} - ${b} = ${resultado}`);
    calculadora.ultimoResultado = resultado;
    return calculadora;
}

function multiplicar(a, b) {
    if (b === undefined) {
        b = a;
        a = BigInt(calculadora.ultimoResultado);
    }
    let resultado = a * BigInt(b);
    calculadora.historico.push(`${a} * ${b} = ${resultado}`);
    calculadora.ultimoResultado = resultado;
    return calculadora;
}

function dividir(a, b) {
    if (b === undefined) {
        b = a;
        a = BigInt(calculadora.ultimoResultado);
    }
    let resultado = a / BigInt(b);
    calculadora.historico.push(`${a} / ${b} = ${resultado}`);
    calculadora.ultimoResultado = resultado;
    return calculadora;
}

function limparHistorico() {
    calculadora.historico = [];
    calculadora.ultimoResultado = 0n; // Resetando para BigInt
    return calculadora;
}

function obterResultado() {
    return calculadora.ultimoResultado;
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
            historicoString += `${i + 1} - ${calculadora.historico[i]}\n`;
        }
        historicoString += `=== Fim do Histórico ===\n`;
        historicoString += `Foram realizadas ${calculadora.historico.length} operações\n`;
        historicoString += `Último Resultado: ${calculadora.ultimoResultado}`;
        return historicoString;
    }
}

console.log(somar(5n, 10n)); // Realiza uma soma com BigInt
console.log(subtrair(10n, 5n)); // Realiza uma subtração com BigInt
console.log(multiplicar(5n, 10n)); // Realiza uma multiplicação com BigInt
console.log(dividir(10n, 5n)); // Realiza uma divisão com BigInt
console.log(limparHistorico());
console.log(obterResultado()); // Obtém o último resultado como BigInt
console.log(toJSON());
console.log(toString());
