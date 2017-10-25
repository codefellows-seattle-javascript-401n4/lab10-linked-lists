'use strict';

const Element = require('./element.js');
const LinkedList = require('./linkedlist.js');

LinkedList.prototype.remove = module.exports = function(value) {
  if(!this.head){
    throw new Error('Nothing to remove.');
  }

  if(this.head.value === value){
    this.head = this.head.next;
  } else {
    let positionOne = this.head;
    let postitionTwo = positionOne.next;

    while (postitionTwo){
      if(postitionTwo.value === value){
        positionOne.next = postitionTwo.next;
        break;
      } else {
        positionOne = postitionTwo;
      }
      postitionTwo = postitionTwo.next;
    }
  }

};

//O(n)
