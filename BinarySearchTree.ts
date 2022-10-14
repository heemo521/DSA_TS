class Node {
  public value: number | null;
  public left: Node | null;
  public right: Node | null;

  constructor(value: number | null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public add(value: number) {
    if (!this.value) {
      this.value = value;
      return;
    }
    if (value > this.value) {
      const newNode = new Node(value);
      if (this.right) {
        this.right.add(value);
        return;
      }
      this.right = newNode;
      return;
    }

    if (value < this.value) {
      const newNode = new Node(value);
      if (this.left) {
        this.left.add(value);
        return;
      }
      this.left = newNode;
      return;
    }
  }

  public find(value: number): Node | undefined {
    if (this.value === value) return this;

    if (this.value && this.value < value && this.right)
      return this.right.find(value);

    if (this.value && this.value > value && this.left)
      return this.left.find(value);

    return undefined;
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

const SearchTree = new Tree();

SearchTree.add(10);
SearchTree.add(2);
SearchTree.add(5);
SearchTree.add(13);
SearchTree.add(23);

console.log('added', SearchTree);

SearchTree.remove(2);

console.log(SearchTree);
