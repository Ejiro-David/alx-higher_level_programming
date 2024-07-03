#!/usr/bin/node
if (isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  let i = process.argv[2];
  let j = process.argv[2];
  let result = '';
  while (j > 0) {
    result += 'X';
    j--;
  }
  while (i > 0) {
    console.log(result);
    i--;
  }
}
