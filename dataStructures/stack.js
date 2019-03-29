const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top ? false : true;
  }

  peek() {
    return this.top.data ? this.top.data : null;
  }

  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let data = this.top.data;
    this.top = this.top.next;
    return data;
  }
}

module.exports = Stack;
