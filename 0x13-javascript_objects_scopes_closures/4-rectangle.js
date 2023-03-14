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

  rotate() {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double() {
    this.width = 2 * this.width;
    this.height = 2 * this.height;
  }
}

module.exports = Rectangle;
