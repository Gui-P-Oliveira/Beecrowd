var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let[subphylum, subclass, diet] = lines.map(value => value.split('\r')[0])

const classification =[
    {subphylum: "vertebrado" , subclass: "ave", diet: "carnivoro", specie: "aguia"},
    {subphylum: "vertebrado" , subclass: "ave", diet: "onivoro", specie: "pomba"},
    {subphylum: "vertebrado" , subclass: "mamifero", diet: "onivoro", specie: "homem"},
    {subphylum: "vertebrado" , subclass: "mamifero", diet: "herbivoro", specie: "vaca"},
    {subphylum: "invertebrado" , subclass: "inseto", diet: "hematofago", specie: "pulga"},
    {subphylum: "invertebrado" , subclass: "inseto", diet: "herbivoro", specie: "lagarta"},
    {subphylum: "invertebrado" , subclass: "anelideo", diet: "hematofago", specie: "sanguessuga"},
    {subphylum: "invertebrado" , subclass: "anelideo", diet: "onivoro", specie: "minhoca"}
]

for (let i = 0; i < classification.length; i++) {
    if (classification[i].subphylum === subphylum && classification[i].subclass === subclass && classification[i].diet === diet) {
        console.log(classification[i].specie)        
    }    
}