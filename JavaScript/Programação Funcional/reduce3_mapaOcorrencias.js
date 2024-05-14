function mapaDeOcorrencias(array){
    const mapa = array.reduce((acc, curr) => {
     if (acc.has(curr)) {
       acc.set(curr, acc.get(curr) + 1); 
     } else {
       acc.set(curr, 1);
     }
     return acc;
   }, new Map());
   
   return mapa; 
 }