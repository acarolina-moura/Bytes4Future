function somaAteNumero(numero) {
    let soma = 0;
    for (let i = 0; i <= numero; i++) {
      soma += i;
    }
    return soma;
  }

  let resultado = somaAteNumero(5);
  
 // console.log(`A soma dos números de 0 a 5 é: ${resultado}`); // Imprime: A soma dos números de 0 a 5 é: 15