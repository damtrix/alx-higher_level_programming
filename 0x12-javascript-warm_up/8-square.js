#!/usr/bin/node

const x = parseInt(process.argv[2]);

if (parseInt(process.argv[2])) {
  for (let i = 0; i < x; i++) {
    let character = '';
    for (let j = 0; j < x; j++) {
      character = character + 'X';
    }
    console.log(character);
  }
} else {
  console.log('Missing size');
}
