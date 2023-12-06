var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, ...z] = lines.map(values => values.split('\r')).map(values => parseInt(values))
let sumOfNumbers = 0
let countLoopEntry = 0
x = parseInt(x)
z = z.map(values => parseInt(values)).find(value => value > x)

for (let i = x; i < z; i++) {
    sumOfNumbers += i
    countLoopEntry += 1

    if (sumOfNumbers > z ) {
        break;
    }    
}

console.log(countLoopEntry)
