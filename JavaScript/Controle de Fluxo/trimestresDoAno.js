/*Cria uma função que recebe como argumento um número t e retorna os meses desse trimestre.

Correspondências:

1 - Janeiro, Fevereiro, Março

2 - Abril, Maio, Junho

3 - Julho, Agosto, Setembro

4 - Outubro, Novembro, Dezembro

Quando recebe um número diferente deve retornar a mensagem: "Número inválido. Por favor insira um número entre 1 e 4."*/


function trimestresDoAno(t) {
    switch (t) {
        case 1:
            return "Janeiro, Fevereiro, Março";
        case 2:
            return "Abril, Maio, Junho";
        case 3:
            return "Julho, Agosto, Setembro";
        case 4:
            return "Outubro, Novembro, Dezembro";
        default:
            return "Número inválido. Por favor insira um número entre 1 e 4."
    }
}