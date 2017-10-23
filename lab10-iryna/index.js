'use strict';
const LL = require('./lib/linked-list');

let ll1 = new LL();
console.log(ll1);

console.log('append: ');
for (var i = 0; i<4;i++){
  ll1.append('el '+ i);
}
ll1.print();

console.log('prepend: ');
ll1.prepend('new 0');
ll1.print();


console.log('remove 5th: ');
ll1.remove(5);
ll1.print();

console.log('reverse: ')
ll1.reverse();
ll1.print();
