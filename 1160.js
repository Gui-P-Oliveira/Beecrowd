var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [totalOfTests, ...caseList] = lines.map(values => values.split('\r')).map(values => values[0])
caseList = caseList.map(values => values.split(' ').map(values => parseFloat(values)))

for (let i = 0; i < caseList.length; i++) {
    const arrayOfData = caseList[i];
    let populationA = arrayOfData[0]
    let populationB = arrayOfData[1]
    let growthRatePerYear_A = arrayOfData[2] / 100
    let growthRatePerYear_B = arrayOfData[3] / 100

    if (arrayOfData.length !== 4) {
        break
    }
    
    let totalOfYears = calculateYearsToOvercomeB(populationA, populationB, growthRatePerYear_A, growthRatePerYear_B)    
    
    if (totalOfYears > 100) {
        console.log("Mais de 1 seculo.")
    }else if (totalOfYears <= 100) {
        console.log(`${totalOfYears} anos.`)        
    }
}

function calculateYearsToOvercomeB(populationA, populationB, growthRatePerYear_A, growthRatePerYear_B) {
    let years = 0
    while (populationB >= populationA) {
        populationA = parseInt((populationA * growthRatePerYear_A) + populationA)

        if (growthRatePerYear_B === 0) {
            populationB = populationB            
        }

        populationB = parseInt((populationB * growthRatePerYear_B) + populationB)
        years += 1

        if (years > 100) {
            return years
        }        
    }   

    return years
}