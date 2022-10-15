export class Node {
  public value: unknown;
  public next: Node | null;
  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}

class PriorityQueue {
  public first: Node | null;

  constructor() {
    this.first = null;
  }

  public insert(value: unknown) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
    } else {
      let currentNode = this.first;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
}
