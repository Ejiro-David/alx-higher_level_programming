#!/usr/bin/node
function factorial(n) {
  if (Number(n) <= 1 || isNaN(n)) {
    return 1;
} else {
    return n * factorial (n - 1);
  }
}
console.log(factorial(process.argv[2]));

