function filtraInteiros(array){
    return array.filter(n => n % 2 === 0) 
    }

let array = [18,20,5,4,2,1];
console.log(filtraInteiros(array))