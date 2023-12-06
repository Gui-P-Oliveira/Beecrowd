var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let[a, b] = lines[0].split(' ').map((value) => parseInt(value))

if ((b % a) === 0 || (a % b) === 0) {
    console.log(`Sao Multiplos`)
} else {
    console.log(`Nao sao Multiplos`)
}