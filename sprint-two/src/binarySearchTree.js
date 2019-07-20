var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.minDepth = 1;
  this.maxDepth = 1;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
      this.setDepth();
    } else {
      this.insert.call(this.left, value);
      this.setDepth();
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);  
      this.setDepth();
    } else {
      this.insert.call(this.right, value);
      this.setDepth();
    }
  }
}

BinarySearchTree.prototype.setDepth = function() {
  if (this.left !== null && this.right !== null) {
    this.minDepth = Math.min(this.left.minDepth, this.right.minDepth) + 1;
    this.maxDepth = Math.max(this.left.maxDepth, this.right.maxDepth) + 1;
  } else if (this.left !== null && this.right === null) {
    this.minDepth = this.left.minDepth + 1;
    this.maxDepth = this.left.maxDepth + 1;
  } else if (this.right !== null && this.left === null) {
    this.minDepth = this.right.minDepth + 1;
    this.maxDepth = this.right.maxDepth + 1;
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

BinarySearchTree.prototype.orderFirstLog = function(cb) {
  if (this.left !== null) {
    this.depthFirstLog.call(this.left, cb);  
  } 
  cb(this.value);
  if (this.right !== null) {
    this.depthFirstLog.call(this.right, cb);  
  }
}

BinarySearchTree.prototype.breadthFirstLog = function(cb, arr) {
  if (arr === undefined) {
    arr =[];
  }
  cb(this.value);
  if (this.left !== null) {
    arr.push(this.left);
  }
  if (this.right !== null) {
    arr.push(this.right);
  }
  if (arr.length !== 0) {
    this.breadthFirstLog.call(arr[0], cb, arr.slice(1));
  }
}

// binarySearchTree = new BinarySearchTree(5);
// binarySearchTree.insert(2);
// binarySearchTree.insert(1);
// binarySearchTree.depthFirstLog(function(value){console.log(this.value, value);});
/*
 * Complexity: What is the time complexity of the above functions?
 */
