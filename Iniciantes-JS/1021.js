var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let money = lines[0] *100;
let notesOrCoins = [100,50,20,10,5,2,1.0, 0.50,0.25,0.10,0.05,0.01];

console.log("NOTAS:")
for (let i = 0; i < notesOrCoins.length; i++) {        
    if (i < 6) {
        let totalOfNotes = parseInt((money/(notesOrCoins[i]*100)))
        console.log(`${totalOfNotes} nota(s) de R$ ${notesOrCoins[i].toFixed(2)}`)
        money = money%(notesOrCoins[i]*100)
    }
    if (i === 6) {
        console.log("MOEDAS:")
    }     
    if(i >=6) {
        let totalOfCoins = parseInt((money/(notesOrCoins[i]*100)))
        console.log(`${totalOfCoins} moeda(s) de R$ ${notesOrCoins[i].toFixed(2)}`)
        money = money%(notesOrCoins[i]*100) 
    }     
}