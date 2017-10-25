/*global describe,expect*/

'use strict';
const LinkedList = require('../lib/linkedList');
const Node = require ('../lib/node');

describe('SinglyLinkedList', function(){
  test('should throw and error if a node is not passed in', () => {
    function linkedListError(){
      new LinkedList('node');
    }
    expect(linkedListError).toThrowError('should be a true node.');
  });
  test('should make a linked list if passed a node', () => {
    let node = new Node('hey');
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
      let node = new Node('hey');
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
      let node = new Node('hey');
      let ll1 = new LinkedList(node);
      ll1.remove(0);
      expect(ll1.head).toBeNull();
    });
    test('it should throw an error if the index is out of range', () => {
      let node = new Node('hey');
      let ll = new LinkedList(node);
      function linkedListError(){
        ll.remove(3);
      }
      expect(linkedListError).toThrowError('3: that index is out of range 0');
    });
  });

  describe('Reverse', function(){
    test('it should reverse a the order of sll', () => {
      let node = new Node('hey');
      let ll1 = new LinkedList(node);
      ll1.append('second');
      ll1.reverse();
      expect(ll1.head.value).toEqual('second');
    });
  });

  describe('getNode', function(){
    test('it should return the nth node', () => {
      let node = new Node('hey');
      let ll2 = new LinkedList(node);
      ll2.append('second');
      ll2.append('third');
      let firstNode = ll2.getNode(0);
      let secondNode = ll2.getNode(1);
      let thirdNode = ll2.getNode(2);

      expect(firstNode.value).toEqual(ll2.head.value);
      expect(secondNode.value).toEqual('second');
      expect(thirdNode.value).toEqual('third');
    });
  });

  describe('findNthNodeFromEnd', function(){
    test('it should return the nth node from end', () => {
      let node = new Node('hey');
      let ll = new LinkedList(node);
      ll.append('second');
      ll.append('third');

      let firstNode = ll.findNthNodeFromEnd(2);
      let secondNode = ll.findNthNodeFromEnd(1);
      expect(firstNode.value).toEqual(ll.head.value);
      expect(secondNode.value).toEqual('second');
    });
  });

  describe('findMiddleNode', function(){
    test('it should return the middle node', () => {
      let node = new Node('hey');
      let ll2 = new LinkedList(node);
      ll2.append('second');
      ll2.append('third');
      let gottenNode = ll2.findMiddleNode();
      expect(gottenNode.value).toEqual('second');
    });
  });
});
