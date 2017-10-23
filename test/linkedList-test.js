'uses strict';

const mocha = require('mocha');
const expect = require('expect');
const List = require('../lib/node.js');
const Node = require('../lib/node.js');


describe('append', () => {
  it('should add two to a list after one', () => {
    let node = new Node('one');
    let list = new List(node);

    list.append('two');
    expect(list).toEqual(  {head: {head: 'one', length: 0, next: {data: 'two', next: null}}, length: 1});
  });
});

describe('prepend', () => {
  it('should add two to the front of one', () => {
    let node = new Node('one');
    let list = new List(node);

    list.prepend('two');
    expect(list).toEqual({
      head: {data: 'two', next: {head: 'one', length: 0}}, length: 0 });
  });
});

describe('reverse', () => {
  it('should reverse the list from one, two, three to three, two, one', () => {
    let node = new Node('one');
    let list = new List(node);

    list.append('two');
    list.append('three');
    list.reverse();
    expect(list).toEqual(  {head: {data: 'three', next: {data: 'two', next: {head: 'one', length: 0, next: null}}}, length: 2});
  });
});

describe('remove', () => {
  it('should remove two from the list', () => {
    let node = new Node('one');
    let list = new List(node);

    list.append('two');
    list.append('three');
    list.remove(2);
    expect(list).toEqual({head: {head: 'one', length: 0, next: {data: 'three', next: null}}, length: 1});
  });
});
