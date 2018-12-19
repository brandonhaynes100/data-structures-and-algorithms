'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(nodeContents) {

    let node = new Node(nodeContents);

  }

  prepend(nodeContents) {

    let node = new Node(nodeContents);

  }

  reverse() {
    return this;
  }

  remove(offset) {
    return this;
  }

  serialize() {    
    return this;
  }

  deserialize() {
    return this;
  }

  mergeList(listOne, listTwo) {
    let oneCurr = listOne.head;
    let twoCurr = listTwo.head;
    
    while(oneCurr && twoCurr) {
  
      // if list one ends first or at the same time
      if(!oneCurr.next) {
        oneCurr.next = twoCurr;
        return listOne;

      // if list 2 ends first
      } else if(!twoCurr.next) {
        twoCurr.next = oneCurr.next;
        oneCurr.next = twoCurr;
        return listOne;
      }

      // point one at the value in two
      oldOneCurrNext = oneCurr.next;
      oneCurr.next = twoCurr;
    
      // point two at the value after one
      oldTwoCurrNext = twoCurr.next;
      twoCurr.next = oldOneCurrNext;

      // increment both to the next values
      oneCurr = oldOneCurrNext;
      twoCurr = oldTwoCurrNext;
    }
  }
}

module.exports = LinkedList;