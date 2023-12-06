var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines[0].split(' ').map(value => parseFloat(value))
const Pi = 3.14159;
const geometricFigures = [
    {calc: (A * C) / 2, name: "TRIANGULO"},
    {calc: Pi * C**2, name: "CIRCULO"},
    {calc: ((A + B) * C) / 2, name: "TRAPEZIO"},
    {calc: B * B, name: "QUADRADO"},
    {calc: A * B, name: "RETANGULO"}
]

geometricFigures.forEach(value => console.log(`${value.name}: ${value.calc.toFixed(3)}`) )