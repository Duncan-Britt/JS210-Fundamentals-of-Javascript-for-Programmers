rlSync = require('readline-sync');

const AGE = Number(rlSync.question('How old are you? '));

function futureAge(age, yearsAhead) {
  return `In ${yearsAhead} years, you will be ${age + yearsAhead} years old.`
}

console.log(`You are ${AGE} years old.`)
for (let i = 10; i <= 40; i += 10) {
  console.log(futureAge(AGE, i));
}
// console.log(futureAge(AGE, 10));
// console.log(futureAge(AGE, 20));
// console.log(futureAge(AGE, 30));
// console.log(futureAge(AGE, 40));
