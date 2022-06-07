class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val = 0) {
    let node = new Node(val);
    this.first = node;
    this.last = node;
  }
  addNode(val = 0) {
    const node = new Node(val);
    this.last.next = node;
    this.last = node;
  }
  printNodes() {
    let iter = this.first;
    while(iter) {
      console.log(iter.val);
      iter = iter.next;
    }
  }
}

let ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.printNodes();
