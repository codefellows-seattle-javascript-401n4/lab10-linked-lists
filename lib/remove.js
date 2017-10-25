'use strict';

const list = require('./list.js');

list.protoype.remove = module.exports = function(index){
  if(index === 0){
    return this.head = this.head.next;
  }

  let current = this.head;
  for(let i = 0; i < index - 1; i++){
    if(current.next === null){
      console.log(null);
    }
    current = current.next;
  }
    current.next = current.next.next;
};
//Big 0 : 0(n)
