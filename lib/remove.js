'use strict';

const list = require('./list.js');

list.protoype.remove = function(index){
  if(index === 0){
    return this.head = this.head.next;
  }

  let current = this.head;
  for(let i = 0; i < (index - 1); i++){
    if(current.next === null){
      return;
      current = current.next;
  };

    current.next = current.next.next;
};
//Big 0 : 0(n)
