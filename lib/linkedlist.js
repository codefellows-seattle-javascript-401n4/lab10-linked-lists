'use strict';

const Node = require('../lib/node');

class LinkedList {
  constructor() {
    this.head = null;
    this.previous = null;
  }

  //big O(1) value is added to the start of the linked list
  prepend(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
    return this;
  }


  //big O(n) the program runs until it reached the end or null
  append(value) {
    if(this.head === null) return this.head = new Node(value);
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
    return this;
  }

  print() {
    let string = '';
    let current = this.head;
    while(current) {
      string += current.value;
      current = current.next;
    }
    console.log(string);
    return this;
  }
}

module.exports = LinkedList;
