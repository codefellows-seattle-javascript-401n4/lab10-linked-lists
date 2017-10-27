'use strict';

const LinkedList = require('./lib/linkedList');

let ll = new LinkedList();
for(let i = 0; i < 5 ; i++){
  ll.append(i);
}
console.log(ll);
ll.print();
