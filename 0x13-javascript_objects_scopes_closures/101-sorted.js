#!/usr/bin/node
const dict = require('./101-data').dict;
const tempValArr = Object.values(dict);
const uniqueValArr = [...new Set(tempValArr)];
const newDict = uniqueValArr.reduce((acc, curr, ind) => {
  acc[curr] = [];
  return acc;
}, {});

for (let i = 1; i <= uniqueValArr.length; i++) {
  for (const [key, value] of Object.entries(dict)) {
    if (value === i) {
      newDict[i].push(key);
    }
  }
}

console.log(newDict);
