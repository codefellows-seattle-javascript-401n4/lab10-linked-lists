'use strict';

const List = require('../lib/list.js');
const expect = require('expect');

describe('Linked List Testing', () => {
    let newList = new List('hello');
    // test that not passing a node gives us a null
    it('Should return null if we do not pass in a node', () => {
        let newList = new List();
        expect(newList.head).toEqual(null);
    });

    // prepend
    it('Should prepend a second node to the head', () => {
        newList.prepend('secondHello');
        expect(newList['head']['value']).toEqual('secondHello');
    });

    // append
    it('Should append to head', () => {
        console.log(newList);
        newList.append('thirdHello');
        console.log(newList);
    });

});