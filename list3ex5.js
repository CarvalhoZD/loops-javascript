const prompt = require('prompt-sync')();

let qtd = 0;
let number = 0;
do {
    number = parseInt(prompt('Type a number from the keyboard: '));
    qtd += number
} while (number != 0);

console.log(`The sum of the numbers are: ${qtd}`);