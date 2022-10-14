class Node {
  public value: number | null;
  public left: Node | null;
  public right: Node | null;
  public parent: Node | null;

  constructor(value: number | null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  get leftDepth(): number {
    return this.left ? this.left.leftDepth + 1 : 0;
  }

  get rightDepth(): number {
    return this.right ? this.right.rightDepth + 1 : 0;
  }
  get depth(): number {
    return Math.max(this.leftDepth, this.rightDepth);
  }

  get balanceFactor(): number {
    return this.leftDepth - this.rightDepth;
  }

  public add(value: number) {
    if (!this.value) {
      this.value = value;
      return;
    }
    if (value > this.value) {
      if (this.right) {
        this.right.add(value);
        return;
      }
      const newNode = new Node(value);
      this.right = newNode;
      newNode.parent = this;
      return;
    }

    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
        return;
      }
      const newNode = new Node(value);
      newNode.parent = this;
      this.left = newNode;
      return;
    }
  }

  public remove(value: number) {
    const identifiedNode = this.find(value);

    if (!identifiedNode) {
      return;
    }
    // If we the target node to remove does not have any children, then we can just remove it from its parent
    if (!identifiedNode.left && !identifiedNode.right) {
      identifiedNode.parent?.removeNode(identifiedNode);
      return;
    }

    if (identifiedNode.left && identifiedNode.right) {
      const replacementNode = identifiedNode.right.findNext();
      if (
        replacementNode.value &&
        replacementNode.value !== identifiedNode.right.value
      ) {
        this.remove(replacementNode.value);
        identifiedNode.value = replacementNode.value;
        identifiedNode.left.parent = identifiedNode;
        identifiedNode.right.parent = identifiedNode;
      } else {
        identifiedNode.value = identifiedNode.right.value;
        identifiedNode.right = identifiedNode.right.right;
        identifiedNode.left.parent = identifiedNode;

        if (identifiedNode.right) identifiedNode.right.parent = identifiedNode;
      }
    }

    const childNode = identifiedNode.left || identifiedNode.right;

    if (childNode) {
      identifiedNode.left = childNode.left;
      identifiedNode.right = childNode.right;
      identifiedNode.value = childNode.value;
    }
  }

  private removeNode(node: Node) {
    if (this.left && this.left === node) {
      this.left = null;
      return;
    }
    if (this.right && this.right === node) {
      this.right = null;
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

  public findNext(): Node {
    if (!this.left) return this;

    return this.left.findNext();
  }
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
  public find(value: number): Node | undefined {
    return this.root.find(value);
  }
}

const AVLTree = new Tree();
AVLTree.add(1);
AVLTree.add(2);
AVLTree.add(3);
console.log(AVLTree); // right heavy unbalanced tree
