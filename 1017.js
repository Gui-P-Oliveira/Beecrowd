var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let hoursTraveled = lines[0]
let velocity = lines[1]
const fuel = (hoursTraveled * velocity) / 12

console.log(`${fuel.toFixed(3)}`)