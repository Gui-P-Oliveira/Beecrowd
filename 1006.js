var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let gradeOne = parseFloat(lines[0])
let gradeTwo = parseFloat(lines[1])
let gradeThree = parseFloat(lines[2])
let finalGrade = ((gradeOne * 2) + (gradeTwo * 3) + (gradeThree * 5)) / 10

console.log(`MEDIA = ${finalGrade.toFixed(1)}`)