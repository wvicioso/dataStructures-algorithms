class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.data) {
      if (this.left == null) {
        this.left = new BinaryTreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinaryTreeNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }

/*

  delete() {

  }

*/

  contains(value) {
    if (value == this.data) {
      return true;
    } else if (value <= data) {
      if (this.left == null) {
        return false;
      } else {
        this.left.conatins(value);
      }
    } else {
      if (this.right == null) {
        return false;
      } else {
        this.right.conatins(value);
      }
    }
  }

  printInOrder() {
    if (this.left != null) {
      this.left.printInOrder();
    }
    console.log(this.data)
    if (this.right != null) {
      this.right.printInOrder();
    }
  }
}

module.exports = BinaryTreeNode;
