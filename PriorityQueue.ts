export class Node {
  public value: unknown;
  public next: Node | null;
  public priority: number;
  constructor(value: unknown, priority: number) {
    this.value = value;
    this.next = null;
    this.priority = priority;
  }
}

class PriorityQueue {
  public first: Node | null;

  constructor() {
    this.first = null;
  }

  public insert(value: unknown, priority: number) {
    const newNode = new Node(value, priority);
    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      let currentNode = this.first;

      while (currentNode.next && priority < currentNode.next.priority) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }
}

const queue = new PriorityQueue();
queue.insert('Clean up a room', 5);
queue.insert('Do taxes', 99);
queue.insert('Learn to code', 105);

console.log(queue);
