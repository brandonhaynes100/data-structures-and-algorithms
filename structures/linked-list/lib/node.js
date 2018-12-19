'use strict';

class Node {
  constructor(nodeContents) {
    this.contents = nodeContents;
    this.next = null;
  }
}

module.exports = Node;