function isNotAlphabetical(character) {
  return /[^a-z]/i.test(character);
}
function isUpperCase(character) {
  return /[A-Z]/.test(character);
}

function rot13(text) {
  const UPPERCASE_CHAR_CODE = 65;
  const LOWERCASE_CHAR_CODE = 97;
  const ROTATION = 13;
  const ALPHABET_SIZE = 26;

  let rotated_text = '';

  for (let index = 0; index < text.length; index++) {
    let character = text[index];
    if (isNotAlphabetical(character)) {
      rotated_text += character;
      continue;
    }

    let conversion;
    if (isUpperCase(character)) {
      conversion = UPPERCASE_CHAR_CODE;
    } else {
      conversion = LOWERCASE_CHAR_CODE;
    }

    let charCode = text.charCodeAt(index); // ASCII Numeric
    charCode -= conversion;
    charCode += ROTATION;
    charCode %= ALPHABET_SIZE;
    charCode += conversion;
    rotated_text += String.fromCharCode(charCode);
  }

  return rotated_text;
}

console.log(
  rot13('Teachers open the door, but you must enter by yourself.') ===
  'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'
);
