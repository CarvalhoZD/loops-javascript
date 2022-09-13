const prompt = require('prompt-sync')();

let idade
let under21 = 0
let over50 = 0

while (idade != -99) {
    idade = prompt ('Type your age: ') 
    if (idade < 21) {
       under21 = under21 + 1 
       console.log(`There's a total of ${under21} under 21.`)
    } else if (idade > 50) {
        over50 = over50 + 1
        console.log(`There's a total of ${over50} over 50.`)
    }
}
console.log('-99 not a eligible number.')