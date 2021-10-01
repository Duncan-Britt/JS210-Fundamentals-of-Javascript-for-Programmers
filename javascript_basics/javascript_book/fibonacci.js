// function fibonacci(number) {
//   if (number < 2) return number;
//   return fibonacci(number - 1) + fibonacci(number - 2);
// }
//
// console.log(fibonacci(6));
// console.log(fibonacci(20));

function fibonacci(counter, sequence = [0, 1]) {
  if (counter === 1) return [0]
  if (counter === 2) return sequence

  sequence.push(
    sequence[sequence.length - 1] + sequence[sequence.length - 2]
  )

  return fibonacci(--counter, sequence);
}

for (let i = 1; i < 10; ++i) {
  console.log(fibonacci(i).join(' '), '\n');
}
