'use strict';

const LinkedList = require('./linked-list.js');
const Node = require('./node.js');

//Big O: O(n)

LinkedList.prototype.append = module.exports = function(value){
  if(this.head === null){
    return this.head = new Node(value);
  }

  let current = this.head;
  while(current.next !== null){
    current = current.next;
  }

  current.next = new Node(value);

};
