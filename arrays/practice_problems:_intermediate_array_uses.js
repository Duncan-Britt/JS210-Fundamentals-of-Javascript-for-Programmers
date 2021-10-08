let p = message => console.log(message);

function oddElementsOf(arr) {
  let oddElements = [];

  for (let i = 1; i < arr.length; i += 2) {
    oddElements.push(arr[i]);
  }

  return oddElements;
}

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits)  );

function mirror(array) {
  let mirrorArray = [];

  let j = array.length * 2 - 1;
  for (let i = 0; i < array.length; i++) {
    mirrorArray[i] = array[i];
    mirrorArray[j--] = array[i];
  }

  return mirrorArray;
}

// p(mirror([1, 2, 3]));

function sortDescending(arr) {
  return arr.slice(0).sort((e1, e2) => e2 - e1);
}

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function matrixSums(arr) {
  let sums = [];
  arr.forEach(array => {
    let sum = array.reduce((acc, n) => {
      return acc + n;
    }, 0);
    sums.push(sum);
  });
  return sums;
}

// let a = matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]
// console.log(a);

function uniqueElements(arr) {
  let uniqArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqArray.includes(arr[i])) uniqArray.push(arr[i]);
  }
  return uniqArray;
}

let c = uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
p(c);
