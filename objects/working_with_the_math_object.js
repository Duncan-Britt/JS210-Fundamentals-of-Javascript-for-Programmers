function radiansToDegrees(radians) {
  return radians * 180 / Math.PI
}

let num = -180;
num = -(Math.abs(num));
// console.log(num);

// console.log(Math.sqrt(16777216));

// console.log(Math.pow(16, 6));

let a = 50.72;
let b = 49.2;
let c = 49.86;

// console.log(Math.floor(a), Math.ceil(b), Math.round(c));

function randomNumberBetween(min, max) {
  if (min > max) [min, max] = [max, min]
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumberBetween(100, 110));
console.log(randomNumberBetween(10, 1));
