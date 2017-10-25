'use strict';

let Node = require('./node.js');

const linkedList = module.exports = function(node) {
  this.head = node || null;
  this.next = null;
};

linkedList.prototype.print = function() {
  let current = this.head;
  while(current !== null) {
    console.log(current.value);
    current = current.next;
  }
  console.log('\n');
};

linkedList.prototype.prepend = function(value) {
  // Big O runtime = O(1)
  let current = this.head;
  this.head = new Node(value, current);
};

linkedList.prototype.append = function(value) {
  // Big O runtime = O(n)
  let current = this.head;
  while(current.next !== null) current = current.next;
  current.next = new Node(value);
};

linkedList.prototype.remove = function(offset) {
  // Big O runtime = O(n)
  let current = this.head;
  for(let i = 0; i < offset-1; i++){
    current = current.next;
  }
  current.next = current.next.next;
};

linkedList.prototype.reverse = function() {
  // Big O runtime = O(n)
  let current = this.head;
  let node = new Node(current.value);
  let reversed = new linkedList(node);
  while(current !== null){
    reversed.prepend(current.value);
    current = current.next;
  }
  return(reversed);
};




