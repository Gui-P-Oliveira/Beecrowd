var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const sequencePairs = lines.map(values => values.split('\r')[0].split(' ').map(values => parseInt(values)));

for (let i = 0; i < sequencePairs.length; i++) {
    if (sequencePairs[i][0] === sequencePairs[i][1]) {
        break;
    }else if (sequencePairs[i][0] < sequencePairs[i][1]) {
        console.log("Crescente")
    }else if (sequencePairs[i][0] > sequencePairs[i][1]) {
        console.log("Decrescente")
    }    
}