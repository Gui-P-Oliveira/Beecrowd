var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let[xCoordinates, yCoordinates] = lines[0].split(' ')
xCoordinates = parseFloat(xCoordinates)
yCoordinates = parseFloat(yCoordinates)

if (xCoordinates > 0 && yCoordinates > 0) {    
    console.log(`Q1`)
}else if (xCoordinates < 0 && yCoordinates > 0) {
    console.log(`Q2`)
}else if (xCoordinates < 0 && yCoordinates < 0) {
    console.log(`Q3`)
}else if (xCoordinates > 0 && yCoordinates < 0) {
    console.log(`Q4`)
}else if (yCoordinates === 0 && xCoordinates !== 0) {
    console.log(`Eixo X`)
}else if (xCoordinates === 0 && yCoordinates !== 0) {
    console.log(`Eixo Y`)
}else {    
    console.log(`Origem`)   
}