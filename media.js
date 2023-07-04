// JS Arrays - media 

// modo comum de trabalhar dados
const num1 = 10
const num2 = 6.5
const num3 = 7.5
const num4 = 8

const media = (num1 + num2 + num3 + num4) / 4;

console.log(media);


// Array - facilita o uso de multiplos dados, quando o projeto exige usar 100, 1000 ?

// posissões   0    1   2   3
const notas = [10, 6.5, 8, 7.5];
//                                                    length:propriedade que usa o tamanho do array
const mediaArray = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(mediaArray);

