'use strict';

module.exports = function(value, next){
  if (arguments.length === 0) {
    throw new Error('need a value')
  }
  this.value = value;
  this.next = next || null;
};
