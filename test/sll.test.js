'use strict';

const expect = require('expect');
const LinkedList = require('../lib/linked-list');


describe('Singly Linked Lists', () => {

  let sll = new LinkedList();

  describe('prepend', () => {

    it('should add a node to list', () => {

      sll = sll.prepend('three');
      expect(sll.head).toEqual({value: 'three', next: null});

    });

    it('should prepend additional nodes', () => {

      sll = sll.prepend('two');
      sll = sll.prepend('one');
      expect(sll.head.next).toEqual({'next': {'next': null, 'value': 'three'}, 'value': 'two'});

    });
  });

  describe('append', () => {
    
    let sll2 = new LinkedList();

    it('should add an inital value to a new empty list', () => {

      
      sll2 = sll2.prepend('Wasabi');
      expect(sll2.head).toEqual({value: 'Wasabi', next: null});

    });

    it('should add values to the end of sll', () => {
    
      sll = sll.append('four');
      sll = sll.append('five');
      expect(sll.head.next).toEqual({'next': {'next': {'next': {'next': null, 'value': 'five'}, 'value': 'four'}, 'value': 'three'}, 'value': 'two'});
      sll.print();

    });
  });

  describe('remove', () => {
      
    it('should return empty list if list is empty', () => {

      let sll = new LinkedList();
      sll = sll.remove('four');
      expect(sll.head).toEqual(null);

    });

    it('should remove node from list1 at given index', () => {

      sll = sll.remove('one');
      expect(sll.head).toEqual({'next': {'next': {'next': {'next': null, 'value': 'five'}, 'value': 'four'}, 'value': 'three'}, 'value': 'one'});
      sll.print();
    });
  });

  describe('reverse', () => {
    it('should reverse the list from one, two, three to three, two, one', () => {

      let sll = new LinkedList();
      
      sll.prepend('one');
      sll.prepend('two');
      sll.prepend('three');
      sll.reverse();
      sll.print();
      expect(sll).toEqual(   {'head': {'next': {'next': {'next': null, 'value': 'three'}, 'value': 'two'}, 'value': 'one'}, 'previous': null});
    
    });
  });
}); 