var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number1 = parseInt(lines[0])
let number2 = parseInt(lines[1])
let sumOddNumbers = 0

for (let num = number2 +1; num < number1; num++) {  
    if ((num % 2) > 0 || (num % 2) < 0) {               
        sumOddNumbers += num        
    }   
}

console.log(sumOddNumbers)