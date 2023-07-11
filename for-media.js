
const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

const media = somaNotas / notas.length;
console.log(`À media das notas ${media}.`)


// for usado como matriz de 2 linhas
const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media1 = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    console.log(media1 += notasGerais[i][j]/notasGerais[i].length);
    //o for acessa o indice do array e a nota dentro e divide pelo
    //tamanho do array - no primeiro caso acessa o array notas1 e o
    // numero 10 e divide por 4 tamnho do array, depois o resultado
    //é adicionado ao novo calculo.
  }
}
//console.log(notasGerais[0].length)

media1 = media1/notasGerais.length

console.log(`A media de todas as notas 3 arrays ${media1} !!`)


// um for usado de modo decresente
const numerosDecrecente = [100, 200, 300, 400, 500, 600];

for (let i = numerosDecrecente.length - 1; i >= 0; i--) {
  console.log(numerosDecrecente[i]);
}

// incremento de 2 em 2
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}

// mudança na condição for
const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);