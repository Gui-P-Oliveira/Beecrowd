var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numbersList = lines.map(values => values.split('\r')).map(values => parseInt(values))

for (let i = 0; i < numbersList.length; i++) {
    const number = numbersList[i];
    const substitution = 1

    if (number <= 0) {
        console.log(`X[${i}] = ${substitution}`)
    }else if (number > 0) {
        console.log(`X[${i}] = ${number}`)        
    }    
}