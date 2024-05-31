// Notas com o padrão de Portugal, máximo = 20

let alunos = [
    {
        nome: 'Emanuel',
        nota1: 10,
        nota2: 7,
    },
    {
        nome: 'João',
        nota1: 2,
        nota2: 7,
    },
    {
        nome: 'Maria',
        nota1: 10,
        nota2: 10,
    },
]

function media(nota1, nota2) {
    let mediaAluno = (Number(nota1) + Number(nota2)) / 2
    return mediaAluno
}

for(i in alunos) {

    mediaAluno = media(alunos[i].nota1, alunos[i].nota2)
    if (mediaAluno >= 7) {
        alert(`Parabéns, ${alunos[i].nome}!\nVocê foi aprovado com uma média de: ${mediaAluno}`)
    } else {
        alert(`${alunos[i].nome}, infelizmente não foi desta vez :(\nVocê foi reprovado com uma média de: ${mediaAluno}`)
    }
}