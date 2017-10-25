'use strict';

const Element = require('./element.js');
const LinkedList = require('./linkedlist.js');

LinkedList.prototype.prepend = module.exports = function (value) {
  let oldHead = this.head;
  this.head = new Element(value, oldHead);

};
//O(1)
