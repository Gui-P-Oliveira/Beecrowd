var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const number = new Array(100)

for (let i = 1; i <= number.length; i++) {
    if ((i % 2) === 0) {
        console.log(i)
    }   
}