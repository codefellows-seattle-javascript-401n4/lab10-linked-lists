'use strict';

var LinkedListNode = module.exports = function(value, nextNode) {
  this.value = value;
  this.next = nextNode || null;
};
