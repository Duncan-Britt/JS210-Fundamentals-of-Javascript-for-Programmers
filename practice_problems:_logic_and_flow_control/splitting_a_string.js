function splitString(string, delimiter) {
  if (delimiter === '') {
    for (let i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
    return;
  }
  if (!delimiter) {
    console.log('Error: No delimiter');
    return;
  }

  let text = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(text);
      if (i === string.length - 1) return;
      text = '';
    } else {
      text += string[i];
    }
  }
  console.log(text);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
