// function mediana(array){
//    let arrayOrdenado = array.sort()
//     console.log(arrayOrdenado)
//     let tamanho = arrayOrdenado.length / 2
//     console.log(tamanho)
// }


function mediana(array) {    
    const arrayOrdenado = array.sort((a, b) => a - b);
    // Encontrar o índice do elemento mediano
    const meio = Math.floor(arrayOrdenado.length / 2);
    // Se o array possui um número ímpar de elementos, a mediana é o elemento central
    if (arrayOrdenado.length % 2 === 1) {
      return arrayOrdenado[meio];
    }
    // Se o array possui um número par de elementos, a mediana é a média dos dois elementos centrais
    const mediana1 = arrayOrdenado[meio - 1];
    const mediana2 = arrayOrdenado[meio];
    return (mediana1 + mediana2) / 2;
  }
  
  let array = [5, 8, 7, 4, 9];
  const medianaValor = mediana(array);
  console.log(medianaValor);
  

