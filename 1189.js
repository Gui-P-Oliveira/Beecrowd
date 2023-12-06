var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [comand, ...matrix] = lines.map(values => values.split('\r')[0])
matrix = matrix.map(values => parseFloat(values))
let start = 12
let end = 120
let sum = 0 
let line = 2
let jump = 11
let numberCounter = 0

for (let i = start; i <= end; i+=1) {    
    sum += matrix[i]  
    numberCounter += 1 
    
    if (i === 12 ) {
        line += 1
        i += jump
    }else if (((12 * line) - jump) === i && line < 7 ) {
        line += 1
        jump -= 1
        i += jump        
    }else if (line === 8 && jump !== 8) {
        jump += 1
    }else if (((12 * line) - (jump +1)) === i && line === 7) {
        line += 1
        i += jump  
    }else if (((12 * line) - (jump +1))  === i && line >= 8) {
        line += 1       
        i += jump  
        jump += 1
    }
}

console.log(numberCounter)

if (comand === "S") {
    console.log(sum.toFixed(1))
}else if (comand === "M") {
    console.log((sum / numberCounter).toFixed(1))    
}

