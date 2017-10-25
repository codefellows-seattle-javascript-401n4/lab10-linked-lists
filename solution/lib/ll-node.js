'use strict';

var LLNode = module.exports = function(value, nextNode) {
  this.value = value;
  this.next = nextNode || null;
};
