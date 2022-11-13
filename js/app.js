console.log("Hello World!");
//Array em string: .join()

// objetos
const pessoa = {
    nome: 'John',
    idade: 30,
    peso: 88.6,
    isAdmin: true
}
console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`);

// arrays
const animals = [
    'Lion',
    'Monkey',
    'Cat',
    { mamíferos: 'Cachorro',
      répteis: 'Cobra',
      aves: 'Papagaio' 
    }
]
// funções

//função anônima/expressio
const soma = function(a, b) {
    return a + b;
}


//arrow function
const subtracao = (a, b) => {
    return a - b;
}

//arrow function reduzida
const multiplicacao = (a, b) => a * b;

//callback function
function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName( () => {
    return 'Callback';
})
