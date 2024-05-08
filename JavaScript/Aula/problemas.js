
// function imprimirAsterisco() {
//     let guardarAst = "";
//     for (let i = 5; i >= 1; i--) {
//         guardarAst = guardarAst + "*"
//         console.log(guardarAst)

//     }
// }

// imprimirAsterisco()

// function triangulo() {
//     let str = ""
//     for (let i = 1; i <= 5; i++) {
//             for (let j = 5; j >= i; j--) {
//             str = str + "*"
//         }
//         str = str + "\n"
//     }
//     console.log(str)
// }

// triangulo()


// function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
//     let a = comprimentoMaior - comprimentoMenor / 2
//     let x = Math.sqrt (a**2 + altura**2)
//     return x * 2 + comprimentoMaior + comprimentoMenor
//  }

//  console.log(perimetroDoTrapezio(10, 5, 3))


function converteHacker(string) {
    switch (string)
   
   case 'A' :
  console.log('a')
   case 'E' :
   return 'e';
      
   }

   console.log(converteHacker("A"))