var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const sequencePairs = lines.map(values => values.split('\r')[0].split(' ').map(values => parseInt(values)));

for (let i = 0; i < sequencePairs.length; i++) {
    let first
    let second

    if (sequencePairs[i][0] <= 0 || sequencePairs[i][1] <= 0) {
        break;
    }else if (sequencePairs[i][0] > sequencePairs[i][1]) {
        first = sequencePairs[i][1]
        second = sequencePairs[i][0]
    } else if (sequencePairs[i][0] < sequencePairs[i][1]) {
        first = sequencePairs[i][0]
        second = sequencePairs[i][1]        
    } 
    
    printSequenceAndSum(first, second)
}

function printSequenceAndSum (first, second) {
    let numberSequece = " "
    let sum = 0

    for (let index = first; index <= second; index++) {
        numberSequece += index
        numberSequece += " "  
        sum += index     
    }
    
    const sequence = numberSequece.trim()

    console.log(`${sequence} Sum=${sum}`)
}