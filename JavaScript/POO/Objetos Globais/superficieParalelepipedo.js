/*Cria uma função  que recebe o lado da base e o comprimento como argumentos e calcula a área da superfície de um paralelepípedo quadrado.*/

function superficieDoParalelepipedoQuadrado(ladodabase, comprimento) {

    let areaFaceBase = ladodabase * ladodabase;
    let areaFacesLaterais = 4 * ladodabase * comprimento; 
    let areaTotal = 2 * areaFaceBase + areaFacesLaterais;
  
    return areaTotal;
  }
  