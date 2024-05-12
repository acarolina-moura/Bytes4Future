<<<<<<< HEAD
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
=======
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
>>>>>>> 5854148777fbadb7784df6b30a87540962774cf4
