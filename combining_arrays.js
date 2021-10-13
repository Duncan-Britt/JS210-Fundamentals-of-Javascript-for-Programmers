'use strict';

function union(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    if (!(result.includes(array1[i]))) result.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    if (!(result.includes(array2[i]))) result.push(array2[i]);
  }

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
