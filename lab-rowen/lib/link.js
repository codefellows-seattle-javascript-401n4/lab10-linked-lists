'use strict';

//will split functionality into more modules once it works.

// const Node = require(__dirname + '/node');

// const LL = module.exports = function(node) {
//   this.head = node || null;
// };


const Node = module.exports = function(value, next){
  this.value = value;
  this.next = next || null;

};

const LL = module.exports = function(node){
  this.length = 0;
  this.head = node || null;

};


LL.prototype.reverse = function(){
  let prevNode = null;
  let curNode = this.head;

  while (curNode) {
    let tempNode = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = tempNode;
  }

  this.head = prevNode;
};

LL.prototype.prepend = function(value) {
  let tempHead = this.head;
  this.head = new Node(value, tempHead);
  this.length++

};

LL.prototype.append = function(value) {
  if (this.head === null)
    return this.head = new Node(value);

  let curNode = this.head;

  while(curNode.next !== null) {
    curNode = curNode.next;

  }

  curNode.next = new Node(value);
  this.length++;
};


LL.prototype.remove = function(index) {
  let curNode = this.head;

  for(let i = 0; i < index - 1; i++){

    curNode = curNode.next;

    //can't read next of null at curNode.next.next
    //can't read next of null at curNode.next

    curNode.next.next ? curNode.next = curNode.next.next : curNode.next = null;

    return curNode;

  };
  this.length--;
};

LL.prototype.print = function() {
  let curNode = this.head;

  while(curNode !== null) {
    console.log(curNode.value);
    curNode = curNode.next;

  }
};
