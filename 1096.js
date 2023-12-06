var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let j = 7

for (let i = 1; i <= 9; i+=2) {
    console.log(`I=${i} J=${j}`)
    console.log(`I=${i} J=${j - 1}`)
    console.log(`I=${i} J=${j - 2}`)       
}