var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let[nota1, nota2, nota3, nota4] = lines.shift().split(' ')
let media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / 10;

console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7) {
    console.log(`Aluno aprovado.`)
}else if ( media >= 5 && media <= 6.9 ){
    console.log(`Aluno em exame.`)
    
    let notarecuperacao= lines.shift().split(' ')  

    notarecuperacao = parseFloat(notarecuperacao);

    console.log(`Nota do exame: ${notarecuperacao.toFixed(1)}`)

    let novaMedia = (media + notarecuperacao) / 2;

    if (novaMedia >= 5) {
        console.log(`Aluno aprovado.`)
    }else {
        console.log(`Aluno reprovado.`)
    }
    console.log(`Media final: ${novaMedia.toFixed(1)}`)

}else if (media < 5) {
    console.log(`Aluno reprovado.`)
}