class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinaryTree {

  constructor(data) {
    this.root = new Node(data);
  }

  makeTree() {
    this.insert(15);this.insert(5);this.insert(7);this.insert(3);this.insert(20);this.insert(13);
  }

  insert(data) {
    let iter = this.root;
    let node = new Node(data);
    while(iter) {
      if(iter.left && (node.data < iter.data)) {
        iter = iter.left;
      }
      if(!iter.left && (node.data < iter.data)) {
        iter.left = node;
        return;
      }
      if(iter.right && (node.data >= iter.data)) {
        iter = iter.right;
      }
      if(!iter.right && (node.data >= iter.data)) {
        iter.right = node;
        return;
      }
    }
  }

  invertTree() {
    function invert(node) {
      if(node === null) {
        return node;
      }
      invert(node.left);
      invert(node.right);
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      return node;
    }
    invert(this.root);
  }
}

const tree = new BinaryTree(10);
tree.makeTree();


/*

Time Complexity
--------------------
  -

Notes | Links
--------------------
https://www.youtube.com/watch?v=fKgZiCXb6zs

*/
