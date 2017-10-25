'use strict';

const list = require('./list.js');
const node = require('./node.js');

list.prototype.prepend = module.exports = function(value){
  if(this.head === null){
    return this.head = new Node(value);
  }

  let mainHead = this.head;

  this.head = new Node(value, mainHead);
};


//big 0 : 0(1)
