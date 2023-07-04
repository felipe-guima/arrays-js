// dividindo um array

const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre * iten 10",// metade do array
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];
                         //uso o metodo para dividir ao meio
const sala1 = alunos.slice(0, alunos.length /2)// caso seja metade de 20 o numero é 10 uma particularidade o indice 10 seria o item 11 do array mas 
//                                                 no metodo slice ele seria o 10 mesmo.

const sala2 = alunos.slice(alunos.length /2)// quando n~ao declaro o segundo indice ele pega o numero at'e o ultimo

console.log(alunos)

console.log(sala1);
console.log(sala2);