let numA = 2;
let numB = 3;
let numC = 5;

if(numA > numB && numA > numC){
    console.log(`O ${numA} é o maior número`);

} else if(numB > numA && numB > numC){
    console.log(`O ${numB} é o maior número`);
} 
 else if(numC > numA && numC > numB){
    console.log(`O ${numC} é o maior número`);
} else{
    console.log("Favor digitar um numero válido")
}