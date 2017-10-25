'use strict';

const expect = require('expect');
const LinkedList = require('../lib/linkedlist.js');
const Element = require('../lib/element.js');
const append = require('../lib/append.js');

describe('append module', function() {

  it('should create new element if no list exists', function(){

    let testList = new LinkedList();
    testList.append(3);

    expect(testList).toEqual({
      head: {
        value: 3,
        next: null,
      },
    });

  });

  it('should add a new element to the end of the list', function(){

    let testList2 = new LinkedList();
    testList2.append(3);
    testList2.append(4);

    expect(testList2).toEqual({
      head: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    });

  });

});
