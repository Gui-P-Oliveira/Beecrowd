var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines[0])

for (let i = 0; i <= value; i++) {   
    if ((i % 2) > 0 || (i % 2) < 0) {
        console.log(i)
    }
}