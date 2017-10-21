'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

//Big O: O(1)

LinkedList.prototype.prepend = module.exports = function(value){
  if(this.head === null){
    return this.head = new Node(value);
  }

  let currentHead = this.head;

  this.head = new Node(value, currentHead);
};
