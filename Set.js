// Set

// metodo que não permite a repetição de dados no array

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet = new Set(nomes);

// crio uma nova variavel com os nomes atualizados e uso o operador spred(...) com o new Set
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);


// Como utilizar o filter e o reduce:
// Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. 
//Utilizamos o filter para criar um array filtrado a partir de um existente e o reduce para acumular 
//valores de um array em um só.
// Como clonar arrays com o spread operator ...:
// Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para 
//resolver esse problema, utilizamos o spread operator para espalhar todos os valores de um array 
//em um novo, realizando a clonagem com sucesso.
// Como utilizar a estrutura Set:
// Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas.
// Em seguida, utilizamos o spread operator para converter o Set de volta em um lista.

