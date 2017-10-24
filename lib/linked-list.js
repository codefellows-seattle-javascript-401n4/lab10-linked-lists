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
  // remove(value) {

  //   if (!this.head) {
  //     console.log('Linked list is empty.');
  //     return;
  //   }
  //   let current = this.head;
    
  //   if(current.value === value){
  //     this.head = current.next;     
  //   }
  //   else{
  //     this.previous = current;
      
  //     while(current.next){
        
  //       if(current.value === value){
  //         this.previous.next = current.next;          
  //         break;
  //       }
  //       this.previous = current;
  //       current = current.next;
  //     }
  
  //     if(current.value === value){
  //       this.previous.next === null;
  //     }
  //   }
  // }  

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
      console.log('Empty or a single element Linked List.');
      // return this;
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
    return this;
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