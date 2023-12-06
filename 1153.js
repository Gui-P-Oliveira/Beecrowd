var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines)
let factorial = number
let counter = 1

while (number > counter) {
    factorial = factorial * (number - counter)
    counter += 1;
}

console.log(factorial)