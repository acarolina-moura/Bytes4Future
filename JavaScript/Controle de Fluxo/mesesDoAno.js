/*Cria uma função que recebe como argumento um número m e retorna o mês correspondente.

Correspondências:

1 - Janeiro
2 - Fevereiro
3 - Março
4 - Abril
5 - Maio
6 - Junho
7 - Julho
8 - Agosto
9 - Setembro
10 - Outubro
11 - Novembro
12 - Dezembro

Quando recebe um número diferente deve retornar a mensagem: "Número inválido. Por favor insira um número entre 1 e 12." */

function mesesDoAno(m) {
  switch (m) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Número inválido. Por favor insira um número entre 1 e 12.";
  }
}
