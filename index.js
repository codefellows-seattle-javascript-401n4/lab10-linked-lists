'use strict';

const list =
require('./lib/list.js');
require('./lib/prepend.js');
require('./lib/append.js');
require('./lib/reverse.js');
require('./lib/remove.js');

let listOne = new list();

listOne.prepend(2);
listOne.prepend(3);
listOne.prepend(1);
listOne.reverse();
listOne.print();
