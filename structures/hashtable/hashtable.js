'use strict';
const util = require('util');

class Hashmap {

  constructor(capacity=16) {
    this.capacity = capacity;
    this.size = 0;
    this.map = new Array(capacity);
  }

  hash(key) {
    let sumHash = key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0);
    let index = sumHash % this.capacity;
    return index;
  }

  add(key,value) {
    let hash = this.hash(key);
    console.log(hash, key, value);

    //TODO
    // Please use a LL instead of an array!
    if(! this.map[hash] ) { this.map[hash] = []; }

    //TODO
    // We used an object here, but this could be anything...
    this.map[hash].push({[key]:value});
  }

  //TODO
  /**
   * Find a key in the hashmap and return its value
   * @param key
   * @return {string}
   */
  find(key) {
    return 'default return value';
  }

  //TODO
  // takes in the key and returns if the key exists in the table already.
  /**
   * Find a key in the hashmap and return its value
   * @param key
   * @return {boolean}
   */
  contains(key) {
    return false;
  }

  //TODO
  /**
   * Hash a key and return the resulting index
   * @param key
   * @return {integer}
   */
  getHash(key) {
    return 0;
  }

  /**
   * Delete a key from the map
   * @param key
   */
  delete(key) {

  }

  /**
   * Replace a value for a key in a hashmap
   * @param key
   * @param newValue
   */
  update(key,newValue) {

  }

  serialize() {

  }

  deserialize() {

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