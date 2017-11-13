'use strict';

const linkedList = require('../lib/lists');
const Node = require('../lib/node.js');
const expect = require('expect');

describe('Test appending new value to linked list', () => {
    const LL = new linkedList();
    it('Add "lul" to our currently empty LL list', () => {
        LL.append('lul');
        expect(LL.head.value).toEqual('lul');
    });
    it('Appended "lul" should have next value of null', () => {
        expect(LL.head.next).toEqual(null);
    });
});

describe('Testing prepending new value to list', () => {
    const LL = new linkedList();
    LL.append('append');

    it('Prepend value to the beginnig of LL', () => {
        LL.prepend('prepended');

        expect(LL.head.value).toEqual('prepended');
    });

    it('Next value containing the next link, which has "append', () => {

        expect(LL.head.next.value).toEqual('append');
    });
});

describe('Test that Node constructor works', () => {
  const newNode = new Node(1337);
  it('Has a this.value of the value passed in', () => {
      expect(newNode.value).toEqual(1337);
  });

  it('this.next has a value of null because did not pass in second value', () => {
      expect(newNode.next).toEqual(null);
  });

  it('Both .value and .next filled if we pass in 2 args', () => {
      const secondNode = new Node(1337, 1338);
      expect(secondNode.value).toEqual(1337);
      expect(secondNode.next).toEqual(1338);
  });

});

describe('Testing search feature', () => {
    const LL = new linkedList();
    LL.append('lul');
    LL.append('xd');

    it('Find "lul" within linked list', () => {
        expect(LL.search('lul').value).toEqual('lul');
    });

    it('Return null if we do not find a link', () => {
        expect(LL.search('return nothing')).toEqual(null);
    });
});

describe('Remove value from the list', () => {
  const LL = new linkedList();
  LL.append('xd');
  LL.append('secondXD');

  it('Show that "actual xd" is the first link', () => {
      expect(LL.head.value).toEqual('xd');
  });

  it('Remove our "secondXD" from the list', () => {
      LL.remove(1);

      expect(LL.head.value).toEqual('xd');
  });
});