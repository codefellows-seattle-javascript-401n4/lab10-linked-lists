'use strict';

const linkedList = require('./lib/linkedList.js');
const Node = require('./lib/node.js');

let newNode = new Node(4);

let myList = new linkedList(newNode);
myList.print();     

myList.prepend(3);
myList.prepend(2);
myList.prepend(1);
myList.print();  


myList.append(5);
myList.print(); 



myList.remove(2);
myList.print(); 


let reversed = myList.reverse();
reversed.print();