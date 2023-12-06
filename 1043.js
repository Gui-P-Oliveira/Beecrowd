var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let triangle = lines[0].split(' ').map(value => {
    parseFloat(value)
    return Math.abs(value)
}).sort((a, b) => a - b)

let trapeze = lines[0].split(' ').map(value => {
    parseFloat(value)
    return Math.abs(value)
})

if ((triangle[0] + triangle[1]) > triangle[2]) {
    let perimeter = triangle[0] + triangle[1] + triangle[2]
    console.log(`Perimetro = ${perimeter.toFixed(1)}`)
} else {
    let trapezeArea = ((trapeze[0] + trapeze[1]) * trapeze[2]) / 2
    console.log(`Area = ${trapezeArea.toFixed(1)}`);
}