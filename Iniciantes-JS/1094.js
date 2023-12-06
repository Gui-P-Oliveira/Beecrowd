var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [caseTests, ...tests] = lines.map(values => values.split('\r')[0]).map(values => values.split(' '))
let totalOfAnimals = 0
let totalOfRabbits = 0
let totalOfRats = 0
let totalOfFrogs = 0

for (let i = 0; i < tests.length; i++) {    
    if (tests[i][1] === "C") {
        totalOfRabbits += parseInt(tests[i][0])
        totalOfAnimals += parseInt(tests[i][0]) 
    }else if (tests[i][1] === "R") {
        totalOfRats += parseInt(tests[i][0])
        totalOfAnimals += parseInt(tests[i][0]) 
    }else if (tests[i][1] === "S") {
        totalOfFrogs += parseInt(tests[i][0])
        totalOfAnimals += parseInt(tests[i][0]) 
    }
}

console.log(`Total: ${totalOfAnimals} cobaias`)
console.log(`Total de coelhos: ${totalOfRabbits}`)
console.log(`Total de ratos: ${totalOfRats}`)
console.log(`Total de sapos: ${totalOfFrogs}`)
console.log(`Percentual de coelhos: ${((totalOfRabbits /totalOfAnimals) * 100).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((totalOfRats /totalOfAnimals) * 100).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((totalOfFrogs /totalOfAnimals) * 100).toFixed(2)} %`)