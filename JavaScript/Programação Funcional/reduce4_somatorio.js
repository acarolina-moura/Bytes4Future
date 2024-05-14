/*Cria uma função que recebe um array como argumento e retorna o somatório de todos os elementos.
Utiliza o que aprendeste sobre o  para resolver este exercício.*/

function somatorio(array){
    return array.reduce ((acc, element) => acc + element,0)
}