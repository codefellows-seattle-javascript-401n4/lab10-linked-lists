'use strict';

const list = require ('./list.js');
const node = require ('./node.js');

list.prototype.append = function(value){
  if (this.head === null){
    return this.head = new node(value);
  }

  let current = this.head;
  while(current.next !== null)
  current = current.next;
  }

  current.next = new node(value);
};
//Big 0 : 0(n)
