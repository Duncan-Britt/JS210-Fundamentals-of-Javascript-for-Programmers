function objectHasProperty(object, string) {
  if (string in object) return true;
  return false
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// console.log(objectHasProperty(pets, 'dog')       === true);
// console.log(objectHasProperty(pets, 'lizard')    === false);
// console.log(objectHasProperty(pets, 'mice')      === true);

function incrementProperty(object, string) {
  if (string in object) return object[string] += 1;
  return object[string] = 1;
}

let wins = {
  steve: 3,
  susie: 4,
};

// console.log(incrementProperty(wins, 'susie')   === 5);
// console.log(wins);                           // { steve: 3, susie: 5 });
// console.log(incrementProperty(wins, 'lucy')    === 1);
// console.log(wins);                               //  { steve: 3, susie: 5, lucy: 1 });

function copyProperties(object1, object2) {
  let nProperties = 0;

  for (let key in object1) {
    object2[key] = object1[key]
    nProperties++;
  }

  return nProperties;
}

// let hal = {
//   model: 9000,
//   enabled: true,
// };
//
// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

function wordCount(string) {
  let words = string.split(' ');
  let uniqueWords = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (word in uniqueWords) {
      uniqueWords[word]++;
    } else {
      uniqueWords[word] = 1;
    }
  }

  return uniqueWords;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
