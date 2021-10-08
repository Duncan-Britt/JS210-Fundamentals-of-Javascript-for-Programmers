function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A'])  ===  "U");

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A']) === "A");

function nthElementOf(arr, index) {
  return arr[index]
}

// let digits = [4, 8, 15, 16, 23, 42];
//
// console.log(nthElementOf(digits, 3)   === 16);
// console.log(nthElementOf(digits, 8));
// console.log(nthElementOf(digits, -1));
//
// digits[-1] = -42;
// console.log(nthElementOf(digits, -1));
// console.log(digits[-1]);
// console.log(digits['-1']);

function firstNOf(arr, count) {
  let newArray = [];

  for (let i = 0; i < count; i++) {
    newArray[i] = arr[i];
  }

  return newArray;
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

function lastNOf(arr, count) {
  if (count <= arr.length) return arr.slice(arr.length - count);

  return Object.assign([], arr);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
//
// console.log(lastNOf(digits, 7));

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
