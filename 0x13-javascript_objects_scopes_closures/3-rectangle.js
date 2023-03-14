#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      let character = '';
      for (let j = 0; j < this.width; j++) {
        character += 'X';
      }
      console.log(character);
    }
  }
}

module.exports = Rectangle;
