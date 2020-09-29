
var alunos =    [{nome:'maria', idade: 17},
                 {nome:'josé', idade: 24},
                 {nome:'pedro', idade: 19}];

// ------------- forEach -------------------
alunos.forEach((aluno) => {
    console.log(aluno.nome)
})

//----------------- Map ---------------------
var dobroIdade = alunos.map((aluno) => {
    return aluno.idade * 2;
})

console.log(alunos);
console.log(dobroIdade)

//--------------- Filter ---------------------
var alunosDeMaior = alunos.filter((aluno) => {
    return aluno.idade >= 18
})

console.log(alunosDeMaior)

//---------------- Find ---------------------
var umAluno = alunos.find((aluno) => {
    return aluno.nome === 'maria'
})

console.log(umAluno);

//---------------- Every ---------------------
var todosDeMaior = alunos.every((aluno) => {
    return aluno.idade > 18
})

console.log(todosDeMaior)

//---------------- Some ---------------------
var alguemDeMaior = alunos.some((aluno) => {
    return aluno.idade > 18
})

console.log(alguemDeMaior)

//---------------- Reduce ---------------------
var soma = 0

soma = alunos.reduce((soma, aluno) => {
    return soma + aluno.idade
}, 0)

console.log(soma)