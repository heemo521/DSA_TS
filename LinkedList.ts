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

  constructor(value?: unknown) {
    if (value === null || value === undefined) {
      this.head = null;
      this.tail = null;
      return;
    }

    const node: Node = new Node(value);

    this.head = node;
    this.tail = node;
  }

  public append(value: unknown): Node {
    const node: Node = new Node(value);

    if (this.tail) this.tail.next = node;
    this.tail = node;

    if (!this.head) this.head = node;

    return node;
  }

  public prepend(value: unknown): Node {
    const node: Node = new Node(value);

    node.next = this.head;
    this.head = node;

    if (!this.tail) this.tail = node;

    return node;
  }

  public insertAfter(value: unknown, referenceNode: Node) {
    const existingNode = this.find(referenceNode);

    if (existingNode) {
      const newNode: Node = new Node(value);
      newNode.next = existingNode.next;
      existingNode.next = newNode;
    }
  }

  public find(value: unknown) {
    if (!this.head) return null;

    let curNode = this.head;

    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }

    return null;
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
