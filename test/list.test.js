'use strict';
const expect = require('expect');
const List = require('../lib/List');

describe('Singly list link tests', () => {

  let list1 = new List();

  describe('prepend', () => {

    it('should add an inital value to new list1', (done) => {

      list1 = list1.prepend('three');
      expect(list1.head).toEqual({value: 'three', next: null});
      done();

    });

    it('should add more values to the front of the list1', (done) => {

      list1 = list1.prepend('two');
      list1 = list1.prepend('one');
      expect(list1.head.next).toEqual({'next': {'next': null, 'value': 'three'}, 'value': 'two'});
      done();

    });
  });

  describe('append', () => {

    it('should add an inital value to a new empty list', (done) => {

      let list2 = new List();
      list2 = list2.append('hello!');
      expect(list2.head).toEqual({value: 'hello!', next: null});
      done();

    });

    it('should add values to the end of list1', (done) => {

      list1 = list1.append('four');
      list1 = list1.append('five');
      expect(list1.head.next).toEqual({'next': {'next': {'next': {'next': null, 'value': 'five'}, 'value': 'four'}, 'value': 'three'}, 'value': 'two'});
      list1.print();
      done();
    });
  });

  describe('remove', () => {

    it('should return empty list if list is empty', (done) => {

      let list = new List();
      list = list.remove(4);
      expect(list.head).toEqual(null);
      done();

    });

    it('should remove node from list1 at given index', (done) => {

      list1 = list1.remove(1); //remove 2nd node with value of "two"
      expect(list1.head).toEqual({'next': {'next': {'next': {'next': null, 'value': 'five'}, 'value': 'four'}, 'value': 'three'}, 'value': 'one'});
      list1.print();
      done();
    });
  });

  describe('reverse', () => {

    it('should return empty list if list is empty', (done) => {

      let list = new List();
      list = list.remove(4);
      expect(list.head).toEqual(null);
      done();

    });

    it('should reverse the order of the nodes in list1', (done) => {

      list1 = list1.reverse(); //list should now be 'five, four, three, one'
      expect(list1.head).toEqual({'next': {'next': {'next': {'next': null, 'value': 'one'}, 'value': 'three'}, 'value': 'four'}, 'value': 'five'});
      list1.print();
      done();
    });
  });
});
