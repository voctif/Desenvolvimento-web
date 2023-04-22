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
function sortear(){
    min = document.getElementById("mandar").value;
    min2 = parseInt(min);
    max = document.getElementById("mandar2").value;
    max2 = parseInt(max);

    var num = Math.floor((Math.random() * (max2-min2 + 1)) +min2);
    document.getElementById('sor').innerHTML = num;

}
function media(){
    const nome = document.getElementById("nome").value;
    const num1 = Number(document.getElementById("tabuada1").value);
    const num2 = Number(document.getElementById("tabuada2").value);
    const num3 = Number(document.getElementById("tabuada3").value);
    const num4 = Number(document.getElementById("tabuada4").value);

    let media = (num1 + num2 + num3 + num4) / 4;

    if(media >= 6){
        document.getElementById("result").innerHTML = `${nome} está aprovado!` ;
    }else if(media >= 2.1 && media <= 5.9){
        document.getElementById("result").innerHTML = `${nome} está de recuperação!`;
    }else{
        document.getElementById("result").innerHTML = `${nome} está reprovado!`;
    }

}

//curriculo
function setCardHoverEffect() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card) => {
  
      card.addEventListener('mouseover', () => {
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.style.filter = 'blur(2.5px)';
          }
        });
      });
  
      card.addEventListener('mouseout', () => {
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.style.filter = 'none';
          }
        });
      });
  
    });
}
document.addEventListener("DOMContentLoaded", function(event) { 
    // quando a página carrega, adiciona a classe animar
    document.getElementById("texto-animado").classList.add("animar");
  });
