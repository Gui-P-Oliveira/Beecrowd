var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let[start, end] = lines[0].split(' ')

start = Number(start)
end = Number(end)

if (start >= 12) {    
    console.log(`O JOGO DUROU ${(24 - start) + end} HORA(S)`)
}else if ( start === end) {
    console.log(`O JOGO DUROU 24 HORA(S)`)
}else {    
    console.log(`O JOGO DUROU ${end - start} HORA(S)`)   
}