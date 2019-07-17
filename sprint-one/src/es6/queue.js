class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
    this.end = 0;
    this.curr = 0;
  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
    this.count++;
  }

  dequeue() {
    if (this.count !== 0) {
      var temp = this.storage[this.curr];
      delete this.storage[this.curr];
      this.count--;
      this.curr++;
      return temp;
    }
  }

  size() {
    return this.count;
  }
}
