/*Cria uma função que recebe como argumentos um dia e um mês e retorna a estação do ano.

Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."*/

function calculaEstacaoDoAno(dia, mes) {
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31";
    } else if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12";
    } else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30";
    } else if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28";
    } else {
        if ((mes === 3 && dia >= 21) || mes === 4 || mes === 5 || (mes === 6 && dia <= 20)) {
            return "Primavera";
        } else if ((mes === 6 && dia >= 21) || mes === 7 || mes === 8 || (mes === 9 && dia <= 20)) {
            return "Verão";
        } else if ((mes === 9 && dia >= 21) || mes === 10 || mes === 11 || (mes === 12 && dia <= 20)) {
            return "Outono";
        } else {
            return "Inverno";
        }
    }
}
console.log(calculaEstacaoDoAno(28,4))