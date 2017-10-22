'use strict';

const LinkedList = require('./lib/linked-list');

let sll = new LinkedList();
// sll.print();
sll.append('one');
sll.append('two');
sll.append('three');
sll.append('four');

// sll.remove('one');
sll.print();

// sll.prepend(3);
// sll.prepend(2);
// sll.prepend(1);

// sll.append(4);
// sll.append(5);
// sll.append(6);
// sll.remove(5);
// sll.remove(2);
// sll.append(7);
// sll.reverse();
// sll.remove();
sll.print();


console.log('new linked list:', sll);

