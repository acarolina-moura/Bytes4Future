/*Cria uma função que recebe um array como argumento e verifica se todos os elementos são maiores que 5. Utiliza o que aprendeste sobre o every  para resolver este exercício*/

function todosMaioresDoQueCinco(array){
    const maiorQueCinco = array.every ((currentValue) => currentValue > 5);
    return maiorQueCinco
}