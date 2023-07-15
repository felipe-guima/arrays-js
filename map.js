//map

//metodo de array que reescreve elmentos do array, usando uma função callback como parametro

const notas = [ 6, 7.5, 8, 9.5, 10];


const notaNova = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota +1; // operador ternario de condição
})

console.log(notaNova)