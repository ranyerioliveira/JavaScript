// https://api.github.com/repos/angular/angular 
var div = document.querySelector('#repos');
var listElement = document.querySelector('#repos ul');

var repositorios = [];

function buscaRepos(){
    const input = document.querySelector('#input');

    if(input.value === ''){
        alert('Insira um nome abaixo!');
        return;
    }

    const respose = fetch(`https://api.github.com/repos/${input.value}`)
    .then(res => res.json())
    .then(json=>{console.log(json);})
}