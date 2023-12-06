var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let distanceInKm = lines[0]
let totalFuel = lines[1]
const kilometersPerLitre = distanceInKm / totalFuel

console.log(`${kilometersPerLitre.toFixed(3)} km/l`)