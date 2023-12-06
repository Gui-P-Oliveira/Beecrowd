var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [line, comand, ...matrix] = lines.map(values => values.split('\r')[0])
matrix = matrix.map(values => parseFloat(values))
line = parseInt(line)
let start
let end
let sum = 0

if (line === 0) {
    start = 0
    end = 11
}else {
    start = (line * 11) + line
    end = start + 11
}

for (let i = start; i < matrix.length; i++) {    
    sum += matrix[i]
    if (i === end) {
        break;
    }  
}

if (comand === "S") {
    console.log(sum.toFixed(1))
}else if (comand === "M") {
    console.log((sum / 12).toFixed(1))    
}

