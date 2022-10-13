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
      const index = this.children.length - 1;
      this.children.push(node);
      return { node, index };
    }
    const targetFolder = this.children.find(
      (node) => node.value === segments[0]
    );
    if (targetFolder) {
      targetFolder.addNode(segments.slice(1).join(''));
    } else {
      const createFolder = new Node(segments[0], this);
      createFolder.addNode(segments.slice(1).join(''));
    }
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

  public addFile(path: string) {
    return this.root.addNode(path);
  }

  public removeFile(path: string) {
    return this.root.addNode(path);
  }
}

/*** Example: FILE SYSTEM ***/
const filesystem = new Tree('/');
filesystem.addFile('/documents/personal/tax.docx');
filesystem.addFile('/games/cod.exe');
filesystem.addFile('/games/cod2.exe');
filesystem.removeFile('/games/cod.exe');
console.log(filesystem);
