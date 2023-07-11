// forEach

// metodo de array que acessa todos os elementos de um array passando
// como parametro uma função anonima.

const notas = [10, 6.5, 8,7.5];

let somaNotas = 0;
let indiceArray = [];

notas.forEach(function (nota){
    somaNotas += nota
}); 

// Uma função que recebe um elemento é o parametro obrigatorio em forEach

// Essa função tem o nome de callback e vai ser executada para cada elemento
// do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice 
// e o array atual, respectivamente.

let media = somaNotas / notas.length

console.log(`A media das notas é ${media}`)
