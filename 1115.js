var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let coordinates= lines.map(values => values.split('\r')[0].split(' ').map(values => parseFloat(values)))

for (let i = 0; i < coordinates.length; i++) {
    const X = coordinates[i][0]
    const Y = coordinates[i][1]

    if (X === 0 || Y === 0) {
        break;
    }else if (X > 0 && Y > 0) {    
        console.log(`primeiro`)
    }else if (X < 0 && Y > 0) {
        console.log(`segundo`)
    }else if (X < 0 && Y < 0) {
        console.log(`terceiro`)
    }else if (X > 0 && Y < 0) {
        console.log(`quarto`)
    }    
}