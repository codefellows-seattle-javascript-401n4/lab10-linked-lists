'use strict';

const list = require ('./lib');

var list = module.exports = function(head){
  this.head = head || null;
};

list.protoype.print = function(){
  let current = this.head;
  while (current !== null){
  console.log (current.value);
  current = current.next;
}
};
