#!/usr/bin/node
const fs = require('fs');

const F1 = fs.readFileSync(process.argv[2].toString());
const F2 = fs.readFileSync(process.argv[3].toString());
fs.writeFileSync(process.argv[4], F1 + F2);
