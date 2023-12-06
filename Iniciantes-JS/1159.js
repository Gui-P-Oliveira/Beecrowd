var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numbersList = lines.map(values => values.split('\r')).map(values => parseInt(values))

for (let i = 0; i < numbersList.length; i++) {
    let sumOfPairs = 0
    let number = numbersList[i];

    if (number === 0) {
        break;
    }

    if ((number % 2) === 0) {
        sumOfPairs += number + (number + 2) + (number + 4) + (number + 6) + (number + 8)
    }else if ((number % 2) !== 0) {
        number = number + 1
        sumOfPairs += number + (number + 2) + (number + 4) + (number + 6) + (number + 8)
    }
    console.log(sumOfPairs)    
}