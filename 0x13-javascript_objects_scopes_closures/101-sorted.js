#!/usr/bin/node
const dict = require('./101-data').dict;
let tempValArr = Object.values(dict);
let uniqueValArr = [...new Set(tempValArr)];
let newDict = uniqueValArr.reduce((acc, curr, ind) => {
  acc[curr] = [];
  return acc;
}, {});


for(let i = 1; i <= uniqueValArr.length; i++) {
  for (let [key, value] of Object.entries(dict)) {
    if (value === i) {
      newDict[i].push(key);
    }
  }
}

console.log(newDict);
