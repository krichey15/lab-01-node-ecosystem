'use strict';

const greet = require("../lib/greet.js");
const expect = require("expect");

describe("Greet", function() {
    
    it("returns null when no name is specified", function() {
            
        let result = greet();
        expect(result).toBe(null);
          
    });
    
    it("greets the person with the name specified", function() {
            
        let result = greet("John");
        expect(result).toBe("Hello John");
          
    });
        
});