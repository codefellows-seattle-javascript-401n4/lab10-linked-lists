/*global describe,expect*/

'use strict';
const LinkedList = require('../lib/linkedList');
const Node = require ('../lib/node');

describe('SinglyLinkedList', function(){
  let node = new Node('hey');
  test('should throw and error if a node is not passed in', () => {
    function linkedListError(){
      new LinkedList('node');
    }
    expect(linkedListError).toThrowError('should be a true node.');
  });
  test('should make a linked list if passed a node', () => {
    let ll = new LinkedList(node);
    expect(ll.head.value).toEqual('hey');
  });

  describe('Append', function(){
    test('it should add a node to the end of ll', () => {
      let ll1 = new LinkedList();
      ll1.append('one');
      expect(ll1.head.value).toEqual('one');
    });
    test('it will throw an error if there is no value passed', () => {
      let ll = new LinkedList();
      function linkedListError(){
        ll.append();
      }
      expect(linkedListError).toThrowError('need a value to append.');
    });
  });
  describe('Prepend', function(){
    test('it should add a node to the beginning of ll', () => {
      let ll1 = new LinkedList(node);
      ll1.prepend('one');
      expect(ll1.head.value).toEqual('one');
      expect(ll1.head.next.value).toEqual('hey');
    });
    test('it will throw an error if there is no value passed', () => {
      let ll = new LinkedList();
      function linkedListError(){
        ll.prepend();
      }
      expect(linkedListError).toThrowError('need a value to prepend.');
    });
  });
  describe('Remove', function(){
    test('it should remove a node from a linked list', () => {
      let ll1 = new LinkedList(node);
      ll1.remove(0);
      expect(ll1.head).toBeNull();
    });
    test('it should throw an error if the index is out of range', () => {
      let ll = new LinkedList(node);
      function linkedListError(){
        ll.remove(3);
      }
      expect(linkedListError).toThrowError('3: that index is out of range 0');
    });
  });
  describe('Reverse', function(){
    test('it should reverse a the order of sll', () => {
      let ll1 = new LinkedList(node);
      ll1.append('second');
      ll1.reverse();
      expect(ll1.head.value).toEqual('second');
    });
  });
});
