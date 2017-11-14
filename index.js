'use strict';

const LL = require('./lib/node.js');


let LL4 = new LL();

LL4.append('one');
LL4.append('two');
LL4.append('three');
LL4.prepend('four');
LL4.reverse();
LL4.reverse();
LL4.remove(1);
console.log(LL4);
