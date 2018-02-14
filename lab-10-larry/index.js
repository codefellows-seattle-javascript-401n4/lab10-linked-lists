'use strict';

const LL = require('./lib/list');

let ll1 = new LL();
ll1.append('first');
ll1.prepend('actual first');
ll1.append('last');

console.log(ll1);
