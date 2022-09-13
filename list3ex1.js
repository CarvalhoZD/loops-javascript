const prompt = require('prompt-sync')();

for (let i = 1000; i < 1999; i++) {
    if (i % 11 == 5) {
        console.log(`Number ${i} when divided by 11 the rest is 5`);
    } else if (i > 1999) {
        console.log("There's no more numbers.");
        break;
    }
}
