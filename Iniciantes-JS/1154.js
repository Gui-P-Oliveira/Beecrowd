var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const ageList = lines.map(values => values.split('\r')).map(values => parseInt(values))
let sumOfAges = 0
let listLength

for (let i = 0; i < ageList.length; i++) {
    const age = ageList[i];
    
    if (age < 0) {
        listLength = i 
        break;
    }

    sumOfAges += age
}

const ageAvarage = sumOfAges / listLength

console.log(ageAvarage.toFixed(2))
