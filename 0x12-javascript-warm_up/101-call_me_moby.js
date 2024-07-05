#!/usr/bin/node
export.callMeMoby = function (x, funct) {
  for (let i = x; i > 0; i--) {
    funct();
  }
}
