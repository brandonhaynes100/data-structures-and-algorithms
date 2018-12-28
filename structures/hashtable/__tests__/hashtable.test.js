'use strict';

let myHashTable = require('../hashtable.js');



describe('Hash Table', () => {

  it('Instantiates with a size of 0', ()=> {
    let map = new Map();
    expect(map.size).toEqual(0);
  });
  
  // **add** takes in both the key and value. This method should hash the key and add the key and value pair to the table.
  describe('add', () => {
    
    it('hashes the key ', () => {
      let key = 'this is the key';
      let value = 'value desu';
    });
    
  });

  // **Find** takes in the key and returns the value from key/value pair.
  it('find', () => {

  });

  // **contains** takes in the key and returns if the key exists in the table already.
  it('contains', () => {

  });

  // **GetHash** takes in a key and returns the index in the array the key is stored.
  it('gethash', () => {

  });


});
