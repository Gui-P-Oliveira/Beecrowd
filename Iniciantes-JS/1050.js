var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let ddd = parseInt(lines[0])
const listOfDDD = [
    {code: 61, city: "Brasilia"},
    {code: 71, city: "Salvador"},
    {code: 11, city: "Sao Paulo"},
    {code: 21, city: "Rio de Janeiro"},
    {code: 32, city: "Juiz de Fora"},
    {code: 19, city: "Campinas"},
    {code: 27, city: "Vitoria"},
    {code: 31, city: "Belo Horizonte"},  
]
const dddFinded = listOfDDD.find(value => value.code === ddd)

dddFinded? console.log(dddFinded.city) : console.log('DDD nao cadastrado')