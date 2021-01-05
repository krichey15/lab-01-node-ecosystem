'use strict';

const arithmetic = require("../lab-kyle/lib/arithmetic");
const expect = require("expect");

describe("arithmetic", function(){
    
    it("can add 2 numbers properly", function(){

        let result = arithmetic.add(1,4);
        expect(result).toEqual(5);
    });

    it("properly handles a string", function(){

        let result = arithmetic.add("foo",4);
        expect(result).toEqual(5);
    });

});