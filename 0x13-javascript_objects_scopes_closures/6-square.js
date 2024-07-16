#!/usr/bin/node
const SquarePrime = require('./5-square');

module.exports = class Square extends SquarePrime {
  charPrint (c = 'X') {
    for (let i = 0; i < this.width; i++) {
      console.log(c.repeat(this.width));
    }
  }
}
