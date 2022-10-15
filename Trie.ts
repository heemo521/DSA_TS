export class TrieNode {
  public value: null | unknown;
  public children: TrieNode[];
  constructor() {
    this.value = null;
    this.children = Array(26); // Creates an empty array with 26 available children
  }
}

export class Trie {
  public root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  public insert(key: string, value: unknown) {
    let curNode = this.root;

    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97; // Position of the character in the alphabet. 'a'.charCodeAt(0) - 97 will return 0 and 'z' will return 25
      if (!curNode.children[alphabetIndex]) {
        const newNode = new TrieNode();
        curNode.children[alphabetIndex] = newNode;
      }
      curNode = curNode.children[alphabetIndex];
    }
    curNode.value = value;

    return curNode;
  }
}

const trie = new Trie();

trie.insert('a', 'apple');
trie.insert('ass', [',ax', 'fsdf']);
trie.insert('asking', 1234);

console.log(trie);
