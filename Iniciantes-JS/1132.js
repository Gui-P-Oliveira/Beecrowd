var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, y]= lines.map(values => parseInt(values.split('\r')))
let greaterNumber
let smallestNumber
let sum = 0

if (x < y) {
    smallestNumber = x
    greaterNumber = y
}else {
    smallestNumber = y
    greaterNumber = x
}

for (smallestNumber; smallestNumber <= greaterNumber; smallestNumber++) {    
    if (smallestNumber % 13 !== 0) {
        sum += smallestNumber
    }
}

console.log(sum)