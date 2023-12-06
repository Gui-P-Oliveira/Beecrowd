var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let C = parseInt(lines[2])
let D = parseInt(lines[3])
let difference = (A * B) - (C * D)

console.log(`DIFERENCA = ${difference}`)