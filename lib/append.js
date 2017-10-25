'use strict';

const list = require ('./list.js');
const node = require ('./node.js');

list.prototype.append = module.exports = function(value){
  if (this.head === null){
    return this.head = new node(value);
  }

  let main = this.head;
  while(main.next !== null){
    main = main.next;
  }

  main.next = new node(value);
};
