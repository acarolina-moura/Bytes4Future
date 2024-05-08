<<<<<<< HEAD
function validaSubArray(array, subArray) {
  let j = 0;
  for (let i = 0; i < array.length; i++) { // CONTINUA NO FOR PORQUE A CONDIÇÃO AINDA É MENOR QUE i 
    if (array[i] === subArray[j]) { // SÓ AUMENTA SE i e j TIVEREM O MESMO VALOR
      j++;
    }
  }
  if (j === subArray.length) {
    return true;
  } else {
    return false;
  }
}

let array = [1, 2, 3, 4, 5];
let sub2 = [1, 4];
let sub3 = [1, 3, 5];
let sub4 = [5, 2];
let sub5 = [2, 5];

console.log(validaSubArray(array, sub2)); // true
console.log(validaSubArray(array, sub3)); // true
console.log(validaSubArray(array, sub4)); // false
console.log(validaSubArray(array, sub5)); // true
=======
function validaSubArray(array, subArray) {
  let j = 0;
  for (let i = 0; i < array.length; i++) { // CONTINUA NO FOR PORQUE A CONDIÇÃO AINDA É MENOR QUE i 
    if (array[i] === subArray[j]) { // SÓ AUMENTA SE i e j TIVEREM O MESMO VALOR
      j++;
    }
  }
  if (j === subArray.length) {
    return true;
  } else {
    return false;
  }
}

let array = [1, 2, 3, 4, 5];
let sub2 = [1, 4];
let sub3 = [1, 3, 5];
let sub4 = [5, 2];
let sub5 = [2, 5];

console.log(validaSubArray(array, sub2)); // true
console.log(validaSubArray(array, sub3)); // true
console.log(validaSubArray(array, sub4)); // false
console.log(validaSubArray(array, sub5)); // true
>>>>>>> 5854148777fbadb7784df6b30a87540962774cf4
