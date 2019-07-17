var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceOf = {};
  instanceOf.count = 0;
  instanceOf.end = 0;
  instanceOf.curr = 0;
  instanceOf.storage = {};
  _.extend(instanceOf, queueMethods);
  return instanceOf;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.count++;
  this.end++;
};
queueMethods.dequeue = function() {
  if (this.count !== 0) {
    var temp = this.storage[this.curr];
    delete this.storage[this.curr];
    this.curr++;
    this.count--;
    return temp;
  }
};
queueMethods.size = function() {
  return this.count;
};


