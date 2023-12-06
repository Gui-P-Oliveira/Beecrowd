var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [totalOfTests, ...numbersList] = lines.map(values => values.split('\r')).map(values => parseInt(values))

for (let i = 0; i < numbersList.length; i++) {
    const number = numbersList[i];

    if (isNaN(number)) {
        break;
    }

    isPerfectNumber(number)    
}

function isPerfectNumber(number) {
    let sumOfDividers = 0
    for (let j = 1; j < number; j++) {
        const divider = j;

        if (number % divider === 0) {
            sumOfDividers += divider
        }        
    }

    if (number === sumOfDividers) {
        console.log(`${number} eh perfeito`)       
    }else if (number !== sumOfDividers) {
        console.log(`${number} nao eh perfeito`)        
    }
}