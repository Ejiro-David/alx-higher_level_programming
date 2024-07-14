#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let i = this.width;
    let j = this.height;
    let result = '';
	  while (i > 0) {
      result += 'X';
      i--;
    }
    while (j > 0) {
      console.log(result);
      j--;
    }
  }

  rotate () {
    this.width = this.height;
    this.height = this.width;
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
