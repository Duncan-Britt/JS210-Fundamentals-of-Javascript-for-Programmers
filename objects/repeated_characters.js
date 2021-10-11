function repeatedCharacters(string) {
  string = string.toLowerCase();
  let result = {};

  let previousCharacters = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (previousCharacters.includes(char)) {

      if (Object.keys(result).includes(char))
        result[char]++;
      else
        result[char] = 2;

    } else {
      previousCharacters += char;
    }
  }

  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
