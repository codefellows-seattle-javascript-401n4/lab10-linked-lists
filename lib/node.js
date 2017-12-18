'use strict';

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
 }

module.exports = Node;
