'use strict';

const list = require('./list.js');
const node = require('./node.js');

list.prototype.prepend = module.exports = function(value){
  if(this.head === null){
    value.next = this.head;
    return this.head = value;
  }

  this.head = new Node(value, this.head);
};
//big 0 : 0(1)
