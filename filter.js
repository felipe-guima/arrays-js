
const alunos = ["Marcos", "Mari", "Camis", "Ana"];
const notas = [6, 5, 8, 10]

// metodo que recebe conecta um aray a outro testando um boleano - recebe uma função callback 
//com dois parametros e retorna outra aray com uma condicional.
const reprovados = alunos.filter((_, indice) => { // precisamos novera o primeiro parametro p/ chamar o segundo
    return notas[indice] < 7;
} )

console.log(reprovados);