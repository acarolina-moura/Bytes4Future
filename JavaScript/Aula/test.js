// let test = 
// // false && false
// let test2 = 
// //true && false
// // true && true 

/* Ex 01

 function umOuOutro (a, b){
     if(a === true && b === true || a === false && b === false )
     return false
 else{
     return true
 }
 }
 console.log(umOuOutro(true,true))

 */


/*function umOuOutro(a,b)
{
    return(a && !b || !a && b)
}

console.log(umOuOutro(false, false))
*/

function umOuOutro(a, b, c) {

    return (a && !b && !c) || (!a && b && !c) || (!a && !b && c)
    
}

console.log(umOuOutro(true, true, true)) 