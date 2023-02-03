function entrar(){
    var area = document.getElementById('area');
    var nome = prompt('Digite seu nome');
    area.innerHTML = 'Bem vindo' + ' ' + nome;

    if(nome == '' || nome == null){
        alert('Digite seu nome novamente');
        area.innerHTML = 'Bem vindo!';
    }else{
        area.innerHTML = 'Bem vindo!' + ' ' + nome;
    }
    
}
function voltar() {
window.location.href = window.location.href;
}