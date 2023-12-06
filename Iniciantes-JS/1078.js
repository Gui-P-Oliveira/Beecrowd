var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines[0])
const multiplicationTable = 10

for (let i = 1; i <= multiplicationTable; i++) {
   console.log(`${i} x ${number} = ${i * number}`)
}