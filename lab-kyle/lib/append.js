'use strict';

const Element = require('./element.js');
const LinkedList = require('./linkedlist.js');

LinkedList.prototype.append = module.exports = function (value) {
  if (this.head === null) {
    return this.head = new Element(value);
  }

  let currentP = this.head;

  while(currentP.next !== null){
    currentP = currentP.next;
  }

  currentP.next = new Element(value);

};
//O(n)
