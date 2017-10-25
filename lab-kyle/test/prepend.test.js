'use strict';

const expect = require('expect');
const LinkedList = require('../lib/linkedlist.js');
const Element = require('../lib/element.js');
const prepend = require('../lib/prepend.js');

describe('prepend', function() {

  it('should add an element to the begining of the LinkedList', function() {

    let newEl = new Element(1);
    let testList = new LinkedList(newEl);

    let newEl2 = 'two';
    testList.prepend(newEl2);

    expect(testList).toEqual({
      head: {
        value: 'two',
        next: {
          value: 1,
          next: null,
        },
      },
    });

  });

});
