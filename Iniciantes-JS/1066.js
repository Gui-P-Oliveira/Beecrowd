var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valuesReceived = lines.map(value => parseInt(value.split('\r')[0]));
let countEven = 0;
let countOdd = 0;
let countPositive = 0;
let countNegative = 0;

for (let i = 0; i < valuesReceived.length; i++) {
    sortNumberByEvenOddPositiveNegative(valuesReceived[i]);
}

function sortNumberByEvenOddPositiveNegative (number) {
   if (number % 2 ===  0) {
    countEven += 1
   }else if ((number % 2) > 0 || (number % 2) < 0) {
    countOdd += 1
   }

   if (number > 0) {
    countPositive += 1
   }else if (number < 0) {
    countNegative += 1
   }
}

console.log(`${countEven} valor(es) par(es)`)
console.log(`${countOdd} valor(es) impar(es)`)
console.log(`${countPositive} valor(es) positivo(s)`)
console.log(`${countNegative} valor(es) negativo(s)`)