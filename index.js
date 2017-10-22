'use strict';

const List = require('./lib/List');

let list = new List();
list = list.prepend('three');
list = list.prepend('two');
list = list.prepend('one');
list = list.append('four');
list = list.append('five');
list = list.reverse();

list.print();
