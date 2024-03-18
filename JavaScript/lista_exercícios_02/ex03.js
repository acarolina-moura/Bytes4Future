/*3- Cria uma função que recebe como argumentos dois valores e conta o número de pares que existem entre esses dois valores, incluindo os próprios se forem pares.

Caso sejam introduzidos dois valores iguais deve retornar a mensagem de erro: "Por favor introduza dois valores diferentes." 
Utiliza o que aprendeste sobre for para resolver este exercício. Exemplo de Output: contaParesEntreDoisValores(1, 2) 1*/ 

let contador = 0;

function retornaValores(val1, val2) {

if ( val1 === val2){
    return ("Por favor introduza dois valores diferentes.")}
}
    else {

    if (val1 < val2) {
        return (`Introduza um valor maior que o ${val2} segundo valor` )
    }
}     
    for (let i = val1 ; i > val1 && i < val2;  i++){
        
           
    } contaParesEntreDoisValores(2,10);




/* 
let mensagem = ("Por favor introduza dois valores diferentes");

function retornaValores(val1, val2) {
    let arr = [];
for (let i = 2; val1 % 2 === 0; i+2){
    if (retornaValores[i] % 2 === 0){
        console.log(`O número é par`);
    } else if (val2 % 2 === 1){
        console.log(`O número é ímpar`);
    } else {
        console.log(mensagem);
    }
}
} retornaValores(2,10);*/
