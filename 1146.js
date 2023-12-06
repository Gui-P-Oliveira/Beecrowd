var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numberList = lines.map(values => values.split('\r')).map(values => parseInt(values))

for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    let sequcenceOfNumbers = " "

    if (number === 0 || isNaN(number)) {
        break
    }    

    for (let j = 1; j <= number; j++) {
        sequcenceOfNumbers += j + " "        
    }

    console.log(sequcenceOfNumbers.trim())    
}