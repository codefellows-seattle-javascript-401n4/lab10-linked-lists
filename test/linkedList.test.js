'use strict';
const LinkedList = require('../lib/linkedList');
const Node = require ('../lib/node');

describe('SinglyLinkedList', function(){
  let node = new Node('hey')
  test('should throw and error if a node is not passed in', () => {
    function linkedListError(){
      new LinkedList('node');
    }
    expect(linkedListError).toThrowError('should be a true node.')
  })
  test('should make a linked list if passed a node', () => {
    let ll = new LinkedList(node);
    expect(ll.head.value).toEqual('hey')
  })

  describe('Append', function(){
    test('it should add a node to the end of ll', () => {
      let ll1 = new LinkedList();
      ll1.append('one');
      expect(ll1.head.value).toEqual('one');
    })
  })
  describe('Prepend', function(){
    test('it should add a node to the beginning of ll', () => {
      let ll1 = new LinkedList(node);
      ll1.prepend('one');
      expect(ll1.head.value).toEqual('one');
      expect(ll1.head.next.value).toEqual('hey');
    })
  })
})
