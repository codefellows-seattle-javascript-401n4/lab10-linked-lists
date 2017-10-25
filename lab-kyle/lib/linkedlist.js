'use strict';

const Element = require('./element.js');

const LinkedList = module.exports = function (element) {
  this.head = element || null;
};
