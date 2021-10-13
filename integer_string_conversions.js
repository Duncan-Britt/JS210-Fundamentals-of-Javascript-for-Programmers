'use strict';

function stringToInteger(numberString) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0;
  let multiplier = 1;
  let index = numberString.length - 1;
  while (index >= 0) {
    result += digits[numberString[index]] * multiplier;
    multiplier *= 10;
    index -= 1;
  }
  return result;
}

console.log(stringToInteger('4321')      === 4321);
console.log(stringToInteger('570')       === 570);

function stringToSignedInteger(numberString) {
  if (numberString[0] === '-') {
    return -(stringToInteger(numberString.slice(1)))
  } else if (numberString[0] === '+') {
    return stringToInteger(numberString.slice(1));
  } else {
    return stringToInteger(numberString);
  }
}

console.log(stringToSignedInteger('4321')      === 4321);
console.log(stringToSignedInteger('-570')      === -570);
console.log(stringToSignedInteger('+100')      === 100);

function integerToString(int) {
  if (int < 0) int = -int;
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  let divider = 10;
  for (; int > divider;) {
    const index = Math.floor((int % divider) / (divider / 10));
    result = digits[index] + result;
    divider *= 10;
  }
  const index = Math.floor((int % divider) / (divider / 10));
  result = digits[index] + result;
  return result;
}

console.log(integerToString(4321)      === "4321");
console.log(integerToString(0)         === "0");
console.log(integerToString(5000)      === "5000");

function signedIntegerToString(int) {
  if (int > 0) {
    return '+' + integerToString(int);
  } else if (int < 0){
    return '-' + integerToString(int);
  } else {
    return integerToString(int);
  }
}

console.log(signedIntegerToString(4321)      === "+4321");
console.log(signedIntegerToString(-123)      === "-123");
console.log(signedIntegerToString(0)         === "0");
