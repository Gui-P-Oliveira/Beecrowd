var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [totalOfTests, ...numbersList] = lines.map(values => values.split('\r')).map(values => parseInt(values))

for (let i = 0; i < numbersList.length; i++) {
    const number = numbersList[i];

    if (isNaN(number)) {
        break;
    }

    isPrimeNumber(number)    
}

function isPrimeNumber(number) {
    let sumOfDividers = 0
    for (let j = 1; j <= number; j++) {
        const divider = j;

        if (number % divider === 0) {
            sumOfDividers += 1
        }        
    }

    if (sumOfDividers === 2) {
        console.log(`${number} eh primo`)       
    }else if (sumOfDividers > 2) {
        console.log(`${number} nao eh primo`)        
    }
}