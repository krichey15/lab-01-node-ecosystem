'use strict';

const greet = require(__dirname + '/lib/greet.js');
const arithmetic = require(__dirname + '/lib/arithmetic.js');

console.log(greet('Kyle'));
console.log(greet());
console.log(arithmetic.add(2, 2));
console.log(arithmetic.subtract(4, 1));
