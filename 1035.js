var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let[A, B, C, D] = lines[0].split(' ')

if (B > C && D > A && (C + D) > (A + B) && (C >=0 && D >= 0) && (A % 2) === 0 ) {
    console.log('Valores aceitos')
}else {
    console.log('Valores nao aceitos')
}