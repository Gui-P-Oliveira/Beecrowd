var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let amountOfFibonacciNumbers = parseInt(lines)
let fibonacciNumbers = " "
let arrayFibonacci = []
let fibonacci


for (let i = 0; i < amountOfFibonacciNumbers; i++) {
    if (i <= 1) {
        arrayFibonacci.push(i)
        fibonacciNumbers += i + " "      
    }else {
        let lastindex = arrayFibonacci.length -1
        let beforeLastIndex = lastindex -1

        fibonacci = arrayFibonacci[lastindex] + arrayFibonacci[beforeLastIndex]
        arrayFibonacci.push(fibonacci)
        fibonacciNumbers += (fibonacci + " ")
    }
}

console.log(fibonacciNumbers.trim())