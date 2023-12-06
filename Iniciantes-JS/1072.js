var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [number, ...numbers] = lines.map(values => parseInt(values.split('\r')[0]));
const [a, b] = [10, 20];
let insideInterval = 0;
let outsideInterval = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= a && numbers[i] <= b) {
        insideInterval += 1
    }else if (numbers[i] < a || numbers[i] > b) {
        outsideInterval += 1
    }
}

console.log(`${insideInterval} in`)
console.log(`${outsideInterval} out`)