// MEtodo includes

const alunos = ["João","Juliana","Ana","Caio",];

const medias =[10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];

// medodo includes verifica se o dado está dentro do array
function exibeNomeENota (aluno) {
    if (listaAlunosMedias[0].includes(aluno)) {
       
        //const alunos = listaAlunosMedias[0];
        //const medias = listaAlunosMedias[1];
        const [alunos, medias] = listaAlunosMedias // atribui em variaveis a lista de alunos
       
        const indice = alunos.indexOf(aluno);// propriedade que mostra o indice

        const mediaDoaluno = medias[indice];// media de alunos acessa o segundo medias,
        // o segundo indice acessa o indice do aluno retornado

        //console.log(indice); 
        //console.log(mediaDoaluno);

        console.log(`${aluno} têm a média ${mediaDoaluno}.`)

    }else {
        console.log("Aluno não encontrato")
    }
}

exibeNomeENota("João");