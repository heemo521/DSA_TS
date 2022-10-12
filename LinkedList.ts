export class Node {
  public value: unknown;
  public next: Node | null;

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  public head: Node | null;
  public tail: Node | null;
  public length: number;

  constructor(value?: unknown) {
    if (value === null || value === undefined) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return;
    }

    const node: Node = new Node(value);

    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  public append(value: unknown): Node {
    const node: Node = new Node(value);

    if (this.tail) this.tail.next = node;
    this.tail = node;

    if (!this.head) this.head = node;

    this.length++;

    return node;
  }

  public prepend(value: unknown): Node {
    const node: Node = new Node(value);

    node.next = this.head;
    this.head = node;

    if (!this.tail) this.tail = node;

    this.length++;

    return node;
  }

  public delete(value: unknown) {
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    if (!this.head) {
      this.tail = null;
      return;
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = curNode;
    }
  }

  // pops the head and returns it
  public deleteHead(): Node | null {
    if (!this.head) return null;

    const deletedNode = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = this.tail = null;
    }
    return deletedNode;
  }

  public toArray(): unknown[] {
    const elements = [] as unknown[];

    let curNode = this.head;

    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}
