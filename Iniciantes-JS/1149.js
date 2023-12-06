var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a, ...n] = lines[0].split(" ")
a = parseInt(a)
n = n.map(values => parseInt(values)).find(value => value > 0)
let sum = 0

for (let i = 0; i <= n-1; i++) {
    sum += a + i    
}

console.log(sum)