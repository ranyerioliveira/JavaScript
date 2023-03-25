// https://sujeitoprogramador.com/rn-api/?api=posts
var listElement = document.querySelector('#app');
var posts = [];

function nutriApp(){

    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then(r =>r.json())
    .then(json =>{
        posts = json;

        console.log(posts);

        for(post of posts){

            var titleElement = document.createElement('li');
            var title = document.createTextNode(post.titulo);

            var imgElement = document.createElement('img')
            imgElement.src = post.capa;
            imgElement.style = "width: 100px; height:90px";


            titleElement.appendChild(title);
            listElement.appendChild(imgElement);
            listElement.appendChild(titleElement);
        }


    })

};

nutriApp();