var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c] = lines[0].split(' ').map((value) => parseFloat(value)).sort((a, b) => a - b).reverse();

const tringules = [
    {condition: a >= (b + c), type: "NAO FORMA TRIANGULO" },
    {condition: a**2 === (b**2 + c**2), type: "TRIANGULO RETANGULO" },
    {condition: a**2 > (b**2 + c**2),  type: "TRIANGULO OBTUSANGULO" },
    {condition:  a**2 < (b**2 + c**2), type: "TRIANGULO ACUTANGULO" },
    {condition: (a === b) && (b === c) && (c === a), type: "TRIANGULO EQUILATERO" },
    {condition: (a === b && c !== a) || (b === c && a !== c), type: "TRIANGULO ISOSCELES" },    
];

for (let i = 0; i < tringules.length; i++) {    
    if (i === 0 && tringules[i].condition === true) {
        console.log(tringules[i].type)    
    } else if (tringules[i].condition === true && tringules[0].condition !==true) {
        console.log(tringules[i].type)
    }
}