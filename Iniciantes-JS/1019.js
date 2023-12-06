var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let timeInSeconds = parseInt(lines[0])
const hoursInSeconds = 60 * 60
const minutesInSeconds = 60
const hours = parseInt(timeInSeconds / hoursInSeconds)
const minutes =  parseInt((timeInSeconds % hoursInSeconds) / minutesInSeconds)
const seconds =  parseInt(((timeInSeconds % hoursInSeconds) % minutesInSeconds))

console.log(`${hours}:${minutes}:${seconds}`)