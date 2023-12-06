var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, y]= lines.map(values => parseInt(values.split('\r')))
let greaterNumber
let smallestNumber

if (x < y) {
    smallestNumber = x +1
    greaterNumber = y
}else {
    smallestNumber = y +1
    greaterNumber = x
}

for (smallestNumber; smallestNumber < greaterNumber; smallestNumber++) {
    let number = smallestNumber

    if ((number % 5) === 2 || (number % 5) === 3) {
        console.log(number)
    }    
}