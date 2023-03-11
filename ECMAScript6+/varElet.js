//var nome = "Ranyeri";
//if(nome == "Ranyeri"){

  //  var idade = 34;
    //console.log("Ele tem"+" "+idade);
//}
//let nome = ["Ranyeri", "Cunha", 34];
//console.log(nome);
//function cadastroDePessoa(info){
 //   let novosDados = {
 //       ...info, cargo:"Programado", sexo:"Masculino", peso:82
 //   };
  //  return novosDados;
//}
//console.log(cadastroDePessoa({nome:"Ranyeri", sobrenome:"Cunha", //idade:34}))
function minhalista(...nomes){
    console.log(nomes);
}
minhalista ("Ranyeri", "Karen", "Ceiça");

// var idade = 34;
// console.log("Ele tem"+" "+idade);
//}
const pessoa = {
    nome: "Ranyeri", sobrenome: "Cunha", idade: 34, cargo:"TI"
    
};
let {nome} = pessoa;
console.log(nome);

