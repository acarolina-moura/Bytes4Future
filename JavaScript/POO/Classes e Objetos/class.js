/* Cria a classe Pessoa  que recebe no construtor nome, idade e sexo e guarda os valores em propriedades.
A classe deve possuir um método comparaIdade  que recebe uma outra Pessoa  como argumento e retorna uma string de relações de idade.*/  
  
  class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getSexo() {
        return this.sexo;
    }

    comparaIdade(pessoa1) {
        if (this.idade > pessoa1.getIdade()) {
            if (pessoa1.getSexo() === "m") return "O" + pessoa1.getNome() + "é mais novo do que eu.";
            if (pessoa1.getSexo() === "f") return "A" + pessoa1.getNome() + "é mais nova do que eu."
        } else if (this.idade < pessoa1.getIdade()) {
            if (pessoa1.getSexo() === "m") return "O" + pessoa1.getNome() + "é mais velho do que eu."
            if (pessoa1.getSexo() === "f") return "A" + pessoa1.getNome() + "é mais velha do que eu."
        } else {
            if (pessoa1.getSexo() === "m") return "O" + pessoa1.getNome() + "é da mesma idade do que eu.";
            if (pessoa1.getSexo() === "f") return "A" + pessoa1.getNome() + "é da mesma idade do que eu.";
        }
    }

}


const pessoa1 = new Pessoa("Jasmin", 19, "m");
const pessoa2 = new Pessoa("Elizabete", 37, "f");
const pessoa3 = new Pessoa("Nelson", 37, "m");


// Exemplo de OutPut : 
pessoa1.comparaIdade(pessoa2)
// A Elizabete é mais velha do que eu.
pessoa3.comparaIdade(pessoa1)
// O Jasmin é mais novo do que eu.
pessoa1.comparaIdade(pessoa2)
// O Nelson é da mesma idade do que eu.




console.log(pessoa2.comparaIdade(pessoa3));