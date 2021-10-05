function generatePattern(nStars) {
  let totalLength = '';
  for (let i = 1; i <= nStars; i++) {
    totalLength += i;
  }

  totalLength = totalLength.length

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    for (let count = string.length + 1; count <= totalLength; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}

generatePattern(30);
