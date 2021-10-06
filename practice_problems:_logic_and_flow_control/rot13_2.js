function isNotAlphabetical(character) {
  return /[^a-z]/i.test(character);
}
function isUpperCase(character) {
  return /[A-Z]/.test(character);
}

function eachChar(string, callback) {
  for (let index = 0; index < string.length; index++) {
    callback(string[index]);
  }
}

function rot13(text) {
  const UPPERCASE_CHAR_CODE = 65;
  const LOWERCASE_CHAR_CODE = 97;
  const ROTATION = 13;
  const ALPHABET_SIZE = 26;

  let rotated_text = '';

  eachChar(text, char => {
    if (isNotAlphabetical(char)) {
      rotated_text += char;
      return;
    }

    let conversion;
    if (isUpperCase(char)) {
      conversion = UPPERCASE_CHAR_CODE;
    } else {
      conversion = LOWERCASE_CHAR_CODE;
    }

    let charCode = char.charCodeAt(0); // ASCII Numeric
    charCode -= conversion;
    charCode += ROTATION;
    charCode %= ALPHABET_SIZE;
    charCode += conversion;
    rotated_text += String.fromCharCode(charCode);
  });

  return rotated_text;
}

console.log(
  rot13('Teachers open the door, but you must enter by yourself.') ===
  'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'
);
