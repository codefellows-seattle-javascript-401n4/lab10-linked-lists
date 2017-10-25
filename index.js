'use strict';

const LinkedList = require('./lib/linkedList');

let ll = new LinkedList();

ll.append('one');
ll.append('two');
ll.append('three');
// ll.prepend('START');
ll.remove(0);
ll.print();
