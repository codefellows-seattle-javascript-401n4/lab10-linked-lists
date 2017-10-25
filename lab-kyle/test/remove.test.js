'use strict';

const expect = require('expect');
const LinkedList = require('../lib/linkedlist.js');
const Element = require('../lib/element.js');
const remove = require('../lib/remove.js');
const append = require('../lib/append.js');

describe('remove module', function(){

  it('throw an error if no list exists', function(){

    let testList = new LinkedList();

    expect(function (){
      testList.remove(1);
    }).toThrow('Nothing to remove.');

  });

  it('should remove an element from anywhere in the list', function(){

    let testList2 = new LinkedList();
    testList2.append(1);
    testList2.append(2);
    testList2.append(3);

    testList2.remove(2);

    expect(testList2).toEqual({
      head: {
        value: 1,
        next: {
          value: 3,
          next: null,
        },
      },
    });

  });

});
