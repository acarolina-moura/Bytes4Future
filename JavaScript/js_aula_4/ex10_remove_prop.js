/*Escreva uma função chamada removerPropriedade que recebe um objeto e o nome de uma propriedade, retornando um novo objeto sem a propriedade especificada.*/


const person = { 
    age: 27,
    name: "Maria",
};
 
function removerPropriedade(obj, prop){
    delete obj[prop]; // aceder 
    return obj;
}

console.log (removerPropriedade(person, "age")); // colocar entre aspas para ele entender que é a propriedade
