// Criar Objeto de Pessoa:
// Crie uma função chamada criarPessoa que recebe parâmetros como nome, idade
// e cidade, e retorna um objeto representando uma pessoa

    function criarPessoa(firstName, age, city){
        const person = { };
        person.firstName = firstName;
        person.age = age;
        person.city = city;

        return person;
    }
    
    console.log (criarPessoa("Maria", 27, "Lisbon"));
