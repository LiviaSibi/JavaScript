//Aula de JavaScript

//Exercício 1
function funcao(){
    var chover = confirm("Está chovendo?");

    if(chover == true){
        alert('Tire as roupas do varal')
    }
    else{
        alert('Deixe as roupas secarem')
    }
}

//Execício 2

function funcao(){
    var idade = prompt("Quantos anos vc tem?")

    if(idade >= 18){
        alert('Pode beber avontade')
    }
    else{
        alert('Vai estudar criança!')
    }
}

//Exercício 3
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

//Exercício 4
function funcao(){
    var pontos = prompt("Quantos pontos na carteira vc tem?")

    if(pontos >= 20){
        alert('Você não pode dirigir')
    }
    else{
        alert('Dirija a vontade')
    }
}

//Exercício 5
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

//Exercício 6
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