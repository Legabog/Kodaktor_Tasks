const { writeFileSync: w, readFileSync: r } = require('fs');

const { publicEncrypt: enc } = require('crypto');

const b = r('./index.js');
const publicKey = String(r('./key'));

const result = enc(publicKey, b);
w('secret2e', result);
