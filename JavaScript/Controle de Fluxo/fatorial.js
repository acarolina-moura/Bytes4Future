function fatorialN(n) {
    if (n <= 1) {
        return 1;
    }
    let resultado = 1;
    let i = n;
    while (n > 1) {
        resultado *= i;
        i--;
    }
    return resultado;
}

console.log(fatorialN(5))