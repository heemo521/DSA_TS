export class Node {
  public children: Node[];
  public value: unknown;
  public parent: Node | null;

  constructor(value: unknown, parentNode: Node | null = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  public addNode(value: unknown) {
    const node = new Node(value, this);
    const index = this.children.length - 1;

    this.children.push(node);

    return { node, index };
  }

  public removeNode(index: number) {
    this.children.splice(index, 1);
  }
}

export class Tree {
  public root: Node;
  constructor(rootValue: unknown) {
    this.root = new Node(rootValue);
  }
}

/*** Example: FILE SYSTEM ***/
// const filesystem = new Tree('/');
// const documentsNodeData = filesystem.root.addNode('/document');
// const gamesNodeData = filesystem.root.addNode('/games');
// documentsNodeData.node.addNode('results.txt');
// gamesNodeData.node.addNode('cod.exe');

// console.log(filesystem);
