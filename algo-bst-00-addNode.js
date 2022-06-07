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
    this.addNode(15);this.addNode(5);this.addNode(7);this.addNode(3);this.addNode(20);this.addNode(13);
  }

  addNode(data) {
    const node = new Node(data);

    // base case
    // this.root is always populated with a node per constructor of a Binary tree

    // iterate
    let iter = this.root;
    while(iter) {
      if(iter.left && (node.data < iter.data)) {
        iter = iter.left;
      }
      if(!iter.left && (node.data < iter.data)) {
        iter.left = node;
        return node;
      }
      if(iter.right && (node.data >= iter.data)) {
        iter = iter.right;
      }
      if(!iter.right && (node.data >= iter.data)) {
        iter.right = node;
        return node;
      }
    }
  }

  printTree() {

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
