var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let totalDays = parseInt(lines[0])
const yearInDays = 365
const monthInDays = 30
const years = parseInt(totalDays / yearInDays)
const months =  parseInt((totalDays % yearInDays) / monthInDays)
const days =  parseInt(((totalDays % yearInDays) % monthInDays))

console.log(`${years} ano(s)`)
console.log(`${months} mes(es)`)
console.log(`${days} dia(s)`)