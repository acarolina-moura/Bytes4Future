/*Cria a função `converteHacker` que recebe uma string e retorna uma string, semelhante mas que subsitui alguns dos seus caráteres de modo a que se pareça linguagem Hacker.

Evita a utilização de `if`.

__Letras a ser substituídas:__
1. a ou A -> 4
2. e ou E -> 3
3. i ou I -> 1
4. o ou O -> 0
5. s ou S -> 5

*/

function converteHacker(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
                result += "4";
                break;
            case "A":
                result += "4";
                break;
            case "e":
                result += "3";
                break;
            case "E":
                result += "3";
                break;
            case "i":
                result += "1";
                break;
            case "I":
                result += "1";
                break;
            case "o":
                result += "0";
                break;
            case "O":
                result += "0";
                break;
            case "s":
                result += "5";
                break;
            case "S":
                result += "5";
                break;
            default:
                result += string[i];
                break;
        }
    }
    return result;
}

converteHacker()