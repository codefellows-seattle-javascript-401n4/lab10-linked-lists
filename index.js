'use strict';

const LinkedList = require('./lib/linkedList');

let ll = new LinkedList();

ll.append('one');
ll.append('two');
ll.prepend('START');
ll.print();
