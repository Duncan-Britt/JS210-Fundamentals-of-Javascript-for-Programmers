function greetings(fullname, info) {
  fullname = fullname.join(' ');
  console.log(`Hello, ${fullname}! Nice to have a ${info.title} ${info.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
