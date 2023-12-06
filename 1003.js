var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])

console.log(`SOMA = ${A + B}`)