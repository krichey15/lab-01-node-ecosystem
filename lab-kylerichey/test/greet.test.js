'use strict';

const expect = require('expect');
const greet = require(__dirname + '/lib/greet.js');

describe('greet', function (){

  it('returns null when no name is given', function (){

    let result = greet();
    expect(result).toBe(null);

  });

  it('will greet with name or word that was given', function (){

    let result = greet('Kyle');
    expect(result).toBe('Hello Kyle');

  });

});
