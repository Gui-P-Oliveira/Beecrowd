var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const t = parseInt(lines)
const arrayLength = 1000
let counter = 0

for (let i = 0; i < arrayLength; i++) {
    if (counter === t) {
        counter = 0
    }

    console.log(`N[${i}] = ${counter}`)
    
    counter += 1    
}
