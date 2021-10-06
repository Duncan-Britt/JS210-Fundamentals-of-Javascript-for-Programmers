function substring(string, start, end) {
  if (typeof end === 'undefined') end = string.length;
  if (start > end) {
    let prevStart = start;
    start = end;
    end = prevStart;
  }
  if (start < 0 || isNaN(start)) start = 0;
  if (end < 0 || isNaN(end)) end = 0;

  let result = '';
  for (let i = start; i < end && i < string.length; i++) {
    result += string[i];
  }

  return result;
}

let string = 'hello world';

console.log(substring(string, 2, 4)    === "ll");
console.log(substring(string, 4, 2)    === "ll");
console.log(substring(string, 0, -1)   === "");
console.log(substring(string, 2)       === "llo world");
console.log(substring(string, 'a')     === "hello world");
console.log(substring(string, 8, 20)   === "rld");
