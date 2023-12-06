var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let R = lines[0]
const Pi = 3.14159
let esfereVolume = (4.0/3) * Pi * R**3;

console.log(`VOLUME = ${esfereVolume.toFixed(3)}`)