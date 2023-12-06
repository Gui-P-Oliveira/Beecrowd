var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valuesReceived = lines.map(value => parseInt(value.split('\r')[0]))
let positiveValues = 0

for (let i = 0; i < valuesReceived.length; i++) {
    if (valuesReceived[i] >= 0) {
        positiveValues += 1
    }   
}

console.log(`${positiveValues} valores positivos`)