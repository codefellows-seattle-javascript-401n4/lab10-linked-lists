'use strict';

const list = require('./lib/list.js');

require('./lib/list.js');
require('./lib/append.js');
require('./lib/prepend.js');
require('./lib/remove.js');
require('./lib/reverse');

describe('list.js' function(){
  let list = new list();

  test('error', function(){
    list.list(1);
    expect(list).toEqual({head : {value : 1, next : null}})
  });

  test('error', function(){
    list.list(2);
    expect(list).toEqual({head : {value : 2, next : value}})
  });


describe('append.js' function(){
  let list = new list();

  test('error', function(){
    list.append(1);
    expect(list).toEqual({head : {value : 1, next : null}})
  });

  test('error', function(){
    list.append(2);
    expect(list).toEqual({head : {value : 2, next : value}})
  });


  describe('prepend.js' function(){
    let list = new list();

    test('error', function(){
      list.prepend(1);
      expect(list).toEqual({head : {value : 1, next : null}})
    });

    test ('error', function(){
      list.prepend(2);
      expect(list).toEqual({head : {value : 2, next : value}})
    });


    describe('remove.js' function(){

      test('error', function(){
        let list = new list();
        list.append(1);
        list.append(3);
        list.remove(3);
        list.append(2);
        list.append(3);
        expect(list).toEqual({head : {value : 1, next : null}})
      });


    describe('reverse', function(){

      test('error', function(){
        let list = new list();
        spyOn(console, 'log');
        list.reverse();
        expect(console.log).toHaveBeenCalledWith('error');
      });

      test('error', function(){
        let list = new list();
        list.append(1);
        list.append(2);
        list.append(3);
        let newList = list.reverse();
        expect(newList).toEqual({head : {value : 3, next : {value : 2, next : {value : 1, next : null}}}})
      });

      test('error', function(){
        let list = new list();
        list.append(1);
        list.append(2);
        list.append(3);
        let newList = list.reverse();
        expect(list).toEqual({head : null})
      }
    });

  }}
}};
