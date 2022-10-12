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
    // we start by saying while this head exists and this head has the target value
    // reassign head to the next value
    // if the head is null, there won't be any iteration
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    // now we check if the current head is null
    // if it is, we have nothing else to delete;
    // so stop the iteration,
    // we also reassign tail to null as well as
    // as there is no head, there is no tails
    if (!this.head) {
      this.tail = null;
      return;
    }

    // by here we know the head is a node
    // so we assign curNode  to the head
    let curNode = this.head;

    // this while loop only runs if there is next node
    // because we already know the current node does not have the target value

    while (curNode.next) {
      // if the next node has the target value, then we skip this node and attach
      // current node's next pointer to the item after the next item
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        // else we need to assign current node to the next node so we can continue the iteration
        curNode = curNode.next;
      }
    }
    // finally if the tail is the target value,
    // we need to update the tail pointer to the curNode
    // which is guaranteed to be the last node after this iteration
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

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('hello there');
linkedList1.append('Max');
linkedList1.append('Max');
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.prepend('First value!');
linkedList1.prepend('First value!');

console.log(linkedList1.toArray());

linkedList1.delete('Max');
linkedList1.delete('First value!');
linkedList1.delete(18.51);

console.log(linkedList1.toArray());
