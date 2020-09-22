//Exercicio 1 - Faça um Programa que peça um número e então mostre a mensagem: O número informado foi [número].
function funcao(){
    var num = prompt("Digite um número?")
    console.log('O nuúmero informado foi: ' + num)
}

//Exercicio 2 - Faça um Programa que converta metros para centímetros. (Dica: 1 metro = 100 centímetros) 
function funcao(){
    var metro = prompt("Digite quantos metros?")
    
    var cent = metro*100

    console.log(metro + ' metros = ' + cent + ' centímetros')
}

//Exercicio 3 - Faça um Programa que converta centímetros para polegadas. (Dica: 1 centímetro = 0,393700787 polegadas)
function funcao(){
    var cent = prompt("Digite quantos centímetros?")
    
    var pol = cent*0.393700787

    console.log(cent + ' centímetros = ' + pol + ' polegadas')
}

//Exercicio 4 - Faça um Programa que peça o raio de um círculo, calcule e mostre sua área. Fórmula: Area = pi * raio²
function funcao(){
    var r = prompt("Diga o raio?")
    
    var area = Math.PI * Math.pow(r,r)

    console.log('Área = ' + area)
}

//Exercicio 5 - Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius. Fórmula: Celsius = (5 * (Farenheit -32) / 9).
function funcao(){
    var f = prompt("Digite quantos graus Farenheit?")
    
    var c = ((5 * (f -32)) / 9)

    console.log('Celsius = ' + c);
}

//Exercicio 6 - Faça um Programa que peça as 4 notas bimestrais e mostre a média.
function funcao(){
    var nota1 = prompt("Digite a primeira nota?")
    var nota2 = prompt("Digite a segunda nota?")
    var nota3 = prompt("Digite a terceira nota?")
    var nota4 = prompt("Digite a quarta nota?")
    
    var n1 = parseInt(nota1)
    var n2 = parseInt(nota2)
    var n3 = parseInt(nota3)
    var n4 = parseInt(nota4)
    var media = ((n1 + n2 + n3 + n4) / 4)

    console.log('Média = ' + media);
}

//Exercicio 7 - Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit. Fórmula : Farenheit = Celsius × 1,8 + 32 
function funcao(){
    var c = prompt("Digite a temperatura em graus Celsius?")

    var f = (c * 1.8) + 32 

    console.log('Farenheit = ' + f);
}

//Exercicio 8 - Faça um Programa que peça o valor da gasolina e do álcool de um posto e diga qual é o combustível mais vantajoso abastecer, sabendo que somente é vantagem abastecer álcool se o preço do mesmo é menor ou igual a 70% do valor da gasolina.
function funcao(){
    var gasolina = prompt("Digite o valor da gasolina")
    var alcool = prompt("Digite o valor do álcool")

    var porc = 0.7*gasolina

    if(alcool <= porc){
        console.log('O álcool é mais vantajoso');
    }
    else{
        console.log('A gasolina é mais vantajosa');
    }
}