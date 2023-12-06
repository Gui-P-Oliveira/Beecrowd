var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let income = parseFloat(lines[0])
let taxe

if (income  <= 2000.00) {
    console.log("Isento")
}else if (income <= 3000.00) {
    taxe = (income -2000.00) * 0.08
    console.log(`R$ ${taxe.toFixed(2)}`)
}else if (income <= 4500.00) {
    taxe = (1000 * 0.08) +((income - 3000.00) * 0.18) 
    console.log(`R$ ${taxe.toFixed(2)}`)    
}else {
    taxe = (1000 * 0.08) + (1500 * 0.18) + ((income - 4500.00) * 0.28) 
    console.log(`R$ ${taxe.toFixed(2)}`)       
}