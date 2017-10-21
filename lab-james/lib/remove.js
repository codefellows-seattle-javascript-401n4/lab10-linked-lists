'use strict';

const LinkedList = require('./linked-list.js');

//Big O: O(n)

LinkedList.prototype.remove = module.exports = function(index){
  if(index === 0){
    return this.head = this.head.next;
  }

  let current = this.head;
  for(let i = 0; i < index - 1; i++){
    if(current.next === null){
      return console.log('Error! Index greater than length of list!');
    }
    current = current.next;
  }

  current.next = current.next.next;
};
