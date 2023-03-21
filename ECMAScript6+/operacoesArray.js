//const lista = [1,2,3,4,5,6];
//const novaLista = lista.map(function(item){
//    return item *5;
//});
//console.log(novaLista);

//const soma = lista.reduce(function(total, proximo){
    //return total + proximo;
//})
//console.log(soma);

//const find = lista.find(function(item){
    //return item ===4;
//}) 
//console.log(find);
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => {
        return total + proximo;
    })
   console.log(total);
}
adicionar(1,2,3,4,5,6);
