var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines[0])
let arrayLenght = 10000 

for (let i = 0; i <= arrayLenght; i++) {
   if (i % number === 2) {
    console.log(i)
   }
}