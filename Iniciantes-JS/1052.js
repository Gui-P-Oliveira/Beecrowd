var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines[0])
const listOfMonths = [
    {position: 1, month: "January"},
    {position: 2, month: "February"},
    {position: 3, month: "March"},
    {position: 4, month: "April"},
    {position: 5, month: "May"},
    {position: 6, month: "June"},
    {position: 7, month: "July"},
    {position: 8, month: "August"},    
    {position: 9, month: "September"},    
    {position: 10, month: "October"},    
    {position: 11, month: "November"},    
    {position: 12, month: "December"},    
]

const monthFound= listOfMonths.find(value => value.position === number)

console.log(monthFound.month) 