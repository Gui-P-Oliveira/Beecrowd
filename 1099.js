var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [caseTests, ...tests] = lines.map(values => values.split('\r')[0]).map(values => values.split(' ').map(value => parseInt(value)));

if (isNaN(tests[tests.length -1][0])) {
    tests.pop()
}

for (let i = 0; i < tests.length; i++) {    
    let x, y;

    if (tests[i][0] < tests[i][1] ) {
        x = tests[i][0]
        y = tests[i][1]
    }else if (tests[i][0] > tests[i][1]) {
        x = tests[i][1]
        y = tests[i][0]
    }

    console.log(sumOdd(x,y))
}

function sumOdd (x,y) {
    let sumOfOdds = 0;
    for (let j = x+1; j < y; j++) {
        if (j % 2 !== 0) {
            sumOfOdds += j
        }        
    }
    return sumOfOdds
}