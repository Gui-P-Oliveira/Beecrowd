var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines[0])
let workedHours = parseInt(lines[1])
let valuePerHour = parseFloat(lines[2])
let salary = workedHours * valuePerHour

console.log(`NUMBER = ${number}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)