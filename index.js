'use strict';

const linkedList = require('./lib/list');

let LL1 = new linkedList();

console.log(LL1);
LL1.append('first');
LL1.prepend('actual first');
console.log(LL1);

LL1.remove(1);
console.log('remove first: ', LL1);