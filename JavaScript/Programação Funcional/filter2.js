function filtraInteiros(array){
    return array.filter((n) => Number.isInteger(n))
}

const array = [2.5, 3.5, 1, 4]

console.log(filtraInteiros(array))