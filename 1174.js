var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numbersList = lines.map(values => values.split('\r')).map(values => parseFloat(values))

for (let i = 0; i < numbersList.length; i++) { 
    const number = numbersList[i]   

    if (number <= 10) {        
        console.log(`A[${i}] = ${number.toFixed(1)}`)
    }       
}