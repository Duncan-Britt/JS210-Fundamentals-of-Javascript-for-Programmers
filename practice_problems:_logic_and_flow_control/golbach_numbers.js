function checkGoldbach(expectedSum) {
  let primePairs = [];
  let primes = sieveOfEratosthenes(expectedSum);
  let stop = primes.length / 2 - 1;
  let previous = [];

  for (let i = primes.length - 1; i >= stop; i--) {
    let difference = expectedSum - primes[i];
    if (previous.includes(primes[i])) break;
    if (primes.includes(difference)) {
      primePairs.push([primes[i], difference]);
      previous.push(difference);
    }
  }

  primePairs.forEach(pair => console.log(pair[0], pair[1]));
}

function sieveOfEratosthenes(n) {
   let prime = Array.from({length: n+1}, (_, i) => true);

  for (let p = 2; p * p <= n; p++) {
    if (prime[p] === true) {
      for (i = p * p; i <= n; i += p) {
        prime[i] = false;
      }
    }
  }

  primesUpToN = []

  for (i = 2; i <= n; i++) {
    if (prime[i] === true) primesUpToN.push(i);
  }

  return primesUpToN;
}


// for (let i = 0; i < 101; i+= 2) {
//   console.log("Number: " + i);
//   checkGoldbach(i);
// }

checkGoldbach(500000);
