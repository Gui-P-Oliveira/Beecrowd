var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let listWithMatrixSizes = lines.map(values => values.split('\r')[0]).map(value => parseInt(value))

for (let i = 0; i <= listWithMatrixSizes.length; i++) {
    const matrixSize = listWithMatrixSizes[i];

    if (isNaN(i)) {
    
    }else if (!isNaN(i)) {
        printMatrix(matrixSize)    
    }
}

function printMatrix(matrixSize) {
    for (let i = 0; i < matrixSize; i++) {
        let one = 1
        let two = 2
        const arrayTemplate1 = createArrayTemplate(matrixSize)
        let lastIndex = arrayTemplate1.length -1

        arrayTemplate1[i] = one
        arrayTemplate1[lastIndex - i] = two
        printArrayInsideOfMatriz(arrayTemplate1)   
    }  
}

function printArrayInsideOfMatriz(array) {
    let print = " "

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        print += element        
    }

    print = print.trim()
    console.log(print)
}

function createArrayTemplate(arrayLenght) {
    const array = []
    
    for (let i = 0; i < arrayLenght; i++) {    
        array[i] = 3         
    }    

    return array
}


