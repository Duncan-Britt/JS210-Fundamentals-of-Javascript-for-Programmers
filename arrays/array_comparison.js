function areArraysEqual(array1, array2) {
  if (array1.length !== array1.length) return false;

  let array1Dup = array1.slice(0);
  let array2Dup = array2.slice(0);
  array1Dup.sort();
  array2Dup.sort();
  for (let i = 0; i < array1.length; i++) {
    if (array1Dup[i] !== array2Dup[i]) return false;
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
