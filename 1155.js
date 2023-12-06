var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let sum = 0

for (let i = 1; i <= 100; i++) {
    const number = 1 / i;

    sum += number    
}

console.log(sum.toFixed(2))

