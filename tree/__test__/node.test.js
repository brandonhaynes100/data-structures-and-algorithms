'use strict';

let tree = require('../lib/node.js');

describe('Node', () => {

  it('constructor()', ()=> {
    let node = new Node();
    expect(node.head).toBeNull();
  });

  it('append()', ()=> {
    let node = new Tree();
    let initialValue = 'First One';
    node.append(initialValue);
    expect(node.head.value).toEqual(initialValue);

    let newValue = 'Soemthing Else';
    node.append(newValue);
    expect(node.head.value).toEqual(initialValue);

    let anotherOne = 'Another One';
    node.append(anotherOne);

    console.log(node);
    
  });

});
