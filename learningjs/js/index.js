function tabuada(){

    let num = document.getElementById('tabuada').value;
    let divisoria = document.getElementById('result');
    divisoria.innerHTML = `<p>a tabuada é ${num} </p>`;
    for(var i = 1; i <=10; i++){
        let calc = (num * i);
        const node = document.createElement("p");
        const text = document.createTextNode(`${num} x ${i} : ${calc} `);
        node.appendChild(text);
        divisoria.appendChild(node);
  
    }
}

let cliques =0;

function conta(){
    cliques++;
    document.getElementById('cliqu').innerHTML = cliques;

}

function sortear(){
    min = document.getElementById("mandar").value;
    max = document.getElementById("mandar2").value;

    var num = Math.floor((Math.random() * (max-min + 1)) +min);
    document.getElementById('sor').innerHTML = num;

}
            
