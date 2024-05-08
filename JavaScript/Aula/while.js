// /*Cria uma função que recebe como argumento um número e retorna a soma de todos os números do zero até ao número inclusive.*/

// function somatorioAteN(n) {

//     let numero = 0;
//     let soma = 0;

//     while (numero >= n) {
//         numero++
//     }
// }

// function garanteComprimentoDaString(string, n){
//     let a = " "
//     if (string.length > n){
//         return string.slice (0, n);
//      } else {
//                 let sobra = n - string.length
//                 for (let i = 0; i < sobra; i++){
//                     a = string+= "#"
//                 }
//             } return a
//         }
// console.log(garanteComprimentoDaString("Carolina", 9))


// class Gato {
//     constructor(nome, peso){
//         this.nome = nome
//         this.peso = peso
//     }
// }

// let gato1 = new Gato ("Roberto", 5)
// let gato2 = new Gato ("Manuel", 1000)

// let junto = {...gato2, ...gato1}

// console.log(junto)

// // console.log(gato1)
// // console.log(gato1.nome)
// // console.log(gato1.peso)

// function aplica (n){

// }

// let Frutas = {
//     banana : 5,
//     laranja: 8,
//     morango: 3,

// }

// function comida(fruta,preço ){
//     return Frutas.[fruta] / preço
// }

// console.log(comida("banana", 10))


// function areaDoHexagono(lado) {
//     let area = (3 * lado **2) * Math.PI 3 / 2
//     return Math.floor (area)
//  }

//  console.log(area(5))

// function diferencaDiagonal (array){

// }

// function mapas(mes) {
//     let map = new Map

// }


function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    let lado = Math.sqrt ((diagonalMaior * diagonalMaior + diagonalMenor * diagonalMenor) / 4 )
    let perimetro = lado * 4
    return  perimetro
}


