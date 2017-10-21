'use strict';

const LinkedList = require('../lib/linked-list.js');
const expect = require('expect');

require('../lib/append.js');
require('../lib/prepend.js');
require('../lib/remove.js');
require('../lib/reverse.js');

describe('append', function(){

  let list = new LinkedList();

  test('should add a value to an empty list', function(){
    list.append(1);
    expect(list).toEqual({head: {value: 1, next: null}});
  });

  test('should add a value to the end of a current list', function(){
    list.append(2);
    expect(list).toEqual({head: {value: 1, next: {value: 2, next: null}}});
  });

});

describe('prepend', function(){

  let list = new LinkedList();

  test('should add a value to an empty list', function(){
    list.prepend(1);
    expect(list).toEqual({head: {value: 1, next: null}});
  });

  test('should add a value to the beginning of a current list', function(){
    list.prepend(2);
    expect(list).toEqual({head: {value: 2, next: {value: 1, next: null}}});
  });

});

describe('remove', function(){

  test('should remove selected index from list', function(){
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.remove(1);
    expect(list).toEqual({head: {value: 1, next: {value: 3, next: null}}});
  });

  test('should remove first item from list when index value selected equals 0', function(){
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.remove(0);
    expect(list).toEqual({head: {value: 2, next: {value: 3, next: null}}});
  });

  test('should return error when index value selected is higher that number of items in list', function(){
    let list = new LinkedList();
    spyOn(console, 'log');
    list.append(1);
    list.append(2);
    list.append(3);
    list.remove(5);
    expect(console.log).toHaveBeenCalledWith('Error! Index greater than length of list!');
  });

});

describe('reverse', function(){

  test('should return console log when called on empty list', function(){
    let list = new LinkedList();
    spyOn(console, 'log');
    list.reverse();
    expect(console.log).toHaveBeenCalledWith('Empty list.  Nothing to do here.');
  });

  test('should correctly reverse list', function(){
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    let newList = list.reverse();
    expect(newList).toEqual({head: {value: 3, next: {value: 2, next: {value: 1, next: null}}}});
  });

  test('should leave list empty', function(){
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    let newList = list.reverse();
    expect(list).toEqual({head: null});
  });

});
