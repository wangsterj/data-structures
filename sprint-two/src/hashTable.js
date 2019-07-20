

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var element = this._storage.get(index);
  var keyExists = false;
  var whereKeyExists;
  for (var i = 0; i < element.length; i++) {
    if (element[i][0] === k) {
      keyExists = true;
      whereKeyExists = i;
    }
  } 
  if (keyExists) {
    element[whereKeyExists][1] = v;
  } else {
    element.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  var element = this._storage.get(index);
  for (var i = 0; i < element.length; i++) {
    if (element[i][0] === k) {
      return element[i][1];  
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var element = this._storage.get(index);
  for (var i = 0; i < element.length; i++) {
    if (element[i][0] === k) {
      element.splice(i, 1)
    }
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


