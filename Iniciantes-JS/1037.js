var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const values = parseFloat(lines[0]);
const number = { 
    zero: 0, 
    twentyFive: 25, 
    fifithy: 50,
    seventyFive: 75,
    hundred: 100
};

if (values < number.zero || values > number.hundred) {
    console.log('Fora de intervalo');
}else if (values >= number.zero && values <= number.twentyFive) {
    console.log('Intervalo [0,25]');
}else if (values > number.twentyFive && values <= number.fifithy) {
    console.log('Intervalo (25,50]');
}else if (values > number.fifithy && values <= number.seventyFive) {
    console.log('Intervalo (50,75]');
}else {
    console.log('Intervalo (75,100]');
}