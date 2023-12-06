var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numbersList = lines.map(values => values.split('\r')).map(values => parseInt(values))
const lastIndex = numbersList.length - 1

for (let i = 0; i < numbersList.length; i++) {
    const element = numbersList[i];
        
    if (i === (numbersList.length / 2)) {
        break
    }
    
    numbersList[i] = numbersList[lastIndex -i]
    numbersList[lastIndex -i] = element      
}

for (let i = 0; i < numbersList.length; i++) {
    console.log(`N[${i}] = ${numbersList[i]}`)   
}

