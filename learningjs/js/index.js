function sortear(){
    min = document.getElementById("mandar").value;
    min2 = parseInt(min);
    max = document.getElementById("mandar2").value;
    max2 = parseInt(max);


    var num = Math.floor((Math.random() * (max2-min2 + 1)) +min2);
    document.getElementById('sor').innerHTML = num;

}
            
