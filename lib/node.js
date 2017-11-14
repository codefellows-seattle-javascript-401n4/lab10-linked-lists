'use strict';

const Node = module.exports = function(data,next){
  this.data = data;
  this.next = next || null;
};

const List = module.exports = function(node){
  this.length = 0;
  this.head = node || null;
};

List.prototype.append = function(value){
  let node = new Node(value);
  let currentNode = this.head;

  if(!currentNode){
    this.head = node;
    this.length++;
    return node;
  }

  while(currentNode.next){
    currentNode = currentNode.next;
  }

  currentNode.next = node;

  this.length++;

  return node;
  //O(n)
};


List.prototype.prepend = function(value){
  let oldHeddy = this.head;
  this.head = new Node(value,oldHeddy);
  //O(n)
};

List.prototype.reverse = function(){
  if(!(this.head || this.head.next)){
    console.log('empty list');
    return;
  }

  let p = null;
  let p1 = this.head;
  let p2;


  while(p1){
    p2 = p1.next;
    p1.next = p;
    p = p1;
    p1 = p2;
  }

  this.head = p;
  //O(n)
};

List.prototype.remove = function(offset){
  let currentNode = this.head;
  let count = 0;
  let priorDelete = null;
  let deleteNode = null;
  let removedNode = null;


  if((offset < 0 || offset > this.length)){
    throw err;
  }

  if(offset === 1){
    this.head = currentNode.next;
    removedNode = currentNode;
    currentNode = null;
    this.length--;
    return removedNode;
  }

  while(count < offset){
    priorDelete = currentNode;
    deleteNode = currentNode.next;
    count++;
  }
  priorDelete.next = deleteNode.next;
  removedNode = deleteNode;
  deleteNode = null;
  this.length--;
  return removedNode;
  //O(n)
};
