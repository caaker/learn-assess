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

  reverseList() {
    let previous;
    let iter = this.first;
    while(iter) {

      // next node
      let next = iter.next;

      // iter.next will now point to the node behind it
      iter.next = previous;

      // save the current node as previous for use in the next iteration
      previous = iter;

      // move to the next node in the ll
      iter = next;
    }

    // finally swap first and last pointer
    this.swap();
  }

  swap() {
    let temp = this.first;
    this.first = this.last;
    this.last = temp;
  }

}

let ll = new LinkedList();
ll.addNode(1);ll.addNode(2);ll.addNode(3);
ll.reverseList();
