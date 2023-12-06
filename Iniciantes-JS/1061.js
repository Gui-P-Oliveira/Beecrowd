var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let startDay = Number(lines[0].split(' ')[1]);
let [startHour, startMinute, startSecond] = lines[1].split(' : ').map((str,i) => str.slice(0,2)
).map(value => Number(value));
let endDay = Number(lines[2].split(' ')[1]);
let [endHour, endMinute, endSecond] = lines[3].split(' : ').map((str,i) => str.slice(0,2)
).map(value => Number(value));
let startTimeInSeconds = (startHour * 60 * 60) + (startMinute * 60) + startSecond
let endTimeInSeconds = (endHour * 60 * 60) + (endMinute * 60) + endSecond
let dayInSeconds = 24 * 60 * 60
let hoursInSeconds = 60 * 60
let minutesInSeconds = 60
let day
let hours
let minutes
let seconds
let totalTimeInSeconds

function calculateTimes(totalTimeInSeconds) {
    day = parseInt(totalTimeInSeconds /dayInSeconds)
    hours = parseInt((totalTimeInSeconds % dayInSeconds) / hoursInSeconds)
    minutes = parseInt((totalTimeInSeconds % hoursInSeconds) / minutesInSeconds)
    seconds = parseInt((totalTimeInSeconds  % hoursInSeconds) % minutesInSeconds)  
}

if (startDay === endDay && endTimeInSeconds > startTimeInSeconds ) {
    totalTimeInSeconds = endTimeInSeconds - startTimeInSeconds
    calculateTimes(totalTimeInSeconds)
}else if( endDay === (startDay + 1)) {    
    totalTimeInSeconds = ((dayInSeconds - startTimeInSeconds) + endTimeInSeconds)
    calculateTimes(totalTimeInSeconds)  
}else {
    let entireDaysInSeconds = ((endDay - startDay) -1) * dayInSeconds
    totalTimeInSeconds = ((dayInSeconds - startTimeInSeconds) + endTimeInSeconds) + entireDaysInSeconds
    calculateTimes(totalTimeInSeconds)
}

console.log(`${day} dia(s)
${hours} hora(s)
${minutes} minuto(s)
${seconds} segundo(s)`)