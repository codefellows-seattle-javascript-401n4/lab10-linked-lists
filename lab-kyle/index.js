'use strict';

const Element = require('./lib/element.js');
const LinkedList = require('./lib/linkedlist.js');
const append = require('./lib/append.js');
const prepend = require('./lib/prepend.js');
const remove = require('./lib/remove.js');
const reverse = require('./lib/reverse.js');

let sampleList = new LinkedList();
sampleList.append(1);
sampleList.append(2);
sampleList.append(3);
sampleList.append(4);

console.log('Sample List: ', sampleList);

sampleList.reverse();
console.log('Reversed List: ', sampleList);
