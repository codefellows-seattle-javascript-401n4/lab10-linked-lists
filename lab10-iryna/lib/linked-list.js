'use strict';
const Node = require(__dirname+'/node.js');

const LinkedList = module.exports = function(node){
  this.head = node||null;
}

let nodeCount = 0;
//O(1)
LinkedList.prototype.prepend = function(value){
  nodeCount++
  let oldHead = this.head;
  this.head = new Node(value, oldHead);
}
//O(1)
LinkedList.prototype.append = function(value){
  nodeCount++;
  if (this.head === null) return this.head = new Node(value);
  let current = this.head;
  while (current.next!==null) current = current.next;
  current.next = new Node(value, null);
}
//O(n)
LinkedList.prototype.remove = function(index) {
  nodeCount--;
  let current = this.head;
  if (index === 0) {
    this.head = current.next
  } else
    for(let i = 1; i < index - 1; i++)
      current = current.next;
      current.next = current.next.next;
    };

//O(n)
LinkedList.prototype.reverse = function(){
  let prev = null;
  let current = this.head;
  while(current!=null){
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
}

LinkedList.prototype.print = function() {
  let current = this.head;
  while(current !== null) {
    console.log(current.value);
    current = current.next;
  }
};
