'use strict';

const Node = require('./Node');

class List {

  constructor (node) {
    this.head = node || null;
  }

  //O(1)
  prepend(node) {

    if(!this.head) this.head = new Node(node);
    else{

      let curr = this.head;
      this.head = new Node(node, curr);

    }
    return this;

  }

  //O(n)
  append(node) {

    if(!this.head) this.head = new Node(node);
    else {

      let oldhead = this.head;
      while(oldhead.next !== null){
        oldhead = oldhead.next;
      }
      oldhead.next = new Node(node);
    }
    return this;
  }

  //O(n)
  remove(index) {

    if(!this.head) return this;

    let current = this.head;
    for(let i = 0; i < index - 1; i++){
      current = current.next;
    }
    current.next = current.next.next;
    return this;
  }

  //O(n)
  reverse() {

    if(!this.head) return this;

    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  //O(n)
  print() {
    let current = this.head;
    while(current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

}

module.exports = List;
