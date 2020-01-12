let c = require('crypto'),
  fs = require('fs'),
  pK = fs.readFileSync('key').toString(),
  sD = fs.readFileSync('secret'),
  oD = c.publicDecrypt(pK, sD);
console.log(oD.toString());