#!/usr/bin/node
function addUp (a, b) {
  return (Number(a) + Number(b));
}
console.log(addUp(process.argv[2], process.argv[3]));
