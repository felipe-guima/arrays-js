// Metodo de atualização

// tirar um dado do em outra posição que não seja a ultima

const nomes = ['João', 'Ana', 'Caio', 'Lara','Marjore','Leo'];

//metodo que retira dados do array de acordo com o indice, e pode introduzir outros

// 3 parametros
// 1 o lugar na lista do dados que quero retirar
// 2 quantos dados eu quero retirar
// 3 dados de substituição

nomes.splice(2,2, "Rodrigo") // altera o array original

console.log(nomes);


// exemplo animais 
animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠') // não retira nada mas adiciona o peixinho azul e amarelo

animaisDoAquario.splice(3,2,'🐟') // retira o golfinho e turbarão e adiciona o peixe todo azul

console.log(animaisDoAquario)