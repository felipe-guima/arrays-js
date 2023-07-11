// for off

const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

// o for off passa por todos os elementos do array uma vez
for (let elemento of notas) {
    somaNotas += elemento
}

const media = somaNotas / notas.length;

console.log(`A soma das notas é ${somaNotas}.`)
console.log(`À media das notas ${media}.`)

