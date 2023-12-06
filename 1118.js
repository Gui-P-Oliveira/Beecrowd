var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let gradesList= lines.map(values => parseFloat(values.split('\r')))
let firstValidGrade
let secondValidGrade

for (let i = 0; i < gradesList.length; i++) {
    const grade = gradesList[i]

    if (grade < 0 || grade > 10) {
        console.log("nota invalida")
    }else if (firstValidGrade === undefined) {
        firstValidGrade = grade
    }else {
        secondValidGrade = grade
        break;
    }    
}

console.log(`media = ${((firstValidGrade + secondValidGrade) / 2).toFixed(2)}`)