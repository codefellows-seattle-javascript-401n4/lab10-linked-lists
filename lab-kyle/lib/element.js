'use strict';

const Element = module.exports = function (value, next) {
  this.value = value;
  this.next = next || null;
};
