'use strict';



const Node = require(__dirname + '/model');



class LinkedList {
  constructor() {
    this.head = null;
    this.previous = null;
  }


  //Big O O(1)
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


  //Big O O(n)
  append(value) {
    if(this.head === null) return this.head = new Node(value);
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
    return this;
  }


  //Big O O(n)
  remove(index) {

    if(!this.head) return this;

    let current = this.head;
    for(let i = 0; i < index - 1; i++){
      current = current.next;
    }
    current.next = current.next.next;
    return this;
  }


  //Big O O(n)
  reverse() {

    if (!this.head || !this.head.next) {
      console.log('single element linked list.');
      return;
    }

    let p1 = null;
    let p2 = this.head;
    let p3;

    while (p2) {
      p3 = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = p3;
    }

    this.head = p1;
  }



  print() {
    let string = '';
    let current = this.head;
    while(current) {
      string += `${current.value} `;
      current = current.next;
    }
    console.log(string);
    return this;
  }
}



module.exports = LinkedList;
