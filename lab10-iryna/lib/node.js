'use strict';
let Node = module.exports = function(value, next){
  this.value = value;
  this.next = next || null;
}
