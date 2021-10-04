// function factorial(n) {
//   let r = 1
//   for (var i = 1; i <= n; ++i) {
//     r *= i
//   }
//   return r
// }

// function factorial(n, r = 1, i = 1) {
//   if (i > n) return r;
//
//   r *= i;
//   return factorial(n, r, ++i);
// }

function factorial(n) {
  if (n === 1) return n;
  
  return n * factorial(n - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
