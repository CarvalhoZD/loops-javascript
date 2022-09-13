const prompt = require('prompt-sync')();

let i = 0;
let qtdCalmas = 0;
let qtdMNerbosas = 0;
let qtdHAgressivos = 0;
let qtdOCalmos = 0;
let qtdNervosos40 = 0;
let qtdCalmos18 = 0;

while (i < 150) {
    const idadeString = prompt('Type your age: ');
    const idade = Number(idadeString);
    console.log('Choose your sex:\n\n');
    console.log('1 - Masculino\n');
    console.log('2 - Feminino\n');
    console.log('3 - Outros\n');
    const sexString = prompt('Type the option related to your sex: ');
    const sex = Number(sexString)
    console.log('Type your humor:\n\n');
    console.log('1 - Calmo\n');
    console.log('2 - Nervoso\n');
    console.log('3 - Agressivo\n');
    const humorString = prompt('Type the option related to your humor: ');
    const humor = Number(humorString);

    if (humor == 1) {
        qtdCalmas++;
    }
    if (sex == 2 && humor == 2) {
        qtdMNerbosas++
    }
    if (sex == 1 && humor == 3) {
        qtdHAgressivos++
    }
    if (sex == 3 && humor == 1) {
        qtdOCalmos++
    }
    if (humor == 2 && idade > 40) {
        qtdNervosos40++
    }
    if (humor == 1 && idade < 18) {
        qtdCalmos18 ++
    }


    i++;
}

console.log(`\nO total de pessoas calmas é ${qtdCalmas}`);
console.log(`\nO total de mulheres nervosas é ${qtdMNerbosas}`);
console.log(`\nO total de homens agressivos é ${qtdHAgressivos}`);
console.log(`\nO total de outros calmos é ${qtdOCalmos}`);
console.log(`\nO total de nervosos com mais de 40 é ${qtdNervosos40}`);
console.log(`\nO total de calmos até 18 anos de idade é ${qtdCalmos18}`);