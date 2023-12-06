var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines = lines[0].split(' ')

let numbers = lines.map((value) => {
  return parseFloat(value)
})

numbers.sort((a, b) => a - b)

numbers.forEach(value => console.log(value))

console.log()

lines.forEach(value => console.log(value))