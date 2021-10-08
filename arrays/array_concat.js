let p = message => console.log(message);

// function concat(array1, secondArgument) {
//   let newArray = Object.assign([], array1);
//
//   if (Array.isArray(secondArgument)) {
//     for(let i = 0; i < secondArgument.length; i++) {
//       newArray.push(secondArgument[i]);
//     }
//   } else {
//     newArray.push(secondArgument);
//   }
//
//   return newArray;
// }

// p(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
// p(concat([1, 2], 3));                     // [1, 2, 3]
// p(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
// p(concat([2, 3], 'four'));                // [2, 3, "four"]

//
// const obj = { a: 2, b: 3 };
// const newArray = concat([2, 3], obj);
// p(newArray);                              // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// p(newArray);                              // [2, 3, { a: "two", b: 3 }]
//
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, obj];
// const arr3 = concat(arr1, arr2);
// p(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// p(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]
//
// arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
// p(obj);                                   // { a: "two", b: 3 }

function concat(array1, ...arguments) {
  let newArray = Object.assign([], array1);

  arguments.forEach(argument => {
    if (Array.isArray(argument)) {
      for(let i = 0; i < argument.length; i++) {
        newArray.push(argument[i]);
      }
    } else {
      newArray.push(argument);
    }
  });

  return newArray;
}

p(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
p(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
p(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
