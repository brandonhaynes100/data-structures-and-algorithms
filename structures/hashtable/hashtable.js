'use strict';
const util = require('util');

class Hashmap {

  constructor(capacity=16) {
    this.capacity = capacity;
    this.size = 0;
    this.map = new Array(capacity);
  }

  /**
   * Hashes the key and adds the key/value pair to the map
   * @param key
   * @param value
   */
  add(key,value) {
    let hash = this.getHash(key);
    // console.log(hash, key, value);

    //TODO
    // Please use a LL instead of an array!
    if(! this.map[hash] ) { 
      this.map[hash] = []; 
      this.size = this.size + 1;
    }

    // We used an object here, but this could be anything...
    this.map[hash].push({key: key, value: value});
  }

  //TODO
  /**
   * Find a key in the hashmap and return its value
   * @param key
   * @return {string}
   */
  find(key) {
    if( this.contains(key) ) {
      let bucketContents = this.map[this.getHash(key)];
      return bucketContents[0]['value'];
    }
    return 'key not present';
  }

  //TODO
  // takes in the key and returns if the key exists in the table already.
  /**
   * Find a key in the hashmap and return its value
   * @param key
   * @return {boolean}
   */
  contains(key) {
    let bucketContents = this.map[this.getHash(key)];
    if( bucketContents !== undefined ) {
      for( let i = 0; i < bucketContents.length; i++){
        if( bucketContents[i] ) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Hash a key and return the resulting index
   * @param key
   * @return {integer}
   */
  getHash(key) {
    let sumHash = key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0);
    let index = sumHash % this.capacity;
    return index;
  }

}

let myhash = new Hashmap(16);
myhash.add('John','Boss');
myhash.add('Cathy','The Real Boss');
myhash.add('Zach','Kid 1');
myhash.add('Allie','Kid 2');
myhash.add('Rosie','Dog');
myhash.add('Cat','TA');
myhash.add('Justin','Student');
myhash.add('Jason','Student');
myhash.add('Ben','Student');
myhash.add('Timea','Student');
myhash.add('Jen','Student');
myhash.add('Khalil','Student');
myhash.add('Michael','Student');
myhash.add('Ovi','Student');

console.log(util.inspect(myhash,{showHidden:false,depth:null}));

console.log('contains(John) should be T: ' + myhash.contains('John'));
console.log('contains(lol) should be F: ' + myhash.contains('lol'));
console.log('find(John) should return Boss: ' + myhash.find('John'));
console.log('find(lol) should return error message: ' + myhash.find('lol'));
console.log(myhash.map[myhash.getHash('')]);