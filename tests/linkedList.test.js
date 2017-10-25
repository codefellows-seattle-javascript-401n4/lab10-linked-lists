/*global expect*/

'use strict';

const Node = require('../lib/node.js');
const linkedList = require('../lib/linkedList.js');

describe('node constructor', () => {
  let testNode = new Node(2);
  let anothaNode = new Node(2,3);
  test('this.value of the created node should be the first argument', () => {
    expect(testNode.value).toEqual(2);
  });
  test('.next should be null if no second argument given', () => {
    expect(testNode.next).toEqual(null);
  });
  test('.next value should be the second argument if one is given', () => {
    expect(anothaNode.next).toEqual(3);
  });
});

describe('linkedList constructor', () => {
  let testList = new linkedList(new Node(3));
  test('make head the value that was passed in', () => {
    expect(testList.head.value).toEqual(3);
  });
  test('.next value should be null', () => {
    expect(testList.next).toEqual(null);
  });
});


describe('.prepend', () => {
  let testList = new linkedList(new Node(2));
  testList.prepend(1);
  test('makes the value of the argument the new head of the list', () => {
    expect(testList.head.value).toEqual(1);
  });
  test('makes the prior head now equal to .next', () => {
    expect(testList.head.next.value).toEqual(2);
  });
});


describe('.append', () => {
  let testList = new linkedList(new Node(1));
  testList.append(2);
  test('the last number in the list should be the argument given', () => {
    expect(testList.head.next.value).toEqual(2);
  });
  test('the next of the appended node should be null', () => {
    expect(testList.head.next.next).toEqual(null);
  });
});

describe('.remove', () => {
  let testList = new linkedList(new Node(1));
  testList.append(2);
  testList.append(3);
  testList.remove(1);
  test('remove the value at the given index', () => {
    expect(testList.head.next.value).toEqual(3);
  });
});