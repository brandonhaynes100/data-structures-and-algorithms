'use strict';

let tree = require('../lib/node.js');

describe('Node', () => {

  it('constructor()', ()=> {
    let list = new Tree();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {
    let list = new Tree();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Soemthing Else';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherOne = 'Another One';
    list.append(anotherOne);

    console.log(list);
    
  });

});
