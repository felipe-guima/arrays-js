// callbacks

// O metodo callback em funcóes podem ser usado quando quando
// passamos uma função dentro de ontouchstart, o metodo forEach é
// um bom exemplo para vermos essas funções. 

// 3 modos de usar o forEach
const nomes = ["Fee", "Mari", "Cami", "Luca"];

// função anonima comun
nomes.forEach(function (nome){
    console.log(nome)
})

// usando uma arrow function - modo mais usado !!
nomes.forEach((nome) => {
    console.log(nome)
} )

// função callback externa 
function imprimeNome (nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome)