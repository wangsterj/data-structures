var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.end = 0;
  instance.curr = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count !== 0) {
    var temp = this.storage[this.curr];
    delete this.storage[this.curr];
    this.count--;
    this.curr++;
    return temp;
  }
};


queueMethods.size = function() {
  return this.count;
};