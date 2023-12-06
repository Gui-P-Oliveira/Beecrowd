var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let j = 1

for (let i = 0; i <= 2.0; i+=0.20) {
    if ((i.toFixed(1)) % 1 === 0) {
        console.log(`I=${i.toFixed(0)} J=${(j + i).toFixed(0)}`)
        console.log(`I=${i.toFixed(0)} J=${(j + 1 + i).toFixed(0)}`)
        console.log(`I=${i.toFixed(0)} J=${(j + 2 + i).toFixed(0)}`) 
    }else {
        console.log(`I=${i.toFixed(1)} J=${(j + i).toFixed(1)}`)
        console.log(`I=${i.toFixed(1)} J=${(j + 1 + i).toFixed(1)}`)
        console.log(`I=${i.toFixed(1)} J=${(j + 2 + i).toFixed(1)}`) 
    }
}