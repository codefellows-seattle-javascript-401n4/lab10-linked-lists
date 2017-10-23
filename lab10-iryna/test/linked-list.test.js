'use strict';
const LL = require('../lib/linked-list');
const expect = require('expect');

describe('Linked List', function(){
  it('should return a head of a linked list when called', function(){
    let llTest = new LL();
    expect(llTest.head).toBe(null);
  })

  it('should return a list with one node when passed in a value to append', function(){
    let llTest = new LL();
    llTest.append('one node');
    expect(llTest.head.value).toEqual('one node');
  })

  it('should return a new head when passed in a value to prepend', function(){
    let llTest = new LL();
    llTest.append('one node');
    llTest.prepend('prepended value');
    expect(llTest.head.value).toEqual('prepended value');
  })

  it('should return a list  with one node when prompted to remove the second element from the list of two nodes', function(){
    let llTest = new LL();
    llTest.append('node one');
    llTest.append('node two');
    llTest.remove(2);
    expect(llTest.head.value).toEqual('node one');
  })

    it('should return  null for head if the list is empty', function(){
      let llTest = new LL();
      llTest.remove(1);
      expect(llTest.head).toEqual(null);
  })



});
