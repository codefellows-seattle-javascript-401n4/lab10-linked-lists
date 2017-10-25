'use strict';

const LLNode = require(__dirname + '/ll-node');

var LL = module.exports = function(head) {
  this.head = head || null;
};

LL.prototype.print = function() {
  if (this.head === null) return console.log('empty linked list');
  let current = this.head;
  while(current !== null) { 
    console.log(current.value);
    current = current.next;
  }
};

LL.prototype.prepend = function(value) {
  if(value instanceof LLNode) {
    value.next = this.head;
    return this.head = value;
  }
  this.head = new LLNode(value, this.head);
};

LL.prototype.append = function(value) {
  if (this.head === null) return this.head = value instanceof LLNode ? value : new LLNode(value);
  let current = this.head;
  while(current.next !== null) current = current.next;
  current.next = value instanceof LLNode ? value : new LLNode(value);
};

LL.prototype.remove = function(index) {
  if (this.head === null) return;
  if (index === 0) return this.head = this.head.next;
  let current = this.head;
  for(let i = 0; i < (index - 1); i++) {
    if (current.next === null) return;
    current = current.next;
  };
  current.next = current.next.next;
};

LL.prototype.reverse = function() {
  let tempLL = new LL(); 
  let current = this.head;
  while(current !== null) {
    tempLL.prepend(current.value);
    current = current.next;
  };
  this.head = tempLL.head;
};

LL.prototype.deepClone = function() {
  let tempLL = new LL();
  let current = this.head;
  while(current !== null) {
    tempLL.append(current.value);
    current = current.next;
  }
  return tempLL;
};
