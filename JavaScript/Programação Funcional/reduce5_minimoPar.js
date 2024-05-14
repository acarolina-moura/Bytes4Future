function minimoPar(array){
    return array.reduce((minimoAnterior, valorAtual) => {
        if (valorAtual % 2 === 0 && (minimoAnterior === undefined || valorAtual < minimoAnterior)) {
          return valorAtual;
        } else {
          return minimoAnterior;
        }
      }, undefined); // Define o valor inicial como undefined
    }
      