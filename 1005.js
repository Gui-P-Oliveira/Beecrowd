var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let gradeOne = parseFloat(lines[0])
let gradeTwo = parseFloat(lines[1])
let finalGrade = ((gradeOne * 3.5) + (gradeTwo * 7.5)) / 11

console.log(`MEDIA = ${finalGrade.toFixed(5)}`)