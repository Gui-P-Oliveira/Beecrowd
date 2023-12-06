var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const passwords = lines.map(values => parseInt(values.split('\n')))
const correctPassword = 2002

for (let i = 0; i < passwords.length; i++) {
    if (passwords[i] === correctPassword) {
        console.log("Acesso Permitido")
        break;
    }else if (passwords[i] !== correctPassword) {
        console.log("Senha Invalida")
    }    
}