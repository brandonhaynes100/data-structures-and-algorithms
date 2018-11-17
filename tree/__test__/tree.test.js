'use strict';

let tree = require('../lib/tree.js');

describe('Tree', () => {

  it('constructor()', ()=> {
    let tree = new Tree();
    expect(tree.head).toBeNull();
  });

  it('append()', ()=> {
    let tree = new Tree();
    let initialValue = 'First One';
    tree.append(initialValue);
    expect(tree.head.value).toEqual(initialValue);

    let newValue = 'Soemthing Else';
    tree.append(newValue);
    expect(tree.head.value).toEqual(initialValue);

    let anotherOne = 'Another One';
    tree.append(anotherOne);

    console.log(tree);
    
  });

});
