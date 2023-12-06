var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [column, comand, ...matrix] = lines.map(values => values.split('\r')[0])
matrix = matrix.map(values => parseFloat(values))
column = parseInt(column)
let start = column
let end = (12 * 11) + column
let sum = 0 

for (let i = start; i <= end; i+=12) {    
    sum += matrix[i]    
    console.log(matrix[i])
}

if (comand === "S") {
    console.log(sum.toFixed(1))
}else if (comand === "M") {
    console.log((sum / 12).toFixed(1))    
}