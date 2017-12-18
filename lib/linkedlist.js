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
  //big o(n)
  remove(index){
    if (this.head === null) return;
    if (index === 0) return this.head = this.head.next;
    let current = this.head;
    for(let i = 0; i < (index - 1); i++) {
      if (current.next === null) return;
      current = current.next;
    }
    current.next = current.next.next;
  }
  // reverse(data){
  //   let revLL = new Node(data);
  //   let current = this.head;
  //   while(current !== null) {
  //     revLL.prepend(current.value);
  //     current = current.next;
  //   }
  //   this.head = revLL.head;
  // }
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
