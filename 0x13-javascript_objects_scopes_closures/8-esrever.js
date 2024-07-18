#!/usr/bin/node
exports.esrever = function (list) {
  const rvsrdArr = [];
  for (let i = (list.length - 1); i > -1; i--) {
    rvsrdArr.push(list[i]);
  }
  return rvsrdArr;
};
