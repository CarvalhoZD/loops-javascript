const prompt = require('prompt-sync')();

let sum = 0;
let n = 0;
let count = 0;



do {
    n = parseInt(prompt('Type any number: '));

    if (n % 3 == 0) {
        sum += n;
        if (n == 0) {
            break;
        }
        count++
    }

} while (n != 0);

console.log(`The average of the number multiples of 3 is: ${sum / count}`);