// metodo reduce

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//parametros: acumula valores dos elementos || acessa os elementos
const somaSalaJS = salaJS.reduce((acc,nota) => {
    return acc + nota
    
},0);

const mediaSalaJS = somaSalaJS / salaJS.length

console.log(`a média da sala é ${mediaSalaJS} (método reduce simples)`)




// modo de usar o reduce em uma função para ser dinamico o retorno

function calculaMedia(notasDaSala) {
    //                  
    const somaDasNotas = notasDaSala.reduce((acumulador,nota) => {
        return acumulador + nota;
    },0) 

    const media = somaDasNotas / notasDaSala.length

    return media;
}

console.log(`A media da nota da sala de JS é ${calculaMedia(salaJS)} (método reduce c/ função)`)
console.log(`A media da nota da sala de Java é ${calculaMedia(salaJava)} (método reduce c/ função)`)
console.log(`A media da nota da sala de Pyton é ${calculaMedia(salaPython)} (método reduce c/ função)`)


// somando numeros

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170


// função fora do método com reduce

function operacaoNumerica(acc, atual) {
    return atual + acc
   }
   
   const soma1 = numeros.reduce(operacaoNumerica, 0)