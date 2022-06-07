class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = new Node(data || 0);
  }

  makeTree() {
    this.insertNode(3);this.insertNode(2);this.insertNode(4);this.insertNode(10);this.insertNode(7);this.insertNode(15)
  }

  insertNode(data) {
    let iter = this.root;
    let node = new Node(data);
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

  depthFirst() {
    function recurse(node) {
      if(node === null) {
        return node;
      }

      // pre order

      recurse(node.left);

      // in order

      recurse(node.right);

      // post order

    }
    recurse(this.root);
  }

  // this iterative version is always pre-order
  depthFirstIterative() {
    const stack = [];
    let iter = this.root;
    while(iter) {
      // pre-order
      if(iter.right) {
        stack.push(iter.right);
      }
      if(iter.left) {
        stack.push(iter.left);
      }
      // post-order
      iter = stack.pop();
    }
  }
}

const tree = new BinaryTree(5);
tree.makeTree();
tree.depthFirst();

/*

Time Complexity
--------------------
  -

Notes | Links
--------------------
https://www.cs.usfca.edu/~galles/visualization/DFS.html
https://www.youtube.com/watch?v=fKgZiCXb6zs

*/


