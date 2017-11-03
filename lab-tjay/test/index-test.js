'use strict';
const expect = require('expect');
const SLL = require('../index.js');

describe('writing tests for linkedlist methods', () => {
  describe('testing the add node method', () => {
    it('should return 10 as the value for the head', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(20));
      expect(head.value).toEqual(10);
    });
    it('should return 30 as the 3rd nested next from the head', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(20));
      head.appendNode(new SLL(30));
      expect(head.next.next.value).toEqual(30);
    });
    it('should return an object with a key of value and next for any node', () => {
      let head = new SLL('testsomething');
      head.appendNode(new SLL('anothernode'));
      head.appendNode(new SLL('a third node!'));
      let arrayOfKeys =  Object.keys(head.next);
      expect(arrayOfKeys[0]).toEqual('value');
    });
  });
  describe('testing the remove node method', () => {
    it('should return 30 as the value for the next of head after removing the 20', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(20));
      head.appendNode(new SLL(30));
      head.remove(head);
      expect(head.next.value).toEqual(30);
    });
    it('should return null as the value for next for the head after removing all other nodes', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(20));
      head.remove(head);
      expect(head.next).toEqual(null);
    });
    it('should', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(20));
      head.appendNode(new SLL(30));
      head.appendNode(new SLL(40));
      head.remove(head.next.next);
      expect(head.next.value).toEqual(20);
    });
  });
  describe('testing find reverse node method', () => {
    it('should reverse the list and return 40 for the first value', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(20));
      head.appendNode(new SLL(30));
      head.appendNode(new SLL(40));
      head = head.reverse();
      expect(head.value).toEqual(40);
    });
    it('should reverse the list and return 30 for the next value from the head', () => {
      let head = new SLL(10);
      head.appendNode(new SLL(20));
      head.appendNode(new SLL(30));
      head.appendNode(new SLL(40));
      head = head.reverse();
      expect(head.next.next.next.value).toEqual(10);
    });
    it('should reverse the list and return the same value for the head, as there is nothing else in the list', () => {
      let head = new SLL(10);
      head = head.reverse();
      expect(head.value).toEqual(10);
    });
  });
});
