'use strict';

const LL = require('./index');

var llCoolJ = new LL();
llCoolJ.print();
for(let i = 0; i < 5; i++) llCoolJ.append(i);

llCoolJ.print();
llCoolJ.reverse();
console.log('---------------------------------------------');
llCoolJ.print();
let llBean = llCoolJ.deepClone();
llBean.remove(2);
console.log('-----------------------------------------');
llCoolJ.print();
console.log('----------------------------------------');
llBean.print();
