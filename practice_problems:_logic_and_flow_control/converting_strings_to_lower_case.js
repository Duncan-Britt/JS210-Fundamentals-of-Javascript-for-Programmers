function isCapitalLetter(char) {
  const ASCII_A = 65;
  const ASCII_Z = 90;
  let asciiNumeric = char.charCodeAt(0);
  return asciiNumeric >= ASCII_A && asciiNumeric <= ASCII_Z
}

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (isCapitalLetter(string[i])) {
      let asciiNumeric = string.charCodeAt(i);
      asciiNumeric += CONVERSION_OFFSET;
      let lowerCaseChar = String.fromCharCode(asciiNumeric);
      result += lowerCaseChar;
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET')    === "alphabet");
console.log(toLowerCase('123')         === "123");
console.log(toLowerCase('abcDEF')      === "abcdef");
