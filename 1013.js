var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines = lines[0].split(' ');

let greater = 0;
const a = Number(lines[0]);
const b = Number(lines[1]);
const c = Number(lines[2]);

if ((a >= b) && (a >= c)) {
    greater = a;
}else if ((b >= a) && (b >= c)) {
    greater = b;
}else {
    greater = c;
}

console.log(greater + " eh o maior");