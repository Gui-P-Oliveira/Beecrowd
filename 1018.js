var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let money = lines[0];
let notes = [100,50,20,10,5,2,1]

console.log(money)
for (let i = 0; i < notes.length; i++) {       
    let totalOfNotes = parseInt(money/notes[i])
    console.log(`${totalOfNotes} nota(s) de R$ ${notes[i].toFixed(0)},00`)
    money = money%(notes[i])      
}