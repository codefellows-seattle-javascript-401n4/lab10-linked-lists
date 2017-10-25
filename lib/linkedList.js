'use strict';
const Node = require ('./node');

const SinglyLinkedList = module.exports = function(node) {

  if ((node && !node.value) || (node && typeof node !== 'object')) {
    throw new Error('should be a true node.')
  }
  this.head = node || null;
};

//runtime O(n)
SinglyLinkedList.prototype.append = function(value) {
  let current = this.head;
  //if there is nothing in the sll, just add the node
  if (this.head === null) {
    return this.head = new Node(value);
  }
  //otherwise go over sll until the end.
  while (current.next !== null) {
    current = current.next;
  }
  current.next = new Node(value);
};

//runtime O(1)
SinglyLinkedList.prototype.prepend = function(value) {
  //create temp storage for old head
  let oldHead = this.head;
  this.head = new Node(value, oldHead);
};

//runtime O(n)
SinglyLinkedList.prototype.remove = function(index){
  let current = this.head;
  //check that index exists
  for (var i = 0; i < index - 1; i++) {
    current = current.next;
  }
  //current is now the one before the one to be removed
  if (current.next === null) {
    return console.log(index, 'that index is out of range');
  }
  current.next = current.next.next;
};

//runtime O(n)
SinglyLinkedList.prototype.reverse = function(){
  let oldHead = this.head;
  let current = this.head.next;
  if (this.head === null) {
    return;
  }
  let index = 1;
  while (current.next !== null) {
    let value = current.value;
    this.remove(index);
    this.prepend(value);
    index++;
    current = current.next;
  }
  this.prepend(current.value);
  oldHead.next = null;
};

SinglyLinkedList.prototype.getNode = function(n){

}

SinglyLinkedList.prototype.findNthNodeFromEnd = function(n){
  let current = this.head;
  let length = 0;
  while (current.next !== null) {
    length ++;
    current = current.next;
  }
  let lookupIndex = length - n;
  this.getNode(lookupIndex)
};

//runtime O(n)
SinglyLinkedList.prototype.print = function(){
  let current = this.head;
  while (current.next !== null) {
    console.log('value: ', current.value, 'next: ', current.next.value);
    current = current.next;
  }
}
