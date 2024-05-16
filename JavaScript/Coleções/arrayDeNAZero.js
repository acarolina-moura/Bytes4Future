/*Cria uma função que recebe um número como argumento e retorna um array com os números de n a 0.

Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."

Utiliza o que aprendeste sobre  para resolver este exercício.*/

function arrayDeNAZero(n) {
    let arrayDump = [];
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            arrayDump[n - i] = i;
        }
    } else {
        return "Por favor insira um número superior a 0."
    }
    return arrayDump;
}