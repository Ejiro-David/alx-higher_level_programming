#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  const listArr = list;
  const item = searchElement;
  let tab = 0;
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i] === item) {
      tab++;
    }
  }
  return tab;
};
