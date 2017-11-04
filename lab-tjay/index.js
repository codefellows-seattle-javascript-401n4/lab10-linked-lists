'use strict';



class SLL {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  prependNode(node){
    if(node instanceof SLL)
    
  }

  appendNode(node) {
    if(!(node instanceof SLL))
      return null;
    if(!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  //bigO is n

  forEach(callback) {
    let current = this;
    while(current) {
      callback(current, this);
      current = current.next;
    }
  }

  findMiddleNode() {
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }


  remove(node) {
    if(!(node instanceof SLL))
      return null;
    this.node = node;
    node.val = node.next.val;
    node.next = node.next.next;
    return;
  }

  //bigO is n

  reverse(){
    let result = null;
    let temp = [];
    let current = this;
    while (current) {
      temp.push(current);
      current = current.next;
    }
    result = temp.pop() || [];
    current = result;

    while(current) {
      current.next = temp.pop();
      current = current.next;
    }
    return result;
  }
}

  //bigO is 2n


module.exports = SLL;
