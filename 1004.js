var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numberOne = parseInt(lines[0])
let numberTwo = parseInt(lines[1])

console.log(`PROD = ${numberOne * numberTwo}`)