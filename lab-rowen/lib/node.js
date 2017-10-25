'use strict';

//not in use currently. I moved this snipped into link.js temporarily.

var Node = module.exports = function(value, next) {
  this.value = value;
  this.next = next || null;

};
