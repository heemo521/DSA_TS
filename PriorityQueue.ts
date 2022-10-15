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

  public process() {
    if (!this.first) {
      return null;
    }
    const first = this.first;

    this.first = this.first.next || null;
    return first;
  }

  public print() {
    let count = 1;
    let currentNode = this.first;
    console.log('TO DO');

    while (currentNode) {
      console.log(
        `${count++}. ${currentNode.value} | Priority #${currentNode.priority}`
      );
      currentNode = currentNode.next;
    }
  }
}
const heap = [250, 197, 85, 101, 12, 40, 15];
//                 250
//               /     \
//            197       85
//           /  \      /  \
//         101  12   40    15

// parentIndex = Math.floor((childIndex + 1) / 2) - 1
// To find the parent of number 12,
// Math.floor((4 + 1) / 2) - 1 = 1  => heap[1] is 197

var queue = new PriorityQueue();
queue.insert('Clean up a room', 5);
queue.insert('Do taxes', 99);
queue.insert('Get a job', 1000000);
queue.insert('Learn to code', 105);
queue.print();
