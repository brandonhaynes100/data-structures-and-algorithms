'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    let newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    return this;
  }

  pop() {
    let poppedNode = this.top;
    this.top = this.top.next;
    return poppedNode;
  }

  peek() {
    return this.top;
  }
}

module.exports = Stack;