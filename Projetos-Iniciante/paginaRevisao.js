/*document.write("<h1 style= color:red>Escrevendo com JS</h1>");
document.write("<h2>Utilizando variaveis</h2>");
var dado1 = 2
var dado2 = 3
/*var num1 = 20
var num2 = 10
console.log(num1 + num2)
document.write("<p>-Calculando as variaveis e escrevendo no HTML com document.write<br> -var dado1=2, var dado2=3, 2+3=</p>");
document.write("Resultado:" + " " + (dado1 + dado2))
document.write("<h2>Utilizando o console.log</h2>")
document.write("<p>O console.log serve para imprimir no console e ajudando a testar se o codigo esta correndo</p>");
document.write("<p>console.log=(var1+var2)</p>");
document.write("<h2>Refreash e Redirect</h2>")
document.write("<p>Para adicionar um comando indicando para outra pagina para o botão se colcado o window.location.href = 'url'</p>")*/
/*function ola(){
    var texto = document.getElementById('vindo');
    var nome = prompt('Qual é seu nome?');
    texto.innerHTML = 'Meu nome é'+ ' ' + nome + '.';

    if(nome == '' || nome == null){
        alert('Digite seu nome');
        texto.innerHTML = 'Ola, qual é seu nome?';
    }else{
        texto.innerHTML = 'Meu nome é'+ ' ' + nome + '.';
    }
}

function sobre(nome2){
    var texto = document.getElementById('sobre');
    var nome2 = prompt('Qual é seu nome?');
    texto.innerHTML = nome2 + ' ' + nome;
}*/
var n1 = prompt('Digite o numero 1');
var n2 = prompt('Digite o numero 2');
var media = (parseInt(n1)+parseInt(n2))/2;
var score = document.getElementById('nota')

if(media => 7){
    score.innerHTML= 'Você passou';
}else{
    score.innerHTML = 'Você reprovou';
}
