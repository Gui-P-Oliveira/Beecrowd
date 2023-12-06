var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let fuelTypeList= lines.map(values => parseInt(values.split('\r')))
let alcohol = 0
let gasoline = 0
let diesel = 0

for (let i = 0; i < fuelTypeList.length; i++) {
    const fuelTypeCode = fuelTypeList[i] 
    sortFuelTypes(fuelTypeCode)    
}

function sortFuelTypes(fuelCode) {
    switch (fuelCode) {
        case 1:
            alcohol += 1
            break;
        case 2:
            gasoline += 1
            break;
        case 3:
            diesel += 1
            break;
        case 4:
            break;
    
        default:
            break;
    }    
}

console.log("MUITO OBRIGADO")
console.log(`Alcool: ${alcohol}`)
console.log(`Gasolina: ${gasoline}`)
console.log(`Diesel: ${diesel}`)
