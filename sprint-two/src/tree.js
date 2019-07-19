var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.value = value;
  this.children.push(newTree);
};

treeMethods.contains = function(target, tree) {
  if (tree === undefined) {
    tree = this;
  }
  if (target !== tree.value) {
    var isFound = false;
    if (tree.children.length !== 0) {
      for (var i = 0; i <tree.children.length; i++) {
        isFound = isFound || tree.contains(target, tree.children[i]);
      }  
    }
    return isFound;
  } else { //found
    return true;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
