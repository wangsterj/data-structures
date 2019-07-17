var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.count = 0;

  // someInstance.count = 0; 

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

// stackMethods.storage = {};

stackMethods.push = function(value) {
  // console.log(this.count);
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count !== 0) {
    var temp = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return temp;
  }
};

stackMethods.size = function() {
  return this.count;
};

