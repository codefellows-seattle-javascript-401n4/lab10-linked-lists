'use strict';



const expect = require('expect');
const LinkedList = require('../lib/linked-list');



describe('linked lists', () => {
  let ll = new LinkedList();

  describe('prepend', () => {
    it('should add a node to list', () => {

      ll = ll.prepend('three');
      expect(ll.head).toEqual({value: 'three', next: null});
    });


    it('should prepend additional nodes', () => {

      ll = ll.prepend('two');
      ll = ll.prepend('one');

      expect(ll.head.next).toEqual({'next': {'next': null, 'value': 'three'}, 'value': 'two'});
    });
  });



  describe('append', () => {
    it('should add an inital value to a new empty list', () => {

      let ll2 = new LinkedList();

      ll2 = ll2.append('food');
      expect(ll2).toEqual({value: 'food', next: null});
    });


    it('should add values to the end of list', () => {

      ll = ll.append('four');
      ll = ll.append('five');
      expect(ll.head.next).toEqual({'next': {'next': {'next': {'next': null, 'value': 'five'}, 'value': 'four'}, 'value': 'three'}, 'value': 'two'});
      ll.print();
    });
  });



  describe('remove', () => {
    it('should return empty list if list is empty', () => {
      let ll = new LinkedList();
      ll = ll.remove('four');
      expect(ll.head).toEqual(null);
    });


    it('should remove node from sll at given index', () => {
      ll = ll.remove('one');
      expect(ll.head).toEqual({'next': {'next': {'next': {'next': null, 'value': 'five'}, 'value': 'four'}, 'value': 'three'}, 'value': 'one'});
      ll.print();
    });
  });



  describe('reverse', () => {
    it('should reverse the list from one, two, to, three to three, two, one', () => {

      let ll = new LinkedList();

      ll.prepend('one');
      ll.prepend('two');
      ll.prepend('three');
      ll.reverse();
      expect(ll).toEqual({'head': {'next': {'next': {'next': null, 'value': 'three'}, 'value': 'two'}, 'value': 'one'}, 'previous': null});
    });
  });
});
