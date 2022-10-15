export class TrieNode {
  public value: string;
  public children: TrieNode[];
  constructor(value: string) {
    this.value = value;
    this.children = Array(26);
  }
}

export class Trie {
  public root: TrieNode;
  constructor() {
    this.root = new TrieNode('');
  }

  public insert(key, value) {
    const root = this.root;

    for (let i = 0; i < key.length; i++) {
        const alphabetIndex = key[i].charCodeAt(0) - 97;
        if (!root.children[alphabetIndex])
    }
  }
}
