var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let matchResultsList= lines.map(values => values.split('\r')[0].split(' ').map(values => parseInt(values)))
let amountOfGrenais = 0
let interWins = 0
let gremioWins = 0
let draws = 0

for (let i = 0; i < matchResultsList.length; i++) {
    if ((i % 2) === 0) {
        let inter = matchResultsList[i][0]
        let gremio = matchResultsList[i][1]

        if (inter > gremio) {
            interWins += 1
        }else if (inter < gremio) {
            gremioWins += 1
        }else {
            draws += 0
        }        
        amountOfGrenais += 1
    }

    if ((i % 2) !== 0 && i !== 0) {
        console.log("Novo grenal (1-sim 2-nao)")
    }
    if (matchResultsList[i][0] === 2 && (i % 2) !== 0) {        
        break;
    }
}

console.log(`${amountOfGrenais} grenais`)
console.log(`Inter:${interWins}`)
console.log(`Gremio:${gremioWins}`)
console.log(`Empates:${draws}`)
if (interWins > gremioWins) {
    console.log("Inter venceu mais")
} else {
    console.log("Gremio venceu mais")
}

// (interWins > gremioWins) ? console.log("Inter venceu mais") : console.log("Gremio venceu mais")