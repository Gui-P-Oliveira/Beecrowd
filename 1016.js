var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let kilometers = lines[0]
const timeInMinutesPerKm = 2

console.log(`${kilometers * timeInMinutesPerKm} minutos`)