let p = message => console.log(message);

function reverse(inputForReversal) {
  let output = inputForReversal.slice(0, 0);

  let j = 0;
  for (let i = inputForReversal.length - 1; i >= 0; i--) {
    if (Array.isArray(inputForReversal)) {
      output[j++] = inputForReversal[i];
    } else {
      output += inputForReversal[i];
    }
  }

  return output;
}

p(reverse('Hello'));           // "olleH"
p(reverse('a'));               // "a"
p(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
p(reverse([]));                // []

const array = [1, 2, 3];
p(reverse(array));             // [3, 2, 1]
p(array);                      // [1, 2, 3]
