var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valuesReceived = lines.map(value => parseFloat(value.split('\r')[0]))
let countPositive = 0
let sumOfPositive = 0

for (let i = 0; i < valuesReceived.length; i++) {
    if (valuesReceived[i] >= 0) {
        countPositive += 1
        sumOfPositive += valuesReceived[i]
    }   
}

console.log(`${countPositive} valores positivos`)
console.log(`${(sumOfPositive / countPositive).toFixed(1)}`)