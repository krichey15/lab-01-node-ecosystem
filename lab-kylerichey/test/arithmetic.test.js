'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe('arithmetic', function(){

  it('returns null if either number is NaN', function(){

    let result = arithmetic.add('five', 5);
    expect(result).toBe(null);

  });

  it('returns the sum when both arguments are numbers', function (){

    let result = arithmetic.add(5,5);
    expect(result).toBe(10);

  });

  it('returns null if either number is NaN', function(){

    let result = arithmetic.subtract('six', 5);
    expect(result).toBe(null);

  });

  it('returns the difference when both arguments are numbers', function (){

    let result = arithmetic.subtract(6,5);
    expect(result).toBe(1);

  });
});
