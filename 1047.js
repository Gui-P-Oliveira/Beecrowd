var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let[startHour, startMinute, endHour, endMinute] = lines[0].split(' ').map(value => parseInt(value))
let startInMinutes = (startHour * 60) + startMinute
let endInMinutes = (endHour * 60) + endMinute
let dayInMinutes = 24 * 60

if (startHour === endHour && startMinute === endMinute) {    
    console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`)
}else if (startHour === endHour && startMinute < endMinute  )  {   
    let totalInMinutes = endInMinutes - startInMinutes
    console.log(`O JOGO DUROU ${(parseInt(totalInMinutes/60))} HORA(S) E ${totalInMinutes % 60} MINUTO(S)`)
}else if (startHour === endHour && startMinute > endMinute  )  {   
    let totalInMinutes = (dayInMinutes -startInMinutes) + endInMinutes
    console.log(`O JOGO DUROU ${(parseInt(totalInMinutes/60))} HORA(S) E ${totalInMinutes % 60} MINUTO(S)`)
}else if (startHour > endHour) {
    let totalInMinutes =  (dayInMinutes -startInMinutes) + endInMinutes
    console.log(`O JOGO DUROU ${parseInt(totalInMinutes / 60)} HORA(S) E ${totalInMinutes % 60} MINUTO(S)`) 
}else if (startHour < endHour) {
    let totalInMinutes =  endInMinutes - startInMinutes
    console.log(`O JOGO DUROU ${parseInt(totalInMinutes / 60)} HORA(S) E ${totalInMinutes % 60} MINUTO(S)`) 
}