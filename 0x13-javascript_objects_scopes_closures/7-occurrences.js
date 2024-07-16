#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let listArr = list;
  let item = searchElement;
  let tab = 0;
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i] === item){
      tab++;
    }
  }
  return tab;
}
