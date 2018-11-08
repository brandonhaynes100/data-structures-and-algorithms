'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.back = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    newNode.next = this.back;
    this.back = newNode;
    return this;
  }

  dequeue() {
    let secondToFront = this.back;
    while(secondToFront.next && secondToFront.next.next) {
      secondToFront = secondToFront.next;
    }
    let frontNode = secondToFront.next;
    secondToFront.next = null;
    return frontNode;
  }

  peek() {
    let curr = this.back;
    while(curr.next){
      curr = curr.next;
    }
    return curr;
  }
}

module.exports = Queue;