'use strict';

module.exports = (name) => {

  return typeof name === 'string' ? `Hello ${name}` : null;

};
