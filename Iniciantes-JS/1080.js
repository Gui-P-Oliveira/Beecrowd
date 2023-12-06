var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines.map(values => parseInt(values.split('\r')[0]))
let higherNumber = 0
let higherNumberIndex = 0

numbers.forEach((number, index) => {
    if (number > higherNumber) {
        higherNumber = number
        higherNumberIndex = index
    }
})

console.log(higherNumber)
console.log(higherNumberIndex + 1)