var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var curr = 0;
  var end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    count ++;
    end ++;
  };

  someInstance.dequeue = function() {
    if (count !== 0) {
      count--;
      var temp = storage[curr];
      delete storage[curr];
      curr++;
      return temp;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
