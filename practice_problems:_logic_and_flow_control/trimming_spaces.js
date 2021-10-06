function trim(string) {
  let lstrip = '';
  let index = 0

  let toggle = true;
  while (index < string.length) {
    if (string[index] === ' ' && toggle) {
      index++
      continue;
    }
    toggle = false;
    lstrip += string[index]
    index++
  }

  let rstrip = '';
  toggle = true;
  index = lstrip.length - 1;
  while (index >= 0) {
    if (lstrip[index] === ' ' && toggle) {
      index--;
      continue;
    }
    toggle = false;
    rstrip = lstrip[index] + rstrip
    index--;
  }

  return rstrip;
}

console.log(trim('  abc  ')  === "abc");
console.log(trim('abc   ')   === "abc");
console.log(trim(' ab c')    === "ab c");
console.log(trim(' a b  c')  === "a b  c");
console.log(trim('      ')   === "");
console.log(trim('')         === "");
