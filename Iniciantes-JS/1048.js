var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let salary = parseFloat(lines[0])
const salaryTable = [ 
    {range: salary <= 400, readjusment: 0.15},
    {range: salary > 400 && salary <= 800, readjusment: 0.12},
    {range: salary > 800 && salary <= 1200, readjusment: 0.10},
    {range: salary > 1200 && salary <= 2000, readjusment: 0.07},
    {range: salary > 2000, readjusment: 0.04},    
]

for (let i = 0; i < salaryTable.length; i++) {
    if (salaryTable[i].range) {
        const newSalary = salary + (salary * salaryTable[i].readjusment)
        const readjusment = salary * salaryTable[i].readjusment
        const readjusmentPercentage = parseInt(100 * salaryTable[i].readjusment)
        
        console.log(`Novo salario: ${newSalary.toFixed(2)}`)
        console.log(`Reajuste ganho: ${readjusment.toFixed(2)}`)
        console.log(`Em percentual: ${readjusmentPercentage} %`)
        return
    }     
}