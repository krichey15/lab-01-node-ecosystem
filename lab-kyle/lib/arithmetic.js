'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a,b){
    return a+b;
};

arithmetic.subtract = (a,b) => a-b;

arithmetic.multiply = (a,b) => { return a*b; };