var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [numberOfTests, ...pairList]= lines.map(values => values.split('\r')[0].split(' ').map(values => parseInt(values)))

for (let i = 0; i < pairList.length; i++) {
    const x = pairList[i][0]
    const y = pairList[i][1]

    if (isNaN(x) || isNaN(y)) {
        break
    }else if (y === 0) {
        console.log('divisao impossivel')
    }else {
        console.log((x / y).toFixed(1))
    }    
}