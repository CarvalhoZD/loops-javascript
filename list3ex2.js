const prompt = require('prompt-sync')();

let fairnumber = 0;
let oddnumber = 0;

    for (let i = 0; i < 10; i++) {
        const number = prompt('Type a number: ');
        if (number % 2 ==0) {
            fairnumber = fairnumber + 1;
        } else if ( number % 2 != 0) {
            oddnumber = oddnumber + 1;
        }
    }

console.log(`There are ${oddnumber} odd numbers.`);
console.log(`There are ${fairnumber} fair numbers.`);