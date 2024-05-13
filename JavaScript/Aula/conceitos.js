// function soma (a, b){
// return a + b
// }

// função pura
const soma = (a, b) => res = a + b 

// não tem efeito secundário
// Função pura não modifica o estado do objeto.    

// COMPOSIÇÃO DE FUNÇÕES   

// * ESTADO: É qualquer valor que pode ser armazenado em uma variável.
/* * ESTADO PARTILHADO: é um estado que pode ser compartilhado entre diferentes variáveis. 
O problema é que pode ser acedido e alterado, gerando o conflito de estado entre as variáveis.*/


/* IMUTABILIDADE : um objeto imutável não pode ser alterado.
Exemplo:*/

// const a = 13
// a = 5

// const b = {nome: "Ana"}
// b.nome = "Raquel"

// Reutilização de efeitos secundários:


function a3(){
    return 3
}
function a2(){
    return a3
}

const resultado = a2()
console.log(resultado)
resultado ()

/* Funcao de alta ordem: uma função que recebe uma função como parâmetro, ou que retorna uma função.*/

