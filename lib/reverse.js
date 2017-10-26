'use strict';

const list = require('./list.js');

let list.prototype.reverse = function(){
  let tempList = new list();
  let current = this.head;
  while(current !== null){
    tempList.prepend(current);
    current = current.next;
  };

  this.head = tempList.head;
};

//Big 0 : 0(n2)
//Can you give me an example of why we would use 'reverse'?
