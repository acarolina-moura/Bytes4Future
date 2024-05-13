<<<<<<< HEAD
/*Encontrar o valor máximo e mínimo num array.*/


let arr = [10, 6, 54, 20, 18, 75];

let min = arr[0]; // let min = 10;
let max = arr[0]; // let min = 10;

for (let i = 1; i < arr.length; i++){

    if(arr[i] < min){
    min = arr[i];
} else if (arr[i] > max){
    max = arr[i];
    }
}

console.log(max);
=======
/*Encontrar o valor máximo e mínimo num array.*/


let arr = [10, 6, 54, 20, 18, 75];

let min = arr[0]; // let min = 10;
let max = arr[0]; // let min = 10;

for (let i = 1; i < arr.length; i++){

    if(arr[i] < min){
    min = arr[i];
} else if (arr[i] > max){
    max = arr[i];
    }
}

console.log(max);
>>>>>>> 5854148777fbadb7784df6b30a87540962774cf4
console.log(min);