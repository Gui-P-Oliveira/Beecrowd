var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let[A, B, C] = lines[0].split(' ').map(values => parseFloat(values))
let delta = (B**2) - (4*A*C);
let r1 = (-B + Math.sqrt(delta)) / (2 * A);
let r2 = (-B - Math.sqrt(delta)) / (2 * A);

if (delta < 0 || A === 0) {
    console.log('Impossivel calcular')
} else {
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
}