function formataNumero(valor) {
    if (typeof valor !== "number") {
        return "Número não válido"
    }
    let string = valor.toString();
    let stringCriada = "" ;
    for (let i = 0; i < valor.length; i++) {
        if (string[i] % 2 === 0 && string[i + 1] % 2 === 0){
            stringCriada += string[i] + "-"
         } else {
            stringCriada += string[i]
         }
    } return stringCriada
}

console.log(formataNumero())