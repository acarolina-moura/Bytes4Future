/*5-Cria uma função que recebe um número como argumento e retorna um array com os números de 0 a n. Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."*/

function recebeNum(num){
    let arr = [];
    if(num <= 0){
        console.log("Por favor insira um número superior a 0.")
    } else {
    for (let i = 0; i <= num; i++)
    arr.push(i); 
}

return arr;
    } 

console.log(number(4));