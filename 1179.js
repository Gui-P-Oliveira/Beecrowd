var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const listOfNumbers = lines.map(value => parseInt(value.split('\r')))
let EvenNumberArray = listOfNumbers.filter(values => (values % 2) === 0)
const OddNumberArray = listOfNumbers.filter(values => (values % 2) !== 0)


function printArrayOfOddsOrEvenNumbers(array) {
    let counter = 0

    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        const lastIndex = array.length -1
        
        if ((number % 2) === 0 && i < 5) {
            console.log(`par[${counter}] = ${number}`)  
            counter += 1  
            
            if (counter === 5) {
                EvenNumberArray = EvenNumberArray.splice(counter, lastIndex)
                counter = 0                
                break;
            }
        }else if ((number % 2) !== 0) {            
            console.log(`impar[${counter}] = ${number}`) 
            counter += 1    
            
            if (counter === 5) {
                counter = 0                
            }        
        }        
    }
}

printArrayOfOddsOrEvenNumbers(EvenNumberArray)
printArrayOfOddsOrEvenNumbers(OddNumberArray)
printArrayOfOddsOrEvenNumbers(EvenNumberArray)

