'use strict';

console.log("test")

module.exports = function(name) {
    return foo() + name;
}

function foo(){
    return "Hi ";
}