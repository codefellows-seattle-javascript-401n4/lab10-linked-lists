'use strict';

const LinkedList = require('./lib/linked-list.js');

require('./lib/append.js');
require('./lib/prepend.js');
require('./lib/remove.js');
require('./lib/reverse.js');

let list1 = new LinkedList();

list1.append(2);
list1.append(3);
list1.prepend(1);
console.log(list1);
list1.reverse();
console.log(list1);
