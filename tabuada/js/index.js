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

