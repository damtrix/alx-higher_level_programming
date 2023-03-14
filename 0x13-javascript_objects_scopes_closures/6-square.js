#!/usr/bin/node

const Sq = require('./5-square');

class Square extends Sq {
  charPrint (c) {
    const myC = c === undefined ? 'X' : c;
    for (let i = 0; i < this.height; i++) {
      let character = '';
      for (let j = 0; j < this.width; j++) {
        character += myC;
      }
      console.log(character);
    }
  }
}

module.exports = Square;
