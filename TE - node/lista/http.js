const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Bem vindo\n');
});

server.listen(4055, () => {
  console.log(`http://localhost:4055/`);
});