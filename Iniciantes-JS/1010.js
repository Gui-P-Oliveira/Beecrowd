var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let[tag1, amount1, value1] = lines[0]. split(' ')
let[tag2, amount2, value2] = lines[1]. split(' ')
let totalCost = (amount1 * value1) + (amount2 * value2)

console.log(`VALOR A PAGAR: R$ ${totalCost.toFixed(2)}`)