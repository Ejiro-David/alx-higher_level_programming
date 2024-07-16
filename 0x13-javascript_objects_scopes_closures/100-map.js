#!/usr/bin/node
const list = require('./100-data');
let newArr = list.list.map((num, ind) => num * ind)
console.log(list.list);
console.log(newArr);
