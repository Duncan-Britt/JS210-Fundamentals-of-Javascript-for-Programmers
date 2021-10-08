function slice(array, begin, end) {
  begin = (begin < array.length) ? begin : array.length;
  end = (end < array.length) ? end : array.length;
  let newArray = [];

  for (let i = begin; i < end; i++) {
    newArray.push(array[i])
  }

  return newArray;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

function insertAt(array, index, ...elements) {
  const arrayCopy = Object.assign([], array);

  let i = index;
  let j = 0;
  while (j < elements.length) {
    array[i++] = elements[j++];
  }
  while (index < arrayCopy.length) {
    array[i++] = arrayCopy[index++];
  }
}

function deleteAt(array, index) {
  if (index >= array.length || index < 0) throw 'Index not found.'

  let deleted = array[index];

  while (index < array.length - 1) {
    array[index] = array[index + 1];
    index++;
  }

  array.length--;

  return deleted;
}

const testArray = [1, 2, 3, 4, 5, 6];
deleteAt(testArray, 3);
console.log(testArray);

function splice(array, start, deleteCount, ...elements) {
  const deleted = [];
  let i = start;
  let j = 0;
  let deleteCounter = j;

  while (deleteCounter < deleteCount && deleteCounter < array.length) {
    if (j < elements.length) {
      deleted.push(array[i]);
      array[i++] = elements[deleteCounter++];
      j++
    } else {
      deleteCounter++
      deleted.push(deleteAt(array, i));
    }
  }

  while (j < elements.length) {
    insertAt(array, i++, elements[j++]);
  }

  return deleted;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
