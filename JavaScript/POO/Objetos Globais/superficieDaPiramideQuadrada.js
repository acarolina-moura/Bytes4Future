/*Cria uma função que recebe o lado da base e a altura como argumentos e calcula a área da superfície de uma pirâmide quadrada.*/

function superficieDaPiramideQuadrada(ladodabase, altura){
    const meioLadoAoQuadrado = ladodabase * ladodabase / 4;
  const hipotenusaAoQuadrado = meioLadoAoQuadrado + altura * altura;


  const areaLateral = 2 * ladodabase * Math.sqrt(hipotenusaAoQuadrado);

  const areaTotal = ladodabase * ladodabase + areaLateral;

  return areaTotal;
}