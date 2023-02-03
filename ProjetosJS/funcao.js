function entrar(){
    var area = document.getElementById('area');
    var nome = prompt('Digite seu nome');
    area.innerHTML = 'Bem vindo' + ' ' + nome;
}
function voltar() {
window.location.href = window.location.href;
}