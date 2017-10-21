'use strict';

const LinkedList = require('./linked-list.js');

//Big O:  O(n^2)

LinkedList.prototype.reverse = module.exports = function(){
  if(this.head === null){
    return console.log('Empty list.  Nothing to do here.');
  }

  let newList = new LinkedList();
  let listLength = 1;
  let current = this.head;

  while(current.next !== null){
    current = current.next;
    listLength++;
  }

  let counter = listLength;

  for(let i = 0; i < listLength; i++){

    let target = this.head;
    while(target.next !== null){
      target = target.next;
    }

    newList.append(target.value);
    this.remove( (counter - 1) );
    counter--;

  }

  console.log(newList);
  return newList;

};
