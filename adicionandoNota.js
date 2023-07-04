// adicionando Notas

const notas = [10, 6.5, 8,];

// metódo de array, uma função de empurrar para dentro do array
notas.push(7.5)

//                                           length:propriedade que usa o tamanho do array
const mediaArray = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(mediaArray); // media com 4 variaveis

console.log(notas) // mostra o array com o push dentro