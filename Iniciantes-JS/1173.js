var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines)
const arrayLenght = 9

for (let i = 0; i <= arrayLenght; i++) {    
    console.log(`N[${i}] = ${number}`)

    number = number * 2    
}