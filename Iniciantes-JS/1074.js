var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [number, ...caseTests] = lines.map(values => parseInt(values.split('\r')[0]))

for (let i = 0; i < caseTests.length; i++) {
    let evenOdd 
    let positiveNegative 
    
    if (caseTests[i] === 0) {
        console.log("NULL")
    }else if (isNaN(caseTests[i])) {
        break;
    }   

    if ((caseTests[i] % 2) === 0 && caseTests[i] !== 0) {      
       evenOdd = "EVEN"     
    }else if ((caseTests[i] % 2) > 0 || (caseTests[i] % 2) < 0) {
        evenOdd = "ODD"
    }

    if (caseTests[i] > 0) {
        positiveNegative = "POSITIVE"
    }else if (caseTests[i] < 0) {
        positiveNegative = "NEGATIVE"
    }

    if (caseTests[i] !== 0) {
        console.log(evenOdd + " " + positiveNegative)         
    }    
}