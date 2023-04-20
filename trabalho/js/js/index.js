function criarhistoria(){
    //pegando option
    var plano = document.querySelector("#personagem");
    let text = plano.value;
    document.querySelector(".result").textContent = text;

    //checkbox
    var action = document.querySelectorAll('input[type="checkbox"]:checked');
    let text2 = "";
    for(let i = 0; i < action.length; i++){
        text2 = text2 + " " + action[i].value;
    }
    document.getElementById("atributo").innerHTML = text2;

    //radio
    var elemento = document.getElementsByName('acao');

    for(var i=0; i < elemento.length; i++){
        if(elemento[i].checked){
            document.getElementById('acao').innerHTML = `${elemento[i].value}` ;
        }
    }

    if(text == "touro" && action.length > 1){
        document.getElementById("finalhistoria").style.cssText = 'color:blue';
    }else if(text == "macaco" && action.length == 1){
        document.getElementById("finalhistoria").style.cssText = 'color:red';
    }else{
        document.getElementById("finalhistoria").style.cssText = 'color:white';
    }
}