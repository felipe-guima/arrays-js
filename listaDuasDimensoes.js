// acessar dados de duas listas

const alunos = ["João","Juliana","Ana","Caio",];

const medias =[10, 8, 7.5, 9];

const listasJuntas = [alunos, medias];

//                              o primeiro indice acessa o array o segundo o dado no array selecionado
console.log(`A aluna da posição 1 da lista de alunos é: ${listasJuntas[0][1]}, A nota dessa aluna é ${listasJuntas[1][0]}`);