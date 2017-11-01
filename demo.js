'use strict';

const LinkedList = require('./index');

var secondLinkedList = new LinkedList();
//the secondLinkedList should be empty in the beginning
secondLinkedList.print();

for(let i = 0; i < 5; i++) secondLinkedList.append(i);
//should be out 0,1,2,3,4
secondLinkedList.print();

secondLinkedList.reverse();
console.log('--------------------------------------------------------');
