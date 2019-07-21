var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.minDepth = 1;
  this.maxDepth = 1;
  this.parent = null;
  this.rebalanceFlag = false;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
      this.left.parent = this;
      this.setDepth();
    } else {
      this.insert.call(this.left, value);
      this.setDepth();
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
      this.right.parent = this;
      this.setDepth();
    } else {
      this.insert.call(this.right, value);
      this.setDepth();
    }
  }
  if (this.rebalanceFlag && this.parent === null && this.maxDepth>this.minDepth*2) {
    this.rebalance();
    console.log("HI")
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

// sets the min/max depths
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

BinarySearchTree.prototype.orderFirstLog = function(cb) {
  if (this.left !== null) {
    this.orderFirstLog.call(this.left, cb);  
  } 
  cb(this.value);
  if (this.right !== null) {
    this.orderFirstLog.call(this.right, cb);  
  }
}

BinarySearchTree.prototype.treeToOrderedArray = function () {
  var array =[];
  var func = function(value) { array.push(value); };
  this.orderFirstLog(func);
  return array;
}

BinarySearchTree.prototype.rebalance = function() {
  var array = this.treeToOrderedArray();
  var rebalanceHelper = function(arr) {
    var valIndex = Math.floor(arr.length/2);
    var val = arr[valIndex];
    startingNode.insert(val);
    if (arr.length == 2) {
      startingNode.insert(arr[0]);
      startingNode.insert(arr[1]);
    } else if (arr.length == 1){
      startingNode.insert(arr[0]);
    } else {
      rebalanceHelper(arr.slice(0,valIndex));
      rebalanceHelper(arr.slice(valIndex+1));
    }
  }
  var valIndex = Math.floor(array.length/2);
  var val = array[valIndex];
  var startingNode = new BinarySearchTree(val);
  array.splice(valIndex,1);
  
  rebalanceHelper(array.slice(0,valIndex));
  rebalanceHelper(array.slice(valIndex+1));
  return startingNode;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
