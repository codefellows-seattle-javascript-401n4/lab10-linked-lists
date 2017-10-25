'use strict';

const node = module.exports = function(value, next){
  this.value = value;
  this.next = next;
};
