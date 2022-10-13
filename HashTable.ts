export class HashTable {
  private _buckets: unknown[];
  public size: number;
  constructor() {
    this.size = 1000;
    this._buckets = Array(this.size).fill(null);
  }

  private _hash(key: string) {
    let hash = 0;
    for (const char of key) hash += char.charCodeAt(0);
    return hash % this.size;
  }

  public set(key: string | number, value: unknown) {
    key = String(key);
    const keyHash = this._hash(key);
    this._buckets[keyHash] = value;
  }

  public get(key: string) {
    const keyHash = this._hash(key);
    return this._buckets[keyHash];
  }

  public showInfo() {
    for (const key in this._buckets) {
      if (this._buckets[key] !== null) {
        console.log(`{${key}: ${this._buckets[key]}}`);
      }
    }
  }
}

// Exam,ple
const word = 'I am Iron Man!';

function firstFirstRep(str: string) {
  const table = new HashTable();
  for (const char of str) {
    const value = table.get(char);
    if (value) return value;
    table.set(char, true);
  }
  return null;
}

const result = firstFirstRep(word);

console.log('The expected result is "I" and the actual result is ' + result);
