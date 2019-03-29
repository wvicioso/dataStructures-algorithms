const Node = require('./node.js');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head ? true : false;
  }

  peek() {
    return this.head.data ? this.head.data : null;
  }

  add(data) {
    let node = new Node(data);
    if (this.tail != null) {
      this.tail.next = node;
    }
    this.tail = node;
    if (this.head == null) {
      this.head = node;
    }
  }

  remove() {
    let data = this.head.data;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return data;
  }
}

module.exports = Queue;
