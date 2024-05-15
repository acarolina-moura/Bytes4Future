/*3- Cria uma função que recebe como argumentos dois valores e conta o número de pares que existem entre esses dois valores, incluindo os próprios se forem pares.

Caso sejam introduzidos dois valores iguais deve retornar a mensagem de erro: "Por favor introduza dois valores diferentes." 
Utiliza o que aprendeste sobre for para resolver este exercício. Exemplo de Output: contaParesEntreDoisValores(1, 2) 1*/ 

    function contaParesEntreDoisValores(valor1, valor2) {
        // Verifica se os valores são iguais
        if (valor1 === valor2) {
            return "Por favor, introduza dois valores diferentes.";
        }
    
        // Troca os valores se o primeiro for maior que o segundo
        if (valor1 > valor2) {
            [valor1, valor2] = [valor2, valor1];
        }
    
        let count = 0;
        // Loop for para iterar entre os valores
        for (let i = valor1; i <= valor2; i++) {
            // Verifica se o número é par
            if (i % 2 === 0) {
                count++;
            }
        }
        return count;
    }
    
    // Exemplo de uso:
    console.log(contaParesEntreDoisValores(3, 10)); // Saída esperada: 4 (4, 6, 8, 10 são pares)
    console.log(contaParesEntreDoisValores(5, 5)); // Saída esperada: "Por favor, introduza dois valores diferentes."
    
    






