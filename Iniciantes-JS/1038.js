var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines = lines[0].split(' ')
const orderCode = Number(lines[0])
const amountOfItens = Number(lines[1])

const table = {
    cachorroQuente: {code: 1, price: 4.00},
    X_salada: {code: 2, price: 4.50},
    X_bacon: {code: 3, price: 5.00},
    torradaSimples: {code: 4, price: 2.00},
    Refrigerante: {code: 5, price: 1.50},
    
}

switch (orderCode) {    
    case table.cachorroQuente.code: 
        console.log(`Total: R$ ${(table.cachorroQuente.price * amountOfItens).toFixed(2)}`)        
        break;
    case table.X_salada.code: 
        console.log(`Total: R$ ${(table.X_salada.price * amountOfItens).toFixed(2)}`)        
        break;
    case table.X_bacon.code: 
        console.log(`Total: R$ ${(table.X_bacon.price * amountOfItens).toFixed(2)}`)        
        break;
    case table.torradaSimples.code: 
        console.log(`Total: R$ ${(table.torradaSimples.price * amountOfItens).toFixed(2)}`)        
        break;
    case table.Refrigerante.code: 
        console.log(`Total: R$ ${(table.Refrigerante.price * amountOfItens).toFixed(2)}`)        
        break;
    default:
        break;
}