function cleanUp(string) {
  const regex = new RegExp(/[a-z]/i);
  let cleanString = '';

  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      cleanString += string[i];
    } else if (regex.test(string[i + 1])) {
      cleanString += ' ';
    }
  }

  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));
console.log(cleanUp("---what's my +*& line?")    === " what s my line ");
