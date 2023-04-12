let http = require('http');

let servidor = http.createServer(function(request, response) {
    console.log("entrou");
    let urli = request.url;
    console.log("url: " + urli);

    if(urli == '/um'){
        response.end('<html><head><title>teste</title></head><body><h1>a</h1></body></html>');

    }else if(urli == '/dois'){
        response.end('<html><head><title>teste</title></head><body><h1>b</h1></body></html>');

    }else{
        response.end('<html><head><title>teste</title></head><body><h1>c</h1></body></html>');

    }

});

servidor.listen(3000);