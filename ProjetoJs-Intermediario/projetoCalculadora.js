/*
Abaixo de 17 - Muito baixo
Entre 17 e 18,49 - Baixo do peso
Entre 18,5 e 24,99 - Peso normal
Entre 25.6 e 29,99 - Acima do peso
*/
// peso/(altura*altura) altura ao quadrado
var peso;
var altura;
var imc;
var resultado;

function calcular(){

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura*altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi:' + imc.toFixed(2) + '<h3><br>Cuidado, você ta muito abaixo do peso</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if(imc > 17 && imc < 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi:' + imc.toFixed(2) + '<h3><br>Cuidado, você ta abaixo do peso</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if(imc > 18.5 && imc < 24.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi:' + imc.toFixed(2) + '<h3><br>Otimo, você ta no peso certo</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if(imc > 25 && imc < 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi:' + imc.toFixed(2) + '<h3><br>Cuidado, você ta acima do peso</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else{
        return false;
    }
}