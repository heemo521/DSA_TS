export class HashTable {
  private _buckets: unknown[];
  constructor() {
    this._buckets = Array(100).fill(null);
  }

  set(value: string | number) {
    this._buckets[Math.floor(Math.random() * 100)] = value;
  }
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
