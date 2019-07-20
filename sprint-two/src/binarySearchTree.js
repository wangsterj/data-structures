var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.insert.call(this.left, value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);    
    } else {
      this.insert.call(this.right, value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if (this.value > value) {
    if (this.value === value) {
      return true;
    } else {
      return this.contains.call(this.left, value)
    }
  } else if (this.value < value) {
    if (this.value === value) {
      return true;    
    } else {
      return this.contains.call(this.right, value);
    }
  } else if (this.value === value) {
    return true;
  }
  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.depthFirstLog.call(this.left, cb);  
  } 
  if (this.right !== null) {
    this.depthFirstLog.call(this.right, cb);  
  }
}

// binarySearchTree = new BinarySearchTree(5);
// binarySearchTree.insert(2);
// binarySearchTree.insert(1);
// binarySearchTree.depthFirstLog(function(value){console.log(this.value, value);});
/*
 * Complexity: What is the time complexity of the above functions?
 */
