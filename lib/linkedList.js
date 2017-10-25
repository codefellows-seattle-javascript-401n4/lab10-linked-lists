'use strict';
const Node = require ('./node');

const SinglyLinkedList = module.exports = function(node) {

  if ((node && !node.value) || (node && typeof node !== 'object')) {
    throw new Error('should be a true node.');
  }
  this.head = node || null;
};

//runtime O(n)
SinglyLinkedList.prototype.append = function(value) {
  if (arguments.length === 0) {
    throw new Error('need a value to append.');
  }
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
  if (arguments.length === 0) {
    throw new Error('need a value to prepend.');
  }
  //create temp storage for old head
  let oldHead = this.head;
  this.head = new Node(value, oldHead);
};

//runtime O(n)
SinglyLinkedList.prototype.remove = function(index){
  //ADDED IN CLASS
  if (index === 0 ) {
    return this.head = this.head.next;
  }
  if (this.head === null) {
    return;
  }
  let current = this.head;

  for (var i = 0; i < index - 1; i++) {
    if (current.next === null) {
      throw new Error(`${index}: that index is out of range ${i}`);
    }
    current = current.next;
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

SinglyLinkedList.prototype.getNode = function(index){
  let current = this.head;
  //check that index exists
  for (var i = 0; i < index; i++) {
    current = current.next;
  }
  //current is now the one before the one to be removed
  if (current === null) {
    throw new Error(`${index}: that index is out of range`);
  }
  return current;
};

//runtime O(n ^ 2)
SinglyLinkedList.prototype.findNthNodeFromEnd = function(n){
  if (!parseInt(n) && n !== 0) {
    throw new Error('need an integer');
  }
  let current = this.head;
  let length = 1;
  while (current.next !== null) {
    length ++;
    current = current.next;
  }
  if (n === 0) {
    return current;
  }
  let lookupIndex = length - (n + 1);
  if (lookupIndex < 0) {
    throw new Error(`${length}: that index is out of range ${lookupIndex}`);
  }
  if (n + 1 === length) {
    return this.head;
  }
  return this.getNode(lookupIndex);
};

SinglyLinkedList.prototype.findMiddleNode = function(){
  let current = this.head;
  if (current.null === null) {
    return this.head;
  }
  let length = 1;
  while (current.next !== null) {
    length ++;
    current = current.next;
  }
  let lookupIndex = Math.floor(length/2);
  return this.getNode(lookupIndex);
};

//runtime O(n)
SinglyLinkedList.prototype.print = function(){
  let current = this.head;
  while (current.next !== null) {
    console.log('value: ', current.value, 'next: ', current.next.value);
    current = current.next;
  }
};
