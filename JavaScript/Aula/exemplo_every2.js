const pessoas = [
    {nome: 'Joao', idade: 20 },
    {nome: 'Pedro', idade: 18 },
    {nome: 'Maria', idade: 22 },
    {nome: 'Ana', idade: 15}

]

const isAdult = (pessoa) => pessoa.idade >= 18;

console.log(pessoas.every(isAdult))