/*****************************************************************************************************
method find()
*****************************************************************************************************/

const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita"
]

const foundPizza = pizzas.find( p => p.startsWith("m"))

console.log(foundPizza)

/* O PRIMEIRO VALOR RETORNADO FOI MUSSARELA PORQUE É O PRIMEIRO VALOR QUE APARECE*/


/********************* SEGUNDO EXEMPLO **************************************************************/

const fruits = [
    {name: "maça", quantity: 2 },
    {name: "banana", quantity: 0 },
    {name: "uva", quantity: 5 },
    {name: "morango", quantity: 10 },
]

const foundFruit = fruits.find(fruit => fruit.name === "morango")

console.log(foundFruit)