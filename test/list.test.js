'use strict';

const linkedList = require('../lib/list');
const Node = require('../lib/node.js');
const expect = require('expect');

describe('Test that our Node constructor is working', () => {
    const newNode = new Node(1337);
    it('Should have a this.value of the value we passed in', () => {
        expect(newNode.value).toEqual(1337);
    });

    it('this.next should have a value of null because we did not pass in a second value', () => {
        expect(newNode.next).toEqual(null);
    });

    it('Should have both .value and .next filled if we pass in 2 args', () => {
        const secondNode = new Node(1337, 1338);
        expect(secondNode.value).toEqual(1337);
        expect(secondNode.next).toEqual(1338);
    });

});

describe('Test appending a new value to linked list', () => {
    const LL = new linkedList();
    it('Should add "hello" to our currently empty LL list', () => {
        LL.append('hello');
        expect(LL.head.value).toEqual('hello');
    });
    it('The appended "hello" should have a next value of null', () => {
        expect(LL.head.next).toEqual(null);
    });
});

describe('Testing prepending a new value to linked list', () => {
    const LL = new linkedList();
    // append a value first to have something to compare after a prepend
    LL.append('append');

    it('Should prepend a value to the beginnig of LL', () => {
        LL.prepend('prepended');

        expect(LL.head.value).toEqual('prepended');
    });

    it('Should have a next value containing the next link, which has our "append', () => {

        expect(LL.head.next.value).toEqual('append');
    });
});

describe('Should remove a value from the list', () => {
    const LL = new linkedList();
    LL.append('first');
    LL.append('second');

    it('Should show that "actual first" is the first link', () => {
        expect(LL.head.value).toEqual('first');
    });

    it('Should remove our "second" from the list', () => {
        LL.remove(1);

        expect(LL.head.value).toEqual('first');
    });
});

describe('Testing our search feature', () => {
    const LL = new linkedList();
    LL.append('first');
    LL.append('second');

    it('Should find "first" within our linked list', () => {
        expect(LL.search('first').value).toEqual('first');
    });

    it('Should return null if we do not find a link', () => {
        expect(LL.search('this will return nothing')).toEqual(null);
    });
});