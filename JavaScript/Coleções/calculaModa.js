function calculaModa(array){
    const contador = {};
    array.map(numero => {
        if (contador[numero]) {
            contador[numero]++;
        } else {
            contador[numero] = 1;
        }
    });
    let moda;
    let maxRepeticoes = 0;
    for (const numero in contador) {
        if (contador[numero] > maxRepeticoes) {
            moda = numero;
            maxRepeticoes = contador[numero];
        }
    }
    return parseInt(moda);
}