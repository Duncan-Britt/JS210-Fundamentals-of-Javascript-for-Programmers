rlSync = require('readline-sync');

console.log(`Hello, ${getName('first')} ${getName('last')}!`);

function getName(firstOrLast) {
  return rlSync.question(`What's your ${firstOrLast} name? `);
}

// console.log(`Hello, ${getName(rlSync.question, 'first')} ${getName(rlSync.question, 'last')}!`);
//
// function getName(prompt, firstOrLast) {
//   return prompt(`What's your ${firstOrLast} name? `);
// }
