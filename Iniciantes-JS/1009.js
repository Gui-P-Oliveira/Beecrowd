var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salarioFixo = parseFloat(lines[1]);
var comissao = parseFloat(lines[2]);
var Total = salarioFixo + (comissao * 0.15);

console.log(`TOTAL = R$ ${Total.toFixed(2)}`);