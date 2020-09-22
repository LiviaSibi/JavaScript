//Aula de JavaScript

//Exercício 1 - Desenvolver uma solução JavaScript que defina que ao chover é necessário tirar as roupas do varal
function funcao(){
    var chover = confirm("Está chovendo?");

    if(chover == true){
        alert('Tire as roupas do varal')
    }
    else{
        alert('Deixe as roupas secarem')
    }
}

//Execício 2 - Desenvolver uma solução JavaScript que defina que pessoas com menos de 18 anos não podem comprar bebida alcoolica

function funcao(){
    var idade = prompt("Quantos anos vc tem?")

    if(idade >= 18){
        alert('Pode beber avontade')
    }
    else{
        alert('Vai estudar criança!')
    }
}

//Exercício 3 - Desenvolver uma solução JavaScript que compare a idade e altura mínima para uma pessoa ingressar em determinada montanha russa.
function funcao(){
    var idade = prompt("Quantos anos vc tem?")
    var altura = prompt("Qual a sua altura? (Escreva sem virgula ou ponto)")

    if((idade <= 10) && (altura < 150)){
        alert('Você não pode entrar')
    }
    else if((idade <= 10) || (altura < 150)){
        alert('Você não tem idade ou tamanho para entrar')
    }
    else if((idade > 10) && (altura <= 150)){
        alert('Pode passar!')
    }
}

//Exercício 4 - Desenvolver uma solução JavaScript que compare a quantidade de pontos na carteira de motorista de alguém e retorne se ela pode ou não continuar dirigindo
function funcao(){
    var pontos = prompt("Quantos pontos na carteira vc tem?")

    if(pontos >= 20){
        alert('Você não pode dirigir')
    }
    else{
        alert('Dirija a vontade')
    }
}

//Exercício 5 - Desenvolver uma solução JavaScript que valide se alguém esta usando blusa de frio apenas em dias frios
function funcao(){
    var frio = confirm("Está frio?");
    var blusa = confirm("Está com blusa de frio?");

    switch(frio){
        case true:
            if(blusa){
                alert('Vc está se protegendo do frio!')
            }
            else{
                alert('Bota uma blusa, vc vai ficar doente!')
            }
            break;
        case false:
            if(blusa){
                alert('Quem usa blusa de frio no calor?')
            }
            else{
                alert('De boa')
            }
            break;
    }
}

//Exercício 6 - Desenvolver uma solução JavaScript que tome uma ação baseada no nível de satisfação do cliente
function funcao(){
    var satisfacao = prompt("De 1 a 5, o quanto vc está satisfeito?")

    switch(satisfacao){
        case "1":
            alert('Satisfação: 1 Estrela - Péssimo')
            break;
        case "2":
            alert('Satisfação: 2 Estrela - Levemente ruim')
            break;
        case "3":
            alert('Satisfação: 3 Estrela - Meio termo')
            break;
        case "4":
            alert('Satisfação: 4 Estrela - Bom, mas não muito')
            break;
        case "5":
            alert('Satisfação: 5 Estrela - Foi ótimo!')
            break;
        default:
            alert('Número fora do esperado.')
            break;
    }
}