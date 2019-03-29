class Heap {
  constructor() {
    this.items = [];
  }

  getLeftChildIndex(parentIndex) {
    return (parentIndex * 2) + 1;
  }

  getRightChildIndex(parentIndex) {
    return (parentIndex * 2) + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.items.length ? true : false;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.items.length ? true : false;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0 ? true : false;
  }

  leftChild(parentIndex) {
    return this.items[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.items[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    return this.items[this.getParentIndex(childIndex)];
  }

  swap(idxOne, idxTwo) {
    let valueOne = this.items[idxOne];
    this.items[idxOne] = this.items[idxTwo];
    this.items[idxTwo] = valueOne;
  }

  peek() {
    return this.items[0];
  }

  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.items.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.items.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerIndex = this.getRightChildIndex();
      }
      if (this.items[index] < this.items[smallerIndex]) {
        break;
      } else {
        this.swap(index, smallerIndex);
      }
      index = smallerIndex;
    }
  }
}

module.exports = Heap;
