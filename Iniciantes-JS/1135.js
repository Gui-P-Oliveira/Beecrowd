var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numberRepetitions = parseInt(lines)
let repetitions = 0

for (let i = 1; repetitions < numberRepetitions; i+=4) {
    console.log(`${i} ${i+1} ${i+2} PUM`)    
    repetitions += 1
}