'use strict';

const expect = require('expect');
const Element = require('../lib/element.js');

describe('Element constructor function', function(){

  it('should create a new instance of Element', function(){

    let elementTest = new Element('two');

    expect(elementTest).toEqual({value: 'two', next: null});

  });

});
