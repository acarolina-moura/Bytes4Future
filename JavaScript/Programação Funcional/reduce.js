// const produtos = [
//     {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza' },
//     {id: 1, nome: 'amaciante', valor: 6.50, categoria: 'limpeza' },
//     {id: 1, nome: 'pão', valor: 2.00, categoria: 'alimento' },
//     {id: 1, nome: 'queijo', valor: 7.00, categoria: 'alimento' },
//     {id: 1, nome: 'leite', valor: 2.20, categoria: 'alimento' },
// ];

// const numeros = [1,2,3,4];

// const total = numeros.reduce((acc, ))

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

/* SINTAXE */

// ACCUMULATOR

// CURRENT VALUE



  function valorMaximoImpar(array) {
    // Utilize um valor inicial negativo para garantir que o valor máximo ímpar seja encontrado
    const initialValue = -Infinity;
  
    // Filtre o array para obter apenas os números ímpares
    const filteredArray = array.filter(numero => numero % 2 !== 0);
  
    // Se o array filtrado estiver vazio, retorne undefined
    if (filteredArray.length === 0) {
      return undefined;
    }
  
    // Utilize o reduce para encontrar o valor máximo entre os números ímpares
    const maxValue = filteredArray.reduce((acc, current) => acc > current ? acc : current, initialValue);
  
    return maxValue;
  }
  