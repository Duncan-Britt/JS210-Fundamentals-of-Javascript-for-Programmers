function indexOf(firstString, secondString) {
  let regex = new RegExp(secondString);
  return regex[Symbol.search](firstString);
}

function indexOf(firstString, secondString) {
  for (let i = 0; i < firstString.length - secondString.length + 1; i++) {
    let match;
    if (firstString[i] === secondString[0]) {
      match = true;
      let k = 0;

      for (let j = i; j < i + secondString.length; j++) {
        if (firstString[j] !== secondString[k]) {
          match = false;
          break;
        }
        k++;
      }
    }

    if (match) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let regex = new RegExp(secondString, "g");
  regex.test(firstString)
  let indeces = [];
  do {
    indeces.push(regex.lastIndex);
    regex.test(firstString)
  } while (!indeces.includes(regex.lastIndex))
  maxIndex = Math.max(...indeces);

  if (maxIndex === 0) return -1;

  return maxIndex - secondString.length;
}

function lastIndexOf(firstString, secondString) {
  for (let i = firstString.length - 1; i >= secondString.length - 1; i--) {
    let match;
    let j;
    if (firstString[i] === secondString[secondString.length - 1]) {
      match = true;
      let k = secondString.length - 1;

      for (j = i; j > i - secondString.length; j--) {
        if (firstString[j] !== secondString[k]) {
          match = false;
          break;
        }
        k--;
      }
    }

    if (match) {
      return j + 1;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's')                      == 5);
console.log(indexOf('Blue Whale', 'Whale')                    == 5);
console.log(indexOf('Blue Whale', 'Blute')                    == -1);
console.log(indexOf('Blue Whale', 'leB')                      == -1);

console.log(lastIndexOf('Some strings', 's')                  == 11);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale')  == 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all')    == -1);
