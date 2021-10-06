function numSuffix(n) {
  n = n.toString();
  const last2Chars = n.substring(n.length -2, n.length);

  if (last2Chars === '11' || last2Chars === '12' || last2Chars === '13')
    return 'th';

    const lastChar = n[n.length - 1];
  switch (lastChar) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default: return 'th';
  }
}

function century(year) {
  const centuryNum = Math.floor((year - 1) / 100) + 1;

  return centuryNum.toString() + numSuffix(centuryNum);
}

console.log(century(2000)        === "20th");
console.log(century(2001)        === "21st");
console.log(century(1965)        === "20th");
console.log(century(256)         === "3rd");
console.log(century(5)           === "1st");
console.log(century(10103)       === "102nd");
console.log(century(1052)        === "11th");
console.log(century(1127)        === "12th");
console.log(century(11201)       === "113th");
