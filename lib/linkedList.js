'use strict';
const Node = require ('./node');

const LinkedList = module.exports = function(node) {
  this.head = node || null;
};

LinkedList.prototype.append = function(value) {
  let current = this.head;
  if (this.head === null) {
      return this.head = new Node(value);
  }
  while (current.next !== null) {
    current = current.next;
  }
  current.next = new Node(value);
}

LinkedList.prototype.prepend = function(value) {
  //create temp storage for old head
  let oldHead = this.head;
  this.head = new Node(value, oldHead);
}

LinkedList.prototype.remove = function(index){
  let current = this.head;
  for (var i = 1; i < index - 1; i++) {
    current = current.next[i]
  }
  current.next = current.next.next;

}
