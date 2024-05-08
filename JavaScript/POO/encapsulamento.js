class SoInteiro {
    #inteiro
    get inteiro() { // 
        return this.#inteiro;
    }
    set inteiro(n) {
        if (Number.isInteger(n)) {
            this.#inteiro = n;
        }
    }
}

const numeroInteiro = new SoInteiro();
numeroInteiro.inteiro = ""; // igual chama o set > altera a propriedade > permissao para fazer alteração ao atribuir algo
console.log(numeroInteiro.inteiro); // obj.propriedade  - get - permissão para a busca da propriedade e acede a ela
console.log(numeroInteiro)