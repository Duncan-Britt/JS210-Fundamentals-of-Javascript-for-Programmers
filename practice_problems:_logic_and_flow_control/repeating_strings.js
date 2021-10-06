function isPositiveNumber(n) {
  if (typeof n !== 'number') return false;
  if (n < 0) return false;
  return true;
}

let repeat = function repeat(string, times) {
  if (!isPositiveNumber(times)) return undefined;

  let result = ''
  for (let counter = 1; counter <= times; counter++) {
    result += string;
  }
  
  return result;
}

console.log(repeat('abc', 1)       === "abc");
console.log(repeat('abc', 2)       === "abcabc");
console.log(repeat('abc', -1)      === undefined);
console.log(repeat('abc', 0)       === "");
console.log(repeat('abc', 'a')     === undefined);
console.log(repeat('abc', false)   === undefined);
console.log(repeat('abc', null)    === undefined);
console.log(repeat('abc', '  ')    === undefined);
