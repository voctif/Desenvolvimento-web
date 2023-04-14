function getRadio(){
    var elemento = document.getElementsByName('gender');

    for(var i=0; i < elemento.length; i++){
        if(elemento[i].checked){
            document.getElementById('radioResult').innerHTML = `genero: ${elemento[i].value}` ;
        }
    }
}

function getOption(){
    var plano = document.querySelector("#select1");
    let text = plano.value;

    document.querySelector(".result").textContent = text;
} 


function getCheck(){
    var prio = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(let i = 0; i < prio.length; i++){
        text = text + " " + prio[i].value;
    }

    document.getElementById("prioridade").innerHTML = text;
}