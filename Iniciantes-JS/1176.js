var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [testsNumber, ...listOfNumbers] = lines.map(value => parseInt(value.split('\r')))
let arrayOfFibonacci = []

for (let i = 0; i <= 60; i++) {
    if (i <= 1) {
        arrayOfFibonacci.push(i)          
    }else {
        let lastindex = arrayOfFibonacci.length -1
        let beforeLastIndex = lastindex -1

        nextfibonacci = arrayOfFibonacci[lastindex] + arrayOfFibonacci[beforeLastIndex]
        arrayOfFibonacci.push(nextfibonacci)      
    }
}

for (let i = 0; i < listOfNumbers.length; i++) {
    const fibonacciIndex  = listOfNumbers[i];

    console.log(`Fib(${fibonacciIndex}) = ${arrayOfFibonacci[fibonacciIndex]}`)  
}



