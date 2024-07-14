#!/usr/bin/node
const SquarePrime = require('./5-square');

module.exports = class Square extends SquarePrime {
constructor (size) {
    super(size, size);
  }


  charPrint(c='X') {
    let i = this.size;
    let j = this.size;
    let result = '';
	  while (i > 0) {
      result += c;
      i--;
    }
    while (j > 0) {
      console.log(result);
      j--;
    }
  }
}
