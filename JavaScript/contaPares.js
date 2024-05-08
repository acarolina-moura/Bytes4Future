let contador = 0
let i = 0

function contaPares(array){
    if (i === array.length){
        return contador
    }
    if(array[i] % 2 === 0 ){
        contador ++
    }
    i++
    return contaPares(array)
}

let bytes = [3,5,8,15,20];

console.log(contaPares(bytes))