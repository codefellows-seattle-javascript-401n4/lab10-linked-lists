'use strict';

const expect = require('expect');
const LinkedList = require('../lib/linkedlist.js');
const Element = require('../lib/element.js');

describe('LinkedList constructor function', function(){

  it('the head of the empty list should be null', function(){

    let testList = new LinkedList();

    expect(testList.head).toEqual(null);

  });

  it('should create a list of element objects', function(){

    let ElOne = new Element(1);
    let filledList = new LinkedList(ElOne);

    expect(filledList).toEqual({head: {next: null, value: 1}});

  });

});
