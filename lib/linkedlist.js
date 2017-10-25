'use strict';

const Node = require('../lib/node');

class LinkedList {
  constructor() {
    this.head = null;
    this.previous = null;
  }

  //big O(1) data is added to the start of the linked list
  prepend(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
    return this;
  }


  //big O(n) the program runs until it reached the end or null
  append(data) {
    if(this.head === null){
      return this.head = new Node(data);
    }
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
    return this;
  }
  //
  remove(index){
    if(!this.head){

      return this;
    }
    let current = this.head;
    for(let i = 0; i < index - 1; i++){
      current = current.next;
    }
    current.next = current.next.next;
    return this;
  }
  print() {
    let string = '';
    let current = this.head;
    while(current) {
      string += current.data + ' ';
      current = current.next;
    }
    console.log(string);
    return this;
  }
}

module.exports = LinkedList;
