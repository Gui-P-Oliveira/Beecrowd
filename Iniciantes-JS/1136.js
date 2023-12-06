var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [X, Y] = lines[0].split(' ').map(values => parseInt(values))

for (let i = 1; i <= Y; i+=X) {  
    if (isNaN(i)) {
       break 
    }

    let print = " " 
    let counter = 0 
    for (let j = i; counter < X; j++) {        
        print += j + " " 
        counter += 1
    }   
    console.log(print.trim()    )
}