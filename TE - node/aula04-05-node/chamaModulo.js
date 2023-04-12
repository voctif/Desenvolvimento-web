const modulo = require('./index.js');

console.log("entrou chama modeulo");
console.log("variavel: " + modulo.minhaVariavel);

let v1=20;
let v2=30;

let total = modulo.soma(v1,v2);
console.log("total: "+ total)

let chamaModulo = {};
chamaModulo.soma = vl1 => modulo.soma(vl1, v2);

module.exports = chamaModulo;