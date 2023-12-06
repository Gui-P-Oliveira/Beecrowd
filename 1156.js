var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let sum = 1
let divider = 2

for (let i = 3; i <= 100; i+=2) {
    const number = i / divider;

    sum += number   
    divider = divider * 2 
}

console.log(sum.toFixed(2))