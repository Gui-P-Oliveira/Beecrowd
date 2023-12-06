var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [testsNumber, ...listOfNumbers] = lines.map(value => value)
listOfNumbers = listOfNumbers.map(values => values.split(' '))[0].map(values => parseInt(values))
let smallestNumber 
let indexOfsmallestNumber 

for (let i = 0; i < listOfNumbers.length; i++) {
    const number = listOfNumbers[i];

    if (i === 0) {
        smallestNumber = number        
    }else if (smallestNumber > number) {
        smallestNumber = number
        indexOfsmallestNumber = i
    }    
}

console.log(`Menor valor: ${smallestNumber}`)
console.log(`Posicao: ${indexOfsmallestNumber}`)