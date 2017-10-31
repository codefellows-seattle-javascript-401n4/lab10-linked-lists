'use strict';

const LinkedListNode = require(__dirname + '/LinkedListNode');

const LinkedList = module.exports = function(head) {
  this.head = head || null;
};

//The runtime of PREPEND is O(1) or Constant Complexity.

//if this is the actual linked-list node then it will use it; otherwise it will create a new intance and use the value passed in
LinkedList.prototype.prepend = function(value) {
  if(value instanceof LinkedListNode) {
    value.next = this.head;
    return this.head = value;
  }

  this.head = new LinkedListNode(value, this.head);
};


//The runtime of append is O(n).
LinkedList.prototype.append = function(value) {
  if (this.head === null) return this.head = value instanceof LinkedListNode ? value : new LinkedListNode(value);
  let current = this.head;

  while(current.next !== null) current = current.next;
  current.next = value instanceof LinkedListNode ? value : new LinkedListNode(value);
};


LinkedList.prototype.remove = function(index) {
  if(this.head === null) return;
  if(index === 0) return this.head = this.head.next;
  let current = this.head;

  for(let i = 0; i < (index -1); i++) {
    if(current.next === null) return;
    current = current.next;
  }

  current.next = current.next.next;
};


LinkedList.prototype.find = function(value) {
  let current = this.head;

  while(current.value !== value) {
    if (current.next === null) return null;
    current = current.next;
  }

  return current;
};

LinkedList.prototype.print = function() {
  if(this.head === null) return console.log('empty linked list');
  let current = this.head;

  while(current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

//Since I am using prepend for the reverse function, the runtime is O(n).
LinkedList.prototype.reverse = function() {
  let tempLinkedList = new LinkedList();
  let current = this.head;
  while(current !== null) {
    tempLinkedList.prepend(current.next);
    current = current.next;
  }

  this.head = tempLinkedList.head;
};


LinkedList.prototype.deepClone = function() {
  let tempLinkedList = new LinkedList();
  let current = this.head;

  while(current !== null) {
    tempLinkedList.append(current.value);
    current = current.next;
  }

  return tempLinkedList;
};
