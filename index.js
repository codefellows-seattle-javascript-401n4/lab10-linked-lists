'use strict';

const SLL = require ('./lib/LinkedList');

let ll1 = new SLL();

ll1.append('zero');
ll1.append('one');
ll1.append('two');
ll1.append('three');
ll1.append('four');
ll1.append('five');


// console.log(ll1);
ll1.reverse()
ll1.print()
