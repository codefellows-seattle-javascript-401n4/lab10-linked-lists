'use strict';

const expect = require('expect');
const LinkedList = require('../lib/linkedlist.js');
const Element = require('../lib/element.js');
const reverse = require('../lib/reverse.js');
const append = require('../lib/append.js');

describe('reverse module', function(){

  it('should throw an error if no list', function(){

    let testList = new LinkedList();

    expect(function(){
      testList.reverse();
    }).toThrow('Nothing to reverse.');

  });

  it('should reverse the order of the elements', function(){

    let testList2 = new LinkedList();
    testList2.append(1);
    testList2.append(2);
    testList2.append(3);
    testList2.append(4);

    testList2.reverse();

    expect(testList2).toEqual({
      head: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: null,
            },
          },
        },
      },
    });

  });

});
