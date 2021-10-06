function isDouble(n) {
  n = n.toString();
  let mid = n.length / 2
  let leftHalf = n.substring(0, mid);
  let rightHalf = n.substring(mid, n.length);
  return leftHalf === rightHalf;
}

function twice(n) {
  if (isDouble(n)) return n;

  return n * 2;
}

console.log(twice(37)          === 74);
console.log(twice(44)          === 44);
console.log(twice(334433)      === 668866);
console.log(twice(444)         === 888);
console.log(twice(107)         === 214);
console.log(twice(103103)      === 103103);
console.log(twice(3333)        === 3333);
console.log(twice(7676)        === 7676);
