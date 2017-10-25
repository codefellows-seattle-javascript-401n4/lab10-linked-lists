'use strict';

// write at least three test assertions for each method of the Singly Linked List Data Structure

// organize your tests into appropriate describe/it blocks for test output readability

//test helper modules
const expect = require('expect');
const assert = require('assert');

//modules to be tested
const link = require('../lib/link.js');
const Node = require('../lib/node.js');

//remove this line later.
let expectedOutcome;

//helper functions used in testing.
let helper = {

//creates a new node for each arg... I think.
  create: (...args) => {
    args.forEach(arg => {
      new Node(arg,)
    })
 }

//counts the number of objects in the linked list.
  count: (node)=> {
    let counter = 0;
    while(node.next !== null){
      counter++;
      node = node.next;
    }
    return counter;
  },
}

// these are garbage tests. They don't work, I just like to have the
//scaffolding in.
describe('link', function() {

  describe('remove', function() {
    it('correctly applied a callback to the array', function() {
      assert.equal(expectedOutcome, link.remove());
    });
    it('returns an array', function() {
      assert.equal(expectedOutcome, link.remove());
    });
    it('returns an array', function() {
      assert.equal(expectedOutcome, link.remove());
    });
  });

  describe('append', function() {
    it('correctly applied a callback to the array', function() {
      assert.equal(expectedOutcome, link.append());
    });
    it('returns an array', function() {
      assert.equal(expectedOutcome, link.append());
    });
    it('correctly applied a callback to the array', function() {
      assert.equal(expectedOutcome, link.append());
    });
  });

  describe('prepend', function() {
    it('correctly applied a callback to the array', function() {
      assert.equal(expectedOutcome, link.append());
    });
    it('returns an array', function() {
      assert.equal(expectedOutcome, link.append());
    });
    it('correctly applied a callback to the array', function() {
      assert.equal(expectedOutcome, link.append());
    });
  });

  describe('reverse', function() {
    it('The first and last nodes are correctly reordered.', function() {
      assert.equal(expectedOutcome, link.reverse());
    });
    it('The data structure is intact', function() {
      assert.equal(expectedOutcome, link.reverse());
    });
  });
});
