var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


for (let i = 0; i < lines.length; i++) {
    let [D, N] = lines[i].split(' ')
    let anotationNumber= N.trim().split('')
    
    if (D === '0' && N === '0') {
        break;
    }    
    
    let contractNumber = " "    
    for (let j = 0; j < anotationNumber.length; j++) {        
        let character = anotationNumber[j]

        if (character !== D && character !== '0') {
            contractNumber += character
        }else if (contractNumber.length >= 2 && character !== D) {
            contractNumber += character
        }
    }   

    if (contractNumber.trim().length === 0) {
        console.log('0')
    }else {
        console.log(contractNumber.trim())
    }
}
