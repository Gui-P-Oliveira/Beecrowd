var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x1, y1] = lines[0].split(' ').map(value => parseFloat(value))
let [x2, y2] = lines[1].split(' ').map(value => parseFloat(value))
const distance = Math.sqrt(((x2 - x1)**2) + (y2 - y1)**2);

console.log(distance.toFixed(4))