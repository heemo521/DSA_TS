export class Node {
  public children: Node[];
  public value: unknown;
  public parent: Node | null;

  constructor(value: unknown, parentNode: Node | null = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  public addNode(value: string) {
    const segments = value.split('/');

    if (segments.length === 0) return;
    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);

      return { node, index: this.children.length - 1 };
    }

    const findFolder = this.children.find((node) => node.value === segments[0]);

    if (findFolder) findFolder.addNode(segments.slice(1).join('/'));
    else {
      const createdFolder = new Node(segments[0], this);

      createdFolder.addNode(segments.slice(1).join('/'));
      this.children.push(createdFolder);

      return { node: createdFolder, index: this.children.length - 1 };
    }
  }

  public removeNode(path: string): Node[] | undefined {
    const segments = path.split('/');

    if (segments.length === 0) return undefined;

    if (segments.length === 1) {
      const targetNodeIndex = this.children.findIndex(
        (node) => node.value === segments[0]
      );

      if (targetNodeIndex === -1) return undefined;
      return this.children.splice(targetNodeIndex, 1);
    }

    if (segments.length > 1) {
      const findFolder = this.children.find(
        (node) => node.value === segments[0]
      );

      if (!findFolder) return undefined;
      return findFolder.removeNode(segments.slice(1).join('/'));
    }
  }
  // // DEPTH-FIRST
  // public find(value: string): Node | undefined {
  //   for (const child of this.children) {
  //     if (child.value === value) return child;

  //     const nestedChildNode: Node | undefined = child.find(value);
  //     if (nestedChildNode) return nestedChildNode;
  //   }
  // }
  // Breadth-FIRST
  public find(value: string): Node | undefined {
    for (const child of this.children) {
      if (child.value === value) return child;
    }

    for (const child of this.children) {
      const nestedChildNode: Node | undefined = child.find(value);
      if (nestedChildNode) return nestedChildNode;
    }
  }
}

export class Tree_FileSystem {
  public root: Node;

  constructor(rootValue: unknown) {
    this.root = new Node(rootValue);
  }

  public addFile(path: string) {
    return this.root.addNode(path);
  }

  public removeFile(path: string) {
    return this.root.removeNode(path);
  }

  public find(value: string) {
    if (this.root.value === value) return this.root;

    return this.root.find(value);
  }
}

// /*** Example: FILE SYSTEM ***/
// const filesystem = new Tree_FileSystem('/');
// filesystem.addFile('documents/personal/tax.docx');
// filesystem.addFile('games/cod.exe');
// filesystem.addFile('games/cod2.exe');
// console.log(filesystem.removeFile('games/cod.exe'));
// console.log(filesystem.removeFile('games/codfdsf.exe'));
// console.log(filesystem.removeFile('games/cod2.exe'));

// console.log(filesystem.find('personal'));
