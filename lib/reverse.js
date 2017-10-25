'use strict';

const list = require('./list.js');

list.protoype.reverse = module.exports = function(){
  if (this.head === null) {
    return console.log(e);
  }

  let newList = new list();
  let current = this.head;
  let listLength = 1;

  while(current.next !== null){
    current = current.next;
    listLength++;
  }

  let counter = listLength ;

  for(let i = 0; i < listLength; i++){
    let target = this.head;
    while(target.next !== null){
      target = target.next;
    }

    newList.append(target.value);
    this.remove(counter -1);
    counter--;
  }

  console.log(newList);
  return newList;
};
//Big 0 : 0(n^2)
