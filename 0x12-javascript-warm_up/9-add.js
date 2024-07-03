#!/usr/bin/node
function addUp(a, b) {
  console.log(Number(a) + Number(b));
}

return addUp(process.argv[2],  process.argv[3]);
