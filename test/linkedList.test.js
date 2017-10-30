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

  it('should append if the list is not empty', () => {
    let thirdLinkedList = new LinkedList();
    thirdLinkedList.append('ranunculus');
    thirdLinkedList.print();
    thirdLinkedList.append('peonies');
    expect(thirdLinkedList.head.next.value).toEqual('peonies');
  });

  it('should append if the value is a linked-list node', () => {

    let fourthLinkedList = new LinkedList();
    let fifthListNode = new LinkedListNode();
    fifthListNode.value = 'roses';

    fourthLinkedList.append(fifthListNode);

    expect(fourthLinkedList.head).toEqual(fifthListNode);
  });


});
