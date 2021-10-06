
function slice(array, startIdx, endIdx) {
  let newArray = [];

  let j = 0;
  for (let i = startIdx; i < endIdx; i++) {
    newArray[j] = array[i];
    j++;
  }

  return newArray;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));

function splice(array, startIdx, numberToRemove) {
  let removedValues = []
  let j = startIdx;

  for (let i = 0; i < numberToRemove; i++) {
    removedValues[i] = array[j];
    array[j] = array[j + i + 1];
  }

  array.length -= numberToRemove;
  return removedValues;
}

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

function concat(array1, array2) {
  let newArray = [];
  let i = 0;
  for (; i < array1.length; i++) {
    newArray[i] = array1[i];
  }

  for (let j = 0; j < array2.length; j++) {
    newArray[i++] = array2[j];
  }

  return newArray;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));


function join(array, deliminator) {
  let result = '';

  let i = 0;
  for (; i < array.length - 1; i++) {
    result += array[i] + deliminator;
  }

  return result + array[i];
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
