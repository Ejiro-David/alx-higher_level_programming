#!/usr/bin/node
if (process.argv.length < 4) {
  console.log(0);
} else {
  let arr = [];
  let arrCopy = [];
  let maxNum = 0;

  for (let i = 2; i < process.argv.length; i++) {
    arr.push(process.argv[i]);
  }
  maxNum = Math.max(...arr);
  arrCopy = arr.filter((item) => item != maxNum);
  console.log(Math.max(...arrCopy));
}
