function countEven(array){
    const element = array[0];
    const isEven = element % 2 === 0;

    if(array.length === 0){
        return 0;
    }
    if (isEven){
        return 1 + countEven(array.slice(1));
    }

    return 0 + countEven(array.slice(1));

}

console.log(countEven([1, 2, 2, 3, 1, 5, 4]))