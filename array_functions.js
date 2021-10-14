'use strict';

function pop(arr) {
  if (arr.length === 0) return;
  const lastElement = arr[arr.length - 1];
  arr.length -= 1;
  return lastElement;
}

// // pop
// const array1 = [1, 2, 3];
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

function push(arr, ...elements) {
  for (let i = 0; i < elements.length; i++) {
    arr[arr.length] = elements[i];
  }
  return arr.length;
}

// // push
// const array2 = [1, 2, 3];
// console.log(push(array2, 4, 5, 6));              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
// console.log(push([]));                          // 0

function reverse(items) {
  const isArray = Array.isArray(items)
  let result = isArray ? [] : '';
  let i = 0;
  let j = items.length - 1;
  while (j >= 0) {
    if (isArray) {
      result[i] = items[j];
    } else {
      result += items[j];
    }
    i += 1;
    j -= 1;
  }
  return result;
}

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
// console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
// console.log(reverse([]));                // []
//
// const array = [1, 2, 3];
// console.log(reverse(array));             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]

function shift(arr) {
  if (arr.length === 0) return;

  const firstElement = arr[0];
  const newArr = arr.slice(1);
  for (let i = 0; i < newArr.length; i++) {
    arr[i] = newArr[i];
  }
  arr.length -= 1;
  return firstElement;
}

function unshift(arr, ...elements) {
  const arrCopy = arr.slice();
  let i = 0;
  for (; i < elements.length; i++) {
    arr[i] = elements[i];
  }
  for (let j = 0; j < arrCopy.length; j++) {
    arr[i] = arrCopy[j];
    i += 1;
  }
  return arr.length;
}

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
//
// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3
//
// const testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5));           // 3
// console.log(testArray);                       // [5, 2, 3]

function slice(array, begin, end) {
  if (array.length < end) end = array.length;
  const newArr = [];

  for (let i = begin; i < end; i++) {
    push(newArr, array[i]);
  }

  return newArr;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]
//
// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elements) {
  const deletedElements = [];
  let iArray = start;
  let deleteCounter = 0;
  let iElements = 0;
  while (deleteCounter < deleteCount && iElements < elements.length) {
    if (iArray < array.length) push(deletedElements, array[iArray]);
    array[iArray] = elements[iElements];

    iArray += 1;
    deleteCounter += 1;
    iElements += 1;
  }

  if (iElements === elements.length) {
    const remainingDeleteCount = deleteCount - deleteCounter;
    while (deleteCounter < deleteCount) {
      if (iArray < array.length) push(deletedElements, array[iArray]);
      array[iArray] = array[iArray + remainingDeleteCount];

      iArray += 1;
      deleteCounter += 1;
    }

    array.length -= remainingDeleteCount;
  } else {
    const remainingElementCount = elements.length - iElements;
    const copyArray = Object.assign([], array);
    while (iElements < elements.length) {
      array[iArray + remainingElementCount] = copyArray[iArray];
      array[iArray] = elements[iElements];

      iArray += 1;
      iElements += 1;
    }

    while (iArray < copyArray.length) {
      array[iArray + remainingElementCount] = copyArray[iArray];
      iArray += 1;
    }
  }
  return deletedElements;
}

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []
//
// const arr2 = [1, 2, 3];
// console.log(splice(arr2, 1, 1, 'two'));             // [2]
// console.log(arr2);                                  // [1, "two", 3]
//
// const arr3 = [1, 2, 3];
// console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr3);                                  // [1, "two", "three"]
//
// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));               // []
// console.log(arr4);                                  // [1, "a", 2, 3]
//
// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    let count1 = 0;
    let count2 = 0;
    let element = array1[i];

    for (let i = 0; i < array1.length; i++) {
      if (element === array1[i]) count1 += 1;
    }

    for (let i = 0; i < array2.length; i++) {
      if (element === array2[i]) count2 += 1;
    }

    if (count1 !== count2) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])                  === true);
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])                  === true);
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a'])      === true);
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3])                === false);
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1])            === true);
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3])            === false);
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1])            === false);
console.log(areArraysEqual([1, 1, 2], [1, 2, 2])                  === false);
console.log(areArraysEqual([1, 1, 1], [1, 1])                     === false);
console.log(areArraysEqual([1, 1], [1, 1])                        === true);
