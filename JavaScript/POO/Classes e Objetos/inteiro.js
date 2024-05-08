/*Cria a classe  que tem um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for.

Deve ser possível aceder à propriedade  sem a poder alterar.*/

class Inteiro {
    #valor
    constructor (valor){
        if (typeof valor === 'number' && !isNaN (valor)){
            this.#valor = Math.floor(valor)
        } else {
            this.#valor = 0;
        }
    } get valor () {
        return this.#valor
    }
}