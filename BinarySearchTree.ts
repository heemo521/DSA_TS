class Node {
  public value: number | null;
  public left: Node | null;
  public right: Node | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  public add(value: number) {
    if (!this.value) {
      this.value = value;
      return;
    }
    if (value < this.value) {
      const newNode = new Node(value);
      this.right = newNode;
      return;
    }

    if (value > this.value) {
      const newNode = new Node(value);
      this.left = newNode;
      return;
    }
  }

  public find(value: number) {
    if (this.value === value) return this;

    if (this.value < value && this.right) {
      return this.right.find(value);
    }
    if (this.value > value && this.right) {
      return this.left.find(value);
    }
  }
  public remove(value: number) {}
}

export class Tree {
  public root: Node;
  constructor() {
    this.root = new Node(null);
  }
  public add(value: number) {
    this.root.add(value);
  }
  public remove(value: number) {
    this.root.remove(value);
  }
}
