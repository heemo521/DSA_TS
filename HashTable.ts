export class HashTable {
  private _buckets: unknown[];
  public size: number;
  constructor() {
    this.size = 1000;
    this._buckets = Array(this.size).fill(null);
  }

  private _hash(key: string) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  public set(value: string | number) {
    const keyHash = this._hash(String(value));
    this._buckets[keyHash] = value;
  }

  public get(key: string) { 
    const keyHash = this._hash(String(key))
    return this._buckets[keyHash];
}

//Hashing => key to index

// const word = 'I am Iron Man!';

// function firstFirstRep(str: string) {
//   const table = new HashTable();
//   for (const char of str) {
//     if (char in table) return char;
//     table[char] = 1;
//   }
//   return null;
// }

// const result = firstFirstRep(word);

// console.log('The expected result is "I" and the actual result is ' + result);
