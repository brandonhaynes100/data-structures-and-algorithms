'use strict';

let tree = require('../lib/tree.js');

describe('Tree', () => {

  it('constructor()', ()=> {
    let tree = new tree();
    expect(tree.root).toBeNull();
  });

  it('insert()', ()=> {
    let tree = new tree();
    let initialValue = 'First One';
    tree.insert(initialValue);
    expect(tree.root.value).toEqual(initialValue);
  });

});
