'use strict';
const Node = require(__dirname+'/node.js');

const LinkedList = module.exports = function(node){
  this.head = node||null;
}

LinkedList.prototype.prepend = function(value){
  let oldHead = this.head;
  this.head = new Node(value, oldHead);
}

LinkedList.prototype.append = function(value){
  if (this.head === null) return this.head = new Node(value);
  let current = this.head;
  while (current.next!==null) current = current.next;
  current.next = new Node(value, null);
}

LinkedList.prototype.remove = function(index) {
  let current = this.head;
  if (index === 0) {
    this.head = current.next
  } else
    for(let i = 1; i < index - 1; i++)
      current = current.next;
      current.next = current.next.next;
    };

LinkedList.prototype.reverse = function(){
  let current = this.head;

  while(current.next.next!=null){
    let prev = current;
    current = current.next
    current.next = prev;
  }
  this.head = current;

    current.next.next = current;
    // current = current.next;
    this.head = current;
}

LinkedList.prototype.print = function() {
  let current = this.head;
  while(current !== null) {
    console.log(current.value);
    current = current.next;
  }
};
// * implement a Singly Linked List (SLL) data structor
// * implement `append(value)`, `prepend(value)`, `reverse()`, and `remove(offset)` methods to the SLL prototype
// * in a comment within each function, note the it's Big-O runtime
