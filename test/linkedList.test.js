'use strict';

const LinkedList = require('../lib/linked-list.js');
const LinkedListNode = require('../lib/LinkedListNode.js');

describe('append function', () => {
  it('should append if the list is empty, meaning this.head equals to null', () => {
    let secondLinkedList = new LinkedList();
    secondLinkedList.append('Hello Thao');
    secondLinkedList.print();
    expect(secondLinkedList.head.value).toEqual('Hello Thao');
  });

  it('should append, adding the new value "peonies" to the end of the list, if the list is not empty', () => {
    let thirdLinkedList = new LinkedList();
    thirdLinkedList.append('ranunculus');
    thirdLinkedList.print();
    thirdLinkedList.append('peonies');
    expect(thirdLinkedList.head.next.value).toEqual('peonies');
  });

  it('should append if the value is a linked list node', () => {
    let fourthLinkedList = new LinkedList();
    let firstLinkedListNode = new LinkedListNode();
    firstLinkedListNode.value = 'roses';
    fourthLinkedList.append(firstLinkedListNode);
    expect(fourthLinkedList.head).toEqual(firstLinkedListNode);
  });
});

describe('prepend function', () => {
  it('should prepend if the value, secondLinkedListNode, is an instance of a linked list node', () => {
    let secondLinkedListNode = new LinkedListNode();
    secondLinkedListNode.value = 'lilies';
    let fifthLinkedList = new LinkedList();
    fifthLinkedList.prepend('magnolias');
    fifthLinkedList.prepend(secondLinkedListNode);
    fifthLinkedList.print();
    expect(fifthLinkedList.head.value).toEqual('lilies');
  });

  it('should prepend even when the value, "dahlias" is NOT an instance of a linked list node', () => {
    let sixthLinkedList = new LinkedList();
    sixthLinkedList.prepend('dahlias');
    expect(sixthLinkedList.head.value).toEqual('dahlias');
  });

  it('should prepend or adding the new value, "tulips" to the front of the list', () => {
    let seventhLinkedList = new LinkedList();
    seventhLinkedList.prepend('jasmines');
    seventhLinkedList.prepend('tulips');
    expect(seventhLinkedList.head.value).toEqual('tulips');
  });
});

describe('remove function', () => {
  it('should Not remove if the list is empty', () => {
    let eightLinkedList = new LinkedList();
    eightLinkedList.remove(0);
    expect(eightLinkedList.head).toBeNull();
  });

  it('should remove the head if index is 0', () => {
    let ninthLinkedList = new LinkedList();
    ninthLinkedList.prepend('daffodils');
    ninthLinkedList.prepend('narcissus');
    ninthLinkedList.remove(0);
    expect(ninthLinkedList.head.value).toEqual('daffodils');
  });

  it('should remove at any specified index, for example index 1', () => {
    let tenthLinkedList = new LinkedList();
    tenthLinkedList.prepend('mumps');
    tenthLinkedList.prepend('daisies');
    tenthLinkedList.prepend('azelias');
    tenthLinkedList.remove(1);
    expect(tenthLinkedList.head.next.value).toEqual('mumps');
  });
});

describe('reverse function', () => {
  it('should successfully reverse if the list is not empty or null', () => {
    let eleventhLinkedList = new LinkedList();
    eleventhLinkedList.prepend('ice plants');
    eleventhLinkedList.prepend('peace lilies');
    eleventhLinkedList.prepend('sunflowers');
    eleventhLinkedList.print();
    eleventhLinkedList.reverse();
    eleventhLinkedList.print();
    expect(eleventhLinkedList.head.value).toEqual('ice plants');
  });

  it('should not reverse if the list is empty or head equals to null', () => {
    let twelfthLinkedList = new LinkedList();
    twelfthLinkedList.reverse();
    expect(twelfthLinkedList.head).toBeNull();
  });

  it('should place the head to the end of the reversed list', () => {
    let thirteenthLinkedList = new LinkedList();
    thirteenthLinkedList.prepend('water lilies');
    thirteenthLinkedList.prepend('lotus');
    thirteenthLinkedList.reverse();
    expect(thirteenthLinkedList.head.next.value).toEqual('lotus');
  });
});
