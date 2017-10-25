'use strict';

//still doesn't function as expected.

const LinkedList = require('./lib/link.js');

let Link = new LinkedList();

Link.append('toil');
Link.append('trouble');
Link.append('fire brew');
Link.append('cauldron bubble');

Link.prepend('boil')

Link.reverse();

Link.remove(1);
console.log(Link)

Link.remove(2);
console.log(Link);

Link.remove(3);
console.log(Link)

Link.remove(4);
console.log(Link)

Link.remove(5);
console.log(Link)
