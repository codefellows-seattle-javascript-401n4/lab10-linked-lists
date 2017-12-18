'use strict';

const expect = require('expect');
const LinkedList = require('../lib/linkedlist.js');


describe('My Linked Lists', () => {

  let ll = new LinkedList();
  let ll1 = new LinkedList();
  let llAppend = new LinkedList();
  let llRemove = new LinkedList();

  describe('prepend', () => {

    it('should add a node to the 0 index of a list', () => {
      for(let i = 0; i < 2 ; i++){
        ll.append(i);
      }
      ll = ll.prepend('START');
      expect(ll.head).toEqual({'data': 'START', 'next': {'data': 0, 'next': {'data': 1, 'next': null}}});

    });

    it('should prepend START0 at index 0 and START1 at index 1', () => {
      for(let i = 0; i < 2 ; i++){
        ll1.append(i);
      }
      ll1 = ll1.prepend('START1');
      ll1 = ll1.prepend('START0');
      expect(ll1.head).toEqual({'data': 'START0', 'next': {'data': 'START1', 'next': {'data': 0, 'next': {'data': 1, 'next': null}}}});

    });
  });

  describe('append', () => {

    it('should add two nodes to an empty list', () => {


      for(let i = 0; i < 2 ; i++){
        llAppend.append(i);
      }


      expect(llAppend).toEqual({'head': {'data': 0, 'next': {'data': 1, 'next': null}}, 'previous': null});

    });
  });

  describe('remove', () => {

    it('should remove from the index 0 ', () => {

      for(let i = 0; i < 2 ; i++){
        llRemove.append(i);
      }

      llRemove = llRemove.remove(0);
      expect(llRemove).toEqual({'data': 1, 'next': null});

    });
  });
});
