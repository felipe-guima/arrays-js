// spread operator

// metodo usaado para alterar valores de arrays, adicionar, subtrair

const notas = [7, 7, 8, 9];

//  esse operador de espalhamento garante a copia do array sem modificar o original 
//                  tambêm posso adicionar dados diretamente no novo array
const notasNovas = [...notas, 9];

notasNovas.push(10);

console.log(`As notas originais são ${notas}`);
console.log(`As notas novas são ${notasNovas}`);


