var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines[0])
let OddNumbers = 0
const repetitions = 6

for (let i = 0; i < repetitions; i++) {  
    printConsecutiveOddNumbers(number, i)
}

function printConsecutiveOddNumbers (number, i) {
    if ((number % 2) === 0 && i === 0) {
        OddNumbers = number + 1
    }else if ((number % 2) > 0 && i === 0) {
        OddNumbers = number        
    } else {
        OddNumbers += 2
    }
    console.log(OddNumbers)
}