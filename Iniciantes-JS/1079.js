var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [number, ...grades]= lines.map(grade => grade.split("\r")[0].split(" ").map(grade => parseFloat(grade)))
const firstGradeWeight = 2
const secondtGradeWeight = 3
const thirdGradeWeight = 5

for (let i = 0; i < grades.length -1; i++) {   
    console.log(`${calculateAvarage(grades[i]).toFixed(1)}`)      
}

function calculateAvarage (grades) {
    let average = 0
   
    for (let i = 0; i < grades.length; i++) {      
        if (i === 0) {
            average += (firstGradeWeight * grades[i])
        }else if (i === 1) {
            average += (secondtGradeWeight * grades[i])
        }else {
            average += (thirdGradeWeight * grades[i])
        }
    }
    return average / 10;
}