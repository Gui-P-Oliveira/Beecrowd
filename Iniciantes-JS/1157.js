var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines)

for (let i = 1; i <= number; i++) {
    const divider = i;

    if ((number % divider) === 0) {
        console.log(divider)
    }    
}