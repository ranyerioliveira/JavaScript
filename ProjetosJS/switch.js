document.write(" <br>0 - Seiya</br>");
document.write(" <br>1 - Hyoga</br>");
document.write(" <br>2 - Ikki</br>");
document.write(" <br>3 - Shiryu</br>");
document.write(" <br>4 - Shun</br>");
document.write("<br>");

function escolha(){

    var x = prompt("Escolha seu cavaleiro");
    //var x = document.getElementById("numero");
    //var res = x;

    switch (x){
        case "0":
            alert("Você escolheu o Seiya");
            break ;
        case "1":
            alert("Você escolheu o Hyoga");
            break ;
        case "2":
            alert("Você escolheu o Ikki");
            break ;
        case "3":
            alert("Você escolheu o Shiryu");
            break ;
        case "4":
            alert("Você escolheu o Shun");
            break ;
        default:
            alert("Não temos esse caveleiro")
    }
}


 

